#!/usr/bin/env node
// Kiểm tra messages.js: đủ mọi cặp chỉ số × con số, mỗi mục đủ trường và đúng số lượng.
// Chạy: node tools/check-messages.mjs

import { MESSAGES } from '../assets/js/modules/numerology/messages.js';
import { VALID } from '../assets/js/modules/numerology/calc.js';

const EXPECT = {
  lifePath: VALID.lifePath.all,
  personalYear: VALID.personalYear,
  expression: VALID.name,
  soul: VALID.name,
  personality: VALID.name,
};

const errors = [];
const sentences = (s) => (s.match(/[.?!…]["”’)]?(?=\s|$)/g) || []).length;
const isStr = (v) => typeof v === 'string' && v.trim().length > 0;
const isList = (v, min, max) => Array.isArray(v) && v.length >= min && v.length <= max && v.every(isStr);

const seenSummaries = new Map();
let total = 0;

for (const [index, nums] of Object.entries(EXPECT)) {
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
    if (!isStr(m.title)) errors.push(`${at}: thiếu title`);
    if (!isList(m.keywords, 3, 5)) errors.push(`${at}: keywords cần 3–5 từ khoá`);
    if (!isStr(m.summary)) errors.push(`${at}: thiếu summary`);
    else {
      const c = sentences(m.summary);
      if (c < 3 || c > 5) errors.push(`${at}: summary có ${c} câu (cần 3–5)`);
      if (seenSummaries.has(m.summary)) errors.push(`${at}: summary trùng với ${seenSummaries.get(m.summary)}`);
      seenSummaries.set(m.summary, at);
    }

    if (index === 'personalYear') {
      if (!isStr(m.theme)) errors.push(`${at}: thiếu theme`);
      if (!isList(m.doMore, 2, 5)) errors.push(`${at}: doMore cần 2–5 ý`);
      if (!isList(m.doLess, 2, 5)) errors.push(`${at}: doLess cần 2–5 ý`);
      if (!isList(m.byQuarter, 4, 4)) errors.push(`${at}: byQuarter cần đúng 4 quý`);
      for (const k of ['strengths', 'watchOut', 'advice', 'fields']) if (k in m) errors.push(`${at}: Năm cá nhân không dùng trường ${k}`);
    } else {
      if (!isList(m.strengths, 3, 3)) errors.push(`${at}: strengths cần đúng 3 ý`);
      if (!isList(m.watchOut, 2, 3)) errors.push(`${at}: watchOut cần 2–3 ý`);
      if (!isList(m.advice, 2, 3)) errors.push(`${at}: advice cần 2–3 ý`);
      const needFields = index === 'lifePath' || index === 'expression';
      if (needFields && !isList(m.fields, 2, 8)) errors.push(`${at}: thiếu fields (gợi ý lĩnh vực)`);
      if (!needFields && 'fields' in m) errors.push(`${at}: chỉ Số chủ đạo và Số sứ mệnh mới có fields`);
    }
  }
}

console.log(`Đã kiểm tra ${total} mục thông điệp.`);
if (errors.length) {
  console.log(`\nLỗi (${errors.length}):`);
  errors.forEach((e) => console.log('  ✗ ' + e));
  process.exit(1);
}
console.log('Đủ mọi cặp chỉ số × con số, không mục nào thiếu trường.');
