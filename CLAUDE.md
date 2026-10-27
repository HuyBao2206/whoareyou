# CLAUDE.md

## Web này là gì

“Thấu Hiểu & Phát Triển Bản Thân” của HUB, chạy trên GitHub Pages: https://huybao2206.github.io/whoareyou/

- HTML/CSS/JS thuần (ES modules), **không có bước build**. Đẩy lên `main` là Pages cập nhật.
- Mới xong thẻ **Thần số học**. 6 thẻ còn lại đang “Sắp ra mắt” (chỉ có mô tả trong `config.js`).
- Mọi phép tính chạy trên trình duyệt. Không lưu, không gửi tên hay ngày sinh đi đâu; URL kết quả chỉ chứa các con số.

## Cấu trúc thư mục

```
index.html, 404.html          trang chủ, trang lỗi (chữ viết thẳng trong HTML, cả meta description)
assets/css/                   tokens, base, components, overlay, modules/<thẻ>.css
assets/js/config.js           tên web, liên kết, danh sách 7 thẻ (mô tả, nội dung “Sắp ra mắt”), tuỳ chọn thần số học
assets/js/main.js             lưới thẻ, mở thẻ trong overlay, thẻ “Sắp ra mắt”
assets/js/core/               router (hash), overlay, theme, toast, glyphs, motion, utils
assets/js/modules/numerology/
  calc.js                     hàm tính thuần (dùng được cả trong Node); calc.test.html là trang kiểm thử
  content.js                  chữ phần giới thiệu, cách tính, bộ tính
  messages.js                 gom thông điệp từ messages/*.js (life-path, personal-year, expression, soul, personality)
  view.js, results.js         giao diện bộ tính, trang kết quả và tra cứu
tools/check-copy.mjs          quét văn phong mọi chữ hiển thị
tools/check-messages.mjs      kiểm tra đủ mục, đủ trường cho thông điệp
docs/, research/, review/     brief, ghi chú nghiên cứu, bản nháp biên tập (không hiển thị trên web)
```

## Thêm một thẻ mới

1. Tạo `assets/js/modules/<the>/view.js`, export mặc định `{ mount(api, route, ctx), update(route), unmount() }`. `api` có `body`, `scroller`, `setToc()`, `jumpTo()`; `ctx` có `navigate()`, `toast()`.
2. CSS riêng (nếu có) ở `assets/css/modules/<the>.css`, gắn `<link>` trong `index.html`.
3. Trong `config.js`, đổi `status: 'soon'` thành `'active'` và thêm `load: () => import('./modules/<the>/view.js')`.
4. Thêm file nội dung vào `MODULES` hoặc `FILES` trong `tools/check-copy.mjs`.

## Kiểm tra trước khi commit

- `python3 -m http.server` rồi mở `/assets/js/modules/numerology/calc.test.html`: mọi dòng phải “Đạt”.
- `node tools/check-copy.mjs`: không còn lỗi. Cảnh báo thì đọc lại bằng mắt.
- `node tools/check-messages.mjs` hiện vẫn báo thiếu `note`, `ORIGINS`, `PERSONAL_MONTH` và thừa `theme`, `byQuarter` ở Năm cá nhân: dữ liệu chưa chuyển sang cấu trúc mới trong `review/huong-dan-viet-than-so-hoc.md`, không phải lỗi do sửa câu chữ.
- Mở web, xem console không có lỗi (ngoài lỗi tải font/GSAP nếu máy không ra được mạng).

## Văn phong (mọi chữ người dùng nhìn thấy)

Sửa cách nói, không sửa nội dung: giữ ý, số lượng ý, cấu trúc dữ liệu, tên trường.

1. **Không lặp khuôn.** Mỗi đoạn tóm tắt mở và kết một kiểu. Không mở bằng “Người mang số X thường…”, “Số … X cho thấy…”; không kết bằng “Bài học của số X là…”, “Thử thách của bạn là…”. Đọc liền các số trong một nhóm phải không thấy cùng khuôn. Tên gọi (`title`) cũng không đồng loạt “Người…”, “Muốn…”, “Dáng vẻ…”.
2. **Không câu nào cũng mở bằng “Bạn”.** Đưa trạng ngữ lên đầu, lược chủ ngữ khi đã rõ (“Dễ nghe góp ý thành chê.”).
3. **Lời khuyên nói như người Việt:** “Thử…”, “Nên…”, “Lần tới, cứ…”, “Muốn… thì…”. Không viết kiểu dịch “Tuần này, bạn chọn…”.
4. **Không dùng từ sai nghĩa, cụm dịch từ tiếng Anh:** “rộng rãi thời gian”, “chạm tới người khác”, “đặt chân xuống đất”, “cho phép mình vui”, “đời sống bên trong phong phú”, “nỗi lo có hình dạng”, “mang lại năng lượng”, “lên lịch nghỉ ngơi”, “tạo không gian”. Gặp cụm nào người Việt không nói thì đổi sang cách nói quen.
5. **Ví dụ phải thật.** Ví dụ gượng hoặc na ná ví dụ bên cạnh thì viết lại hoặc bỏ.
6. **Không cứng, không sáo:** bỏ “nhằm”, “tiến hành”, “đối với việc”, “điều này cho thấy”; không dùng “hành trình”, “khám phá bản thân”, “vũ trụ gửi gắm”, “lan toả”, “toả sáng”, “phiên bản tốt nhất”, “năng lượng” (danh sách đầy đủ trong `tools/check-copy.mjs`).
7. “Thường”, “có thể”, “đôi khi”: tối đa 1 lần mỗi đoạn.

Trình bày:
- Tiêu đề chỉ viết hoa chữ cái đầu (“Năm cá nhân”). Tên web giữ nguyên “Thấu Hiểu & Phát Triển Bản Thân”.
- Không dùng “—” giữa câu (chỉ chữ ký “— HUB”).
- Hạn chế dấu chấm than và emoji.

**Giữ nguyên giọng riêng của HUB:** đoạn “Lời của HUB”, câu có “ace”, tiêu đề “Khám phá bản thân qua những thông điệp từ vũ trụ :))))”, chữ ký “— HUB”. Muốn đổi thì hỏi HUB trước.

## Quy tắc chữ Y (bộ tính theo tên)

- **Mặc định:** Y luôn là nguyên âm, đúng với tên tiếng Việt (Huy, Vy, Thủy, Yến). `yMode: 'vowel'`.
- **Công tắc “Tên nước ngoài”** ngay dưới ô nhập tên (`yMode: 'foreign'`): Y đứng **ngay trước một nguyên âm** trong cùng từ là phụ âm (YOLANDA, MAYA); các trường hợp khác vẫn là nguyên âm (LYNN, HUY).
- Chip chữ cái, bảng chữ cái và kết quả đổi theo đúng cách tính. Phần “Cách tính” có một câu giải thích công tắc.
- Code: `yModeOf` và `isVowelAt` trong `calc.js`. Test bắt buộc: “Bảo Huy” mặc định ra Sứ mệnh 9, Linh hồn 8, Nhân cách 1.
