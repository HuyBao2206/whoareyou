// Hồ sơ nghề nhóm Công nghệ và dữ liệu. Căn cứ: research/nghe-nghiep-ho-so.md mục 2.1–2.6.
// aiText: phân tích tác động của AI theo nhóm nhiệm vụ. Mỗi nhiệm vụ: [tên, mức tác động của AI: 'cao' | 'vua' | 'thap'] theo năm quy tắc trong content.js (AI.rules).
// demand: 1–5 theo thang ở content.js (METHOD). conf: 'kha' | 'tb' | 'yeu' (độ đầy đủ dữ liệu Việt Nam).

export default [
  {
    id: 'lap-trinh',
    name: 'Lập trình viên phần mềm',
    field: 'cntt',
    holland: 'IRC',
    demand: 4,
    conf: 'kha',
    summary:
      'Thiết kế, viết, kiểm thử và bảo trì phần mềm theo yêu cầu của người dùng hoặc khách hàng. Phần lớn thời gian dành cho đọc hiểu yêu cầu, đọc mã của người khác và sửa lỗi, không chỉ viết mã mới.',
    tasks: [
      ['Phân tích yêu cầu, thiết kế giải pháp', 'vua'],
      ['Viết mã theo mẫu, mã lặp lại', 'cao'],
      ['Gỡ lỗi, viết kiểm thử đơn vị', 'cao'],
      ['Thiết kế kiến trúc, cân nhắc đánh đổi kỹ thuật', 'thap'],
      ['Phối hợp với sản phẩm, kiểm thử, vận hành', 'thap'],
      ['Viết tài liệu kỹ thuật', 'cao'],
    ],
    aiText: 'Trợ lý lập trình dựa trên mô hình ngôn ngữ làm nhanh phần viết mã khuôn mẫu, tài liệu và kiểm thử đơn vị, vì đây là nhiệm vụ chữ vào, chữ ra. Phần khó tự động hoá là hiểu nghiệp vụ, chọn kiến trúc và chịu trách nhiệm khi hệ thống lỗi. Một hệ quả được nhắc nhiều ở nước ngoài là vị trí mới vào nghề thu hẹp trước, vì việc từng giao cho người mới nay người có kinh nghiệm làm nhanh hơn với công cụ. Chưa có số liệu Việt Nam để kiểm chứng điều này.',
    entry:
      'Thường là đại học công nghệ thông tin hoặc khoa học máy tính (4 năm); một bộ phận vào nghề qua cao đẳng hoặc khoá học ngắn kèm dự án thực tế. Không có giấy phép hành nghề. Nhà tuyển dụng đánh giá chủ yếu qua bài kiểm tra kỹ thuật, kho mã và dự án đã làm.',
    income:
      'ITviec 2025–2026 (1.839 người làm IT): trung vị của trưởng nhóm kỹ thuật 51,8 triệu đồng/tháng. TopDev 2024–2025 (2.324 người): trung vị lương gộp của lập trình backend khoảng 1.340 USD/tháng, frontend khoảng 1.300 USD. Mức của người mới ra trường chênh nhau lớn giữa các nguồn, chưa đủ tin cậy để nêu.',
    demandWhy:
      'WEF 2025 xếp nhà phát triển phần mềm thứ tư trong nhóm tăng nhanh nhất theo tỷ lệ và trong nhóm tăng nhiều nhất theo số người. Ở Việt Nam, IT – phần mềm chiếm 8,64% nhu cầu tuyển dụng trên nền tảng TopCV và 55% doanh nghiệp IT cho biết thiếu ứng viên kỹ năng cao (2025–2026). Khảo sát ManpowerGroup quý IV/2026 với 285 nhà tuyển dụng tại Việt Nam ghi nhận ngành thông tin có triển vọng việc làm ròng cao nhất (64%).',
    risks: [
      'Cạnh tranh mạnh ở mức mới ra trường, nhất là khi AI làm giảm nhu cầu với việc đơn giản.',
      'Mảng gia công phụ thuộc đơn hàng và chu kỳ cắt giảm của khách nước ngoài.',
      'Làm thêm giờ khi chạy hạn; ngồi lâu, ít vận động.',
    ],
    fit:
      'Thích giải quyết vấn đề logic, làm việc với hệ thống, chịu được việc chi tiết kéo dài. Tận tâm là đặc điểm Big Five dự báo hiệu suất ở mọi nhóm nghề (Barrick và Mount, 1991); chưa có bằng chứng riêng cho nghề này.',
    test: [
      'Làm trọn một sản phẩm nhỏ có người dùng thật (công cụ cho câu lạc bộ, trang bán hàng của người quen) trong 4–6 tuần, đưa mã lên GitHub.',
      'Giải 20–30 bài lập trình cơ bản để biết mình có chịu được việc gỡ lỗi kéo dài hay không.',
      'Hỏi một lập trình viên đang đi làm về tỷ lệ thời gian viết mã mới so với đọc mã, họp và sửa lỗi.',
    ],
    note:
      'Tín hiệu tuyển dụng IT ở Việt Nam và xu hướng quốc tế đều tích cực. Điều chưa rõ là phần tăng ấy đến với người mới ra trường bao nhiêu; người mới nên chứng minh được khả năng làm ra sản phẩm chạy được, thay vì chỉ dựa vào bằng.',
    src: ['wef-2025', 'topcv-2026', 'manpower-q4', 'itviec-2026', 'topdev-2025', 'barrick-1991'],
  },
  {
    id: 'kiem-thu',
    name: 'Kiểm thử phần mềm',
    field: 'cntt',
    holland: 'CIR',
    demand: 3,
    conf: 'tb',
    summary:
      'Bảo đảm phần mềm chạy đúng yêu cầu trước khi phát hành: lập kế hoạch và kịch bản kiểm thử, chạy kiểm thử thủ công hoặc tự động, ghi nhận và theo dõi lỗi.',
    tasks: [
      ['Đọc yêu cầu, viết kịch bản kiểm thử', 'cao'],
      ['Chạy kiểm thử thủ công theo kịch bản', 'cao'],
      ['Viết và duy trì kiểm thử tự động', 'vua'],
      ['Kiểm thử khám phá, đánh giá rủi ro sản phẩm', 'thap'],
      ['Ghi nhận, theo dõi lỗi, báo cáo chất lượng', 'cao'],
    ],
    aiText: 'Viết ca kiểm thử từ đặc tả và chạy kịch bản lặp lại là nhiệm vụ theo mẫu, nên dễ được công cụ sinh tự động. Kiểm thử khám phá, đánh giá rủi ro trước khi phát hành và kiểm thử trên thiết bị thật đòi hỏi phán đoán về hành vi người dùng, khó giao hẳn cho máy. Hướng chuyển dịch của nghề là từ kiểm thử thủ công sang viết kiểm thử tự động và kiểm thử chính các hệ thống AI; chưa có số liệu Việt Nam về tốc độ chuyển.',
    entry:
      'Đại học, cao đẳng công nghệ thông tin, hoặc ngành khác kèm khoá kiểm thử vài tháng. Chứng chỉ ISTQB là điểm cộng, không bắt buộc. Không có giấy phép hành nghề.',
    income:
      'TopDev 2024–2025: trung vị lương gộp của Tester khoảng 980 USD/tháng, QA Engineer khoảng 1.180 USD. Theo hai khảo sát IT, mức lương thấp hơn lập trình viên cùng thâm niên.',
    demandWhy:
      'Chưa có số liệu riêng ở Việt Nam. BLS gộp nghề này với lập trình viên trong dự báo tăng 10% giai đoạn 2025–2035 tại Mỹ.',
    risks: [
      'Kiểm thử thủ công dễ bị coi là việc đầu vào và bị cắt trước khi doanh nghiệp tự động hoá.',
      'Lương thấp hơn lập trình cùng thâm niên; một số nơi coi kiểm thử là bước đệm, không phải nghề lâu dài.',
    ],
    fit:
      'Cẩn thận, thích phát hiện chỗ sai, chịu được việc lặp lại có quy trình. Tận tâm dự báo hiệu suất ở mọi nhóm nghề (Barrick và Mount, 1991).',
    test: [
      'Chọn một ứng dụng quen thuộc, viết 30 ca kiểm thử và báo cáo 5 lỗi thật theo mẫu chuẩn.',
      'Học một công cụ kiểm thử tự động cơ bản (Selenium hoặc Playwright) trong 4 tuần, xem mình thích viết mã hay chỉ thích dò lỗi.',
    ],
    note:
      'Kiểm thử thủ công là phần của nghề chịu sức ép rõ nhất từ tự động hoá. Lối đi hợp lý là chuyển sớm sang kiểm thử tự động hoặc kiểm thử chất lượng hệ thống AI, phần việc khó giao cho công cụ hơn.',
    src: ['topdev-2025', 'bls-2035', 'barrick-1991'],
  },
  {
    id: 'phan-tich-du-lieu',
    name: 'Chuyên viên phân tích dữ liệu',
    field: 'cntt',
    holland: 'ICE',
    demand: 3,
    conf: 'yeu',
    summary:
      'Biến dữ liệu của doanh nghiệp thành câu trả lời cho câu hỏi kinh doanh: làm rõ câu hỏi, lấy và làm sạch dữ liệu, phân tích, dựng báo cáo và trình bày đề xuất.',
    tasks: [
      ['Làm rõ câu hỏi kinh doanh với người ra quyết định', 'thap'],
      ['Viết truy vấn, làm sạch dữ liệu', 'cao'],
      ['Phân tích thống kê mô tả, so sánh', 'vua'],
      ['Dựng báo cáo, bảng điều khiển', 'cao'],
      ['Trình bày kết quả, thuyết phục người nghe', 'thap'],
    ],
    aiText: 'Viết truy vấn SQL, làm sạch dữ liệu và dựng biểu đồ là nhiệm vụ mà mô hình ngôn ngữ làm được ở mức chấp nhận khi dữ liệu rõ ràng. Chọn đúng câu hỏi, hiểu bối cảnh nơi dữ liệu sinh ra và thuyết phục người ra quyết định ít chịu tác động. Khi công cụ tự phục vụ phổ biến, vị trí chỉ làm báo cáo định kỳ sẽ thu hẹp trước.',
    entry:
      'Đại học kinh tế, thống kê, toán tin, công nghệ thông tin; nhiều người học thêm SQL, Power BI hoặc Tableau, Python trong vài tháng. Không có giấy phép hành nghề. Bộ hồ sơ dự án phân tích là lợi thế rõ khi xin việc.',
    income:
      'ITviec 2025–2026: trung vị nhóm Data Analyst, Data Scientist, BI Analyst gộp chung 40,65 triệu đồng/tháng, không tách theo cấp. Mẫu ITviec là người làm trong ngành IT; vị trí phân tích ở ngân hàng, bán lẻ có thể khác. Mức của người mới ra trường chưa có số liệu đủ tin cậy.',
    demandWhy:
      'WEF 2025 xếp chuyên gia dữ liệu lớn đứng đầu nhóm tăng nhanh nhất theo tỷ lệ; BLS dự báo nhà khoa học dữ liệu tăng 35% giai đoạn 2025–2035 tại Mỹ. Chưa có số liệu riêng ở Việt Nam, nên theo quy tắc của bản đồ, nghề được đặt ở mức trung tính dù tín hiệu quốc tế mạnh.',
    risks: [
      'Chức danh rộng: nhiều vị trí mang tên phân tích dữ liệu thực chất là làm báo cáo định kỳ.',
      'Cạnh tranh từ người học khoá ngắn; phần báo cáo thuần dễ bị công cụ tự phục vụ thay thế.',
    ],
    fit:
      'Thích tìm quy luật trong số liệu, chịu được việc làm sạch dữ liệu tỉ mỉ, sẵn sàng trình bày trước người ra quyết định.',
    test: [
      'Lấy một bộ dữ liệu công khai (giá xăng, điểm thi, thời tiết), đặt ba câu hỏi và trả lời bằng một bảng điều khiển đơn giản trong 3 tuần.',
      'Trình bày kết quả cho một người không làm dữ liệu trong 5 phút, xem họ có hiểu và hành động được không.',
    ],
    note:
      'Giá trị của nghề nằm ở khâu đặt câu hỏi và diễn giải, không ở khâu dựng biểu đồ. Người chỉ thạo công cụ sẽ cạnh tranh trực tiếp với AI; người hiểu nghiệp vụ của một ngành cụ thể thì không.',
    src: ['wef-2025', 'bls-2035', 'itviec-2026'],
  },
  {
    id: 'ky-su-ai',
    name: 'Kỹ sư AI, học máy',
    field: 'cntt',
    holland: 'IRC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Xây dựng, huấn luyện, đánh giá và triển khai mô hình học máy vào sản phẩm; ngày càng nhiều vị trí tập trung vào tích hợp mô hình ngôn ngữ lớn có sẵn vào ứng dụng.',
    tasks: [
      ['Xác định bài toán và dữ liệu phù hợp', 'thap'],
      ['Chuẩn bị, gán nhãn dữ liệu huấn luyện', 'vua'],
      ['Huấn luyện, tinh chỉnh mô hình', 'vua'],
      ['Đánh giá mô hình, kiểm tra sai lệch', 'thap'],
      ['Triển khai, theo dõi mô hình trong sản phẩm', 'vua'],
      ['Viết mã tích hợp, thử nghiệm nhanh', 'cao'],
    ],
    aiText: 'Bản thân nghề dùng AI để viết mã và thử nghiệm nhanh hơn. Phần khó tự động hoá là hiểu dữ liệu thật của doanh nghiệp, đánh giá rủi ro khi mô hình sai và chịu trách nhiệm về kết quả. Mức tác động vừa phản ánh việc nghề thay đổi nhanh theo công cụ, không phải nguy cơ bị thay thế.',
    entry:
      'Đại học công nghệ thông tin, khoa học máy tính hoặc toán; vị trí nghiên cứu thường cần thạc sĩ. Không có giấy phép. Dự án, bài báo, kết quả thi (như Kaggle) có giá trị khi xin việc.',
    income:
      'ITviec 2024–2025, kỹ sư AI, trung vị theo kinh nghiệm: 1–2 năm 18,1 triệu; 3–4 năm 34,1 triệu; 5–8 năm 55,2 triệu; trên 8 năm 70,4 triệu đồng/tháng.',
    demandWhy:
      'WEF 2025 xếp chuyên gia AI và học máy trong ba nghề tăng nhanh nhất theo tỷ lệ; khảo sát ManpowerGroup 2026 trên khoảng 39.000 nhà tuyển dụng xếp kỹ năng AI là nhóm khó tuyển nhất. Đó là số toàn cầu về kỹ năng, không về nghề. Chưa có số liệu định lượng về thiếu hụt kỹ sư AI ở Việt Nam, nên theo quy tắc của bản đồ, nghề được đặt ở mức trung tính.',
    risks: [
      'Đòi hỏi nền toán và tự học liên tục; kiến thức lỗi thời nhanh.',
      'Nhiều vị trí mang tên AI thực chất là tích hợp giao diện lập trình có sẵn, ít đụng tới mô hình.',
      'Thị trường nghiên cứu ở Việt Nam nhỏ, cạnh tranh với ứng viên có bằng sau đại học.',
    ],
    fit:
      'Thích toán, thử nghiệm và làm việc với dữ liệu. Theo Barrick và Mount (1991), tính cởi mở liên quan đến kết quả đào tạo, phù hợp với nghề phải học lại liên tục.',
    test: [
      'Hoàn thành một khoá học máy nhập môn có bài tập lập trình và nộp một dự án dự đoán trên dữ liệu thật trong 6–8 tuần.',
      'Đọc lại phần toán (đại số tuyến tính, xác suất) của khoá học; nếu thấy nặng nề, hướng ứng dụng AI vào nghiệp vụ có thể hợp hơn hướng xây mô hình.',
    ],
    note:
      'Tín hiệu quốc tế về nghề và về kỹ năng AI đều mạnh; ở Việt Nam chưa có số đo thiếu hụt. Rào cản là nền toán và tốc độ học lại; chi phí ấy cần được tính trước khi chọn.',
    src: ['wef-2025', 'manpower-talent', 'itviec-2025', 'barrick-1991'],
  },
  {
    id: 'an-ninh-mang',
    name: 'Chuyên viên an ninh mạng',
    field: 'cntt',
    holland: 'ICR',
    demand: 4,
    conf: 'tb',
    summary:
      'Bảo vệ hệ thống, mạng và dữ liệu của tổ chức: triển khai biện pháp bảo vệ, giám sát và phát hiện tấn công, điều tra và xử lý sự cố, đánh giá lỗ hổng, đào tạo người dùng.',
    tasks: [
      ['Giám sát, phân loại cảnh báo', 'cao'],
      ['Điều tra, xử lý sự cố', 'thap'],
      ['Đánh giá lỗ hổng, kiểm thử xâm nhập', 'vua'],
      ['Xây dựng chính sách, bảo đảm tuân thủ', 'vua'],
      ['Triển khai, cấu hình biện pháp bảo vệ', 'vua'],
    ],
    aiText: 'AI hỗ trợ phân loại cảnh báo và đọc nhật ký hệ thống, nơi khối lượng dữ liệu vượt sức người. Đồng thời kẻ tấn công cũng dùng AI, làm tăng số vụ và độ tinh vi. Điều tra sự cố, quyết định cô lập hệ thống và chịu trách nhiệm tuân thủ vẫn do người làm.',
    entry:
      'Đại học an toàn thông tin hoặc công nghệ thông tin. Chứng chỉ quốc tế (CompTIA Security+, CEH, OSCP, CISSP) là thước đo thực tế của thị trường, không bắt buộc theo luật. Thường cần vài năm làm hệ thống hoặc mạng trước khi chuyên sâu.',
    income:
      'ITviec 2024–2025: trung vị của kỹ sư, chuyên gia tư vấn bảo mật 60,6 triệu đồng/tháng ở mốc khoảng 8 năm kinh nghiệm. Mức đầu vào chưa có số liệu đủ tin cậy.',
    demandWhy:
      'Theo báo chí dẫn khảo sát của Hiệp hội An ninh mạng quốc gia (12/2025), khoảng 48% cơ quan, doanh nghiệp được hỏi thiếu nhân sự an ninh mạng. WEF 2025 đưa chuyên gia quản lý an ninh vào năm nghề tăng nhanh nhất; BLS dự báo nghề này tại Mỹ tăng khoảng 28,5% giai đoạn 2024–2034. Con số “thiếu 700.000 chuyên gia” xuất hiện nhiều trên báo nhưng không rõ nguồn gốc, nên không dùng.',
    risks: [
      'Trực ca, áp lực cao khi có sự cố; trách nhiệm lớn khi để lộ dữ liệu.',
      'Phải cập nhật liên tục; chứng chỉ quốc tế tốn kém.',
      'Khó vào thẳng từ trường: phần lớn vị trí cần kinh nghiệm hệ thống trước.',
    ],
    fit:
      'Thích điều tra, tìm nguyên nhân, làm việc có quy trình, bình tĩnh khi có sự cố.',
    test: [
      'Tham gia vài giải CTF (thi an toàn thông tin) cho người mới trong 2 tháng.',
      'Tự dựng một phòng thí nghiệm nhỏ (máy ảo, mạng nội bộ) và thực hành theo giáo trình Security+.',
    ],
    note:
      'Thiếu hụt nhân lực có số liệu khảo sát và nhu cầu tăng theo số vụ tấn công. Con đường vào nghề thường đi qua vài năm quản trị hệ thống, nên cần tính thời gian đó vào kế hoạch.',
    src: ['nca', 'wef-2025', 'bls-2034', 'itviec-2025'],
  },
  {
    id: 'vi-mach',
    name: 'Kỹ sư thiết kế vi mạch bán dẫn',
    field: 'cntt',
    holland: 'IRC',
    demand: 4,
    conf: 'kha',
    summary:
      'Thiết kế và kiểm chứng chip: đặc tả, thiết kế logic bằng ngôn ngữ mô tả phần cứng, kiểm chứng thiết kế, thiết kế vật lý, làm việc với công cụ thiết kế tự động (EDA) và quy trình của xưởng đúc.',
    tasks: [
      ['Đặc tả, thiết kế kiến trúc chip', 'thap'],
      ['Thiết kế logic bằng ngôn ngữ mô tả phần cứng', 'vua'],
      ['Kiểm chứng thiết kế', 'vua'],
      ['Thiết kế vật lý, bố trí', 'vua'],
      ['Phối hợp với xưởng đúc, đóng gói, kiểm thử', 'thap'],
    ],
    aiText: 'Công cụ EDA tích hợp AI đã hỗ trợ tối ưu bố trí và sinh mã kiểm chứng, nên khâu thiết kế vật lý và kiểm chứng theo mẫu chịu tác động vừa. Thiết kế kiến trúc và kiểm chứng hệ thống phức tạp vẫn cần kỹ sư giàu kinh nghiệm. Chưa có số liệu phơi nhiễm riêng cho nghề.',
    entry:
      'Đại học điện tử viễn thông, kỹ thuật máy tính, vật lý kỹ thuật. Không có giấy phép hành nghề. Thời gian doanh nghiệp đào tạo thêm trước khi giao việc thật chưa có số liệu đủ tin cậy.',
    income: null,
    demandWhy:
      'Quyết định 1017/QĐ-TTg (9/2024) đặt mục tiêu đào tạo ít nhất 50.000 nhân lực trình độ đại học trở lên cho công nghiệp bán dẫn đến năm 2030, trong đó 15.000 người cho khâu thiết kế. Hiện trạng được báo chí dẫn là khoảng 5.500 kỹ sư thiết kế chip cuối năm 2023. Tuy vậy, VnEconomy (7/2026) ghi nhận thị trường thừa kỹ sư thiết kế vật lý, thiếu người có kinh nghiệm thiết kế kiến trúc.',
    risks: [
      'Ngành chu kỳ; phần lớn việc làm ở công ty nước ngoài, phụ thuộc quyết định đầu tư toàn cầu.',
      'Nguy cơ đào tạo vượt nhu cầu ở khâu dễ, trong khi khâu khó cần nhiều năm kinh nghiệm.',
      'Lộ trình lên vị trí kiến trúc rất dài.',
    ],
    fit:
      'Thích vật lý, mạch điện, làm việc chính xác với công cụ chuyên dụng trong thời gian dài.',
    test: [
      'Học một khoá Verilog hoặc VHDL nhập môn và hoàn thành thiết kế một mạch nhỏ trên công cụ mô phỏng miễn phí.',
      'Tham gia chương trình thực tập hoặc ngày hội tuyển dụng của doanh nghiệp bán dẫn để biết khâu nào đang tuyển nhiều.',
    ],
    note:
      'Mục tiêu chính sách tạo ra nhu cầu đào tạo lớn, nhưng nhu cầu tuyển dụng thật phụ thuộc vào đầu tư của các tập đoàn nước ngoài. Người theo ngành nên nhắm vào khâu khó (kiến trúc, kiểm chứng hệ thống) thay vì khâu đang có dấu hiệu dư thừa.',
    src: ['qd1017', 'chip-vne'],
  },
];
