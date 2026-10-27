# CLAUDE.md

## Web này là gì

“Thấu Hiểu & Phát Triển Bản Thân” của HUB, chạy trên GitHub Pages: https://huybao2206.github.io/whoareyou/

- HTML/CSS/JS thuần (ES modules), **không có bước build**. Đẩy lên `main` là Pages cập nhật.
- Đã xong thẻ **Thần số học** (chuẩn mẫu về thiết kế và tổ chức code) và **Cung hoàng đạo & con giáp**. 5 thẻ còn lại đang “Sắp ra mắt” (chỉ có mô tả trong `config.js`).
- Mọi phép tính chạy trên trình duyệt. Không lưu, không gửi tên hay ngày sinh đi đâu; URL kết quả chỉ chứa các con số.

## Cấu trúc thư mục

```
index.html, 404.html          trang chủ, trang lỗi (chữ viết thẳng trong HTML, cả meta description)
assets/css/                   tokens, base, components, overlay, shared (thành phần dùng chung), modules/<thẻ>.css
assets/js/config.js           tên web, liên kết, danh sách 7 thẻ (mô tả, nội dung “Sắp ra mắt”), tuỳ chọn thần số học
assets/js/main.js             lưới thẻ, mở thẻ trong overlay, thẻ “Sắp ra mắt”
assets/js/core/               router (hash), overlay, theme, toast, glyphs, motion, utils
                              + thành phần dùng chung cho thẻ mới (xem mục bên dưới)
assets/js/modules/numerology/
  calc.js                     hàm tính thuần (dùng được cả trong Node); calc.test.html là trang kiểm thử
  content.js                  chữ phần giới thiệu, cách tính, bộ tính
  messages.js                 gom thông điệp từ messages/*.js (life-path, personal-year, expression, soul, personality)
  view.js, results.js         giao diện bộ tính, trang kết quả và tra cứu
assets/js/modules/zodiac/     thẻ Cung hoàng đạo & con giáp ("Hai bầu trời")
  calc.js                     cung theo bảng ngày (±1 ngày là ranh giới), con giáp, nạp âm, tam hợp, ngũ hành,
                              chòm sao thật theo ranh giới IAU; calc.test.html là trang kiểm thử
  signs.js, animals.js        12 cung, 12 con giáp; content.js: chữ còn lại và nguồn tham khảo
  rings.js, glyphs.js, view.js  hai vòng trời (SVG) quay rồi khoá, ký hiệu cung, giao diện
tools/check-copy.mjs          quét văn phong mọi chữ hiển thị
tools/check-messages.mjs      kiểm tra đủ mục, đủ trường cho thông điệp
docs/, research/, review/     brief, ghi chú nghiên cứu, bản nháp biên tập (không hiển thị trên web)
```

## Thành phần dùng chung (dùng lại cho mọi thẻ mới)

| Thành phần | File | Cách dùng |
|---|---|---|
| Âm lịch Việt Nam, Can Chi | `core/lunar.js` | `solarToLunar(d, m, y)` theo thuật toán Hồ Ngọc Đức, UTC+7; `tetOf(y)`; `yearCanChi(năm âm)`. Đã đối chiếu từng ngày 1950–2025. |
| Ô nhập ngày sinh | `core/date-input.js` + `.di` trong `shared.css` | `dateInputHtml({ id })` rồi `bindDateInput(root)`; kiểm tra bằng `validateDate(value)` (hàm thuần). |
| Ngăn “Nguồn tham khảo” | `core/sources.js` + `.srcs` | `sourcesHtml({ id, groups \| items, updated: 'MM/YYYY' })`. Mỗi nguồn: `{ title, by, year, url, note }`. Tên bài giữ nguyên cách viết gốc. |
| Dòng “Cập nhật” | `core/sources.js` + `.upd` | `updatedHtml('10/2026')`, đã có sẵn ở cuối ngăn nguồn. |
| Bộ xuất ảnh kết quả | `core/share-image.js` | `saveImage({ filename, width, height, fonts, draw(ctx, kit) })`. Vẽ thẳng lên canvas (không chụp DOM), `kit.brand()` vẽ chân trang có dấu HUB. Không vẽ tên hay ngày sinh. |

Mỗi thẻ mới phải có: ngăn “Nguồn tham khảo” và dòng “Cập nhật: tháng MM/YYYY”; logic tính là hàm thuần có trang `calc.test.html`; nút lưu ảnh; chạy được khi thiếu GSAP và khi bật reduced-motion; thao tác kéo/vuốt có cách làm tương đương bằng nút và bàn phím.

## Thêm một thẻ mới

1. Tạo `assets/js/modules/<the>/view.js`, export mặc định `{ mount(api, route, ctx), update(route), unmount() }`. `api` có `body`, `scroller`, `setToc()`, `jumpTo()`; `ctx` có `navigate()`, `toast()`.
2. CSS riêng ở `assets/css/modules/<the>.css`, gắn `<link>` trong `index.html`. Bảng màu riêng của thẻ khai báo trong lớp gốc của thẻ (ví dụ `.zd { --zd-navy: … }`), có bản cho theme tối.
3. Trong `config.js`, đổi `status: 'soon'` thành `'active'` và thêm `load: () => import('./modules/<the>/view.js')`.
4. Thêm file nội dung vào `MODULES` hoặc `FILES` trong `tools/check-copy.mjs`.

## Kiểm tra trước khi commit

- `python3 -m http.server` rồi mở `calc.test.html` của từng thẻ (`assets/js/modules/<the>/calc.test.html`): mọi dòng phải “Đạt”.
- `node tools/check-copy.mjs`: không còn lỗi. Cảnh báo thì đọc lại bằng mắt.
- `node tools/check-messages.mjs` hiện vẫn báo thiếu `note`, `ORIGINS`, `PERSONAL_MONTH` và thừa `theme`, `byQuarter` ở Năm cá nhân: dữ liệu Thần số học chưa chuyển sang cấu trúc mới trong `review/huong-dan-viet-than-so-hoc.md`.
- `check-copy` hiện còn báo lỗi ở chữ của thẻ Thần số học (bản gốc, HUB chưa duyệt bản sửa). Thẻ mới thì phải sạch lỗi.
- Mở web, xem console không có lỗi (ngoài lỗi tải font/GSAP nếu máy không ra được mạng).

## Văn phong (mọi chữ người dùng nhìn thấy)

Áp dụng cho chữ viết mới. Chữ của thẻ Thần số học đang giữ bản gốc: HUB chưa ưng bản sửa câu chữ (đã hoàn tác), muốn sửa lại thì hỏi HUB trước.

1. **Không lặp khuôn.** Mỗi đoạn tóm tắt mở và kết một kiểu. Không mở bằng “Người mang số X thường…”, “Số … X cho thấy…”; không kết bằng “Bài học của số X là…”, “Thử thách của bạn là…”. Đọc liền các số trong một nhóm phải không thấy cùng khuôn. Tên gọi (`title`) cũng không đồng loạt “Người…”, “Muốn…”, “Dáng vẻ…”.
2. **Không câu nào cũng mở bằng “Bạn”.** Đưa trạng ngữ lên đầu, lược chủ ngữ khi đã rõ (“Dễ nghe góp ý thành chê.”).
3. **Lời khuyên nói như người Việt:** “Thử…”, “Nên…”, “Lần tới, cứ…”, “Muốn… thì…”. Không viết kiểu dịch “Tuần này, bạn chọn…”.
4. **Không dùng từ sai nghĩa, cụm dịch từ tiếng Anh:** “rộng rãi thời gian”, “chạm tới người khác”, “đặt chân xuống đất”, “cho phép mình vui”, “đời sống bên trong phong phú”, “nỗi lo có hình dạng”, “mang lại năng lượng”, “lên lịch nghỉ ngơi”, “tạo không gian”. Gặp cụm nào người Việt không nói thì đổi sang cách nói quen.
5. **Ví dụ phải thật.** Ví dụ gượng hoặc na ná ví dụ bên cạnh thì viết lại hoặc bỏ.
6. **Không cứng, không sáo:** bỏ “nhằm”, “tiến hành”, “đối với việc”, “điều này cho thấy”; không dùng “hành trình”, “khám phá bản thân”, “vũ trụ gửi gắm”, “lan toả”, “toả sáng”, “phiên bản tốt nhất”, “năng lượng” (danh sách đầy đủ trong `tools/check-copy.mjs`).
7. “Thường”, “có thể”, “đôi khi”: tối đa 1 lần mỗi đoạn.

Thêm cho thẻ mới:
- Hai giọng: phần kiến thức viết chuẩn mực như sách báo; phần kết quả gần gũi như người hiểu chuyện nói với mình.
- Lời nhắn cuối mỗi kết quả: 2–3 câu, bám đúng ý nghĩa kết quả đó, không sến, không khẩu hiệu.
- Không bịa: số liệu, nguồn, ý nghĩa truyền thống phải tra cứu. Quan niệm (chiêm tinh, con giáp, tam hợp…) ghi rõ là để tham khảo.

Trình bày:
- Tiêu đề chỉ viết hoa chữ cái đầu (“Năm cá nhân”). Tên web giữ nguyên “Thấu Hiểu & Phát Triển Bản Thân”.
- Không dùng “—” giữa câu (chỉ chữ ký “— HUB”).
- Hạn chế dấu chấm than và emoji.

**Giữ nguyên giọng riêng của HUB:** đoạn “Lời của HUB”, câu có “ace”, tiêu đề “Khám phá bản thân qua những thông điệp từ vũ trụ :))))”, chữ ký “— HUB”. Muốn đổi thì hỏi HUB trước.
