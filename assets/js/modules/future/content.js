// Chữ của thẻ Nghề nghiệp hôm nay & ngày mai (trừ hồ sơ từng nghề: xem jobs/*.js).
// Thẻ kiến thức: giọng chuẩn mực, trung tính; mọi số liệu ghi năm, phạm vi và nguồn (khoá trong SOURCES).
// Căn cứ: research/nghe-nghiep.md, research/nghe-nghiep-ho-so.md. Cập nhật hằng năm theo mục "Cách cập nhật" ở cuối hai file đó.

export const UPDATED = '10/2026';

export const INTRO = {
  eyebrow: 'Thẻ 05 · Future of Work',
  title: 'Bản tin dự báo nghề nghiệp',
  lead:
    'Bức tranh thị trường lao động Việt Nam, cơ chế AI làm thay đổi công việc và hồ sơ 41 nghề thuộc tám lĩnh vực, từ công nghệ đến dịch vụ và sản xuất. Mỗi nghề có hai chỉ số: triển vọng nhu cầu và mức tiếp xúc với AI, kèm căn cứ để kiểm tra lại.',
  asOf: 'Số liệu cập nhật đến tháng 10/2026',
  privacy: 'Trang không thu thập thông tin cá nhân. Mã Holland (nếu có) chỉ được đọc từ tab đang mở để lọc sẵn danh sách nghề.',
};

/** Dải chỉ số đầu trang. */
export const KPIS = [
  { value: '54,1 triệu', label: 'Lực lượng lao động', note: 'Quý III/2026, người từ 15 tuổi', src: ['nso-q3'] },
  { value: '9,2 triệu đồng', label: 'Thu nhập bình quân tháng', note: 'Quý III/2026, mọi lao động có việc làm', src: ['nso-q3'] },
  { value: '60,6%', label: 'Lao động phi chính thức', note: 'Quý III/2026; năm 2025 là 63,1%', src: ['nso-q3', 'nso-2025'] },
  { value: '30,4%', label: 'Lao động có bằng cấp, chứng chỉ', note: 'Quý III/2026', src: ['nso-q3'] },
  { value: '9,07%', label: 'Thất nghiệp thanh niên 15–24 tuổi', note: 'Quý III/2026 (một bảng tổng hợp ghi 8,87% cho 9 tháng); mức chung 2,22%', src: ['nso-q3'] },
  { value: '20,8%', label: 'Việc làm có tiếp xúc với AI tạo sinh', note: 'ILO, dữ liệu Việt Nam 2024', src: ['ilo-vn'] },
];

/* ---------- Bức tranh chung ---------- */
// Mỗi đoạn: { text, src }. src là khoá trong SOURCES, hiện thành chú thích nhỏ cuối đoạn.

export const MARKET = {
  title: 'Thị trường lao động Việt Nam',
  lead: 'Thất nghiệp thấp chưa nói lên chất lượng việc làm. Ba chỉ số đáng theo dõi hơn là tỷ lệ phi chính thức, trình độ chuyên môn và chênh lệch thu nhập.',
  paragraphs: [
    {
      text: 'Quý III/2026, lực lượng lao động từ 15 tuổi trở lên khoảng 54,1 triệu người, trong đó gần 53,0 triệu người có việc làm. Khu vực nông, lâm, thủy sản chiếm 25,1% việc làm, công nghiệp và xây dựng 33,9%, dịch vụ khoảng 41%. Tỷ trọng việc làm nông nghiệp giảm 3,4 điểm phần trăm từ năm 2021 đến năm 2025, còn 25,7%.',
      src: ['nso-q3', 'nso-2025-pt'],
    },
    {
      text: 'Chênh lệch thu nhập giữa các khu vực lớn. Quý III/2026, thu nhập bình quân tháng của lao động nông, lâm, thủy sản là 5,4 triệu đồng, của công nghiệp và xây dựng 9,9 triệu, của dịch vụ 10,9 triệu. Khoảng cách này là một lý do khiến lao động tiếp tục rời nông nghiệp.',
      src: ['nso-q3'],
    },
    {
      text: 'Tỷ lệ thất nghiệp trong độ tuổi lao động chỉ 2,22%, nhưng 60,6% người có việc làm thuộc khu vực phi chính thức, tức không có hợp đồng lao động hoặc không được đóng bảo hiểm xã hội. Phần lớn người lao động không có trợ cấp đủ để thất nghiệp lâu, nên chấp nhận việc thu nhập thấp, thiếu bảo đảm. Tỷ lệ này giảm dần (63,1% năm 2025), nhưng vẫn đủ cao để các số liệu quốc tế về mất việc, thất nghiệp cần được đọc thận trọng khi áp vào Việt Nam.',
      src: ['nso-q3', 'nso-2025'],
    },
    {
      text: 'Chỉ 30,4% lao động có bằng cấp hoặc chứng chỉ chuyên môn (quý III/2026); bảy trên mười người đang làm việc không qua đào tạo có văn bằng. Thanh niên 15–24 tuổi thất nghiệp 9,07%, gấp khoảng bốn lần mức chung, phản ánh giai đoạn chuyển từ học sang làm: thiếu kinh nghiệm, kỹ năng chưa khớp với vị trí tuyển. Đáng lưu ý hơn là 11,2% thanh niên, khoảng 1,6 triệu người, không học và không làm việc.',
      src: ['nso-q3'],
    },
    {
      text: 'Thu nhập bình quân 9,2 triệu đồng/tháng là con số do người lao động tự khai trong Điều tra lao động việc làm, gồm cả khu vực phi chính thức. Quý III/2026, thu nhập của nam cao hơn của nữ khoảng 1,3 lần, của thành thị cao hơn nông thôn khoảng 1,3 lần. Các khảo sát lương của công ty tuyển dụng cho kết quả cao hơn nhiều, vì mẫu chỉ gồm người làm văn phòng ở khu vực chính thức tại thành phố lớn; khi đọc một mức lương, cần xem mẫu khảo sát trước khi so sánh.',
      src: ['nso-q3', 'nso-2025'],
    },
  ],
  takeaway:
    'Số liệu chung cho thấy khoảng cách thu nhập lớn giữa nông nghiệp và hai khu vực còn lại, và phần lớn lao động chưa có văn bằng chuyên môn hay việc làm chính thức. Thu nhập theo trình độ đào tạo có trong báo cáo Điều tra lao động việc làm năm, chưa được đưa vào lần cập nhật này; nên tra bảng đó trước khi so sánh lợi ích của từng con đường học.',
};

export const GLOBAL = {
  title: 'Nghề tăng, nghề giảm trên thế giới',
  lead: 'Báo cáo được dẫn nhiều nhất là Future of Jobs 2025 của Diễn đàn Kinh tế Thế giới (WEF). Đây là kỳ vọng của doanh nghiệp lớn, không phải dự báo kinh tế lượng.',
  paragraphs: [
    {
      text: 'WEF khảo sát hơn 1.000 doanh nghiệp lớn, đại diện hơn 14 triệu lao động ở 55 nền kinh tế. Theo kỳ vọng của các doanh nghiệp này, giai đoạn 2025–2030 thế giới tạo thêm 170 triệu việc làm và mất 92 triệu, ròng tăng 78 triệu, tương đương 7% số việc làm hiện có. “Mất 92 triệu việc” là số vị trí bị dịch chuyển, không đồng nghĩa với 92 triệu người thất nghiệp.',
      src: ['wef-2025'],
    },
    {
      text: 'Nhóm tăng nhanh nhất theo tỷ lệ là chuyên gia dữ liệu lớn, kỹ sư công nghệ tài chính, chuyên gia AI và học máy, nhà phát triển phần mềm. Tỷ lệ tăng cao một phần vì các nghề này xuất phát từ quy mô nhỏ. Nhóm tăng nhiều nhất theo số người lại là những nghề đông lao động: lao động nông nghiệp, tài xế giao hàng, nhà phát triển phần mềm, công nhân xây dựng, nhân viên bán hàng.',
      src: ['wef-2025'],
    },
    {
      text: 'Giảm nhanh nhất theo tỷ lệ là nhân viên bưu chính, giao dịch viên ngân hàng, nhân viên nhập liệu; giảm nhiều nhất theo số người là thu ngân, bán vé, trợ lý hành chính và thư ký. Điểm chung là nhiệm vụ lặp lại, theo quy tắc, dễ chuyển sang phần mềm, thanh toán số và dịch vụ tự phục vụ.',
      src: ['wef-2025'],
    },
    {
      text: 'Ở Việt Nam, một số tín hiệu đi cùng chiều. Theo báo chí dẫn báo cáo của các ngân hàng, năm 2025 VietinBank đóng 108 phòng giao dịch, Vietcombank dừng 27 điểm giao dịch; khảo sát của Ngân hàng Nhà nước quý I/2025 ghi nhận hơn 21% ngân hàng tiếp tục giảm nhân sự. Ngược lại, kết luận “lao động nông nghiệp tăng nhiều nhất” không khớp với Việt Nam, nơi tỷ trọng việc làm nông nghiệp giảm đều qua các năm.',
      src: ['bank-branches', 'wef-2025', 'nso-2025-pt'],
    },
    {
      text: 'Mẫu WEF chỉ phản ánh doanh nghiệp lớn ở khu vực chính thức. Với 60,6% lao động phi chính thức (quý III/2026) và một phần tư làm nông nghiệp, Việt Nam chỉ nên dùng báo cáo này để đọc hướng đi của nhu cầu kỹ năng, không dùng tỷ lệ của nó làm dự báo cho thị trường trong nước.',
      src: ['wef-2025', 'nso-q3'],
    },
  ],
  takeaway:
    'Danh sách “nghề tăng nhanh” toàn cầu cho biết nhu cầu đang dịch chuyển về đâu, nhưng phần lớn việc làm ở Việt Nam vẫn nằm trong dịch vụ (khoảng 41%), công nghiệp và xây dựng (33,9%), nông nghiệp (25,1%) (quý III/2026). Cần đối chiếu mỗi xu hướng quốc tế với số liệu trong nước trước khi dựa vào nó.',
};

export const AI = {
  title: 'AI thay đổi công việc theo cơ chế nào',
  lead: 'Một nghề là một tập hợp nhiệm vụ. AI hiếm khi thay cả nghề; nó thay một số nhiệm vụ, hỗ trợ một số khác và làm nảy sinh nhiệm vụ mới.',
  paragraphs: [
    {
      text: 'Cách tiếp cận theo nhiệm vụ do Autor, Levy và Murnane (2003) đề xuất cho thấy máy tính thay thế nhiệm vụ lặp lại theo quy tắc và bổ trợ nhiệm vụ phân tích, giao tiếp. Acemoglu và Restrepo (2019) bổ sung hai hiệu ứng ngược chiều: hiệu ứng thay thế làm giảm nhu cầu lao động ở nhiệm vụ được tự động hoá, hiệu ứng tạo nhiệm vụ mới làm tăng nhu cầu ở chỗ khác. Tác động ròng lên một nghề phụ thuộc vào việc nhiệm vụ nào chiếm phần lớn thời gian làm việc.',
      src: ['autor-2003', 'acemoglu-2019'],
    },
    {
      text: 'AI tạo sinh mở rộng phạm vi ấy sang nhiệm vụ nhận thức: soạn thảo, tóm tắt, dịch, viết mã, trả lời theo kịch bản. Chỉ số của Tổ chức Lao động Quốc tế (ILO) năm 2025 chấm gần 30.000 nhiệm vụ và ước tính khoảng một phần tư việc làm toàn cầu thuộc nghề có tiếp xúc với AI tạo sinh, 34% ở nước thu nhập cao và 11% ở nước thu nhập thấp. Chỉ 3,3% việc làm toàn cầu thuộc nhóm tiếp xúc cao nhất, tập trung ở nhân viên văn phòng.',
      src: ['ilo-wp140'],
    },
    {
      text: 'Với Việt Nam, bản tin của ILO (4/2026) dựa trên Điều tra lao động việc làm 2024 ước tính 20,8% việc làm, khoảng 11,5 triệu người, thuộc nghề có tiếp xúc; 1,8% thuộc nhóm cao nhất. Tỷ lệ ở nữ (24,1%) cao hơn nam (17,8%), một phần do nữ làm việc văn phòng nhiều hơn. Gần hai phần ba nhân viên hỗ trợ văn phòng làm nghề thuộc nhóm dễ tự động hoá nhất. Tỷ lệ thấp hơn mức toàn cầu (25%) một phần do nhiều lao động Việt Nam làm việc tay chân, nông nghiệp, ít nhiệm vụ trên máy tính.',
      src: ['ilo-vn'],
    },
    {
      text: '“Tiếp xúc” không đồng nghĩa với mất việc. ILO kết luận kịch bản khả dĩ nhất là nội dung công việc thay đổi; số việc làm ở các ngành tiếp xúc cao tại Việt Nam vẫn tăng giai đoạn 2022–2024. Mức ứng dụng trong doanh nghiệp còn sớm: khảo sát 1.000 lãnh đạo doanh nghiệp của Strand Partners (2026), do một nhà cung cấp dịch vụ đám mây đặt hàng và dùng định nghĩa “dùng AI” rộng, cho kết quả 26% doanh nghiệp đã dùng AI, trong đó 61% vẫn ở giai đoạn thử nghiệm.',
      src: ['ilo-vn', 'strand-2026'],
    },
    {
      text: 'WEF và PwC (6/2026) cho rằng vị trí mới vào nghề dễ chịu sức ép sớm, vì nhiệm vụ thường giao cho người mới (soạn nháp, tổng hợp, nhập liệu, kiểm tra theo mẫu) cũng là phần dễ giao cho AI nhất. Báo cáo ước tính 37% lao động 15–24 tuổi trên thế giới làm nghề có mức tiếp xúc từ trung bình trở lên. Chưa có số liệu riêng cho Việt Nam.',
      src: ['wef-pwc-2026'],
    },
    {
      text: 'Các con số tiếp xúc không so sánh trực tiếp được với nhau. Quỹ Tiền tệ Quốc tế (IMF, 2024) ước tính gần 40% việc làm toàn cầu tiếp xúc với AI, 60% ở nền kinh tế phát triển, nhưng dùng định nghĩa rộng hơn ILO và tính cả các dạng AI không tạo sinh.',
      src: ['imf-2024'],
    },
  ],
  rules: {
    title: 'Năm quy tắc dùng khi chấm từng nhiệm vụ',
    items: [
      'Đầu vào và đầu ra đều là chữ, số, ảnh trên máy tính, làm theo mẫu: mức tác động cao.',
      'Cần thao tác vật lý trong môi trường thay đổi (công trường, nhà khách, phòng bệnh): mức thấp, vì robot cho các việc này còn đắt và kém linh hoạt.',
      'Cần ký tên, có giấy phép, chịu trách nhiệm pháp lý: AI làm phần nháp, người vẫn phải duyệt; mức vừa.',
      'Cần tạo niềm tin, thương lượng, chăm sóc trực tiếp: mức thấp.',
      'Tác động đến từ phần mềm tự phục vụ, robot hay nền tảng số (không chỉ AI tạo sinh) cũng được tính.',
    ],
  },
  takeaway:
    'Câu hỏi hữu ích không phải là nghề nào bị AI thay thế, mà là trong nghề mình định theo, phần việc nào sẽ chuyển cho máy và phần việc nào người làm nghề cần giỏi hơn. Hồ sơ từng nghề bên dưới trả lời câu hỏi đó theo từng nhóm nhiệm vụ.',
};

export const SKILLS = {
  title: 'Kỹ năng nhà tuyển dụng cần',
  lead: 'Các khảo sát quốc tế và khảo sát tuyển dụng tại Việt Nam cùng nhắc đến ba nhóm: tư duy phân tích và giải quyết vấn đề, khả năng thích ứng, năng lực số và AI.',
  paragraphs: [
    {
      text: 'Trong Future of Jobs 2025, tư duy phân tích đứng đầu danh sách kỹ năng cốt lõi, khoảng 7 trên 10 doanh nghiệp được hỏi coi là thiết yếu (theo các bản tóm tắt báo cáo); khả năng phục hồi, linh hoạt và thích ứng xếp ngay sau. Doanh nghiệp dự kiến khoảng 39% kỹ năng cốt lõi của người lao động thay đổi đến năm 2030; cứ 100 lao động thì 59 người cần đào tạo lại hoặc đào tạo thêm.',
      src: ['wef-2025'],
    },
    {
      text: 'Khảo sát 375 doanh nghiệp tại Việt Nam của Trường Đại học Anh Quốc Việt Nam (BUV, một trường tư) và Decision Lab, công bố 10/2026 và được báo chí dẫn lại, cho thấy cử nhân mới ra trường chỉ đạt kỳ vọng ở 1 trong 7 năng lực được đánh giá (áp dụng công nghệ). Khoảng trống lớn nhất nằm ở quản lý thời gian (80% doanh nghiệp coi trọng, sinh viên thể hiện được 54%) và giải quyết vấn đề (84% so với 61%). 94% nhà tuyển dụng đòi hỏi năng lực số và AI cao hơn hai, ba năm trước.',
      src: ['buv-2026'],
    },
    {
      text: 'Báo cáo Lương và Thị trường lao động 2026 của Navigos Group (hơn 1.600 ứng viên, hơn 250 doanh nghiệp) ghi nhận 76,8% doanh nghiệp coi khả năng hiểu và ứng dụng công nghệ là tiêu chí ưu tiên hàng đầu. Trên toàn cầu, khảo sát khoảng 39.000 nhà tuyển dụng của ManpowerGroup năm 2026 lần đầu xếp kỹ năng AI là nhóm khó tuyển nhất.',
      src: ['navigos-2026', 'manpower-talent'],
    },
    {
      text: 'Tiếng Anh vẫn là điểm nghẽn. Theo Chỉ số thông thạo tiếng Anh EF EPI 2025, Việt Nam đạt 500 điểm, xếp 64/123, thuộc nhóm trung bình; nghe (470) và nói (461) thấp hơn đọc (522) và viết (508). EF EPI dựa trên người tự làm bài kiểm tra trực tuyến, không đại diện cho toàn bộ dân số, nên chỉ nên đọc như một chỉ báo xu hướng.',
      src: ['ef-epi-2025'],
    },
  ],
  takeaway:
    'Các khảo sát trên đều hỏi doanh nghiệp, phần lớn ở khu vực chính thức và thành phố lớn. Chúng cho biết kỹ năng nào đang được nhắc nhiều, chưa cho biết kỹ năng nào làm tăng thu nhập ở Việt Nam. Thẻ “Kỹ năng nên đầu tư” đi tiếp từ điểm này, với thang tự chấm và lộ trình cụ thể.',
};

/* ---------- Bản đồ và hồ sơ ---------- */

export const MAP = {
  title: 'Bản đồ 41 nghề',
  lead: 'Trục ngang là triển vọng nhu cầu tại Việt Nam đến khoảng năm 2030, trục dọc là mức tiếp xúc với AI và tự động hoá của các nhiệm vụ trong nghề. Chạm hoặc rê vào một chấm để xem tóm tắt; bấm để mở hồ sơ.',
  axisX: 'Triển vọng nhu cầu',
  axisY: 'Mức tiếp xúc với AI',
  xLow: 'Thu hẹp',
  xHigh: 'Tăng mạnh',
  yLow: 'Ít',
  yHigh: 'Nhiều',
  quadrants: {
    'grow-safe': 'Nhu cầu tăng, mức tiếp xúc với AI thấp hoặc vừa',
    'grow-change': 'Nhu cầu tăng, nhiều nhiệm vụ tiếp xúc với AI',
    'shrink-change': 'Nhu cầu đi ngang hoặc giảm, nhiều nhiệm vụ tiếp xúc với AI',
    'shrink-safe': 'Nhu cầu đi ngang hoặc giảm, mức tiếp xúc thấp hoặc vừa',
  },
  fields: 'Lĩnh vực',
  all: 'Tất cả',
  holland: 'Theo mã Holland',
  hollandHint: 'Nhập mã 1–3 chữ (vd SAE) hoặc làm thẻ Sở thích nghề nghiệp để lọc sẵn.',
  hollandFrom: (code) => `Đang lọc theo mã ${code} lấy từ thẻ Sở thích nghề nghiệp trong tab này.`,
  hollandNone: 'Không có nghề nào trong danh sách khớp đủ với mã này. Thử bỏ bớt chữ cuối.',
  weak: 'Chấm rỗng: dữ liệu Việt Nam còn yếu, vị trí trên trục nhu cầu kém chắc chắn hơn.',
  listToggle: 'Xem dạng bảng',
  listTitle: 'Bảng 41 nghề',
};

export const METHOD = {
  title: 'Cách đọc bản đồ',
  paragraphs: [
    'Triển vọng nhu cầu (1–5) là đánh giá tổng hợp của biên tập dựa trên tín hiệu Việt Nam trước, tín hiệu quốc tế sau. Tín hiệu Việt Nam gồm: mục tiêu nhân lực trong quyết định của Chính phủ, số liệu thiếu hụt của bộ ngành, thay đổi số người làm nghề, số liệu đóng cửa hoặc cắt giảm nhân sự, báo cáo tuyển dụng có nêu cỡ mẫu. Tín hiệu quốc tế gồm danh sách tăng, giảm của WEF Future of Jobs 2025 và dự báo của Cục Thống kê Lao động Mỹ (BLS, kỳ 2024–2034 hoặc 2025–2035, ghi rõ ở từng nghề), chỉ dùng để tham khảo hướng.',
    'Thang đo: 5 là có cả mục tiêu chính sách hoặc thiếu hụt định lượng ở Việt Nam lẫn xu hướng tăng toàn cầu; 4 là có tín hiệu tăng hoặc thiếu hụt rõ ở Việt Nam; 3 là tín hiệu trái chiều hoặc ổn định; 2 là có dấu hiệu bão hoà, co hẹp ở Việt Nam hoặc giảm rõ trên thế giới; 1 là đã có số liệu cắt giảm ở Việt Nam trùng với xu hướng giảm toàn cầu. Nghề thiếu số liệu Việt Nam được đặt ở mức 3 dù tín hiệu quốc tế mạnh hay yếu, và vẽ bằng chấm rỗng; tín hiệu quốc tế khi đó chỉ được ghi trong hồ sơ.',
    'Mức tiếp xúc với AI (1–5), hiển thị là “gió AI”, được tính từ bảng nhiệm vụ trong hồ sơ mỗi nghề. Mỗi nhóm nhiệm vụ được chấm cao, vừa hoặc thấp theo năm quy tắc ở mục AI; chỉ số bằng 1 + 4 × (số nhiệm vụ cao + một nửa số nhiệm vụ vừa) ÷ tổng số nhiệm vụ, làm tròn đến nửa bậc. Các nhóm nhiệm vụ được tính ngang nhau, chưa theo tỷ lệ thời gian làm việc vì chưa có số liệu thời gian cho từng nghề ở Việt Nam; vì vậy chỉ số dùng để so các nghề với nhau theo hướng, không nên đọc như một phép đo. Cách chấm dựa trên khung theo nhiệm vụ của ILO (2025); bảng chỉ số cấp nghề của ILO chưa đối chiếu được trong lần cập nhật này, nên mức của từng nghề là suy luận theo nhóm nghề, không phải số do ILO công bố. Chỉ số đo mức tiếp xúc, không đo khả năng mất việc.',
    'Mã Holland của mỗi nghề do biên tập suy ra từ nhóm nhiệm vụ, theo cách O*NET gán mã sở thích; chưa đối chiếu được với cơ sở dữ liệu O*NET trong lần cập nhật này. Dùng mã để thu hẹp danh sách cần tìm hiểu, không dùng để loại trừ nghề.',
    'Bản đồ không dự báo thu nhập hay khả năng xin việc của từng người. Một nghề ở góc “nhu cầu giảm” vẫn cần người giỏi; một nghề ở góc “nhu cầu tăng” vẫn có người không tìm được việc.',
  ],
};

export const PROFILE = {
  title: 'Hồ sơ nghề',
  pick: 'Chọn nghề',
  forecast: 'Dự báo',
  demand: 'Triển vọng nhu cầu',
  ai: 'Gió AI (mức tiếp xúc)',
  nature: 'Bản chất công việc',
  tasks: 'Nhiệm vụ chính và tác động của AI',
  taskLevel: { cao: 'Tác động cao', vua: 'Tác động vừa', thap: 'Tác động thấp' },
  entry: 'Điều kiện vào nghề ở Việt Nam',
  income: 'Thu nhập',
  noIncome: 'Chưa có số liệu đủ tin cậy cho riêng nghề này.',
  demandWhy: 'Căn cứ đánh giá nhu cầu',
  risks: 'Rủi ro và mặt trái',
  fit: 'Người phù hợp',
  hollandGuess: 'Mã Holland suy luận từ nhiệm vụ:',
  noSource: 'Chưa có nguồn đủ tin cậy cho riêng nghề này; hồ sơ dựa trên mô tả nhiệm vụ chuẩn của nghề.',
  test: 'Kiểm chứng trước khi đầu tư lớn',
  conclusion: 'Kết luận',
  sources: 'Nguồn',
  conf: { kha: 'Dữ liệu khá', tb: 'Dữ liệu trung bình', yeu: 'Dữ liệu Việt Nam còn yếu' },
  compareWith: 'So sánh với nghề khác',
  close: 'Đóng hồ sơ',
};

export const SKY_LABEL = { nang: 'Nắng: nhu cầu tăng', may: 'Mây: đi ngang hoặc trái chiều', mua: 'Mưa: nhu cầu giảm' };
export const WIND_LABEL = ['', 'Lặng', 'Gió nhẹ', 'Gió vừa', 'Gió mạnh', 'Gió rất mạnh'];

export const COMPARE = {
  title: 'So sánh hai nghề',
  lead: 'Đặt hai nghề cạnh nhau theo cùng các tiêu chí. Bảng chỉ trình bày dữ kiện; lựa chọn phụ thuộc vào năng lực, hoàn cảnh và giá trị của người chọn.',
  a: 'Nghề thứ nhất',
  b: 'Nghề thứ hai',
  rows: {
    sky: 'Triển vọng nhu cầu',
    ai: 'Mức tiếp xúc với AI',
    mix: 'Nhiệm vụ cao / vừa / thấp',
    entry: 'Điều kiện vào nghề',
    income: 'Thu nhập',
    risks: 'Rủi ro chính',
    holland: 'Mã Holland',
    conf: 'Độ đầy đủ dữ liệu',
  },
};

export const ACTIONS = {
  save: 'Lưu hồ sơ nghề thành ảnh',
  saved: 'Đã lưu ảnh hồ sơ nghề.',
  saveFail: 'Chưa lưu được ảnh. Thử lại, hoặc chụp màn hình phần hồ sơ.',
  toSkills: 'Xem kỹ năng nên đầu tư cho nghề này',
  imageNote: 'Ảnh chỉ chứa thông tin về nghề, không chứa thông tin cá nhân.',
};

export const FIELDS = {
  cntt: 'Công nghệ và dữ liệu',
  thietke: 'Thiết kế, nội dung, ngôn ngữ',
  kinhdoanh: 'Kinh doanh và dịch vụ khách hàng',
  taichinh: 'Tài chính, hành chính, pháp lý',
  yte: 'Y tế và chăm sóc',
  giaoduc: 'Giáo dục',
  kythuat: 'Kỹ thuật và sản xuất',
  dichvu: 'Dịch vụ và vận tải',
};

/* ---------- Nguồn ---------- */

export const SOURCE_NOTE =
  'Trong lần cập nhật 10/2026, chưa mở được văn bản gốc của phần lớn nguồn (thông cáo của Cục Thống kê, báo cáo ILO, WEF, BLS). Số liệu được lấy từ đoạn trích trên trang của cơ quan phát hành hoặc từ báo chí dẫn lại, nên có thể lệch so với bản gốc ở chữ số thập phân. Số về từng nghề phần lớn đến từ báo chí dẫn lại báo cáo của bộ ngành, doanh nghiệp. Khi dùng số liệu cho quyết định quan trọng, nên mở văn bản gốc theo đường dẫn bên dưới.';

export const SOURCES = {
  // Thống kê Việt Nam
  'nso-q3': { group: 'vn', title: 'Thông cáo báo chí về tình hình lao động, việc làm quý III và 9 tháng năm 2026', by: 'Cục Thống kê, Bộ Tài chính', year: '10/2026', url: 'https://www.nso.gov.vn/tin-tuc-thong-ke/2026/10/thong-cao-bao-chi-ve-tinh-hinh-lao-dong-viec-lam-quy-iii-va-9-thang-nam-2026/', short: 'Cục Thống kê, quý III/2026' },
  'nso-2025': { group: 'vn', title: 'Thông cáo báo chí về tình hình dân số, lao động, việc làm quý IV và năm 2025', by: 'Cục Thống kê, Bộ Tài chính', year: '01/2026', url: 'https://www.nso.gov.vn/tin-tuc-thong-ke/2026/01/thong-cao-bao-chi-ve-tinh-hinh-dan-so-lao-dong-viec-lam-quy-iv-va-nam-2025/', short: 'Cục Thống kê, năm 2025' },
  'nso-2025-pt': { group: 'vn', title: 'Thị trường lao động, việc làm của Việt Nam năm 2025: những điểm sáng và hạn chế', by: 'Cục Thống kê, Bộ Tài chính', year: '01/2026', url: 'https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2026/01/thi-truong-lao-dong-viec-lam-cua-viet-nam-nam-2025-nhung-diem-sang-va-han-che/', short: 'Cục Thống kê, phân tích 2025' },
  'nso-2024-bao': { group: 'vn', title: 'Lao động có việc làm tăng, thu nhập bình quân ở thành thị 9,7 triệu đồng; Thu nhập bình quân lao động quý IV/2024 tăng lên 8,2 triệu đồng', by: 'Dân trí; VnExpress (dẫn Tổng cục Thống kê)', year: '01/2025', url: 'https://dantri.com.vn/lao-dong-viec-lam/lao-dong-co-viec-lam-tang-thu-nhap-binh-quan-o-thanh-thi-97-trieu-dong-20250106203524794.htm', note: 'Thu nhập bình quân theo ngành kinh tế năm 2024.', short: 'Tổng cục Thống kê 2024, qua báo chí' },
  'nd-luong': { group: 'vn', title: 'Nghị định 161/2026/NĐ-CP (lương cơ sở 2,53 triệu đồng từ 1/7/2026); Nghị định 293/2025/NĐ-CP (lương tối thiểu vùng từ 1/1/2026)', by: 'Chính phủ, qua Thời báo Tài chính Việt Nam và Cổng TTĐT Hà Tĩnh', year: '2025–2026', url: 'https://thoibaotaichinhvietnam.vn/tang-luong-co-so-len-2530000-dongthang-tu-172026-197479.html', short: 'Nghị định về lương' },

  // Tổ chức quốc tế
  'wef-2025': { group: 'qt', title: 'The Future of Jobs Report 2025', by: 'World Economic Forum', year: '01/2025', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/', note: 'Hơn 1.000 doanh nghiệp, hơn 14 triệu lao động, 55 nền kinh tế; giai đoạn 2025–2030.', short: 'WEF 2025' },
  'wef-pwc-2026': { group: 'qt', title: 'Artificial Intelligence and the Future of Entry-Level Work', by: 'World Economic Forum và PwC', year: '06/2026', url: 'https://www.weforum.org/publications/artificial-intelligence-and-the-future-of-entry-level-work-a-framework-for-safeguarding-and-reinventing-early-career-pathways', short: 'WEF và PwC 2026' },
  'ilo-wp140': { group: 'qt', title: 'Generative AI and Jobs: A Refined Global Index of Occupational Exposure (ILO Working Paper 140)', by: 'ILO và NASK', year: '05/2025', url: 'https://www.ilo.org/sites/default/files/2025-05/WP140_web.pdf', short: 'ILO 2025' },
  'ilo-vn': { group: 'qt', title: 'Generative AI and Jobs in Viet Nam: Labour Market Exposure and Policy Considerations (ILO Brief)', by: 'ILO', year: '04/2026', url: 'https://www.ilo.org/resource/news/generative-ai-could-transform-millions-jobs-viet-nam-new-ilo-brief-shows', note: 'Dựa trên Điều tra lao động việc làm 2024.', short: 'ILO Việt Nam 2026' },
  'imf-2024': { group: 'qt', title: 'Gen-AI: Artificial Intelligence and the Future of Work (SDN/2024/001)', by: 'Cazzaniga và cộng sự, IMF', year: '01/2024', url: 'https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379', short: 'IMF 2024' },
  'bls-2035': { group: 'qt', title: 'Employment Projections 2025–2035; Occupational Outlook Handbook', by: 'U.S. Bureau of Labor Statistics', year: '08/2026', url: 'https://www.bls.gov/ooh/', note: 'Số liệu Mỹ, chỉ dùng để tham khảo hướng.', short: 'BLS 2025–2035' },
  'bls-2034': { group: 'qt', title: 'Industry and occupational employment projections overview and highlights, 2024–34 (Monthly Labor Review); Artificial intelligence, information technology, and employment, 2024–34 (The Economics Daily)', by: 'U.S. Bureau of Labor Statistics', year: '2026', url: 'https://www.bls.gov/opub/mlr/2026/article/industry-and-occupational-employment-projections-overview.htm', note: 'Số liệu Mỹ, kỳ 2024–2034. Một số mức giảm theo nghề lấy qua bảng tổng hợp của Visual Capitalist.', short: 'BLS 2024–2034' },

  // Thị trường tuyển dụng
  'manpower-q4': { group: 'td', title: 'ManpowerGroup Employment Outlook Survey, Việt Nam quý IV/2026', by: 'ManpowerGroup, qua VnEconomy và Vietnam News', year: '09/2026', url: 'https://vietnamnews.vn/economy/1799357/hiring-outlook-strengthens-in-q4-as-skills-shortages-persist.html', note: '285 nhà tuyển dụng; triển vọng việc làm ròng 36%.', short: 'ManpowerGroup quý IV/2026' },
  'manpower-talent': { group: 'td', title: 'Talent Shortage Survey 2026', by: 'ManpowerGroup', year: '2026', url: 'https://www.barchart.com/story/news/443770/global-talent-shortage-reaches-turning-point-as-ai-skills-claim-top-spot', note: 'Khoảng 39.000 nhà tuyển dụng ở 41 nước.', short: 'ManpowerGroup 2026' },
  'topcv-2026': { group: 'td', title: 'Báo cáo thị trường tuyển dụng 2025–2026', by: 'TopCV', year: '2025', url: 'https://insights.topcv.vn/recruitment-report-2025-2026-eng', note: 'Khoảng 3.000 doanh nghiệp và người lao động, hơn 300.000 tin tuyển dụng.', short: 'TopCV 2025–2026' },
  'navigos-2026': { group: 'td', title: 'Báo cáo Lương và Thị trường lao động 2026 (Talent Guide 2026)', by: 'Navigos Group', year: '01/2026', url: 'https://www.navigosgroup.com/news/navigos-group-releases-the-2026-salary-and-labor-market-report/', note: 'Hơn 1.600 ứng viên, hơn 250 doanh nghiệp, 15 ngành.', short: 'Navigos 2026' },
  'itviec-2026': { group: 'td', title: 'Báo cáo Lương & Thị trường tuyển dụng IT 2025–2026', by: 'ITviec', year: '2025–2026', url: 'https://itviec.com/report/vietnam-it-salary-and-recruitment-market', note: '1.839 người làm IT, khảo sát 5–7/2025 và 10–11/2025.', short: 'ITviec 2025–2026' },
  'itviec-2025': { group: 'td', title: 'Báo cáo Lương & Thị trường tuyển dụng IT 2024–2025', by: 'ITviec', year: '2024–2025', url: 'https://itviec.com/report/vietnam-it-salary-and-recruitment-market-2024-2025', short: 'ITviec 2024–2025' },
  'topdev-2025': { group: 'td', title: 'Vietnam IT Market Report 2024–2025', by: 'TopDev', year: '12/2024', url: 'https://shiftasia.com/wp-content/uploads/2024/12/TopDev_VietnamITMarketReport2024_2025_VietnamITTechTalentLandscape.pdf', note: '2.324 người làm IT; lương gộp tháng tính bằng USD.', short: 'TopDev 2024–2025' },
  'strand-2026': { group: 'td', title: 'Khai phá tiềm năng AI Việt Nam 2026', by: 'Strand Partners, do AWS đặt hàng; qua VCCI và Vietnam News', year: '2026', url: 'https://vcci.com.vn/tin-tuc/viet-nam-co-245000-doanh-nghiep-dang-ung-dung-ai', note: '1.000 lãnh đạo doanh nghiệp và 1.000 người dân. Đơn vị đặt hàng có lợi ích thương mại liên quan.', short: 'Strand Partners 2026' },
  'buv-2026': { group: 'td', title: 'Vietnam Employability Report 2026', by: 'BUV và Decision Lab, qua VietNamNet và VietnamPlus', year: '10/2026', url: 'https://vietnamnet.vn/en/vietnam-graduates-meet-employer-expectations-in-only-1-of-7-skills-survey-2563438.html', note: '375 doanh nghiệp và 20 phỏng vấn sâu.', short: 'BUV và Decision Lab 2026' },
  'ef-epi-2025': { group: 'td', title: 'EF English Proficiency Index 2025: Vietnam fact sheet', by: 'EF Education First', year: '11/2025', url: 'https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-vietnam-english.pdf', short: 'EF EPI 2025' },

  // Chính sách và pháp luật
  'qd1017': { group: 'cs', title: 'Quyết định 1017/QĐ-TTg phê duyệt Chương trình phát triển nguồn nhân lực ngành công nghiệp bán dẫn đến 2030, tầm nhìn 2050', by: 'Thủ tướng Chính phủ, qua SGGP', year: '09/2024', url: 'https://www.sggp.org.vn/den-nam-2030-dao-tao-it-nhat-50000-nhan-luc-dai-hoc-tro-len-phuc-vu-nganh-cong-nghiep-ban-dan-post760062.html', short: 'QĐ 1017/QĐ-TTg' },
  'qd201': { group: 'cs', title: 'Quyết định 201/QĐ-TTg phê duyệt Quy hoạch mạng lưới cơ sở y tế thời kỳ 2021–2030', by: 'Thủ tướng Chính phủ, qua Mekong ASEAN', year: '02/2024', url: 'https://mekongasean.vn/phan-dau-den-nam-2025-viet-nam-co-15-bac-si-33-giuong-benh-tren-10000-dan-16247.html', short: 'QĐ 201/QĐ-TTg' },
  'qd768': { group: 'cs', title: 'Quyết định 768/QĐ-TTg phê duyệt điều chỉnh Quy hoạch điện VIII', by: 'Thủ tướng Chính phủ, qua Bộ Công Thương', year: '04/2025', url: 'https://moit.gov.vn/tin-tuc/phat-trien-nang-luong/chinh-thuc-phe-duyet-quy-hoach-dien-viii-dieu-chinh.html', short: 'QĐ 768/QĐ-TTg' },
  'luat-kbcb': { group: 'cs', title: 'Luật Khám bệnh, chữa bệnh số 15/2023/QH15; Nghị định 96/2023/NĐ-CP', by: 'Quốc hội; Chính phủ; Cục Quản lý Khám, chữa bệnh', year: '2023', url: 'https://kcb.vn/tin-tuc/nhung-diem-moi-trong-trien-khai-luat-kham-benh-chua-benh-so-15-2023-qh15-va-cac-van-ban-huong-dan-luat.html', short: 'Luật KBCB 2023' },
  'nq72': { group: 'cs', title: 'Nghị quyết 72-NQ/TW về bảo vệ, chăm sóc và nâng cao sức khỏe nhân dân; Nghị quyết 71-NQ/TW về phát triển giáo dục', by: 'Bộ Chính trị, qua LSVN và LuatVietnam', year: '09/2025', url: 'https://lsvn.vn/chinh-sach-dac-thu-tao-dot-pha-de-bao-ve-cham-soc-va-nang-cao-suc-khoe-nhan-dan-a163813.html', short: 'NQ 71, 72-NQ/TW' },
  'luat-nha-giao': { group: 'cs', title: 'Luật Nhà giáo số 73/2025/QH15', by: 'Quốc hội, qua LuatVietnam', year: '06/2025', url: 'https://luatvietnam.vn/can-bo-cong-chuc/trinh-do-chuan-dao-tao-cua-nha-giao-cac-cap-tu-2026-566-106081-article.html', short: 'Luật Nhà giáo 2025' },
  'luat-kdbds': { group: 'cs', title: 'Luật Kinh doanh bất động sản số 29/2023/QH15: điều kiện hành nghề môi giới', by: 'Quốc hội, qua LuatVietnam', year: '2023', url: 'https://luatvietnam.vn/linh-vuc-khac/dieu-kien-hanh-nghe-moi-gioi-bat-dong-san-tu-2025-883-96769-article.html', short: 'Luật KDBĐS 2023' },
  'luat-kt': { group: 'cs', title: 'Thông tư 91/2017/TT-BTC về thi chứng chỉ kế toán viên, kiểm toán viên; Luật Kế toán 2015; Luật Kiểm toán độc lập 2011', by: 'Bộ Tài chính; Quốc hội; qua VCCI', year: '2017', url: 'https://www.vcci.com.vn/tin-tuc/dieu-kien-du-thi-chung-chi-kiem-toan-vien', short: 'TT 91/2017/TT-BTC' },
  'luat-ls': { group: 'cs', title: 'Luật Luật sư 2006 (sửa đổi 2012): đào tạo nghề, tập sự, kiểm tra kết quả tập sự', by: 'Quốc hội, qua Thư viện Pháp luật', year: '2012', url: 'https://thuvienphapluat.vn/lao-dong-tien-luong/ai-duoc-dang-ky-tap-su-hanh-nghe-luat-su-6439.html', short: 'Luật Luật sư' },
  'luat-kientruc': { group: 'cs', title: 'Luật Kiến trúc số 40/2019/QH14: điều kiện cấp chứng chỉ hành nghề kiến trúc', by: 'Quốc hội, qua Thư viện Pháp luật', year: '2019', url: 'https://thuvienphapluat.vn/lao-dong-tien-luong/can-dap-ung-dieu-kien-gi-de-duoc-cap-chung-chi-hanh-nghe-kien-truc-16316.html', short: 'Luật Kiến trúc 2019' },
  'luat-dulich': { group: 'cs', title: 'Luật Du lịch số 09/2017/QH14: điều kiện cấp thẻ hướng dẫn viên', by: 'Quốc hội, qua Thư viện Pháp luật', year: '2017', url: 'https://thuvienphapluat.vn/hoi-dap-phap-luat/can-dap-ung-cac-dieu-kien-gi-de-tro-thanh-mot-huong-dan-vien-du-lich-278754.html', short: 'Luật Du lịch 2017' },
  'luat-duoc': { group: 'cs', title: 'Luật Dược 2016, sửa đổi bởi Luật số 44/2024/QH15; Nghị định 163/2025/NĐ-CP', by: 'Quốc hội; Chính phủ', year: '2024–2025', url: 'https://vbpl.vn/', note: 'Tra theo số hiệu văn bản tại Cơ sở dữ liệu quốc gia về văn bản pháp luật.', short: 'Luật Dược' },

  // Báo chí có dẫn nguồn
  'bank-branches': { group: 'bc', title: 'Ngân hàng đóng cửa hàng trăm phòng giao dịch; Ai đang cắt giảm nhân sự ngành ngân hàng như thế nào', by: 'VietnamFinance; VnBusiness (dẫn báo cáo các ngân hàng và khảo sát của Ngân hàng Nhà nước)', year: '2025–2026', url: 'https://vietnamfinance.vn/ngan-hang-dong-cua-hang-tram-phong-giao-dich-xu-huong-ngay-cang-nhanh-va-manh-hon-d144684.html', short: 'VietnamFinance, VnBusiness' },
  'teachers': { group: 'bc', title: 'Cả nước thiếu hơn 100 nghìn giáo viên; Báo động tình trạng thiếu giáo viên', by: 'Thanh Tra; Báo Văn hoá (dẫn Bộ GD&ĐT)', year: '2025–2026', url: 'https://thanhtra.com.vn/giao-duc-A6BAEB6CD/ca-nuoc-thieu-hon-100-nghin-giao-vien-ab6de7c97.html', short: 'Bộ GD&ĐT, qua báo chí' },
  'nurses': { group: 'bc', title: 'Thách thức lớn của ngành y tế Việt Nam: Thiếu điều dưỡng', by: 'VnEconomy (dẫn Bộ Y tế)', year: '2025–2026', url: 'https://vneconomy.vn/thach-thuc-lon-cua-nganh-y-te-viet-nam-thieu-dieu-duong.htm', short: 'Bộ Y tế, qua VnEconomy' },
  'mental': { group: 'bc', title: 'Còn nhiều khoảng trống trong chăm sóc sức khỏe tâm thần', by: 'Nhân Dân (dẫn WHO 2022)', year: '2025', url: 'https://nhandan.vn/con-nhieu-khoang-trong-trong-cham-soc-suc-khoe-tam-than-post956100.html', short: 'Nhân Dân' },
  'vars': { group: 'bc', title: 'Chỉ 100.000 môi giới bất động sản còn tiếp tục hoạt động', by: 'VnEconomy (dẫn Hội Môi giới Bất động sản Việt Nam)', year: '12/2023', url: 'https://vneconomy.vn/chi-100-000-moi-gioi-bat-dong-san-con-tiep-tuc-hoat-dong.htm', short: 'VARS, qua VnEconomy' },
  'nca': { group: 'bc', title: 'Bài toán cấp bách về an toàn thông tin', by: 'Nhân Dân (dẫn khảo sát của Hiệp hội An ninh mạng quốc gia)', year: '2025–2026', url: 'https://nhandan.vn/ocop/bai-toan-cap-bach-ve-an-toan-thong-tin-post945436.html', short: 'NCA, qua Nhân Dân' },
  'drivers': { group: 'bc', title: '200.000 lái xe công nghệ cần được tiếp cận chính sách an sinh xã hội; Tài xế công nghệ, shipper chưa được bổ sung vào diện đóng bảo hiểm bắt buộc', by: 'VnBusiness (dẫn khảo sát Tổng LĐLĐ 2022); Tuổi Trẻ (dẫn Bộ Nội vụ)', year: '2022; 2026', url: 'https://tuoitre.vn/tai-xe-cong-nghe-shipper-ban-hang-online-chua-duoc-bo-sung-vao-dien-dong-bao-hiem-bat-buoc-bo-noi-vu-neu-ly-do-100260623132934575.htm', short: 'Tổng LĐLĐ, Bộ Nội vụ, qua báo chí' },
  'logistics': { group: 'bc', title: 'Cấp thiết nguồn nhân lực cho ngành logistics trong kỷ nguyên mới', by: 'VCCI', year: '08/2025', url: 'https://www.vcci.com.vn/tin-tuc/cap-thiet-nguon-nhan-luc-cho-nganh-logistics-trong-ky-nguyen-moi', note: 'Các ước tính nhu cầu nhân lực logistics chưa nêu rõ phương pháp.', short: 'VCCI 2025' },
  'chip-vne': { group: 'bc', title: 'Ngành chip Việt Nam thừa kỹ sư thiết kế vật lý, khát kiến trúc sư trưởng', by: 'VnEconomy', year: '07/2026', url: 'https://vneconomy.vn/techconnect/nganh-chip-viet-nam-thua-ky-su-thiet-ke-vat-ly-khat-kien-truc-su-truong.htm', short: 'VnEconomy 2026' },

  // Nghiên cứu khoa học
  'autor-2003': { group: 'kh', title: 'The Skill Content of Recent Technological Change: An Empirical Exploration', by: 'Autor, Levy, Murnane, Quarterly Journal of Economics 118(4)', year: '2003', short: 'Autor và cộng sự 2003' },
  'acemoglu-2019': { group: 'kh', title: 'Automation and New Tasks: How Technology Displaces and Reinstates Labor', by: 'Acemoglu, Restrepo, Journal of Economic Perspectives 33(2)', year: '2019', short: 'Acemoglu, Restrepo 2019' },
  'eloundou-2024': { group: 'kh', title: 'GPTs are GPTs: Labor market impact potential of LLMs', by: 'Eloundou, Manning, Mishkin, Rock, Science 384(6702)', year: '2024', short: 'Eloundou và cộng sự 2024' },
  'felten-2021': { group: 'kh', title: 'Occupational, industry, and geographic exposure to artificial intelligence: A novel dataset and its potential uses', by: 'Felten, Raj, Seamans, Strategic Management Journal 42(12)', year: '2021', short: 'Felten và cộng sự 2021' },
  'barrick-1991': { group: 'kh', title: 'The Big Five personality dimensions and job performance: A meta-analysis', by: 'Barrick, Mount, Personnel Psychology 44(1)', year: '1991', short: 'Barrick, Mount 1991' },
  'holland-1997': { group: 'kh', title: 'Making Vocational Choices (bản 3)', by: 'John L. Holland, Psychological Assessment Resources', year: '1997', short: 'Holland 1997' },
};

export const SOURCE_GROUPS = [
  ['vn', 'Thống kê và văn bản về lương ở Việt Nam'],
  ['qt', 'Tổ chức quốc tế'],
  ['td', 'Báo cáo tuyển dụng và khảo sát doanh nghiệp'],
  ['cs', 'Chính sách và pháp luật Việt Nam'],
  ['bc', 'Báo chí có dẫn nguồn'],
  ['kh', 'Nghiên cứu khoa học'],
];
