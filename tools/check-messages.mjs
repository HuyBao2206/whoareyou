#!/usr/bin/env node
// Kiểm tra dữ liệu Thần số học: đủ mọi cặp chỉ số × con số, mỗi mục đủ trường, đúng số lượng.
// Cấu trúc: review/huong-dan-viet-than-so-hoc.md.
// Chạy: node tools/check-messages.mjs              (mọi chỉ số)
//       node tools/check-messages.mjs lifePath     (chỉ một chỉ số, khi đang viết dở từng lô)

import { MESSAGES, PERSONAL_MONTH, ORIGINS } from '../assets/js/modules/numerology/messages.js';
import { VALID } from '../assets/js/modules/numerology/calc.js';

const EXPECT = {
  lifePath: VALID.lifePath.all,
  personalYear: VALID.personalYear,
  expression: VALID.name,
  soul: VALID.name,
  personality: VALID.name,
};
const ONLY = process.argv.slice(2);

const errors = [];
const sentences = (s) => (s.match(/[.?!…]["”’)]?(?=\s|$)/g) || []).length;
const isStr = (v) => typeof v === 'string' && v.trim().length > 0;
const isList = (v, min, max) => Array.isArray(v) && v.length >= min && v.length <= max && v.every(isStr);
const sentRange = (at, name, s, min, max) => {
  if (!isStr(s)) return errors.push(`${at}: thiếu ${name}`);
  const c = sentences(s);
  if (c < min || c > max) errors.push(`${at}: ${name} có ${c} câu (cần ${min}–${max})`);
};
const listItems = (at, name, v, min, max) => {
  if (!isList(v, min, max)) return errors.push(`${at}: ${name} cần ${min}–${max} ý`);
  v.forEach((x, i) => sentences(x) > 2 && errors.push(`${at}: ${name}[${i}] dài hơn 2 câu`));
};

const seen = new Map();
let total = 0;

for (const [index, nums] of Object.entries(EXPECT)) {
  if (ONLY.length && !ONLY.includes(index)) continue;
  const group = MESSAGES[index];
  if (!group) {
    errors.push(`Thiếu cả nhóm chỉ số "${index}"`);
    continue;
  }
  const extra = Object.keys(group).map(Number).filter((n) => !nums.includes(n));
  if (extra.length) errors.push(`${index}: có số không dùng tới ${extra.join(', ')}`);

  for (const n of nums) {
    const m = group[n];
    const at = `${index}[${n}]`;
    if (!m) {
      errors.push(`${at}: thiếu mục`);
      continue;
    }
    total++;
    if (!isStr(m.title) || m.title.split(/\s+/).length > 5) errors.push(`${at}: title cần 2–5 chữ`);
    if (!isList(m.keywords, 3, 5)) errors.push(`${at}: keywords cần 3–5 từ khoá`);
    sentRange(at, 'summary', m.summary, 3, 5);
    sentRange(at, 'note', m.note, 2, 3);
    if (isStr(m.summary)) {
      if (seen.has(m.summary)) errors.push(`${at}: summary trùng với ${seen.get(m.summary)}`);
      seen.set(m.summary, at);
    }

    if (index === 'personalYear') {
      listItems(at, 'doMore', m.doMore, 2, 3);
      listItems(at, 'doLess', m.doLess, 2, 3);
      for (const k of ['strengths', 'watchOut', 'advice', 'fields', 'theme', 'byQuarter']) if (k in m) errors.push(`${at}: Năm cá nhân không dùng trường ${k}`);
    } else {
      listItems(at, 'strengths', m.strengths, 2, 3);
      listItems(at, 'watchOut', m.watchOut, 2, 3);
      listItems(at, 'advice', m.advice, 2, 3);
      const needFields = index === 'lifePath' || index === 'expression';
      if (needFields && !isList(m.fields, 3, 6)) errors.push(`${at}: fields cần 3–6 lĩnh vực`);
      if (!needFields && 'fields' in m) errors.push(`${at}: chỉ Số chủ đạo và Số sứ mệnh mới có fields`);
    }
  }
}

if (!ONLY.length || ONLY.includes('personalMonth')) {
  for (let n = 1; n <= 9; n++) {
    const m = PERSONAL_MONTH[n];
    if (!m) { errors.push(`personalMonth[${n}]: thiếu mục`); continue; }
    if (!isStr(m.title)) errors.push(`personalMonth[${n}]: thiếu title`);
    sentRange(`personalMonth[${n}]`, 'text', m.text, 1, 2);
  }
}
if (!ONLY.length || ONLY.includes('origins')) {
  for (const n of VALID.lifePath.all) {
    if (!isStr(ORIGINS[n])) { errors.push(`origins[${n}]: thiếu`); continue; }
    const c = sentences(ORIGINS[n]);
    if (c < 1 || c > 2) errors.push(`origins[${n}]: có ${c} câu (cần 1–2)`);
  }
}

console.log(`Đã kiểm tra ${total} mục thông điệp${ONLY.length ? ` (${ONLY.join(', ')})` : ''}.`);
if (errors.length) {
  console.log(`\nLỗi (${errors.length}):`);
  errors.forEach((e) => console.log('  ✗ ' + e));
  process.exit(1);
}
console.log('Đủ mọi mục, không mục nào thiếu trường.');
