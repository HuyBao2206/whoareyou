// Âm lịch Việt Nam và Can Chi. Hàm thuần, chạy được cả trong trình duyệt lẫn Node.
// Thuật toán của Hồ Ngọc Đức (https://www.informatik.uni-leipzig.de/~duc/amlich/), giữ nguyên các hằng số gốc.
// Mặc định tính theo múi giờ UTC+7, giờ chuẩn của lịch Việt Nam. Lịch Trung Quốc dùng UTC+8 nên có năm Tết lệch ngày.

export const VN_TIMEZONE = 7;

const INT = Math.floor;
const PI = Math.PI;

/** Số ngày Julius của một ngày dương lịch (lịch Gregory từ 15/10/1582, trước đó là lịch Julius). */
export function jdFromDate(dd, mm, yy) {
  const a = INT((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  let jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
  if (jd < 2299161) jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
  return jd;
}

/** Ngày dương lịch từ số ngày Julius. Trả về { day, month, year }. */
export function jdToDate(jd) {
  let a, b, c;
  if (jd > 2299160) {
    a = jd + 32044;
    b = INT((4 * a + 3) / 146097);
    c = a - INT((b * 146097) / 4);
  } else {
    b = 0;
    c = jd + 32082;
  }
  const d = INT((4 * c + 3) / 1461);
  const e = c - INT((1461 * d) / 4);
  const m = INT((5 * e + 2) / 153);
  return {
    day: e - INT((153 * m + 2) / 5) + 1,
    month: m + 3 - 12 * INT(m / 10),
    year: b * 100 + d - 4800 + INT(m / 10),
  };
}

/** Thời điểm sóc (trăng mới) thứ k tính từ 1/1/1900, theo ngày Julius (giờ UT). */
function newMoon(k) {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const dr = PI / 180;
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
  Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
  let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
  C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
  C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
  C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
  C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
  C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
  C1 = C1 + 0.001 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
  const deltat =
    T < -11
      ? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3
      : -0.000278 + 0.000265 * T + 0.000262 * T2;
  return Jd1 + C1 - deltat;
}

/** Kinh độ Mặt Trời (radian, 0..2π) tại thời điểm jdn (ngày Julius, giờ UT). */
function sunLongitudeRad(jdn) {
  const T = (jdn - 2451545.0) / 36525;
  const T2 = T * T;
  const dr = PI / 180;
  const M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
  let DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
  DL += (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.00029 * Math.sin(dr * 3 * M);
  let L = (L0 + DL) * dr;
  L -= PI * 2 * INT(L / (PI * 2));
  return L;
}

/** Cung (0..11, mỗi cung 30°) của kinh độ Mặt Trời lúc 0 giờ ngày dayNumber theo múi giờ cho trước. */
const sunSector = (dayNumber, tz) => INT((sunLongitudeRad(dayNumber - 0.5 - tz / 24) / PI) * 6);

const newMoonDay = (k, tz) => INT(newMoon(k) + 0.5 + tz / 24);

/** Ngày bắt đầu tháng 11 âm lịch (tháng chứa Đông chí) của năm yy. */
function lunarMonth11(yy, tz) {
  const off = jdFromDate(31, 12, yy) - 2415021;
  const k = INT(off / 29.530588853);
  let nm = newMoonDay(k, tz);
  if (sunSector(nm, tz) >= 9) nm = newMoonDay(k - 1, tz);
  return nm;
}

/** Vị trí tháng nhuận trong năm có 13 tháng, tính từ tháng 11 năm trước. */
function leapMonthOffset(a11, tz) {
  const k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
  let last;
  let i = 1;
  let arc = sunSector(newMoonDay(k + i, tz), tz);
  do {
    last = arc;
    i++;
    arc = sunSector(newMoonDay(k + i, tz), tz);
  } while (arc !== last && i < 14);
  return i - 1;
}

/**
 * Đổi ngày dương lịch sang âm lịch.
 * @returns {{ day:number, month:number, year:number, leap:boolean }}
 */
export function solarToLunar(dd, mm, yy, tz = VN_TIMEZONE) {
  const dayNumber = jdFromDate(dd, mm, yy);
  const k = INT((dayNumber - 2415021.076998695) / 29.530588853);
  let monthStart = newMoonDay(k + 1, tz);
  if (monthStart > dayNumber) monthStart = newMoonDay(k, tz);
  let a11 = lunarMonth11(yy, tz);
  let b11 = a11;
  let lunarYear;
  if (a11 >= monthStart) {
    lunarYear = yy;
    a11 = lunarMonth11(yy - 1, tz);
  } else {
    lunarYear = yy + 1;
    b11 = lunarMonth11(yy + 1, tz);
  }
  const lunarDay = dayNumber - monthStart + 1;
  const diff = INT((monthStart - a11) / 29);
  let leap = false;
  let lunarMonth = diff + 11;
  if (b11 - a11 > 365) {
    const leapDiff = leapMonthOffset(a11, tz);
    if (diff >= leapDiff) {
      lunarMonth = diff + 10;
      if (diff === leapDiff) leap = true;
    }
  }
  if (lunarMonth > 12) lunarMonth -= 12;
  if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
  return { day: lunarDay, month: lunarMonth, year: lunarYear, leap };
}

/** Ngày Tết (mồng 1 tháng Giêng) của năm âm lịch bắt đầu trong năm dương lịch yy. */
export function tetOf(yy, tz = VN_TIMEZONE) {
  // Tết luôn rơi vào khoảng 21/1 đến 20/2.
  for (let jd = jdFromDate(21, 1, yy); jd <= jdFromDate(20, 2, yy); jd++) {
    const d = jdToDate(jd);
    const l = solarToLunar(d.day, d.month, d.year, tz);
    if (l.day === 1 && l.month === 1 && !l.leap) return d;
  }
  return null;
}

/* ---------- Can Chi ---------- */

export const CAN = Object.freeze(['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý']);
export const CHI = Object.freeze(['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi']);

const mod = (n, m) => ((n % m) + m) % m;

/**
 * Can Chi của một năm âm lịch.
 * Năm 4 (sau Công nguyên) là năm Giáp Tý, nên chỉ số trong vòng 60 năm là (năm − 4) mod 60.
 * @returns {{ can:number, chi:number, cycle:number, name:string }}  can 0..9, chi 0..11, cycle 0..59
 */
export function yearCanChi(lunarYear) {
  const cycle = mod(lunarYear - 4, 60);
  const can = mod(lunarYear - 4, 10);
  const chi = mod(lunarYear - 4, 12);
  return { can, chi, cycle, name: `${CAN[can]} ${CHI[chi]}` };
}
