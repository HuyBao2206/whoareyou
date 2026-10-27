// Hàm tính thuần của thẻ Giá trị sống. Không đụng DOM, chạy được trong Node. Kiểm thử: calc.test.html.
//
// Mười giá trị cơ bản của Schwartz (2012), xếp theo thứ tự quanh vòng tròn động cơ.
// Truyền thống (TR) và Tuân thủ (CO) nằm chung một nan quạt: Truyền thống ở vòng ngoài, Tuân thủ ở vòng trong.

export const VALUES = ['SD', 'ST', 'HE', 'AC', 'PO', 'SE', 'CO', 'TR', 'BE', 'UN'];

/** Góc (độ) của từng giá trị trên la bàn, 0° ở đỉnh, theo chiều kim đồng hồ. TR và CO cùng góc. */
export const ANGLE = { SD: 0, ST: 40, HE: 80, AC: 120, PO: 160, SE: 200, CO: 240, TR: 240, BE: 280, UN: 320 };

/** Bốn nhóm bậc cao. Hưởng thụ (HE) thuộc cả Cởi mở với thay đổi và Nâng cao bản thân. */
export const HIGHER = {
  open: ['SD', 'ST', 'HE'],
  enhance: ['HE', 'AC', 'PO'],
  conserve: ['SE', 'CO', 'TR'],
  transcend: ['BE', 'UN'],
};

/** Hai trục đối lập của Schwartz. */
export const AXES = [
  ['open', 'conserve'],
  ['enhance', 'transcend'],
];

/** Hai giá trị có xung đột động cơ khi một ở nhóm này, một ở nhóm đối diện của cùng một trục. */
export function conflicts(a, b) {
  if (a === b) return false;
  return AXES.some(([x, y]) => (HIGHER[x].includes(a) && HIGHER[y].includes(b)) || (HIGHER[y].includes(a) && HIGHER[x].includes(b)));
}

/** Mọi cặp xung đột trong một danh sách giá trị (không trùng, giữ thứ tự xuất hiện). */
export function conflictPairs(list) {
  const out = [];
  const seen = new Set();
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const k = [list[i], list[j]].sort().join('-');
      if (!seen.has(k) && conflicts(list[i], list[j])) {
        seen.add(k);
        out.push([list[i], list[j]]);
      }
    }
  }
  return out;
}

/** Trọng số theo thứ hạng trong top 5: hạng 1 được 5, hạng 5 được 1. */
export const RANK_WEIGHT = [5, 4, 3, 2, 1];

/**
 * Cộng trọng số theo giá trị Schwartz.
 * @param {string[]} ranked   id thẻ đã xếp hạng (tối đa 5), hạng 1 đứng đầu
 * @param {{ [cardId]: string }} valueOf  thẻ → mã giá trị
 * @param {string[]} [alsoImportant]  các thẻ còn lại trong chồng "Rất quan trọng" (mỗi thẻ 0,5)
 */
export function valueWeights(ranked, valueOf, alsoImportant = []) {
  const w = Object.fromEntries(VALUES.map((v) => [v, 0]));
  ranked.slice(0, 5).forEach((id, i) => {
    const v = valueOf[id];
    if (v in w) w[v] += RANK_WEIGHT[i];
  });
  for (const id of alsoImportant) {
    const v = valueOf[id];
    if (v in w) w[v] += 0.5;
  }
  return w;
}

/**
 * Hướng kim la bàn: tổng vectơ của các giá trị theo góc và trọng số.
 * @returns {{ angle:number|null, strength:number, nearest:string|null }}
 *   angle: góc 0–360 (null khi không có trọng số); strength: 0–1, độ dài vectơ chia tổng trọng số;
 *   nearest: giá trị gần hướng kim nhất (với TR/CO cùng góc, chọn cái có trọng số lớn hơn).
 */
export function needle(weights) {
  let x = 0;
  let y = 0;
  let total = 0;
  for (const v of VALUES) {
    const wv = weights[v] || 0;
    if (!wv) continue;
    const a = (ANGLE[v] * Math.PI) / 180;
    x += wv * Math.sin(a);
    y += wv * Math.cos(a);
    total += wv;
  }
  if (!total) return { angle: null, strength: 0, nearest: null };
  const len = Math.hypot(x, y);
  const strength = Math.round((len / total) * 1000) / 1000;
  if (len < 1e-9) return { angle: null, strength: 0, nearest: null };
  let angle = (Math.atan2(x, y) * 180) / Math.PI;
  if (angle < 0) angle += 360;
  angle = Math.round(angle * 10) / 10;
  let nearest = null;
  let best = Infinity;
  for (const v of VALUES) {
    const d = Math.min(Math.abs(ANGLE[v] - angle), 360 - Math.abs(ANGLE[v] - angle));
    if (d < best - 1e-9 || (Math.abs(d - best) < 1e-9 && (weights[v] || 0) > (weights[nearest] || 0))) {
      best = d;
      nearest = v;
    }
  }
  return { angle, strength, nearest };
}

/** Kim yếu (các giá trị kéo về nhiều phía): độ dài vectơ dưới 0,25 tổng trọng số. */
export const WEAK_NEEDLE = 0.25;

/* ---------- Soi một quyết định ---------- */

/**
 * So hai phương án theo các giá trị đã chọn.
 * @param {Array<{ id:string, weight:number }>} criteria  giá trị và trọng số (vd hạng 1 → 5)
 * @param {{ [id]: number }} a  điểm phương án A theo từng giá trị, 1–5
 * @param {{ [id]: number }} b  điểm phương án B
 * @returns {{ totalA, totalB, max, rows: Array<{ id, weight, a, b, diff }> }}
 *   Chỉ trả về số liệu để người dùng tự đọc, không kết luận phương án nào nên chọn.
 */
export function compareOptions(criteria, a, b) {
  const clamp = (n) => (Number.isFinite(n) ? Math.max(1, Math.min(5, Math.round(n))) : null);
  let totalA = 0;
  let totalB = 0;
  let max = 0;
  const rows = criteria.map(({ id, weight }) => {
    const sa = clamp(a[id]);
    const sb = clamp(b[id]);
    if (sa != null) totalA += sa * weight;
    if (sb != null) totalB += sb * weight;
    max += 5 * weight;
    return { id, weight, a: sa, b: sb, diff: sa != null && sb != null ? sa - sb : null };
  });
  return { totalA, totalB, max, rows };
}

/** Các giá trị mà hai phương án chênh nhau từ 2 điểm trở lên: chỗ đánh đổi rõ nhất. */
export function tradeoffs(result) {
  return result.rows.filter((r) => r.diff != null && Math.abs(r.diff) >= 2);
}
