#!/usr/bin/env node
// Quét văn phong cho mọi chữ hiển thị trên web, theo mục 3 và 5.4 của docs/BRIEF-v3.md.
// Chạy: node tools/check-copy.mjs            (bảng lỗi và cảnh báo)
//       node tools/check-copy.mjs --errors   (chỉ in lỗi)
//
// Hai nguồn chữ:
//   1. MODULES: file nội dung JS (import trực tiếp, đi qua mọi chuỗi). Mỗi object có trường `summary`
//      được coi là một "thẻ" (một mục kết quả): hạn mức từ hạn chế, dấu "!", "không chỉ… mà còn…" tính theo thẻ.
//      Các thẻ cùng cha là một "nhóm" (vd 13 mục Số chủ đạo): kiểm tra lặp khuôn mở bài, kết bài.
//   2. FILES: HTML và file giao diện JS, lấy chữ bằng biểu thức chính quy. Hạn mức tính theo file.
//
// Lỗi (exit 1) phải sửa hết trước khi coi một lô là xong. Cảnh báo cần đọc lại bằng mắt.

import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ONLY_ERRORS = process.argv.includes('--errors');

/* ---------- Danh sách file ---------- */

// File nội dung có cấu trúc. Thêm file nội dung của thẻ mới vào đây.
const MODULES = [
  'assets/js/modules/numerology/messages.js',
  'assets/js/modules/numerology/content.js',
  'assets/js/modules/zodiac/signs.js',
  'assets/js/modules/zodiac/animals.js',
  'assets/js/modules/zodiac/content.js',
  'assets/js/modules/personality/traits.js',
  'assets/js/modules/personality/content.js',
  'assets/js/modules/personality/items.js',
  'assets/js/modules/career/types.js',
  'assets/js/modules/career/items.js',
  'assets/js/modules/career/pairs.js',
  'assets/js/modules/career/content.js',
  'assets/js/modules/future/content.js',
  'assets/js/modules/future/jobs/index.js',
  'assets/js/modules/skills/content.js',
  'assets/js/modules/skills/data.js',
  'assets/js/config.js',
];

// File HTML và file giao diện (chữ nằm lẫn trong code).
const FILES = [
  'index.html',
  '404.html',
  'assets/js/main.js',
  'assets/js/core/router.js',
  'assets/js/core/overlay.js',
  'assets/js/core/theme.js',
  'assets/js/modules/numerology/view.js',
  'assets/js/modules/numerology/results.js',
  'assets/js/modules/numerology/calc.js',
  'assets/js/modules/zodiac/view.js',
  'assets/js/modules/zodiac/calc.js',
  'assets/js/modules/personality/view.js',
  'assets/js/modules/personality/calc.js',
  'assets/js/modules/career/view.js',
  'assets/js/modules/future/view.js',
  'assets/js/modules/skills/view.js',
  'assets/js/core/date-input.js',
  'assets/js/core/sources.js',
  'assets/js/core/share-image.js',
];

// Câu được HUB cho phép giữ nguyên (mục 3.9, H2). So khớp sau khi chuẩn hoá khoảng trắng.
const ALLOW_LINES = ['Khám phá bản thân qua những thông điệp từ vũ trụ :))))'];

// Chuỗi kỹ thuật, không phải câu chữ (bỏ qua hẳn).
const SKIP_KEYS = new Set(['en', 'scaleEn', 'slug', 'glyph', 'size', 'status', 'id', 'key', 'calc', 'url', 'email', 'bio', 'facebook', 'tiktok', 'lifePathMethod', 'yMode']);

/* ---------- Quy tắc ---------- */

// Mục 3.5: cấm trong nội dung.
const BANNED = [
  'hành trình', 'khám phá bản thân', 'bí ẩn', 'vũ trụ gửi gắm', 'vũ trụ', 'năng lượng', 'rung động', 'tần số',
  'thăng hoa', 'bứt phá', 'lan toả', 'lan tỏa', 'đánh thức', 'khai mở', 'nội tại', 'bản thể',
  'phiên bản tốt nhất', 'tiềm năng vô hạn', 'toả sáng', 'tỏa sáng', 'rực rỡ', 'kỳ diệu', 'diệu kỳ', 'tuyệt vời',
  'trong thế giới hiện đại', 'thế giới hiện đại ngày nay', 'hãy cùng', 'đừng bỏ lỡ', 'tóm lại', 'nói cách khác', 'hãy nhớ rằng',
  // khẳng định định mệnh (mục 3.2, 4.6)
  'định mệnh', 'số phận', 'chắc chắn sẽ', 'số xấu', 'xui xẻo', 'đổi đời',
  // giật gân, tâm tình (chuẩn viết của ba thẻ kiến thức: Nghề nghiệp, Kỹ năng, Giá trị sống)
  'hot', 'hái ra tiền', 'cơ hội vàng', 'xu hướng tất yếu', 'cướp việc', 'bạn ơi', 'đừng lo', 'siêu hot', 'khát nhân lực',
];
// Thuật ngữ chuyên ngành chứa từ bị cấm: gỡ ra trước khi quét từ cấm.
const TERMS = ['năng lượng tái tạo', 'kỹ thuật năng lượng', 'năng lượng gió', 'năng lượng mặt trời'];
// Mục 3.5: hạn chế, tối đa 2 lần mỗi thẻ.
const LIMITED = ['sâu sắc', 'tinh tế', 'trọn vẹn', 'chữa lành', 'giá trị', 'trải nghiệm', 'kết nối', 'chạm', 'thấu hiểu'];
// Mục 3.2 và mục 2 của brief: cụm dịch hoặc kết hợp từ sai.
const CALQUES = [
  ['rộng rãi thời gian', 'dành thời gian, chịu bỏ công'], ['rộng rãi công sức', 'chịu bỏ công'],
  ['chạm tới', 'khiến người ta để tâm, nói trúng lòng'], ['chạm được', 'khiến người ta để tâm'],
  ['cho phép bản thân', 'cứ, không ngại'], ['cho phép mình', 'cứ, không ngại'],
  ['mang lại năng lượng', 'làm không khí vui lên'], ['nạp năng lượng', '(đổi cách nói)'],
  ['đời sống nội tâm phong phú', 'hay nghĩ ngợi'], ['đời sống bên trong', 'hay nghĩ ngợi'],
  ['không gian an toàn', 'chỗ để nói thật mà không sợ bị chê'], ['phiên bản tốt hơn', '(bỏ)'],
  ['đóng vai trò quan trọng', '(nói thẳng vai trò)'], ['điều này cho thấy', '(lược, hoặc “nghĩa là”)'],
  ['đặt chân xuống đất', '(đổi cách nói)'], ['có hình dạng rõ', '(đổi cách nói)'], ['lên lịch nghỉ ngơi', '(đổi cách nói)'],
  ['có nghiên cứu đứng sau', 'có cơ sở nghiên cứu'], ['hướng vào bên trong', 'sống nội tâm'],
  ['kết nối với', 'quen, làm thân, giữ liên lạc'], ['tạo được không gian', '(đổi cách nói)'],
];
// Cụm hành chính chen vào giọng gần gũi (mục 3.1b).
const BUREAUCRATIC = ['nhằm mục đích', 'trên cơ sở', 'tiến hành', 'đối với việc'];
// Trường lời khuyên: không mở bằng “Bạn + động từ” (mục 3.2, 5.4).
const ADVICE_KEYS = new Set(['advice', 'doMore', 'doLess']);
// Từ rào đón: tối đa 1 lần mỗi đoạn (mục 3.9).
const HEDGES = ['thường', 'có thể', 'đôi khi'];
// Từ ở đầu câu kết hay thành khuôn.
const END_PATTERNS = [
  ['Mặt trái', /^Mặt trái\b/], ['Bài học', /^Bài học\b/], ['Thử thách', /^Thử thách\b/], ['Có điều', /^Có điều\b/],
  ['Điểm yếu', /^Điểm yếu\b/], ['Điều cần', /^Điều cần\b/], ['Đi kèm', /^Đi kèm\b/], ['Cái giá', /^Cái giá\b/],
  ['Nhưng', /^Nhưng\b/], ['Tuy vậy', /^Tuy (vậy|nhiên)\b/],
];

const DASH_OK = /—\s*HUB/g;
const EMOJI = /\p{Extended_Pictographic}/gu;
const EMOJI_OK = new Set(['©']);

/* ---------- Tiện ích ---------- */

const issues = [];
const add = (level, where, rule, text) => issues.push({ level, where, rule, text: (text || '').replace(/\s+/g, ' ').slice(0, 90) });
const low = (t) => t.normalize('NFC').toLowerCase();
const count = (hay, needle) => {
  const re = new RegExp(`(^|[^\\p{L}])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=$|[^\\p{L}])`, 'gu');
  return (hay.match(re) || []).length;
};
const sentencesOf = (t) => t.split(/(?<=[.?!…])["”’)]?\s+(?=[\p{Lu}“"0-9])/u).map((s) => s.trim()).filter(Boolean);
const isAllowed = (t) => ALLOW_LINES.some((a) => t.replace(/\s+/g, ' ').trim().startsWith(a));

/** Các kiểm tra trên một chuỗi. key: tên trường (nếu có). unit: object đếm hạn mức của thẻ hoặc file. */
function checkString(text, where, key, unit) {
  if (!text || isAllowed(text)) return;
  if (text !== text.normalize('NFC')) add('lỗi', where, 'Chuỗi chưa chuẩn NFC', text);
  const l = low(text);

  const lt = TERMS.reduce((acc, t) => acc.split(t).join(' '), l);
  for (const b of BANNED) if (count(lt, b)) { add('lỗi', where, `Từ cấm “${b}”`, text); break; }
  for (const [c, fix] of CALQUES) if (l.includes(c)) add('lỗi', where, `Cụm dịch “${c}” → ${fix}`, text);
  for (const b of BUREAUCRATIC) if (l.includes(b)) add('cảnh báo', where, `Cụm hành chính “${b}”`, text);
  for (const w of LIMITED) unit.limited[w] = (unit.limited[w] || 0) + count(l, w);
  unit.khongChi += (l.match(/không chỉ[^.?!]*mà còn/g) || []).length;
  unit.bang += (text.match(/!(?!=)/g) || []).length;

  if ((text.replace(DASH_OK, '').match(/—/g) || []).length) add('lỗi', where, 'Dấu “—” trong câu văn (chỉ dùng cho chữ ký “— HUB”)', text);
  const emo = (text.match(EMOJI) || []).filter((e) => !EMOJI_OK.has(e));
  if (emo.length) add('lỗi', where, `Emoji ${emo.join(' ')}`, text);

  const ss = sentencesOf(text);
  // Mở đoạn bằng câu hỏi tu từ.
  if (ss.length > 1 && ss[0].endsWith('?') && ss[0].split(/\s+/).length >= 3) add('lỗi', where, 'Mở đoạn bằng câu hỏi', text);
  // Hơn 2 câu liền nhau bắt đầu bằng “Bạn”.
  let run = 0;
  for (const s of ss) {
    run = /^Bạn\b/.test(s) ? run + 1 : 0;
    if (run === 3) add('lỗi', where, 'Hơn 2 câu liền nhau mở bằng “Bạn”', text);
  }
  if (ADVICE_KEYS.has(key) && /^Bạn\s/.test(text)) add('lỗi', where, 'Câu khuyên mở bằng “Bạn + động từ”', text);
  if (ADVICE_KEYS.has(key) && /^[^,.]{2,25}, bạn [\p{Ll}]/u.test(text) && !/^(Khi|Nếu|Trước|Lần|Mỗi|Sau)/.test(text)) {
    add('lỗi', where, 'Câu khuyên kiểu dịch “…, bạn + động từ”', text);
  }
  if (['strengths', 'watchOut', 'advice', 'doMore', 'doLess'].includes(key) && ss.length > 2) add('lỗi', where, 'Ý gạch đầu dòng dài hơn 2 câu', text);
  if (['strengths', 'watchOut', 'advice', 'doMore', 'doLess'].includes(key) && /^\*\*[^*]+:\*\*/.test(text)) add('lỗi', where, 'Gắn nhãn in đậm đầu dòng', text);

  // Từ rào đón dày trong một đoạn.
  for (const h of HEDGES) {
    const n = count(l, h);
    if (n >= 2) add('cảnh báo', where, `“${h}” ×${n} trong một đoạn`, text);
  }
  const hedgeTotal = HEDGES.reduce((a, h) => a + count(l, h), 0);
  if (hedgeTotal >= 3) add('cảnh báo', where, `Từ rào đón dày (${hedgeTotal} lần)`, text);
  if (ss.length && count(l, 'có thể') / ss.length > 0.5 && count(l, 'có thể') >= 2) add('lỗi', where, 'Mật độ “có thể” cao bất thường', text);

  // Liệt kê từ 3 vế trở lên: tối đa 1 lần mỗi đoạn.
  const lists = ss.filter((s) => /(?:[^,]+,){2,}[^,]*(?: và | hay | hoặc )/.test(s) || (s.match(/,/g) || []).length >= 3).length;
  if (lists >= 2) add('cảnh báo', where, `${lists} câu liệt kê dài trong một đoạn`, text);

  // Câu cụt kiểu ghi chú.
  if (ss.length >= 2) for (const s of ss) if (s.replace(/[.?!”“"]/g, '').trim().split(/\s+/).length <= 2 && /\.$/.test(s)) add('cảnh báo', where, `Câu cụt “${s}”`, text);

  // Viết hoa để gây chú ý.
  const caps = text.match(/\b[A-ZÀ-Ỹ]{4,}\b/gu)?.filter((w) => !['RIASEC', 'HUB', 'IPIP', 'NEO', 'WEF', 'ILO', 'IAU'].includes(w) && !/^[A-Z]+$/.test(w));
  if (caps?.length) add('cảnh báo', where, `Chữ in hoa ${caps.join(', ')}`, text);
}

/** Tiêu đề viết hoa mọi chữ (mục 3.6). Bỏ qua tên thương hiệu. */
function checkTitleCase(text, where) {
  if (/Thấu Hiểu & Phát Triển Bản Thân|Thấu Hiểu &amp; Phát Triển Bản Thân/.test(text)) return;
  const words = text.replace(/[“”"(),.:·]/g, ' ').split(/\s+/).filter((w) => /^\p{L}/u.test(w));
  if (words.length >= 3 && words.every((w) => /^\p{Lu}/u.test(w))) add('lỗi', where, 'Tiêu đề viết hoa mọi chữ', text);
}

const newUnit = () => ({ limited: {}, khongChi: 0, bang: 0 });
function closeUnit(unit, where) {
  for (const [w, n] of Object.entries(unit.limited)) if (n > 2) add('lỗi', where, `Từ hạn chế “${w}” ×${n} (tối đa 2)`, '');
  if (unit.khongChi > 1) add('lỗi', where, `“không chỉ… mà còn…” ×${unit.khongChi} (tối đa 1)`, '');
  if (unit.bang > 1) add('lỗi', where, `Dấu chấm than ×${unit.bang} (tối đa 1)`, '');
}

/* ---------- 1. File nội dung có cấu trúc ---------- */

const firstWords = (t, n = 3) => low(t).replace(/[“”"(),.:]/g, '').split(/\s+/).slice(0, n).join(' ');
const endKind = (t) => {
  const ss = sentencesOf(t);
  const last = ss[ss.length - 1] || '';
  return END_PATTERNS.find(([, re]) => re.test(last))?.[0] || null;
};

/** Kiểm tra lặp khuôn trong một nhóm thẻ (mục 3.3). */
function checkGroup(groupPath, cards) {
  const fields = ['summary', 'note', 'origin'];
  for (const f of fields) {
    const items = cards.filter(([, c]) => typeof c[f] === 'string');
    if (items.length < 3) continue;
    const open = {};
    const end = {};
    for (const [k, c] of items) {
      (open[firstWords(c[f])] ||= []).push(k);
      const e = endKind(c[f]);
      if (e) (end[e] ||= []).push(k);
    }
    for (const [w, ks] of Object.entries(open)) if (ks.length > 2) add('lỗi', `${groupPath}.*.${f}`, `Lặp khuôn mở “${w}…” ở ${ks.length} mục (${ks.join(', ')})`, '');
    for (const [w, ks] of Object.entries(end)) if (ks.length > 2) add('lỗi', `${groupPath}.*.${f}`, `Lặp khuôn kết “${w}…” ở ${ks.length} mục (${ks.join(', ')})`, '');
  }
  // Tên gọi theo một khuôn chung (mục 2.6).
  const heads = {};
  for (const [k, c] of cards) if (typeof c.title === 'string') (heads[c.title.split(/\s+/)[0]] ||= []).push(k);
  for (const [w, ks] of Object.entries(heads)) if (ks.length > 3) add('lỗi', `${groupPath}.*.title`, `Tên gọi lặp chữ đầu “${w}” ở ${ks.length} mục`, '');
  // Lời khuyên: không quá 2 câu khuyên trong nhóm mở cùng 2 chữ đầu… tính trên toàn nhóm cho mỗi trường.
  for (const f of ['advice', 'doMore', 'doLess', 'strengths', 'watchOut']) {
    const all = cards.flatMap(([, c]) => (Array.isArray(c[f]) ? c[f] : []));
    if (all.length < 6) continue;
    const open2 = {};
    for (const s of all) open2[firstWords(s, 2)] = (open2[firstWords(s, 2)] || 0) + 1;
    for (const [w, n] of Object.entries(open2)) if (n / all.length > 0.25 && n > 3) add('cảnh báo', `${groupPath}.*.${f}`, `${n}/${all.length} ý mở bằng “${w}”`, '');
  }
}

function walk(value, path, key, unit, file) {
  if (typeof value === 'string') {
    if (SKIP_KEYS.has(key)) return;
    // Tên bài trong ngăn nguồn giữ nguyên cách viết gốc, không xét văn phong.
    if (key === 'title' && /SOURCES/.test(path)) return;
    // Chỉ xét chuỗi trông như chữ tiếng Việt.
    if (!/[\p{L}]{2,}/u.test(value) || (!/\s/.test(value) && value.length < 3)) return;
    checkString(value, `${file} ${path}`, key, unit);
    // Tên bài trong nguồn tham khảo giữ nguyên cách viết gốc (tiếng Anh hay viết hoa mọi chữ).
    if ((key === 'title' || key === 'nameVi') && !/SOURCES/.test(path)) checkTitleCase(value, `${file} ${path}`);
    return;
  }
  if (typeof value === 'function' || value == null) return;
  if (Array.isArray(value)) {
    // Mảng các "thẻ" (object có summary, vd danh sách nghề): xét như một nhóm, mỗi thẻ một hạn mức riêng.
    const isCard = (v) => v && typeof v === 'object' && !Array.isArray(v) && typeof v.summary === 'string';
    if (value.length >= 2 && value.every(isCard)) {
      checkGroup(`${file} ${path}`, value.map((v, i) => [v.id || String(i), v]));
      return value.forEach((v, i) => {
        const u = newUnit();
        const p = `${path}[${v.id || i}]`;
        walk(v, p, key, u, file);
        closeUnit(u, `${file} ${p}`);
      });
    }
    return value.forEach((v, i) => walk(v, `${path}[${i}]`, key, unit, file));
  }
  if (typeof value !== 'object') return;

  const entries = Object.entries(value);
  const cards = entries.filter(([, v]) => v && typeof v === 'object' && !Array.isArray(v) && typeof v.summary === 'string');
  if (cards.length >= 2) checkGroup(`${file} ${path}`, cards);
  for (const [k, v] of entries) {
    const p = path ? `${path}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v) && typeof v.summary === 'string') {
      const u = newUnit();
      walk(v, p, k, u, file);
      closeUnit(u, `${file} ${p}`);
    } else {
      walk(v, p, k, unit, file);
    }
  }
}

for (const file of MODULES) {
  let mod;
  try {
    mod = await import(pathToFileURL(join(ROOT, file)).href);
  } catch (e) {
    add('lỗi', file, `Không đọc được file: ${e.message}`, '');
    continue;
  }
  const unit = newUnit();
  for (const [k, v] of Object.entries(mod)) walk(v, k, k, unit, file);
  closeUnit(unit, file);
}

/* ---------- 2. HTML và file giao diện ---------- */

const lineOf = (src, idx) => src.slice(0, idx).split('\n').length;

function extract(file, src) {
  const out = [];
  if (file.endsWith('.html')) {
    const cleaned = src
      .replace(/<script[\s\S]*?<\/script>/gi, (m) => m.replace(/[^\n]/g, ' '))
      .replace(/<style[\s\S]*?<\/style>/gi, (m) => m.replace(/[^\n]/g, ' '))
      .replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));
    let m;
    const attr = /\s(content|alt|aria-label|title|placeholder)="([^"]+)"/g;
    while ((m = attr.exec(cleaned))) if (/\s/.test(m[2]) && /[\p{L}]{2,}/u.test(m[2])) out.push({ text: m[2], line: lineOf(src, m.index) });
    const head = /<(h[1-6]|title)\b[^>]*>([\s\S]*?)<\/\1>/g;
    while ((m = head.exec(cleaned))) out.push({ text: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(), line: lineOf(src, m.index), heading: true });
    const text = />([^<]+)</g;
    while ((m = text.exec(cleaned))) {
      const t = m[1].replace(/\s+/g, ' ').trim();
      if (t && /[\p{L}]{2,}/u.test(t)) out.push({ text: t, line: lineOf(src, m.index) });
    }
  } else {
    const noComments = src
      .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
      .replace(/(^|[^:'"`\\])\/\/.*$/gm, (m, p) => p + ' '.repeat(m.length - p.length));
    const str = /'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g;
    let m;
    while ((m = str.exec(noComments))) {
      let t = m[1] ?? m[2] ?? m[3] ?? '';
      t = t.replace(/\$\{[^}]*\}/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (!/\s/.test(t) || !/[a-zA-ZÀ-ỹđĐ]{2,}/.test(t)) continue;
      if (!/[À-ỹđĐ]/.test(t)) continue;
      out.push({ text: t, line: lineOf(src, m.index) });
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
  const unit = newUnit();
  for (const { text, line, heading } of extract(file, src)) {
    checkString(text, `${file}:${line}`, null, unit);
    if (heading) checkTitleCase(text, `${file}:${line}`);
  }
  closeUnit(unit, file);
}

/* ---------- Báo cáo ---------- */

const errs = issues.filter((i) => i.level === 'lỗi');
const warns = issues.filter((i) => i.level === 'cảnh báo');
const esc = (s) => s.replace(/\|/g, '\\|');
const table = (rows) => {
  console.log('| Vị trí | Quy tắc | Trích |');
  console.log('|---|---|---|');
  rows.forEach((r) => console.log(`| ${esc(r.where)} | ${esc(r.rule)} | ${esc(r.text)} |`));
};

console.log(`Quét văn phong: ${MODULES.length} file nội dung, ${FILES.length} file giao diện.`);
if (!ONLY_ERRORS && warns.length) {
  console.log(`\n### Cảnh báo (${warns.length}), cần đọc lại\n`);
  table(warns);
}
if (errs.length) {
  console.log(`\n### Lỗi (${errs.length})\n`);
  table(errs);
  process.exit(1);
}
console.log('\nKhông có lỗi văn phong.');
