# Kiểm kê chữ trên web (Phase 0)

Ngày lập: 26/10/2026. Phạm vi: mọi chữ người dùng nhìn thấy trong `index.html`, `404.html`, `config.js`, `main.js`, `core/*.js`, và toàn bộ module Thần số học (`content.js`, `messages.js`, `view.js`, `results.js`, `calc.js`), gồm cả `aria-label`, `alt`, `title`, meta, og, nút, thông báo lỗi, toast.

Cách làm: một script quét và gắn cờ tự động (Phụ lục A, B), sau đó đọc tay từng chuỗi ngoài `messages.js` để ghi các lỗi script không bắt được (mục 2 dưới đây). `messages.js` không chẩn đoán từng câu vì brief đã quyết định viết mới hoàn toàn; phần thống kê đủ để thấy các lỗi lặp lại.

## 1. Tóm tắt

| Nhóm | Số chuỗi | Kết luận |
|---|---|---|
| `messages.js` (58 mục × 5 chỉ số) | 823 | Viết mới hoàn toàn. Không mục nào có nguồn. Thiếu `note`, `origin` ở cả 58 mục. |
| `content.js` (giới thiệu, cách tính, chữ trên bộ tính) | khoảng 70 | Viết mới phần giới thiệu và giải thích cách tính. Giữ phần lớn nhãn ngắn trên form, chỉ sửa câu sai. |
| `index.html`, `404.html`, meta, og | khoảng 60 | Viết mới hero, lời giới thiệu, “Về trang này”, meta. Giữ nguyên “Lời của HUB”. |
| `config.js` (mô tả 7 thẻ, chữ “Sắp ra mắt”) | 20 | Viết mới mô tả 7 thẻ. Chữ “Sắp ra mắt” sẽ bỏ khi 6 thẻ hoạt động. |
| Chuỗi giao diện trong JS (nút, toast, lỗi) | khoảng 80 | Phần lớn dùng được. Sửa vài câu sai từ và câu phụ thuộc quy ước tính chưa kiểm chứng. |

Các con số nổi bật trong `messages.js`:

- 229/368 ý trong `strengths`, `watchOut`, `advice` (62%) mở đầu bằng “Bạn”. 61/232 câu trong các đoạn tóm tắt cũng vậy.
- 54/58 đoạn tóm tắt mở bằng cùng một khuôn: “Người mang số” (9/13), “Năm cá nhân” (9/9), “Số sứ mệnh” (12/12), “Số linh hồn” (12/12), “Số nhân cách” (12/12).
- 37 đoạn tóm tắt kết bằng khuôn “Bài học…”, “Thử thách…”, “Có điều…”, “Điều cần giữ…”.
- 57/58 tên gọi theo một khuôn tự đặt: “Người…” (25), “Muốn…” (12), “Dáng vẻ…” (11), “Năm…” (9). Không tên nào khớp cách gọi trong tài liệu.
- 17 câu khuyên kiểu dịch “Tuần này, bạn + động từ…”; 15 cụm dịch hoặc kết hợp từ sai (“rộng rãi thời gian”, “chạm tới”, “cho phép mình”, “tạo được không gian ấm áp”, “đặt chân xuống đất”…); 18 ví dụ rập khuôn (tin nhắn, đồng nghiệp, buổi họp, giỏ hàng, bàn ăn).

## 2. Chẩn đoán đọc tay (ngoài `messages.js`)

Ký hiệu: **VM** = viết mới; **S** = sửa câu; **G** = giữ; **H** = giọng riêng của HUB, phải hỏi trước (xem `review/hieu-chinh.md`, mục cuối).

### `index.html`

| Vị trí | Chữ hiện tại (rút gọn) | Lỗi | Xử lý |
|---|---|---|---|
| `<title>`, og:title, tên web ở hero | “Thấu Hiểu & Phát Triển Bản Thân” | Tên thương hiệu, brief cho giữ cách viết hoa | G |
| meta description | “Một trang nhỏ giúp bạn hiểu mình hơn qua những cách nhìn quen thuộc như thần số học…” | Chỉ nói thần số học, sẽ lỗi thời khi có 7 thẻ | VM (Phase 9) |
| og:description, twitter:description | “Đọc ngày sinh và họ tên của bạn thành năm con số…” | “Đọc… thành” là kết hợp từ lạ; chỉ nói một thẻ | VM |
| og:image:alt | “…một dự án của HUB” | Ổn | G |
| skip link | “Bỏ qua, tới nội dung chính” | Lối nói hơi dịch (“Skip to”). Cách quen hơn: “Chuyển tới nội dung chính” | S |
| hero eyebrow | “Một trang nhỏ để ngẫm về mình” | Ổn | G (cân nhắc khi viết lại hero) |
| hero intro (ký “— HUB”) | “…Đọc để hiểu mình thêm một chút, lưu lại những thông điệp giá trị với bạn.” | “giá trị với bạn” sai kết hợp (giá trị là danh từ); câu đầu chung chung. Đoạn có chữ ký HUB | VM, **H** |
| section lead “Các thẻ chủ đề” | “Thần số học đã mở để bạn test thử… ace vẫn có thể bấm vào…” | Từ lóng “ace”, “test thử”; nội dung lỗi thời khi 6 thẻ hoạt động | **H** |
| h2 “Về trang này” | “Khám phá bản thân qua những thông điệp từ vũ trụ :)))).” | Câu đùa của HUB nhưng chứa 2 cụm cấm (“khám phá bản thân”, “vũ trụ”) và dấu chấm thừa sau “:))))” | **H** |
| about i | “…cách mình làm việc, cách mình thương người khác và cách mình ra quyết định…” | Hứa quá phạm vi (“cách mình thương người khác”); sẽ phải viết lại khi có 7 thẻ | VM |
| about ii | “Bạn hãy đọc kết quả như lời nhận xét của một người quen tinh ý…” | “Bạn hãy” là lối dịch; trùng ý gần nguyên văn với câu trích trong `content.js` (WHAT_IS.quote) | VM |
| about iii | “Dữ liệu của bạn ở yên trên máy…” | Đúng với code hiện tại. Phải viết lại khi thêm công tắc “Lưu kết quả trên máy này” (Phase 9) | G tạm, VM ở Phase 9 |
| Lời của HUB | “Dự án ma từ năm nào…” | Brief yêu cầu giữ nguyên | G |
| footer note | “Trang thông tin để tham khảo, không thay cho lời khuyên chuyên môn…” | Ổn | G |
| noscript | “Trang cần bật JavaScript…” | Ổn | G |

### `404.html`

| Vị trí | Chữ hiện tại (rút gọn) | Lỗi | Xử lý |
|---|---|---|---|
| lead | “…cộng các con số của lỗi này cho vui thì ra 8, con số của người cầm lái. Bạn cầm lái quay về trang chủ…” | “Người cầm lái” là tên tự đặt cho số 8, không có trong tài liệu; câu đùa “Bạn cầm lái quay về” gượng. Có thể là ý đùa HUB muốn giữ | VM, **H** |
| h1, nút, eyebrow | “Trang này không có ở đây”, “Về trang chủ”, “Lỗi 404” | Ổn | G |

### `config.js`

| Vị trí | Chữ hiện tại (rút gọn) | Lỗi | Xử lý |
|---|---|---|---|
| numerology.desc | “Đọc ngày sinh và họ tên của bạn thành năm con số…” | “Đọc… thành” lạ | VM |
| personality.desc | “…cho bạn thấy mình nạp năng lượng thế nào…” | “Nạp năng lượng” là cụm dịch và là khái niệm của MBTI, không phải Big Five mà thẻ sẽ dùng | VM |
| zodiac.desc | “Đặt cung hoàng đạo phương Tây cạnh con giáp phương Đông…” | Ổn về giọng, viết lại cho khớp nội dung mới | VM (Phase 3) |
| career-interests.desc | “Giúp bạn gọi tên kiểu việc mình thấy vui khi làm…” | Ổn về giọng | VM (Phase 5) |
| future-of-work.desc | “…kể bằng ví dụ gần gũi.” | Lỗi thời so với thiết kế thẻ mới (bản đồ nghề, nguồn có năm) | VM (Phase 6) |
| skills.desc, core-values.desc | | Ổn về giọng; viết lại theo nội dung mới | VM (Phase 7, 8) |
| `soon[]`, `SOON_NOTE` | | Bỏ khi thẻ hoạt động | Bỏ |

### `content.js`

| Vị trí | Chữ hiện tại (rút gọn) | Lỗi | Xử lý |
|---|---|---|---|
| EASTER_EGG | “Ồ, bạn đang tính cho chính người làm ra trang này đấy 👀” | Có emoji; giọng đùa, có thể HUB muốn giữ | **H** |
| INTRO.lead | “Thần số học đọc ngày sinh và họ tên của bạn thành vài con số, rồi gắn mỗi số với một nhóm tính cách và một bài học.” | “đọc… thành” lạ; “một bài học” là cách nói chưa có nguồn | VM |
| WHAT_IS.paragraphs[0] | “…tương truyền gắn với Pythagoras…” | Ý đúng hướng nhưng chưa có nguồn; thiếu nói rõ thần số học hiện đại hình thành từ đầu thế kỷ 20 | VM (mẫu số 1) |
| WHAT_IS.paragraphs[1] | “…giống cách mình đọc một cuốn tiểu thuyết rồi tự hỏi mình có giống nhân vật nào không…” | So sánh tự nghĩ, dài; “tấm gương để ngồi ngẫm” ổn | VM |
| WHAT_IS.quote | “Bạn đọc như đọc lời góp ý của một người quen tinh ý…” | Trùng ý với “Về trang này” ii | VM |
| INDEX_META.lifePath.text | “…hay vấp ở đâu và lớn lên nhờ điều gì.” | “lớn lên nhờ” là cách dịch “grow through” | VM |
| INDEX_META.expression.text | “…cách bạn đem năng lực của mình ra bên ngoài…” | Cần đối chiếu định nghĩa trong nguồn | VM |
| INDEX_META.personality.text | “…như trong buổi phỏng vấn hay lần đầu gặp một nhóm bạn mới.” | Ví dụ không cần thiết | VM |
| DATE_METHOD.rule.vn | “…cộng tiếp… cho tới khi còn từ 11 trở xuống…” | Quy ước giữ 10 chưa kiểm chứng | VM sau khi có kết luận ở `research/` |
| WHY_DIFFERENT | “Có nơi dừng lại khi tổng còn 10 hoặc 11…” | Chưa có nguồn | VM |
| NAME_METHOD.vowels | “Trong tên tiếng Việt, Y luôn đọc như nguyên âm…” | Ý đúng về ngữ âm; cần đối chiếu quy ước của các nguồn thần số học Việt | S |
| NAME_METHOD.reduce | “Cả ba số đều rút gọn về một chữ số từ 1 đến 9…” | Cần kiểm chứng (rút gọn cả tên hay từng từ) | S |
| Nhãn form (`CALCULATORS`) | “Ngày”, “Tháng”, “Năm muốn xem”, “Tính”… | Ổn | G |
| CALCULATORS.name.hint | “Gõ có dấu cũng được. Bạn nên dùng họ tên đầy đủ như trên giấy khai sinh.” | Ổn | G |

### Chuỗi giao diện trong JS

| Vị trí | Chữ hiện tại | Lỗi | Xử lý |
|---|---|---|---|
| results.js:218 | “Đoạn nào chạm tới bạn thì bấm…” | “chạm tới” là cụm dịch | S |
| results.js:215 | “Thông điệp từ những con số của bạn” | Tạm ổn; “thông điệp” dùng dày đặc khắp trang | S |
| results.js:38 | “Gợi ý theo từng quý” | Tiêu đề phụ thuộc nội dung `byQuarter` mới | Xem lại khi có nguồn |
| results.js:317 | “Số 1 chỉ xuất hiện khi tính theo cách phương Tây, còn số 10 chỉ xuất hiện khi tính theo cách phổ biến ở Việt Nam.” | Phụ thuộc kết luận kiểm chứng | VM |
| main.js:100, 136; view.js:640; results.js:251 | toast, lỗi tải | Ổn; “nhé” hơi dày nhưng hợp giọng thông báo | G |
| main.js:51, 59 | “Đang mở”, “Sắp ra mắt”, “Mở thẻ”, “Xem trước” | Ổn | G |
| theme.js:26, overlay.js:55 | “Chuyển sang giao diện tối/sáng”, “Đóng” | Ổn | G |

## Phụ lục A. Thống kê cờ tự động

Tổng số chuỗi đã quét: **1053** (messages.js: 823). Chuỗi có ít nhất một lỗi văn phong tự phát hiện (không tính “không có nguồn” và “thiếu trường”): **161**.

| Loại cờ | Số lần |
|---|---|
| không có nguồn | 582 |
| thiếu trường `note` | 58 |
| thiếu trường `origin` | 58 |
| tên tự đặt theo khuôn “…” | 57 |
| mở khuôn “…” | 54 |
| kết khuôn “…” | 37 |
| ví dụ rập khuôn (“…”) | 18 |
| câu khuyên kiểu dịch “…” | 17 |
| cụm dịch/sai kết hợp “…” | 16 |
| từ cấm “…” | 7 |
| câu khuyên mở bằng “…” | 1 |
| n câu liền mở bằng “…” | 1 |
| “…” ×n | 1 |
| emoji | 1 |

### Khuôn mở đầu đoạn tóm tắt (3 chữ đầu)

- **Số chủ đạo** (13 đoạn): “Người mang số” ×9; “Ở cách tính” ×1; “Số 11 được” ×1; “Số 22 được” ×1; “Số 33 được” ×1
- **Năm cá nhân** (9 đoạn): “Năm cá nhân” ×9
- **Số sứ mệnh** (12 đoạn): “Số sứ mệnh” ×12
- **Số linh hồn** (12 đoạn): “Số linh hồn” ×12
- **Số nhân cách** (12 đoạn): “Số nhân cách” ×12

### Khuôn tên gọi `title`

- **Số chủ đạo**: “Người…” ×13
- **Năm cá nhân**: “Năm…” ×9
- **Số sứ mệnh**: “Người…” ×12
- **Số linh hồn**: “Muốn…” ×12
- **Số nhân cách**: “Dáng vẻ…” ×11; “Sức…” ×1

## Phụ lục B. Bảng kiểm kê đầy đủ

Cột “Lỗi tự phát hiện” do script gắn; lỗi cần mắt người (bịa, sai nghĩa, sai giọng) ghi ở phần chẩn đoán phía trên. Mọi chuỗi trong `messages.js` đều mang cờ “không có nguồn” vì bản cũ không dựa trên ghi chú nghiên cứu nào.


### messages.js

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| Số chủ đạo 1 | title | Người mở lối đi riêng | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 1 | summary | Người mang số chủ đạo 1 thường thấy dễ chịu nhất khi được tự quyết việc của mình. Từ nhỏ bạn có thể đã thích làm theo cách riêng, kể cả khi cách đó chậm hơn … | mở khuôn “Người mang số…” (9/13); kết khuôn “Bài học lớn…”; không có nguồn |
| Số chủ đạo 1 · strengths[0] | strengths | Bạn dám bắt đầu. Một dự án nhóm còn nằm trên giấy, bạn đã lập xong file chung và chia việc cho từng người. | ví dụ rập khuôn (“file chung”); không có nguồn |
| Số chủ đạo 1 · strengths[1] | strengths | Bạn chịu trách nhiệm cho lựa chọn của mình. Khi quyết sai, bạn ít đổ lỗi mà tự tìm cách sửa. | không có nguồn |
| Số chủ đạo 1 · strengths[2] | strengths | Bạn làm việc độc lập tốt. Giao cho bạn một đầu việc rõ ràng rồi để bạn yên, kết quả thường tốt hơn khi có người đứng sau nhắc từng bước. | không có nguồn |
| Số chủ đạo 1 · watchOut[0] | watchOut | Bạn dễ nghe góp ý thành chê bai. Một câu “chỗ này hơi rối” từ đồng nghiệp có thể khiến bạn khó chịu cả buổi chiều. | ví dụ rập khuôn (“đồng nghiệp”); không có nguồn |
| Số chủ đạo 1 · watchOut[1] | watchOut | Vì quen tự làm, bạn hay ôm hết việc rồi mệt một mình, trong khi chỉ cần mở lời là có người giúp. | không có nguồn |
| Số chủ đạo 1 · watchOut[2] | watchOut | Lúc nóng vội, bạn có thể quyết thay người khác mà quên hỏi ý họ. | không có nguồn |
| Số chủ đạo 1 · advice[0] | advice | Tuần này, bạn chọn một việc mình hay tự làm và nhờ một người làm cùng. Để ý xem kết quả có tệ như bạn lo không. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số chủ đạo 1 · advice[1] | advice | Khi nhận góp ý, bạn đợi qua một đêm rồi hãy trả lời. Sáng hôm sau đọc lại, câu đó thường nhẹ hơn nhiều. | không có nguồn |
| Số chủ đạo 1 · advice[2] | advice | Viết ra một mục tiêu cho năm nay mà bạn muốn đạt vì chính mình, không phải để hơn ai. | không có nguồn |
| Số chủ đạo 1 · fields[0] | fields | Khởi nghiệp, kinh doanh nhỏ | – |
| Số chủ đạo 1 · fields[1] | fields | Quản lý dự án | – |
| Số chủ đạo 1 · fields[2] | fields | Nghề tự do | – |
| Số chủ đạo 1 · fields[3] | fields | Phát triển thị trường | – |
| Số chủ đạo 1 · fields[4] | fields | Thiết kế sản phẩm | – |
| Số chủ đạo 1 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 1 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 2 | title | Người giữ nhịp cho cả nhóm | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 2 | summary | Người mang số chủ đạo 2 rất nhạy với cảm xúc của người xung quanh. Bạn nhận ra một người bạn đang buồn chỉ qua cách họ trả lời tin nhắn cụt hơn mọi ngày. Bạn… | mở khuôn “Người mang số…” (9/13); ví dụ rập khuôn (“tin nhắn”); kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 2 · strengths[0] | strengths | Bạn lắng nghe thật lòng. Người khác hay tìm bạn để kể chuyện vì bạn không vội chen vào khuyên. | không có nguồn |
| Số chủ đạo 2 · strengths[1] | strengths | Bạn giỏi hoà giải. Khi hai người trong nhóm căng với nhau, bạn biết nói câu nào để cả hai cùng xuống nước. | không có nguồn |
| Số chủ đạo 2 · strengths[2] | strengths | Bạn kiên nhẫn với những việc cần thời gian, như kèm một bạn mới vào làm hay vun một mối quan hệ lâu dài. | không có nguồn |
| Số chủ đạo 2 · watchOut[0] | watchOut | Bạn hay nói “sao cũng được” dù trong lòng có ý riêng, rồi về nhà lại tiếc vì không nói ra. | không có nguồn |
| Số chủ đạo 2 · watchOut[1] | watchOut | Bạn dễ để lời nói của người khác ảnh hưởng tới tâm trạng cả ngày, nhất là một tin nhắn đã xem mà không trả lời. | ví dụ rập khuôn (“tin nhắn”); không có nguồn |
| Số chủ đạo 2 · watchOut[2] | watchOut | Khi phải chọn giữa hai bên, bạn có thể chần chừ quá lâu vì sợ làm ai đó buồn. | không có nguồn |
| Số chủ đạo 2 · advice[0] | advice | Lần tới khi được hỏi ăn gì hay đi đâu, bạn thử nói hẳn một lựa chọn thay vì “tuỳ bạn”. | không có nguồn |
| Số chủ đạo 2 · advice[1] | advice | Mỗi tối, bạn viết vài dòng về điều mình cảm thấy trong ngày. Việc này giúp bạn tách cảm xúc của mình khỏi cảm xúc của người khác. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số chủ đạo 2 · advice[2] | advice | Khi cần từ chối, bạn có thể nói ngắn và tử tế: “Lần này mình không giúp được, mong bạn thông cảm.” Bạn không cần giải thích dài. | không có nguồn |
| Số chủ đạo 2 · fields[0] | fields | Hỗ trợ khách hàng | – |
| Số chủ đạo 2 · fields[1] | fields | Nhân sự | – |
| Số chủ đạo 2 · fields[2] | fields | Điều phối dự án | – |
| Số chủ đạo 2 · fields[3] | fields | Giáo dục mầm non, tiểu học | – |
| Số chủ đạo 2 · fields[4] | fields | Quan hệ đối tác | – |
| Số chủ đạo 2 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 2 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 3 | title | Người kể chuyện | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 3 | summary | Người mang số chủ đạo 3 cần được nói ra, viết ra hay vẽ ra những gì mình nghĩ. Bạn có thể biến một chuyện bình thường ở chỗ làm thành câu chuyện khiến cả bàn… | mở khuôn “Người mang số…” (9/13); ví dụ rập khuôn (“bàn ăn”); kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 3 · strengths[0] | strengths | Bạn diễn đạt tốt. Gặp một ý khó, bạn biết nói lại cho người khác hiểu bằng ví dụ gần gũi. | không có nguồn |
| Số chủ đạo 3 · strengths[1] | strengths | Bạn đem lại không khí dễ chịu. Buổi họp có bạn thường bớt căng hơn hẳn. | ví dụ rập khuôn (“buổi họp”); không có nguồn |
| Số chủ đạo 3 · strengths[2] | strengths | Bạn nghĩ ra nhiều ý mới, từ cách trang trí góc học tập tới tên gọi cho một sản phẩm. | không có nguồn |
| Số chủ đạo 3 · watchOut[0] | watchOut | Bạn dễ bắt đầu nhiều việc cùng lúc, nên trong máy có cả chục bản nháp chưa bao giờ xong. | không có nguồn |
| Số chủ đạo 3 · watchOut[1] | watchOut | Khi buồn, bạn hay giấu sau những câu đùa, khiến người thân không biết bạn đang cần được hỏi han. | không có nguồn |
| Số chủ đạo 3 · watchOut[2] | watchOut | Bạn có thể tiêu tiền theo hứng, nhất là cho những món đẹp mà sau đó ít dùng. | không có nguồn |
| Số chủ đạo 3 · advice[0] | advice | Bạn chọn một ý tưởng mình thích nhất và đặt hạn hoàn thành trong hai tuần. Nói hạn đó với một người bạn để có người nhắc. | câu khuyên mở bằng “Bạn + động từ”; không có nguồn |
| Số chủ đạo 3 · advice[1] | advice | Mỗi ngày dành mười lăm phút để viết, vẽ hoặc ghi âm. Bạn làm vì mình, không cần đăng lên đâu cả. | không có nguồn |
| Số chủ đạo 3 · advice[2] | advice | Trước khi mua một món không cần gấp, bạn để nó trong giỏ hàng ba ngày rồi hãy quyết. | ví dụ rập khuôn (“giỏ hàng”); không có nguồn |
| Số chủ đạo 3 · fields[0] | fields | Viết, biên tập nội dung | – |
| Số chủ đạo 3 · fields[1] | fields | Truyền thông, marketing | – |
| Số chủ đạo 3 · fields[2] | fields | Thiết kế, minh hoạ | – |
| Số chủ đạo 3 · fields[3] | fields | Giảng dạy, đào tạo | – |
| Số chủ đạo 3 · fields[4] | fields | Biểu diễn, dẫn chương trình | – |
| Số chủ đạo 3 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 3 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 4 | title | Người xây móng | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 4 | summary | Người mang số chủ đạo 4 thích mọi thứ có kế hoạch và làm tới đâu chắc tới đó. Bạn là kiểu người ghi chi tiêu từng khoản, hoặc ít nhất luôn biết tiền của mình… | mở khuôn “Người mang số…” (9/13); kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 4 · strengths[0] | strengths | Bạn đáng tin. Hẹn nộp thứ Sáu thì tới thứ Năm bạn đã gần xong. | không có nguồn |
| Số chủ đạo 4 · strengths[1] | strengths | Bạn biết chia việc lớn thành từng bước nhỏ và đi lần lượt, nên việc khó mấy cũng tìm được lối ra. | không có nguồn |
| Số chủ đạo 4 · strengths[2] | strengths | Bạn giữ được kỷ luật với những thói quen dài hơi như tập thể dục, học ngoại ngữ hay để dành tiền. | không có nguồn |
| Số chủ đạo 4 · watchOut[0] | watchOut | Bạn dễ khó chịu khi người khác làm theo cách khác mình, dù cách đó vẫn ra kết quả. | không có nguồn |
| Số chủ đạo 4 · watchOut[1] | watchOut | Bạn có thể làm việc tới quên nghỉ, rồi coi việc nghỉ ngơi là lười. | không có nguồn |
| Số chủ đạo 4 · watchOut[2] | watchOut | Khi có thay đổi bất ngờ, bạn hay phản ứng bằng cách cứng lại thay vì tìm phương án mới. | không có nguồn |
| Số chủ đạo 4 · advice[0] | advice | Trong lịch tuần này, bạn chừa ra một buổi không có kế hoạch gì cả và xem mình thấy thế nào. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số chủ đạo 4 · advice[1] | advice | Khi đồng nghiệp làm khác cách bạn, bạn hỏi lý do trước khi góp ý. Đôi khi bạn sẽ học được một mẹo mới. | ví dụ rập khuôn (“đồng nghiệp”); không có nguồn |
| Số chủ đạo 4 · advice[2] | advice | Với mỗi kế hoạch lớn, bạn viết sẵn một phương án dự phòng. Có nó rồi, thay đổi sẽ đỡ làm bạn chao đảo. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số chủ đạo 4 · fields[0] | fields | Kế toán, tài chính | – |
| Số chủ đạo 4 · fields[1] | fields | Kỹ thuật, xây dựng | – |
| Số chủ đạo 4 · fields[2] | fields | Vận hành, hậu cần | – |
| Số chủ đạo 4 · fields[3] | fields | Lập trình, kiểm thử phần mềm | – |
| Số chủ đạo 4 · fields[4] | fields | Quản lý chất lượng | – |
| Số chủ đạo 4 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 4 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 5 | title | Người thích đường mới | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 5 | summary | Người mang số chủ đạo 5 thường thấy bứt rứt khi một ngày trôi qua y hệt ngày hôm trước. Bạn học nhanh nhất khi được làm thật, đi thật, thử thật. Điểm cần để … | mở khuôn “Người mang số…” (9/13); kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 5 · strengths[0] | strengths | Bạn thích nghi nhanh. Chuyển tới thành phố mới hay đổi sang nhóm mới, bạn thường quen việc chỉ sau vài tuần. | không có nguồn |
| Số chủ đạo 5 · strengths[1] | strengths | Bạn dám thử. Món ăn lạ, công cụ mới hay một lối khác để về nhà, bạn đều muốn thử một lần cho biết. | không có nguồn |
| Số chủ đạo 5 · strengths[2] | strengths | Bạn nói chuyện được với nhiều kiểu người, nên hay là cầu nối giữa những nhóm vốn không quen nhau. | không có nguồn |
| Số chủ đạo 5 · watchOut[0] | watchOut | Bạn dễ bỏ ngang khi việc hết mới mẻ, kể cả những việc chỉ còn chút nữa là thấy kết quả. | không có nguồn |
| Số chủ đạo 5 · watchOut[1] | watchOut | Bạn hay quyết nhanh theo cảm hứng, như đặt vé đi chơi trước rồi mới tính chuyện tiền. | không có nguồn |
| Số chủ đạo 5 · watchOut[2] | watchOut | Khi bị gò vào quy định chặt, bạn có thể bực bội ra mặt và khiến người khác hiểu lầm là bạn coi thường họ. | không có nguồn |
| Số chủ đạo 5 · advice[0] | advice | Trước khi bỏ một việc, bạn tự hỏi mình chán việc này hay chỉ chán giai đoạn này. Hai câu trả lời dẫn tới hai lựa chọn rất khác nhau. | không có nguồn |
| Số chủ đạo 5 · advice[1] | advice | Giữ một khoản tiền riêng cho những chuyến đi và trải nghiệm. Có sẵn khoản đó, bạn vừa được tự do vừa không lo hụt tháng. | không có nguồn |
| Số chủ đạo 5 · advice[2] | advice | Biến việc lặp lại thành thử thách nhỏ, ví dụ làm xong báo cáo tuần nhanh hơn tuần trước mười phút. | không có nguồn |
| Số chủ đạo 5 · fields[0] | fields | Du lịch, sự kiện | – |
| Số chủ đạo 5 · fields[1] | fields | Bán hàng, kinh doanh | – |
| Số chủ đạo 5 · fields[2] | fields | Báo chí, sáng tạo nội dung | – |
| Số chủ đạo 5 · fields[3] | fields | Công việc hay đi lại | – |
| Số chủ đạo 5 · fields[4] | fields | Khởi nghiệp | – |
| Số chủ đạo 5 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 5 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 6 | title | Người giữ lửa | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 6 | summary | Người mang số chủ đạo 6 thấy mình có ích nhất khi chăm lo được cho người khác. Bạn là người nhớ sinh nhật cả nhóm, hay mang thêm hộp cơm cho bạn cùng phòng đ… | mở khuôn “Người mang số…” (9/13); ví dụ rập khuôn (“bạn cùng phòng”); kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 6 · strengths[0] | strengths | Bạn có trách nhiệm. Việc đã nhận, bạn lo cho tới nơi, kể cả khi không ai kiểm tra. | không có nguồn |
| Số chủ đạo 6 · strengths[1] | strengths | Bạn tạo được không gian ấm áp. Bạn bè hay thích tụ tập ở chỗ bạn vì ở đó thấy dễ chịu. | cụm dịch/sai kết hợp “tạo được không gian”; không có nguồn |
| Số chủ đạo 6 · strengths[2] | strengths | Bạn có mắt thẩm mỹ cho những thứ thường ngày, như cách bày bàn ăn hay sắp lại góc làm việc. | ví dụ rập khuôn (“bàn ăn”); không có nguồn |
| Số chủ đạo 6 · watchOut[0] | watchOut | Bạn dễ ôm việc của người khác vào mình, rồi mệt mà không dám kêu. | không có nguồn |
| Số chủ đạo 6 · watchOut[1] | watchOut | Đôi lúc sự quan tâm của bạn thành ra kiểm soát, như nhắc đi nhắc lại một người nên làm gì. | không có nguồn |
| Số chủ đạo 6 · watchOut[2] | watchOut | Bạn đặt chuẩn cao cho mình và người thân, nên dễ thất vọng khi mọi thứ không trọn vẹn. | không có nguồn |
| Số chủ đạo 6 · advice[0] | advice | Trước khi nhận lời giúp ai, bạn hỏi mình tuần này còn sức không. Nếu không, bạn có quyền hẹn dịp khác. | không có nguồn |
| Số chủ đạo 6 · advice[1] | advice | Khi muốn khuyên người thân, bạn hỏi trước “bạn có muốn nghe ý kiến của mình không” rồi mới nói. | không có nguồn |
| Số chủ đạo 6 · advice[2] | advice | Mỗi tuần dành một buổi cho việc chỉ mình thích, không phải làm vì ai cả. | không có nguồn |
| Số chủ đạo 6 · fields[0] | fields | Y tế, chăm sóc | – |
| Số chủ đạo 6 · fields[1] | fields | Giáo dục | – |
| Số chủ đạo 6 · fields[2] | fields | Thiết kế nội thất | – |
| Số chủ đạo 6 · fields[3] | fields | Nhà hàng, khách sạn | – |
| Số chủ đạo 6 · fields[4] | fields | Công tác xã hội | – |
| Số chủ đạo 6 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 6 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 7 | title | Người đi tìm lẽ | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 7 | summary | Người mang số chủ đạo 7 không dễ tin ngay điều người khác nói. Bạn muốn tự tìm hiểu, đọc thêm, so sánh vài nguồn rồi mới gật đầu. Bạn cần những khoảng yên tĩ… | mở khuôn “Người mang số…” (9/13); kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 7 · strengths[0] | strengths | Bạn phân tích giỏi. Trước khi mua một món đồ đắt tiền, bạn đã đọc kỹ đánh giá và biết rõ điểm yếu của nó. | không có nguồn |
| Số chủ đạo 7 · strengths[1] | strengths | Bạn tập trung sâu được. Khi đã mê một chủ đề, bạn có thể tìm hiểu nhiều giờ liền mà không thấy chán. | không có nguồn |
| Số chủ đạo 7 · strengths[2] | strengths | Bạn có trực giác tốt về con người, thường nhận ra điều không ổn trước khi người khác để ý. | không có nguồn |
| Số chủ đạo 7 · watchOut[0] | watchOut | Bạn có thể trông xa cách, khiến người mới quen nghĩ bạn khó gần hay đang chê họ. | không có nguồn |
| Số chủ đạo 7 · watchOut[1] | watchOut | Bạn dễ nghĩ quá nhiều. Một tin nhắn mơ hồ có thể khiến bạn đoán già đoán non cả buổi. | ví dụ rập khuôn (“tin nhắn”); không có nguồn |
| Số chủ đạo 7 · watchOut[2] | watchOut | Khi bị tổn thương, bạn hay rút vào trong và im lặng thay vì nói cho người kia biết. | không có nguồn |
| Số chủ đạo 7 · advice[0] | advice | Khi đã tìm hiểu kha khá, bạn đặt một hạn để ra quyết định, vì thông tin không bao giờ đủ trăm phần trăm. | không có nguồn |
| Số chủ đạo 7 · advice[1] | advice | Chọn một người tin cậy và kể cho họ nghe một điều bạn đang nghĩ. Nói ra thường nhẹ hơn bạn tưởng. | không có nguồn |
| Số chủ đạo 7 · advice[2] | advice | Giữ một khoảng yên tĩnh cố định mỗi ngày, ví dụ nửa tiếng trước khi ngủ, để bạn không phải chật vật tìm nó. | không có nguồn |
| Số chủ đạo 7 · fields[0] | fields | Nghiên cứu khoa học | – |
| Số chủ đạo 7 · fields[1] | fields | Phân tích dữ liệu | – |
| Số chủ đạo 7 · fields[2] | fields | Lập trình | – |
| Số chủ đạo 7 · fields[3] | fields | Tâm lý học | – |
| Số chủ đạo 7 · fields[4] | fields | Viết chuyên sâu, biên khảo | – |
| Số chủ đạo 7 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 7 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 8 | title | Người cầm lái | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 8 | summary | Người mang số chủ đạo 8 thường nghĩ tới kết quả và cách để đạt được nó. Bạn để ý tới chuyện tiền bạc, vị trí và sự ổn định từ khá sớm, và điều đó không có gì… | mở khuôn “Người mang số…” (9/13); kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 8 · strengths[0] | strengths | Bạn có đầu óc tổ chức. Chuyến đi chơi của cả nhóm, bạn tính được ngân sách, chia chi phí và đặt chỗ gọn gàng. | không có nguồn |
| Số chủ đạo 8 · strengths[1] | strengths | Bạn bền bỉ khi theo đuổi mục tiêu. Hỏng một lần, bạn thường rút kinh nghiệm rồi làm lại. | không có nguồn |
| Số chủ đạo 8 · strengths[2] | strengths | Bạn dám ra những quyết định khó và chịu trách nhiệm về chúng. | không có nguồn |
| Số chủ đạo 8 · watchOut[0] | watchOut | Bạn dễ đo giá trị bản thân bằng thu nhập hay thành tích, nên những giai đoạn chững lại làm bạn rất bứt rứt. | không có nguồn |
| Số chủ đạo 8 · watchOut[1] | watchOut | Trong nhóm, bạn có thể vô tình lấn át người khác vì muốn mọi thứ chạy theo ý mình cho nhanh. | không có nguồn |
| Số chủ đạo 8 · watchOut[2] | watchOut | Bạn hay làm tới khuya và hứa “xong đợt này sẽ nghỉ”, nhưng rồi đợt sau lại tới. | không có nguồn |
| Số chủ đạo 8 · advice[0] | advice | Bên cạnh mục tiêu về tiền, bạn đặt thêm một mục tiêu không đo bằng tiền, như học đàn hay về thăm ông bà đều đặn. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số chủ đạo 8 · advice[1] | advice | Trong buổi họp tới, bạn để người khác nói trước rồi mới nêu ý của mình. | ví dụ rập khuôn (“buổi họp”); câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số chủ đạo 8 · advice[2] | advice | Ghi lại các khoản chi lớn trong tháng và xem khoản nào thật sự làm bạn vui, khoản nào chỉ để chứng tỏ. | không có nguồn |
| Số chủ đạo 8 · fields[0] | fields | Quản trị doanh nghiệp | – |
| Số chủ đạo 8 · fields[1] | fields | Tài chính, ngân hàng | – |
| Số chủ đạo 8 · fields[2] | fields | Bất động sản | – |
| Số chủ đạo 8 · fields[3] | fields | Luật | – |
| Số chủ đạo 8 · fields[4] | fields | Quản lý vận hành | – |
| Số chủ đạo 8 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 8 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 9 | title | Người rộng lòng | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 9 | summary | Người mang số chủ đạo 9 thường quan tâm tới những chuyện lớn hơn bản thân mình. Bạn dễ xúc động trước một bản tin về người gặp nạn và hay là người chuyển kho… | mở khuôn “Người mang số…” (9/13); kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 9 · strengths[0] | strengths | Bạn cảm thông với người khác, kể cả những người rất khác mình về tuổi tác hay hoàn cảnh. | không có nguồn |
| Số chủ đạo 9 · strengths[1] | strengths | Bạn nhìn được bức tranh lớn, nên hay giúp nhóm nhớ lại vì sao mọi người làm việc này. | không có nguồn |
| Số chủ đạo 9 · strengths[2] | strengths | Bạn rộng rãi thời gian và công sức cho những việc có ích cho người khác. | cụm dịch/sai kết hợp “rộng rãi”; không có nguồn |
| Số chủ đạo 9 · watchOut[0] | watchOut | Bạn dễ cho đi quá sức rồi thấy tủi khi không ai để ý. | không có nguồn |
| Số chủ đạo 9 · watchOut[1] | watchOut | Bạn hay giữ lại kỷ niệm, đồ cũ và cả những mối quan hệ đã làm mình mệt. | không có nguồn |
| Số chủ đạo 9 · watchOut[2] | watchOut | Khi người khác không sống đúng như lý tưởng của bạn, bạn có thể thất vọng một cách lặng lẽ. | không có nguồn |
| Số chủ đạo 9 · advice[0] | advice | Trong tuần này, bạn dọn một góc tủ và cho đi những món đã không dùng tới trong một năm. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số chủ đạo 9 · advice[1] | advice | Chọn một việc thiện nguyện vừa sức và làm đều đặn, thay vì đáp lại mọi lời kêu gọi rồi kiệt sức. | không có nguồn |
| Số chủ đạo 9 · advice[2] | advice | Khi thấy tủi vì cho nhiều mà nhận ít, bạn nói thẳng với người kia điều mình cần. | không có nguồn |
| Số chủ đạo 9 · fields[0] | fields | Phi lợi nhuận, công tác xã hội | – |
| Số chủ đạo 9 · fields[1] | fields | Giáo dục | – |
| Số chủ đạo 9 · fields[2] | fields | Nghệ thuật | – |
| Số chủ đạo 9 · fields[3] | fields | Y tế, chăm sóc | – |
| Số chủ đạo 9 · fields[4] | fields | Quan hệ quốc tế | – |
| Số chủ đạo 9 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 9 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 10 | title | Người biết làm lại | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 10 | summary | Ở cách tính phổ biến tại Việt Nam, tổng bằng 10 được giữ lại thay vì rút về 1. Người mang số này có sự tự lập của số 1, cộng thêm khả năng xoay xở khi hoàn c… | kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 10 · strengths[0] | strengths | Bạn đứng dậy nhanh sau vấp ngã. Trượt một kỳ thi hay lỡ một cơ hội, bạn buồn vài hôm rồi tính bước tiếp theo. | không có nguồn |
| Số chủ đạo 10 · strengths[1] | strengths | Bạn vừa tự làm được vừa chịu học hỏi, nên hợp với những môi trường hay thay đổi. | không có nguồn |
| Số chủ đạo 10 · strengths[2] | strengths | Bạn hay là người thử cách mới đầu tiên, rồi quay lại chỉ cho người khác. | không có nguồn |
| Số chủ đạo 10 · watchOut[0] | watchOut | Vì quen làm lại từ đầu, bạn có thể bỏ một hướng đi hơi sớm, trước khi nó kịp cho kết quả. | không có nguồn |
| Số chủ đạo 10 · watchOut[1] | watchOut | Bạn đôi khi tin quá vào khả năng xoay xở của mình, nên chuẩn bị ít hơn mức cần. | không có nguồn |
| Số chủ đạo 10 · advice[0] | advice | Với mục tiêu quan trọng nhất lúc này, bạn cam kết theo nó ít nhất sáu tháng rồi mới đánh giá lại. | không có nguồn |
| Số chủ đạo 10 · advice[1] | advice | Ghi lại những lần bạn đã làm lại từ đầu và điều học được sau mỗi lần. Danh sách đó sẽ nhắc bạn mỗi khi chùn bước. | không có nguồn |
| Số chủ đạo 10 · advice[2] | advice | Trước một thay đổi lớn, bạn hỏi ý một người đi trước để có thêm góc nhìn. | không có nguồn |
| Số chủ đạo 10 · fields[0] | fields | Khởi nghiệp | – |
| Số chủ đạo 10 · fields[1] | fields | Quản lý dự án | – |
| Số chủ đạo 10 · fields[2] | fields | Phát triển kinh doanh | – |
| Số chủ đạo 10 · fields[3] | fields | Tư vấn | – |
| Số chủ đạo 10 · fields[4] | fields | Nghề tự do | – |
| Số chủ đạo 10 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 10 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 11 | title | Người nhạy với tín hiệu nhỏ | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 11 | summary | Số 11 được xem là một số đặc biệt nên không bị rút gọn tiếp. Người mang số chủ đạo 11 cảm nhận rất rõ những thứ người khác hay bỏ qua, như sự gượng gạo trong… | kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 11 · strengths[0] | strengths | Bạn có trực giác tốt, nhất là trong chuyện đọc người và đoán xem một ý tưởng có chạm được tới người khác không. | cụm dịch/sai kết hợp “chạm được”; không có nguồn |
| Số chủ đạo 11 · strengths[1] | strengths | Bạn truyền được cảm hứng. Khi bạn kể về điều mình tin, người nghe dễ muốn làm cùng. | không có nguồn |
| Số chủ đạo 11 · strengths[2] | strengths | Bạn để ý tới phần ý nghĩa của mọi việc, nên hay giúp người khác thấy điều họ đang làm có giá trị ra sao. | không có nguồn |
| Số chủ đạo 11 · watchOut[0] | watchOut | Bạn dễ căng thẳng và khó ngủ khi có nhiều chuyện chưa rõ ràng. | không có nguồn |
| Số chủ đạo 11 · watchOut[1] | watchOut | Bạn hay nghi ngờ bản thân, dù người khác thấy bạn đang làm tốt. | không có nguồn |
| Số chủ đạo 11 · watchOut[2] | watchOut | Vì kỳ vọng cao, bạn có thể hụt hẫng khi thực tế không đẹp như mình hình dung. | không có nguồn |
| Số chủ đạo 11 · advice[0] | advice | Ghi lại các linh cảm của bạn kèm ngày tháng. Sau vài tháng, bạn sẽ biết lúc nào nên tin chúng, lúc nào nên kiểm tra thêm. | không có nguồn |
| Số chủ đạo 11 · advice[1] | advice | Tạo một thói quen giúp mình chậm lại mỗi tối, như đi bộ ngắn hay tắt điện thoại sớm. | không có nguồn |
| Số chủ đạo 11 · advice[2] | advice | Biến ý tưởng thành việc nhỏ có hạn chót, để cảm hứng có chỗ đứng trong đời thực. | không có nguồn |
| Số chủ đạo 11 · fields[0] | fields | Tư vấn | – |
| Số chủ đạo 11 · fields[1] | fields | Nghệ thuật, âm nhạc | – |
| Số chủ đạo 11 · fields[2] | fields | Giảng dạy, diễn thuyết | – |
| Số chủ đạo 11 · fields[3] | fields | Viết lách | – |
| Số chủ đạo 11 · fields[4] | fields | Hoạt động cộng đồng | – |
| Số chủ đạo 11 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 11 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 22 | title | Người dựng việc lớn | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 22 | summary | Số 22 được viết là 22/4 vì nó mang nền của số 4 nhưng với tầm nhìn rộng hơn. Người mang số chủ đạo này có thể nghĩ tới những việc lớn, như một tổ chức hay mộ… | kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 22 · strengths[0] | strengths | Bạn biến ý tưởng thành kế hoạch làm được. Người khác còn đang mơ, bạn đã ngồi xuống chia nó thành từng giai đoạn. | không có nguồn |
| Số chủ đạo 22 · strengths[1] | strengths | Bạn chịu được việc khó và dài hơi, như theo một ngành học nhiều năm hay dựng một dự án từ con số không. | không có nguồn |
| Số chủ đạo 22 · strengths[2] | strengths | Bạn biết kết nối người và nguồn lực để cùng làm một việc chung. | không có nguồn |
| Số chủ đạo 22 · watchOut[0] | watchOut | Bạn đặt áp lực lên mình rất nặng, có lúc tới mức không cho phép mình nghỉ. | cụm dịch/sai kết hợp “cho phép mình”; không có nguồn |
| Số chủ đạo 22 · watchOut[1] | watchOut | Bạn có thể khó tính với người làm chậm hơn hay kém cẩn thận hơn mình. | không có nguồn |
| Số chủ đạo 22 · watchOut[2] | watchOut | Khi tầm nhìn quá xa so với hiện tại, bạn dễ nản và nghĩ mình kém. | không có nguồn |
| Số chủ đạo 22 · advice[0] | advice | Chia mục tiêu lớn thành từng mốc ba tháng, và ăn mừng mỗi mốc dù nhỏ. | không có nguồn |
| Số chủ đạo 22 · advice[1] | advice | Tìm một người đi trước từng làm việc tương tự để học hỏi, thay vì tự mò mọi thứ. | không có nguồn |
| Số chủ đạo 22 · advice[2] | advice | Cho mình một ngày nghỉ thật sự mỗi tuần, không email, không kế hoạch. | không có nguồn |
| Số chủ đạo 22 · fields[0] | fields | Kiến trúc, xây dựng | – |
| Số chủ đạo 22 · fields[1] | fields | Quản lý dự án lớn | – |
| Số chủ đạo 22 · fields[2] | fields | Kỹ thuật hệ thống | – |
| Số chủ đạo 22 · fields[3] | fields | Khởi nghiệp quy mô lớn | – |
| Số chủ đạo 22 · fields[4] | fields | Chính sách công | – |
| Số chủ đạo 22 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 22 | origin | (chưa có) | thiếu trường `origin` |
| Số chủ đạo 33 | title | Người dạy bằng sự tử tế | tên tự đặt theo khuôn “Người…” (13/13); không có nguồn |
| Số chủ đạo 33 | summary | Số 33 được viết là 33/6 vì nó mang nền của số 6, với mức quan tâm tới người khác còn cao hơn nữa. Người mang số chủ đạo này hay được tìm tới khi ai đó gặp ch… | kết khuôn “Bài học của…”; không có nguồn |
| Số chủ đạo 33 · strengths[0] | strengths | Bạn có sức an ủi. Người đang buồn ngồi với bạn một lúc thường thấy nhẹ lòng hơn. | không có nguồn |
| Số chủ đạo 33 · strengths[1] | strengths | Bạn kiên nhẫn khi dạy, như giảng lại một bài toán lần thứ ba cho em mà không bực. | không có nguồn |
| Số chủ đạo 33 · strengths[2] | strengths | Bạn sống tử tế cả lúc không ai nhìn, và điều đó khiến người xung quanh tin bạn. | không có nguồn |
| Số chủ đạo 33 · watchOut[0] | watchOut | Bạn dễ nhận phần trách nhiệm không phải của mình, rồi kiệt sức. | không có nguồn |
| Số chủ đạo 33 · watchOut[1] | watchOut | Bạn có thể đặt chuẩn đạo đức rất cao cho bản thân và tự trách nặng nề khi lỡ sai. | không có nguồn |
| Số chủ đạo 33 · watchOut[2] | watchOut | Đôi khi bạn quên rằng người khác cũng cần tự học từ sai lầm của họ. | không có nguồn |
| Số chủ đạo 33 · advice[0] | advice | Mỗi khi muốn giúp, bạn hỏi người kia họ cần gì, thay vì làm theo điều bạn nghĩ là tốt cho họ. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số chủ đạo 33 · advice[1] | advice | Viết ra ba việc bạn sẽ không nhận thêm trong tháng này, và giữ đúng như vậy. | không có nguồn |
| Số chủ đạo 33 · advice[2] | advice | Tìm một nơi bạn được chăm sóc lại, như một người bạn để tâm sự hay một sở thích riêng. | không có nguồn |
| Số chủ đạo 33 · fields[0] | fields | Giáo dục | – |
| Số chủ đạo 33 · fields[1] | fields | Tư vấn tâm lý | – |
| Số chủ đạo 33 · fields[2] | fields | Y tế, điều dưỡng | – |
| Số chủ đạo 33 · fields[3] | fields | Công tác xã hội | – |
| Số chủ đạo 33 · fields[4] | fields | Nghệ thuật cộng đồng | – |
| Số chủ đạo 33 | note | (chưa có) | thiếu trường `note` |
| Số chủ đạo 33 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 1 | title | Năm gieo hạt | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 1 | summary | Năm cá nhân số 1 mở đầu một vòng chín năm mới. Đây là lúc hợp để bắt tay vào những gì bạn đã ấp ủ, từ một khoá học tới một thói quen mới. Những gì bạn gieo t… | mở khuôn “Năm cá nhân…” (9/9); không có nguồn |
| Năm cá nhân 1 · theme[0] | theme | Chủ đề của năm là tự khởi động. Bạn không cần đợi ai cho phép hay đợi mọi thứ hoàn hảo, chỉ cần bước bước đầu tiên. | không có nguồn |
| Năm cá nhân 1 · doMore[0] | doMore | Viết ra hai hoặc ba mục tiêu cho năm và dán ở chỗ bạn nhìn thấy hằng ngày. | không có nguồn |
| Năm cá nhân 1 · doMore[1] | doMore | Đăng ký một việc mới mà bạn đã chần chừ lâu, như lớp học buổi tối hay một dự án riêng. | không có nguồn |
| Năm cá nhân 1 · doMore[2] | doMore | Tập tự ra những quyết định nhỏ mà không hỏi quá nhiều người. | không có nguồn |
| Năm cá nhân 1 · doLess[0] | doLess | Bớt chờ tới lúc “thật sự sẵn sàng”, vì lúc đó hiếm khi tới. | không có nguồn |
| Năm cá nhân 1 · doLess[1] | doLess | Bớt so điểm xuất phát của mình với người đã đi trước nhiều năm. | không có nguồn |
| Năm cá nhân 1 · byQuarter[0] | byQuarter | Ngồi xuống xem năm cũ đã dạy bạn điều gì, rồi chọn hướng đi chính cho năm nay. | không có nguồn |
| Năm cá nhân 1 · byQuarter[1] | byQuarter | Bắt tay vào việc. Kết quả còn nhỏ cũng không sao, quan trọng là bạn đã bắt đầu. | không có nguồn |
| Năm cá nhân 1 · byQuarter[2] | byQuarter | Rà lại tiến độ và bỏ bớt những thứ bạn nhận ra mình không thật sự muốn. | không có nguồn |
| Năm cá nhân 1 · byQuarter[3] | byQuarter | Củng cố những gì đang chạy ổn để mang sang năm sau, một năm cần nhiều kiên nhẫn. | không có nguồn |
| Năm cá nhân 1 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 1 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 2 | title | Năm vun gốc | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 2 | summary | Năm cá nhân số 2 chậm hơn năm trước, và đó là chuyện bình thường. Những hạt bạn gieo năm ngoái đang cần thời gian bén rễ. Năm nay hợp để làm việc cùng người … | mở khuôn “Năm cá nhân…” (9/9); không có nguồn |
| Năm cá nhân 2 · theme[0] | theme | Chủ đề của năm là kiên nhẫn và cộng tác. Nhiều việc sẽ đi xa hơn nếu bạn có người đồng hành. | không có nguồn |
| Năm cá nhân 2 · doMore[0] | doMore | Chủ động hẹn gặp những người bạn đã lâu không liên lạc. | không có nguồn |
| Năm cá nhân 2 · doMore[1] | doMore | Nhận làm chung một việc với người có thế mạnh khác bạn. | không có nguồn |
| Năm cá nhân 2 · doMore[2] | doMore | Để ý tới những chi tiết nhỏ trong công việc, vì năm nay chúng tạo ra khác biệt. | không có nguồn |
| Năm cá nhân 2 · doLess[0] | doLess | Bớt nóng ruột khi kết quả chưa tới ngay. | không có nguồn |
| Năm cá nhân 2 · doLess[1] | doLess | Bớt nhận lời mọi thứ chỉ để giữ hoà khí. | không có nguồn |
| Năm cá nhân 2 · doLess[2] | doLess | Bớt đọc quá nhiều ý nghĩa vào một tin nhắn hay một ánh mắt. | ví dụ rập khuôn (“tin nhắn”); không có nguồn |
| Năm cá nhân 2 · byQuarter[0] | byQuarter | Xem lại những việc đã bắt đầu năm ngoái và chọn việc nào đáng chăm tiếp. | không có nguồn |
| Năm cá nhân 2 · byQuarter[1] | byQuarter | Tìm người cùng làm, hỏi ý kiến và lắng nghe nhiều hơn nói. | không có nguồn |
| Năm cá nhân 2 · byQuarter[2] | byQuarter | Chăm chút chi tiết, sửa những chỗ nhỏ mà trước đây bạn bỏ qua. | không có nguồn |
| Năm cá nhân 2 · byQuarter[3] | byQuarter | Cảm ơn những người đã đồng hành với bạn trong năm. | không có nguồn |
| Năm cá nhân 2 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 2 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 3 | title | Năm lên tiếng | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 3 | summary | Năm cá nhân số 3 mang không khí nhẹ và vui hơn. Đây là năm hợp để nói ra, viết ra và chia sẻ những gì bạn nghĩ. Bạn có thể được rủ đi chơi, đi sự kiện nhiều … | mở khuôn “Năm cá nhân…” (9/9); kết khuôn “Điều cần giữ…”; không có nguồn |
| Năm cá nhân 3 · theme[0] | theme | Chủ đề của năm là thể hiện bản thân. Ý tưởng của bạn cần được đưa ra ngoài thay vì nằm yên trong sổ. | không có nguồn |
| Năm cá nhân 3 · doMore[0] | doMore | Chia sẻ một sản phẩm của riêng bạn, như bài viết, bức ảnh hay một món đồ tự làm. | không có nguồn |
| Năm cá nhân 3 · doMore[1] | doMore | Nhận lời những buổi gặp gỡ giúp bạn quen thêm người hay. | không có nguồn |
| Năm cá nhân 3 · doMore[2] | doMore | Thử một hoạt động sáng tạo bạn chưa từng làm. | không có nguồn |
| Năm cá nhân 3 · doLess[0] | doLess | Bớt mở thêm dự án khi các dự án cũ còn dang dở. | không có nguồn |
| Năm cá nhân 3 · doLess[1] | doLess | Bớt tiêu tiền theo hứng sau những buổi vui. | không có nguồn |
| Năm cá nhân 3 · doLess[2] | doLess | Bớt nói những câu bạn biết mình sẽ hối hận khi đang bực. | không có nguồn |
| Năm cá nhân 3 · byQuarter[0] | byQuarter | Chọn một nơi để thể hiện mình, như một cuốn sổ, một trang cá nhân hay một nhóm cùng sở thích. | không có nguồn |
| Năm cá nhân 3 · byQuarter[1] | byQuarter | Ra ngoài nhiều hơn và trò chuyện với những người mới quen. | không có nguồn |
| Năm cá nhân 3 · byQuarter[2] | byQuarter | Gom ý tưởng lại và hoàn thành trọn vẹn ít nhất một việc. | không có nguồn |
| Năm cá nhân 3 · byQuarter[3] | byQuarter | Nhìn lại những niềm vui của năm và chuẩn bị tinh thần cho một năm làm việc chăm chỉ. | không có nguồn |
| Năm cá nhân 3 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 3 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 4 | title | Năm đặt gạch | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 4 | summary | Năm cá nhân số 4 là năm của công việc thật. Bạn có thể thấy mình bận rộn hơn, phải sắp xếp lại giấy tờ, tiền bạc hay nếp sinh hoạt. Năm này không lấp lánh, n… | mở khuôn “Năm cá nhân…” (9/9); không có nguồn |
| Năm cá nhân 4 · theme[0] | theme | Chủ đề của năm là xây nền móng. Những thói quen tốt và kỹ năng bạn rèn trong năm nay là thứ đáng đầu tư nhất. | không có nguồn |
| Năm cá nhân 4 · doMore[0] | doMore | Lập một ngân sách đơn giản và theo nó suốt năm. | không có nguồn |
| Năm cá nhân 4 · doMore[1] | doMore | Học sâu một kỹ năng giúp ích cho công việc chính của bạn. | không có nguồn |
| Năm cá nhân 4 · doMore[2] | doMore | Dọn dẹp, sắp xếp lại nhà cửa và các giấy tờ quan trọng. | không có nguồn |
| Năm cá nhân 4 · doLess[0] | doLess | Bớt tìm đường tắt cho những việc cần thời gian. | không có nguồn |
| Năm cá nhân 4 · doLess[1] | doLess | Bớt than mệt mà không đổi cách làm. | không có nguồn |
| Năm cá nhân 4 · doLess[2] | doLess | Bớt bỏ bữa, bỏ giấc vì công việc. | không có nguồn |
| Năm cá nhân 4 · byQuarter[0] | byQuarter | Lập kế hoạch cụ thể cho năm, có mốc thời gian và con số rõ ràng. | không có nguồn |
| Năm cá nhân 4 · byQuarter[1] | byQuarter | Bám theo kế hoạch, kể cả những ngày không có hứng. | không có nguồn |
| Năm cá nhân 4 · byQuarter[2] | byQuarter | Giữ nhịp ngủ nghỉ đều đặn để không đuối sức vào giữa năm. | không có nguồn |
| Năm cá nhân 4 · byQuarter[3] | byQuarter | Tổng kết những gì đã xây được và chuẩn bị cho một năm nhiều thay đổi. | không có nguồn |
| Năm cá nhân 4 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 4 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 5 | title | Năm đổi gió | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 5 | summary | Năm cá nhân số 5 nằm giữa vòng chín năm và thường mang theo nhiều thay đổi. Bạn có thể muốn đi xa, đổi việc, đổi chỗ ở hay đơn giản là bỏ một thói quen cũ. S… | mở khuôn “Năm cá nhân…” (9/9); kết khuôn “Điều cần giữ…”; không có nguồn |
| Năm cá nhân 5 · theme[0] | theme | Chủ đề của năm là trải nghiệm. Bạn học được nhiều nhất khi bước ra khỏi chỗ quen thuộc. | không có nguồn |
| Năm cá nhân 5 · doMore[0] | doMore | Đi tới một nơi bạn chưa từng tới, dù chỉ là một thị trấn gần nhà. | không có nguồn |
| Năm cá nhân 5 · doMore[1] | doMore | Thử một cách làm việc mới hoặc nhận một nhiệm vụ khác hẳn thường ngày. | không có nguồn |
| Năm cá nhân 5 · doMore[2] | doMore | Gặp gỡ những người có lối sống khác bạn. | không có nguồn |
| Năm cá nhân 5 · doLess[0] | doLess | Bớt ra quyết định lớn chỉ trong một buổi tối. | không có nguồn |
| Năm cá nhân 5 · doLess[1] | doLess | Bớt chi quá tay cho những trải nghiệm chóng qua. | không có nguồn |
| Năm cá nhân 5 · doLess[2] | doLess | Bớt bỏ dở những cam kết đã hứa với người khác. | không có nguồn |
| Năm cá nhân 5 · byQuarter[0] | byQuarter | Liệt kê những thay đổi bạn muốn và xếp theo mức độ quan trọng. | không có nguồn |
| Năm cá nhân 5 · byQuarter[1] | byQuarter | Thử một hai thay đổi nhỏ trước để xem mình hợp tới đâu. | không có nguồn |
| Năm cá nhân 5 · byQuarter[2] | byQuarter | Đi xa, học thêm hoặc gặp gỡ người mới để mở rộng góc nhìn. | không có nguồn |
| Năm cá nhân 5 · byQuarter[3] | byQuarter | Giữ lại những thay đổi tốt và chuẩn bị cho một năm hướng về gia đình. | không có nguồn |
| Năm cá nhân 5 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 5 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 6 | title | Năm về nhà | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 6 | summary | Năm cá nhân số 6 kéo sự chú ý của bạn về nhà và về những người thân thiết. Bạn có thể phải lo nhiều hơn cho bố mẹ, con cái hay một người bạn đang cần giúp. N… | mở khuôn “Năm cá nhân…” (9/9); kết khuôn “Điều cần giữ…”; không có nguồn |
| Năm cá nhân 6 · theme[0] | theme | Chủ đề của năm là trách nhiệm và tình thương. Những việc nhỏ bạn làm cho người thân sẽ có ý nghĩa hơn bạn nghĩ. | không có nguồn |
| Năm cá nhân 6 · doMore[0] | doMore | Dành thời gian cố định cho gia đình mỗi tuần, như một bữa cơm chung. | không có nguồn |
| Năm cá nhân 6 · doMore[1] | doMore | Sửa lại góc nhà bạn hay dùng nhất cho dễ chịu hơn. | không có nguồn |
| Năm cá nhân 6 · doMore[2] | doMore | Nói lời cảm ơn và lời xin lỗi khi cần, đừng để dồn lại. | không có nguồn |
| Năm cá nhân 6 · doLess[0] | doLess | Bớt gánh việc của người khác chỉ vì ngại từ chối. | không có nguồn |
| Năm cá nhân 6 · doLess[1] | doLess | Bớt đòi hỏi mọi thứ trong nhà phải hoàn hảo. | không có nguồn |
| Năm cá nhân 6 · doLess[2] | doLess | Bớt ôm hết cảm xúc của người thân vào mình. | không có nguồn |
| Năm cá nhân 6 · byQuarter[0] | byQuarter | Xem lại các mối quan hệ quan trọng và chọn một mối quan hệ cần vun vén. | không có nguồn |
| Năm cá nhân 6 · byQuarter[1] | byQuarter | Lo những việc nhà bị hoãn lâu, từ sửa chữa tới giấy tờ. | không có nguồn |
| Năm cá nhân 6 · byQuarter[2] | byQuarter | Dành thời gian cho riêng mình để có sức chăm người khác. | không có nguồn |
| Năm cá nhân 6 · byQuarter[3] | byQuarter | Sum họp với người thân và chuẩn bị cho một năm lắng lại để suy ngẫm. | không có nguồn |
| Năm cá nhân 6 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 6 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 7 | title | Năm lắng lại | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 7 | summary | Năm cá nhân số 7 là một năm chậm và hướng vào bên trong. Bạn có thể muốn ở một mình nhiều hơn, đọc nhiều hơn và đặt câu hỏi về những gì mình đang làm. Đó khô… | mở khuôn “Năm cá nhân…” (9/9); không có nguồn |
| Năm cá nhân 7 · theme[0] | theme | Chủ đề của năm là học và hiểu. Năm này hợp để đi sâu vào một lĩnh vực, hoặc ngồi lại với chính mình. | cụm dịch/sai kết hợp “ngồi lại với chính mình”; không có nguồn |
| Năm cá nhân 7 · doMore[0] | doMore | Chọn một chủ đề và học sâu, như một khoá học dài hay vài cuốn sách cùng mảng. | không có nguồn |
| Năm cá nhân 7 · doMore[1] | doMore | Dành thời gian đi bộ, viết nhật ký hoặc ngồi yên một lúc mỗi ngày. | không có nguồn |
| Năm cá nhân 7 · doMore[2] | doMore | Xem lại lý do bạn chọn công việc, các mối quan hệ và nơi ở hiện tại. | không có nguồn |
| Năm cá nhân 7 · doLess[0] | doLess | Bớt ép mình phải có kết quả nhanh trong năm này. | không có nguồn |
| Năm cá nhân 7 · doLess[1] | doLess | Bớt nhận lời những cuộc vui chỉ vì ngại từ chối. | không có nguồn |
| Năm cá nhân 7 · doLess[2] | doLess | Bớt thu mình tới mức người thân phải lo lắng. | không có nguồn |
| Năm cá nhân 7 · byQuarter[0] | byQuarter | Viết ra những câu hỏi lớn bạn đang có về cuộc sống và công việc. | không có nguồn |
| Năm cá nhân 7 · byQuarter[1] | byQuarter | Đọc, học và trò chuyện với người có kinh nghiệm để tìm câu trả lời. | không có nguồn |
| Năm cá nhân 7 · byQuarter[2] | byQuarter | Dành vài ngày nghỉ để thật sự tách khỏi nhịp thường ngày. | không có nguồn |
| Năm cá nhân 7 · byQuarter[3] | byQuarter | Ghi lại những điều bạn đã hiểu ra và chuẩn bị cho một năm bận rộn hơn. | không có nguồn |
| Năm cá nhân 7 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 7 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 8 | title | Năm cầm lái | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 8 | summary | Năm cá nhân số 8 thường đưa công việc và tiền bạc lên hàng đầu. Những gì bạn chuẩn bị trong mấy năm qua có cơ hội được nhìn nhận, nếu bạn chủ động đưa nó ra.… | mở khuôn “Năm cá nhân…” (9/9); không có nguồn |
| Năm cá nhân 8 · theme[0] | theme | Chủ đề của năm là tin vào năng lực của mình. Bạn nên cầm lái những việc quan trọng thay vì đợi người khác giao. | không có nguồn |
| Năm cá nhân 8 · doMore[0] | doMore | Chuẩn bị số liệu về những gì bạn đã làm được để nói chuyện tăng lương hay xin dự án mới. | không có nguồn |
| Năm cá nhân 8 · doMore[1] | doMore | Rà lại các khoản chi, khoản để dành và khoản nợ, rồi đặt kế hoạch rõ ràng. | không có nguồn |
| Năm cá nhân 8 · doMore[2] | doMore | Nhận những trách nhiệm giúp bạn học cách quản lý. | không có nguồn |
| Năm cá nhân 8 · doLess[0] | doLess | Bớt chi tiêu để chứng tỏ với người khác. | không có nguồn |
| Năm cá nhân 8 · doLess[1] | doLess | Bớt hy sinh giấc ngủ và bữa ăn cho công việc. | không có nguồn |
| Năm cá nhân 8 · doLess[2] | doLess | Bớt cứng rắn quá mức với người làm cùng. | không có nguồn |
| Năm cá nhân 8 · byQuarter[0] | byQuarter | Đặt mục tiêu công việc và tài chính cụ thể, có con số. | không có nguồn |
| Năm cá nhân 8 · byQuarter[1] | byQuarter | Chủ động đề xuất, xin cơ hội và nói về đóng góp của mình. | không có nguồn |
| Năm cá nhân 8 · byQuarter[2] | byQuarter | Kiểm tra lại cách bạn dùng tiền và thời gian, vá những chỗ đang rò rỉ. | không có nguồn |
| Năm cá nhân 8 · byQuarter[3] | byQuarter | Nhìn lại thành quả, cảm ơn những người đã giúp bạn và chuẩn bị khép lại một vòng. | không có nguồn |
| Năm cá nhân 8 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 8 | origin | (chưa có) | thiếu trường `origin` |
| Năm cá nhân 9 | title | Năm khép vòng | tên tự đặt theo khuôn “Năm…” (9/9); không có nguồn |
| Năm cá nhân 9 | summary | Năm cá nhân số 9 là năm cuối của vòng chín năm. Đây là lúc dọn dẹp, làm nốt những việc còn dở và buông những gì không còn hợp với bạn. Bạn có thể thấy vài mố… | mở khuôn “Năm cá nhân…” (9/9); không có nguồn |
| Năm cá nhân 9 · theme[0] | theme | Chủ đề của năm là hoàn tất và buông. Việc nào đáng xong thì làm cho xong, việc nào đã hết thì để nó đi. | không có nguồn |
| Năm cá nhân 9 · doMore[0] | doMore | Làm nốt những việc dang dở, từ một khoá học tới một món nợ nhỏ với bạn bè. | không có nguồn |
| Năm cá nhân 9 · doMore[1] | doMore | Dọn đồ đạc, dọn danh bạ và dọn lịch làm việc. | không có nguồn |
| Năm cá nhân 9 · doMore[2] | doMore | Giúp người khác bằng những kinh nghiệm bạn đã có. | không có nguồn |
| Năm cá nhân 9 · doLess[0] | doLess | Bớt khởi động dự án lớn mới, nên để dành cho năm sau. | không có nguồn |
| Năm cá nhân 9 · doLess[1] | doLess | Bớt níu giữ những gì đã rõ là không hợp. | không có nguồn |
| Năm cá nhân 9 · doLess[2] | doLess | Bớt ôm giận với chuyện cũ. | không có nguồn |
| Năm cá nhân 9 · byQuarter[0] | byQuarter | Lập danh sách những việc còn dở và chọn ra việc cần làm xong trước. | không có nguồn |
| Năm cá nhân 9 · byQuarter[1] | byQuarter | Dọn dẹp đồ đạc, giấy tờ và cả những thói quen không còn giúp gì cho bạn. | không có nguồn |
| Năm cá nhân 9 · byQuarter[2] | byQuarter | Nói lời tạm biệt hay lời cảm ơn với những gì đã qua. | không có nguồn |
| Năm cá nhân 9 · byQuarter[3] | byQuarter | Nghỉ ngơi, nhìn lại chín năm vừa rồi và nghĩ về điều bạn muốn gieo khi vòng mới bắt đầu. | không có nguồn |
| Năm cá nhân 9 | note | (chưa có) | thiếu trường `note` |
| Năm cá nhân 9 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 1 | title | Người đứng ra nhận việc | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 1 | summary | Số sứ mệnh 1 cho thấy bạn thể hiện năng lực rõ nhất khi được đứng ra dẫn dắt. Trong nhóm, bạn hay là người đề xuất hướng đi và chịu trách nhiệm cho nó. Người… | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 1 · strengths[0] | strengths | Bạn biến ý định thành hành động nhanh. Họp xong chưa lâu, bạn đã gửi bảng phân công cho cả nhóm. | không có nguồn |
| Số sứ mệnh 1 · strengths[1] | strengths | Bạn chịu được áp lực khi phải chọn một hướng đi mà chưa chắc chắn. | không có nguồn |
| Số sứ mệnh 1 · strengths[2] | strengths | Bạn tự học tốt và không ngại một mình mày mò công cụ mới. | không có nguồn |
| Số sứ mệnh 1 · watchOut[0] | watchOut | Bạn có thể thấy khó làm việc dưới quyền một người chậm hơn mình. | không có nguồn |
| Số sứ mệnh 1 · watchOut[1] | watchOut | Bạn hay quên khen người khác vì mải nhìn sang việc tiếp theo. | không có nguồn |
| Số sứ mệnh 1 · advice[0] | advice | Ở dự án tới, bạn giao một phần việc dẫn dắt cho người khác và đóng vai hỗ trợ. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số sứ mệnh 1 · advice[1] | advice | Cuối mỗi tuần, bạn gửi một lời ghi nhận cụ thể tới một người trong nhóm. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số sứ mệnh 1 · fields[0] | fields | Quản lý, trưởng nhóm | – |
| Số sứ mệnh 1 · fields[1] | fields | Khởi nghiệp | – |
| Số sứ mệnh 1 · fields[2] | fields | Bán hàng | – |
| Số sứ mệnh 1 · fields[3] | fields | Nghề tự do | – |
| Số sứ mệnh 1 · fields[4] | fields | Quản lý sản phẩm | – |
| Số sứ mệnh 1 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 1 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 2 | title | Người nối người | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 2 | summary | Số sứ mệnh 2 cho thấy bạn phát huy năng lực tốt nhất khi làm cùng người khác. Bạn có tài làm cầu nối, giúp hai bên hiểu nhau và đi tới một thoả thuận. Bạn để… | mở khuôn “Số sứ mệnh…” (12/12); ví dụ rập khuôn (“cuộc họp”); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 2 · strengths[0] | strengths | Bạn trao đổi mềm mà chắc. Gặp khách khó tính, bạn giữ được không khí mà vẫn bảo vệ được quyền lợi của bên mình. | không có nguồn |
| Số sứ mệnh 2 · strengths[1] | strengths | Bạn làm việc nhóm tốt và giúp người mới hoà nhập nhanh. | không có nguồn |
| Số sứ mệnh 2 · strengths[2] | strengths | Bạn cẩn thận với chi tiết, từ con số trong báo cáo tới câu chữ trong email. | không có nguồn |
| Số sứ mệnh 2 · watchOut[0] | watchOut | Bạn hay đứng ở hậu trường nên công sức dễ bị người khác nhận phần. | không có nguồn |
| Số sứ mệnh 2 · watchOut[1] | watchOut | Bạn có thể né những cuộc tranh luận cần thiết, để chuyện nhỏ thành chuyện lớn. | không có nguồn |
| Số sứ mệnh 2 · advice[0] | advice | Ghi lại những gì bạn đã đóng góp trong tháng, để khi cần bạn có thể nói ra rõ ràng. | không có nguồn |
| Số sứ mệnh 2 · advice[1] | advice | Khi thấy một vấn đề trong nhóm, bạn nêu nó sớm bằng giọng nhẹ nhàng thay vì đợi nó tự hết. | không có nguồn |
| Số sứ mệnh 2 · fields[0] | fields | Nhân sự | – |
| Số sứ mệnh 2 · fields[1] | fields | Chăm sóc khách hàng | – |
| Số sứ mệnh 2 · fields[2] | fields | Trợ lý điều hành | – |
| Số sứ mệnh 2 · fields[3] | fields | Hoà giải, tư vấn | – |
| Số sứ mệnh 2 · fields[4] | fields | Quan hệ đối tác | – |
| Số sứ mệnh 2 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 2 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 3 | title | Người làm chữ và làm vui | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 3 | summary | Số sứ mệnh 3 cho thấy năng lực của bạn lộ ra rõ nhất qua lời nói, chữ viết hoặc hình ảnh. Bạn biết cách trình bày một ý tưởng sao cho người nghe thấy hứng th… | mở khuôn “Số sứ mệnh…” (12/12); từ cấm “năng lượng”; kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 3 · strengths[0] | strengths | Bạn thuyết trình tốt, biết mở đầu bằng một câu chuyện để kéo người nghe vào. | không có nguồn |
| Số sứ mệnh 3 · strengths[1] | strengths | Bạn có nhiều ý tưởng mới cho những việc tưởng đã nhàm, như một cách giới thiệu sản phẩm khác hẳn mọi khi. | không có nguồn |
| Số sứ mệnh 3 · strengths[2] | strengths | Bạn dễ kết thân và giữ được không khí vui vẻ trong nhóm. | không có nguồn |
| Số sứ mệnh 3 · watchOut[0] | watchOut | Bạn dễ ôm nhiều dự án sáng tạo cùng lúc rồi bỏ dở. | không có nguồn |
| Số sứ mệnh 3 · watchOut[1] | watchOut | Bạn có thể nhạy cảm với lời chê về sản phẩm của mình hơn mức cần. | không có nguồn |
| Số sứ mệnh 3 · advice[0] | advice | Chọn một sản phẩm và đưa nó tới tay người dùng, dù nó chưa hoàn hảo. | không có nguồn |
| Số sứ mệnh 3 · advice[1] | advice | Khi nhận góp ý, bạn tách riêng ý tưởng của mình với con người mình để nghe cho khách quan. | không có nguồn |
| Số sứ mệnh 3 · fields[0] | fields | Truyền thông, quảng cáo | – |
| Số sứ mệnh 3 · fields[1] | fields | Viết, biên tập | – |
| Số sứ mệnh 3 · fields[2] | fields | Thiết kế | – |
| Số sứ mệnh 3 · fields[3] | fields | Giảng dạy | – |
| Số sứ mệnh 3 · fields[4] | fields | Nghệ thuật biểu diễn | – |
| Số sứ mệnh 3 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 3 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 4 | title | Người làm cho chắc | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 4 | summary | Số sứ mệnh 4 cho thấy bạn đóng góp tốt nhất qua sự chắc chắn và có hệ thống. Bạn là người dựng quy trình, làm bảng theo dõi và giữ cho mọi thứ không bị sót. … | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 4 · strengths[0] | strengths | Bạn biến việc lộn xộn thành quy trình rõ ràng, như sắp lại cả thư mục tài liệu chung của nhóm. | không có nguồn |
| Số sứ mệnh 4 · strengths[1] | strengths | Bạn giữ chất lượng đều tay, ngày bận hay ngày rảnh đều làm kỹ như nhau. | không có nguồn |
| Số sứ mệnh 4 · strengths[2] | strengths | Bạn có sức bền với những việc dài hơi và lặp lại. | không có nguồn |
| Số sứ mệnh 4 · watchOut[0] | watchOut | Bạn có thể cẩn thận tới mức chậm trễ, trong khi tình huống cần quyết nhanh. | không có nguồn |
| Số sứ mệnh 4 · watchOut[1] | watchOut | Bạn đôi khi bám quy trình cũ dù nó không còn hợp. | không có nguồn |
| Số sứ mệnh 4 · advice[0] | advice | Mỗi quý, bạn chọn một quy trình đang dùng và tự hỏi nếu làm lại từ đầu, mình có thiết kế nó như thế này không. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số sứ mệnh 4 · advice[1] | advice | Thử đặt cho mình một hạn chót ngắn với một việc nhỏ để luyện cách quyết nhanh. | không có nguồn |
| Số sứ mệnh 4 · fields[0] | fields | Kế toán, kiểm toán | – |
| Số sứ mệnh 4 · fields[1] | fields | Kỹ thuật | – |
| Số sứ mệnh 4 · fields[2] | fields | Quản lý vận hành | – |
| Số sứ mệnh 4 · fields[3] | fields | Phát triển phần mềm | – |
| Số sứ mệnh 4 · fields[4] | fields | Hành chính, pháp chế | – |
| Số sứ mệnh 4 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 4 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 5 | title | Người xoay xở giỏi | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 5 | summary | Số sứ mệnh 5 cho thấy bạn thể hiện năng lực tốt nhất ở những nơi có nhiều thay đổi. Bạn học cái mới nhanh, ứng biến tốt và nói chuyện được với nhiều kiểu ngư… | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 5 · strengths[0] | strengths | Bạn ứng biến tốt khi kế hoạch đổ vỡ, như sự kiện bị mất điện mà bạn vẫn xoay được chương trình. | không có nguồn |
| Số sứ mệnh 5 · strengths[1] | strengths | Bạn có sức thuyết phục tự nhiên, nhất là khi nói về điều mình thật sự thích. | không có nguồn |
| Số sứ mệnh 5 · strengths[2] | strengths | Bạn kết nối được người ở nhiều lĩnh vực khác nhau. | không có nguồn |
| Số sứ mệnh 5 · watchOut[0] | watchOut | Bạn dễ chán khi việc bước vào giai đoạn lặp lại và bắt đầu nhìn sang việc khác. | không có nguồn |
| Số sứ mệnh 5 · watchOut[1] | watchOut | Bạn có thể hứa nhiều hơn khả năng làm vì quá hào hứng lúc đầu. | không có nguồn |
| Số sứ mệnh 5 · advice[0] | advice | Chọn hai kỹ năng cốt lõi và đầu tư cho chúng trong một năm. | không có nguồn |
| Số sứ mệnh 5 · advice[1] | advice | Trước khi nhận việc mới, bạn mở lịch ra xem mình còn chỗ trống thật không. | không có nguồn |
| Số sứ mệnh 5 · fields[0] | fields | Bán hàng, kinh doanh | – |
| Số sứ mệnh 5 · fields[1] | fields | Du lịch, sự kiện | – |
| Số sứ mệnh 5 · fields[2] | fields | Báo chí | – |
| Số sứ mệnh 5 · fields[3] | fields | Marketing | – |
| Số sứ mệnh 5 · fields[4] | fields | Tư vấn độc lập | – |
| Số sứ mệnh 5 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 5 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 6 | title | Người chăm cho nơi mình ở | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 6 | summary | Số sứ mệnh 6 cho thấy bạn đóng góp tốt nhất khi được chăm lo cho người khác hoặc làm đẹp cho một không gian. Bạn nghĩ tới cảm giác của người dùng, người học … | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 6 · strengths[0] | strengths | Bạn để ý tới trải nghiệm của người khác, như khách có thấy dễ chịu khi bước vào cửa hàng hay không. | không có nguồn |
| Số sứ mệnh 6 · strengths[1] | strengths | Bạn giữ lời, nên hay được giao những việc quan trọng. | không có nguồn |
| Số sứ mệnh 6 · strengths[2] | strengths | Bạn có gu thẩm mỹ hài hoà trong cách sắp xếp và trình bày. | không có nguồn |
| Số sứ mệnh 6 · watchOut[0] | watchOut | Bạn hay nhận thêm việc của đồng nghiệp vì thương họ bận. | ví dụ rập khuôn (“đồng nghiệp”); không có nguồn |
| Số sứ mệnh 6 · watchOut[1] | watchOut | Bạn dễ phật lòng khi sự chăm chút của mình không được ai nhắc tới. | không có nguồn |
| Số sứ mệnh 6 · advice[0] | advice | Đặt một giờ kết thúc công việc mỗi ngày và giữ đúng ít nhất bốn ngày trong tuần. | không có nguồn |
| Số sứ mệnh 6 · advice[1] | advice | Khi muốn được ghi nhận, bạn nói ra nhẹ nhàng thay vì chờ người khác tự thấy. | không có nguồn |
| Số sứ mệnh 6 · fields[0] | fields | Giáo dục | – |
| Số sứ mệnh 6 · fields[1] | fields | Y tế, điều dưỡng | – |
| Số sứ mệnh 6 · fields[2] | fields | Thiết kế nội thất, thời trang | – |
| Số sứ mệnh 6 · fields[3] | fields | Nhà hàng, khách sạn | – |
| Số sứ mệnh 6 · fields[4] | fields | Công tác xã hội | – |
| Số sứ mệnh 6 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 6 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 7 | title | Người đào sâu | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 7 | summary | Số sứ mệnh 7 cho thấy năng lực của bạn lộ rõ nhất khi được đi sâu vào một vấn đề. Bạn thích tìm hiểu bản chất, hỏi vì sao cho tới khi thật hiểu. Người khác h… | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 7 · strengths[0] | strengths | Bạn phân tích kỹ và hiếm khi kết luận vội, nên lời bạn nói có trọng lượng. | không có nguồn |
| Số sứ mệnh 7 · strengths[1] | strengths | Bạn làm việc độc lập tốt trong những dự án cần tập trung lâu. | không có nguồn |
| Số sứ mệnh 7 · strengths[2] | strengths | Bạn phát hiện ra lỗi mà người khác bỏ qua, như một con số bị lệch trong bảng tính. | không có nguồn |
| Số sứ mệnh 7 · watchOut[0] | watchOut | Bạn có thể thấy khó giải thích ý mình cho người không cùng chuyên môn. | không có nguồn |
| Số sứ mệnh 7 · watchOut[1] | watchOut | Bạn dễ trì hoãn việc công bố kết quả vì muốn chắc thêm chút nữa. | không có nguồn |
| Số sứ mệnh 7 · advice[0] | advice | Tập giải thích công việc của bạn cho một người ngoài ngành trong ba câu. | không có nguồn |
| Số sứ mệnh 7 · advice[1] | advice | Đặt hạn chót cho phần tìm hiểu và gửi bản nháp sớm để nhận góp ý. | không có nguồn |
| Số sứ mệnh 7 · fields[0] | fields | Nghiên cứu | – |
| Số sứ mệnh 7 · fields[1] | fields | Phân tích dữ liệu | – |
| Số sứ mệnh 7 · fields[2] | fields | Kỹ thuật phần mềm | – |
| Số sứ mệnh 7 · fields[3] | fields | Y học, dược học | – |
| Số sứ mệnh 7 · fields[4] | fields | Biên tập chuyên môn | – |
| Số sứ mệnh 7 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 7 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 8 | title | Người điều hành | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 8 | summary | Số sứ mệnh 8 cho thấy bạn thể hiện năng lực rõ nhất khi được quản lý nguồn lực, con người hay tiền bạc. Bạn nhìn ra cách một việc có thể lớn lên và biết sắp … | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 8 · strengths[0] | strengths | Bạn đặt mục tiêu rõ ràng và theo dõi tiến độ bằng con số cụ thể. | không có nguồn |
| Số sứ mệnh 8 · strengths[1] | strengths | Bạn đứng vững trước áp lực, kể cả khi phải nói “không” với một khách hàng lớn. | không có nguồn |
| Số sứ mệnh 8 · strengths[2] | strengths | Bạn biết định giá đúng sản phẩm và công sức, không bán rẻ mình. | không có nguồn |
| Số sứ mệnh 8 · watchOut[0] | watchOut | Bạn có thể đặt hiệu quả lên trên cảm xúc của người làm cùng. | không có nguồn |
| Số sứ mệnh 8 · watchOut[1] | watchOut | Bạn dễ gắn giá trị bản thân với chức danh và thu nhập. | không có nguồn |
| Số sứ mệnh 8 · advice[0] | advice | Với mỗi quyết định lớn, bạn hỏi thêm một câu: quyết định này ảnh hưởng thế nào tới người trong nhóm. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số sứ mệnh 8 · advice[1] | advice | Dành thời gian kèm một người trẻ hơn. Bạn sẽ thấy sức ảnh hưởng của mình theo một cách khác. | không có nguồn |
| Số sứ mệnh 8 · fields[0] | fields | Quản trị kinh doanh | – |
| Số sứ mệnh 8 · fields[1] | fields | Tài chính, ngân hàng | – |
| Số sứ mệnh 8 · fields[2] | fields | Bất động sản | – |
| Số sứ mệnh 8 · fields[3] | fields | Luật | – |
| Số sứ mệnh 8 · fields[4] | fields | Điều hành dự án | – |
| Số sứ mệnh 8 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 8 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 9 | title | Người làm vì nhiều người | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 9 | summary | Số sứ mệnh 9 cho thấy bạn phát huy năng lực tốt nhất khi công việc có ích cho nhiều người. Bạn nhìn vấn đề rộng và dễ đồng cảm với những hoàn cảnh khác mình.… | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 9 · strengths[0] | strengths | Bạn nói được ý nghĩa của công việc, giúp người khác thấy mình đang góp vào điều gì. | không có nguồn |
| Số sứ mệnh 9 · strengths[1] | strengths | Bạn làm việc tốt với người đến từ nhiều vùng miền và hoàn cảnh. | không có nguồn |
| Số sứ mệnh 9 · strengths[2] | strengths | Bạn có cảm xúc tinh tế, hợp với những công việc chạm tới lòng người. | cụm dịch/sai kết hợp “chạm tới”; không có nguồn |
| Số sứ mệnh 9 · watchOut[0] | watchOut | Bạn dễ ôm những mục tiêu quá lớn rồi thấy mình nhỏ bé. | không có nguồn |
| Số sứ mệnh 9 · watchOut[1] | watchOut | Bạn có thể bỏ qua chuyện tiền bạc và chi phí khi làm một việc mình tin là tốt. | không có nguồn |
| Số sứ mệnh 9 · advice[0] | advice | Với mỗi lý tưởng, bạn viết ra một việc nhỏ làm được ngay trong tháng này. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số sứ mệnh 9 · advice[1] | advice | Khi tham gia dự án cộng đồng, bạn hỏi rõ ngân sách và vai trò để không gánh quá sức. | không có nguồn |
| Số sứ mệnh 9 · fields[0] | fields | Phi lợi nhuận, phát triển cộng đồng | – |
| Số sứ mệnh 9 · fields[1] | fields | Giáo dục | – |
| Số sứ mệnh 9 · fields[2] | fields | Nghệ thuật | – |
| Số sứ mệnh 9 · fields[3] | fields | Y tế cộng đồng | – |
| Số sứ mệnh 9 · fields[4] | fields | Quan hệ quốc tế | – |
| Số sứ mệnh 9 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 9 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 11 | title | Người truyền cảm hứng | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 11 | summary | Số sứ mệnh 11 cho thấy bạn đóng góp mạnh nhất qua ý tưởng và khả năng khiến người khác tin vào nó. Bạn hay thấy một hướng đi trước khi mọi người kịp nhận ra.… | mở khuôn “Số sứ mệnh…” (12/12); cụm dịch/sai kết hợp “đặt chân xuống đất”; kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 11 · strengths[0] | strengths | Bạn nắm bắt xu hướng sớm, như nhận ra một thói quen mới của khách hàng trước khi số liệu kịp cho thấy. | không có nguồn |
| Số sứ mệnh 11 · strengths[1] | strengths | Bạn nói chuyện chạm tới cảm xúc, hợp với những vai trò cần thuyết phục hay động viên người khác. | cụm dịch/sai kết hợp “chạm tới”; không có nguồn |
| Số sứ mệnh 11 · strengths[2] | strengths | Bạn nhạy với nhu cầu tinh thần của những người làm cùng. | không có nguồn |
| Số sứ mệnh 11 · watchOut[0] | watchOut | Bạn dễ căng thẳng khi phải xử lý quá nhiều việc vụn vặt. | không có nguồn |
| Số sứ mệnh 11 · watchOut[1] | watchOut | Bạn có thể bị cuốn vào ý tưởng mà quên kiểm tra xem nó có làm được không. | không có nguồn |
| Số sứ mệnh 11 · advice[0] | advice | Bắt cặp với một người giỏi thực thi để biến ý tưởng của bạn thành sản phẩm. | không có nguồn |
| Số sứ mệnh 11 · advice[1] | advice | Trước khi trình bày một ý tưởng, bạn chuẩn bị sẵn ba bước làm đầu tiên. | không có nguồn |
| Số sứ mệnh 11 · fields[0] | fields | Diễn giả, đào tạo | – |
| Số sứ mệnh 11 · fields[1] | fields | Sáng tạo nội dung | – |
| Số sứ mệnh 11 · fields[2] | fields | Tư vấn | – |
| Số sứ mệnh 11 · fields[3] | fields | Nghệ thuật | – |
| Số sứ mệnh 11 · fields[4] | fields | Hoạt động xã hội | – |
| Số sứ mệnh 11 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 11 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 22 | title | Người dựng hệ thống | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 22 | summary | Số sứ mệnh 22, viết là 22/4, cho thấy bạn có thể đóng góp ở quy mô lớn, nơi cần cả tầm nhìn lẫn sự tỉ mỉ. Bạn hình dung được cả một hệ thống và biết từng viê… | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 22 · strengths[0] | strengths | Bạn thiết kế được quy trình cho cả tổ chức, không chỉ cho riêng mình. | không có nguồn |
| Số sứ mệnh 22 · strengths[1] | strengths | Bạn bền bỉ với những dự án kéo dài nhiều năm. | không có nguồn |
| Số sứ mệnh 22 · strengths[2] | strengths | Bạn ghép được người có ý tưởng với người làm thực tế. | không có nguồn |
| Số sứ mệnh 22 · watchOut[0] | watchOut | Bạn có thể tự tạo áp lực quá lớn vì muốn làm việc to tát. | không có nguồn |
| Số sứ mệnh 22 · watchOut[1] | watchOut | Bạn dễ ôm hết phần quan trọng vì sợ người khác làm không đúng. | không có nguồn |
| Số sứ mệnh 22 · advice[0] | advice | Viết tài liệu hướng dẫn cho những việc bạn đang làm, để người khác có thể tiếp nhận. | không có nguồn |
| Số sứ mệnh 22 · advice[1] | advice | Chia dự án thành từng giai đoạn và cho phép mỗi giai đoạn có vài sai sót nhỏ. | không có nguồn |
| Số sứ mệnh 22 · fields[0] | fields | Kiến trúc, quy hoạch | – |
| Số sứ mệnh 22 · fields[1] | fields | Kỹ thuật hệ thống | – |
| Số sứ mệnh 22 · fields[2] | fields | Quản lý chương trình lớn | – |
| Số sứ mệnh 22 · fields[3] | fields | Khởi nghiệp công nghệ | – |
| Số sứ mệnh 22 · fields[4] | fields | Hành chính công | – |
| Số sứ mệnh 22 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 22 | origin | (chưa có) | thiếu trường `origin` |
| Số sứ mệnh 33 | title | Người dẫn dắt bằng tấm gương | tên tự đặt theo khuôn “Người…” (12/12); không có nguồn |
| Số sứ mệnh 33 | summary | Số sứ mệnh 33, viết là 33/6, cho thấy bạn thể hiện năng lực rõ nhất khi nâng đỡ người khác lớn lên. Bạn có thể là người thầy, người hướng dẫn hay người quản … | mở khuôn “Số sứ mệnh…” (12/12); kết khuôn “Thử thách của…”; không có nguồn |
| Số sứ mệnh 33 · strengths[0] | strengths | Bạn kèm người mới rất có tâm, biết khen đúng lúc và sửa đúng chỗ. | không có nguồn |
| Số sứ mệnh 33 · strengths[1] | strengths | Bạn tạo ra một môi trường an toàn để người khác dám hỏi và dám sai. | không có nguồn |
| Số sứ mệnh 33 · strengths[2] | strengths | Bạn sống theo những giá trị rõ ràng, nên lời khuyên của bạn có trọng lượng. | không có nguồn |
| Số sứ mệnh 33 · watchOut[0] | watchOut | Bạn dễ nhận giúp quá nhiều người cùng một lúc. | không có nguồn |
| Số sứ mệnh 33 · watchOut[1] | watchOut | Bạn có thể thấy có lỗi mỗi khi đặt nhu cầu của mình lên trước. | không có nguồn |
| Số sứ mệnh 33 · advice[0] | advice | Giới hạn số người bạn trực tiếp hướng dẫn, và chọn những người phù hợp nhất. | không có nguồn |
| Số sứ mệnh 33 · advice[1] | advice | Lên lịch nghỉ ngơi giống như lên lịch họp, và giữ nó như một lời hẹn. | cụm dịch/sai kết hợp “lên lịch”; không có nguồn |
| Số sứ mệnh 33 · fields[0] | fields | Giáo dục, đào tạo | – |
| Số sứ mệnh 33 · fields[1] | fields | Tư vấn tâm lý | – |
| Số sứ mệnh 33 · fields[2] | fields | Y tế | – |
| Số sứ mệnh 33 · fields[3] | fields | Quản lý con người | – |
| Số sứ mệnh 33 · fields[4] | fields | Công tác xã hội | – |
| Số sứ mệnh 33 | note | (chưa có) | thiếu trường `note` |
| Số sứ mệnh 33 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 1 | title | Muốn tự cầm lái | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 1 | summary | Số linh hồn 1 cho thấy sâu bên trong, bạn mong được làm chủ cuộc đời mình. Bạn thấy ngột ngạt khi người khác quyết định thay, dù họ có ý tốt. Cảm giác tự tay… | mở khuôn “Số linh hồn…” (12/12); không có nguồn |
| Số linh hồn 1 · strengths[0] | strengths | Bạn có động lực tự thân, không cần ai thúc vẫn muốn tiến lên. | không có nguồn |
| Số linh hồn 1 · strengths[1] | strengths | Bạn biết mình muốn gì và ít bị đám đông kéo đi. | không có nguồn |
| Số linh hồn 1 · strengths[2] | strengths | Bạn đủ can đảm để chọn con đường khác với gia đình hay bạn bè nếu thấy cần. | không có nguồn |
| Số linh hồn 1 · watchOut[0] | watchOut | Bạn có thể ngại nhờ giúp vì sợ bị xem là yếu. | không có nguồn |
| Số linh hồn 1 · watchOut[1] | watchOut | Khi không được tự quyết, bạn dễ bực bội ngầm mà không nói ra. | không có nguồn |
| Số linh hồn 1 · advice[0] | advice | Tìm một góc trong cuộc sống mà bạn hoàn toàn tự quyết, như một dự án riêng hay một sở thích. | không có nguồn |
| Số linh hồn 1 · advice[1] | advice | Trong tuần này, bạn tập nói câu “mình cần giúp một chút” với một người tin cậy. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số linh hồn 1 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 1 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 2 | title | Muốn được ở bên | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 2 | summary | Số linh hồn 2 cho thấy điều bạn mong nhất là sự gắn bó và hoà thuận. Bạn thấy bình yên khi có một người để kể chuyện trong ngày, dù chỉ là vài tin nhắn trước… | mở khuôn “Số linh hồn…” (12/12); ví dụ rập khuôn (“tin nhắn”); không có nguồn |
| Số linh hồn 2 · strengths[0] | strengths | Bạn quý các mối quan hệ và giữ liên lạc với người thân rất đều đặn. | không có nguồn |
| Số linh hồn 2 · strengths[1] | strengths | Bạn cảm được nhu cầu của người khác, nên là một người bạn, người thương chu đáo. | không có nguồn |
| Số linh hồn 2 · strengths[2] | strengths | Bạn tìm được niềm vui trong những điều nhỏ, như một bữa cơm có đủ mặt cả nhà. | không có nguồn |
| Số linh hồn 2 · watchOut[0] | watchOut | Bạn có thể gác mong muốn của mình lại để giữ hoà khí. | không có nguồn |
| Số linh hồn 2 · watchOut[1] | watchOut | Bạn dễ thấy trống trải khi phải ở một mình lâu. | không có nguồn |
| Số linh hồn 2 · advice[0] | advice | Viết ra ba điều bạn muốn cho riêng mình, không liên quan tới ai khác. | không có nguồn |
| Số linh hồn 2 · advice[1] | advice | Tập ở một mình một buổi mà vẫn thấy dễ chịu, như đi uống cà phê hay xem phim một mình. | không có nguồn |
| Số linh hồn 2 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 2 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 3 | title | Muốn được vui và được nói | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 3 | summary | Số linh hồn 3 cho thấy bên trong bạn là mong muốn được sống vui và được nói ra điều mình nghĩ. Bạn thấy mình sống động nhất khi được sáng tạo, kể chuyện hay … | mở khuôn “Số linh hồn…” (12/12); không có nguồn |
| Số linh hồn 3 · strengths[0] | strengths | Bạn biết tìm niềm vui ngay trong những ngày bình thường. | không có nguồn |
| Số linh hồn 3 · strengths[1] | strengths | Bạn giàu trí tưởng tượng và thích làm ra những thứ mới. | không có nguồn |
| Số linh hồn 3 · strengths[2] | strengths | Bạn lạc quan, giúp người xung quanh nhẹ lòng hơn. | không có nguồn |
| Số linh hồn 3 · watchOut[0] | watchOut | Bạn có thể né những cảm xúc nặng nề bằng cách lúc nào cũng tỏ ra vui vẻ. | không có nguồn |
| Số linh hồn 3 · watchOut[1] | watchOut | Bạn dễ buồn khi ý tưởng của mình bị gạt đi. | không có nguồn |
| Số linh hồn 3 · advice[0] | advice | Dành chỗ cho một hoạt động sáng tạo mỗi tuần, như vẽ, hát hay viết. | không có nguồn |
| Số linh hồn 3 · advice[1] | advice | Khi buồn, bạn thử nói thật với một người bạn thay vì đùa cho qua. | không có nguồn |
| Số linh hồn 3 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 3 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 4 | title | Muốn có chỗ dựa vững | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 4 | summary | Số linh hồn 4 cho thấy bạn mong một cuộc sống ổn định và có trật tự. Bạn thấy yên tâm khi biết tháng sau đủ tiền tiêu, nhà cửa gọn gàng và kế hoạch rõ ràng. … | mở khuôn “Số linh hồn…” (12/12); không có nguồn |
| Số linh hồn 4 · strengths[0] | strengths | Bạn biết giữ gìn những gì mình có, từ đồ đạc tới các mối quan hệ lâu năm. | không có nguồn |
| Số linh hồn 4 · strengths[1] | strengths | Bạn có kế hoạch cho tương lai, kể cả những khoản để dành nhỏ. | không có nguồn |
| Số linh hồn 4 · strengths[2] | strengths | Bạn trung thực và muốn mọi thứ minh bạch. | không có nguồn |
| Số linh hồn 4 · watchOut[0] | watchOut | Bạn có thể bỏ qua cơ hội tốt vì nó đi kèm rủi ro. | không có nguồn |
| Số linh hồn 4 · watchOut[1] | watchOut | Bạn dễ lo xa, lo cả những chuyện chưa chắc sẽ xảy ra. | không có nguồn |
| Số linh hồn 4 · advice[0] | advice | Lập một khoản dự phòng nhỏ để bạn thấy an toàn mà vẫn dám thử điều mới. | không có nguồn |
| Số linh hồn 4 · advice[1] | advice | Mỗi khi lo lắng, bạn viết ra điều tệ nhất có thể xảy ra và cách mình sẽ xử lý. Nỗi lo sẽ có hình dạng rõ hơn và bớt đáng sợ. | cụm dịch/sai kết hợp “hình dạng”; câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số linh hồn 4 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 4 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 5 | title | Muốn được tự do | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 5 | summary | Số linh hồn 5 cho thấy điều bạn khao khát nhất là tự do. Bạn muốn được đi đây đi đó và tự chọn cách sống của mình, không bị trói vào một khuôn khổ cố định. M… | mở khuôn “Số linh hồn…” (12/12); không có nguồn |
| Số linh hồn 5 · strengths[0] | strengths | Bạn cởi mở với cái mới và không ngại thay đổi. | không có nguồn |
| Số linh hồn 5 · strengths[1] | strengths | Bạn biến những chuyến đi ngắn thành kỷ niệm đáng nhớ. | không có nguồn |
| Số linh hồn 5 · strengths[2] | strengths | Bạn hiểu và tôn trọng nhiều lối sống khác nhau. | không có nguồn |
| Số linh hồn 5 · watchOut[0] | watchOut | Bạn có thể ngại cam kết lâu dài vì sợ mất tự do. | không có nguồn |
| Số linh hồn 5 · watchOut[1] | watchOut | Bạn dễ tìm tới cảm giác mới để khỏi phải đối diện với cảm giác chán. | không có nguồn |
| Số linh hồn 5 · advice[0] | advice | Tìm tự do ngay trong khuôn khổ, như xin cách làm việc linh hoạt thay vì bỏ hẳn công việc. | không có nguồn |
| Số linh hồn 5 · advice[1] | advice | Khi thấy muốn bỏ đi, bạn tự hỏi mình đang tránh điều gì. | không có nguồn |
| Số linh hồn 5 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 5 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 6 | title | Muốn một mái nhà ấm | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 6 | summary | Số linh hồn 6 cho thấy bạn mong có một mái nhà ấm áp và những người thân yêu ở quanh mình. Bạn thấy hạnh phúc khi được chăm sóc người khác và được họ cần đến… | mở khuôn “Số linh hồn…” (12/12); không có nguồn |
| Số linh hồn 6 · strengths[0] | strengths | Bạn yêu thương thật lòng và thể hiện bằng việc làm cụ thể. | không có nguồn |
| Số linh hồn 6 · strengths[1] | strengths | Bạn khiến người khác thấy mình thuộc về một nơi nào đó. | không có nguồn |
| Số linh hồn 6 · strengths[2] | strengths | Bạn có tinh thần trách nhiệm cao với gia đình. | không có nguồn |
| Số linh hồn 6 · watchOut[0] | watchOut | Bạn có thể để niềm vui của mình phụ thuộc vào việc người khác có ổn không. | không có nguồn |
| Số linh hồn 6 · watchOut[1] | watchOut | Bạn dễ thấy có lỗi khi dành thời gian cho riêng mình. | không có nguồn |
| Số linh hồn 6 · advice[0] | advice | Nhắc mình rằng chăm cho bản thân cũng là một cách chăm cho gia đình. | không có nguồn |
| Số linh hồn 6 · advice[1] | advice | Tập để người thân tự giải quyết chuyện của họ, và chỉ giúp khi được nhờ. | không có nguồn |
| Số linh hồn 6 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 6 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 7 | title | Muốn hiểu cho tận cùng | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 7 | summary | Số linh hồn 7 cho thấy bên trong bạn là mong muốn được hiểu thấu mọi chuyện, kể cả chính mình. Bạn cần những khoảng lặng để nghĩ, và một ngày không có phút n… | mở khuôn “Số linh hồn…” (12/12); 3 câu liền mở bằng “Bạn”; không có nguồn |
| Số linh hồn 7 · strengths[0] | strengths | Bạn có đời sống bên trong phong phú và biết tự làm mình vui. | cụm dịch/sai kết hợp “đời sống bên trong”; không có nguồn |
| Số linh hồn 7 · strengths[1] | strengths | Bạn tìm ý nghĩa sâu xa thay vì dừng ở bề ngoài. | không có nguồn |
| Số linh hồn 7 · strengths[2] | strengths | Bạn trung thực với cảm nhận của mình. | không có nguồn |
| Số linh hồn 7 · watchOut[0] | watchOut | Bạn có thể tự thu mình lại mỗi khi gặp chuyện buồn. | không có nguồn |
| Số linh hồn 7 · watchOut[1] | watchOut | Bạn dễ nghi ngờ lòng tốt của người khác. | không có nguồn |
| Số linh hồn 7 · advice[0] | advice | Giữ một góc riêng trong nhà, dù nhỏ, để bạn có chỗ yên tĩnh. | không có nguồn |
| Số linh hồn 7 · advice[1] | advice | Mỗi tuần, chia sẻ điều mình đang nghĩ với một người bạn tin ít nhất một lần. | không có nguồn |
| Số linh hồn 7 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 7 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 8 | title | Muốn làm nên chuyện | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 8 | summary | Số linh hồn 8 cho thấy sâu bên trong, bạn mong đạt được thành tựu và được người khác tôn trọng. Bạn muốn tự đứng vững về tiền bạc, không phải trông vào ai. N… | mở khuôn “Số linh hồn…” (12/12); không có nguồn |
| Số linh hồn 8 · strengths[0] | strengths | Bạn có động lực mạnh để vượt qua khó khăn. | không có nguồn |
| Số linh hồn 8 · strengths[1] | strengths | Bạn hiểu giá trị của đồng tiền và của công sức. | không có nguồn |
| Số linh hồn 8 · strengths[2] | strengths | Bạn muốn xây một điều gì đó bền vững cho bản thân và gia đình. | không có nguồn |
| Số linh hồn 8 · watchOut[0] | watchOut | Bạn có thể thấy bất an mỗi khi thu nhập chững lại. | không có nguồn |
| Số linh hồn 8 · watchOut[1] | watchOut | Bạn dễ so sánh mình với những người đi nhanh hơn. | không có nguồn |
| Số linh hồn 8 · advice[0] | advice | Viết ra định nghĩa thành công theo cách riêng của bạn, không mượn của ai. | không có nguồn |
| Số linh hồn 8 · advice[1] | advice | Ghi lại những thành tựu nhỏ mỗi tháng, đừng đợi tới thành tựu lớn mới cho phép mình vui. | cụm dịch/sai kết hợp “cho phép mình”; không có nguồn |
| Số linh hồn 8 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 8 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 9 | title | Muốn đời có ý nghĩa | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 9 | summary | Số linh hồn 9 cho thấy điều bạn mong nhất là sống một cuộc đời có ý nghĩa với người khác. Bạn thấy trống trải nếu chỉ làm việc để kiếm tiền mà không thấy mìn… | mở khuôn “Số linh hồn…” (12/12); từ cấm “rung động”; không có nguồn |
| Số linh hồn 9 · strengths[0] | strengths | Bạn có lòng trắc ẩn và luôn sẵn lòng giúp đỡ. | không có nguồn |
| Số linh hồn 9 · strengths[1] | strengths | Bạn biết tha thứ và không giữ thù lâu. | không có nguồn |
| Số linh hồn 9 · strengths[2] | strengths | Bạn nhìn cuộc sống bằng con mắt rộng lượng. | không có nguồn |
| Số linh hồn 9 · watchOut[0] | watchOut | Bạn có thể cho đi tới mức quên mất nhu cầu của mình. | không có nguồn |
| Số linh hồn 9 · watchOut[1] | watchOut | Bạn dễ thất vọng khi thế giới không như bạn mong. | không có nguồn |
| Số linh hồn 9 · advice[0] | advice | Tìm một cách giúp người vừa với sức mình và làm đều đặn. | không có nguồn |
| Số linh hồn 9 · advice[1] | advice | Cho phép mình nhận lại, dù là một lời cảm ơn hay một sự giúp đỡ. | cụm dịch/sai kết hợp “cho phép mình”; không có nguồn |
| Số linh hồn 9 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 9 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 11 | title | Muốn chạm tới điều sâu xa | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 11 | summary | Số linh hồn 11 cho thấy bên trong bạn có nhu cầu tìm kiếm ý nghĩa tinh thần sâu sắc. Bạn nhạy cảm với cái đẹp, với âm nhạc hay một khoảnh khắc lặng yên. Bạn … | mở khuôn “Số linh hồn…” (12/12); không có nguồn |
| Số linh hồn 11 · strengths[0] | strengths | Bạn có trực giác mạnh về con người và tình huống. | không có nguồn |
| Số linh hồn 11 · strengths[1] | strengths | Bạn dễ thấy được cái đẹp và ý nghĩa trong những điều bình thường. | không có nguồn |
| Số linh hồn 11 · strengths[2] | strengths | Bạn truyền cảm hứng cho người khác chỉ bằng cách sống thật với mình. | không có nguồn |
| Số linh hồn 11 · watchOut[0] | watchOut | Bạn dễ quá tải cảm xúc khi ở trong môi trường căng thẳng. | không có nguồn |
| Số linh hồn 11 · watchOut[1] | watchOut | Bạn có thể đặt kỳ vọng rất cao cho bản thân. | không có nguồn |
| Số linh hồn 11 · advice[0] | advice | Tìm một hoạt động giúp bạn tĩnh lại, như ngồi yên mười phút mỗi sáng hay đi dạo trong công viên. | không có nguồn |
| Số linh hồn 11 · advice[1] | advice | Viết hoặc vẽ ra những gì bạn cảm nhận, để nó có chỗ đi thay vì dồn lại trong lòng. | không có nguồn |
| Số linh hồn 11 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 11 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 22 | title | Muốn để lại điều lâu bền | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 22 | summary | Số linh hồn 22, viết là 22/4, cho thấy bạn mong tạo ra điều gì đó lâu bền và có ích cho nhiều người. Bạn không thoả mãn với những thành công lẻ tẻ mà muốn th… | mở khuôn “Số linh hồn…” (12/12); không có nguồn |
| Số linh hồn 22 · strengths[0] | strengths | Bạn có lý tưởng lớn mà vẫn thực tế. | không có nguồn |
| Số linh hồn 22 · strengths[1] | strengths | Bạn kiên trì với những gì mình tin là đáng làm. | không có nguồn |
| Số linh hồn 22 · strengths[2] | strengths | Bạn muốn công việc của mình giúp được cộng đồng. | không có nguồn |
| Số linh hồn 22 · watchOut[0] | watchOut | Bạn dễ thấy những gì mình đang làm là chưa đủ. | không có nguồn |
| Số linh hồn 22 · watchOut[1] | watchOut | Bạn có thể quên tận hưởng hiện tại vì mải nhìn về tương lai. | không có nguồn |
| Số linh hồn 22 · advice[0] | advice | Viết ra điều bạn muốn để lại sau mười năm, rồi chọn một bước làm được ngay trong năm nay. | không có nguồn |
| Số linh hồn 22 · advice[1] | advice | Dành thời gian tận hưởng những thành quả nhỏ trước khi lao vào việc tiếp theo. | không có nguồn |
| Số linh hồn 22 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 22 | origin | (chưa có) | thiếu trường `origin` |
| Số linh hồn 33 | title | Muốn thương người trọn vẹn | tên tự đặt theo khuôn “Muốn…” (12/12); không có nguồn |
| Số linh hồn 33 | summary | Số linh hồn 33, viết là 33/6, cho thấy sâu bên trong, bạn mong được yêu thương và che chở cho người khác một cách trọn vẹn. Bạn thấy đời mình có ý nghĩa khi … | mở khuôn “Số linh hồn…” (12/12); cụm dịch/sai kết hợp “chạm tới”; không có nguồn |
| Số linh hồn 33 · strengths[0] | strengths | Bạn có lòng trắc ẩn sâu và chân thành. | không có nguồn |
| Số linh hồn 33 · strengths[1] | strengths | Bạn khiến người khác thấy an toàn khi ở cạnh. | không có nguồn |
| Số linh hồn 33 · strengths[2] | strengths | Bạn sẵn lòng hy sinh cho điều mình tin là đúng. | không có nguồn |
| Số linh hồn 33 · watchOut[0] | watchOut | Bạn dễ mang nỗi buồn của người khác về nhà. | không có nguồn |
| Số linh hồn 33 · watchOut[1] | watchOut | Bạn có thể quên rằng mình cũng xứng đáng được chăm sóc. | không có nguồn |
| Số linh hồn 33 · advice[0] | advice | Tạo một thói quen nhỏ để trút bỏ cảm xúc sau một ngày dài, như tắm nước ấm hay viết nhật ký. | không có nguồn |
| Số linh hồn 33 · advice[1] | advice | Khi giúp người, bạn nhắc mình rằng bạn đi cùng họ chứ không gánh thay họ. | không có nguồn |
| Số linh hồn 33 | note | (chưa có) | thiếu trường `note` |
| Số linh hồn 33 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 1 | title | Dáng vẻ tự tin | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 1 | summary | Số nhân cách 1 cho thấy người khác thường thấy bạn là người tự tin và có chính kiến. Lần đầu gặp, bạn để lại ấn tượng của một người biết mình muốn gì. Trong … | mở khuôn “Số nhân cách…” (12/12); không có nguồn |
| Số nhân cách 1 · strengths[0] | strengths | Bạn để lại ấn tượng rõ, dễ được nhớ tên sau lần đầu gặp. | không có nguồn |
| Số nhân cách 1 · strengths[1] | strengths | Bạn trông đáng tin khi đứng ở vai trò dẫn dắt. | không có nguồn |
| Số nhân cách 1 · strengths[2] | strengths | Bạn nói rõ ý mình, người khác không phải đoán. | không có nguồn |
| Số nhân cách 1 · watchOut[0] | watchOut | Bạn có thể bị hiểu là kiêu hoặc lạnh lùng khi chưa kịp cười. | không có nguồn |
| Số nhân cách 1 · watchOut[1] | watchOut | Sự thẳng thắn của bạn đôi khi làm người nhạy cảm bị tổn thương. | không có nguồn |
| Số nhân cách 1 · advice[0] | advice | Khi gặp người mới, bạn hỏi họ một câu về chính họ trước khi nói về mình. | không có nguồn |
| Số nhân cách 1 · advice[1] | advice | Thêm một câu mềm vào những góp ý thẳng, như “mình nghĩ thế này, bạn thấy sao”. | không có nguồn |
| Số nhân cách 1 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 1 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 2 | title | Dáng vẻ dịu dàng | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 2 | summary | Số nhân cách 2 cho thấy người khác thường thấy ở bạn sự dịu dàng và dễ gần. Lần đầu gặp, người ta thấy bạn biết lắng nghe và không làm ai khó xử. Bạn thường … | mở khuôn “Số nhân cách…” (12/12); kết khuôn “Có điều, ấn…”; không có nguồn |
| Số nhân cách 2 · strengths[0] | strengths | Bạn khiến người khác thấy thoải mái ngay từ đầu. | không có nguồn |
| Số nhân cách 2 · strengths[1] | strengths | Bạn trông đáng tin để người ta kể chuyện riêng. | không có nguồn |
| Số nhân cách 2 · strengths[2] | strengths | Bạn cư xử tế nhị, hợp với những tình huống cần khéo léo. | không có nguồn |
| Số nhân cách 2 · watchOut[0] | watchOut | Bạn có thể bị xem là thiếu quyết đoán. | không có nguồn |
| Số nhân cách 2 · watchOut[1] | watchOut | Người khác dễ nhờ bạn làm thêm việc vì nghĩ bạn sẽ không từ chối. | không có nguồn |
| Số nhân cách 2 · advice[0] | advice | Trước buổi gặp quan trọng, bạn chuẩn bị sẵn một ý kiến rõ ràng để nói ra. | không có nguồn |
| Số nhân cách 2 · advice[1] | advice | Tập nhìn vào mắt người đối diện và nói chậm, chắc giọng hơn khi trình bày. | không có nguồn |
| Số nhân cách 2 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 2 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 3 | title | Dáng vẻ rạng rỡ | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 3 | summary | Số nhân cách 3 cho thấy người khác thường thấy bạn vui vẻ và dễ bắt chuyện. Lần đầu gặp, bạn có thể làm cả nhóm cười chỉ sau vài câu. Bạn chăm chút cho vẻ ng… | mở khuôn “Số nhân cách…” (12/12); không có nguồn |
| Số nhân cách 3 · strengths[0] | strengths | Bạn phá băng giỏi, làm buổi gặp đầu tiên bớt ngượng. | không có nguồn |
| Số nhân cách 3 · strengths[1] | strengths | Bạn có phong cách riêng trong cách ăn mặc và trình bày. | không có nguồn |
| Số nhân cách 3 · strengths[2] | strengths | Bạn được nhiều người quý nhờ sự cởi mở. | không có nguồn |
| Số nhân cách 3 · watchOut[0] | watchOut | Bạn có thể bị xem là thiếu nghiêm túc ở những nơi trang trọng. | không có nguồn |
| Số nhân cách 3 · watchOut[1] | watchOut | Bạn dễ nói nhiều hơn cần khi hồi hộp. | không có nguồn |
| Số nhân cách 3 · advice[0] | advice | Trước buổi gặp quan trọng, bạn chuẩn bị vài ý chính và giữ câu chuyện xoay quanh chúng. | không có nguồn |
| Số nhân cách 3 · advice[1] | advice | Để người khác thấy chiều sâu của bạn bằng cách kể về một điều bạn đã nghĩ kỹ. | không có nguồn |
| Số nhân cách 3 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 3 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 4 | title | Dáng vẻ chỉn chu | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 4 | summary | Số nhân cách 4 cho thấy người khác thường thấy bạn chỉn chu và đáng tin cậy. Lần đầu gặp, bạn để lại ấn tượng của một người đúng giờ, ăn mặc gọn gàng và nói … | mở khuôn “Số nhân cách…” (12/12); kết khuôn “Có điều, bạn…”; không có nguồn |
| Số nhân cách 4 · strengths[0] | strengths | Bạn tạo cảm giác chắc chắn, rất hợp với buổi phỏng vấn hay buổi gặp đối tác. | không có nguồn |
| Số nhân cách 4 · strengths[1] | strengths | Bạn được tin về sự đúng hẹn và cẩn thận. | không có nguồn |
| Số nhân cách 4 · strengths[2] | strengths | Bạn trông có tổ chức, người khác dễ đoán được cách bạn làm việc. | không có nguồn |
| Số nhân cách 4 · watchOut[0] | watchOut | Bạn có thể bị xem là cứng nhắc hoặc khó gần. | không có nguồn |
| Số nhân cách 4 · watchOut[1] | watchOut | Người khác có thể ngại đùa với bạn vì nghĩ bạn không thích. | không có nguồn |
| Số nhân cách 4 · advice[0] | advice | Khi gặp người mới, bạn kể một chuyện nhỏ về sở thích của mình để họ thấy bạn gần gũi hơn. | không có nguồn |
| Số nhân cách 4 · advice[1] | advice | Bắt đầu cuộc trò chuyện bằng một nụ cười, kể cả trong những buổi gặp nghiêm túc. | không có nguồn |
| Số nhân cách 4 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 4 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 5 | title | Dáng vẻ phóng khoáng | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 5 | summary | Số nhân cách 5 cho thấy người khác thường thấy bạn là người năng động và có nhiều chuyện hay để kể. Lần đầu gặp, bạn trông như người đã đi đây đi đó và chẳng… | mở khuôn “Số nhân cách…” (12/12); từ cấm “năng lượng”; kết khuôn “Có điều, bạn…”; không có nguồn |
| Số nhân cách 5 · strengths[0] | strengths | Bạn tạo cảm giác mới mẻ và hấp dẫn ngay từ lần gặp đầu. | không có nguồn |
| Số nhân cách 5 · strengths[1] | strengths | Bạn hoà vào được với nhiều kiểu người và hoàn cảnh. | không có nguồn |
| Số nhân cách 5 · strengths[2] | strengths | Bạn trông trẻ trung và tràn đầy năng lượng. | từ cấm “năng lượng”; không có nguồn |
| Số nhân cách 5 · watchOut[0] | watchOut | Bạn có thể bị nghĩ là người không ở lâu một chỗ. | không có nguồn |
| Số nhân cách 5 · watchOut[1] | watchOut | Sự bộc trực của bạn đôi khi bị hiểu là thiếu cẩn trọng. | không có nguồn |
| Số nhân cách 5 · advice[0] | advice | Khi đi phỏng vấn, bạn kể về một việc mình đã theo tới cùng để hình ảnh của bạn cân bằng hơn. | không có nguồn |
| Số nhân cách 5 · advice[1] | advice | Giữ đúng những lời hẹn nhỏ, như giờ gặp hay một tin nhắn cần trả lời. | ví dụ rập khuôn (“tin nhắn”); không có nguồn |
| Số nhân cách 5 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 5 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 6 | title | Dáng vẻ ấm áp | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 6 | summary | Số nhân cách 6 cho thấy người khác thường thấy bạn ấm áp và đáng tin cậy. Lần đầu gặp, người ta có cảm giác bạn sẽ giúp nếu họ cần. Bạn hay được nhờ trông đồ… | mở khuôn “Số nhân cách…” (12/12); kết khuôn “Có điều, bạn…”; không có nguồn |
| Số nhân cách 6 · strengths[0] | strengths | Bạn tạo cảm giác an toàn và gần gũi. | không có nguồn |
| Số nhân cách 6 · strengths[1] | strengths | Bạn có vẻ ngoài chăm chút và hài hoà. | không có nguồn |
| Số nhân cách 6 · strengths[2] | strengths | Bạn dễ được tin tưởng ở những vai trò chăm sóc hay phục vụ. | không có nguồn |
| Số nhân cách 6 · watchOut[0] | watchOut | Bạn có thể bị nhờ vả quá mức. | không có nguồn |
| Số nhân cách 6 · watchOut[1] | watchOut | Vì bị xem là người hiền, ý kiến trái chiều của bạn đôi khi ít được lắng nghe. | không có nguồn |
| Số nhân cách 6 · advice[0] | advice | Khi được nhờ ngay lần đầu gặp, bạn có quyền nói “để mình xem lịch đã”. | không có nguồn |
| Số nhân cách 6 · advice[1] | advice | Nêu quan điểm riêng trong cuộc trò chuyện, để người khác thấy bạn có chính kiến. | không có nguồn |
| Số nhân cách 6 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 6 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 7 | title | Dáng vẻ trầm tĩnh | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 7 | summary | Số nhân cách 7 cho thấy người khác thường thấy bạn kín đáo và điềm tĩnh. Lần đầu gặp, bạn có vẻ như đang quan sát nhiều hơn nói. Người ta tò mò về bạn nhưng … | mở khuôn “Số nhân cách…” (12/12); không có nguồn |
| Số nhân cách 7 · strengths[0] | strengths | Bạn trông sâu sắc và đáng tin trong những chuyện cần suy nghĩ kỹ. | không có nguồn |
| Số nhân cách 7 · strengths[1] | strengths | Bạn giữ được bình tĩnh khi tình huống căng thẳng. | không có nguồn |
| Số nhân cách 7 · strengths[2] | strengths | Khi bạn lên tiếng, lời bạn nói thường được lắng nghe. | không có nguồn |
| Số nhân cách 7 · watchOut[0] | watchOut | Bạn có thể bị xem là lạnh lùng hay khó gần. | không có nguồn |
| Số nhân cách 7 · watchOut[1] | watchOut | Người khác không biết bạn đang nghĩ gì nên dễ hiểu lầm sự im lặng của bạn. | không có nguồn |
| Số nhân cách 7 · advice[0] | advice | Chuẩn bị sẵn hai ba câu hỏi để bắt chuyện khi gặp người mới. | không có nguồn |
| Số nhân cách 7 · advice[1] | advice | Nói ra cảm nhận của mình sớm hơn, dù chỉ là một câu ngắn. | không có nguồn |
| Số nhân cách 7 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 7 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 8 | title | Dáng vẻ có uy | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 8 | summary | Số nhân cách 8 cho thấy người khác thường thấy bạn có uy và chuyên nghiệp. Lần đầu gặp, bạn trông như người nắm được tình hình và biết cách giải quyết. Người… | mở khuôn “Số nhân cách…” (12/12); kết khuôn “Có điều, với…”; không có nguồn |
| Số nhân cách 8 · strengths[0] | strengths | Bạn để lại ấn tượng mạnh trong các buổi gặp về công việc. | không có nguồn |
| Số nhân cách 8 · strengths[1] | strengths | Bạn trông tự tin về năng lực và giá trị của mình. | không có nguồn |
| Số nhân cách 8 · strengths[2] | strengths | Người khác dễ tin rằng bạn gánh được việc lớn. | không có nguồn |
| Số nhân cách 8 · watchOut[0] | watchOut | Bạn có thể bị xem là áp đặt hoặc lạnh lùng. | không có nguồn |
| Số nhân cách 8 · watchOut[1] | watchOut | Người khác có thể ngại chia sẻ với bạn những chuyện riêng. | không có nguồn |
| Số nhân cách 8 · advice[0] | advice | Khi gặp người mới, bạn hỏi thăm họ về những chuyện ngoài công việc. | không có nguồn |
| Số nhân cách 8 · advice[1] | advice | Thỉnh thoảng kể về một lần mình từng thất bại, để người khác thấy bạn gần gũi hơn. | không có nguồn |
| Số nhân cách 8 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 8 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 9 | title | Dáng vẻ bao dung | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 9 | summary | Số nhân cách 9 cho thấy người khác thường thấy bạn rộng lượng và có chiều sâu. Lần đầu gặp, bạn trông như người từng trải và hiểu chuyện. Người ta thấy dễ tâ… | mở khuôn “Số nhân cách…” (12/12); kết khuôn “Có điều, bạn…”; không có nguồn |
| Số nhân cách 9 · strengths[0] | strengths | Bạn khiến người đối diện thấy mình được tôn trọng. | không có nguồn |
| Số nhân cách 9 · strengths[1] | strengths | Bạn có phong thái thanh lịch, dễ được quý mến. | không có nguồn |
| Số nhân cách 9 · strengths[2] | strengths | Bạn trông đáng tin trong những việc liên quan tới cộng đồng. | không có nguồn |
| Số nhân cách 9 · watchOut[0] | watchOut | Bạn có thể bị nghĩ là mơ mộng, không thực tế. | không có nguồn |
| Số nhân cách 9 · watchOut[1] | watchOut | Người khác dễ tìm tới bạn để trút tâm sự, khiến bạn mệt. | không có nguồn |
| Số nhân cách 9 · advice[0] | advice | Trong buổi gặp công việc, bạn nói rõ con số và kết quả cụ thể bên cạnh lý tưởng. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số nhân cách 9 · advice[1] | advice | Đặt giới hạn thời gian cho những cuộc tâm sự kéo dài, và nói điều đó một cách nhẹ nhàng. | không có nguồn |
| Số nhân cách 9 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 9 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 11 | title | Sức hút khó gọi tên | không có nguồn |
| Số nhân cách 11 | summary | Số nhân cách 11 cho thấy người khác thường thấy ở bạn một sức hút khó gọi tên. Lần đầu gặp, người ta có cảm giác bạn hiểu họ nhanh hơn bình thường. Bạn có th… | mở khuôn “Số nhân cách…” (12/12); kết khuôn “Có điều, sự…”; không có nguồn |
| Số nhân cách 11 · strengths[0] | strengths | Bạn để lại ấn tượng khó quên. | không có nguồn |
| Số nhân cách 11 · strengths[1] | strengths | Bạn truyền được cảm hứng qua cách nói chuyện. | không có nguồn |
| Số nhân cách 11 · strengths[2] | strengths | Bạn dễ tạo được sự kết nối sâu ngay từ lần gặp đầu. | không có nguồn |
| Số nhân cách 11 · watchOut[0] | watchOut | Bạn có thể trông hồi hộp hay căng thẳng ở chỗ đông người. | không có nguồn |
| Số nhân cách 11 · watchOut[1] | watchOut | Người khác có thể kỳ vọng ở bạn nhiều hơn những gì bạn muốn thể hiện. | không có nguồn |
| Số nhân cách 11 · advice[0] | advice | Trước buổi gặp quan trọng, bạn dành vài phút hít thở chậm để bình tĩnh lại. | không có nguồn |
| Số nhân cách 11 · advice[1] | advice | Chuẩn bị một câu giới thiệu ngắn về mình để mở đầu cho tự tin. | không có nguồn |
| Số nhân cách 11 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 11 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 22 | title | Dáng vẻ vững vàng | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 22 | summary | Số nhân cách 22, viết là 22/4, cho thấy người khác thường thấy bạn vững vàng và có năng lực. Lần đầu gặp, bạn để lại ấn tượng của người có thể đảm đương việc… | mở khuôn “Số nhân cách…” (12/12); kết khuôn “Có điều, bạn…”; “có thể” ×2; không có nguồn |
| Số nhân cách 22 · strengths[0] | strengths | Bạn tạo cảm giác yên tâm cho những người làm cùng. | không có nguồn |
| Số nhân cách 22 · strengths[1] | strengths | Bạn trông như người có kế hoạch và nhìn xa. | không có nguồn |
| Số nhân cách 22 · strengths[2] | strengths | Bạn dễ được giao trọng trách ngay từ đầu. | không có nguồn |
| Số nhân cách 22 · watchOut[0] | watchOut | Người khác có thể ngại tìm tới bạn vì những chuyện nhỏ. | không có nguồn |
| Số nhân cách 22 · watchOut[1] | watchOut | Bạn có thể bị nghĩ là quá nghiêm túc. | không có nguồn |
| Số nhân cách 22 · advice[0] | advice | Kể về một sở thích đời thường để người khác thấy bạn dễ gần. | không có nguồn |
| Số nhân cách 22 · advice[1] | advice | Chủ động hỏi han đồng nghiệp mới, để họ không ngại bạn. | ví dụ rập khuôn (“đồng nghiệp”); không có nguồn |
| Số nhân cách 22 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 22 | origin | (chưa có) | thiếu trường `origin` |
| Số nhân cách 33 | title | Dáng vẻ hiền hậu | tên tự đặt theo khuôn “Dáng vẻ…” (11/12); không có nguồn |
| Số nhân cách 33 | summary | Số nhân cách 33, viết là 33/6, cho thấy người khác thường thấy ở bạn sự hiền hậu và đáng kính. Lần đầu gặp, người ta cảm thấy bạn quan tâm thật lòng. Trẻ nhỏ… | mở khuôn “Số nhân cách…” (12/12); kết khuôn “Có điều, bạn…”; không có nguồn |
| Số nhân cách 33 · strengths[0] | strengths | Bạn khiến người xung quanh thấy được che chở. | không có nguồn |
| Số nhân cách 33 · strengths[1] | strengths | Bạn được tin tưởng ở vai trò hướng dẫn hay chăm sóc. | không có nguồn |
| Số nhân cách 33 · strengths[2] | strengths | Sự tử tế của bạn dễ nhận ra ngay từ đầu. | không có nguồn |
| Số nhân cách 33 · watchOut[0] | watchOut | Bạn dễ bị nhờ vả vượt quá sức mình. | không có nguồn |
| Số nhân cách 33 · watchOut[1] | watchOut | Người khác có thể nghĩ bạn không bao giờ buồn hay mệt. | không có nguồn |
| Số nhân cách 33 · advice[0] | advice | Cho người khác biết khi bạn đang mệt, để họ không mặc định lúc nào bạn cũng ổn. | không có nguồn |
| Số nhân cách 33 · advice[1] | advice | Trong tuần này, bạn tập từ chối một lời nhờ không gấp. | câu khuyên kiểu dịch “…, bạn + động từ”; không có nguồn |
| Số nhân cách 33 | note | (chưa có) | thiếu trường `note` |
| Số nhân cách 33 | origin | (chưa có) | thiếu trường `origin` |

### content.js

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| CALCULATORS.title | title | Hai bộ tính | – |
| CALCULATORS.lead | lead | Mỗi bộ tính dùng độc lập. Bạn có thể chỉ nhập ngày sinh, chỉ nhập họ tên, hoặc nhập cả hai để có đủ năm con số. | – |
| CALCULATORS.date.title | title | Tính theo ngày sinh | – |
| CALCULATORS.date.sub | sub | Ra Số chủ đạo và Năm cá nhân | – |
| CALCULATORS.date.legend | legend | Ngày sinh | – |
| CALCULATORS.date.target | target | Năm muốn xem | – |
| CALCULATORS.date.targetHint | targetHint | Dùng để tính Năm cá nhân. Mặc định là năm nay. | – |
| CALCULATORS.date.thisYear | thisYear | Năm nay | – |
| CALCULATORS.date.nextYear | nextYear | Năm sau | – |
| CALCULATORS.name.title | title | Tính theo họ tên | – |
| CALCULATORS.name.sub | sub | Ra Số sứ mệnh, Số linh hồn và Số nhân cách | – |
| CALCULATORS.name.label | label | Họ và tên đầy đủ | – |
| CALCULATORS.name.placeholder | placeholder | Ví dụ: Nguyễn Thị Thùy Linh | – |
| CALCULATORS.name.hint | hint | Gõ có dấu cũng được. Bạn nên dùng họ tên đầy đủ như trên giấy khai sinh. | – |
| CALCULATORS.name.previewLabel | previewLabel | Tên dùng để tính | – |
| CALCULATORS.name.empty | empty | Bạn chưa nhập họ tên. | – |
| CALCULATORS.name.noLetters | noLetters | Tên cần có ít nhất một chữ cái A đến Z. | – |
| CALCULATORS.name.noSoul | noSoul | Tên này không có nguyên âm nên chưa tính được Số linh hồn. | – |
| CALCULATORS.name.noPersonality | noPersonality | Tên này không có phụ âm nên chưa tính được Số nhân cách. | – |
| CALCULATORS.cta | cta | Xem thông điệp của bạn | – |
| CALCULATORS.ctaNote | ctaNote | Liên kết kết quả chỉ chứa các con số, không có tên hay ngày sinh. | – |
| DATE_METHOD.title | title | Cách tính theo ngày sinh | – |
| DATE_METHOD.lifePathTitle | lifePathTitle | Số chủ đạo | – |
| DATE_METHOD.lifePathIntro | lifePathIntro | Bạn viết ngày sinh đầy đủ theo dạng ngày, tháng, năm, rồi cộng tất cả các chữ số lại với nhau. | – |
| DATE_METHOD.rule.vn | vn | Nếu tổng lớn hơn 11, bạn cộng tiếp các chữ số của tổng cho tới khi còn từ 11 trở xuống. Riêng tổng bằng 22 hoặc 33 thì giữ nguyên và viết kèm số rút gọn, thà… | – |
| DATE_METHOD.rule.western | western | Nếu tổng lớn hơn 9, bạn cộng tiếp các chữ số của tổng cho tới khi còn một chữ số. Riêng 11, 22 và 33 thì giữ nguyên nếu gặp ở bất kỳ bước nào, trong đó 22 và… | – |
| DATE_METHOD.exampleLabel | exampleLabel | Ví dụ với ngày sinh 22/06/2002 | – |
| DATE_METHOD.personalYearTitle | personalYearTitle | Năm cá nhân | – |
| DATE_METHOD.personalYearIntro | personalYearIntro | Bạn cộng các chữ số của ngày sinh, tháng sinh và năm muốn xem, rồi rút gọn về một số từ 1 đến 9. Năm cá nhân tính theo năm dương lịch và đổi số vào ngày 1 th… | – |
| DATE_METHOD.personalYearExampleLabel | personalYearExampleLabel | Vẫn ngày sinh 22/06, xem cho năm 2026 | – |
| EASTER_EGG | EASTER_EGG | Ồ, bạn đang tính cho chính người làm ra trang này đấy 👀 | emoji |
| INDEX_META.lifePath.name | name | Số chủ đạo | – |
| INDEX_META.lifePath.short | short | Chủ đạo | – |
| INDEX_META.lifePath.source | source | Từ ngày sinh | – |
| INDEX_META.lifePath.what | what | Bài học và hướng đi xuyên suốt cuộc đời bạn. | – |
| INDEX_META.lifePath.text | text | Đây là con số quan trọng nhất trong bảng. Nó nói về bài học lớn và hướng đi xuyên suốt đời bạn: bạn thường làm tốt việc gì, hay vấp ở đâu và lớn lên nhờ điều… | – |
| INDEX_META.personalYear.name | name | Năm cá nhân | – |
| INDEX_META.personalYear.short | short | Năm cá nhân | – |
| INDEX_META.personalYear.source | source | Từ ngày, tháng sinh và năm muốn xem | – |
| INDEX_META.personalYear.what | what | Chủ đề của năm bạn đang xem, xoay vòng từ 1 đến 9. | – |
| INDEX_META.personalYear.text | text | Con số này xoay vòng từ 1 đến 9, mỗi năm mang một chủ đề riêng. Có năm hợp để bắt đầu, có năm hợp để vun đắp, có năm hợp để khép lại. Biết mình đang ở năm nà… | – |
| INDEX_META.expression.name | name | Số sứ mệnh | – |
| INDEX_META.expression.short | short | Sứ mệnh | – |
| INDEX_META.expression.source | source | Từ toàn bộ họ tên | – |
| INDEX_META.expression.what | what | Cách bạn thể hiện năng lực của mình ra bên ngoài. | – |
| INDEX_META.expression.text | text | Số này cho thấy cách bạn đem năng lực của mình ra bên ngoài: trong công việc, trong nhóm bạn và trong những việc người khác hay tìm tới nhờ bạn. | – |
| INDEX_META.soul.name | name | Số linh hồn | – |
| INDEX_META.soul.short | short | Linh hồn | – |
| INDEX_META.soul.source | source | Từ các nguyên âm trong tên | – |
| INDEX_META.soul.what | what | Điều bạn thật sự mong muốn ở bên trong. | – |
| INDEX_META.soul.text | text | Đây là điều bạn thật sự mong muốn ở bên trong, kể cả khi bạn ít khi nói ra. Có người mong được yên ổn, có người mong được công nhận, có người chỉ mong được t… | – |
| INDEX_META.personality.name | name | Số nhân cách | – |
| INDEX_META.personality.short | short | Nhân cách | – |
| INDEX_META.personality.source | source | Từ các phụ âm trong tên | – |
| INDEX_META.personality.what | what | Ấn tượng đầu tiên người khác thấy ở bạn. | – |
| INDEX_META.personality.text | text | Số này mô tả ấn tượng đầu tiên người khác có về bạn, lúc họ chưa kịp hiểu bạn nhiều, như trong buổi phỏng vấn hay lần đầu gặp một nhóm bạn mới. | – |
| INTRO.eyebrow | eyebrow | Thẻ 01 · Numerology | – |
| INTRO.title | title | Thần số học | – |
| INTRO.lead | lead | Thần số học đọc ngày sinh và họ tên của bạn thành vài con số, rồi gắn mỗi số với một nhóm tính cách và một bài học. Phần dưới giải thích cách tính từng bước,… | – |
| NAME_METHOD.title | title | Cách tính theo họ tên | – |
| NAME_METHOD.intro | intro | Mỗi chữ cái ứng với một con số từ 1 đến 9 theo bảng Pythagoras bên dưới. Tên có dấu được đổi về chữ in hoa không dấu trước khi tính, ví dụ Đặng thành DANG và… | – |
| NAME_METHOD.vowels | vowels | A, E, I, O, U và Y được tính là nguyên âm. Trong tên tiếng Việt, Y luôn đọc như nguyên âm, như trong Huy, Vy, Thùy hay Yến. Các chữ còn lại là phụ âm. | – |
| NAME_METHOD.formulas[0].text | text | cộng giá trị của mọi chữ cái trong họ tên. | – |
| NAME_METHOD.formulas[1].text | text | chỉ cộng các nguyên âm. | – |
| NAME_METHOD.formulas[2].text | text | chỉ cộng các phụ âm. | – |
| NAME_METHOD.reduce | reduce | Cả ba số đều rút gọn về một chữ số từ 1 đến 9. Nếu ở bước nào đó gặp 11, 22 hoặc 33 thì giữ nguyên số đó. | – |
| NAME_METHOD.exampleLabel | exampleLabel | Ví dụ với tên Bảo Huy | – |
| NAME_METHOD.exampleName | exampleName | Bảo Huy | – |
| NAME_METHOD.legendVowel | legendVowel | Nguyên âm | – |
| NAME_METHOD.legendConsonant | legendConsonant | Phụ âm | – |
| NAME_METHOD.yOption.summary | summary | Tuỳ chọn cho tên nước ngoài | – |
| NAME_METHOD.yOption.text | text | Với một số tên nước ngoài, Y đứng cạnh nguyên âm khác và đọc như phụ âm, ví dụ Yolanda hay Maya. Khi đó bạn có thể coi Y là phụ âm. Tuỳ chọn này chỉ áp dụng … | – |
| NAME_METHOD.yOption.label | label | Coi Y là phụ âm | – |
| PRIVACY_LINE | PRIVACY_LINE | Mọi phép tính diễn ra ngay trên máy của bạn. Web không lưu và không gửi tên hay ngày sinh của bạn đi đâu cả. | – |
| WHAT_IS.title | title | Thần số học là gì | – |
| WHAT_IS.paragraphs[0] | paragraphs | Thần số học là cách nhìn con người qua những con số rút ra từ ngày sinh và họ tên. Cách tính được dùng nhiều nhất hiện nay tương truyền gắn với Pythagoras, n… | – |
| WHAT_IS.paragraphs[1] | paragraphs | Bạn nên coi nó như một tấm gương để ngồi ngẫm, giống cách mình đọc một cuốn tiểu thuyết rồi tự hỏi mình có giống nhân vật nào không. Thần số học không phải k… | – |
| WHAT_IS.quote | quote | Bạn đọc như đọc lời góp ý của một người quen tinh ý. Chỗ nào đúng thì giữ lại, chỗ nào không giống mình thì cứ bỏ qua. | – |
| WHY_DIFFERENT.summary | summary | Vì sao nơi khác có thể ra số khác? | – |
| WHY_DIFFERENT.paragraphs[0] | paragraphs | Thần số học có nhiều trường phái và mỗi nơi tính hơi khác nhau. Có nơi rút gọn về một chữ số từ 1 đến 9, có nơi dừng lại khi tổng còn 10 hoặc 11. Có nơi giữ … | – |
| WHY_DIFFERENT.paragraphs[1] | paragraphs | Với họ tên, có nơi coi Y là phụ âm, có nơi coi là nguyên âm. Trang này tính theo cách phổ biến ở Việt Nam và ghi rõ từng bước, để bạn tự đối chiếu được với n… | – |

### config.js

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| topics.numerology.desc | mô tả thẻ | Đọc ngày sinh và họ tên của bạn thành năm con số, mỗi số kèm một lời gợi ý để bạn ngẫm về mình. | – |
| topics.zodiac.desc | mô tả thẻ | Đặt cung hoàng đạo phương Tây cạnh con giáp phương Đông để xem hai cách nhìn nói gì về cùng một người. | – |
| topics.zodiac.soon[0] | Sắp ra mắt | Phần này sẽ đặt 12 cung hoàng đạo cạnh 12 con giáp, đọc theo ngày và năm sinh của bạn. | – |
| topics.zodiac.soon[1] | Sắp ra mắt | Bạn sẽ thấy mỗi truyền thống mô tả tính khí, cách bạn nóng giận và cách bạn hợp tác với người khác ra sao. Cả hai đều là văn hoá để tham khảo, không phải lời… | – |
| topics.personality.desc | mô tả thẻ | Một bộ câu hỏi ngắn cho bạn thấy mình nạp năng lượng thế nào, ra quyết định ra sao và hợp kiểu làm việc nào. | từ cấm “năng lượng”; cụm dịch/sai kết hợp “nạp năng lượng” |
| topics.personality.soon[0] | Sắp ra mắt | Phần này sẽ là một bộ câu hỏi ngắn về những tình huống rất thường ngày, như cách bạn nghỉ cuối tuần hay cách bạn chia việc trong nhóm. | – |
| topics.personality.soon[1] | Sắp ra mắt | Kết quả là một tấm bản đồ đơn giản về thói quen của bạn, kèm vài gợi ý để làm việc và giao tiếp dễ chịu hơn. | – |
| topics.career-interests.desc | mô tả thẻ | Giúp bạn gọi tên kiểu việc mình thấy vui khi làm, dù là với đồ vật, con số, con người hay ý tưởng. | – |
| topics.career-interests.soon[0] | Sắp ra mắt | Phần này sẽ dựa trên mô hình sở thích nghề nghiệp Holland, thường được gọi là RIASEC, chia sở thích thành sáu nhóm. | – |
| topics.career-interests.soon[1] | Sắp ra mắt | Bạn trả lời vài câu về những việc mình thấy vui khi làm, rồi xem nhóm nào nổi bật và những ngành nghề thường gặp trong nhóm đó. | – |
| topics.future-of-work.desc | mô tả thẻ | Những nghề đang đổi cách làm vì công nghệ và những nghề mới đang thành hình, kể bằng ví dụ gần gũi. | – |
| topics.future-of-work.soon[0] | Sắp ra mắt | Phần này sẽ kể về những công việc đang thay đổi cách làm khi công cụ số và trí tuệ nhân tạo đi vào văn phòng, cửa hàng và nhà máy. | – |
| topics.future-of-work.soon[1] | Sắp ra mắt | Mỗi nghề có ví dụ cụ thể về phần việc dễ được máy làm thay và phần việc vẫn cần con người. | – |
| topics.skills.desc | mô tả thẻ | Những kỹ năng dùng được ở nhiều nghề và cách luyện từng chút một mỗi tuần. | – |
| topics.skills.soon[0] | Sắp ra mắt | Phần này sẽ gom những kỹ năng dùng được ở nhiều nghề, như viết rõ ý, trình bày trước người lạ hay tự quản lý thời gian. | – |
| topics.skills.soon[1] | Sắp ra mắt | Mỗi kỹ năng có một bài tập nhỏ làm được trong tuần, để bạn thấy mình tiến bộ thật chứ không chỉ đọc cho biết. | – |
| topics.core-values.desc | mô tả thẻ | Chọn ra vài giá trị bạn thật sự sống theo, để những lúc phải đánh đổi bạn quyết định nhẹ nhàng hơn. | – |
| topics.core-values.soon[0] | Sắp ra mắt | Phần này sẽ cho bạn một bộ thẻ giá trị như sự ổn định, tự do, gia đình hay sự công nhận, rồi mời bạn chọn và xếp hạng. | – |
| topics.core-values.soon[1] | Sắp ra mắt | Khi biết mình coi trọng điều gì nhất, bạn sẽ dễ trả lời những câu khó như có nên nhận việc lương cao nhưng xa nhà hay không. | – |
| SOON_NOTE | thông báo | HUB đang hoàn thiện phần này, bạn ghé lại sau nhé. | – |

### index.html

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| dòng 7 | meta/og | Một trang nhỏ giúp bạn hiểu mình hơn qua những cách nhìn quen thuộc như thần số học, viết bằng lời dễ hiểu. Mọi phép tính chạy ngay trên máy của bạn. | – |
| dòng 17 | meta/og | Thấu Hiểu &amp; Phát Triển Bản Thân | – |
| dòng 18 | meta/og | Thấu Hiểu &amp; Phát Triển Bản Thân · by HUB | – |
| dòng 19 | meta/og | Đọc ngày sinh và họ tên của bạn thành năm con số, mỗi số kèm một lời gợi ý để bạn ngẫm về mình. Không lưu, không gửi dữ liệu đi đâu. | – |
| dòng 24 | meta/og | Thấu Hiểu &amp; Phát Triển Bản Thân, một dự án của HUB | – |
| dòng 26 | meta/og | Thấu Hiểu &amp; Phát Triển Bản Thân · by HUB | – |
| dòng 27 | meta/og | Đọc ngày sinh và họ tên của bạn thành năm con số, mỗi số kèm một lời gợi ý để bạn ngẫm về mình. | – |
| dòng 73 | aria-label | a HUB project, về trang chủ | – |
| dòng 81 | aria-label | Điều hướng chính | – |
| dòng 83 | aria-label | Đổi giao diện sáng tối | – |
| dòng 6 | title | Thấu Hiểu &amp; Phát Triển Bản Thân · by HUB | – |
| dòng 68 | a | Bỏ qua, tới nội dung chính | – |
| dòng 79 | span | a HUB project | – |
| dòng 82 | a | Về trang này | – |
| dòng 95 | p | Một trang nhỏ để ngẫm về mình | – |
| dòng 96 | span | Thấu Hiểu &amp; | – |
| dòng 96 | span | Phát Triển Bản Thân | – |
| dòng 97 | p | Understand Yourself · Grow Yourself | – |
| dòng 98 | p | Mỗi thẻ dưới đây là một cách nhìn về con người. Đọc để hiểu mình thêm một chút, lưu lại những thông điệp giá trị với bạn. | – |
| dòng 112 | p | Các thẻ chủ đề | – |
| dòng 113 | h2 | Chọn một góc để nhìn lại chính mình | – |
| dòng 114 | p | Thần số học đã mở để bạn test thử. Những thẻ còn lại HUB đang viết dần, ace vẫn có thể bấm vào để xem trước nội dung. | – |
| dòng 123 | p | Về trang này | – |
| dòng 124 | h2 | Khám phá bản thân qua những thông điệp từ vũ trụ :)))). | từ cấm “khám phá bản thân”; từ cấm “vũ trụ” |
| dòng 129 | h3 | Trang này giúp gì cho bạn | – |
| dòng 130 | p | Trang này tổng hợp những cách nhìn quen thuộc về con người vào một chỗ và viết lại bằng lời dễ hiểu. Mỗi thẻ cho bạn vài gợi ý để tự soi lại cách mình làm vi… | – |
| dòng 133 | span | ii. | – |
| dòng 134 | h3 | Đọc kết quả thế nào cho đúng | – |
| dòng 135 | p | Bạn hãy đọc kết quả như lời nhận xét của một người quen tinh ý: có chỗ trúng, có chỗ trật. Đoạn nào khiến bạn gật gù thì giữ lại mà ngẫm thêm, đoạn nào không… | – |
| dòng 138 | span | iii. | – |
| dòng 139 | h3 | Dữ liệu của bạn ở yên trên máy | – |
| dòng 140 | p | Mọi phép tính diễn ra ngay trên trình duyệt của bạn. Tên và ngày sinh không được lưu lại, không nằm trên đường link và không được gửi tới máy chủ nào. Trang … | – |
| dòng 145 | p | Lời của HUB | – |
| dòng 150 | span | — HUB | – |
| dòng 159 | p | Thấu Hiểu &amp; Phát Triển Bản Thân | – |
| dòng 160 | p | Thực hiện bởi | – |
| dòng 161 | p | Trang thông tin để tham khảo, không thay cho lời khuyên chuyên môn về tâm lý, sức khoẻ hay tài chính. | – |
| dòng 164 | a | Trang bio của HUB | – |
| dòng 165 | a | Facebook | – |
| dòng 166 | a | TikTok | – |
| dòng 167 | a | Email | – |
| dòng 178 | p | Trang cần bật JavaScript để mở các thẻ và tính toán. Mọi phép tính đều chạy ngay trên máy của bạn. | – |

### 404.html

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| dòng 6 | title | Không tìm thấy trang · Thấu Hiểu &amp; Phát Triển Bản Thân | – |
| dòng 92 | p | Lỗi 404 | – |
| dòng 93 | h1 | Trang này không có ở đây | – |
| dòng 94 | p | Đường link bạn mở có thể đã đổi, hoặc bị gõ nhầm một chữ. Mình thử cộng các con số của lỗi này cho vui thì ra 8, con số của người cầm lái. Bạn cầm lái quay v… | – |
| dòng 95 | a | Về trang chủ | – |
| dòng 96 | p | Thấu Hiểu &amp; Phát Triển Bản Thân · a HUB project | – |

### main.js

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| dòng 51 | giao diện | Đang mở | – |
| dòng 51 | giao diện | Sắp ra mắt | – |
| dòng 59 | giao diện | Mở thẻ | – |
| dòng 59 | giao diện | Xem trước | – |
| dòng 78 | giao diện | Sắp ra mắt | – |
| dòng 81 | giao diện | Quay lại các chủ đề | – |
| dòng 100 | giao diện | Không tìm thấy trang bạn cần, mình đưa bạn về trang chủ nhé. | – |
| dòng 126 | giao diện | Đang mở thẻ… | – |
| dòng 136 | giao diện | Chưa tải được nội dung. Bạn kiểm tra kết nối mạng rồi thử mở lại nhé. | – |

### core/theme.js

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| dòng 26 | giao diện | Chuyển sang giao diện tối | – |
| dòng 26 | giao diện | Chuyển sang giao diện sáng | – |

### modules/numerology/view.js

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| dòng 79 | giao diện | Bảng chữ cái Pythagoras: mỗi cột là một con số, các chữ trong cột mang giá trị đó. | – |
| dòng 144 | giao diện | Tra cứu thông điệp | – |
| dòng 158 | giao diện | Năm chỉ số trong trang | – |
| dòng 173 | giao diện | Cách tính | – |
| dòng 187 | giao diện | Số chủ đạo | – |
| dòng 197 | giao diện | Năm cá nhân | – |
| dòng 244 | giao diện | Bộ tính 1 | – |
| dòng 283 | giao diện | Bộ tính 2 | – |
| dòng 347 | giao diện | Bạn có thể tính thêm theo họ tên để có đủ năm con số. | – |
| dòng 367 | giao diện | Bạn có thể tính thêm theo ngày sinh để có đủ năm con số. | – |
| dòng 503 | giao diện | Số chủ đạo của bạn là …. Năm cá nhân của bạn trong năm … là …. | – |
| dòng 541 | giao diện | … … | – |
| dòng 543 | giao diện | Số sứ mệnh | – |
| dòng 543 | giao diện | Số linh hồn | – |
| dòng 543 | giao diện | Số nhân cách | – |
| dòng 563 | giao diện | Đã tính Y là nguyên âm như tên tiếng Việt. | – |
| dòng 563 | giao diện | Đã tính Y là phụ âm. | – |
| dòng 569 | giao diện | Là gì | – |
| dòng 570 | giao diện | 5 chỉ số | – |
| dòng 571 | giao diện | Cách tính | – |
| dòng 572 | giao diện | Bộ tính | – |
| dòng 640 | giao diện | Đã xoá các con số cũ. Bạn nhập thông tin của người khác nhé. | – |

### modules/numerology/results.js

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| dòng 35 | giao diện | Chủ đề của năm | – |
| dòng 36 | giao diện | Nên làm nhiều hơn | – |
| dòng 37 | giao diện | Nên bớt lại | – |
| dòng 38 | giao diện | Gợi ý theo từng quý | – |
| dòng 39 | giao diện | Quý … … | – |
| dòng 43 | giao diện | Lĩnh vực có thể hợp | – |
| dòng 45 | giao diện | Đây chỉ là gợi ý để bạn tham khảo. Người mang số nào cũng có thể giỏi bất kỳ nghề gì nếu đủ quan tâm và chịu luyện. | – |
| dòng 49 | giao diện | Điểm mạnh | – |
| dòng 50 | giao diện | Điều cần để ý | – |
| dòng 51 | giao diện | Gợi ý làm được ngay | – |
| dòng 66 | giao diện | ngày sinh | – |
| dòng 66 | giao diện | họ tên | – |
| dòng 71 | giao diện | Chưa tính | – |
| dòng 73 | giao diện | Quay lại tính | – |
| dòng 95 | giao diện | Đọc đầy đủ | – |
| dòng 117 | giao diện | Thu gọn | – |
| dòng 117 | giao diện | Đọc đầy đủ | – |
| dòng 185 | giao diện | Tóm tắt | – |
| dòng 186 | giao diện | Thông điệp | – |
| dòng 187 | giao diện | Làm gì tiếp | – |
| dòng 214 | giao diện | Kết quả · Thần số học | – |
| dòng 215 | giao diện | Thông điệp từ những con số của bạn | – |
| dòng 218 | giao diện | Mỗi thẻ có một đoạn đọc nhanh. Đoạn nào chạm tới bạn thì bấm “Đọc đầy đủ” để xem điểm mạnh, điều cần để ý và vài gợi ý làm được ngay. | cụm dịch/sai kết hợp “chạm tới” |
| dòng 219 | giao diện | Liên kết này chưa có con số nào. Bạn quay lại phần bộ tính để nhập ngày sinh hoặc họ tên nhé. | – |
| dòng 230 | giao diện | Làm gì tiếp | – |
| dòng 232 | giao diện | Tính lại | – |
| dòng 233 | giao diện | Tính cho người khác | – |
| dòng 236 | giao diện | Liên kết chỉ chứa các con số, không có tên hay ngày sinh của bạn. | – |
| dòng 238 | giao diện | Tra cứu | – |
| dòng 238 | giao diện | Đọc thông điệp cho bất kỳ chỉ số và con số nào, ví dụ để đọc giúp người thân. | – |
| dòng 251 | giao diện | Đã sao chép liên kết. Link chỉ có các con số, không có tên hay ngày sinh. | – |
| dòng 251 | giao diện | Chưa sao chép được. Bạn thử chép tay đường link trên thanh địa chỉ nhé. | – |
| dòng 284 | giao diện | Tra cứu · Thần số học | – |
| dòng 285 | giao diện | Tra cứu thông điệp | – |
| dòng 286 | giao diện | Phần này dành cho bạn nào đã biết số của mình từ trước, hoặc muốn đọc giúp người thân. Bạn chọn chỉ số, rồi chọn con số để đọc thông điệp đầy đủ. | – |
| dòng 295 | giao diện | ← Về phần giới thiệu và bộ tính | – |
| dòng 317 | giao diện | Số 1 chỉ xuất hiện khi tính theo cách phương Tây, còn số 10 chỉ xuất hiện khi tính theo cách phổ biến ở Việt Nam. | – |

### modules/numerology/calc.js

| Vị trí | Loại | Nội dung | Lỗi tự phát hiện |
|---|---|---|---|
| dòng 85 | giao diện | Bạn chưa nhập ngày sinh. | – |
| dòng 86 | giao diện | Ngày sinh nằm trong khoảng từ 1 đến 31. | – |
| dòng 88 | giao diện | Bạn chưa nhập tháng sinh. | – |
| dòng 89 | giao diện | Tháng sinh nằm trong khoảng từ 1 đến 12. | – |
| dòng 91 | giao diện | Bạn chưa nhập năm sinh. | – |
| dòng 92 | giao diện | Năm sinh cần nằm trong khoảng từ … đến …. | – |
| dòng 98 | giao diện | Năm … không phải năm nhuận nên tháng 2 chỉ có 28 ngày. | – |
| dòng 99 | giao diện | Tháng … năm … chỉ có … ngày. | – |
| dòng 103 | giao diện | Ngày này chưa tới. Bạn kiểm tra lại giúp mình nhé. | – |
| dòng 114 | giao diện | Bạn chưa nhập năm muốn xem. | – |
| dòng 116 | giao diện | Năm muốn xem cần nằm trong khoảng từ … đến …. | – |
