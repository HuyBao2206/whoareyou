// Ký hiệu 12 cung, vẽ bằng nét trong hộp 24×24 (cùng kiểu nét mảnh với logo HUB).
// Không dùng ký tự Unicode ♈…♓ vì nhiều điện thoại hiện chúng thành emoji màu.
// Thứ tự trùng với SIGNS trong calc.js. Dùng chung cho SVG trên trang và cho ảnh xuất ra (Path2D).

export const SIGN_PATHS = [
  // Bạch Dương: hai sừng cừu
  'M12 21V10M12 10C12 5.5 9.5 3.5 7 3.5S3 5.4 3 7.6 4.8 11 6.4 11M12 10C12 5.5 14.5 3.5 17 3.5S21 5.4 21 7.6 19.2 11 17.6 11',
  // Kim Ngưu: đầu bò có sừng
  'M3.5 3.5C4.5 7.5 7.8 9.6 12 9.6S19.5 7.5 20.5 3.5M12 9.6A5.6 5.6 0 1 0 12 20.8 5.6 5.6 0 1 0 12 9.6Z',
  // Song Tử: hai cột nối trên dưới
  'M4 4C9 6 15 6 20 4M4 20C9 18 15 18 20 20M9 5.4V18.6M15 5.4V18.6',
  // Cự Giải: hai vòng ngược chiều
  'M4.5 9.5A2.5 2.5 0 1 0 9.5 9.5 2.5 2.5 0 1 0 4.5 9.5M7 7C11 4.6 16.5 4.8 20.5 8M19.5 14.5A2.5 2.5 0 1 0 14.5 14.5 2.5 2.5 0 1 0 19.5 14.5M17 17C13 19.4 7.5 19.2 3.5 16',
  // Sư Tử: vòng tròn và đuôi cong
  'M4 15A3 3 0 1 0 10 15 3 3 0 1 0 4 15M10 15C10 10 8.5 4 13.5 4S19 7.5 17.5 11 14 16 15 19 18.5 21.5 20.5 19.5',
  // Xử Nữ: chữ m có vòng
  'M3 6.5C4.3 6.5 5 7.3 5 8.6V19M5 9.2C5 6.3 9 6.3 9 9.2V19M9 9.2C9 6.3 13 6.3 13 9.2V16.5C13 19.5 15.5 21 18 19M13 13.5C14.5 11 19.5 10.8 19.5 14.2S16 18.5 13 18',
  // Thiên Bình: cán cân
  'M3 20.5H21M3 16.5H8.6C7.1 15.4 6.2 13.6 6.2 11.6A5.8 5.8 0 0 1 17.8 11.6C17.8 13.6 16.9 15.4 15.4 16.5H21',
  // Bọ Cạp: chữ m có đuôi nhọn
  'M3 6.5C4.3 6.5 5 7.3 5 8.6V18M5 9.2C5 6.3 9 6.3 9 9.2V18M9 9.2C9 6.3 13 6.3 13 9.2V17C13 19 14.2 20 16 20H20.5M18.3 17.8L20.5 20 18.3 22.2',
  // Nhân Mã: mũi tên chéo
  'M4 20L20 4M12.5 4H20V11.5M7 11.5L12.5 17',
  // Ma Kết: chữ v có đuôi cuộn
  'M3 5.5C4.6 5.5 5.5 6.8 5.5 8.5V18.5M5.5 10C5.5 6 11 6 11 10V15.5C11 19 13.5 21 16.3 20S20 15.2 17.4 13.5 12.5 15.8 11 19.5',
  // Bảo Bình: hai làn sóng
  'M3 10.5L6.5 7.5 10 10.5 13.5 7.5 17 10.5 20.5 7.5M3 17L6.5 14 10 17 13.5 14 17 17 20.5 14',
  // Song Ngư: hai cung quay lưng, nối bằng một nét ngang
  'M5.5 3.5C10.5 7.5 10.5 16.5 5.5 20.5M18.5 3.5C13.5 7.5 13.5 16.5 18.5 20.5M4 12H20',
];

/** SVG ký hiệu cung i, dùng trong HTML. */
export function signSvg(i, { size = 24, stroke = 1.5, cls = '' } = {}) {
  return `<svg class="${cls}" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${SIGN_PATHS[i]}"/></svg>`;
}

// Chữ Hán của 10 thiên can, theo thứ tự Giáp → Quý.
export const CAN_HAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
