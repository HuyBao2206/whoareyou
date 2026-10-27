// Logic Thần số học. Hàm thuần, không đụng tới DOM, dùng được cả trong trình duyệt lẫn Node.
// Mỗi hàm tính trả về { value, display, steps }.
// steps là danh sách các bước cộng: [{ terms: [{ v, label? }], total }]
// vd 22/06/2002 → [{ terms: 2,2,0,6,2,0,0,2, total: 14 }, { terms: 1,4, total: 5 }]

export const LETTER_VALUES = Object.freeze({
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
});

export const MASTERS = Object.freeze([11, 22, 33]);
const MASTER_DISPLAY = { 22: '22/4', 33: '33/6' };

export const display = (n) => MASTER_DISPLAY[n] || String(n);

/** Các chữ số của một số nguyên không âm. */
export const digitsOf = (n) => String(Math.abs(Math.trunc(n))).split('').map(Number);
export const sumDigits = (n) => digitsOf(n).reduce((a, b) => a + b, 0);

/**
 * Rút gọn một tổng theo luật cho trước, ghi lại từng bước.
 * @param {number} total     tổng ban đầu
 * @param {(n:number)=>boolean} done  điều kiện dừng
 */
function reduceSteps(total, done) {
  const steps = [];
  let n = total;
  while (!done(n)) {
    const terms = digitsOf(n).map((v) => ({ v }));
    n = sumDigits(n);
    steps.push({ terms, total: n });
  }
  return { value: n, steps };
}

/** Rút gọn về 1–9, giữ nguyên 11, 22, 33 nếu gặp ở bất kỳ bước nào. */
export function reduceKeepMasters(total) {
  return reduceSteps(total, (n) => n <= 9 || MASTERS.includes(n));
}

/** Rút gọn về 1–9, không giữ số nào. */
export function reducePlain(total) {
  return reduceSteps(total, (n) => n <= 9);
}

/** Rút gọn kiểu Việt Nam (theo sách David A. Phillips): dừng khi ≤ 11, giữ 22. Tổng 33 rút về 6. */
export function reduceVn(total) {
  return reduceSteps(total, (n) => n <= 11 || n === 22);
}

/* ---------- Ngày tháng ---------- */

export const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

export function daysInMonth(m, y) {
  return [31, isLeapYear(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1] || 0;
}

export function isRealDate(d, m, y) {
  return (
    Number.isInteger(d) && Number.isInteger(m) && Number.isInteger(y) &&
    m >= 1 && m <= 12 && d >= 1 && d <= daysInMonth(m, y)
  );
}

/**
 * Kiểm tra ngày sinh người dùng nhập. Trả về { ok, errors } với errors theo từng ô.
 * @param {{day:string|number, month:string|number, year:string|number}} input
 */
export function validateBirthDate(input, { minYear = 1900, today = new Date() } = {}) {
  const errors = {};
  const raw = { day: String(input.day ?? '').trim(), month: String(input.month ?? '').trim(), year: String(input.year ?? '').trim() };
  const d = Number(raw.day);
  const m = Number(raw.month);
  const y = Number(raw.year);
  const maxYear = today.getFullYear();

  if (!raw.day) errors.day = 'Bạn chưa nhập ngày sinh.';
  else if (!/^\d{1,2}$/.test(raw.day) || d < 1 || d > 31) errors.day = 'Ngày sinh nằm trong khoảng từ 1 đến 31.';

  if (!raw.month) errors.month = 'Bạn chưa nhập tháng sinh.';
  else if (!/^\d{1,2}$/.test(raw.month) || m < 1 || m > 12) errors.month = 'Tháng sinh nằm trong khoảng từ 1 đến 12.';

  if (!raw.year) errors.year = 'Bạn chưa nhập năm sinh.';
  else if (!/^\d{4}$/.test(raw.year) || y < minYear || y > maxYear) errors.year = `Năm sinh cần nằm trong khoảng từ ${minYear} đến ${maxYear}.`;

  if (!Object.keys(errors).length) {
    if (!isRealDate(d, m, y)) {
      errors.day =
        m === 2 && d === 29
          ? `Năm ${y} không phải năm nhuận nên tháng 2 chỉ có 28 ngày.`
          : `Tháng ${m} năm ${y} chỉ có ${daysInMonth(m, y)} ngày.`;
    } else {
      const birth = new Date(y, m - 1, d);
      const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      if (birth > now) errors.day = 'Ngày này chưa tới. Bạn kiểm tra lại giúp mình nhé.';
    }
  }

  const ok = !Object.keys(errors).length;
  return ok ? { ok, errors, date: { day: d, month: m, year: y } } : { ok, errors };
}

/** Kiểm tra năm muốn xem cho Năm cá nhân. */
export function validateTargetYear(v, { min = 1900, max = 2200 } = {}) {
  const s = String(v ?? '').trim();
  if (!s) return { ok: false, error: 'Bạn chưa nhập năm muốn xem.' };
  if (!/^\d{4}$/.test(s) || Number(s) < min || Number(s) > max) {
    return { ok: false, error: `Năm muốn xem cần nằm trong khoảng từ ${min} đến ${max}.` };
  }
  return { ok: true, year: Number(s) };
}

const pad = (n, len) => String(n).padStart(len, '0');

/** Chữ số của ngày sinh viết đủ dd mm yyyy. */
export function dateDigits({ day, month, year }) {
  return [...pad(day, 2), ...pad(month, 2), ...pad(year, 4)].map(Number);
}

/**
 * Số chủ đạo.
 * @param {{day:number, month:number, year:number}} date
 * @param {{method?: 'vn'|'western'}} opts
 */
export function lifePath(date, { method = 'vn' } = {}) {
  const terms = dateDigits(date).map((v) => ({ v }));
  const total = terms.reduce((a, t) => a + t.v, 0);
  const r = method === 'western' ? reduceKeepMasters(total) : reduceVn(total);
  return { value: r.value, display: display(r.value), steps: [{ terms, total }, ...r.steps], method };
}

/** Năm cá nhân: chữ số ngày sinh + tháng sinh + năm muốn xem, rút gọn về 1–9. */
export function personalYear({ day, month }, targetYear) {
  const terms = [...pad(day, 2), ...pad(month, 2), ...pad(targetYear, 4)].map((v) => ({ v: Number(v) }));
  const total = terms.reduce((a, t) => a + t.v, 0);
  const r = reducePlain(total);
  return { value: r.value, display: String(r.value), steps: [{ terms, total }, ...r.steps], year: targetYear };
}

/**
 * Tháng cá nhân: năm cá nhân + số của tháng dương lịch, rút gọn về 1–9.
 * vd năm cá nhân 6, tháng 4 → 10 → 1.
 */
export function personalMonth(personalYearValue, month) {
  return reducePlain(personalYearValue + month).value;
}

/** Tháng cá nhân cho cả 12 tháng của một năm cá nhân. */
export function personalMonths(personalYearValue) {
  return Array.from({ length: 12 }, (_, i) => ({ month: i + 1, value: personalMonth(personalYearValue, i + 1) }));
}

/* ---------- Họ tên ---------- */

/**
 * Chuẩn hoá họ tên: bỏ dấu, Đ → D, in hoa, chỉ giữ A–Z và một khoảng trắng giữa các từ.
 * vd "  Bảo   Huy " → "BAO HUY"
 */
export function normalizeName(input, { trim = true } = {}) {
  let s = String(input ?? '')
    .normalize('NFC')
    .replace(/[đĐ]/g, 'D')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/[^A-Z\s]/g, '')
    .replace(/\s+/g, ' ');
  if (trim) s = s.trim();
  else s = s.replace(/^ /, '');
  return s;
}

const PURE_VOWELS = 'AEIOU';

/**
 * Cách coi chữ Y:
 *   'vowel' (mặc định): Y luôn là nguyên âm, đúng với tên tiếng Việt (Huy, Vy, Thủy, Yến).
 *   'foreign': tuỳ chọn "Tên nước ngoài". Y đứng ngay trước một nguyên âm trong cùng từ là phụ âm
 *              (YOLANDA, MAYA), còn lại vẫn là nguyên âm (LYNN).
 *   'consonant': Y luôn là phụ âm. Tuỳ chọn cũ { yIsVowel: false } tương đương.
 */
export function yModeOf(opts = {}) {
  if (opts.yMode) return opts.yMode;
  if (opts.yIsVowel === false) return 'consonant';
  return 'vowel';
}

/**
 * Chữ ở vị trí i trong chuỗi s có phải nguyên âm không.
 * @param {string} s  tên đã chuẩn hoá (A–Z và khoảng trắng)
 */
export function isVowelAt(s, i, opts = {}) {
  const ch = s[i];
  if (PURE_VOWELS.includes(ch)) return true;
  if (ch !== 'Y') return false;
  const mode = yModeOf(opts);
  if (mode === 'consonant') return false;
  if (mode === 'foreign') return !(s[i + 1] && PURE_VOWELS.includes(s[i + 1]));
  return true;
}

/** Kiểm tra một chữ đứng riêng (không có ngữ cảnh). Ở chế độ tên nước ngoài, Y đứng riêng vẫn là nguyên âm. */
export const isVowel = (ch, opts = {}) => isVowelAt(ch, 0, opts);

/** Danh sách chữ cái của tên đã chuẩn hoá, kèm giá trị và loại nguyên âm/phụ âm. Khoảng trắng giữ lại làm dấu ngắt từ. */
export function nameLetters(name, opts = {}) {
  const s = normalizeName(name, { trim: false });
  return [...s].map((ch, i) =>
    ch === ' ' ? { ch, space: true } : { ch, value: LETTER_VALUES[ch], vowel: isVowelAt(s, i, opts) }
  );
}

function sumLetters(letters) {
  const terms = letters.map((l) => ({ v: l.value, label: l.ch }));
  const total = terms.reduce((a, t) => a + t.v, 0);
  if (!terms.length) return { value: null, display: '', steps: [] };
  const r = reduceKeepMasters(total);
  return { value: r.value, display: display(r.value), steps: [{ terms, total }, ...r.steps] };
}

/**
 * Ba số từ họ tên: sứ mệnh (mọi chữ), linh hồn (nguyên âm), nhân cách (phụ âm).
 * @param {string} name
 * @param {{yMode?: 'vowel'|'foreign'|'consonant', yIsVowel?: boolean}} opts
 */
export function nameNumbers(name, opts = {}) {
  const normalized = normalizeName(name);
  const letters = nameLetters(normalized, opts).filter((l) => !l.space);
  return {
    name: normalized,
    letters,
    expression: sumLetters(letters),
    soul: sumLetters(letters.filter((l) => l.vowel)),
    personality: sumLetters(letters.filter((l) => !l.vowel)),
  };
}

/** Viết một bước thành chuỗi, vd "2+2+0+6 = 10". */
export function stepToString(step) {
  return `${step.terms.map((t) => t.v).join('+')} = ${step.total}`;
}

/** Cả phép tính thành một dòng, vd "2+2+0+6+2+0+0+2 = 14 → 1+4 = 5". */
export function stepsToString(steps) {
  return steps.map(stepToString).join(' → ');
}

/* ---------- Giá trị hợp lệ cho từng chỉ số (dùng cho URL kết quả và tra cứu) ---------- */

export const VALID = Object.freeze({
  lifePath: Object.freeze({
    vn: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22],
    western: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33],
    all: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33],
  }),
  personalYear: Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  name: Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33]),
});
