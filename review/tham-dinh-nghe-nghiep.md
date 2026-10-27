# Thẩm định nội dung thẻ “Nghề nghiệp hôm nay & ngày mai”

Ngày thẩm định: 27/10/2026. Người thẩm định: biên tập viên chuyên môn độc lập (kinh tế lao động, tiếng Việt báo chí), chưa tham gia quá trình viết.
Phạm vi: `assets/js/modules/future/content.js` (tổng quan, phương pháp, danh mục nguồn) và `assets/js/modules/future/jobs/*.js` (41 hồ sơ). Căn cứ đối chiếu duy nhất: `research/nghe-nghiep.md`, `research/nghe-nghiep-ho-so.md`. Không dùng web. Không sửa file nội dung.

Ghi chú kỹ thuật: trong lúc thẩm định, các file `jobs/*.js` được đổi tên trường `ai` thành `aiText` (nội dung, mức demand, nhãn nhiệm vụ và mã Holland không đổi, đã kiểm lại). Báo cáo này dùng tên `aiText`. Chỉ số AI dưới đây tính bằng `calc.aiIndex()` hiện hành.

## Nhận xét tổng quát

1. Khung bài tốt hơn mặt bằng nội dung hướng nghiệp tiếng Việt: có cách tiếp cận theo nhiệm vụ, tách “tiếp xúc” khỏi “mất việc”, ghi phạm vi mẫu của WEF, phân biệt số Mỹ với số Việt Nam, và nhiều chỗ dám viết “chưa có số liệu đủ tin cậy”. Giọng nhìn chung trung tính, không có từ giật gân kiểu “hot”, “AI cướp việc”.
2. Vấn đề lớn nhất là **độ tin cậy được trình bày cao hơn thực tế**. Ghi chú nghiên cứu nói rõ không tài liệu nào được đọc trực tiếp, phần lớn số hồ sơ nghề ở mức [QTD-2], nhiều nhận định ở mức [CXM]; thế nhưng `SOURCE_NOTE` mô tả quy trình như đã đối chiếu, và nhiều câu [CXM] được viết như sự thật (IMF xếp bác sĩ, Felten xếp giáo viên tiếng Anh, điều dưỡng sang Nhật, Đức, sắp xếp cơ quan báo chí).
3. Có **nội dung không có trong research**: cả đoạn khảo sát BUV và Decision Lab, tỷ lệ 67% của kỹ năng thứ hai trong WEF, vụ Mata kiện Avianca, nhận định “số tuyệt đối của WEF chủ yếu đến từ nước thu nhập thấp”, kết luận “hai quyết định có tác động lớn nhất đến thu nhập”.
4. **Thang demand không được áp đúng quy tắc tự đặt**: METHOD nói nghề thiếu số liệu Việt Nam đặt ở mức 3, nhưng 13 nghề dữ liệu yếu và 6 nghề dữ liệu trung bình nằm ở 1,5–4, phần lớn dựa vào tín hiệu định tính không có trong research. Đây là lỗi ảnh hưởng trực tiếp đến vị trí trên bản đồ, thứ người đọc nhìn đầu tiên.
5. **Chỉ số AI tính theo số nhiệm vụ, không theo thời gian**, trái với chính đoạn AI “tác động ròng phụ thuộc nhiệm vụ nào chiếm phần lớn thời gian”. Kết quả có điểm khó bảo vệ: giáo viên phổ thông 3,5 bằng biên dịch viên và kế toán; công nhân may 3,5 cao hơn kỹ sư AI; biên dịch 3,5 thấp hơn marketing số 4.
6. Nguồn: khoá `bls-2035` bị dùng cho số kỳ 2024–2034; số thu nhập theo ngành gắn sai khoá hoặc không có khoá; vài nguồn liệt kê nhưng không dùng.
7. Văn phong: lặp khuôn rõ ở `fit` (41/41 mở bằng “Gần mã …:”), `aiText` (khuôn “X, Y và Z chịu tác động cao. A, B ít chịu tác động.”), `demandWhy` (12 hồ sơ kết bằng “Đặt ở mức …”). Một số câu kết luận phán quyết quá tay so với căn cứ.
8. Kết luận: **chưa nên xuất bản** trước khi sửa xong nhóm “Phải sửa”. Phần lớn sửa được bằng cách hạ giọng, gắn đúng nguồn và áp lại thang demand; không cần viết lại cấu trúc.

### Bảng đếm lỗi

Mỗi mục được xếp theo loại chính; một số mục gộp nhiều chỗ cùng bản chất (số chỗ cụ thể ghi trong ngoặc).

| Loại | Phải sửa | Nên sửa | Cân nhắc | Cộng mục |
|---|---|---|---|---|
| A. Không có căn cứ / nói mạnh hơn căn cứ | 13 | 11 | 5 | 29 |
| B. Hời hợt, sáo, bỏ đi không mất thông tin | 0 | 2 | 2 | 4 |
| C. Sai giọng, lặp khuôn | 0 | 2 | 1 | 3 |
| D. Số thiếu năm, phạm vi | 0 | 1 | 0 | 1 |
| E. Demand, nhãn nhiệm vụ không nhất quán | 2 | 2 | 1 | 5 |
| F. Mã Holland | 0 | 1 | 1 | 2 |
| G. Nguồn không khớp, sai | 2 | 1 | 0 | 3 |
| **Cộng** | **17** | **20** | **10** | **47** |

---

## I. Phải sửa (17)

### P1. `content.js` · `SOURCE_NOTE` · A
> “Số liệu được lấy từ trang của chính cơ quan phát hành qua công cụ tìm kiếm và đối chiếu với báo chí dẫn lại; con số nào hai nguồn lệch nhau thì không dùng hoặc ghi rõ.”

Không đúng với research. `nghe-nghiep-ho-so.md` mục 0: “Không đọc trực tiếp được trang nào”, phần lớn số hồ sơ nghề là [QTD-2] (báo dẫn lại), và research yêu cầu “Trước khi đưa bất kỳ con số nào lên web, phải mở trang gốc đối chiếu”. Nhiều số lệch nhau vẫn được dùng mà không ghi (điều dưỡng 18 hay 14–15/10.000 dân; thất nghiệp thanh niên 9,07% quý III so với 8,87% 9 tháng; thiếu 104.516 hay “hơn 110 nghìn” giáo viên). “Môi trường làm việc không mở trực tiếp được” cũng là cách nói dịch, người đọc không hiểu.

Đề xuất thay:
> “Trong lần cập nhật 10/2026, chưa mở được văn bản gốc của phần lớn nguồn (thông cáo của Cục Thống kê, báo cáo ILO, WEF, BLS). Số liệu được lấy từ đoạn trích trên trang của cơ quan phát hành hoặc từ báo chí dẫn lại, nên có thể lệch so với bản gốc ở chữ số thập phân. Số về từng nghề phần lớn đến từ báo chí dẫn lại báo cáo của bộ ngành, doanh nghiệp. Người dùng số liệu cho quyết định quan trọng nên mở văn bản gốc theo đường dẫn bên dưới.”

Đồng thời: bổ sung trường `level` (`'goc' | 'trich' | 'bao'`) cho từng nguồn trong `SOURCES` để hiện mức tin cậy cạnh tên nguồn.

### P2. `content.js` · `SKILLS.paragraphs[1]`, `SKILLS.lead`, `SKILLS.takeaway`, `SOURCES['buv-2026']` · A
> “Khảo sát 375 doanh nghiệp tại Việt Nam của BUV và Decision Lab (10/2026) cho thấy cử nhân mới ra trường chỉ đạt kỳ vọng ở 1 trong 7 năng lực … 94% nhà tuyển dụng đòi hỏi năng lực số và AI cao hơn hai, ba năm trước.”

Không có dòng nào về BUV hay Decision Lab trong hai file research (đã tìm toàn văn). Mọi con số trong đoạn (375, 1/7, 80%/54%, 84%/61%, 94%) không kiểm được. `SKILLS.takeaway` (“Khoảng cách … nằm nhiều ở kỹ năng làm việc hơn ở kiến thức chuyên ngành”) và cụm “trong nước” ở `SKILLS.lead` dựa hoàn toàn vào khảo sát này.

Đề xuất: bổ sung khảo sát vào `research/nghe-nghiep.md` (tên báo cáo, cỡ mẫu, cách chọn mẫu, ai tài trợ; BUV là trường đại học tư có lợi ích tuyển sinh, phải ghi) rồi mới đưa lên. Nếu chưa bổ sung được, bỏ đoạn và thay `takeaway`:
> “Các khảo sát trên đều hỏi doanh nghiệp, phần lớn ở khu vực chính thức và thành phố lớn. Chúng cho biết kỹ năng nào đang được nhắc nhiều, chưa cho biết kỹ năng nào làm tăng thu nhập ở Việt Nam. Thẻ “Kỹ năng nên đầu tư” đi tiếp từ điểm này, với thang tự chấm và lộ trình cụ thể.”

và `lead`: “Các khảo sát quốc tế và khảo sát tuyển dụng tại Việt Nam cùng nhắc đến ba nhóm: tư duy phân tích, khả năng thích ứng, năng lực số và AI.”

### P3. `content.js` · `SKILLS.paragraphs[0]` · A
> “khả năng phục hồi, linh hoạt và thích ứng đứng thứ hai (67%)”

Research (mục 2): danh sách 10 kỹ năng “chưa đối chiếu được với báo cáo gốc”; con số 67% không xuất hiện ở đâu. “Khoảng 7 trên 10” cho tư duy phân tích là [qua trích dẫn], có tóm tắt ghi 69%.

Đề xuất thay câu đầu:
> “Trong Future of Jobs 2025, tư duy phân tích đứng đầu danh sách kỹ năng cốt lõi, khoảng 7 trên 10 doanh nghiệp được hỏi coi là thiết yếu (theo các bản tóm tắt báo cáo). Doanh nghiệp dự kiến khoảng 39% kỹ năng cốt lõi của người lao động sẽ thay đổi đến năm 2030; cứ 100 lao động thì 59 người cần đào tạo lại hoặc đào tạo thêm.”

### P4. `content.js` · `MARKET.takeaway` · A
> “Với người trẻ, hai quyết định có tác động lớn nhất đến thu nhập là có văn bằng, chứng chỉ chuyên môn hay không, và làm ở khu vực chính thức hay phi chính thức.”

Research không có số thu nhập theo trình độ hay theo khu vực chính thức/phi chính thức (mục 1 chỉ có theo giới, thành thị/nông thôn, khu vực kinh tế). “Tác động lớn nhất” là nhận định nhân quả không có căn cứ, lại đặt ở vị trí kết luận người đọc nhớ nhất.

Đề xuất thay:
> “Số liệu chung cho thấy khoảng cách thu nhập lớn giữa nông nghiệp và hai khu vực còn lại, và phần lớn lao động chưa có văn bằng chuyên môn hay việc làm chính thức. Số thu nhập theo trình độ đào tạo có trong báo cáo Điều tra lao động việc làm năm, chưa được đưa vào lần cập nhật này; người đọc nên tra bảng đó trước khi so sánh lợi ích của từng con đường học.”

### P5. `content.js` · `GLOBAL.paragraphs[3]` · A
> “Ở Việt Nam, một phần xu hướng này đã có số liệu xác nhận. … Con số tuyệt đối của WEF chủ yếu đến từ các nước thu nhập thấp có dân số tuổi lao động còn tăng.”

(1) Câu cuối không có trong research. Research chỉ nói con số triệu việc là WEF “ghép tỷ lệ kỳ vọng với số việc làm của ILO”. (2) Số đóng phòng giao dịch và khảo sát NHNN là [QTD-2] (báo dẫn báo cáo ngân hàng); đóng phòng giao dịch cũng không trực tiếp là số giao dịch viên. “Số liệu xác nhận” nói mạnh hơn căn cứ.

Đề xuất thay:
> “Ở Việt Nam, một số tín hiệu đi cùng chiều. Theo báo chí dẫn báo cáo của các ngân hàng, năm 2025 VietinBank đóng 108 phòng giao dịch, Vietcombank dừng 27 điểm giao dịch; khảo sát của Ngân hàng Nhà nước quý I/2025 ghi nhận hơn 21% ngân hàng tiếp tục giảm nhân sự. Ngược lại, kết luận “lao động nông nghiệp tăng nhiều nhất” không khớp với Việt Nam, nơi tỷ trọng việc làm nông nghiệp giảm đều qua các năm.”

### P6. Toàn bộ `jobs/*.js` · trường `demand` so với `METHOD.paragraphs[1]` · E
METHOD: “Nghề thiếu số liệu Việt Nam được đặt ở mức 3 và vẽ bằng chấm rỗng.” Thang cũng yêu cầu mức 4 phải có “tín hiệu tăng hoặc thiếu hụt rõ ở Việt Nam”, mức 1 phải có “số liệu cắt giảm ở Việt Nam”. Các hồ sơ sau vi phạm (demandWhy của chính hồ sơ ghi “chưa có số liệu Việt Nam” hoặc tương đương):

| id | demand | conf | Vấn đề | Đề xuất |
|---|---|---|---|---|
| `kinh-doanh-b2b` | 3,5 | yeu | Chính demandWhy nói tỷ lệ tin đăng “chưa chắc phản ánh nhu cầu tăng” | 3 |
| `logistics` | 3,5 | yeu | “Xuất nhập khẩu và thương mại điện tử tăng” không có số trong research; ước tính 2,2–2,5 triệu “chưa rõ phương pháp” | 3 |
| `xet-nghiem` | 3,5 | yeu | Tự nhận “chưa có số liệu Việt Nam riêng” | 3 |
| `tam-ly` | 3,5 | yeu | Dùng số bác sĩ tâm thần làm đại diện cho chuyên viên tâm lý | 3 |
| `giao-vien-tieng-anh` | 3,5 | yeu | “Chủ trương ngôn ngữ thứ hai” là [CXM] | 3 |
| `co-khi` | 3,5 | yeu | Chỉ có BLS nhóm ngành Mỹ | 3 |
| `dien-lanh` | 3,5 | yeu | “Chưa có số liệu Việt Nam” | 3 |
| `o-to` | 3,5 | yeu | Dựa vào WEF “chuyên gia xe tự hành và xe điện”, không phải kỹ thuật viên sửa chữa | 3 |
| `tai-xe` | 3,5 | yeu | “Thương mại điện tử tăng”: research ghi quy mô TMĐT “chưa tra được” | 3 |
| `do-hoa` | 2 | yeu | Chỉ có BLS −2% và WEF [CXM] | 2,5 hoặc 3, ghi rõ lý do |
| `bien-phien-dich` | 2 | yeu | BLS +1,7% là tăng, không phải giảm; không có tín hiệu VN | 3 (giữ cảnh báo về AI ở `aiText`) |
| `nha-bao` | 2,5 | yeu | Tín hiệu “sắp xếp cơ quan báo chí” là [CXM] | 3 |
| `cong-nhan` | 2 | yeu | Không có số VN; trái lại, research ghi lao động công nghiệp, xây dựng tăng từ 17,5 triệu (33,5%, năm 2025) lên 18,0 triệu (33,9%, quý III/2026) | 3 |
| `phan-tich-du-lieu` | 4 | tb | “Chưa có số liệu riêng ở Việt Nam”; “nhu cầu số hoá của ngân hàng, bán lẻ” không có căn cứ | 3,5 và `conf: 'yeu'`, hoặc dẫn ManpowerGroup quý IV/2026 (ngành information NEO 64%) nếu muốn giữ |
| `ky-su-ai` | 4 | tb | “Chưa có số liệu định lượng về thiếu hụt ở Việt Nam”; ManpowerGroup là số toàn cầu về kỹ năng, không về nghề | 3,5 và `conf: 'yeu'` |
| `ke-toan` | 2,5 | tb | “Chưa có số liệu Việt Nam”; lý do “phần nhập liệu … đang giảm” không có số | 3 |
| `kien-truc-su` | 2,5 | tb | “Chưa có số liệu Việt Nam riêng”; AI không phải tín hiệu cầu theo thang; BLS nhóm kiến trúc và kỹ thuật +6,8% lại ngược chiều | 3 |
| `duoc-si` | 3,5 | tb | “Chưa có số liệu Việt Nam”; “già hoá dân số” không có trong research | 3 |
| `hanh-chinh` | 1,5 | kha | Thang mức 1–1,5 cần số cắt giảm ở VN; demandWhy ghi “chưa có số liệu đếm số người làm nghề giảm” | 2 |

Hai cách sửa: (a) áp lại thang như cột cuối; hoặc (b) giữ mức hiện tại nhưng sửa METHOD thành “Nghề thiếu số liệu Việt Nam được đặt quanh mức 3, lệch tối đa nửa bậc theo tín hiệu quốc tế, và vẽ bằng chấm rỗng”, rồi đổi `conf` của các nghề `tb` ở trên thành `yeu` để hiện chấm rỗng. Cách (a) đúng tinh thần “không bịa” hơn. Dù chọn cách nào, mọi `demandWhy` phải nói căn cứ của chính mức đã chọn.

### P7. `content.js` · `METHOD.paragraphs[2]`; các bảng `tasks` · E
> “chỉ số bằng 1 + 4 × (số nhiệm vụ cao + một nửa số nhiệm vụ vừa) ÷ tổng số nhiệm vụ”

Mâu thuẫn với `AI.paragraphs[0]`: “Tác động ròng lên một nghề phụ thuộc vào việc nhiệm vụ nào chiếm phần lớn thời gian làm việc.” Công thức coi mọi nhiệm vụ nặng như nhau, nên cách chia nhỏ bảng nhiệm vụ quyết định kết quả. Hệ quả khó bảo vệ khi so chéo:

| Nghề | AI | Ghi chú |
|---|---|---|
| `giao-vien` | 3,5 | 3/5 nhiệm vụ “cao” (soạn bài; ra đề, chấm; hồ sơ). Bằng `bien-phien-dich`, `ke-toan`; cao hơn `kiem-toan` (3), `luat-su` (3). Câu ILO dẫn kèm (“giáo dục … dùng AI tạo sinh nhiều”) là mức sử dụng, không phải mức tiếp xúc. |
| `cong-nhan` | 3,5 | “Ghi sản lượng” được tính ngang “vận hành máy”; cao hơn `ky-su-ai` (2,5), `lap-trinh` (3,5 bằng). Research: “chưa có số liệu VN”, may khó tự động hoá. |
| `bien-phien-dich` | 3,5 | Thấp hơn `marketing-so`, `cham-soc-khach-hang`, `kiem-thu` (4), dù chính `aiText` gọi là “một trong những nghề chịu tác động sớm và mạnh nhất”. |
| `hanh-chinh` | 4 | Bằng `kiem-thu`, `marketing-so`, trong khi ILO xếp nhóm văn phòng (ISCO 4) cao nhất. Không nghề nào đạt 4,5–5, nên đầu trên của thang không dùng. |

Đề xuất: (1) thêm câu vào METHOD:
> “Các nhóm nhiệm vụ được tính ngang nhau, chưa theo tỷ lệ thời gian làm việc vì chưa có số liệu thời gian cho nghề ở Việt Nam. Vì vậy chỉ số phù hợp để so các nghề với nhau theo hướng, không nên đọc như một phép đo.”

(2) Rà lại nhãn: `giao-vien` “Ra đề, chấm bài, nhận xét” → `vua` (chấm tự luận và nhận xét học sinh cần người chịu trách nhiệm), “Hồ sơ, sổ sách” giữ `cao` → AI 3. `cong-nhan` gộp “Ghi sản lượng” vào “Vận hành máy” → 4 nhiệm vụ, 1 cao, 2 vừa, 1 thấp → 3. `bien-phien-dich` “Dịch văn bản pháp lý, y tế có chịu trách nhiệm” giữ `vua`, nhưng bỏ bớt dòng thấp hoặc tách “Bản địa hoá phụ đề, phần mềm” (`cao`, có trong research) → 4. (3) Cân nhắc gán trọng số thời gian thô (3/2/1) cho từng nhiệm vụ.

### P8. `content.js` · `SOURCES['bls-2035']` và 8 hồ sơ · G (kèm D)
`bls-2035` mang tên “Employment Projections 2025–2035; Occupational Outlook Handbook”, năm 08/2026, nhưng được gắn cho số của kỳ **2024–2034** lấy từ nguồn khác (research S11 TED, S12 MLR, S15 Visual Capitalist):
- `an-ninh-mang`: “tăng khoảng 28,5% giai đoạn 2024–2034” (S11)
- `bien-phien-dich`: “1,7% giai đoạn 2024–2034” (S12)
- `cham-soc-khach-hang`: “giảm khoảng 5% giai đoạn 2024–2034” (S12, S15, [QTD-2])
- `hanh-chinh`: “giảm khoảng 26% giai đoạn 2024–2034” (S15, Visual Capitalist dẫn BLS, [QTD-2])
- `ke-toan`, `kiem-toan`: “tăng khoảng 5% giai đoạn 2024–2034” (S12)
- `tin-dung`: “5,7% giai đoạn 2024–2034” (S12)
- `luat-su`: “trợ lý pháp lý gần như đi ngang” (2024–34) bị viết chung trong câu “giai đoạn 2025–2035”.

METHOD lại ghi chỉ dùng “dự báo 2025–2035 của BLS”. Đề xuất: thêm khoá `bls-2034` (S12, https://www.bls.gov/opub/mlr/2026/article/industry-and-occupational-employment-projections-overview.htm) và `bls-ted-ai` (S11), gắn đúng; số −26% ghi “theo Visual Capitalist tổng hợp từ BLS”. Sửa METHOD: “dự báo của BLS (kỳ 2024–2034 và 2025–2035, ghi rõ ở từng nghề)”. Sửa `luat-su.demandWhy`: “BLS dự báo luật sư tại Mỹ tăng khoảng 5% giai đoạn 2025–2035; trợ lý pháp lý gần như không đổi giai đoạn 2024–2034.”

### P9. Số thu nhập theo ngành · G, A
- `dieu-duong.income`: “11,4 triệu đồng/tháng (9 tháng 2025)” và `giao-vien.income`: “11,6 triệu đồng/tháng (9 tháng 2025)”: research S02 ghi “[QTD-2] chưa xác định bài nào chứa số theo ngành; cần đối chiếu thông cáo quý III/2025”. Không hồ sơ nào có khoá nguồn cho số này (`nd-luong` chỉ là nghị định lương).
- `giao-dich-vien.income` “12,8 triệu đồng/tháng năm 2024” và `ky-su-dien.income` “11,5 triệu … năm 2024” gắn khoá `nso-2025` (thông cáo năm 2025, phát hành 01/2026). Số 2024 thuộc S03 (Dân trí, VnExpress dẫn Tổng cục Thống kê, 01/2025).

Đề xuất: thêm khoá `nso-2024-bao` (S03) và `nso-q3-2025-bao` (S02), gắn đúng; với 11,4 và 11,6 triệu, hoặc mở thông cáo quý III/2025 để xác nhận, hoặc thay bằng: “Thu nhập bình quân theo ngành y tế: chưa có số liệu đã đối chiếu trong lần cập nhật này.”

### P10. `jobs/taichinh.js` · `luat-su.aiText` · A
> “Vụ Mata kiện Avianca tại Mỹ (2023), khi luật sư nộp án lệ do AI bịa ra, cho thấy phần kiểm chứng vẫn phải do người làm.”

Research chỉ có: “Rủi ro AI ‘bịa’ án lệ đã gây sự cố ở nước ngoài” (không tên vụ, không nguồn). Tên vụ, năm, tình tiết không kiểm được và không có khoá trong `SOURCES`. Đề xuất: bổ sung nguồn vào research (phán quyết của toà, tháng 6/2023) trước khi dùng; nếu chưa, thay:
> “Ở nước ngoài đã có trường hợp luật sư nộp án lệ không có thật do công cụ AI tạo ra; phần kiểm chứng nguồn vì vậy vẫn phải do người làm và người ký chịu trách nhiệm.”

### P11. `jobs/yte.js` · `dieu-duong.demandWhy` · A
> “Việt Nam có khoảng 18 điều dưỡng trên 10.000 dân (Bộ Y tế, 2024) … Nhu cầu ở Nhật Bản, Đức kéo thêm điều dưỡng Việt Nam ra nước ngoài.”

(1) Research: 18/10.000 là [QTD-2], “nguồn khác 14–15”; trang bỏ mất chỗ lệch. (2) Điều dưỡng sang Nhật, Đức là [CXM]. (3) `aiText` “vốn chiếm nhiều thời gian của điều dưỡng” không có căn cứ.

Đề xuất demandWhy:
> “Theo số Bộ Y tế được báo chí dẫn, năm 2024 Việt Nam có khoảng 18 điều dưỡng trên 10.000 dân (một số nguồn khác ghi 14–15), trong khi Quy hoạch mạng lưới cơ sở y tế (QĐ 201/QĐ-TTg, 2/2024) đặt mục tiêu 25 năm 2025 và 33 năm 2030. Nhiều bệnh viện báo cáo khó tuyển điều dưỡng. Dù dùng số nào, khoảng cách với mục tiêu vẫn lớn.”

Và `aiText` câu cuối: “AI hỗ trợ được phần ghi chép hồ sơ và lập kế hoạch chăm sóc nháp.”

### P12. `jobs/yte.js` · `bac-si.aiText`, `bac-si.src` · A
> “IMF xếp nhóm nghề này vào loại tiếp xúc cao nhưng chủ yếu được AI bổ trợ.”

Research ghi [CXM] (chưa tra lại). Đề xuất bỏ câu và bỏ `imf-2024` khỏi `src`; hoặc viết: “Các khung phân tích theo nhiệm vụ thường xếp bác sĩ vào nhóm được AI hỗ trợ hơn là bị thay thế, vì quyết định điều trị gắn với trách nhiệm pháp lý.” (không gán cho IMF).

### P13. `jobs/giaoduc.js` · `giao-vien-tieng-anh.aiText`, `demandWhy`, `src` · A, G
> “Felten và cộng sự xếp giảng dạy ngôn ngữ gần đầu bảng tiếp xúc với mô hình ngôn ngữ”
> “Chủ trương đưa tiếng Anh thành ngôn ngữ thứ hai trong trường học là tín hiệu tăng.”

(1) Research: kết quả này thuộc **bản 2023** của Felten (riêng cho mô hình ngôn ngữ), xếp **giảng viên ngôn ngữ, văn học** (bậc đại học), [CXM]; trang gán cho `felten-2021` và mở rộng sang giáo viên tiếng Anh nói chung. (2) Chủ trương ngôn ngữ thứ hai: [CXM: cần tra số hiệu quyết định 2025].

Đề xuất `aiText`:
> “Chấm bài viết, tạo bài tập và luyện nói với ứng dụng đã phổ biến, nên phần việc này chịu tác động cao. Tạo động lực, quản lý lớp trẻ em và sửa lỗi phát âm trực tiếp ít chịu tác động hơn.”

`demandWhy`: “Giáo viên ngoại ngữ nằm trong số thiếu chung của Bộ Giáo dục và Đào tạo, chưa có số tách riêng. Mảng trung tâm chịu cạnh tranh từ ứng dụng học. Chưa có số liệu đủ tin cậy, đặt ở mức 3.” Bỏ `felten-2021` khỏi `src` cho tới khi đối chiếu bản 2023. Nếu tra được số hiệu đề án ngôn ngữ thứ hai, đưa vào kèm năm.

### P14. Tín hiệu định tính không có trong research dùng để nâng demand · A
- `tai-xe.demandWhy`: “Thương mại điện tử tăng là tín hiệu tăng ở Việt Nam”; `tai-xe.note`: “nhu cầu lớn”.
- `logistics.demandWhy`: “Xuất nhập khẩu và thương mại điện tử tăng là tín hiệu tăng”.
- `duoc-si.demandWhy`: “nhu cầu chăm sóc sức khoẻ tăng theo già hoá dân số”.
- `phan-tich-du-lieu.demandWhy`: “nhu cầu số hoá của ngân hàng, bán lẻ”.
- `o-to.demandWhy`: “WEF 2025 đưa chuyên gia xe tự hành và xe điện vào nhóm tăng nhanh” (nghề khác).
- `co-khi.aiText`, `note`: “Tự động hoá nhà máy lại tạo thêm nhu cầu cho chính nghề này” (research có câu này nhưng không có nguồn).

Đề xuất: hoặc bổ sung số liệu có năm vào research (kim ngạch xuất nhập khẩu, quy mô TMĐT của Bộ Công Thương hoặc e-Conomy SEA, dự báo dân số), hoặc đổi thành giả thuyết có ghi nhận: “Nếu thương mại điện tử tiếp tục mở rộng, nhu cầu giao hàng sẽ tăng theo; chưa có số liệu nhân lực để kiểm chứng.” Với `o-to`: “WEF 2025 xếp chuyên gia xe tự hành và xe điện, một nghề kỹ sư, trong nhóm tăng nhanh; chưa có tín hiệu tương tự cho kỹ thuật viên sửa chữa.” Với `tai-xe.note`: bỏ “nhu cầu lớn”, viết “Việc dễ vào nhưng phi chính thức, không có lộ trình nghề.”

### P15. `jobs/taichinh.js` · `hanh-chinh.note`, so với `giao-dich-vien.demandWhy` · A
> “Đây là nhóm nghề có bằng chứng thu hẹp rõ nhất, cả ở quốc tế lẫn qua chỉ số tiếp xúc của ILO cho Việt Nam.”

(1) Chỉ số tiếp xúc không phải bằng chứng thu hẹp; chính `AI.paragraphs[3]` viết “Tiếp xúc không đồng nghĩa với mất việc”. (2) `giao-dich-vien` cũng tự nhận “tín hiệu thu hẹp rõ nhất ở Việt Nam trong danh sách”; hai câu “rõ nhất” va nhau. (3) demand 1,5 không khớp thang (xem P6).

Đề xuất:
> “Ở quốc tế, đây là nhóm có dự báo giảm rõ nhất; ở Việt Nam, đây là nhóm có mức tiếp xúc với AI cao nhất theo ILO, nhưng chưa có số đếm người làm nghề giảm. Không nên chọn làm đích đến lâu dài; nếu đang làm, nên tích luỹ một chuyên môn để chuyển sang vị trí cần phán đoán.”

### P16. `jobs/cntt.js` · `lap-trinh.aiText`, `demandWhy`, `note` · A
> “Hệ quả dễ thấy nhất là ngưỡng vào nghề cao lên …” / “Tín hiệu tăng tập trung ở vị trí có kinh nghiệm.” / “Nhu cầu với lập trình viên có kinh nghiệm vẫn tăng, nhưng ngưỡng vào nghề đang cao lên.”

Research 2.1: “Hệ quả hay được nhắc: vị trí junior bị thu hẹp trước; **chưa có số liệu VN**.” Trang tự viết “chưa có số liệu Việt Nam về mức thu hẹp” nhưng vẫn kết luận “dễ thấy nhất” và đưa vào lời kết như sự thật. Đây là hồ sơ nhiều người đọc nhất, nhận định này tác động trực tiếp đến quyết định chọn ngành.

Đề xuất `aiText` (2 câu cuối):
> “Một hệ quả được nhắc nhiều ở nước ngoài là vị trí mới vào nghề thu hẹp trước, vì việc từng giao cho người mới nay người có kinh nghiệm làm nhanh hơn với công cụ. Chưa có số liệu Việt Nam để kiểm chứng điều này.”

`demandWhy` bỏ câu cuối, hoặc thay bằng số ManpowerGroup quý IV/2026 (ngành information NEO 64%, 285 nhà tuyển dụng; đã có khoá `manpower-q4`). `note`:
> “Tín hiệu tuyển dụng IT ở Việt Nam và xu hướng quốc tế đều tích cực. Điều chưa rõ là phần tăng ấy đến với người mới ra trường bao nhiêu; người mới nên chứng minh được khả năng làm ra sản phẩm chạy được, thay vì chỉ dựa vào bằng.”

### P17. `jobs/thietke.js` · `nha-bao.demandWhy`, `note` · A
> “cơ quan báo chí được sắp xếp lại trong đợt tinh gọn bộ máy năm 2025” / “phần khó nhất (điều tra, kiểm chứng) thì vẫn thiếu người.”

Research 2.24: sắp xếp cơ quan báo chí [CXM: chưa có số liệu]; “vẫn thiếu người” không có căn cứ. Đây là hai căn cứ duy nhất cho mức 2,5.

Đề xuất `demandWhy`:
> “Chưa có số liệu Việt Nam đủ tin cậy. Tín hiệu định tính là doanh thu quảng cáo chuyển dần sang các nền tảng số; việc sắp xếp lại cơ quan báo chí năm 2025 chưa có số liệu về số người làm nghề. Đặt ở mức 3.”

`note`: “Phần dễ chuẩn hoá của nghề (tin theo mẫu, tóm tắt, dịch) đang chuyển cho máy; điều tra, phỏng vấn và kiểm chứng vẫn cần người. Lợi thế thuộc về người có chuyên môn sâu một lĩnh vực.”

---

## II. Nên sửa (20)

### N1. `content.js` · `MARKET.paragraphs[1]` · A
> “Động lực chính của sự dịch chuyển là chênh lệch thu nhập … Rời nông nghiệp sang hai khu vực còn lại vẫn là con đường tăng thu nhập phổ biến nhất của lao động Việt Nam.”

Research chỉ có chênh lệch thu nhập (số) và một suy luận của người soạn (“nguồn tăng thu nhập chính”), không có nghiên cứu về động lực dịch chuyển hay “phổ biến nhất”. Đề xuất:
> “Chênh lệch thu nhập giữa các khu vực lớn. Quý III/2026, thu nhập bình quân tháng của lao động nông, lâm, thủy sản là 5,4 triệu đồng, của công nghiệp và xây dựng 9,9 triệu, của dịch vụ 10,9 triệu. Khoảng cách này là một lý do khiến lao động tiếp tục rời nông nghiệp.”

### N2. `content.js` · `GLOBAL.paragraphs[2]` · A, B
> “Nhóm giảm nhanh nhất gồm nhân viên bưu chính, giao dịch viên ngân hàng, nhân viên nhập liệu, thu ngân, trợ lý hành chính và thư ký. Điểm chung là nhiệm vụ lặp lại, theo quy tắc, đầu vào và đầu ra đều là dữ liệu số …”

(1) `nghe-nghiep.md` mục 2 tách: giảm nhanh nhất theo tỷ lệ (bưu chính, giao dịch viên, nhập liệu) và giảm nhiều nhất theo số người (thu ngân và bán vé, trợ lý hành chính và thư ký). Trang gộp, trong khi đoạn trước vừa giải thích hai danh sách khác nhau. (2) Thu ngân, bưu chính xử lý tiền mặt, bưu phẩm: “đầu vào và đầu ra đều là dữ liệu số” sai. Đề xuất:
> “Giảm nhanh nhất theo tỷ lệ là nhân viên bưu chính, giao dịch viên ngân hàng, nhân viên nhập liệu; giảm nhiều nhất theo số người là thu ngân, bán vé, trợ lý hành chính và thư ký. Điểm chung là nhiệm vụ lặp lại, theo quy tắc, dễ chuyển sang phần mềm, thanh toán số và dịch vụ tự phục vụ.”

### N3. `content.js` · `GLOBAL.paragraphs[4]` · A
> “tỷ trọng lớn việc lắp ráp trong khu vực có vốn đầu tư nước ngoài”

Research: số lao động FDI “chưa có số liệu đủ tin cậy”. Đề xuất: “Với 60,6% lao động phi chính thức (quý III/2026) và một phần tư làm nông nghiệp, Việt Nam chỉ nên dùng báo cáo này để đọc hướng đi của nhu cầu kỹ năng …” (bỏ vế FDI).

### N4. `content.js` · `GLOBAL.takeaway` · B
> “quy mô việc làm thực tế ở Việt Nam vẫn nằm ở sản xuất, xây dựng, bán lẻ và dịch vụ”

Bỏ sót nông nghiệp (25,1%, khu vực đông thứ hai sau dịch vụ theo số trên chính trang này); “bán lẻ và dịch vụ” chồng nhau. Đề xuất: “… nhưng phần lớn việc làm ở Việt Nam vẫn nằm trong dịch vụ (khoảng 41%), công nghiệp và xây dựng (33,9%), nông nghiệp (25,1%) (quý III/2026).”

### N5. `content.js` · `KPIS[4]`, `MARKET.paragraphs[3]` · A
9,07% là [qua trích dẫn: anninhthudo.vn và bản tóm tắt tìm kiếm]; research ghi một bảng tổng hợp có 8,87% (9 tháng) “cần đối chiếu”. Hai số khác kỳ nên có thể cùng đúng, nhưng cần nói. Đề xuất `note`: “Quý III/2026 (9 tháng: khoảng 8,9%); mức chung 2,22%”, sau khi mở thông cáo gốc xác nhận.

### N6. `jobs/kinhdoanh.js` · `cham-soc-khach-hang.demandWhy` · A
> “Một ngân hàng lớn trong nước công bố trung tâm dịch vụ khách hàng ứng dụng AI có thể thay đến 70% nhân sự vận hành”

Research: VietinBank **thử nghiệm**, [QTD-2]. Đề xuất: “Theo báo chí, một ngân hàng lớn trong nước đang thử nghiệm trung tâm dịch vụ khách hàng dùng AI và cho rằng có thể giảm tới 70% nhân sự vận hành; đây là tuyên bố của doanh nghiệp, chưa phải thống kê ngành.”

### N7. `jobs/kinhdoanh.js` · `moi-gioi-bds.note` · A
> “Nghề có biên độ thu nhập lớn nhất và ổn định thấp nhất trong danh sách.”

Không nghề nào trong danh sách có số thu nhập để so (income của 33/41 nghề là `null`). Đề xuất: “Thu nhập phụ thuộc hoa hồng và chu kỳ thị trường: năm 2023, theo VARS, khoảng 70% môi giới đã rời nghề. Chỉ nên theo khi có nguồn tài chính dự phòng cho những năm thị trường trầm lắng.”

### N8. `jobs/cntt.js` · `kiem-thu.aiText`, `note`; `jobs/taichinh.js` · `ke-toan.aiText`, `demandWhy` · A
> kiem-thu: “Nghề đang tách đôi: kiểm thử thủ công thu hẹp, kiểm thử tự động và kiểm thử chính các hệ thống AI tăng.” / “… nơi nhu cầu đang tăng.”
> ke-toan: “trong khi nhân viên kế toán sổ sách giảm” / “Mức 2,5 phản ánh việc phần nhập liệu, vốn chiếm phần lớn công việc của người mới, đang giảm.”

Research chỉ có “hướng chuyển” (kiểm thử) và “phân biệt” (kế toán), không có số; BLS về nhân viên sổ sách không có trong research (WEF về nhân viên sổ sách là [CXM]). Đề xuất kiem-thu: “Hướng chuyển dịch của nghề là từ kiểm thử thủ công sang viết kiểm thử tự động và kiểm thử chính các hệ thống AI; chưa có số liệu Việt Nam về tốc độ chuyển.” ke-toan.demandWhy: “BLS dự báo kế toán và kiểm toán viên tại Mỹ tăng khoảng 5% giai đoạn 2024–2034. Chưa có số liệu Việt Nam; đặt ở mức 3. Phần hạch toán theo mẫu chịu tác động mạnh nhất (xem bảng nhiệm vụ).” Câu “Nghề đang tách đôi” ở `ke-toan.aiText` trùng khuôn với `kiem-thu`: viết lại “Phần nhập liệu kế toán thu hẹp nhanh hơn phần phân tích, thuế và kiểm soát.”

### N9. `jobs/cntt.js` · `ky-su-ai.note` · A
> “Đây là một trong số ít nghề có cả tín hiệu tăng toàn cầu lẫn tình trạng khó tuyển.”

“Khó tuyển” là số ManpowerGroup toàn cầu về **kỹ năng AI**, không phải về nghề kỹ sư AI ở Việt Nam. Đề xuất: “Tín hiệu quốc tế về nghề và về kỹ năng AI đều mạnh; ở Việt Nam chưa có số đo thiếu hụt. Rào cản là nền toán và tốc độ học lại; chi phí ấy cần được tính trước khi chọn.”

### N10. `jobs/cntt.js` · `an-ninh-mang.demandWhy`; `SOURCES['nca']` · A, G
> “Khảo sát của Hiệp hội An ninh mạng quốc gia (12/2025) cho biết 47,72% cơ quan, doanh nghiệp thiếu nhân sự an ninh mạng.”

Research: [QTD-2], “chưa xác định bài nào chứa số 47,72%”. Khoá `nca` trỏ bài Nhân Dân có thể không chứa số. Đề xuất: “Theo báo chí dẫn khảo sát của Hiệp hội An ninh mạng quốc gia (12/2025), khoảng 48% cơ quan, doanh nghiệp được hỏi thiếu nhân sự an ninh mạng.” và kiểm lại URL.

### N11. Nhãn nhiệm vụ mâu thuẫn với lời giải thích trong cùng hồ sơ · E
- `bac-si`: nhãn “Chẩn đoán, quyết định điều trị” = `vua`, nhưng `aiText`: “quyết định điều trị … vẫn thuộc về bác sĩ”. Tách: “Gợi ý chẩn đoán” `vua`; “Quyết định điều trị” `thap`.
- `luat-su`: “Tư vấn chiến lược pháp lý cho khách” = `vua`, `aiText`: “tư vấn chiến lược … ít chịu tác động”. Đổi `thap` hoặc sửa lời.
- `duoc-si`: “Quản lý kho, chất lượng thuốc” = `vua`, `aiText`: “quản lý kho đã có phần mềm và chịu tác động cao”. Chọn một.
- `nha-bao`: “Kiểm chứng thông tin” = `vua`, `aiText`: “kiểm chứng tại chỗ … ít chịu tác động”. Ghi rõ: “Kiểm chứng thông tin trên mạng” `vua`, hoặc sửa lời.
- `cong-nhan`: “Lắp ráp, hàn, may chi tiết” = `vua`, `aiText`: may khó tự động hoá hơn lắp ráp. Tách may (`thap`) và lắp ráp điện tử (`vua`).

### N12. `jobs/*.js` · `fit` (41 hồ sơ) · F
Mọi `fit` mở bằng “Gần mã XXX:” như mã đã xác lập. Research: mã là suy luận của người soạn, “bắt buộc tra lại tại onetonline.org trước khi dùng”; METHOD có nói, nhưng `fit` còn đi vào ảnh lưu (người xem ảnh không thấy METHOD). Đề xuất dạng: “Mã Holland suy luận: IRC. Hợp với người thích …”. Không thấy mã nào sai rõ so với nhóm nhiệm vụ.

### N13. Lặp khuôn câu · C
- `fit`: 41/41 cùng mở “Gần mã …:” rồi liệt kê ba tính từ.
- `aiText`: 15 hồ sơ dùng “… chịu tác động cao”, 24 hồ sơ dùng “… ít chịu tác động”, đa số theo khuôn hai câu “X, Y và Z chịu tác động cao. A, B và C ít chịu tác động.” Đọc liền nhóm Kinh doanh (6/6 hồ sơ) thấy rõ.
- `demandWhy`: 12 hồ sơ kết bằng “Đặt ở mức 3 …” (`nha-bao`, `thuong-mai-dien-tu`, `kiem-toan`, `tin-dung`, `nhan-su`, `luat-su`, `xet-nghiem`, `xay-dung`, `dien-lanh`, `o-to`, `dau-bep`, `du-lich`).
- `note`: 6 hồ sơ mở “Phần … đang được (công cụ/AI/tự động hoá) …” (`ui-ux`, `noi-dung-so`, `nha-bao`, `marketing-so`, `tin-dung`, `du-lich`); 3 hồ sơ dùng “bước đầu” (`cham-soc-khach-hang`, `giao-dich-vien`, `cong-nhan`); 5 hồ sơ “Người theo nghề nên/cần” .

Đề xuất: bỏ câu “Đặt ở mức …” khỏi `demandWhy` (giao diện đã hiện mức); chỉ giữ khi mức lệch khỏi 3 và cần giải thích. Với `aiText`, đổi cách mở theo cơ chế riêng của nghề, ví dụ `marketing-so`: “Các nền tảng quảng cáo đã tự đặt giá thầu và tự tạo biến thể nội dung từ trước khi có AI tạo sinh; mô hình ngôn ngữ đẩy nhanh thêm phần viết. Phần còn lại cho người làm là chọn khách hàng mục tiêu và chịu trách nhiệm về ngân sách.” Với `fit`, xem N12.

### N14. Câu phán quyết, gần giật gân · C, A
- `do-hoa.aiText`: “phác thảo, biến thể, ảnh minh hoạ và chỉnh ảnh đều làm được trong vài giây” → “… đều làm được nhanh hơn nhiều so với làm tay”.
- `do-hoa.note`: “Thiết kế đồ hoạ thuần kỹ thuật đang mất giá nhanh” (không có số giá) → “Theo cơ chế trên, phần thiết kế thuần kỹ thuật chịu sức ép giá lớn nhất; chưa có số liệu Việt Nam về mức giá.”
- `bien-phien-dich.note`: “Biên dịch văn bản thông dụng không còn là con đường nghề bền vững” → “Biên dịch văn bản thông dụng là phần chịu sức ép lớn nhất của nghề.”
- `bien-phien-dich.aiText`: “một trong những nghề chịu tác động sớm và mạnh nhất” → giữ nếu dẫn được Eloundou hoặc Felten đã đối chiếu; nếu chưa, “chịu tác động sớm vì dịch máy đã phổ biến trước khi có mô hình ngôn ngữ lớn”.

### N15. Câu sáo, bỏ đi không mất thông tin · B
- `nhan-su.note`: “Nhân sự đang chuyển từ làm thủ tục sang làm chiến lược con người.” (khẩu hiệu, không căn cứ) và “phân tích dữ liệu nhân sự, những mảng khó số hoá” (tự mâu thuẫn). Thay: “Phần thủ tục nhân sự dễ số hoá nhất. Người mới nên tích luỹ kinh nghiệm ở quan hệ lao động và đào tạo, những mảng cần thương lượng trực tiếp.”
- `duoc-si.note`: “Nghề ổn định” (không có số) → bỏ.
- `co-khi.note`: “Kỹ sư biết cả cơ khí lẫn lập trình điều khiển có lợi thế rõ …” (đúng với mọi nghề lai) → bỏ hoặc thay bằng việc cụ thể cần học (PLC, robot công nghiệp).
- `du-lich.note`: “Ngành nhạy cảm với cú sốc bên ngoài.” lặp `risks` → bỏ.
- `MARKET.paragraphs[2]` câu cuối: “… vẫn là đặc điểm lớn nhất phân biệt thị trường Việt Nam với các nền kinh tế mà báo cáo quốc tế thường mô tả” → “… nên các số liệu quốc tế về mất việc, thất nghiệp cần được đọc thận trọng khi áp vào Việt Nam.”

### N16. Nhận định [CXM] về pháp lý, thực tế nghề viết như sự thật · A
- `tam-ly.entry`: “Tham vấn ngoài cơ sở y tế chưa có giấy phép riêng.” ([CXM: cần tra]; quan trọng vì liên quan an toàn người dùng dịch vụ) → “Tham vấn ngoài cơ sở y tế: chưa xác minh được quy định cấp phép trong lần cập nhật này.”
- `ky-su-dien.entry`: “người vận hành điện phải có thẻ an toàn điện” [CXM]; `ky-su-dien.risks`: “giai đoạn 2021–2023 nhiều dự án tái tạo bị chậm” [CXM].
- `vi-mach.entry`: “Doanh nghiệp thường đào tạo thêm vài tháng” [CXM].
- `ke-toan.entry`: kế toán trưởng theo Luật Kế toán 2015 [CXM]; `kiem-toan.entry`: ACCA [CXM].
- `xay-dung.demandWhy`: “Đầu tư công vào hạ tầng (cao tốc, đường sắt)” [CXM].
- `giao-vien.demandWhy`: “thiếu tập trung ở một số vùng và môn học” [CXM].

Đề xuất: hoặc tra văn bản để nâng lên [QTD], hoặc thêm “theo thông tin chưa đối chiếu văn bản” và không dùng làm căn cứ cho mức demand.

### N17. `content.js` · `AI.paragraphs[3]` · A
Strand Partners do AWS đặt hàng: research ghi rõ “có lợi ích trong việc cho thấy mức dùng AI cao; định nghĩa ‘dùng AI’ rộng”. Trang chỉ ghi ở ghi chú nguồn. Đề xuất thêm vào thân đoạn: “… (nghiên cứu do một nhà cung cấp dịch vụ đám mây đặt hàng, định nghĩa “dùng AI” rộng) cho kết quả 26% …”.

### N18. `content.js` · `METHOD.paragraphs[2]`, `MAP.axisY`, `PROFILE.ai` · E, A
Trục dọc ghi “Tác động của AI”, trong khi phương pháp đo **mức tiếp xúc** của nhiệm vụ (theo khung ILO, Eloundou), không đo tác động lên việc làm. Đoạn AI đã nói rõ “tiếp xúc không đồng nghĩa với mất việc”, nhưng nhãn trục lại nói khác. Ngoài ra METHOD dẫn “Eloundou và cộng sự (2024)” là tài liệu [CXM]. Đề xuất `axisY`: “Mức tiếp xúc với AI và tự động hoá”; METHOD: “Cách chấm dựa trên khung theo nhiệm vụ của ILO (2025); …”, chỉ thêm Eloundou khi đã đối chiếu.

### N19. `content.js` · `SOURCES` (vệ sinh nguồn) · G
- `eloundou-2024` được gắn ở 19 hồ sơ nhưng không câu nào trong hồ sơ trích từ nó; tài liệu [CXM], không có URL hay DOI. Chỉ giữ ở METHOD sau khi đối chiếu; bỏ khỏi `src` của hồ sơ.
- `manpower-q4`, `ilo-asean`, `holland-1997` không được dẫn ở đâu. `manpower-q4` nên được dùng (P16); `ilo-asean` có tên lệch giữa hai file research (“Generative AI and labour markets in ASEAN: Significant exposure, limited disruption, uneven preparedness” và “Navigating Generative AI’s transformations in ASEAN labour markets”): kiểm lại tên trước khi giữ.
- `dau-bep.src` rỗng; `xay-dung`, `dien-lanh`, `thuong-mai-dien-tu`, `nhan-su`, `noi-dung-so` chỉ có `eloundou-2024`. Hồ sơ không có nguồn nào phải ghi rõ “Chưa có nguồn đủ tin cậy cho riêng nghề này” ở phần Nguồn.
- `luat-kt` chỉ là Thông tư 91/2017, nhưng `ke-toan`, `kiem-toan` còn nói Luật Kế toán 2015, Luật Kiểm toán độc lập 2011: thêm hoặc sửa tên nguồn.
- `luat-duoc` trỏ tới file `.doc` trên vbpl.vn (tự tải về); nên trỏ trang văn bản.
- `autor-2003`, `acemoglu-2019`, `felten-2021`, `barrick-1991` không có URL hay DOI; research ghi [CXM]. Bổ sung DOI sau khi đối chiếu.

### N20. `jobs/yte.js` · `tam-ly.demandWhy` · D, A
> “gần 1 trên 100.000 dân, so với mức trung bình toàn cầu 3,96 (WHO, 2022, qua báo Nhân Dân)”

Thiếu đơn vị ở vế sau (3,96 trên 100.000 dân); và số bác sĩ tâm thần được dùng làm căn cứ cho nghề chuyên viên tâm lý. Đề xuất: “Việt Nam có khoảng 1.000 bác sĩ tâm thần, gần 1 trên 100.000 dân, so với mức trung bình toàn cầu 3,96 trên 100.000 dân (WHO, 2022, qua báo Nhân Dân). Đây là số về bác sĩ, không phải chuyên viên tâm lý; số chuyên gia tâm lý lâm sàng chưa có thống kê chính thức.”

---

## III. Cân nhắc (10)

### K1. `content.js` · `INTRO.eyebrow`, `INTRO.title`, `PROFILE.ai`, `SKY_LABEL`, `WIND_LABEL` · C
“Thẻ 05 · Future of Work” dùng tiếng Anh; “Bản tin dự báo nghề nghiệp” hứa “dự báo” trong khi METHOD nói đây là đánh giá tổng hợp của biên tập. Ẩn dụ thời tiết (“Gió AI”, “Nắng/Mây/Mưa”) dễ nhớ nhưng lệch giọng chuẩn mực đã đặt. Đề xuất: eyebrow “Thẻ 05 · Việc làm tương lai”; title “Triển vọng nghề nghiệp”; giữ biểu tượng thời tiết nhưng nhãn chữ là “Triển vọng nhu cầu” và “Mức tiếp xúc với AI”.

### K2. `content.js` · `INTRO.lead` · B, A
“hồ sơ 41 nghề phổ biến với người trẻ”: không có tiêu chí chọn nghề hay số liệu “phổ biến”. Đề xuất: “hồ sơ 41 nghề được chọn để phủ tám lĩnh vực, từ công nghệ đến dịch vụ và sản xuất”, và thêm một câu ở METHOD về cách chọn.

### K3. `content.js` · `AI.paragraphs[2]` · A
“Tỷ lệ ở nữ (24,1%) cao hơn nam (17,8%) vì nữ làm việc văn phòng nhiều hơn” và “Tỷ lệ thấp hơn mức toàn cầu vì một phần lớn lao động Việt Nam làm việc tay chân, nông nghiệp”: hai chữ “vì” là suy luận (lý giải ở ILO 2023 là cho nước thu nhập cao). Đề xuất “một phần do …” và ghi là cách giải thích của ILO ở cấp toàn cầu.

### K4. So chéo demand · E
`an-ninh-mang` 4,5 (một khảo sát [QTD-2] về tỷ lệ đơn vị thiếu người) ngang `dieu-duong`, `bac-si` 4,5 (mục tiêu quy hoạch định lượng). `ky-su-dien` 4 (tín hiệu đầu tư, chính trang nói “chưa phải số nhân lực”) ngang `vi-mach` 4 (có mục tiêu nhân lực 15.000 người cho khâu thiết kế). Cân nhắc hạ `an-ninh-mang` về 4 và `ky-su-dien` về 3,5, hoặc ghi rõ trong METHOD vì sao tín hiệu đầu tư được tính ngang mục tiêu nhân lực. Ngược lại, `giao-vien` (thiếu 104.516 người, có Luật Nhà giáo) để 4 là hợp lý do tín hiệu dân số giảm; nên nói điều này trong `demandWhy`.

### K5. Mã Holland hai chữ · F
`tai-xe` và `cong-nhan` chỉ có “RC”, các nghề khác có ba chữ. Bộ lọc vẫn chạy nhưng người dùng có mã như “RCE” sẽ thấy mức khớp thấp hơn bình thường. Cân nhắc thêm chữ thứ ba (vd `tai-xe` RCS, `cong-nhan` RCI) hoặc ghi lý do.

### K6. `jobs/yte.js` · `xet-nghiem.entry` · B
“kiểm tra đánh giá năng lực áp dụng theo lộ trình của luật” không cho người đọc thông tin. Research có mốc: từ 1/1/2029 (một bài báo ghi 2028). Đề xuất: “… kiểm tra đánh giá năng lực áp dụng từ 1/1/2029 theo văn bản luật (một số bài báo ghi 2028; cần đối chiếu).”

### K7. `content.js` · `GLOBAL.paragraphs[1]`, `AI.paragraphs[4]` · A
“Các nghề này tăng nhanh vì xuất phát từ quy mô nhỏ”: quy mô nhỏ giải thích vì sao **tỷ lệ** cao, không giải thích vì sao nghề tăng. Đề xuất: “Tỷ lệ tăng cao một phần vì các nghề này xuất phát từ quy mô nhỏ.” “Nhóm chịu sức ép sớm nhất là vị trí mới vào nghề”: research dẫn WEF và PwC như một lập luận; nên viết “WEF và PwC (6/2026) cho rằng vị trí mới vào nghề dễ chịu sức ép sớm …”.

### K8. `jobs/taichinh.js` · `giao-dich-vien.demandWhy` · A
Số đóng phòng giao dịch là số chi nhánh, không trực tiếp là số giao dịch viên; số Sacombank (−930 người quý I/2025), LPBank (−2.900 người trong 12 tháng) có trong research và gần với “cắt giảm nhân sự” hơn. Cân nhắc thêm, ghi “theo báo chí dẫn báo cáo tài chính của ngân hàng”.

### K9. `content.js` · `MARKET.paragraphs[0]` · A
“29,1% năm 2021” là số research **tính ngược** từ “giảm 3,4 điểm % so với 2021”. Không sai, nhưng nên viết “giảm 3,4 điểm phần trăm từ năm 2021 đến năm 2025, còn 25,7%” để đúng với dạng số được công bố.

### K10. `content.js` · `MARKET.paragraphs[4]`; `jobs/giaoduc.js` · `giao-vien.demandWhy` · A
Thu nhập nam/nữ, thành thị/nông thôn: research ghi ba bộ số lệch nhau (Cục Thống kê, VnExpress, một bộ có thể là lao động làm công hưởng lương). Tỷ lệ “khoảng 1,3 lần” vẫn đúng với cả hai bộ đầu, nên giữ, nhưng ghi “quý III/2026”. Số thiếu giáo viên: research có thêm nguồn Tiền Phong “hơn 110 nghìn biên chế”; nên ghi “khoảng 104.500 đến hơn 110.000 tuỳ cách tính (thiếu so với định mức hay thiếu biên chế)” hoặc giải thích vì sao chọn 104.516.

---

## Phụ lục: chỉ số AI tính lại (calc.aiIndex) và demand hiện tại

| id | Holland | demand | conf | cao/vừa/thấp | AI |
|---|---|---|---|---|---|
| lap-trinh | IRC | 4 | kha | 3/1/2 | 3,5 |
| kiem-thu | CIR | 3 | tb | 3/1/1 | 4 |
| phan-tich-du-lieu | ICE | 4 | tb | 2/1/2 | 3 |
| ky-su-ai | IRC | 4 | tb | 1/3/2 | 2,5 |
| an-ninh-mang | ICR | 4,5 | tb | 1/3/1 | 3 |
| vi-mach | IRC | 4 | kha | 0/3/2 | 2 |
| ui-ux | AIE | 3 | yeu | 2/2/2 | 3 |
| do-hoa | AER | 2 | yeu | 2/2/1 | 3,5 |
| noi-dung-so | AES | 3 | yeu | 2/2/2 | 3 |
| nha-bao | AEI | 2,5 | yeu | 2/2/2 | 3 |
| bien-phien-dich | ASC | 2 | yeu | 2/2/1 | 3,5 |
| kien-truc-su | AIR | 2,5 | tb | 1/2/3 | 2,5 |
| marketing-so | EAC | 3 | yeu | 3/1/1 | 4 |
| kinh-doanh-b2b | ESC | 3,5 | yeu | 1/1/3 | 2 |
| thuong-mai-dien-tu | ECA | 3 | yeu | 3/1/2 | 3,5 |
| cham-soc-khach-hang | SCE | 2 | tb | 3/1/1 | 4 |
| logistics | CEI | 3,5 | yeu | 3/1/2 | 3,5 |
| moi-gioi-bds | ECS | 2 | tb | 2/1/2 | 3 |
| hanh-chinh | CSE | 1,5 | kha | 3/1/1 | 4 |
| ke-toan | CEI | 2,5 | tb | 3/2/1 | 3,5 |
| kiem-toan | CEI | 3 | tb | 2/2/2 | 3 |
| giao-dich-vien | CES | 1 | kha | 2/2/1 | 3,5 |
| tin-dung | CIE | 3 | yeu | 3/1/2 | 3,5 |
| nhan-su | SEC | 3 | yeu | 2/1/2 | 3 |
| luat-su | EIS | 3 | tb | 2/1/2 | 3 |
| dieu-duong | SIR | 4,5 | kha | 1/1/3 | 2 |
| bac-si | ISR | 4,5 | kha | 1/2/3 | 2,5 |
| duoc-si | ICS | 3,5 | tb | 1/2/2 | 2,5 |
| xet-nghiem | IRC | 3,5 | yeu | 2/2/1 | 3,5 |
| tam-ly | SIA | 3,5 | yeu | 2/0/3 | 2,5 |
| giao-vien | SAE | 4 | kha | 3/0/2 | 3,5 |
| giao-vien-tieng-anh | SAC | 3,5 | yeu | 2/1/2 | 3 |
| co-khi | RIC | 3,5 | yeu | 1/3/2 | 2,5 |
| ky-su-dien | RIC | 4 | tb | 1/3/2 | 2,5 |
| xay-dung | RIC | 3 | yeu | 1/3/2 | 2,5 |
| dien-lanh | RCE | 3,5 | yeu | 0/2/3 | 2 |
| o-to | RIC | 3,5 | yeu | 0/2/3 | 2 |
| cong-nhan | RC | 2 | yeu | 2/2/1 | 3,5 |
| dau-bep | RAE | 3 | yeu | 0/2/3 | 2 |
| du-lich | SEA | 3 | yeu | 2/1/2 | 3 |
| tai-xe | RC | 3,5 | yeu | 0/1/4 | 1,5 |

Ghi chú: research có 42 nghề; trang gộp “Kỹ sư điện” (2.33) và “Kỹ sư năng lượng tái tạo” (2.37) thành `ky-su-dien`. Research xếp hai nghề này “Yếu–trung bình” và “Trung bình về chính sách; yếu về lương và việc làm”; `conf: 'tb'` chấp nhận được nếu `demandWhy` nói rõ phần yếu.
