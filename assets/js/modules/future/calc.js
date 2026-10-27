// Hàm tính thuần của thẻ Nghề nghiệp hôm nay & ngày mai. Không đụng DOM, chạy được trong Node.
// Kiểm thử: calc.test.html.
//
// Mỗi nghề có hai chỉ số từ 1 đến 5, do biên tập tổng hợp từ nguồn (phương pháp ghi ở content.js, mục "Cách đọc bản đồ"):
//   demand  triển vọng nhu cầu tại Việt Nam đến khoảng 2030 (1 giảm rõ, 3 đi ngang, 5 tăng mạnh)
//   ai      mức chịu tác động của AI và tự động hoá lên các nhiệm vụ của nghề (1 thấp, 5 rất cao)
// Chỉ số có thể lẻ nửa bậc (vd 3.5) khi các nguồn lệch nhau.

/** Ba mức "thời tiết" cho triển vọng nhu cầu. */
export const SKY = ['mua', 'may', 'nang'];

/** Mức thời tiết theo chỉ số nhu cầu: dưới 2,5 là mưa, 2,5 đến 3,5 là mây, trên 3,5 là nắng. */
export function skyOf(demand) {
  if (typeof demand !== 'number' || Number.isNaN(demand)) return null;
  if (demand < 2.5) return 'mua';
  if (demand > 3.5) return 'nang';
  return 'may';
}

/** Cấp "gió AI" từ 1 đến 5 (làm tròn lên nửa bậc: 3.5 → 4). */
export function windOf(ai) {
  if (typeof ai !== 'number' || Number.isNaN(ai)) return null;
  return Math.max(1, Math.min(5, Math.ceil(ai)));
}

/** Toạ độ trên bản đồ (0–1): x theo nhu cầu, y theo tác động AI (1 ở dưới, 5 ở trên). */
export function position(job) {
  return { x: (job.demand - 1) / 4, y: 1 - (job.ai - 1) / 4 };
}

/**
 * Rải các chấm trùng toạ độ thành một cụm nhỏ để không đè lên nhau.
 * Hai chấm: đặt hai bên; ba chấm: tam giác; từ bốn chấm: một chấm ở tâm, còn lại xếp vòng quanh.
 * Bán kính nhỏ hơn nửa khoảng cách giữa hai mức liền nhau (0,125) để cụm không lấn sang ô bên cạnh.
 * Trả về Map id → { x, y } (0–1). Kết quả ổn định theo thứ tự trong mảng.
 */
export function spread(jobs) {
  const groups = new Map();
  for (const j of jobs) {
    const k = `${j.demand}|${j.ai}`;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(j);
  }
  const out = new Map();
  for (const g of groups.values()) {
    const { x, y } = position(g[0]);
    const n = g.length;
    if (n === 1) {
      out.set(g[0].id, { x, y });
      continue;
    }
    if (n === 2) {
      out.set(g[0].id, { x: x - 0.028, y });
      out.set(g[1].id, { x: x + 0.028, y });
      continue;
    }
    const ring = n === 3 ? g : g.slice(1);
    const r = n === 3 ? 0.034 : 0.055;
    if (n > 3) out.set(g[0].id, { x, y });
    ring.forEach((j, i) => {
      const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
      out.set(j.id, { x: x + r * Math.cos(a), y: y + r * Math.sin(a) });
    });
  }
  return out;
}

const W = [3, 2, 1];

/**
 * Độ khớp giữa mã Holland của nghề và của người dùng: cộng tích trọng số theo vị trí (3, 2, 1) của mỗi chữ chung.
 * Hai mã trùng hẳn được 14; chữ đầu trùng nhau được ít nhất 9; không có chữ chung được 0.
 */
export function hollandFit(jobCode, userCode) {
  if (!jobCode || !userCode) return 0;
  let s = 0;
  [...jobCode].forEach((l, i) => {
    const j = userCode.indexOf(l);
    if (j >= 0 && j < 3 && i < 3) s += W[i] * W[j];
  });
  return s;
}

/** Ngưỡng coi là "hợp mã": chữ đầu của nghề nằm trong hai chữ đầu của người dùng (tối thiểu 3 × 2 = 6). */
export const FIT_MIN = 6;

/**
 * Lọc danh sách nghề.
 * @param {Array} jobs
 * @param {{ field?: string|null, holland?: string|null }} f  field: mã lĩnh vực; holland: mã 3 chữ của người dùng
 * @returns {Array} nghề thoả điều kiện; khi lọc theo mã, xếp theo độ khớp giảm dần
 */
export function filterJobs(jobs, { field = null, holland = null } = {}) {
  let out = jobs.filter((j) => !field || j.field === field);
  if (holland) {
    out = out
      .map((j) => ({ j, s: hollandFit(j.holland, holland) }))
      .filter((x) => x.s >= FIT_MIN)
      .sort((a, b) => b.s - a.s || jobs.indexOf(a.j) - jobs.indexOf(b.j))
      .map((x) => x.j);
  }
  return out;
}

/** Mã Holland hợp lệ: 1 đến 3 chữ khác nhau trong R I A S E C. */
export function validHolland(code) {
  return typeof code === 'string' && /^[RIASEC]{1,3}$/.test(code) && new Set(code).size === code.length;
}

/**
 * Bốn ô của bản đồ. Nhu cầu "tăng" khi trên mức trung tính (> 3); mức 3 thuộc nhóm đi ngang hoặc giảm.
 * Tiếp xúc "nhiều" khi chỉ số AI từ 3,5 trở lên; mức 3 là vừa.
 */
export function quadrant(job) {
  const hiDemand = job.demand > 3;
  const hiAi = job.ai >= 3.5;
  if (hiDemand && !hiAi) return 'grow-safe';
  if (hiDemand && hiAi) return 'grow-change';
  if (!hiDemand && hiAi) return 'shrink-change';
  return 'shrink-safe';
}

/** Đếm số nghề trong mỗi ô (để mô tả bản đồ bằng chữ). */
export function quadrantCounts(jobs) {
  const c = { 'grow-safe': 0, 'grow-change': 0, 'shrink-change': 0, 'shrink-safe': 0 };
  for (const j of jobs) c[quadrant(j)]++;
  return c;
}

/** Số nhiệm vụ theo mức tác động ('cao' | 'vua' | 'thap') trong hồ sơ một nghề. Mỗi nhiệm vụ là [tên, mức]. */
export function taskMix(job) {
  const m = { cao: 0, vua: 0, thap: 0 };
  for (const t of job.tasks || []) if (t && t[1] in m) m[t[1]]++;
  return m;
}

/** Trọng số của từng mức tác động khi tính chỉ số AI. */
export const TASK_WEIGHT = { cao: 1, vua: 0.5, thap: 0 };

/**
 * Chỉ số tác động của AI (1–5) tính từ bảng nhiệm vụ:
 *   1 + 4 × (số nhiệm vụ cao + 0,5 × số nhiệm vụ vừa) ÷ tổng số nhiệm vụ, làm tròn đến nửa bậc.
 * @param {Array<[string, 'cao'|'vua'|'thap']>} tasks
 */
export function aiIndex(tasks) {
  const list = (tasks || []).filter((t) => t && t[1] in TASK_WEIGHT);
  if (!list.length) return null;
  const share = list.reduce((s, t) => s + TASK_WEIGHT[t[1]], 0) / list.length;
  return Math.round((1 + 4 * share) * 2) / 2;
}
