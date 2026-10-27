// Hàm tính thuần của thẻ Bản đồ tính cách (dùng được cả trong Node). Kiểm thử: calc.test.html.
//
// Cách chấm theo IPIP: mỗi câu trả lời từ 1 (hoàn toàn không đúng) đến 5 (rất đúng).
// Câu nghịch (key = -1) đảo điểm thành 6 − câu trả lời. Điểm mỗi chiều là trung bình 10 câu, từ 1 đến 5.
// Ba mức chia trên chính thang đo (chưa có chuẩn cho người Việt): thấp dưới 2,5; trung bình 2,5 đến 3,5; cao trên 3,5.
// Tính bằng tổng điểm để tránh sai số số thực: đủ 10 câu thì thấp ≤ 24, trung bình 25–35, cao ≥ 36.

import ITEMS from './items.js';

export { ITEMS };

/** Thứ tự hiển thị: O C E A N. */
export const DIM_IDS = ['O', 'C', 'E', 'A', 'N'];
export const LEVELS = ['low', 'mid', 'high'];
export const SCALE = [1, 2, 3, 4, 5];

/** Điểm của một câu sau khi xét chiều thuận nghịch. Trả về null nếu chưa trả lời. */
export function itemScore(answer, key) {
  if (!SCALE.includes(answer)) return null;
  return key === -1 ? 6 - answer : answer;
}

/** Mức của một điểm trung bình (1–5). */
export function levelOf(mean) {
  if (mean == null || Number.isNaN(mean)) return null;
  const tenths = Math.round(mean * 10);
  if (tenths < 25) return 'low';
  if (tenths > 35) return 'high';
  return 'mid';
}

/**
 * Chấm điểm cả bài.
 * @param {Array<number|null>} answers  câu trả lời theo thứ tự ITEMS (chỉ số 0 ứng với câu 1)
 * @returns {{ [dim]: { sum, n, mean, level } }}
 */
export function scoreAll(answers, items = ITEMS) {
  const out = {};
  for (const d of DIM_IDS) out[d] = { sum: 0, n: 0, mean: null, level: null };
  items.forEach((it, i) => {
    const s = itemScore(answers[i], it.key);
    if (s == null) return;
    out[it.d].sum += s;
    out[it.d].n += 1;
  });
  for (const d of DIM_IDS) {
    const r = out[d];
    if (!r.n) continue;
    r.mean = Math.round((r.sum / r.n) * 10) / 10;
    r.level = levelOf(r.sum / r.n);
  }
  return out;
}

export const answeredCount = (answers) => answers.filter((a) => SCALE.includes(a)).length;
export const isComplete = (answers, items = ITEMS) => items.every((_, i) => SCALE.includes(answers[i]));

/** Câu chưa trả lời đầu tiên (chỉ số 0), hoặc -1 nếu đã đủ. */
export function firstUnanswered(answers, items = ITEMS) {
  return items.findIndex((_, i) => !SCALE.includes(answers[i]));
}

/* ---------- Đọc 5 chiều cùng nhau ---------- */

/**
 * Những tổ hợp có cơ sở nghiên cứu khớp với kết quả. Mỗi mục trong content.js có id trùng với id ở đây.
 * Chỉ xét mức thấp và cao; mức trung bình không xếp vào tổ hợp nào.
 */
export function combosOf(scores) {
  const L = (d) => scores[d]?.level;
  const out = [];
  if (L('C') === 'high' && L('N') === 'high') out.push('lo-ma-lam');
  if (L('O') === 'high' && L('C') === 'low') out.push('nhieu-y-it-dich');
  if (L('A') === 'high' && L('C') === 'high' && L('N') === 'low') out.push('on-dinh');
  if (L('E') === 'high' && L('O') === 'high') out.push('mem-deo');
  const e = L('E');
  const n = L('N');
  if (e !== 'mid' && n !== 'mid' && e && n) out.push(`goc-${e === 'high' ? 'ngoai' : 'noi'}-${n === 'high' ? 'nhay' : 'vung'}`);
  return out;
}

/* ---------- Chòm sao ---------- */

/** Góc (độ, 0 là hướng 12 giờ, thuận chiều kim đồng hồ) của 5 chiều trên chòm sao. */
export const ANGLES = { O: 0, C: 72, E: 144, A: 216, N: 288 };

/**
 * Vị trí và độ sáng của 5 sao. Điểm càng cao thì sao càng xa tâm và càng sáng.
 * @returns {{ [dim]: { x, y, r, glow } }} toạ độ trong khung size × size
 */
export function starLayout(scores, { size = 400, inner = 52, outer = 160 } = {}) {
  const c = size / 2;
  const out = {};
  for (const d of DIM_IDS) {
    const m = scores[d]?.mean ?? 3;
    const t = (Math.min(5, Math.max(1, m)) - 1) / 4;
    const rad = inner + (outer - inner) * t;
    const a = ((ANGLES[d] - 90) * Math.PI) / 180;
    out[d] = {
      x: Math.round((c + rad * Math.cos(a)) * 10) / 10,
      y: Math.round((c + rad * Math.sin(a)) * 10) / 10,
      r: Math.round((3 + 5 * t) * 10) / 10,
      glow: Math.round((0.3 + 0.7 * t) * 100) / 100,
    };
  }
  return out;
}

/** Sao nền cho mỗi câu đã trả lời: vị trí giả ngẫu nhiên nhưng cố định theo số câu (0–1). */
export function skyDot(n) {
  const h = (k) => {
    const s = Math.sin(n * 127.1 + k * 311.7) * 43758.5453;
    return s - Math.floor(s);
  };
  return { x: Math.round((0.04 + 0.92 * h(1)) * 1000) / 1000, y: Math.round((0.04 + 0.6 * h(2)) * 1000) / 1000 };
}
