# Thần số học Pythagoras: Năm cá nhân, Số linh hồn, Số nhân cách, Số sứ mệnh và quy tắc đọc kết hợp

Ghi chú nghiên cứu cho dự án "whoareyou". Ngày thực hiện: 26/10/2026.

## 0. Cách nghiên cứu và giới hạn (đọc trước)

- **Không mở được toàn văn trang nào.** Trong phiên này, công cụ WebFetch báo lỗi DNS (`getaddrinfo ENOTFOUND`) với mọi tên miền đã thử (worldnumerology.com, numerology.com, wikipedia.org, vnexpress.net, archive.org). `curl` bị proxy mạng của môi trường chặn (403, `connect_rejected`). Môi trường cũng không có tác tử "web-fetch".
- **Toàn bộ nội dung dưới đây lấy từ kết quả của WebSearch**, tức là đoạn trích và bản tóm tắt mà công cụ tìm kiếm tạo từ trang gốc, kèm URL. Mỗi ý vẫn có nguồn thật, nhưng là **đọc qua đoạn trích, không phải đọc toàn văn**. Vì vậy:
  - mức tin cậy của mọi nguồn bị hạ một bậc so với khi đọc trực tiếp;
  - một số câu chỉ là ý chính, chưa đủ để trích dẫn chính xác từng chữ;
  - nên mở lại các URL chính ([S1]–[S8], [S25], [S26]) để kiểm tra trước khi đưa nội dung lên web.
- **Đã dùng hết hạn mức tìm kiếm** (200 lượt/lượt chạy, dùng chung cho mọi tác tử) trước khi lấp xong vài chỗ trống. Các chỗ còn thiếu được ghi là "chưa tìm được" ngay tại chỗ.
- **Sách in** (Decoz, Goodwin, Jordan, Campbell, Phillips, Millman, Balliett): chưa đọc được nội dung sách. Chỉ có mục lục, bản tóm tắt bên thứ ba hoặc đoạn trích hiện trong kết quả tìm kiếm. **Matthew Oliver Goodwin: không tìm thấy nguồn trực tiếp nào**; chỉ có một trang khác nhắc lại quan điểm của ông ([S11]).
- Ký hiệu: **[1 nguồn]** nghĩa là chỉ một nguồn (hoặc một nhóm trang cùng một tác giả) nói ý đó. **[≥2]** nghĩa là có ít nhất hai nguồn độc lập.

## 1. Danh sách nguồn

Ngày truy cập của mọi nguồn: 26/10/2026, qua đoạn trích WebSearch như đã nói ở mục 0. "Ngày xuất bản" chỉ được ghi khi đoạn trích có nêu.

| Mã | Nguồn | Tác giả / đơn vị | URL | Ngày xuất bản | Tin cậy (cho mục đích "tài liệu thần số học nói gì") |
|---|---|---|---|---|---|
| S1 | Personal Year Numerology Forecast; trang Personal Year 4; PDF "Nine-Year Forecast", "A Yearly & Monthly Forecast" | Hans Decoz / World Numerology | https://www.worldnumerology.com/personal-numerology-forecast/ ; https://www.worldnumerology.com/personal-numerology-forecast/personal-year-4/ ; https://www.worldnumerology.com/pdf-readings-wn-collection/nine-year-forecast.pdf ; https://www.worldnumerology.com/pdf/A-YEARLY-NUMEROLOGY-FORECAST.pdf | Không ghi | Cao. Đây là trang chính thức của Decoz, tác giả được ưu tiên. Lưu ý là trang thương mại (bán bài luận giải). |
| S2 | Free Monthly Numerology Forecast | Hans Decoz / World Numerology | https://www.worldnumerology.com/free-forecasts/monthly-numerology-forecast.html | Cập nhật hằng tháng | Cao (cùng lý do S1) |
| S3 | Soul Urge / Heart's Desire và các trang con 1–9, 11, 33, Minor Soul Urge | Hans Decoz / World Numerology | https://www.worldnumerology.com/numerology-soul-urge/ (trang con: …/meaning-of-soul-urge-1/ đến -8/, …/9/, …/11/, …/33/, …/minor-soul-urge.html) | Không ghi | Cao |
| S4 | Personality Number 1, 2, 4, 6, 7, 8, 9, 11, 22, 33 | Hans Decoz / World Numerology | https://www.worldnumerology.com/numerology-personality/ (trang con …/meaning-of-personality-number-N/) | Không ghi | Cao |
| S5 | Expression Number và các trang con | Hans Decoz / World Numerology | https://www.worldnumerology.com/numerology-expression/ | Không ghi | Cao |
| S6 | Master Numbers 11, 22, 33 | Hans Decoz / World Numerology | https://www.worldnumerology.com/numerology-master-numbers/ (và …/master-number-11/, -22/, -33/) | Không ghi | Cao |
| S7 | Bridge Numbers; các PDF bài luận mẫu (Sample Personality Profile, Paul McCartney Chart Analysis) | Hans Decoz / World Numerology | https://www.worldnumerology.com/numerology-bridge-numbers/ ; https://www.worldnumerology.com/numerology-readings/sample-readings/sample-numerology-profile.pdf ; https://www.worldnumerology.com/numerology-software/software-sample-readings/profile-reading.pdf | Không ghi | Cao |
| S8 | Hidden Passion, Karmic Lessons (trang và báo cáo mẫu) | Hans Decoz / World Numerology | https://www.worldnumerology.com/Do-reading-numerology-02-HiddenPas.html ; https://www.worldnumerology.com/pdf-readings-wn-collection/ultimate-numerology-reading.pdf | Không ghi | Cao |
| S9 | Your Personal Year Number; Your Heart's Desire Number; About Number Meanings; Your Hidden Passion Number | Affinity Numerology (trang không ghi rõ tên tác giả trong đoạn trích) | https://affinitynumerology.com/using-numerology/your-personal-year-number.php ; …/your-hearts-desire-number.php ; …/your-hidden-passion-number.php ; https://affinitynumerology.com/number-meanings/about-numerology-number-meanings.php | Không ghi | Trung bình. Độc lập với Decoz, theo hệ Pythagoras, nhưng không rõ tác giả. |
| S10 | Các trang 1–9 Personal Year, Master 11/2 và 22/4 Personal Year | Felicia Bender (nhà thần số học, tác giả sách) | https://feliciabender.com/numerology/1-personal-year/ (tương tự cho 2–9, master-11-2-personal-year, master-22-4-personal-year) | Không ghi | Trung bình. Tác giả có tên tuổi, độc lập với Decoz. |
| S11 | Master Numbers; Expression 1, 11, 22, 33; Personality 1, 4, 6, 7; Soul Urge | numerologist.com | https://numerologist.com/numerology/master-numbers ; https://numerologist.com/numerology/name/ex ; https://numerologist.com/numerology/personality-number | Không ghi | Trung bình–thấp. Trang thương mại lớn; tự mâu thuẫn ở vài chỗ (xem mục E4). |
| S12 | Personality Number vs Soul Urge: What the Gap Reveals; When Your Personality Number Clashes… | numerologist.com | https://numerologist.com/love-and-relationships/personality-soul-urge-gap ; https://numerologist.com/numerology/personality-number-advanced | Không ghi | Trung bình–thấp |
| S13 | *The Complete Book of Numerology* (bản PDF trên archive.org; bản tóm tắt Bookey) | David A. Phillips | https://ia800400.us.archive.org/23/items/soi-book-collection-1/_David_Phillips__The_Complete_Book_of_NumerologyBookFi.pdf ; https://www.bookey.app/book/the-complete-book-of-numerology | Sách gốc thập niên 1980 (không xác minh được năm) | Trung bình. Nguồn gốc của dòng "thần số học" phổ biến ở VN, nhưng chỉ đọc được đoạn trích. |
| S14 | *Thay đổi cuộc sống với Nhân số học* (giới thiệu sách, thư mục thư viện) | Lê Đỗ Quỳnh Hương; phát triển từ sách của D. A. Phillips | https://thuvien.hanoiacademy.edu.vn/courses/thay-doi-cuoc-song-voi-nhan-so-hoc-the-complete-book-of-numerology-david-a-phillips/ ; https://dantri.com.vn/giai-tri/ra-mat-cuon-sach-thay-doi-cuoc-song-voi-nhan-so-hoc-20201104220803531.htm | 04/11/2020 (bài Dân trí) | Trung bình, chỉ về thông tin xuất bản; chưa đọc nội dung sách |
| S15 | *Numerology: The Romance in Your Name* (trang nhà xuất bản) | Juno Jordan; DeVorss | https://devorss.com/products/numerology-the-romance-in-your-name | 1965; tái bản 1984 | Thấp về nội dung (chỉ có mục lục) |
| S16 | *Your Days Are Numbered* (Google Books, archive.org) | Florence Campbell | https://books.google.com/books/about/Your_Days_Are_Numbered_A_Manual_of_Numer.html?id=vxXMgTqco_YC ; https://archive.org/details/yourdaysarenumbe0000flor | Google Books ghi 1974; một thư mục ghi bản gốc 1931 (mâu thuẫn) | Thấp về nội dung (chỉ có mục lục) |
| S17 | *The Philosophy of Numbers* (1908), bản sao văn bản; trang tiểu sử Balliett | Mrs. L. Dow Balliett; numerologist.com | https://www.scribd.com/doc/141389086/Balliett-Mrs-L-Dow-Philosophy-of-Numbers-pdf ; https://numerologist.com/numerology/balliett | 1908 | Trung bình. Văn bản gốc thuộc phạm vi công cộng nhưng đọc qua bản sao và đoạn trích. |
| S18 | *The Life You Were Born to Live* (giới thiệu, tóm tắt) | Dan Millman | https://www.everand.com/book/232964670/The-Life-You-Were-Born-to-Live-A-Guide-to-Finding-Your-Life-Purpose ; https://www.bookey.app/book/the-life-you-were-born-to-live | Không ghi | Thấp–trung bình |
| S19 | Các bài tiếng Việt về năm cá nhân / chu kỳ 9 năm | Elle VN; Lịch Ngày Tốt; Tra cứu thần số học; Mytour | https://www.elle.vn/bi-quyet-song/nam-ca-nhan-va-y-nghia-trong-than-so-hoc-2026/ ; https://lichngaytot.com/than-so-hoc/chu-ky-9-nam-trong-than-so-hoc-798-220705.html ; https://tracuuthansohoc.com.vn/chu-ki-9-nam-than-so-hoc.html | Không ghi | Thấp. Blog thương mại; chỉ dùng để ghi thuật ngữ tiếng Việt. |
| S20 | Các bài tiếng Việt về chỉ số linh hồn / nhân cách / sứ mệnh | JobsGO, Viettel Store, Tierra, FPT Shop, 35express, tracuuthansohoc.net, thansohocchuyensau.com | https://jobsgo.vn/blog/chi-so-linh-hon/ ; https://jobsgo.vn/blog/chi-so-nhan-cach/ ; https://jobsgo.vn/blog/chi-so-su-menh/ ; https://viettelstore.vn/tin-tuc/giai-ma-chi-tiet-cach-tinh-than-so-hoc-tu-a-z-cho-nguoi-moi-bat-dau ; https://tracuuthansohoc.net/chi-so-nhan-cach.html ; https://www.tierra.vn/tin-tuc/cach-tinh-chi-so-su-menh | Không ghi | Thấp. Chỉ dùng để ghi thuật ngữ và cách diễn đạt ở VN. |
| S21 | Numerology; Number symbolism; Pythagoreanism / Neo-Pythagoreanism | Encyclopaedia Britannica | https://www.britannica.com/topic/numerology ; https://www.britannica.com/topic/number-symbolism ; https://www.britannica.com/science/Pythagoreanism/Neo-Pythagoreanism | Không ghi | Cao |
| S22 | *Numerology: Or What Pythagoras Wrought* (trang sách, bài điểm sách) | Underwood Dudley; Mathematical Association of America | https://bookstore.ams.org/spec-19 ; https://www.cambridge.org/9780883855249 | 1997 | Cao (nhà toán học, NXB học thuật); chỉ đọc được mô tả và điểm sách |
| S23 | Barnum effect; Schizotypy and the Barnum Effect | Wikipedia (tổng hợp); Personality and Individual Differences (ScienceDirect) | https://en.wikipedia.org/wiki/Barnum_effect ; https://www.sciencedirect.com/science/article/abs/pii/S0191886907003042 | Bài ScienceDirect khoảng 2007 (theo mã bài, chưa xác minh) | Cao về thí nghiệm Forer (1949) |
| S24 | "Exploring numerology for businesses: a bold leap of faith" | *Humanities and Social Sciences Communications* (Nature Portfolio) | https://www.nature.com/articles/s41599-024-04325-2 | 2024 | Cao (tạp chí bình duyệt), nhưng chỉ đọc được đoạn trích |
| S25 | "Giải mã vận mệnh theo Thần số học có phải mê tín dị đoan không?" | Báo VnExpress | https://vnexpress.net/giai-ma-van-menh-theo-than-so-hoc-co-phai-me-tin-di-doan-khong-4706662.html | Không ghi trong đoạn trích | Cao (báo lớn) |
| S26 | Podcast "Đoán vận mệnh qua thần số học có chính xác?" | Báo VnExpress | https://vnexpress.net/doan-van-menh-qua-than-so-hoc-co-chinh-xac-4779053.html | Không ghi | Cao, nhưng chỉ đọc được phần mô tả, chưa nghe nội dung |
| S27 | "Hỏi ChatGPT, xem tarot để chọn nghề: Nỗi lo đáng ngại của nhiều bạn trẻ" | Báo Thanh Niên | https://thanhnien.vn/hoi-chatgpt-xem-tarot-de-chon-nghe-noi-lo-dang-ngai-cua-nhieu-ban-tre-185260705161552631.htm | Khoảng 05/07/2026 | Cao (báo lớn), nhưng đoạn trích không nêu tên chuyên gia |
| S28 | Hiệu ứng Barnum là gì? | Nhà thuốc Long Châu; Vietcetera; Znews | https://nhathuoclongchau.com.vn/bai-viet/hieu-ung-barnum-la-gi-boc-tran-su-that-dang-sau-nhung-loi-tien-doan-chung-ve-tinh-cach.html ; https://vietcetera.com/vn/hieu-ung-barnum-manh-khoe-dang-sau-cac-bai-trac-nghiem-tam-ly ; https://lifestyle.znews.vn/hieu-ung-barnum-khi-boi-toan-trac-nghiem-tinh-cach-hay-co-ve-dung-post1290483.html | Không ghi | Trung bình (bài phổ biến kiến thức, không phải chuyên gia đứng tên) |
| S29 | Thần số học có phải mê tín dị đoan và vi phạm pháp luật không? | Thư Viện Pháp Luật | https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/than-so-hoc-la-gi-than-so-hoc-co-phai-la-me-tin-di-doan-va-vi-pham-phap-luat-hien-nay-hay-khong-366619-126018.html | Không ghi | Trung bình (trang pháp luật phổ thông) |
| S30 | Tuổi Trẻ: "Giữa mùa dịch COVID-19, MC Quỳnh Hương 'hiện hình' chia sẻ về thần số học" | Tuổi Trẻ Cười | https://cuoi.tuoitre.vn/giua-mua-dich-covid-19-mc-quynh-huong-hien-hinh-chia-se-ve-than-so-hoc-2020032044095155.htm | 20/03/2020 (theo URL) | Chỉ để ghi lại bối cảnh trào lưu; không phải bài cảnh báo |
| S31 | Bài thảo luận về thời điểm bắt đầu năm cá nhân | metanumerology.com; numerology4yoursoul.com | https://metanumerology.com/blog/personal-year-birthday-or-january ; https://numerology4yoursoul.com/the-personal-year-begin-in-numerology/ | Không ghi | Thấp (blog) |
| S32 | Life Path Number Meaning (ví dụ Life Path 8 + Soul Urge 2/8) | The Celestia Guide | https://thecelestiaguide.com/numerology-numbers-guide/ | Không ghi | Thấp (blog) |
| S33 | Trang về Personality 3, 5 | Crystal Logic; CyberNumerology; Ppure Energy Gurukul | https://www.crystallogicshop.com/blogs/numerology/numerology-personality-number ; https://cybernumerology.com/personality-numbers-numerology/ ; https://ppureenergygurukul.com/blog/personality-number-numerology/ | Không ghi | Thấp (cửa hàng, blog). Chỉ dùng tạm khi chưa có trang của Decoz. |

**Không tìm thấy:** bài của Tuổi Trẻ cảnh báo về trào lưu thần số học; ý kiến đứng tên của chuyên gia tâm lý Việt Nam nói riêng về thần số học; nghiên cứu thực nghiệm đã bình duyệt kiểm tra trực tiếp thần số học với trắc nghiệm tính cách; nội dung sách của Matthew Oliver Goodwin.

---

## 2. Thuật ngữ: tiếng Anh và tiếng Việt

| Khái niệm | Tiếng Anh (Decoz và các tác giả khác) | Cách gọi ở VN | Ghi chú |
|---|---|---|---|
| Số từ ngày sinh đầy đủ | Life Path (Decoz); Birth Force (Jordan [S15]); Ruling Number (Phillips [S13]); Birth Number dạng "29/11" (Millman [S18]) | **Số chủ đạo** (từ Ruling Number của Phillips), đôi khi "số đường đời" | Phillips/dòng VN dùng 2–11 và **22/4**; bản tóm tắt sách Phillips có nhắc 10 [S13]. Một trang VN nói hệ này **không có số chủ đạo 1** [S20]. Decoz dùng 1–9, 11, 22, 33 [S6]. |
| Năm cá nhân | Personal Year | **Năm cá nhân** | Thống nhất [S1][S19] |
| Tháng cá nhân | Personal Month | **Tháng cá nhân** | |
| Chu kỳ 9 năm | nine-year epicycle (Decoz [S1]) | **Chu kỳ 9 năm** | |
| Nguyên âm | Heart's Desire / Soul Urge (Decoz [S3]); "Your Heart's Desire" (chương sách Jordan [S15]); "Soul Urge" (mục từ của Campbell [S16]) | **Chỉ số linh hồn** / số linh hồn | Balliett (1908): nguyên âm là "linh hồn" [S17] |
| Phụ âm | Personality (Decoz [S4]) | **Chỉ số nhân cách** | Balliett: phụ âm là "thân thể" [S17] |
| Toàn bộ tên | Expression (Decoz [S5]); **Destiny** (Jordan [S15], numerologist.com [S11]) | **Chỉ số sứ mệnh** | Dễ nhầm: một trang VN gán nhãn "Destiny/Life Path" cho sứ mệnh và bảo nó tính từ ngày sinh [S20]. Một trang VN khác tính sứ mệnh = linh hồn + nhân cách [S20]. |
| Số bậc thầy | Master Numbers 11, 22, 33 | **Số Master**, "số bậc thầy" | Cách ghi "22/4" có ở Phillips [S13] và Bender [S10]; "33/6" ở numerologist.com [S11]; Millman ghi tổng/đích như "29/11" [S18]. |
| Tên sách VN | *The Complete Book of Numerology* | *Thay đổi cuộc sống với **Nhân số học*** | Sách dùng chữ "Nhân số học"; báo chí và mạng dùng "Thần số học" [S14][S25] |

Cách nói thường gặp trong nguồn VN [S20] (để viết giọng tự nhiên): chỉ số linh hồn là "nội tâm", "mong muốn sâu bên trong", "khao khát"; chỉ số nhân cách là "ấn tượng bạn tạo ra với người mới gặp", "lớp vỏ bên ngoài", "tấm danh thiếp"; chỉ số sứ mệnh là "việc bạn được cho là sinh ra để làm", "thứ người khác thường trông đợi ở bạn".

---

## Phần A: Năm cá nhân (Personal Year) 1–9

### A0. Cách tính, chu kỳ, thời điểm bắt đầu

- **Cách tính:** cộng tháng sinh, ngày sinh và năm dương lịch hiện tại, rồi rút về một chữ số [S1][S9] [≥2]. Decoz gọi tổng tháng và ngày sinh là "Sun Number" rồi cộng với năm [S2].
- **Chu kỳ 9 năm:** Decoz coi chín năm cá nhân là một "epicycle". Năm 1 là bước đầu đi theo hướng mới, năm 9 khép chu kỳ [S1]. Bender: năm 1 mở chu kỳ 9 năm mới, năm 9 khép lại [S10]. Các trang VN nói giống vậy và thêm rằng đời người đi qua nhiều chu kỳ 9 năm [S19]. [≥2]
- **Thời điểm bắt đầu năm (mâu thuẫn):**
  - Decoz: năm cá nhân chạy theo năm dương lịch, từ tháng 1 đến tháng 12. Riêng các chu kỳ Transit và Essence (tính từ chữ cái của tên) chạy từ sinh nhật đến sinh nhật [S1].
  - Bender nêu cả hai cách: theo năm dương lịch hoặc từ sinh nhật đến sinh nhật [S10].
  - Một số blog tính từ sinh nhật. Một blog theo cách tính từ 1/1 nói "nhiều người thấy chuyển dần từ 2–3 tháng trước 1/1" [S31] [1 nguồn, yếu].
- **Số bậc thầy trong năm cá nhân (mâu thuẫn):** Decoz rút năm cá nhân về 1–9 [S1]. Bender có riêng trang "Master 11/2 Personal Year" (giống năm 2 nhưng mạnh hơn, thêm yếu tố tâm linh và căng thẳng thần kinh) và "Master 22/4 Personal Year" (năm xây dựng lớn, phục vụ người khác) [S10] [1 nguồn].

### A1. Từng năm (chủ đề, nên làm, nên tránh)

| Năm | Chủ đề và lời khuyên theo nguồn | Đối chiếu |
|---|---|---|
| **1** | Decoz: bước đầu theo hướng mới [S1]. Affinity: khởi đầu mới, cách làm độc lập hơn, muốn tiến lên và khẳng định bản thân [S9]. Bender: khởi đầu, có thể thấy cô đơn; lợi khi độc lập và chủ động [S10]. **Nên:** bắt đầu dự án hoặc việc kinh doanh mới. **Tránh:** khởi động nhiều việc hơn sức theo được ("nhiều cửa mở nhưng không đi qua hết được") [S11]. | [≥2] |
| **2** | Decoz: bảo vệ và vun đắp kế hoạch, khéo léo trong mọi quan hệ [S1]. Affinity: quan hệ, làm việc nhóm, ngoại giao, tế nhị [S9]. Bender: chậm lại, hợp tác, cân bằng cảm xúc, kiên nhẫn, kết nối [S10]. **Tránh:** thúc ép tiến độ (đây là năm tiến chậm). | [≥2] |
| **3** | Decoz: mở rộng, phát triển bản thân, thể hiện bản thân mạnh hơn [S1]. Affinity: năng lượng sáng tạo, năm "nhiều màu sắc, nhiều sự kiện" [S9]. Bender: sáng tạo, vui chơi, giao lưu; có thể lên xuống cảm xúc [S10]. | [≥2] |
| **4** | Decoz: làm việc chăm chỉ, tổ chức, đặt nền móng (sự nghiệp, tài chính, thói quen sức khỏe, việc nhà); lo chi tiết, quản lý thời gian; chuẩn bị cho những thay đổi năm sau; có thể thấy bị giới hạn, bực bội nhưng vẫn có cơ hội phải nắm [S1]. Affinity: làm việc, xây nền an toàn cho tương lai, năng lượng thực tế [S9]. Bender: kỷ luật, công việc, nhà cửa, sức khỏe, gia đình; nỗ lực đều đặn được đền đáp [S10]. **Tránh:** trì hoãn ("năm 4 thưởng cho nỗ lực, phạt sự trì hoãn"; câu này trong kết quả tìm kiếm nhưng không rõ của trang nào) [nguồn không xác định]. | [≥2] |
| **5** | Decoz: năm thay đổi diễn ra liên tục [S1]. Affinity: muốn tự do, thoát khỏi thói quen cũ [S9]. Bender: cơ hội bất ngờ, đi lại, xáo trộn; **nên** linh hoạt nhưng giữ kỷ luật để năm không thành hỗn loạn [S10]. | [≥2] |
| **6** | Decoz: gia đình, trách nhiệm, quan hệ; thường có tiến bộ về tài chính [S1]. Affinity: việc nhà, trách nhiệm gia đình, thiện chí [S9]. Bender: xem lại các mối quan hệ, gánh thêm trách nhiệm gia đình (cưới hỏi, sinh nở, người thân ốm), làm đẹp nhà cửa; **nên** nhận trách nhiệm mà không oán giận hay ôm quá sức [S10]. Trang VN: trang hoàng tổ ấm, thay đổi chỗ ở [S19]. | [≥2] |
| **7** | Decoz: nhìn vào bên trong, dành thời gian cho bản thân hơn là cho các mối quan hệ và thế giới xung quanh [S1]. Affinity: học tập, nội quan, hay phân tích mọi thứ [S9]. Bender: năm lặng, học hỏi, suy ngẫm; **tránh** cố thúc tăng trưởng tài chính hoặc sự nghiệp, để sang năm sau [S10]. VN: chiêm nghiệm, đời sống tinh thần [S19]. | [≥2] |
| **8** | Decoz: mục tiêu thực tế, sự nghiệp, lợi ích vật chất; nỗ lực được đền đáp [S1]. Affinity: kinh doanh, tích lũy, thành tựu, muốn cải thiện tài chính [S9]. Bender: tài chính, quyền lực cá nhân, sự nghiệp; nỗ lực và theo đến cùng quan trọng hơn may mắn; **tránh** kiệt sức [S10]. | [≥2] |
| **9** | Decoz: hoàn tất, giải quyết mọi việc còn dang dở [S1]. Affinity: tinh thần nhân đạo, bao dung, ít phán xét [S9]. Bender: buông bỏ, khép lại, sắp xếp lại đời mình; **không phải** lúc bắt đầu dự án lớn [S10]. VN: tổng kết, buông bỏ để chuẩn bị chu kỳ mới [S19]. **Mâu thuẫn:** một trang khác (không xác định được tên trong đoạn trích) nói năm 9 "dọn chỗ cho ý tưởng mới, người mới, dự án mới". Một trang thứ cấp nói Decoz khuyên không mở việc kinh doanh mới trong năm 9, nhưng chưa thấy câu đó trên trang của Decoz [chưa xác minh]. | [≥2] cho "hoàn tất"; có mâu thuẫn về "tránh bắt đầu việc mới" |

### A2. Diễn biến trong năm: tháng cá nhân, giai đoạn

- **Tháng cá nhân:** có nguồn mô tả. Cách tính: năm cá nhân + số của tháng dương lịch, rút về một chữ số [S2], và cũng là cách phổ biến ở các trang khác [≥2]. Decoz có dự báo theo tháng, cập nhật hằng tháng [S2]. Ví dụ ở nguồn: tháng cá nhân 4 hợp sắp xếp lịch, giấy tờ, thói quen [S1].
- **Điểm gãy tháng 12 sang tháng 1:** vì năm cá nhân đổi vào 1/1, dãy tháng cá nhân không liền mạch qua năm mới (ví dụ tháng 12 rồi đến tháng 1 không phải "tháng kế tiếp" theo số) [S2, đoạn trích] [1 nguồn].
- **Cách tính khác:** một số người tính tháng cá nhân = tháng sinh + ngày sinh + "tháng toàn cầu" (Universal Month) [đoạn trích không rõ tên trang].
- **Giai đoạn trong năm:** Bender viết dự báo theo tháng cho từng năm cá nhân. Ví dụ với năm 6, tháng 9 là lúc "đỉnh" để hành động theo chủ đề quan hệ, gia đình [S10] [1 nguồn]. Ngoài cách chia theo tháng, **không tìm thấy nguồn nào chia năm cá nhân thành các giai đoạn cố định** (như quý hoặc nửa năm).
- Decoz còn có các chu kỳ khác chạy song song (Transit, Essence, Period Cycles, Pinnacles) [S1]. Phần này nằm ngoài phạm vi.

---

## Phần B: Số linh hồn (Soul Urge / Heart's Desire)

**Cách tính và gốc gác:** cộng giá trị các nguyên âm của họ tên khai sinh (A=1, E=5, I=9, O=6, U=3; Y tùy trường hợp), rút gọn nhưng giữ nguyên 11, 22, 33 [S3][S20] [≥2]. Ý "nguyên âm là linh hồn, phụ âm là thân thể, tổng cả tên là ý thức" có trong sách của Balliett năm 1908 [S17]. Theo trang numerologist.com, Balliett chưa dùng tên gọi "Soul Urge" [S17] [1 nguồn]. Affinity coi số này là một khao khát **suốt đời, không bao giờ thỏa mãn hẳn** [S9].

| Số | Mong muốn bên trong theo nguồn | Đối chiếu |
|---|---|---|
| 1 | Decoz: nhu cầu mạnh được độc lập, tự lái cuộc đời theo điều mình tin [S3]. Affinity: muốn tự định hướng đời mình [S9]. VN: khao khát tự chủ, được công nhận là cá thể độc lập; có trang nói là "khát khao chiến thắng" [S20]. | [≥2] |
| 2 | Decoz: hòa bình, hòa hợp, muốn thoải mái và an toàn [S3]. Affinity: muốn có người đồng hành nâng đỡ, sống hòa thuận [S9]. Thêm (không rõ trang): muốn gắn kết; điểm yếu là chiều lòng người đến mức đánh mất mình. | [≥2] |
| 3 | Decoz: thể hiện sáng tạo, kết nối xã hội, vui vẻ, cởi mở [S3]. Affinity: luôn muốn thể hiện bản thân qua giao tiếp, nghệ thuật [S9]. | [≥2] |
| 4 | Decoz: cần ổn định, trật tự, thành quả thực tế; kỷ luật có thể thành quá mức, nhất là trong gia đình [S3]. Affinity: muốn xây tương lai an toàn, không bao giờ thấy "đủ chắc chắn" [S9]. | [≥2] |
| 5 | Decoz: tự do là điều kiện để hạnh phúc; thích thay đổi, đi xa, trải nghiệm mới; dễ thiếu trách nhiệm, không làm đến cùng [S3]. Affinity: muốn tự do cá nhân, dù định nghĩa "tự do" thay đổi theo thời gian [S9]. | [≥2] |
| 6 | Decoz: chăm lo gia đình và người thân, làm cho nhà cửa ấm áp, an toàn; dễ can thiệp quá sâu vào đời người khác [S3]. Affinity: cần một gia đình để chăm sóc, một mái nhà hòa thuận [S9]. | [≥2] |
| 7 | Decoz: cần hiểu biết, chân lý, trí tuệ bên trong; muốn sống nội tâm riêng tư, yên bình; trong quan hệ hay giữ khoảng cách [S3]. Affinity: luôn tìm trí tuệ qua học tập, trải nghiệm, nội quan [S9]. | [≥2] |
| 8 | Decoz: cần thành tựu, quyền hạn, thành công vật chất [S3]. Affinity: muốn làm ăn giỏi và mở rộng ảnh hưởng [S9]. | [≥2] |
| 9 | Decoz: muốn phụng sự thế giới [S3]. Affinity: muốn dùng hiểu biết để phục vụ nhân loại, mong một thế giới của thấu hiểu và tin cậy [S9]. VN: lòng nhân ái, sống có ý nghĩa [S20]. | [≥2] |
| 11 | Decoz: trực giác, tầm nhìn, khao khát giác ngộ [S3]. VN: nhận thức tâm linh mạnh, sống bằng trực giác [S20]. | [≥2] (một nguồn là blog VN) |
| 22 | Decoz: mong tạo ra điều có tác động lâu dài [S3]. VN: khao khát làm việc lớn có ích cho cộng đồng [S20]. **Khác biệt:** một trang (không rõ tên) lại mô tả 22 là muốn được kính trọng, yêu thương, tự hào về gia đình và truyền thống. | [≥2], có dị bản |
| 33 | Decoz: người cho đi, người thầy, "ngọn đèn" cho nhân loại [S3]. VN: kết hợp sự sáng suốt của 11 với khả năng hiện thực hóa của 22, hướng về dẫn dắt tinh thần và chữa lành [S20]. | [≥2] (một nguồn là blog VN) |

Decoz còn có **Minor Soul Urge**, tính từ tên đang dùng hiện nay (không phải tên khai sinh) [S3].

---

## Phần C: Số nhân cách (Personality)

**Cách tính và ý nghĩa:** cộng các phụ âm của họ tên khai sinh [S4][S11][S20] [≥2]. Decoz: đây là mặt người khác thấy trước tiên [S4]. numerologist.com: "chiếc mặt nạ" khi gặp người lạ; đôi khi là phẩm chất mình học cách phô ra hơn là phẩm chất thật [S11]. **Mâu thuẫn:** một trang của Affinity lại gọi đây là "cái nhìn vào con người thật của bạn" [S9]. Decoz có thêm **Minor Personality** (từ tên hiện dùng): phản ánh phần nào cách mình nghĩ hoặc mong người khác nhìn mình [S4].

| Số | Ấn tượng bên ngoài theo nguồn | Đối chiếu |
|---|---|---|
| 1 | Decoz: toát ra vẻ độc lập, lãnh đạo, tiên phong; có thể bị thấy là áp đặt, khó gần [S4]. VN: tự tin, quyết đoán ngay từ lần đầu [S20]. Ngược lại, numerologist.com cho rằng Personality 1 thường **bắt đầu** từ sự phụ thuộc chứ không phải thống trị [S11]. | [≥2], có dị bản |
| 2 | Decoz: hiền, khéo ngoại giao, người khác thấy an toàn, ấm áp; vẻ ngoài thân thiện, không phô trương; nhạy với căng thẳng [S4]. Affinity (từ khóa chung của số 2): "cùng nhau", biết làm việc nhóm [S9]. | [≥2] |
| 3 | **Chưa tìm được trang của Decoz.** Các trang khác: duyên dáng, dí dỏm, hướng ngoại, lạc quan; có thể bị thấy hời hợt [S33]. | [≥2] nhưng nguồn yếu |
| 4 | Decoz: đáng tin cậy; người khác tin ngay vào sự ổn định, chính trực [S4]. numerologist.com: chắc chắn, thực tế, chăm chỉ [S11]. | [≥2] |
| 5 | **Chưa tìm được trang của Decoz.** Trang khác: phiêu lưu, nhiều năng lượng, hơi khó đoán [S33]. | [1 nguồn yếu] |
| 6 | Decoz: ấm áp, công bằng; cần đề phòng bị lợi dụng [S4]. numerologist.com: chăm chỉ, có đạo đức, quan tâm gia đình [S11]. | [≥2] |
| 7 | Decoz: kín đáo, trí thức, hơi khép mình, trong lúc nói chuyện hay hướng vào trong [S4]. numerologist.com: hay suy ngẫm, phân tích, riêng tư, bí ẩn; có thể bị thấy kém ấm áp [S11]. | [≥2] |
| 8 | Decoz: uy quyền tự nhiên, có sức ảnh hưởng, thậm chí làm người khác e ngại [S4]. Trang khác: trông giỏi tiền bạc, sớm được giao trách nhiệm [đoạn trích không rõ trang]. | [≥2], nguồn thứ hai yếu |
| 9 | Decoz: thanh lịch, có sức hút; vóc dáng có thể rất cuốn hút hoặc đẩy người khác ra xa; vẻ kiêu có thể gây ganh tị [S4]. VN: "nhân cách cao quý", giàu lòng nhân hậu [S20]. | [≥2] |
| 11 | Decoz: hiền và ấm, "bến đỗ an toàn"; dễ bị kẻ xấu lợi dụng [S4]. | [1 nguồn] |
| 22 | Decoz: đáng tin cậy, uy quyền điềm tĩnh, vững vàng [S4]. | [1 nguồn] |
| 33 | Decoz: hiện diện như cha mẹ, chở che, "cảng an toàn giữa đám đông"; thường thấy điều tốt ở người khác [S4]. | [1 nguồn] |

---

## Phần D: Số sứ mệnh (Expression / Destiny)

**Cách tính và ý nghĩa:** cộng toàn bộ chữ cái trong họ tên khai sinh [S5][S11][S20] [≥2]. Decoz: cho thấy tài năng, năng lực và cả khuyết điểm có từ lúc sinh [S5]. Phần tóm tắt nói một số nơi gọi là "Destiny number" và mô tả như "mục tiêu ta hướng tới suốt đời". numerologist.com: tên kết hôn, biệt danh, tên nuôi **không** thay được tên khai sinh; viết sai chính tả vẫn tính [S11]. Jordan gọi tổng của tên là "The Destiny Number" (tên chương sách) [S15].

| Số | Năng lực và cách thể hiện theo nguồn | Đối chiếu |
|---|---|---|
| 1 | Decoz: lãnh đạo, độc lập, tham vọng, tự lực [S5]. numerologist.com: người khởi xướng, tiên phong [S11]. VN: khởi xướng, dẫn dắt, đi đầu; bài học là biết nghe đóng góp của người khác [S20]. | [≥2] |
| 2 | Decoz: nhà ngoại giao, nhạy cảm, hợp tác, tế nhị [S5]. Nguồn thứ hai: **chưa có** (numerologist.com có trang nhưng đoạn trích không nêu nội dung). | [1 nguồn] |
| 3 | Decoz: người giao tiếp, sáng tạo, lạc quan, giỏi xã giao [S5]. Nguồn thứ hai: **chưa có**. | [1 nguồn] |
| 4 | Decoz: người xây dựng, thực tế, kỷ luật, ngăn nắp [S5]. numerologist.com: như trên [S11]. | [≥2] |
| 5 | Decoz: thích tự do, dễ thích nghi, ưa phiêu lưu, tò mò [S5]. numerologist.com: "người kết nối", đa năng, nối người với người, ý tưởng với ý tưởng [S11]. | [≥2] |
| 6 | Decoz: người nuôi dưỡng, có trách nhiệm, yêu thương, muốn phục vụ [S5]. numerologist.com: chăm sóc, trách nhiệm, hòa hợp [S11]. | [≥2] |
| 7 | Decoz: người tìm kiếm, phân tích, nội quan, ham hiểu biết [S5]. numerologist.com: nhà phân tích, nghiên cứu, suy nghĩ sâu [S11]. | [≥2] |
| 8 | Decoz: người đạt thành tựu, tham vọng, nhắm mục tiêu [S5]. numerologist.com: nhà điều hành, quản lý nguồn lực và kết quả vật chất [S11]. VN: quản lý, điều hành, thực tế [S20]. | [≥2] |
| 9 | Decoz: người nhân đạo, giàu lòng trắc ẩn, lý tưởng, có chất nghệ sĩ [S5]. numerologist.com: tầm nhìn rộng, thiên về phục vụ và giảng dạy [S11]. VN: nhân ái, phục vụ cộng đồng [S20]. | [≥2] |
| 11 | Decoz: trực giác, cảm hứng, nhạy bén, có ý thức tâm linh [S5]. numerologist.com: người truyền cảm hứng, khuếch đại sự nhạy cảm, khéo léo của số 2 [S11]. VN: số sứ mệnh "trực giác tâm linh nhất" [S20]. | [≥2] |
| 22 | **Chưa tìm được trang Expression 22 của Decoz**; chỉ có "Minor Expression 22": tham vọng, ngăn nắp, gánh được việc lớn [S5]. numerologist.com: "Master Builder", có phẩm chất của 2 và 4, mạnh nhất trong việc biến tầm nhìn thành hiện thực [S11]. VN: tầm nhìn lớn, giỏi tổ chức, xây điều bền lâu [S20]. | [≥2] |
| 33 | **Chưa tìm được trang của Decoz.** numerologist.com: "Master Teacher", phục vụ bằng tình thương và sáng tạo. Nhưng chính trang này nói Avery và Goodwin không coi 33 là số bậc thầy đầy đủ [S11]. | [1 nguồn] |

---

## Phần E: Quy tắc đọc kết hợp mà tài liệu thật sự nêu

### E1. Số lặp lại nhiều lần

- **Trong tên: Hidden Passion (đam mê ẩn).** Decoz: là số xuất hiện nhiều nhất khi đổi các chữ cái của tên sang số; cho thấy một thế mạnh nổi bật, chi phối mong muốn và sự tập trung [S8]. Affinity: cách đếm giống vậy; nếu hòa thì ưu tiên số trùng với số sứ mệnh, linh hồn, nhân cách, chủ đạo (theo thứ tự); nếu không trùng số nào thì người đó có hơn một đam mê ẩn [S9]. [≥2]
- **Mặt ngược lại: Karmic Lessons (bài học nghiệp).** Decoz: là số **vắng mặt** trong tên; có thể có nhiều số hoặc không có số nào. Một báo cáo mẫu nói tác động của bài học nghiệp 4 yếu đi nếu trong các số chính có ít nhất một số 4 [S8] [1 nguồn cho quy tắc giảm nhẹ].
- **Trong biểu đồ ngày sinh (Phillips, dòng phổ biến ở VN):** lưới 9 ô cố định; mỗi chữ số của ngày sinh đặt vào ô của nó; số lặp thì xếp chồng trong cùng ô; số lần xuất hiện được luận giải khác nhau (ví dụ có một số 2 so với hai số 2) [S13] [1 nguồn; chỉ đọc qua đoạn trích và bản tóm tắt]. Lưu ý: diễn giải kiểu "số 1 xuất hiện 2 lần là giỏi giao tiếp, 3 lần là nói nhiều" thuộc **hệ Lo Shu**, không phải của Phillips; không nên trộn hai hệ.
- **Cùng một số ở nhiều chỉ số chính** (ví dụ chủ đạo và linh hồn cùng là 6): chỉ có một trang phổ thông (không xác định được tên trong đoạn trích) nói số lặp sẽ "khuếch đại", lúc đầu thường lộ mặt khó trước, và đưa cách "cộng hai số lại rồi sống theo mặt tích cực của tổng" (6+6=12→3). **Không tìm thấy nguồn uy tín** (Decoz, Jordan, Phillips…) xác nhận quy tắc này.

### E2. Số chủ đạo so với Số linh hồn (con đường và mong muốn)

- **Không tìm thấy quy tắc chuẩn** nào ở Decoz hay các tác giả kinh điển (chỉ đọc qua đoạn trích).
- Các diễn giải lẻ: Life Path là hướng đi lớn, Soul Urge là động lực bên trong [nhiều blog]. Celestia Guide: khi linh hồn trùng chủ đạo thì chủ đề của chủ đạo đậm hơn; ví dụ Life Path 8 + Soul Urge 8 thì tham vọng "thấm mọi tầng", còn Life Path 8 + Soul Urge 2 thì bên trong lại cần gắn kết, dịu dàng [S32] [1 nguồn yếu]. Một bài luận mẫu được gán cho hệ của World Numerology nói rằng chỉ theo đuổi mong muốn mà không tôn trọng con đường thì khó đạt tiềm năng cao nhất [đoạn trích; chưa xác định được URL cụ thể].

### E3. Số linh hồn so với Số nhân cách (bên trong và bên ngoài)

- **Decoz: Heart's Desire / Personality Bridge** = hiệu của hai số (lấy số lớn trừ số nhỏ). Đây là "khoảng cách cần bắc cầu" để bên trong và bên ngoài hòa hợp hơn [S7]. Trong bài mẫu: cầu 0 (hai số trùng) được coi là may mắn; cầu 1 thì nên dựa vào sức mình, quyết đoán và thẳng thắn hơn; cầu 7 chỉ có thể sinh ra từ cặp 8 và 1 hoặc 9 và 2, và được đọc là lời gọi hướng về đời sống tinh thần [S7]. Chưa tìm được diễn giải cho cầu 2–6 và 8.
- numerologist.com: vỏ ngoài (nhân cách) thường che chở cho bên trong (linh hồn); ví dụ nhân cách 1 + linh hồn 2 thì bên ngoài tự lập, bên trong khao khát có người đồng hành; khuyên gọi tên khoảng cách thay vì coi đó là khuyết điểm [S12]. [≥2 cho ý "khoảng cách trong và ngoài"]
- **Mâu thuẫn khi hai số trùng nhau:** một nguồn nói trùng là "hòa hợp may mắn" (giống cầu 0 của Decoz) [S7][S12]; nguồn khác cảnh báo hai số giống nhau khuếch đại nhau mà không có gì cân bằng [S12/đoạn trích].

### E4. Số bậc thầy 11, 22, 33

- **Không rút gọn:** gặp 11, 22, 33 thì giữ nguyên [S3][S6][S20] [≥2].
- **Decoz:** tiềm năng cao đi kèm áp lực ("nồi áp suất"), dễ thấy mình không đủ tốt; 22 là số hứa hẹn nhất nhưng khó sống cho tới nhất; hiếm người phát huy hết trước tuổi 30; có số bậc thầy không bảo đảm điều gì, không có cũng không ngăn được việc đạt tiềm năng [S6]. Decoz coi 33 là số bậc thầy "có ảnh hưởng nhất" [S6].
- **33 có phải số bậc thầy không (mâu thuẫn):** numerologist.com nói Avery chỉ công nhận 11 và 22 (33 "có thể"), Goodwin cũng không coi 33 là số bậc thầy. Trang này đọc 33 là "6 được nhấn mạnh", ghi **33/6**, và cho rằng hình tượng "Master Teacher" là phần thêm vào ở thế kỷ 20 [S11]. Nhưng trang Angel Number 33 cùng website lại gọi 33 là số bậc thầy (tự mâu thuẫn) [S11]. **Quan điểm của Goodwin chỉ là nghe kể lại; chưa đọc được sách của ông.**
- **Dòng Phillips / VN:** số chủ đạo ghi **22/4**; có số 11; bản tóm tắt nhắc cả 10 [S13]. Một trang VN nói hệ này không có số chủ đạo 1. Trang VN khác lại gọi 33 là số Master hiếm nhất (mâu thuẫn trong nguồn VN) [S20].
- **Quan niệm "số bậc thầy sống ở mức số gốc" (11/2, 22/4, 33/6):**
  - Có ký hiệu ghép: Bender (năm cá nhân 11/2, 22/4) [S10]; Phillips (22/4) [S13]; numerologist.com (33/6) [S11]. Millman ghi kiểu "tổng/đích", ví dụ 29/11, nhưng đây là ký hiệu khác [S18].
  - Ý "phải sống tốt ở mức số gốc trước": chỉ một trang phổ thông (tên không xác định được) nói 22 phải sống như 4 (kỷ luật, cấu trúc) trước khi phần 22 "kích hoạt", và nhiều người có 33 sống thoải mái hơn ở mức 6 [1 nguồn yếu]. numerologist.com gần ý này khi đọc 33 là "6 tăng cường" [S11]. Bender: năm 11/2 là "năm 2 mạnh hơn" [S10]. Gần nhất ở Decoz là ý "hiếm khi phát huy trước 30 tuổi" và "áp lực" [S6]. **Không tìm thấy câu nào của Decoz nói rõ "sống ở mức số gốc".**

### E5. Năm cá nhân trùng hoặc lệch với số chủ đạo

- **Không tìm thấy nguồn uy tín.** Một trang phổ thông (không xác định được tên) nói năm cá nhân trùng số chủ đạo hoặc một số chính khác thì năng lượng năm "nhân đôi", cả thuận lợi lẫn trở ngại, và là dịp củng cố mắt xích yếu [1 nguồn yếu]. Một số người hành nghề nói cùng một năm cá nhân (ví dụ 7) sẽ khác nhau với người chủ đạo 1 và người chủ đạo 7 [đoạn trích, nguồn yếu].
- Decoz không dùng phép so sánh năm cá nhân với Life Path; ông kết hợp năm cá nhân với **Essence** và **Transit** (tính từ tên) để dự báo [S1].

### E6. Số chủ đạo so với Số sứ mệnh

- **Decoz: Life Path / Expression Bridge** = hiệu của hai số [S7]. Ví dụ trong nguồn: chủ đạo 1, sứ mệnh 4 thì cầu = 3 [đoạn trích từ trang khác minh họa cùng cách tính]. Một số nơi khác nói cầu nhỏ (0–1) là tài năng khớp với mục đích sống, cầu lớn (≥5) là lệch nhiều [đoạn trích, nguồn yếu].
- **Decoz (bài mẫu):** Expression là "con người bạn" (being), Life Path là bài học lớn đời này [S7]. Life Path là số quan trọng nhất trong biểu đồ [S7/S5]. [1 nguồn]
- Ẩn dụ "Life Path là con đường, Expression là phương tiện" do người hành nghề khác đưa ra [đoạn trích, nguồn yếu].
- Juno Jordan có chương "The Reality Number", "The Destiny Number", "The Birth Force" [S15], nhưng **chưa đọc được nội dung**, nên không nói được bà kết hợp chúng ra sao.

### E7. Tóm tắt "ai nói gì"

| Quy tắc | Decoz | Tác giả khác | Kết luận |
|---|---|---|---|
| Số lặp trong tên (Hidden Passion) | Có [S8] | Affinity [S9] | Có nguồn |
| Số lặp trong biểu đồ ngày sinh | — | Phillips [S13] | Có nguồn (1) |
| Cùng một số ở nhiều chỉ số chính | — | 1 trang phổ thông | Nguồn yếu |
| Chủ đạo và linh hồn | Không thấy quy tắc | Blog [S32] | Không có quy tắc chuẩn |
| Linh hồn và nhân cách | Bridge [S7] | numerologist.com [S12] | Có nguồn |
| Số bậc thầy không rút gọn | Có [S6] | Nhiều [S11][S20] | Có nguồn |
| 11/2, 22/4, 33/6 "sống ở mức gốc" | Không thấy câu rõ | Ký hiệu: Bender, Phillips, numerologist.com; ý "sống ở mức gốc": 1 trang yếu | Ký hiệu có nguồn; ý "sống ở mức gốc" thì nguồn yếu |
| Năm cá nhân và số chủ đạo | Không thấy | 1 trang yếu | Không có nguồn uy tín |
| Chủ đạo và sứ mệnh | Bridge [S7] | — | Có nguồn (Decoz) |

---

## Phần F: Thần số học có cơ sở khoa học không?

### F1. Nguồn tham khảo và học thuật

- **Britannica** định nghĩa thần số học là việc dùng con số để luận tính cách hay đoán tương lai. Bản hiện đại gán chữ số cho tên và ngày sinh để "đoán" bản chất và vận số một người. Thần số học kế thừa arithmomancy (bói số) của người Hy Lạp, Chaldea, Do Thái [S21]. Bài về Neo-Pythagoreanism gọi phép thần bí con số là **"pseudoscience"** (ngụy khoa học). Bài "number symbolism" cho rằng thần số học cho biết cách tâm trí con người vận hành, còn toán học mới giải thích vũ trụ; và Pythagoras có thể là một nhân vật "gộp", tức nhiều phát hiện của người khác được gán cho ông [S21].
- **Underwood Dudley** (nhà toán học, MAA, 1997): sách phê phán thần số học từ góc nhìn toán học. Thông điệp trong phần giới thiệu: con số có sức mạnh với **tâm trí**, không phải với **sự kiện** [S22]. Tức là cái nhãn "Pythagoras" của môn này không dựa trên bằng chứng lịch sử vững chắc.
- **Nguồn gốc hiện đại:** hệ thống chữ cái đổi ra số dùng cho tên được Balliett đưa ra vào đầu thế kỷ 20 (sách 1908) [S17]. Campbell là học trò của Balliett [S16]. Trong cùng đợt tìm kiếm với [S12], có một trang thần số học (đoạn trích không cho biết chính xác là trang nào) thừa nhận không có bằng chứng Pythagoras tạo ra bảng chữ cái này, và bảng được ghép lại vào đầu thế kỷ 20 [nguồn chưa xác định].
- **Nghiên cứu thực nghiệm:** bài 2024 trên *Humanities and Social Sciences Communications* (Nature Portfolio) nói nghiên cứu học thuật nghiêm túc về thần số học "rất hiếm"; phần tổng quan của bài chủ yếu dựa vào sách thần số học cũ, không phải thử nghiệm có đối chứng [S24]. **Không tìm thấy** nghiên cứu bình duyệt nào kiểm tra số chủ đạo với Big Five. Có trang nhắc một nghiên cứu về ngày sinh của người đoạt giải Nobel cho kết quả phân bố như ngẫu nhiên, nhưng **không tìm được bài gốc** nên không dùng.
- **Hiệu ứng Forer/Barnum:** năm 1948–1949, Bertram Forer cho 39 sinh viên cùng nhận một bản "mô tả tính cách riêng" (lấy từ sách chiêm tinh ở sạp báo). Điểm chính xác trung bình họ tự chấm khoảng 4,26/5. Thí nghiệm được lặp lại rất nhiều lần với kết quả tương tự. Paul Meehl đặt tên "Barnum" năm 1956 [S23]. Đây là lời giải thích chính cho việc các bài luận "nghe rất đúng". Lưu ý là thí nghiệm dùng chiêm tinh; **không tìm thấy** thí nghiệm Barnum làm riêng với thần số học.

### F2. Báo chí và chuyên gia Việt Nam

- **VnExpress, podcast "Đoán vận mệnh qua thần số học có chính xác?":** "các nhà khoa học nhận định việc đoán tính cách, số mệnh qua các con số là ngụy khoa học"; các chương bàn về nguồn gốc, đánh giá khoa học và lý do nhiều người thấy "đúng" [S26]. (Chỉ đọc được phần mô tả; chưa biết khách mời.)
- **VnExpress, "Giải mã vận mệnh theo Thần số học có phải mê tín dị đoan không?":** coi thần số học là "một môn, một trường phái nghiên cứu" nhưng có quan điểm xếp vào ngụy khoa học. Ranh giới là khi lạm dụng niềm tin vào con số để tự huyễn hoặc hoặc bi quan hóa số phận thì rơi vào mê tín. Về pháp lý: chưa có văn bản nào định nghĩa "mê tín, dị đoan"; dạy thần số học để thao túng niềm tin có thể bị xử phạt hành chính; Điều 320 Bộ luật Hình sự (tội hành nghề mê tín dị đoan) áp dụng khi đã bị xử phạt hoặc kết án mà còn vi phạm [S25]. Thư Viện Pháp Luật có nhận định tương tự: chưa thể coi là mê tín trừ khi "biến tướng" [S29]. [≥2]
- **Thanh Niên (khoảng 05/07/2026):** nhiều bạn trẻ dùng ChatGPT, trắc nghiệm, **thần số học**, tarot để chọn nghề; chuyên gia hướng nghiệp cảnh báo phụ thuộc hoàn toàn dễ dẫn đến chọn sai. Nhân vật trong bài (23 tuổi) thấy các công cụ này "chung chung" [S27]. (Đoạn trích không nêu tên chuyên gia.)
- **Tuổi Trẻ:** **không tìm thấy bài cảnh báo** về thần số học. Chỉ thấy bài năm 2020 trên Tuổi Trẻ Cười giới thiệu MC Quỳnh Hương chia sẻ về thần số học [S30], cho thấy trào lưu được truyền thông lớn đưa tin từ khoảng 2020. Bài Tuổi Trẻ (Phụ nữ online) "Người trẻ quay cuồng vì xem bói qua mạng" nói về tarot và tử vi, không riêng thần số học.
- **Hiệu ứng Barnum trong nguồn VN:** Long Châu xếp thần số học cùng bói toán, tử vi vào nhóm dựa vào hiệu ứng Barnum [S28]. Vietcetera và Znews giải thích hiệu ứng và khuyên tìm bằng chứng cho cả nhận định tốt lẫn xấu [S28]. Lưu ý các bài VN ghi năm thí nghiệm khác nhau (1948, 1949, có bài ghi 1984). Năm 1948–1949 khớp với [S23].
- **Chuyên gia tâm lý VN đứng tên:** **không tìm thấy** ý kiến chuyên gia tâm lý VN có tên nói riêng về thần số học trong kết quả tìm kiếm.
- **Thương mại hóa:** khóa học thần số học bán công khai với giá từ khoảng 99.000đ đến 7.500.000đ, có khóa quảng cáo giúp học viên "kiếm tiền từ nghề tư vấn" (theo trang bán khóa học trong kết quả tìm kiếm). Một bài trên Spiderum (ý kiến cá nhân) gọi đây là trò "giả danh khoa học" [nguồn yếu].

### F3. Gợi ý dùng cho web

Theo [S21][S22][S23][S24][S25][S26], nên trình bày thần số học là **công cụ gợi suy ngẫm hoặc giải trí, không phải khoa học**. Nên có một đoạn ngắn giải thích hiệu ứng Barnum, và tránh lời khuyên về tài chính, sức khỏe hay chọn nghề mang tính quyết định.

---

## Phụ lục: Chỗ trống cần lấp khi có lượt tìm kiếm hoặc truy cập mạng

1. Mở trực tiếp các trang Decoz: Personality 3, 5; Expression 3, 4, 7, 8, 9, 22, 33; Soul Urge 22 (URL cũ `Numerology-Hearts-Desire-22.html`).
2. Nguồn thứ hai cho Personality 11/22/33, Expression 2/3/33.
3. Đọc nội dung chương "Birth Chart" và "Ruling Number" trong Phillips; xác minh có số chủ đạo 10 và có hay không có số 1.
4. Tìm bài Tuổi Trẻ cảnh báo, và ý kiến chuyên gia tâm lý VN có tên.
5. Đọc sách Goodwin, Jordan, Campbell (archive.org) để xác minh quy tắc kết hợp.
