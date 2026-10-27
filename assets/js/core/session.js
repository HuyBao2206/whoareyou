// Giá trị dùng chung giữa các thẻ trong cùng một phiên (sessionStorage): đóng tab là mất.
// Chỉ dùng cho kết quả không mang thông tin cá nhân, vd mã Holland "SAE". Không bao giờ lưu tên hay ngày sinh.
//
// Khoá đang dùng:
//   holland         mã Holland 3 chữ của thẻ Sở thích nghề nghiệp, vd "SAE"
//   holland.scores  điểm sáu nhóm, dạng "R12I8A16S10E4C6"

const PREFIX = 'hub.';

/** Đọc một giá trị; trả về null nếu chưa có hoặc trình duyệt chặn sessionStorage. */
export function sessionGet(key) {
  try {
    return window.sessionStorage.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

/** Ghi một giá trị (null để xoá). Trả về false nếu không ghi được. */
export function sessionSet(key, value) {
  try {
    if (value == null) window.sessionStorage.removeItem(PREFIX + key);
    else window.sessionStorage.setItem(PREFIX + key, String(value));
    return true;
  } catch {
    return false;
  }
}
