// Hàm tính thuần của thẻ Kỹ năng nên đầu tư. Không đụng DOM, chạy được trong Node. Kiểm thử: calc.test.html.
//
// Gợi ý 3 kỹ năng nên đầu tư trước, theo công thức công khai trên trang:
//
//   điểm ưu tiên = khoảng cách × mức đòi hỏi × bằng chứng ÷ chi phí
//
//   khoảng cách     = mức mục tiêu − mức hiện tại (0 nếu đã đạt hoặc vượt), thang 1–5
//   mức đòi hỏi     = theo mức cần của mục tiêu đã chọn: 5 → 1,5; 4 → 1,25; 3 trở xuống → 1
//   bằng chứng      = hệ số ev của kỹ năng trong data.js (1 hoặc 1,25), theo WEF 2025 và BUV 2026
//   chi phí         = số giờ cần để lên một mức, chia ba bậc: thấp 1; vừa 1,5; cao 2
//
// Kỹ năng đã đạt mục tiêu không được chọn. Điểm bằng nhau thì ưu tiên khoảng cách lớn hơn, rồi chi phí thấp hơn,
// rồi thứ tự trong danh sách.

export const LEVELS = [1, 2, 3, 4, 5];
export const COST = Object.freeze({ low: 1, mid: 1.5, high: 2 });

/** Hệ số mức đòi hỏi theo mức mục tiêu. */
export function weightOf(target) {
  if (target >= 5) return 1.5;
  if (target >= 4) return 1.25;
  return 1;
}

/** Khoảng cách giữa mục tiêu và hiện tại (không âm). Mức chưa chấm coi là 1. */
export function gapOf(target, current) {
  const c = LEVELS.includes(current) ? current : 1;
  return Math.max(0, target - c);
}

/**
 * Điểm ưu tiên của một kỹ năng.
 * @param {{ target:number, current:number|null, cost:'low'|'mid'|'high', ev?:number }} o
 */
export function priority({ target, current, cost, ev = 1 }) {
  const gap = gapOf(target, current);
  if (!gap) return 0;
  const c = COST[cost] ?? COST.mid;
  return Math.round(((gap * weightOf(target) * ev) / c) * 1000) / 1000;
}

/**
 * Chọn tối đa n kỹ năng ưu tiên.
 * @param {Array<{ id:string, cost:'low'|'mid'|'high', ev?:number }>} skills  danh sách kỹ năng theo thứ tự hiển thị
 * @param {{ [id]: number }} targets   mức mục tiêu (1–5) của mỗi kỹ năng
 * @param {{ [id]: number }} current   mức hiện tại người dùng tự chấm (1–5)
 * @returns {Array<{ id, score, gap, target, current, weight, ev, cost }>}
 */
export function topPriorities(skills, targets, current, n = 3) {
  return skills
    .map((s, i) => {
      const target = targets[s.id] ?? 1;
      const cur = current[s.id] ?? null;
      return {
        id: s.id,
        i,
        target,
        current: LEVELS.includes(cur) ? cur : 1,
        gap: gapOf(target, cur),
        weight: weightOf(target),
        ev: s.ev ?? 1,
        cost: COST[s.cost] ?? COST.mid,
        score: priority({ target, current: cur, cost: s.cost, ev: s.ev ?? 1 }),
      };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.gap - a.gap || a.cost - b.cost || a.i - b.i)
    .slice(0, n)
    .map(({ i, ...rest }) => rest);
}

/** Tiến độ nhiệm vụ: số đã xong trên tổng số. */
export function progress(done, total) {
  if (!total) return 0;
  return Math.round((Math.min(done, total) / total) * 100);
}
