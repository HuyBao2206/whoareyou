# Nghiên cứu Thần số học: tổng hợp

Ngày tổng hợp: 26/10/2026. Đây là file đầu mối. Ghi chú chi tiết và danh sách nguồn có mã nằm trong ba file con:

| File | Nội dung | Mã nguồn |
|---|---|---|
| `than-so-hoc-y-nghia-so.md` | Ý nghĩa từng số 1–9, 10, 11, 22, 33; nguồn gốc biểu tượng (dùng cho trường `origin`); bối cảnh Pythagoras và Balliett; nét hay bị gán mà không có nguồn | [N1]–[N45] |
| `than-so-hoc-cach-tinh.md` | Kiểm chứng quy ước tính ở Việt Nam: số chủ đạo, năm cá nhân, tháng cá nhân, chữ Y, thuật ngữ | [C1]–[C33] |
| `than-so-hoc-chi-so.md` | Năm cá nhân, Số linh hồn, Số nhân cách, Số sứ mệnh; quy tắc đọc kết hợp; thần số học và khoa học | [S1]–[S33] |

Khi viết nội dung, mỗi ý dẫn về mã nguồn trong các file trên. Ý không có mã là ý bịa, phải bỏ.

## Giới hạn quan trọng

- Môi trường làm việc chặn tải trực tiếp các trang nguồn chính (worldnumerology.com, britannica.com, plato.stanford.edu, archive.org, gutenberg.org, vnexpress.net, wikipedia.org). Mọi ghi chú dựa trên **đoạn trích và tóm tắt mà công cụ tìm kiếm trả về** cho đúng URL được ghi, chưa đọc trọn trang.
- Chưa đọc được nội dung sách của Phillips, Goodwin, Jordan, Campbell, Balliett, chỉ có trích đoạn, mục lục, bản tóm tắt của bên thứ ba.
- Hệ quả: những ý đánh dấu **[1 nguồn]** chưa nên dùng. Trước khi viết hàng loạt ở Phase 1, nên mở quyền truy cập các tên miền trên để kiểm lại câu chữ (xem `PROGRESS.md`).

## Kết luận chính

### 1. Thần số học là gì, từ đâu ra
- Thần số học hiện đại gán con số cho tên và ngày sinh để luận tính cách. Britannica xếp nó cạnh bói toán và ngụy khoa học [N1][S21].
- Trường phái Pythagoras thời cổ có coi trọng con số và gán ý nghĩa cho một số con số (4 là công lý, 5 là hôn nhân, 10 là số hoàn hảo nhất), nhưng nhiều điều gán cho Pythagoras là chứng cứ muộn [N2][N3][N4][N7].
- Hệ tính theo tên và ngày sinh hình thành ở Mỹ đầu thế kỷ 20, qua sách của L. Dow Balliett. Chính bà đặt phụ đề “A System of Numbers as Taught by Pythagoras” [N10][N11][N14]. Florence Campbell và Juno Jordan là học trò, góp phần định hình hệ thống [N10][N13].
- Số bậc thầy 11, 22, 33 là quy ước đầu thế kỷ 20, không có trong văn liệu Pythagoras. 33 càng muộn hơn và không có trong Goodwin hay Phillips [N10][N21][N24].
- Ở Việt Nam, thần số học phổ biến từ khoảng năm 2020, chủ yếu qua sách *Thay đổi cuộc sống với Nhân số học* của Lê Đỗ Quỳnh Hương, phát triển từ sách của David A. Phillips [C14][C15][N43][N44].
- Không có cơ sở khoa học. Những lời mô tả nghe “rất đúng” phần lớn được giải thích bằng hiệu ứng Barnum (thí nghiệm của Forer, 1948–1949) [S23][S28]. VnExpress dẫn ý kiến các nhà khoa học coi việc đoán tính cách qua con số là ngụy khoa học [S25][S26][N40].

### 2. Cách tính (đã kiểm chứng ở mức đoạn trích)
- **Số chủ đạo, cách phổ biến ở Việt Nam:** cộng mọi chữ số của ngày sinh dương lịch, rút gọn tới khi còn 2–11; riêng 22 giữ nguyên, viết 22/4. Không có số chủ đạo 1. Quy ước truy về Phillips [C1][C20][C27].
  - Câu cũ “tổng bằng 10 được giữ lại” đúng hướng nhưng hẹp: các tổng 19, 28, 37, 46 cũng thành 10 [C1].
  - **Hệ Phillips không có 33**; theo luật của ông, tổng 33 ra 6. Một số trang Việt vẫn giữ 33/6 [C5][C30]. Web hiện đang giữ 33.
  - Không phải cách duy nhất: có trang lớn rút 10 về 1 [C28].
- **Cách của Decoz:** rút gọn riêng tháng, ngày, năm rồi mới cộng; số bậc thầy chỉ tính ở bước cuối [C6]. Chế độ `western` của web hiện cộng thẳng, nên không phải cách của Decoz.
- **Năm cá nhân:** ngày sinh + tháng sinh + năm dương lịch, rút về 1–9, đổi số vào 1/1. Có trường phái đổi vào sinh nhật [C9][C13][C23][S1][S10].
- **Tháng cá nhân:** năm cá nhân + số của tháng dương lịch, rút về 1–9 [C10][S2]. **Không có nguồn nào chia năm cá nhân theo quý** [C-mục 3][S-A2]. Trường `byQuarter` hiện tại không có cơ sở.
- **Chữ Y:** các trang Việt không thống nhất. 5/7 trang đã xem coi Y là phụ âm khi đứng cạnh nguyên âm khác (Huy, Duy, Nguyễn), là nguyên âm khi đứng một mình hoặc sau phụ âm (Vy, My) [C29]. Câu cũ “Y luôn là nguyên âm, như trong Huy” không đúng với cách phổ biến.
- **Bảng chữ cái Pythagoras:** khớp với `calc.js` [C33].

### 3. Thuật ngữ tiếng Việt nên dùng
- Số chủ đạo; Năm cá nhân; Tháng cá nhân; Chu kỳ 9 năm [C-mục 4][S-mục 2].
- Số sứ mệnh (còn gọi là chỉ số thể hiện); Số linh hồn (còn gọi là chỉ số tâm hồn, chỉ số nội tâm); Số nhân cách [C32][S20].
- Số bậc thầy (số Master), viết 22/4 [N45].
- “Nhân số học” là tên nhóm Lê Đỗ Quỳnh Hương dùng; “Thần số học” là tên phổ biến [N42][C24].
- Chưa tìm được cách gọi tên từng con số (kiểu “số 1, người tiên phong”) thống nhất trên báo lớn. Các trang Việt chỉ dùng chùm từ khoá (xem `than-so-hoc-y-nghia-so.md`, mục 4).

### 4. Ý nghĩa từng số: điểm cần lưu ý khi viết
- Phần lớn nét tính cách của 1–9 có từ 2 nguồn độc lập trở lên (Decoz, Goodwin, Phillips, Millman, báo Mỹ). Chỉ dùng các nét đó.
- **Phillips mô tả số 3 và số 8 khác Decoz:** số 3 thiên về trí óc, phân tích; số 8 nghiêng về độc lập và cách biểu lộ tình cảm [N24]. Người đọc Việt quen sách Phillips có thể thấy bản mô tả kiểu Mỹ là “sai”.
- **Số 10** chỉ có trong hệ Phillips, với từ khoá thích nghi và điều chỉnh; hiện chỉ có 1 nguồn [N24].
- **Nguồn gốc biểu tượng:** nghĩa cổ (4 là công lý, 5 là hôn nhân, 7 là thời cơ) khác xa nghĩa trong thần số học hiện đại. Nghĩa hiện đại của 4 (nền móng) đi qua hình vuông [N20][N24]. Decoz suy nghĩa từ hình chữ số Ấn – Ả Rập, điều không thể có từ thời Pythagoras [N1][N20]. Trường `origin` phải nói rõ phần nào là cổ, phần nào là hiện đại.

### 5. Đọc kết hợp các số
- **Có nguồn:** số bậc thầy không rút gọn [S6]; “cầu nối” (bridge number) của Decoz, là hiệu giữa linh hồn và nhân cách, giữa chủ đạo và sứ mệnh [S7]; khoảng cách giữa bên trong (linh hồn) và bên ngoài (nhân cách) [S7][S12]; số xuất hiện nhiều nhất trong tên (Hidden Passion) [S8][S9].
- **Chỉ có nguồn yếu hoặc không có:** số chủ đạo so với số linh hồn; năm cá nhân trùng hay lệch với số chủ đạo; cùng một số ở nhiều chỉ số; ý “số bậc thầy sống ở mức số gốc” [S-E2, E4, E5].

## Đề xuất cho Phase 1 (chờ HUB quyết, xem cuối `review/hieu-chinh.md`)
1. Chế độ `vn` theo đúng Phillips: bỏ 33 hoặc giữ kèm ghi chú.
2. Thay `byQuarter` bằng tháng cá nhân (12 tháng), là phần có nguồn.
3. Sửa câu về chữ Y; cân nhắc thêm tuỳ chọn “theo vị trí”.
4. Phần “Đọc 5 số cùng nhau” chỉ dùng các quy tắc có nguồn ở mục 5.
5. Đổi mô tả chế độ `western` cho đúng (hoặc cài đúng cách của Decoz).
