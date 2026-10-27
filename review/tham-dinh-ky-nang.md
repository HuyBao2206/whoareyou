# Thẩm định nội dung thẻ “Kỹ năng nên đầu tư”

Ngày: 27/10/2026. Phạm vi: `assets/js/modules/skills/data.js`, `content.js`, `calc.js`, đối chiếu với `research/ky-nang.md`. Không sửa file nguồn.

Cách chạy `check-copy`: `tools/check-copy.mjs` **chưa có** file của thẻ Kỹ năng trong `MODULES`. Đã chạy một bản sao (ở thư mục tạm) với `MODULES = [skills/data.js, skills/content.js]`: 2 lỗi, 9 cảnh báo. Kết quả đã gộp vào danh sách dưới (mục 27–29). Không có dấu “—” giữa câu, không có từ cấm.

Mức: **cao** = sai dữ kiện hoặc dùng số chưa đối chiếu như sự thật, phải sửa trước khi bật thẻ; **vừa** = nên sửa trong lô này; **thấp** = sửa khi tiện.

---

## A. Dữ kiện không có căn cứ hoặc dùng số [trí nhớ, chưa đối chiếu]

1. **content.js `WHY.limits[1]`, `SOURCES['piaac-2023'].note`; data.js `doc-viet.why`** (cao)
   Trích: “Việt Nam không tham gia khảo sát kỹ năng người trưởng thành của OECD (PIAAC 2023)”; “Việt Nam không tham gia khảo sát này, nên chưa có số so sánh”; note “Việt Nam không tham gia.”
   Vấn đề: research mục 1.2 ghi rõ **[trí nhớ, chưa đối chiếu danh sách OECD lần này]** và quy ước “Không đưa lên web khi chưa kiểm lại”. Câu xuất hiện ở 3 chỗ, khẳng định chắc chắn.
   Sửa: đối chiếu danh sách 31 nước trên trang OECD rồi mới giữ. Trước khi đối chiếu: “Chưa có số liệu PIAAC cho Việt Nam; số liệu khảo sát hộ gia đình gần nhất về kỹ năng của Ngân hàng Thế giới (STEP) làm năm 2012.” Bỏ vế “Việt Nam không tham gia” trong note nguồn.

2. **content.js `LEARN.methods[2]` (Luyện xen kẽ)** (cao)
   Trích: “Có lợi rõ với toán và phân loại; Dunlosky và cộng sự (2013) xếp ở mức trung bình vì bằng chứng còn hẹp.” `verdict: 'Hiệu quả trung bình'`.
   Vấn đề: research mục 4 ghi mức “trung bình” của Dunlosky là **[trí nhớ]**; “phân loại” và lý do “vì bằng chứng còn hẹp” không có trong research. Chỉ kết luận của Rohrer & Taylor (2007) với bài toán thể tích là [trích trang gốc].
   Sửa: “Trộn nhiều dạng bài trong một buổi thay vì làm hết một dạng rồi mới sang dạng khác. Trong thí nghiệm của Rohrer và Taylor (2007) với bài toán tính thể tích, nhóm học xen kẽ làm bài kiểm tra sau một tuần tốt hơn rõ nhóm học theo khối. Bằng chứng chủ yếu ở môn toán.” `verdict: 'Có bằng chứng, phạm vi hẹp'`. Bỏ `dunlosky-2013` khỏi `src` của mục này cho tới khi đối chiếu.

3. **content.js `METHOD.limits[3]`** (vừa)
   Trích: “Người mới bắt đầu thường tự chấm cao hơn thực tế”.
   Vấn đề: căn cứ duy nhất là Kruger & Dunning 1999, research ghi **[trí nhớ, chưa đối chiếu]**; câu không có nguồn.
   Sửa: “Thang 5 mức là tự chấm, chưa chuẩn hoá, nên dễ lệch. Chấm theo việc cụ thể đã làm được, hoặc nhờ người hướng dẫn chấm cùng.”

4. **content.js `WHY.paragraphs[3]`** (vừa)
   Trích: “Hai khung này là cơ sở cho thang 5 mức của các kỹ năng số và tiếng Anh trên trang.”
   Vấn đề: Thông tư 02/2025 có 4 trình độ, 8 bậc; research ghi “mô tả từng bậc chưa đọc được”. Thang 5 mức của trang là bản ghép từ Dreyfus, DigComp, CEFR (research mục 3), không dựng từ Thông tư 02. Mô tả CEFR cũng đang là [trí nhớ, cần đối chiếu].
   Sửa: “Thang 5 mức của các kỹ năng số trên trang do biên tập soạn, tham khảo cách chia trình độ của DigComp và Thông tư 02/2025; thang tiếng Anh lấy năm bậc A1–C1 của CEFR, tương ứng Bậc 1–5 của Thông tư 33/2026.”

5. **data.js `tieng-anh.levels`** (vừa)
   Trích: “B2: theo được thảo luận chuyên môn trong lĩnh vực mình, nói tự nhiên mà hai bên không phải gắng sức.”
   Vấn đề: cả 5 mô tả CEFR lấy từ trí nhớ (research 3.15: “[trí nhớ, cần đối chiếu nguyên văn tại coe.int]”).
   Sửa: đối chiếu global scale trên coe.int trước khi bật thẻ; đổi sang mô tả theo việc như research gợi ý (“đọc được email công việc”, “họp trực tuyến không cần phụ đề”) và ghi “diễn giải theo CEFR”.

6. **data.js `doc-viet.resources`** (vừa)
   Trích: `Technical Writing One … https://developers.google.com/tech-writing`.
   Vấn đề: research 3.1 ghi **[trí nhớ, chưa kiểm]**, không có trong bảng tài nguyên mục 6. Đây là tài nguyên duy nhất của kỹ năng.
   Sửa: kiểm URL trước khi đăng; nếu chưa kiểm được thì để `resources: []` (hiện `noResources`).

7. **data.js `du-lieu.why`, `du-lieu.note`** (cao)
   Trích: “phần lớn công việc văn phòng ở Việt Nam vẫn ra quyết định trên bảng tính”; “Bảng tính là ngôn ngữ chung của hầu hết văn phòng, và người trả lời được câu hỏi bằng số thường được giao việc quan trọng hơn.”
   Vấn đề: không có số liệu nào trong research; khẳng định định lượng về Việt Nam (“phần lớn”, “hầu hết”).
   Sửa why: “Bảng tính là bước vào thấp nhất của nhóm này, và cũng là công cụ để kiểm lại con số do AI đưa ra. Tỷ lệ tin tuyển dụng ở Việt Nam đòi kỹ năng bảng tính chưa có số liệu đủ tin cậy.” Sửa note: “Trả lời được câu hỏi công việc bằng một bảng số rõ ràng là việc nhà tuyển dụng kiểm được ngay trong buổi phỏng vấn. Học trên dữ liệu thật của chính việc mình làm sẽ nhanh hơn học hết danh sách hàm.”

8. **data.js `an-toan.why`, `an-toan.note`** (vừa)
   Trích: “đây là kỹ năng rẻ nhất để học mà giảm được thiệt hại lớn nhất”; “Một lần mất tài khoản công việc có thể tốn nhiều hơn mọi giờ học bảo mật cộng lại… đây là kỹ năng có chi phí thấp nhất để đạt mức đủ dùng.”
   Vấn đề: hai so sánh bậc nhất không có căn cứ (research 3.7: “chưa có số liệu đủ tin cậy” về chi phí), lặp ý giữa why và note.
   Sửa why câu cuối: “Ở mức 1–3, phần lớn biện pháp chỉ cần thiết lập một lần.” Sửa note: “Mất một tài khoản email công việc kéo theo cả tài khoản ngân hàng, mạng xã hội gắn với nó. Bật xác thực hai lớp và sao lưu trong tuần này là việc nhỏ nhất mà bạn có thể làm ngay.”

9. **data.js `tu-hoc.why`** (cao)
   Trích: “WEF dự kiến khoảng 39% kỹ năng cốt lõi của người lao động thay đổi đến 2030”.
   Vấn đề: research 1.1 ghi 39% **kỹ năng hiện có** sẽ thay đổi hoặc lỗi thời, không phải “kỹ năng cốt lõi” (thuật ngữ “core skills” của WEF là danh sách khác). Sai nghĩa số liệu.
   Sửa: “WEF dự kiến 39% kỹ năng hiện có của người lao động sẽ thay đổi hoặc lỗi thời trong giai đoạn 2025–2030…”

10. **data.js `tu-hoc.why`, `costText`, `note`** (vừa)
    Trích: “khả năng tự học quyết định chi phí của mọi kỹ năng khác”; “làm giảm chi phí học mọi kỹ năng khác”; “đây là kỹ năng làm rẻ đi mọi kỹ năng còn lại… không tốn thêm thời gian”.
    Vấn đề: một ý lặp ba lần, nói quá (“quyết định”, “mọi”); “không tốn thêm thời gian” không có nguồn. Research chỉ có bằng chứng tự kiểm tra, ôn giãn cách hiệu quả hơn đọc lại.
    Sửa why câu cuối: “Khi kỹ năng thay đổi nhanh hơn chu kỳ đào tạo chính quy, cách học hiệu quả giúp rút ngắn thời gian học các kỹ năng khác.” costText bỏ câu cuối. Note: “Đổi từ đọc lại sang tự kiểm tra và ôn giãn cách là thay đổi rẻ nhất bạn có thể làm ngay trong môn đang học. Lúc đầu sẽ thấy khó hơn đọc lại; cảm giác khó đó là dấu hiệu đang nhớ, không phải đang học sai.” (Câu sau có cơ sở ở Dunlosky 2013 về cảm giác quen thuộc; nếu chưa đối chiếu thì bỏ.)

11. **data.js `lap-trinh.why`** (vừa)
    Trích: “khảo sát ManpowerGroup 2026 ghi phát triển mô hình và ứng dụng AI là kỹ năng khó tìm nhất (20% nhà tuyển dụng).”
    Vấn đề: dùng số về **phát triển mô hình AI** làm bằng chứng cho **lập trình cơ bản** là lệch đối tượng; người đọc dễ hiểu nhầm học Python nhập môn là lấp được khoảng trống đó.
    Sửa: “…ghi phát triển mô hình và ứng dụng AI là nhóm khó tuyển nhất (20% nhà tuyển dụng); đó là việc của người làm nghề công nghệ, lập trình cơ bản chỉ là bước đầu. Với người không làm nghề công nghệ, giá trị chính…”

12. **content.js `WHY.paragraphs[2]`** (vừa)
    Trích: “Kỹ năng AI là nhóm thay đổi nhanh nhất.”
    Vấn đề: “thay đổi” không rõ nghĩa; căn cứ là WEF (“AI and big data” tăng nhanh nhất tới 2030) nhưng `src` không có `wef-2025`.
    Sửa: “Theo Future of Jobs 2025, AI và dữ liệu lớn là nhóm kỹ năng được dự báo tăng nhanh nhất đến 2030.” Thêm `wef-2025` vào `src`.

13. **content.js `WHY.takeaway`** (vừa)
    Trích: “Thiếu một trong ba, hai kỹ năng còn lại khó phát huy.”
    Vấn đề: không nguồn nào trong research nói về quan hệ bổ trợ này. Câu đầu (ba điểm gặp nhau) có căn cứ.
    Sửa: bỏ câu thứ hai, hoặc thay: “Đó cũng là ba nhóm mà khảo sát doanh nghiệp tại Việt Nam ghi nhận khoảng trống rõ nhất.” (BUV: giải quyết vấn đề, quản lý thời gian, năng lực số).

14. **data.js `phan-bien.why`** (thấp)
    Trích: “…người dùng AI ra đáp án đúng ít hơn 19 điểm phần trăm so với người không dùng, vì họ tin kết quả mà không kiểm.”
    Vấn đề: vế nhân quả “vì họ tin kết quả mà không kiểm” là diễn giải, research không có đoạn trích xác nhận cơ chế.
    Sửa: “…ít hơn 19 điểm phần trăm so với người không dùng; nhóm tác giả cho rằng người dùng đã tin kết quả ở chỗ mô hình yếu.” Hoặc bỏ vế “vì”.

15. **data.js `doc-viet.why`, `phan-tich.why`, `nhom.why`, `giao-tiep.why`, `thoi-gian.why`** (vừa)
    Trích: “Khi AI viết nháp nhanh, giá trị chuyển sang người đọc kỹ…”; “Khi các bước làm theo mẫu chuyển dần cho phần mềm…”; “Khi một phần việc được giao cho công cụ, phối hợp giữa người với người chiếm tỷ lệ lớn hơn trong ngày làm việc.”; “Đây là phần việc AI khó làm thay…”; “Đây là năng lực được đánh giá ngay trong vài tuần đầu đi làm”.
    Vấn đề: các câu “cơ chế” này đều là suy luận của biên tập, viết như dữ kiện (“chiếm tỷ lệ lớn hơn” là khẳng định định lượng). Giọng chuyên khảo cần tách suy luận khỏi số liệu. Đồng thời lặp khuôn “Khi …, …” (xem mục 22).
    Sửa: đánh dấu là lập luận (“Lập luận của biên tập: …” hoặc “Có thể suy ra…”) và bỏ phần định lượng. Ví dụ `nhom`: “Phần việc giao được cho công cụ càng nhiều, phần còn lại càng phụ thuộc vào việc người với người khớp nhau; chưa có số liệu đo tỷ lệ này.”

16. **content.js `SOURCES`** (thấp)
    - `idp.title` “Người đi làm nên thi TOEIC hay IELTS”: research chỉ có “Bài IDP về TOEIC/IELTS cho người đi làm”; tên bài là tự đặt, trái quy tắc “tên bài giữ nguyên cách viết gốc”. Sửa: lấy đúng tiêu đề trang, chưa có thì ghi “Bài về TOEIC và IELTS cho người đi làm (tiêu đề chưa đối chiếu)”.
    - `dellacqua-2023.title` dài (“Field Experimental Evidence…”) và `coursera-gda.url`, `year: '2026'` không có trong research. Kiểm lại hoặc rút về dữ kiện research có.
    - `SOURCE_NOTE` dẫn “research/ky-nang.md”, người dùng web không mở được. Sửa: “…mức tin cậy của từng con số được ghi trong hồ sơ nghiên cứu của thẻ.”

## B. Phân tích nông, thiếu đánh đổi, thiếu áp dụng cho Việt Nam

17. **data.js `thich-ung.why`** (vừa)
    Trích toàn bộ why: hai câu xếp hạng (WEF hạng 2, BUV khoảng trống thứ tư).
    Vấn đề: chỉ có thứ hạng, không có cơ chế vì sao kỹ năng này quan trọng lúc này. Research có dữ kiện dùng được: 39% kỹ năng hiện có sẽ đổi; 59/100 lao động cần đào tạo.
    Sửa thêm câu: “Khi gần bốn phần mười kỹ năng hiện có được dự báo thay đổi trong năm năm (WEF 2025), người đi làm phải đổi công cụ và cách làm nhiều lần trong cùng một vị trí; điều doanh nghiệp đánh giá là giữ được kết quả trong lúc đổi.”

18. **data.js `sang-tao`, `lanh-dao`, `tu-hoc`, `doc-viet`, `an-toan` (why)** (vừa)
    Vấn đề: không có câu nào về Việt Nam, cũng không nói rõ là chưa có số. Quy tắc thẻ kiến thức: không có nguồn thì ghi “chưa có số liệu đủ tin cậy”.
    Sửa: thêm một câu cuối mỗi why, ví dụ `lanh-dao`: “Khảo sát doanh nghiệp tại Việt Nam trong lượt tra cứu này không đo riêng kỹ năng lãnh đạo; chưa có số liệu đủ tin cậy cho Việt Nam.” Với `an-toan`, nếu không có số liệu lừa đảo trực tuyến có nguồn thì ghi tương tự.

19. **data.js `phan-tich.plan30[1]` mâu thuẫn với `phan-tich.mistakes[1]`** (vừa)
    Trích: “Mỗi tuần giải 5 bài toán thống kê hoặc logic có lời giải…” và mistakes: “Luyện ‘bài tư duy’ chung chung… chuyển giao xa gần như không có”.
    Vấn đề: nhiệm vụ đi ngược đúng sai lầm mà thẻ cảnh báo (và LEARN “Luyện não chung chung”).
    Sửa: “Mỗi tuần lấy một số liệu của chính việc đang làm (doanh số, chi tiêu, điểm thi), đặt một câu hỏi và trả lời bằng tính toán; tự kiểm lại bằng cách khác” / đầu ra “4 câu hỏi có lời giải, ghi chỗ sai khi kiểm lại”.

20. **content.js `TOOL.allDone`** (thấp)
    Trích: “Có thể chọn một mục tiêu cao hơn”.
    Vấn đề: các mục tiêu là lĩnh vực nghề, không xếp cao thấp. Sửa: “Có thể chọn một lĩnh vực khác để so, hoặc dựa vào tin tuyển dụng thật để tự nâng mức cần.”

## C. Giọng văn, lặp khuôn

21. **data.js `giao-tiep.why`** (vừa)
    Trích: “Đây là phần việc AI khó làm thay vì gắn với quan hệ và trách nhiệm cá nhân.”
    Vấn đề: dùng sai “thay vì” (nghĩa là “vì”), đọc thành “AI khó làm thay vì…”; câu sai ngữ pháp.
    Sửa: “Phần việc này khó giao cho AI vì gắn với quan hệ và trách nhiệm của từng người.” (và ghi là lập luận, xem mục 15).

22. **data.js 15 `why`: lặp khuôn mở bài** (vừa)
    Vấn đề: 13/15 why mở bằng tên nguồn hoặc “Trong + nguồn” rồi đến thứ hạng: “Trong Future of Jobs 2025, …” (`du-lieu`, `an-toan`), “Khảo sát BUV 2026 với 375 doanh nghiệp…” / “Trong khảo sát BUV 2026 với 375 doanh nghiệp…” (`giao-tiep`, `thoi-gian`), “WEF xếp…”, “WEF dự kiến…”. Câu thứ hai/ba lặp khuôn “Khi …, …” (`doc-viet`, `phan-tich`, `nhom`, `tu-hoc`). Đọc liền 15 hồ sơ thấy rõ một mẫu.
    Sửa: đổi trật tự ở khoảng một nửa số mục: mở bằng cơ chế hoặc tình huống công việc, đưa số liệu xuống câu sau. Ví dụ `thoi-gian`: “Giữ hạn là thứ đầu tiên người quản lý nhìn thấy ở nhân viên mới. Khảo sát BUV 2026…”. Bỏ cụm “với 375 doanh nghiệp” lặp lại ở mục thứ hai trở đi (đã có trong ngăn nguồn).

23. **data.js `note`: lặp khuôn kết bằng phép đối “không phải X mà Y” / “X hơn Y”** (vừa)
    Trích: `phan-bien` “có giá trị khi…, không phải khi…”; `sang-tao` “…mà là…”, “…không phải số ý tưởng nghĩ ra”; `ai` “Lợi thế không nằm ở…, mà ở…”; `thich-ung` “không có nghĩa là…, mà là…”; `lap-trinh` “nói nhiều hơn một chứng chỉ”; `lanh-dao` “quan trọng hơn tên vai trò”; `giao-tiep` “lâu hơn nội dung”; `du-lieu` “nhanh hơn nhiều so với”.
    Vấn đề: 8/15 lời nhắn dựng trên cùng một phép đối, nghe thành khẩu hiệu.
    Sửa: giữ phép đối ở tối đa 3 mục; các mục còn lại kết bằng một việc cụ thể nên làm. Ví dụ `thich-ung`: “Lần tới khi kế hoạch đổi, thử ghi ngay ba việc: cái gì giữ nguyên, cái gì bỏ, hạn mới là bao giờ. Nếu thấy mình không còn sức để ghi, đó là lúc nên xin hỗ trợ.”

24. **data.js `giao-tiep.note`** (vừa)
    Trích: “Người nghe nhớ cách bạn trình bày lâu hơn nội dung bạn trình bày.”
    Vấn đề: khẳng định tâm lý học không có nguồn, giọng khẩu hiệu.
    Sửa: “Ở buổi phỏng vấn hay buổi họp đầu tiên, người nghe đánh giá bạn qua việc có nói ý chính trước hay không. Tự ghi hình và xem lại là bước khó chịu nhất, nhưng cho thấy ngay chỗ cần sửa.”

25. **data.js `thoi-gian.note`, `an-toan.note`, `tu-hoc.note`, `doc-viet.note`, `thich-ung.note`** (thấp)
    Vấn đề: phần kết quả phải nói với “bạn” như người tư vấn; năm lời nhắn này viết giọng kiến thức, không có “bạn”. `thoi-gian.note` lặp gần nguyên văn why (“Ở Việt Nam, đây là khoảng trống lớn nhất… theo khảo sát BUV 2026”).
    Sửa `thoi-gian.note`: “Điều người quản lý cần ở bạn là báo trước được việc nào sẽ trễ. Một tháng ghi ước lượng và thời gian thật là đủ để thấy mình thường đoán sai bao nhiêu phần trăm.”

26. **data.js `sang-tao.why`** (thấp)
    Trích: “Lý do có tính cơ chế: AI tạo sinh đưa ra nhiều phương án rất nhanh…”
    Vấn đề: cụm siêu ngôn ngữ (“có tính cơ chế”) lộ cách viết nội bộ, không phải giọng sách báo; mệnh đề sau là suy luận không nguồn.
    Sửa: “Khi AI tạo sinh đưa ra nhiều phương án rất nhanh, việc chọn phương án nào và ghép ý cho đúng bối cảnh vẫn do người làm; đây là lập luận, chưa có số liệu đo.”

27. **data.js `tieng-anh.note`** (thấp, cảnh báo của check-copy)
    Trích: “…và thường mở rộng nhóm việc bạn có thể ứng tuyển… vì đọc và viết thường đã đi trước.”
    Vấn đề: “thường” ×2, tổng 3 từ rào đón trong một đoạn.
    Sửa: “Tiếng Anh là khoản đầu tư dài nhất trong danh sách và mở thêm nhóm việc bạn ứng tuyển được. Theo EF EPI, người Việt Nam nghe và nói kém hơn đọc và viết, nên đó là chỗ cần dồn thời gian.”

28. **data.js toàn file: “giá trị” ×5** (thấp, lỗi check-copy, hạn mức 2)
    Trích: `doc-viet.why` “giá trị chuyển sang…”, `phan-bien.note` “có giá trị khi…”, `lap-trinh.why` “giá trị chính là…”, `lap-trinh.prove` “giá trị ở Việt Nam…”, `sang-tao.costText` “chứng chỉ có giá trị”.
    Sửa: `doc-viet` “phần việc của người chuyển sang…”; `phan-bien` “Phản biện có ích khi…”; `lap-trinh.why` “lợi ích chính là…”. (Hạn mức tính theo file vì data.js chưa có trường `summary`; xem mục 37.)

29. **content.js `SOURCES['piaac-2023'].title`** (thấp, lỗi check-copy giả)
    Vấn đề: tên bài gốc là câu hỏi, check-copy báo “Mở đoạn bằng câu hỏi”. Giữ nguyên tên gốc; thêm `title` của SOURCES vào danh sách bỏ qua khi thêm thẻ vào `check-copy` (hoặc ALLOW_LINES).

## D. Đầu ra lộ trình: đo được và khối lượng

30. **Đầu ra không đếm hoặc không tự kiểm được** (vừa)
    - `doc-viet.plan90[2]` “1 bản tóm tắt được người khác dùng” → “1 bản tóm tắt một trang và nhận xét của 1 người đọc”.
    - `phan-tich.plan90[0]` “Bản phân tích và quyết định được đưa ra sau đó” (phụ thuộc người khác) → “Bản phân tích 2 trang và ghi chép ý kiến của người nghe”.
    - `an-toan.plan30[0]` “Danh sách tài khoản đã bảo vệ” → “Danh sách tối thiểu 5 tài khoản đã bật xác thực hai lớp”.
    - `an-toan.plan90[1]` “1 hướng dẫn được dùng”; `ai.plan90[1]` “Quy tắc được nhóm dùng thử” → “1 trang hướng dẫn, gửi cho ít nhất 3 người, ghi lại câu hỏi họ đặt ra”.
    - `thich-ung.plan30[1]` “Sổ ghi rút kinh nghiệm” → “Ít nhất 6 mục ghi 3 dòng”; `thich-ung.plan90[0]` “Kết quả và bản tự đánh giá” → “Sản phẩm của việc mới và bản tự đánh giá 1 trang theo tình huống, hành động, kết quả”.
    - `giao-tiep.plan90[0]` “Bài trình bày và phiếu góp ý” → “Bài trình bày và ít nhất 5 phiếu góp ý”.
    - `lap-trinh.plan90[1]` “Các bài tập đã nộp” → “5 bài tập tuần đầu của CS50x đã nộp và chạy đúng”; `lap-trinh.plan90[0]` đầu ra bỏ mất điều kiện “có người khác dùng” → “Kho mã công khai có README và ít nhất 1 người dùng thử”.
    - `du-lieu.plan90[0]` “Dự án đăng công khai” → “1 dự án công khai gồm file dữ liệu, bảng điều khiển và 1 trang kết luận”.
    - `ai.plan30[1]`: nhiệm vụ ghi “một câu hỏi” nhưng đầu ra “10 câu hỏi” → sửa nhiệm vụ thành “10 câu hỏi có đáp án biết trước”.

31. **Khối lượng khi ghép ba kỹ năng** (vừa)
    Vấn đề: chỉ `doc-viet` ghi số giờ mỗi tuần (3–4 giờ). Ba kỹ năng được chọn cùng lúc có thể là `tieng-anh` (20 phút/ngày + ghi âm + 200 từ), `lap-trinh` (khoá nhập môn + 30 bài tập), `du-lieu`: ước chừng 12–15 giờ/tuần, quá sức người đang đi làm hoặc đi học. `lap-trinh.plan90` “nửa đầu CS50x” cộng một công cụ có người dùng là nặng với người ở mức 1–2. `tieng-anh.costText` nói 10 giờ/tuần cho 4–5 tháng/bậc, còn lộ trình chỉ khoảng 3 giờ/tuần: hai con số không khớp.
    Sửa: thêm trường `hours` (giờ/tuần, ghi “ước lượng của biên tập”) cho mỗi kỹ năng, hiện tổng giờ của ba kỹ năng trên bảng nhiệm vụ; giảm `lap-trinh.plan90[1]` xuống “3 tuần đầu CS50x”. Trong `tieng-anh.costText` nói rõ lộ trình 90 ngày chưa đủ lên một bậc.

32. **Nhiệm vụ cần điều kiện người dùng có thể không có** (thấp)
    `nhom.plan30` (“Trong một dự án nhóm…”), `giao-tiep.plan30[1]` (“Ghi chép 8 cuộc họp”), `giao-tiep.plan90[1]` (“12 bản báo cáo”), `lanh-dao.plan90` (dự án 2–3 tháng, từ 3 người). Người chưa đi làm không có họp hằng tuần.
    Sửa: thêm phương án thay thế trong cùng câu (“nếu chưa có dự án, nhận một việc ở câu lạc bộ, nhóm tình nguyện”), và để đầu ra theo số buổi thực có (“mọi cuộc họp trong 4 tuần, tối thiểu 4”).

33. **data.js `tieng-anh.costText`** (thấp)
    Trích: “Lên một bậc từ B1 đến B2 vì vậy cần khoảng 150–200 giờ có hướng dẫn”.
    Vấn đề: lấy hiệu hai khoảng (500–600 trừ 350–400) cho ra 100–250 giờ; 150–200 chỉ đúng nếu ghép cùng đầu khoảng. Cambridge ghi chỉ để tham khảo.
    Sửa: “…cần thêm khoảng 100–250 giờ có hướng dẫn (lấy hiệu hai mốc), tức khoảng 3–6 tháng nếu học 10 giờ mỗi tuần. Cambridge ghi các con số này chỉ để tham khảo.”

## E. Thang 5 mức

34. **Mức mô tả nhận thức hoặc thiếu sót, không phải hành vi** (vừa)
    - `phan-bien.levels[0]` “Biết thông tin trên mạng có thể sai.” → “Dừng lại hỏi nguồn trước khi chia sẻ một tin.”
    - `an-toan.levels[0]` “Biết không chia sẻ mã OTP.” → “Không đọc mã OTP cho người gọi đến, kể cả khi họ xưng là ngân hàng hay công an.”
    - `thich-ung.levels[0]` “Bối rối khi kế hoạch thay đổi.”, `thoi-gian.levels[0]` “Chỉ làm khi có hạn gấp.” mô tả điều chưa làm được → “Làm theo kế hoạch mới khi có người hướng dẫn từng bước.” / “Hoàn thành việc khi có hạn rõ và có người nhắc.” (Lưu ý `thich-ung` mức 2 hiện là “Theo được thay đổi khi có hướng dẫn”, cần đẩy mức 2 lên: “Tự điều chỉnh việc quen khi kế hoạch đổi nhỏ.”)
    - `an-toan.levels[4]` “Có chuyên môn bảo mật (từ mức chứng chỉ CompTIA Security+ trở lên).” là chứng chỉ, không phải hành vi; khoảng cách từ mức 4 nhảy lên nghề bảo mật → “Đánh giá rủi ro và đặt quy tắc an toàn dữ liệu cho cả nơi làm việc; ở mức nghề, tương đương CompTIA Security+.”
    - Mức mơ hồ: `lanh-dao.levels[4]` “Định hướng cho tổ chức.”, `thoi-gian.levels[3]` “Cân được nhiều dự án song song.”, `tu-hoc.levels[3]` “trong vài tháng”, `lap-trinh.levels[4]` “Thiết kế hệ thống”. Ghi việc cụ thể, ví dụ `thoi-gian`: “Giữ hạn cho 3 dự án chạy song song, báo trước khi phải đổi ưu tiên.”

35. **Trùng nhau giữa các kỹ năng** (thấp)
    `giao-tiep.levels[0]` “Trả lời đúng câu hỏi trong nhóm nhỏ” ≈ `lanh-dao.levels[0]` “Nói được ý mình khi được hỏi”; `nhom.levels[3]` “Điều phối một nhóm nhỏ” ≈ `lanh-dao.levels[3]` “Dẫn nhóm”; `thich-ung.levels[4]` “Dẫn nhóm qua thay đổi lớn”. Ngoài ra mức 5 của 9/15 kỹ năng là “cho nhóm/dạy người khác”, nên người giỏi nhưng làm một mình không chấm được mức 5.
    Sửa: `lanh-dao.levels[0]` → “Nhận một phần việc và nói rõ mình sẽ làm gì, xong khi nào.” Ghi một dòng trong `rateHint`: “Mức 5 gồm cả việc dẫn dắt người khác trong kỹ năng đó.”

## F. Mức cần theo lĩnh vực (PROFILES)

36. **content.js `PROFILES`** (cao ở hai dòng đầu, còn lại vừa/thấp)
    - `giaoduc` `tieng-anh: 3` (B1): lĩnh vực có “Giáo viên tiếng Anh” (future/jobs/giaoduc.js). Lấy mục tiêu từ nghề đang xem thì giáo viên tiếng Anh được bảo B1 là đủ. (cao)
    - `thietke` `tieng-anh: 3`: lĩnh vực có “Biên dịch, phiên dịch viên”. Cùng vấn đề. (cao)
      Sửa cho cả hai: cho phép ghi đè theo nghề (`JOB_OVERRIDES = { 'giao-vien-tieng-anh': { 'tieng-anh': 5 }, 'bien-phien-dich': { 'tieng-anh': 5 } }`), hoặc ít nhất ghi trong `goalFromJob` rằng mức cần lấy theo lĩnh vực, không theo nghề.
    - `kinhdoanh` `lanh-dao: 4`, `thich-ung: 4`: tên hồ sơ là “Kinh doanh, bán hàng và quản lý”, nhưng lĩnh vực trong thẻ Nghề nghiệp là “Kinh doanh và dịch vụ khách hàng” (có nhân viên tổng đài, thương mại điện tử). Mức 4 lãnh đạo (“dẫn nhóm, thương lượng với đối tác”) quá cao cho người mới; đề xuất 3. (vừa)
    - Tên hồ sơ không khớp `FIELDS` của thẻ Nghề nghiệp: `thietke` (“…sáng tạo và truyền thông” / “Thiết kế, nội dung, ngôn ngữ”), `kinhdoanh` (như trên), `taichinh` (“…kế toán và pháp lý” / “Tài chính, hành chính, pháp lý”), `dichvu` (“…du lịch và vận tải” / “Dịch vụ và vận tải”), `kythuat`. Người đi từ thẻ kia sang thấy tên khác. Sửa: dùng đúng tên trong `FIELDS`. (vừa)
    - `dichvu` `giao-tiep: 4`, `thich-ung: 4` cho cả “Tài xế công nghệ, nhân viên giao hàng”, trong khi `doc-viet: 2`, `an-toan: 3`. Có thể chấp nhận, nhưng `tieng-anh: 3` thấp với hướng dẫn viên du lịch quốc tế. (thấp)
    - `cntt` `du-lieu: 3` thấp cho lĩnh vực có “Chuyên viên phân tích dữ liệu”; đề xuất 4. (thấp)
    - Không hồ sơ nào có mức 5, nên hệ số 1,5 trong công thức và câu “mức 5 nhân 1,5” trong `METHOD` không bao giờ dùng tới. Ghi rõ “hiện chưa mục tiêu nào đòi mức 5” hoặc bỏ. (thấp)

## G. Công thức và lời mô tả phương pháp

37. **calc.js so với `METHOD`** (đối chiếu)
    Công thức, hệ số (5→1,5; 4→1,25; ≤3→1), chi phí (1; 1,5; 2), loại kỹ năng đã đạt, chưa chấm coi là mức 1, thứ tự khi điểm bằng nhau: **khớp** giữa `calc.js`, `METHOD.rows` và `TOOL.rateHint`. Không có sai lệch chữ–mã.

38. **“Tầm quan trọng” chỉ là hàm của mức cần, lệch so với research** (vừa)
    Trích: `METHOD.rows[1]` “Theo mức cần của mục tiêu: mức 5 nhân 1,5…”.
    Vấn đề: research mục 5 đề xuất trọng số 1–3 **theo bằng chứng** (3 cho kỹ năng có trong cả WEF top 5 và BUV 7 năng lực). Bản hiện tại không dùng bằng chứng nào; mức cần đã nằm trong khoảng cách nên bị tính hai lần. Hệ quả kiểm bằng tay: hồ sơ `chung`, người chưa chấm gì (mọi mức = 1) → mọi kỹ năng chi phí thấp mức cần 3 đều được 2 điểm, hoà nhau, xếp theo thứ tự danh sách: **phản biện, AI, an toàn số**. Quản lý thời gian và giải quyết vấn đề (hai khoảng trống lớn nhất của BUV) không vào top 3. Hồ sơ `cntt` với mọi mức = 1: AI, an toàn số, tự học (3,75) xếp trên lập trình (1,875).
    Sửa: (a) thêm hệ số bằng chứng theo research (ví dụ `phan-tich`, `thich-ung` = 1,25; `thoi-gian` = 1,25 vì là khoảng trống lớn nhất ở Việt Nam); (b) đổi tên dòng “Tầm quan trọng” thành “Mức đòi hỏi” cho đúng bản chất; (c) khi chưa chấm kỹ năng nào thì không hiện top 3 (hiện `topEmpty`) thay vì coi tất cả là mức 1.

39. **Chi phí lệch về kỹ năng rẻ, chưa có lối ra như research đề xuất** (thấp)
    Research đề xuất cho người dùng tắt hệ số chi phí hoặc luôn giữ một kỹ năng “dài hạn”. `METHOD.limits[2]` chỉ khuyên giữ tiếng Anh “bất kể điểm” nhưng giao diện không có cách làm. Sửa: thêm nút “Bỏ qua chi phí” hoặc ghim một kỹ năng; nếu chưa làm thì đổi câu thành “Nếu mục tiêu bắt buộc có chứng chỉ ngoại ngữ, hãy coi tiếng Anh là kỹ năng thứ tư, ngoài ba kỹ năng trên.” Hệ số chi phí 1/1,5/2 khác đề xuất 1/2/3 của research: ghi lý do trong `research/ky-nang.md` (sửa research trước).

## H. Quy trình

40. `tools/check-copy.mjs` chưa có `skills/data.js`, `skills/content.js` trong `MODULES` (bước 4 của “Thêm một thẻ mới”). `data.js` không có trường `summary`, nên bộ kiểm lặp khuôn theo nhóm không chạy cho 15 kỹ năng và hạn mức từ hạn chế tính trên cả file. Đề xuất: thêm hai file vào `MODULES`; cho phép check-copy coi trường `note` (hoặc `why`) là đơn vị nhóm, để bắt mục 22–23 tự động.

---

## Tóm tắt

- **Phải sửa trước khi bật thẻ (cao):** câu “Việt Nam không tham gia PIAAC” dùng số [trí nhớ] ở 3 chỗ (1); mức “trung bình” của Dunlosky cho học xen kẽ là [trí nhớ] (2); 39% “kỹ năng cốt lõi” sai nghĩa, đúng là “kỹ năng hiện có” (9); khẳng định không nguồn về văn phòng Việt Nam dùng bảng tính (7); mức cần tiếng Anh B1 cho giáo viên tiếng Anh và biên phiên dịch (36).
- **Phương pháp:** chữ mô tả khớp `calc.js`, nhưng “tầm quan trọng” không dựa trên bằng chứng như research đề xuất; với người chưa chấm, top 3 do thứ tự danh sách quyết định, không phải do khoảng trống BUV (38).
- **Giọng văn:** câu “cơ chế” trong why là suy luận viết như dữ kiện (15); why lặp khuôn “nguồn + thứ hạng”, “Khi…, …” (22); 8/15 lời nhắn dựng trên phép đối “không phải X mà Y” (23); lỗi dùng từ “thay vì” (21); “giá trị” ×5.
- **Lộ trình:** khoảng 12 đầu ra chưa đếm hoặc phụ thuộc người khác (30); một nhiệm vụ mâu thuẫn với chính phần sai lầm (19); chưa có giờ mỗi tuần nên ba kỹ năng ghép lại có thể quá tải (31).
- **Thang mức:** nhìn chung tăng dần đúng; cần đổi 4 mức mô tả nhận thức hoặc thiếu sót sang hành vi, và làm rõ các mức 4–5 mơ hồ (34–35).
