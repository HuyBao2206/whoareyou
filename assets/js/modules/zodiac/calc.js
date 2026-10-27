// Logic thẻ Cung hoàng đạo & con giáp. Hàm thuần, không đụng tới DOM, chạy được cả trong Node.

import { jdFromDate, solarToLunar, yearCanChi, tetOf, CAN, CHI } from '../../core/lunar.js';

/* ---------- Cung hoàng đạo (chiêm tinh phương Tây) ---------- */

// Bảng ngày phổ biến ở Việt Nam. start: [tháng, ngày] bắt đầu cung.
export const SIGNS = Object.freeze([
  { id: 'aries', name: 'Bạch Dương', start: [3, 21] },
  { id: 'taurus', name: 'Kim Ngưu', start: [4, 20] },
  { id: 'gemini', name: 'Song Tử', start: [5, 21] },
  { id: 'cancer', name: 'Cự Giải', start: [6, 22] },
  { id: 'leo', name: 'Sư Tử', start: [7, 23] },
  { id: 'virgo', name: 'Xử Nữ', start: [8, 23] },
  { id: 'libra', name: 'Thiên Bình', start: [9, 23] },
  { id: 'scorpio', name: 'Bọ Cạp', start: [10, 23] },
  { id: 'sagittarius', name: 'Nhân Mã', start: [11, 22] },
  { id: 'capricorn', name: 'Ma Kết', start: [12, 22] },
  { id: 'aquarius', name: 'Bảo Bình', start: [1, 20] },
  { id: 'pisces', name: 'Song Ngư', start: [2, 19] },
]);

// Số thứ tự của ngày trong một năm nhuận (1..366), để so sánh ngày không phụ thuộc năm.
const dayOfYear = (m, d) => [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335][m - 1] + d;

/** Khoảng ngày của cung i, dạng { from: [tháng, ngày], to: [tháng, ngày] }. */
export function signRange(i) {
  const from = SIGNS[i].start;
  const [nm, nd] = SIGNS[(i + 1) % 12].start;
  const prev = new Date(Date.UTC(2000, nm - 1, nd - 1));
  return { from, to: [prev.getUTCMonth() + 1, prev.getUTCDate()] };
}

/**
 * Cung hoàng đạo của một ngày sinh.
 * Sinh trong khoảng ±1 ngày quanh ngày giao cung thì có thêm `cusp`: cung bên kia ranh giới.
 * @returns {{ index:number, cusp: null | { index:number, side:'before'|'after' } }}
 *   side 'before': cung kia đứng trước (vừa qua); 'after': cung kia đứng sau (sắp tới).
 */
export function sunSign(day, month) {
  const t = dayOfYear(month, day);
  const dist = (from, to) => (to - from + 366) % 366;
  let index = 0;
  let since = Infinity;
  SIGNS.forEach((s, i) => {
    const d = dist(dayOfYear(...s.start), t);
    if (d < since) {
      since = d;
      index = i;
    }
  });
  const next = (index + 1) % 12;
  const untilNext = dist(t, dayOfYear(...SIGNS[next].start));
  // Ngày giao cung là ngày đầu tiên của cung mới. ±1 ngày quanh nó: ngày cuối cung cũ, ngày giao, ngày hôm sau.
  let cusp = null;
  if (since <= 1) cusp = { index: (index + 11) % 12, side: 'before' };
  else if (untilNext <= 1) cusp = { index: next, side: 'after' };
  return { index, cusp };
}

/* ---------- Con giáp, Can Chi, nạp âm (phương Đông) ---------- */

export const ANIMALS = Object.freeze(['Chuột', 'Trâu', 'Hổ', 'Mèo', 'Rồng', 'Rắn', 'Ngựa', 'Dê', 'Khỉ', 'Gà', 'Chó', 'Lợn']);
export const ELEMENTS = Object.freeze(['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ']);

// 30 cặp nạp âm trong vòng 60 hoa giáp, mỗi cặp ứng với 2 năm liền nhau, bắt đầu từ Giáp Tý.
// [tên, hành]
export const NAP_AM = Object.freeze([
  ['Hải Trung Kim', 'Kim'], ['Lư Trung Hỏa', 'Hỏa'], ['Đại Lâm Mộc', 'Mộc'], ['Lộ Bàng Thổ', 'Thổ'], ['Kiếm Phong Kim', 'Kim'],
  ['Sơn Đầu Hỏa', 'Hỏa'], ['Giản Hạ Thủy', 'Thủy'], ['Thành Đầu Thổ', 'Thổ'], ['Bạch Lạp Kim', 'Kim'], ['Dương Liễu Mộc', 'Mộc'],
  ['Tuyền Trung Thủy', 'Thủy'], ['Ốc Thượng Thổ', 'Thổ'], ['Tích Lịch Hỏa', 'Hỏa'], ['Tùng Bách Mộc', 'Mộc'], ['Trường Lưu Thủy', 'Thủy'],
  ['Sa Trung Kim', 'Kim'], ['Sơn Hạ Hỏa', 'Hỏa'], ['Bình Địa Mộc', 'Mộc'], ['Bích Thượng Thổ', 'Thổ'], ['Kim Bạch Kim', 'Kim'],
  ['Phú Đăng Hỏa', 'Hỏa'], ['Thiên Hà Thủy', 'Thủy'], ['Đại Trạch Thổ', 'Thổ'], ['Thoa Xuyến Kim', 'Kim'], ['Tang Đố Mộc', 'Mộc'],
  ['Đại Khê Thủy', 'Thủy'], ['Sa Trung Thổ', 'Thổ'], ['Thiên Thượng Hỏa', 'Hỏa'], ['Thạch Lựu Mộc', 'Mộc'], ['Đại Hải Thủy', 'Thủy'],
]);

/** Nạp âm của một năm trong vòng 60 (cycle 0..59). */
export function napAmOf(cycle) {
  const i = Math.floor(cycle / 2);
  return { index: i, name: NAP_AM[i][0], element: NAP_AM[i][1] };
}

// Tam hợp: 4 nhóm, mỗi nhóm 3 chi cách nhau 4 năm. Tứ hành xung: 3 nhóm, mỗi nhóm 4 chi cách nhau 3 năm.
export const TAM_HOP = Object.freeze([[8, 0, 4], [2, 6, 10], [5, 9, 1], [11, 3, 7]]);
export const TU_HANH_XUNG = Object.freeze([[0, 6, 3, 9], [4, 10, 1, 7], [2, 8, 5, 11]]);
export const tamHopOf = (chi) => TAM_HOP.find((g) => g.includes(chi));
export const xungOf = (chi) => TU_HANH_XUNG.find((g) => g.includes(chi));

// Ngũ hành: thứ tự tương sinh Mộc → Hỏa → Thổ → Kim → Thủy → Mộc.
export const SINH_ORDER = Object.freeze(['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy']);
export const sinhOf = (e) => SINH_ORDER[(SINH_ORDER.indexOf(e) + 1) % 5]; // e sinh ra hành này
export const khacOf = (e) => SINH_ORDER[(SINH_ORDER.indexOf(e) + 2) % 5]; // e khắc hành này
export const sinhByOf = (e) => SINH_ORDER[(SINH_ORDER.indexOf(e) + 4) % 5]; // hành sinh ra e
export const khacByOf = (e) => SINH_ORDER[(SINH_ORDER.indexOf(e) + 3) % 5]; // hành khắc e

/* ---------- Bầu trời thật: Mặt Trời nằm trong chòm sao nào ---------- */

// Kinh độ hoàng đạo (độ, hệ J2000) nơi hoàng đạo đi vào từng chòm sao theo ranh giới IAU (Delporte, 1930).
// Tính bằng hàm Constellation() của thư viện astronomy-engine, làm tròn tới 0,001°.
export const CONSTELLATIONS = Object.freeze([
  { id: 'Ari', name: 'Bạch Dương', latin: 'Aries', from: 28.689 },
  { id: 'Tau', name: 'Kim Ngưu', latin: 'Taurus', from: 53.42 },
  { id: 'Gem', name: 'Song Tử', latin: 'Gemini', from: 90.142 },
  { id: 'Cnc', name: 'Cự Giải', latin: 'Cancer', from: 117.99 },
  { id: 'Leo', name: 'Sư Tử', latin: 'Leo', from: 138.04 },
  { id: 'Vir', name: 'Xử Nữ', latin: 'Virgo', from: 173.853 },
  { id: 'Lib', name: 'Thiên Bình', latin: 'Libra', from: 217.813 },
  { id: 'Sco', name: 'Thiên Yết (Bọ Cạp)', latin: 'Scorpius', from: 241.041 },
  { id: 'Oph', name: 'Xà Phu', latin: 'Ophiuchus', from: 247.64 },
  { id: 'Sgr', name: 'Nhân Mã', latin: 'Sagittarius', from: 266.24 },
  { id: 'Cap', name: 'Ma Kết', latin: 'Capricornus', from: 299.658 },
  { id: 'Aqr', name: 'Bảo Bình', latin: 'Aquarius', from: 327.489 },
  { id: 'Psc', name: 'Song Ngư', latin: 'Pisces', from: 351.653 },
]);

const norm360 = (x) => ((x % 360) + 360) % 360;

/**
 * Kinh độ hoàng đạo biểu kiến của Mặt Trời (độ, theo điểm xuân phân của chính ngày đó).
 * Công thức độ chính xác thấp của Jean Meeus (Astronomical Algorithms, ch. 25), sai số khoảng 0,01°.
 * @param {number} jd  ngày Julius (giờ UT)
 */
export function sunApparentLongitude(jd) {
  const T = (jd - 2451545.0) / 36525;
  const r = Math.PI / 180;
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M * r) +
    (0.019993 - 0.000101 * T) * Math.sin(2 * M * r) +
    0.000289 * Math.sin(3 * M * r);
  const omega = 125.04 - 1934.136 * T;
  return norm360(L0 + C - 0.00569 - 0.00478 * Math.sin(omega * r));
}

/** Đổi kinh độ hoàng đạo theo điểm xuân phân của ngày đó về hệ J2000 (trừ phần tuế sai từ năm 2000). */
export function toJ2000(lonOfDate, jd) {
  const T = (jd - 2451545.0) / 36525;
  return norm360(lonOfDate - (5029.0966 * T + 1.11113 * T * T) / 3600);
}

/** Chòm sao (ranh giới IAU) chứa một kinh độ hoàng đạo J2000. */
export function constellationAt(lonJ2000) {
  const x = norm360(lonJ2000);
  let found = CONSTELLATIONS[CONSTELLATIONS.length - 1];
  for (const c of CONSTELLATIONS) if (x >= c.from) found = c;
  return found;
}

/**
 * Mặt Trời nằm trong chòm sao nào vào ngày sinh (giờ Việt Nam).
 * Không biết giờ sinh nên lấy 12 giờ trưa làm mốc. Mặt Trời đi gần 1° mỗi ngày; nếu trong ngày đó nó vượt qua
 * một ranh giới thì `crossing` cho biết chòm lúc 0 giờ và lúc 24 giờ.
 */
export function realSky({ day, month, year }) {
  const jd0 = jdFromDate(day, month, year) - 0.5 - 7 / 24; // 0:00 UTC+7
  const at = (jd) => constellationAt(toJ2000(sunApparentLongitude(jd), jd));
  const noon = jd0 + 0.5;
  const lon = sunApparentLongitude(noon);
  const start = at(jd0);
  const end = at(jd0 + 1);
  return {
    lon,
    lonJ2000: toJ2000(lon, noon),
    constellation: at(noon),
    crossing: start.id !== end.id ? { from: start, to: end } : null,
  };
}

/* ---------- Tổng hợp cho một ngày sinh ---------- */

/** Mọi thông tin của thẻ cho một ngày sinh dương lịch hợp lệ. */
export function profile(date) {
  const { day, month, year } = date;
  const sign = sunSign(day, month);
  const lunar = solarToLunar(day, month, year);
  const cc = yearCanChi(lunar.year);
  const tet = tetOf(year);
  return {
    sign,
    lunar,
    canChi: cc,
    animal: ANIMALS[cc.chi],
    napAm: napAmOf(cc.cycle),
    // Sinh trong năm dương nhưng trước Tết thì con giáp thuộc năm âm trước.
    beforeTet: lunar.year < year,
    tet,
    sky: realSky(date),
  };
}

export { CAN, CHI };
