// Thông điệp cho từng cặp chỉ số × con số. Mỗi chỉ số nằm trong một file riêng ở thư mục messages/.
// Cấu trúc dữ liệu và quy tắc viết: review/huong-dan-viet-than-so-hoc.md.
// Sau khi sửa, chạy: node tools/check-copy.mjs && node tools/check-messages.mjs

import lifePath from './messages/life-path.js';
import personalYear from './messages/personal-year.js';
import expression from './messages/expression.js';
import soul from './messages/soul.js';
import personality from './messages/personality.js';
import PERSONAL_MONTH from './messages/personal-month.js';
import ORIGINS from './messages/origins.js';

export const MESSAGES = { lifePath, personalYear, expression, soul, personality };
export { PERSONAL_MONTH, ORIGINS };
