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
 * Trả về Map id → { x, y } (0–1), giữ nguyên tâm cụm. Kết quả ổn định theo thứ tự trong mảng.
 */
export function spread(jobs, radius = 0.028) {
  const groups = new Map();
  for (const j of jobs) {
    const k = `${j.demand}|${j.ai}`;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(j);
  }
  const out = new Map();
  for (const g of groups.values()) {
    const { x, y } = position(g[0]);
    if (g.length === 1) {
      out.set(g[0].id, { x, y });
      continue;
    }
    const r = radius * (g.length > 6 ? 1.6 : 1);
    g.forEach((j, i) => {
      const a = (i / g.length) * Math.PI * 2 - Math.PI / 2;
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

/** Bốn ô của bản đồ, chia ở giữa thang (3). */
export function quadrant(job) {
  const hiDemand = job.demand >= 3;
  const hiAi = job.ai >= 3;
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

/** Tỷ lệ nhiệm vụ theo mức tự động hoá ('cao' | 'vua' | 'thap') trong hồ sơ một nghề. */
export function taskMix(job) {
  const m = { cao: 0, vua: 0, thap: 0 };
  for (const t of job.tasks || []) if (t.ai in m) m[t.ai]++;
  return m;
}
