// Hàm tính thuần của thẻ Sở thích nghề nghiệp (mô hình Holland, RIASEC).
// Không đụng tới DOM, chạy được cả trong Node. Kiểm thử: calc.test.html.

/** Sáu nhóm theo thứ tự quanh lục giác Holland: R, I, A, S, E, C. */
export const TYPES = ['R', 'I', 'A', 'S', 'E', 'C'];

/** Điểm cho mỗi câu trả lời. Phân vân được nửa số điểm của Thích. */
export const POINTS = Object.freeze({ like: 2, unsure: 1, dislike: 0 });
export const ANSWERS = Object.keys(POINTS);

/** Mỗi nhóm có 8 hoạt động, nên điểm tối đa của một nhóm là 16. */
export const PER_TYPE = 8;
export const MAX_SCORE = PER_TYPE * POINTS.like;

/**
 * Thứ tự hiện các hoạt động: 8 vòng, mỗi vòng một hoạt động của mỗi nhóm,
 * xếp lệch nhau giữa các vòng để người làm bài không đoán được nhóm của câu kế tiếp.
 * Trả về mảng { type, i } với i là chỉ số hoạt động trong nhóm (0–7).
 */
export function deckOrder() {
  const rounds = [
    [0, 3, 1, 4, 2, 5],
    [4, 1, 5, 0, 3, 2],
    [0, 5, 2, 3, 1, 4],
    [5, 2, 4, 1, 0, 3],
    [1, 4, 3, 5, 2, 0],
    [3, 0, 2, 5, 4, 1],
    [0, 4, 2, 1, 5, 3],
    [5, 3, 1, 4, 0, 2],
  ];
  return rounds.flatMap((r, i) => r.map((t) => ({ type: TYPES[t], i })));
}

/**
 * Cộng điểm theo nhóm.
 * @param {Array<{type:string, answer:'like'|'unsure'|'dislike'}>} answers
 * @returns {{R:number,I:number,A:number,S:number,E:number,C:number}}
 */
export function score(answers) {
  const s = Object.fromEntries(TYPES.map((t) => [t, 0]));
  for (const a of answers) {
    if (!a || !(a.type in s) || !(a.answer in POINTS)) continue;
    s[a.type] += POINTS[a.answer];
  }
  return s;
}

/** Các nhóm xếp theo điểm từ cao xuống; điểm bằng nhau thì giữ thứ tự lục giác. */
export function ranked(scores) {
  return TYPES.slice().sort((a, b) => scores[b] - scores[a] || TYPES.indexOf(a) - TYPES.indexOf(b));
}

function permutations(arr) {
  if (arr.length <= 1) return [arr.slice()];
  return arr.flatMap((x, i) => permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((p) => [x, ...p]));
}

/**
 * Mã Holland 3 chữ. Khi có điểm bằng nhau ở ranh giới, trả về mọi mã có thể.
 * @returns {{ code:string, codes:string[], more:boolean, tied:string[][] }}
 *   code: mã chính (điểm bằng nhau thì theo thứ tự lục giác)
 *   codes: tối đa `limit` mã có thể, mã chính đứng đầu
 *   more: còn mã khác ngoài danh sách (nhiều nhóm cùng điểm); count: tổng số mã có thể
 *   tied: các nhóm cùng điểm có ảnh hưởng tới 3 chữ đầu, vd [['A','E']]
 */
export function hollandCode(scores, { limit = 6 } = {}) {
  const order = ranked(scores);
  // Chia thành các bậc cùng điểm.
  const tiers = [];
  for (const t of order) {
    const last = tiers[tiers.length - 1];
    if (last && scores[last[0]] === scores[t]) last.push(t);
    else tiers.push([t]);
  }
  // Ghép các bậc cho tới khi đủ 3 chữ.
  let prefixes = [''];
  let total = 0;
  const tied = [];
  for (const tier of tiers) {
    if (total >= 3) break;
    const need = Math.min(3 - total, tier.length);
    if (tier.length > 1) tied.push(tier.slice());
    const picks = new Set(
      permutations(tier).map((p) => p.slice(0, need).join(''))
    );
    const next = [];
    for (const pre of prefixes) for (const p of picks) next.push(pre + p);
    prefixes = next;
    total += need;
  }
  const codes = prefixes.slice(0, limit);
  return { code: prefixes[0], codes, more: prefixes.length > limit, count: prefixes.length, tied };
}

/** Khoảng cách giữa hai nhóm trên lục giác: 1 là cạnh nhau, 2 là cách một ô, 3 là đối diện. */
export function distance(a, b) {
  const d = Math.abs(TYPES.indexOf(a) - TYPES.indexOf(b));
  return Math.min(d, 6 - d);
}

/**
 * Tính nhất quán theo Holland, dựa trên hai chữ đầu của mã.
 * @returns {'high'|'mid'|'low'}
 */
export function consistency(code) {
  const d = distance(code[0], code[1]);
  return d === 1 ? 'high' : d === 2 ? 'mid' : 'low';
}

/** Khoá của một cặp, không phụ thuộc thứ tự: hai chữ xếp theo thứ tự lục giác (vd 'SA' → 'AS'). */
export function pairKey(a, b) {
  return [a, b].sort((x, y) => TYPES.indexOf(x) - TYPES.indexOf(y)).join('');
}

/** Mọi cặp hai nhóm (15 cặp): cặp cạnh nhau, rồi cách một ô, rồi đối diện; trong mỗi nhóm đi vòng quanh lục giác. */
export function allPairs() {
  const out = [];
  for (let d = 1; d <= 3; d++) {
    for (let i = 0; i < 6; i++) {
      const k = pairKey(TYPES[i], TYPES[(i + d) % 6]);
      if (!out.includes(k)) out.push(k);
    }
  }
  return out;
}

/**
 * Độ rõ nét của hồ sơ (Holland gọi là differentiation): chênh lệch giữa nhóm cao nhất và thấp nhất.
 * 'flat' khi chênh lệch không quá 3 điểm trên thang 16, tức sáu ô gần như ngang nhau.
 */
export function differentiation(scores) {
  const v = TYPES.map((t) => scores[t]);
  const spread = Math.max(...v) - Math.min(...v);
  return { spread, flat: spread <= 3 };
}

/** Điểm đổi ra phần trăm độ đầy của ô (0–1). */
export const fill = (n) => Math.max(0, Math.min(1, n / MAX_SCORE));

/** Mã điểm gọn để lưu trong phiên: "R12I8A16S10E4C6". */
export function encodeScores(scores) {
  return TYPES.map((t) => t + scores[t]).join('');
}

/** Đọc lại mã điểm; trả về null nếu sai định dạng. */
export function decodeScores(str) {
  const m = /^R(\d{1,2})I(\d{1,2})A(\d{1,2})S(\d{1,2})E(\d{1,2})C(\d{1,2})$/.exec(String(str || ''));
  if (!m) return null;
  const s = {};
  TYPES.forEach((t, i) => (s[t] = Number(m[i + 1])));
  if (TYPES.some((t) => s[t] > MAX_SCORE)) return null;
  return s;
}
