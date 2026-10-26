#!/usr/bin/env node
// Quét văn phong cho mọi chữ hiển thị trên web (mục 3 của brief).
// Chạy: node tools/check-copy.mjs
// Lỗi (exit 1): cụm từ bị cấm, dấu "!" hoặc "—" bất thường, emoji ngoài danh sách cho phép,
//               chuỗi chưa chuẩn NFC, đoạn mở đầu bằng câu hỏi tu từ, lời khẳng định định mệnh.
// Cảnh báo: câu quá ngắn kiểu ghi chú, "không chỉ… mà còn…" lặp lại, liệt kê ba tính từ.
// Đọc lại cả phần cảnh báo; script chỉ bắt được dấu hiệu, không thay được việc tự đọc.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const FILES = [
  'index.html',
  '404.html',
  'assets/js/config.js',
  'assets/js/main.js',
  'assets/js/core/router.js',
  'assets/js/core/overlay.js',
  'assets/js/modules/numerology/content.js',
  'assets/js/modules/numerology/messages.js',
  'assets/js/modules/numerology/view.js',
  'assets/js/modules/numerology/results.js',
  'assets/js/modules/numerology/calc.js',
];

// Cụm từ cấm: sáo rỗng, "văn AI", và khẳng định định mệnh.
const BANNED = [
  'hành trình', 'khám phá bản thân', 'đầy thú vị', 'bí ẩn', 'vũ trụ', 'gửi gắm', 'chìa khoá', 'chìa khóa',
  'mở ra cánh cửa', 'cánh cửa', 'đánh thức', 'tiềm năng vô hạn', 'thế giới hiện đại', 'hãy cùng', 'đừng bỏ lỡ',
  'tóm lại', 'nói cách khác', 'tuyệt vời', 'lung linh', 'kỳ diệu', 'diệu kỳ', 'thần kỳ', 'toả sáng', 'tỏa sáng',
  'bùng nổ', 'năng lượng tích cực', 'phiên bản tốt nhất', 'vươn tới thành công', 'định mệnh', 'số phận',
  'chắc chắn sẽ', 'sẽ thất bại', 'chắc chắn giàu', 'số xấu', 'con số xấu', 'xui xẻo', 'đổi đời',
];
// Cụm nên tránh nhưng không chặn hẳn.
const SOFT = ['khám phá', 'chữa lành', 'không chỉ', 'nhé!', 'cực kỳ', 'vô cùng'];

// Dấu "—" chỉ được dùng trong chữ ký "— HUB".
const DASH_OK = /—\s*HUB/g;
// Emoji duy nhất được phép: dòng easter egg.
const EMOJI_OK = ['👀', '©'];
const EMOJI = /\p{Extended_Pictographic}/gu;

const errors = [];
const warns = [];

const lineOf = (src, idx) => src.slice(0, idx).split('\n').length;

/** Lấy các đoạn chữ người đọc nhìn thấy. */
function extract(file, src) {
  const out = [];
  if (file.endsWith('.html')) {
    // Bỏ script/style/comment, giữ text và các thuộc tính hiển thị.
    const cleaned = src
      .replace(/<script[\s\S]*?<\/script>/gi, (m) => ' '.repeat(m.length))
      .replace(/<style[\s\S]*?<\/style>/gi, (m) => ' '.repeat(m.length))
      .replace(/<!--[\s\S]*?-->/g, (m) => ' '.repeat(m.length));
    const attr = /\s(?:content|alt|aria-label|title|placeholder)="([^"]+)"/g;
    let m;
    while ((m = attr.exec(cleaned))) out.push({ text: m[1], line: lineOf(src, m.index) });
    const text = />([^<]+)</g;
    while ((m = text.exec(cleaned))) {
      const t = m[1].replace(/\s+/g, ' ').trim();
      if (t) out.push({ text: t, line: lineOf(src, m.index) });
    }
  } else {
    // Bỏ comment trước khi lấy chuỗi.
    const noComments = src.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' ')).replace(/(^|[^:'"`])\/\/.*$/gm, (m, p) => p + ' '.repeat(m.length - p.length));
    const str = /'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g;
    let m;
    while ((m = str.exec(noComments))) {
      let t = m[1] ?? m[2] ?? m[3] ?? '';
      // Bỏ HTML và biểu thức ${} trong template.
      t = t.replace(/\$\{[^}]*\}/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      // Chỉ giữ chuỗi trông như câu chữ tiếng Việt (có khoảng trắng và chữ cái có dấu hoặc từ thường gặp).
      if (!/\s/.test(t) || !/[a-zA-ZÀ-ỹđĐ]{2,}/.test(t)) continue;
      if (!/[À-ỹđĐ]/.test(t) && !/\b(bạn|của|và|là)\b/i.test(t)) continue;
      out.push({ text: t, line: lineOf(src, m.index), raw: m[0] });
    }
  }
  return out;
}

for (const file of FILES) {
  let src;
  try {
    src = readFileSync(join(ROOT, file), 'utf8');
  } catch {
    continue;
  }
  const where = (l) => `${file}:${l}`;
  let khongChi = 0;

  for (const { text, line, raw } of extract(file, src)) {
    if ((raw ?? text) !== (raw ?? text).normalize('NFC')) errors.push(`${where(line)}  Chuỗi chưa chuẩn NFC: “${text.slice(0, 60)}”`);
    const low = text.normalize('NFC').toLowerCase();

    for (const b of BANNED) if (low.includes(b)) errors.push(`${where(line)}  Cụm bị cấm “${b}”: “${text.slice(0, 90)}”`);
    for (const s of SOFT) if (low.includes(s)) warns.push(`${where(line)}  Nên tránh “${s}”: “${text.slice(0, 90)}”`);
    if (low.includes('không chỉ')) khongChi++;

    const dashes = (text.match(/—/g) || []).length - (text.match(DASH_OK) || []).length;
    if (dashes > 0) errors.push(`${where(line)}  Dấu “—” ngoài chữ ký HUB: “${text.slice(0, 90)}”`);

    if (/!(?!=)/.test(text)) errors.push(`${where(line)}  Dấu chấm than: “${text.slice(0, 90)}”`);

    const emo = (text.match(EMOJI) || []).filter((e) => !EMOJI_OK.includes(e));
    if (emo.length) errors.push(`${where(line)}  Emoji ${emo.join(' ')}: “${text.slice(0, 60)}”`);

    // Đoạn văn mở đầu bằng câu hỏi tu từ.
    const first = text.split(/(?<=[.?!])\s/)[0];
    if (first.endsWith('?') && first.split(/\s+/).length >= 3 && text.length > first.length + 5) {
      errors.push(`${where(line)}  Mở đầu đoạn bằng câu hỏi: “${first.slice(0, 90)}”`);
    }

    // VIẾT HOA để gây chú ý (bỏ qua tên viết tắt như HUB, RIASEC, A–Z).
    const caps = text.match(/\b[A-ZÀ-Ỹ]{4,}\b/g)?.filter((w) => !['RIASEC', 'DANG', 'THUY', 'BAO', 'HUY', 'HUB'].includes(w));
    if (caps && caps.length) warns.push(`${where(line)}  Chữ in hoa: ${caps.join(', ')}`);

    // Câu cụt kiểu ghi chú: câu ≤ 2 từ đứng riêng trong đoạn nhiều câu.
    const sentences = text.split(/(?<=[.?!])\s+/).filter(Boolean);
    if (sentences.length >= 2) {
      for (const s of sentences) {
        const words = s.replace(/[.?!”“"]/g, '').trim().split(/\s+/);
        if (words.length <= 2 && /[.]$/.test(s)) warns.push(`${where(line)}  Câu cụt “${s}” trong: “${text.slice(0, 70)}”`);
      }
    }

    // Liệt kê ba tính từ ngắn liền nhau, vd "năng động, phóng khoáng và thú vị."
    const triple = text.match(/(\b[\p{L}]+(?: [\p{L}]+)?), (\b[\p{L}]+(?: [\p{L}]+)?)(?:,| và) (\b[\p{L}]+(?: [\p{L}]+)?)[.]/gu);
    if (triple) warns.push(`${where(line)}  Có thể là liệt kê ba tính từ: “${triple[0]}”`);
  }
  if (khongChi > 2) warns.push(`${file}  “không chỉ” xuất hiện ${khongChi} lần`);
}

const rel = relative(process.cwd(), ROOT) || '.';
console.log(`Quét văn phong trong ${FILES.length} file (${rel})`);
if (warns.length) {
  console.log(`\nCảnh báo (${warns.length}), cần đọc lại:`);
  warns.forEach((w) => console.log('  · ' + w));
}
if (errors.length) {
  console.log(`\nLỗi (${errors.length}):`);
  errors.forEach((e) => console.log('  ✗ ' + e));
  process.exit(1);
}
console.log('\nKhông có lỗi văn phong.');
