// Chữ của thẻ Kỹ năng nên đầu tư ("Cây kỹ năng"), trừ hồ sơ 15 kỹ năng (data.js).
// Căn cứ: research/ky-nang.md. Mỗi số liệu ghi năm, phạm vi và khoá nguồn trong SOURCES.
// Giọng: phần kiến thức chuẩn mực như sách chuyên khảo; phần kết quả nói với "bạn" như người tư vấn nghề.

export const UPDATED = '10/2026';

export const INTRO = {
  eyebrow: 'Cây kỹ năng',
  title: 'Kỹ năng nên đầu tư',
  lead:
    'Mười lăm kỹ năng dùng được ở nhiều nghề, chia năm nhánh. Chọn một mục tiêu nghề, tự chấm mức hiện tại của từng kỹ năng, thẻ sẽ chỉ ra ba kỹ năng nên đầu tư trước theo một công thức công khai, kèm lộ trình 30 và 90 ngày có đầu ra đo được.',
  privacy:
    'Mức tự chấm và các ô đánh dấu nhiệm vụ chỉ nằm trong phiên làm việc của tab này (sessionStorage), không gửi đi đâu và mất khi đóng tab.',
};

/* ---------- Phần kiến thức ---------- */

export const WHY = {
  title: 'Vì sao là những kỹ năng này',
  lead: 'Danh sách được chọn từ các khảo sát nhà tuyển dụng có phương pháp công bố và các khung năng lực chính thức, ưu tiên kỹ năng tự học được và chứng minh được bằng sản phẩm.',
  paragraphs: [
    {
      text: 'Báo cáo Future of Jobs 2025 của Diễn đàn Kinh tế Thế giới (khảo sát hơn 1.000 doanh nghiệp lớn, đại diện hơn 14 triệu lao động ở 55 nền kinh tế) xếp tư duy phân tích đứng đầu danh sách kỹ năng cốt lõi, khoảng 7 trên 10 doanh nghiệp coi là thiết yếu. Tiếp theo là khả năng phục hồi, linh hoạt và thích ứng; lãnh đạo và ảnh hưởng xã hội; tư duy sáng tạo. Các doanh nghiệp dự kiến 39% kỹ năng hiện có của người lao động sẽ thay đổi hoặc lỗi thời trong giai đoạn 2025–2030.',
      src: ['wef-2025'],
    },
    {
      text: 'Ở Việt Nam, báo cáo của Đại học Anh Quốc Việt Nam (BUV, trường tư thục) và Decision Lab công bố tháng 10/2026, khảo sát 375 doanh nghiệp, chấm cử nhân mới ra trường trên bảy năng lực. Cử nhân chỉ đạt kỳ vọng ở một năng lực là áp dụng công nghệ. Khoảng trống lớn nhất nằm ở quản lý thời gian (80% doanh nghiệp coi trọng, 54% sinh viên thể hiện được) và giải quyết vấn đề (84% so với 61%), sau đó là giao tiếp và thích ứng. Đây là một khảo sát đơn lẻ, mẫu doanh nghiệp không phải mẫu đại diện quốc gia.',
      src: ['buv-2026'],
    },
    {
      text: 'Theo Future of Jobs 2025, AI và dữ liệu lớn là nhóm kỹ năng được dự báo tăng nhanh nhất đến 2030. Khảo sát Thiếu hụt nhân tài 2026 của ManpowerGroup (39.063 nhà tuyển dụng, 41 nước, chưa có số riêng cho Việt Nam) lần đầu ghi nhận kỹ năng AI là nhóm khó tuyển nhất: phát triển mô hình và ứng dụng AI 20%, hiểu biết về AI 19%. Bằng chứng thực nghiệm cho thấy lợi ích có điều kiện: trong nghiên cứu của Brynjolfsson và cộng sự trên 5.179 nhân viên chăm sóc khách hàng, trợ lý AI tăng năng suất trung bình 14%, nhân viên mới tăng 34%; nhưng trong thí nghiệm của Dell’Acqua và cộng sự với 758 tư vấn viên, ở những việc vượt khả năng của mô hình, người dùng AI ra đáp án đúng ít hơn 19 điểm phần trăm so với người không dùng.',
      src: ['wef-2025', 'manpower-2026', 'brynjolfsson-2025', 'dellacqua-2023'],
    },
    {
      text: 'Về khung chính thức, Thông tư 02/2025/TT-BGDĐT ban hành Khung năng lực số cho người học gồm 6 miền, 24 năng lực thành phần, có riêng miền ứng dụng trí tuệ nhân tạo. Thông tư 33/2026/TT-BGDĐT thay khung năng lực ngoại ngữ, các bậc 1–6 tương ứng A1–C2 của Khung tham chiếu chung châu Âu (CEFR). Thang 5 mức của các kỹ năng số trên trang do biên tập soạn, tham khảo cách chia trình độ của khung châu Âu DigComp và Thông tư 02/2025; thang tiếng Anh lấy năm bậc A1–C1, tương ứng Bậc 1–5 của Thông tư 33/2026.',
      src: ['tt02-2025', 'tt33-2026'],
    },
  ],
  limits: [
    'Các khảo sát trên hỏi doanh nghiệp, chủ yếu doanh nghiệp lớn, về kỹ năng họ coi trọng; đó là nhu cầu được nêu, không phải đo lường hiệu quả công việc.',
    'Chưa có số liệu PIAAC 2023 của OECD cho Việt Nam; khảo sát kỹ năng hộ gia đình gần nhất của Ngân hàng Thế giới (STEP) làm năm 2012, chỉ ở Hà Nội và TP.HCM. Mức kỹ năng hiện nay của người lao động Việt Nam vì vậy chưa có số liệu đủ tin cậy.',
    'Kỹ năng chuyên ngành (kế toán, điều dưỡng, thiết kế…) nằm ngoài phạm vi thẻ; ngoại ngữ thứ hai (Trung, Hàn, Nhật) chưa có số liệu đủ tin cậy về nhu cầu nên không đưa vào danh sách.',
  ],
  takeaway:
    'Các nguồn khác nhau gặp nhau ở ba điểm: kỹ năng nhận thức (phân tích, phản biện), kỹ năng tự quản lý và khả năng dùng công nghệ có kiểm soát. Đó cũng là ba nhóm mà khảo sát doanh nghiệp tại Việt Nam ghi nhận khoảng trống rõ: giải quyết vấn đề, quản lý thời gian và đòi hỏi cao hơn về năng lực số.',
};

export const LEARN = {
  title: 'Cách học có bằng chứng',
  lead: 'Lộ trình 30 và 90 ngày trên trang được thiết kế theo các phương pháp có bằng chứng từ nghiên cứu tâm lý học giáo dục. Bảng dưới tóm tắt điều đã biết và giới hạn của từng kết luận.',
  methods: [
    {
      name: 'Tự kiểm tra',
      text: 'Tự gợi nhớ, làm bài kiểm tra thay vì đọc lại. Phân tích tổng hợp của Adesope và cộng sự (2017; 118 nghiên cứu, 15.427 người tham gia) ghi nhận cỡ hiệu ứng trung bình g = 0,61 so với các cách ôn khác.',
      verdict: 'Hiệu quả cao',
      src: ['adesope-2017', 'dunlosky-2013'],
    },
    {
      name: 'Ôn giãn cách',
      text: 'Chia thời gian ôn thành nhiều lần cách quãng thay vì học dồn. Tổng hợp của Cepeda và cộng sự (2006; 317 thí nghiệm) cho thấy học giãn cách nhớ lâu hơn học dồn, và khoảng cách tối ưu tăng theo thời gian cần nhớ.',
      verdict: 'Hiệu quả cao',
      src: ['cepeda-2006', 'dunlosky-2013'],
    },
    {
      name: 'Luyện xen kẽ',
      text: 'Trộn nhiều dạng bài trong một buổi thay vì làm hết một dạng rồi mới sang dạng khác. Trong thí nghiệm của Rohrer và Taylor (2007) với bài toán tính thể tích, nhóm học xen kẽ làm bài kiểm tra sau một tuần tốt hơn rõ nhóm học theo khối. Bằng chứng chủ yếu ở môn toán.',
      verdict: 'Có bằng chứng, phạm vi hẹp',
      src: ['rohrer-2007'],
    },
    {
      name: 'Học qua dự án',
      text: 'Phân tích tổng hợp của Chen và Yang (2019; 30 nghiên cứu, 12.585 học sinh ở 9 nước) cho cỡ hiệu ứng d = 0,71 so với dạy truyền thống. Phần lớn nghiên cứu làm ở trường phổ thông và đại học, chưa có bằng chứng tương đương cho người đi làm tự học.',
      verdict: 'Hiệu quả khá, phạm vi hẹp',
      src: ['chen-2019'],
    },
    {
      name: 'Phản hồi cụ thể',
      text: 'Tổng hợp của Wisniewski, Zierer và Hattie (2020) cho cỡ hiệu ứng trung bình d = 0,48 nhưng khác nhau nhiều theo loại phản hồi. Kluger và DeNisi (1996) ghi nhận khoảng một phần ba hiệu ứng là âm: phản hồi chỉ khen chê chung chung có thể làm kết quả kém đi. Phản hồi có ích khi chỉ rõ đúng, sai ở đâu và bước tiếp theo.',
      verdict: 'Hiệu quả, tuỳ cách làm',
      src: ['wisniewski-2020'],
    },
    {
      name: 'Đọc lại, tô đậm, tóm tắt',
      text: 'Dunlosky và cộng sự (2013) đánh giá mười kỹ thuật học phổ biến và xếp đọc lại, tô đậm, tóm tắt vào nhóm hiệu quả thấp. Cảm giác quen thuộc khi đọc lại dễ bị nhầm với đã hiểu.',
      verdict: 'Hiệu quả thấp',
      src: ['dunlosky-2013'],
    },
    {
      name: 'Học theo “phong cách học”',
      text: 'Tổng quan của Pashler và cộng sự (2008) không tìm thấy bằng chứng đủ tin cậy cho giả thuyết dạy khớp với “phong cách học” (nghe, nhìn, vận động) thì học tốt hơn.',
      verdict: 'Không có bằng chứng',
      src: ['pashler-2008'],
    },
    {
      name: 'Luyện não chung chung',
      text: 'Ba phân tích tổng hợp của Sala và Gobet (2017) về cờ vua, âm nhạc và luyện trí nhớ cho thấy kỹ năng được luyện tiến bộ, nhưng gần như không chuyển sang kỹ năng khác ở các nghiên cứu được thiết kế tốt nhất.',
      verdict: 'Chuyển giao rất ít',
      src: ['sala-2017'],
    },
  ],
  practice: {
    title: 'Số giờ luyện tập không quyết định tất cả',
    text: 'Phân tích tổng hợp của Macnamara, Hambrick và Oswald (2014; 157 cỡ hiệu ứng, hơn 11.000 người) cho thấy luyện tập có chủ đích giải thích khoảng 12% khác biệt về thành tích nói chung, 26% ở trò chơi, 21% ở âm nhạc, 18% ở thể thao, 4% ở giáo dục và dưới 1% ở nghề nghiệp. Ericsson, người đề xuất khái niệm luyện tập có chủ đích, phản bác cách định nghĩa luyện tập trong phân tích này. Kết luận thận trọng: luyện tập cần thiết, nhưng chất lượng luyện tập, phản hồi và môi trường làm việc cũng quan trọng; không có căn cứ cho “quy tắc 10.000 giờ”.',
    src: ['macnamara-2014'],
  },
  takeaway:
    'Muốn giỏi một kỹ năng thì luyện chính kỹ năng đó trên việc thật, tự kiểm tra thay vì đọc lại, ôn giãn cách, và tìm người góp ý cụ thể. Mỗi nhiệm vụ trong lộ trình đều có một đầu ra đếm được để tự kiểm tra.',
};

/* ---------- Công cụ ---------- */

export const TOOL = {
  title: 'Cây kỹ năng của bạn',
  lead: 'Ba bước: chọn mục tiêu, chấm mức hiện tại của từng kỹ năng, rồi xem ba kỹ năng nên đầu tư trước.',
  step1: 'Mục tiêu',
  step2: 'Mức hiện tại',
  step3: 'Ba kỹ năng nên đầu tư trước',
  goalLabel: 'Mục tiêu nghề',
  goalHint: 'Mỗi mục tiêu có một bộ mức cần đạt tham khảo cho 15 kỹ năng.',
  goalFromJob: (name) => `Lấy theo nghề bạn vừa xem ở thẻ Nghề nghiệp hôm nay & ngày mai: ${name}. Mức cần lấy theo lĩnh vực của nghề, có điều chỉnh riêng cho kỹ năng cốt lõi của nghề nếu có.`,
  jobOption: (name) => `Nghề vừa xem: ${name}`,
  rateHint: 'Đọc mô tả từng mức và chọn mức bạn đã làm được thật, có việc cụ thể để chứng minh. Chấm ít nhất một kỹ năng thì thẻ mới tính; kỹ năng chưa chấm được coi là mức 1. Mức 5 gồm cả việc dẫn dắt người khác trong kỹ năng đó.',
  rated: (n) => `Đã chấm ${n}/15 kỹ năng`,
  target: 'Mức cần',
  current: 'Mức của bạn',
  levelNames: ['Mới làm quen', 'Làm được việc quen', 'Tự lo được', 'Vững', 'Dẫn dắt'],
  noneYet: 'Chưa chấm',
  reached: 'Đã đạt mức cần cho mục tiêu này',
  treeDesc: (lit, total, top) =>
    `Cây có 15 lá chia 5 nhánh. ${lit}/${total} kỹ năng đã đạt mức cần cho mục tiêu.` + (top.length ? ` Ba kỹ năng nên đầu tư trước: ${top.join('; ')}.` : ''),
  allDone: 'Tất cả kỹ năng đều đã đạt mức cần cho mục tiêu này. Có thể chọn một lĩnh vực khác để so, hoặc dựa vào tin tuyển dụng thật để tự nâng mức cần.',
  topEmpty: 'Chấm mức hiện tại ở bước 2 để thẻ tính ba kỹ năng nên đầu tư trước.',
  score: 'Điểm ưu tiên',
  formulaLine: (gap, w, ev, c, s) => `khoảng cách ${gap} × mức đòi hỏi ${w}${ev === '1' ? '' : ` × bằng chứng ${ev}`} ÷ chi phí ${c} = ${s}`,
  openSkill: 'Xem hồ sơ kỹ năng',
  reset: 'Chấm lại từ đầu',
  resetDone: 'Đã xoá mức tự chấm và các ô đánh dấu.',
  save: 'Lưu ảnh kết quả',
  saved: 'Đã lưu ảnh.',
  saveFail: 'Chưa lưu được ảnh. Thử lại sau.',
  sessionNote: 'Mức tự chấm và tiến độ được giữ trong tab này cho tới khi đóng tab.',
};

export const BOARD = {
  title: 'Bảng nhiệm vụ',
  lead: 'Nhiệm vụ của ba kỹ năng ưu tiên, mỗi việc có đầu ra đếm được. Đánh dấu khi xong; trạng thái chỉ giữ trong tab này.',
  d30: '30 ngày đầu',
  d90: 'Đến ngày 90',
  output: 'Đầu ra',
  progress: (p) => `Hoàn thành ${p}%`,
  empty: 'Bảng nhiệm vụ sẽ hiện khi có ba kỹ năng ưu tiên.',
  hours: (h) => `Ba lộ trình cần khoảng ${h} giờ mỗi tuần (ước lượng của biên tập).`,
  heavy: 'Nếu quá sức, nên làm lần lượt: xong 30 ngày của kỹ năng thứ nhất rồi mới bắt đầu kỹ năng tiếp theo.',
};

export const PROFILE = {
  title: 'Hồ sơ kỹ năng',
  lead: 'Chọn một kỹ năng để xem định nghĩa, lý do, thang 5 mức, lộ trình, cách chứng minh và tài nguyên học.',
  pick: 'Kỹ năng',
  def: 'Định nghĩa',
  parts: 'Năng lực thành phần',
  why: 'Vì sao lúc này',
  levels: 'Thang 5 mức',
  plan30: 'Lộ trình 30 ngày',
  plan90: 'Lộ trình 90 ngày',
  prove: 'Chứng minh với nhà tuyển dụng',
  mistakes: 'Sai lầm hay gặp khi tự học',
  cost: 'Chi phí và chi phí cơ hội',
  costTier: { low: 'Chi phí thấp', mid: 'Chi phí vừa', high: 'Chi phí cao' },
  resources: 'Tài nguyên miễn phí',
  noResources: 'Chưa tìm được tài nguyên miễn phí đủ uy tín; học qua việc thật là cách chính.',
  resourceNote: 'Đường link được ghi theo trang chính thức của đơn vị cung cấp nhưng chưa kiểm được trạng thái vào tháng 10/2026; nếu link không mở, tìm theo tên khoá và đơn vị.',
  note: 'Lời nhắn',
};

export const METHOD = {
  title: 'Cách tính ba kỹ năng ưu tiên',
  lead: 'Chưa có nghiên cứu nào xác nhận một công thức xếp ưu tiên kỹ năng cho từng cá nhân. Thẻ dùng một quy tắc minh bạch dựa trên phân tích khoảng trống giữa mức cần và mức hiện có, cách mà báo cáo BUV 2026 dùng để so sánh kỳ vọng của doanh nghiệp với năng lực của sinh viên.',
  formula: 'Điểm ưu tiên = khoảng cách × mức đòi hỏi × bằng chứng ÷ chi phí',
  rows: [
    ['Khoảng cách', 'Mức cần trừ mức hiện tại, thang 1–5. Đã đạt hoặc vượt thì bằng 0 và kỹ năng không được chọn. Kỹ năng chưa chấm coi là mức 1.'],
    ['Mức đòi hỏi', 'Theo mức cần của mục tiêu: mức 5 nhân 1,5; mức 4 nhân 1,25; mức 3 trở xuống nhân 1. Kỹ năng mà mục tiêu đòi hỏi cao được đẩy lên.'],
    ['Bằng chứng', 'Nhân 1,25 cho ba kỹ năng có bằng chứng mạnh nhất: tư duy phân tích và thích ứng (hai hạng đầu trong Future of Jobs 2025, đồng thời là khoảng trống trong khảo sát BUV 2026), quản lý thời gian (khoảng trống lớn nhất ở Việt Nam theo BUV 2026). Các kỹ năng còn lại nhân 1.'],
    ['Chi phí', 'Thời gian ước tính để lên một mức: thấp chia 1; vừa chia 1,5; cao chia 2. Kỹ năng cải thiện nhanh được ưu tiên để có kết quả sớm.'],
    ['Điểm bằng nhau', 'Ưu tiên khoảng cách lớn hơn, rồi chi phí thấp hơn, rồi thứ tự trong danh sách.'],
  ],
  limits: [
    'Mức cần của từng mục tiêu là ước lượng của biên tập dựa trên mô tả nghề trong thẻ Nghề nghiệp hôm nay & ngày mai, không phải chuẩn nghề chính thức. Mức cần lấy theo lĩnh vực; riêng vài nghề có kỹ năng cốt lõi rõ (giáo viên tiếng Anh, biên phiên dịch, phân tích dữ liệu…) được nâng mức của kỹ năng đó. Tin tuyển dụng thật của vị trí bạn nhắm tới là căn cứ tốt hơn.',
    'Chỉ tiếng Anh có số giờ học từ nguồn (Cambridge English); bậc chi phí của 14 kỹ năng còn lại là ước lượng.',
    'Chia cho chi phí làm kỹ năng tốn công nhưng cần lâu dài, như tiếng Anh, dễ bị đẩy xuống. Nếu mục tiêu bắt buộc có chứng chỉ ngoại ngữ, hãy coi tiếng Anh là kỹ năng thứ tư, ngoài ba kỹ năng trên.',
    'Thang 5 mức là tự chấm, chưa chuẩn hoá, nên dễ lệch. Nên chấm theo việc cụ thể đã làm được, hoặc nhờ người hướng dẫn chấm cùng.',
    'Giới hạn ba kỹ năng một lúc là gợi ý của biên tập, chưa có nghiên cứu xác định con số tối ưu.',
  ],
};

// Mức cần tham khảo (1–5) cho 15 kỹ năng, theo thứ tự trong data.js:
// doc-viet, phan-tich, phan-bien, sang-tao, du-lieu, ai, an-toan, lap-trinh, giao-tiep, nhom, lanh-dao, tu-hoc, thoi-gian, thich-ung, tieng-anh.
// Lĩnh vực trùng khoá với FIELDS của thẻ Nghề nghiệp, để lấy mục tiêu từ nghề đang xem trong phiên.
export const PROFILES = {
  chung: { name: 'Người mới đi làm, chưa chọn nghề', levels: [3, 3, 3, 2, 3, 3, 3, 1, 3, 3, 2, 3, 3, 3, 3] },
  cntt: { name: 'Công nghệ và dữ liệu', levels: [3, 4, 3, 3, 4, 4, 4, 4, 3, 3, 2, 4, 3, 3, 4] },
  thietke: { name: 'Thiết kế, nội dung, ngôn ngữ', levels: [4, 3, 3, 4, 2, 4, 3, 2, 4, 3, 2, 3, 3, 3, 3] },
  kinhdoanh: { name: 'Kinh doanh và dịch vụ khách hàng', levels: [3, 3, 3, 3, 3, 3, 3, 1, 4, 3, 3, 3, 3, 4, 3] },
  taichinh: { name: 'Tài chính, hành chính, pháp lý', levels: [4, 4, 4, 2, 4, 3, 3, 2, 3, 3, 2, 3, 4, 3, 3] },
  yte: { name: 'Y tế và chăm sóc', levels: [3, 4, 4, 2, 2, 2, 3, 1, 4, 4, 2, 4, 3, 4, 3] },
  giaoduc: { name: 'Giáo dục', levels: [4, 3, 3, 3, 2, 3, 3, 1, 4, 3, 3, 4, 3, 3, 3] },
  kythuat: { name: 'Kỹ thuật và sản xuất', levels: [3, 4, 3, 3, 3, 2, 3, 2, 3, 4, 2, 3, 3, 3, 3] },
  dichvu: { name: 'Dịch vụ và vận tải', levels: [2, 2, 2, 2, 2, 2, 3, 1, 4, 3, 2, 3, 3, 4, 3] },
};

// Nghề có kỹ năng cốt lõi rõ: nâng mức cần của kỹ năng đó so với hồ sơ lĩnh vực (khoá là id nghề ở thẻ Nghề nghiệp).
export const JOB_OVERRIDES = {
  'giao-vien-tieng-anh': { 'tieng-anh': 5 },
  'bien-phien-dich': { 'tieng-anh': 5, 'doc-viet': 5 },
  'phan-tich-du-lieu': { 'du-lieu': 5 },
  'an-ninh-mang': { 'an-toan': 5 },
  'lap-trinh': { 'lap-trinh': 5 },
  'ky-su-ai': { ai: 5, 'lap-trinh': 5 },
  'nha-bao': { 'doc-viet': 5 },
  'du-lich': { 'tieng-anh': 4 },
};

export const LINKS = {
  toFuture: 'Xem bản đồ nghề nghiệp',
};

/* ---------- Nguồn ---------- */

export const SOURCE_NOTE =
  'Do giới hạn mạng của môi trường biên soạn, các nguồn dưới đây được tra qua đoạn trích của công cụ tìm kiếm và bài báo dẫn lại, chưa đọc trọn văn bản gốc; mức tin cậy của từng con số được ghi trong hồ sơ nghiên cứu của thẻ. Đường link của tài nguyên học chưa kiểm được trạng thái.';

export const SOURCES = {
  // Khảo sát và báo cáo quốc tế
  'wef-2025': { group: 'qt', title: 'The Future of Jobs Report 2025', by: 'World Economic Forum', year: '01/2025', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/', note: 'Hơn 1.000 doanh nghiệp lớn, hơn 14 triệu lao động, 55 nền kinh tế; giai đoạn 2025–2030.', short: 'WEF 2025' },
  'piaac-2023': { group: 'qt', title: 'Do Adults Have the Skills They Need to Thrive in a Changing World? Survey of Adult Skills 2023', by: 'OECD', year: '12/2024', url: 'https://www.oecd.org/en/publications/do-adults-have-the-skills-they-need-to-thrive-in-a-changing-world_b263dc5d-en.html', note: 'Khoảng 160.000 người 16–65 tuổi ở 31 nền kinh tế.', short: 'OECD PIAAC 2023' },
  'manpower-2026': { group: 'qt', title: 'Global Talent Shortage Reaches Turning Point as AI Skills Claim Top Spot', by: 'ManpowerGroup', year: '02/2026', url: 'https://investor.manpowergroup.com/node/68796', note: '39.063 nhà tuyển dụng ở 41 nước, khảo sát tháng 10/2025.', short: 'ManpowerGroup 2026' },
  'wb-vdr-2014': { group: 'qt', title: 'Vietnam Development Report 2014: Skilling up Vietnam', by: 'World Bank', year: '2013', url: 'https://www.worldbank.org/en/country/vietnam/publication/vietnam-development-report2014-skilling-up-vietnam-preparing-the-workforce-for-a-modern-market-economy', note: 'Khảo sát doanh nghiệp đô thị về kỹ năng nhận thức, hành vi và kỹ thuật.', short: 'World Bank 2013' },
  'ef-epi-2025': { group: 'qt', title: 'EF English Proficiency Index 2025: Việt Nam', by: 'EF Education First', year: '11/2025', url: 'https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-vietnam-vietnamese.pdf', note: 'Dựa trên người tự nguyện làm bài kiểm tra trực tuyến, không phải mẫu đại diện.', short: 'EF EPI 2025' },
  'cambridge-glh': { group: 'qt', title: 'Guided learning hours', by: 'Cambridge English', year: 'không ghi năm', url: 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours', note: 'Số giờ học có hướng dẫn cộng dồn để đạt từng bậc CEFR, chỉ để tham khảo.', short: 'Cambridge English' },

  // Việt Nam
  'buv-2026': { group: 'vn', title: 'Vietnam graduates meet employer expectations in only 1 of 7 skills (Vietnam Employability Report 2026, BUV và Decision Lab)', by: 'VietNamNet', year: '10/2026', url: 'https://vietnamnet.vn/en/vietnam-graduates-meet-employer-expectations-in-only-1-of-7-skills-survey-2563438.html', note: '375 doanh nghiệp và 20 phỏng vấn sâu; do một trường đại học tư thục thực hiện; đọc qua báo chí.', short: 'BUV 2026' },
  'tt02-2025': { group: 'vn', title: 'Thông tư 02/2025/TT-BGDĐT quy định Khung năng lực số cho người học', by: 'Bộ Giáo dục và Đào tạo', year: '01/2025', url: 'https://thuvienphapluat.vn/van-ban/EN/Giao-duc/Circular-02-2025-TT-BGDDT-Digital-Competence-Framework/646278/tieng-anh.aspx', note: '6 miền, 24 năng lực thành phần, 8 bậc; có miền ứng dụng trí tuệ nhân tạo.', short: 'Thông tư 02/2025' },
  'tt33-2026': { group: 'vn', title: 'Thông tư 33/2026/TT-BGDĐT ban hành Khung năng lực ngoại ngữ dùng cho Việt Nam', by: 'Bộ Giáo dục và Đào tạo, qua Hoatieu.vn', year: '04/2026', url: 'https://hoatieu.vn/phap-luat/thong-tu-33-2026-tt-bgddt-khung-nang-luc-ngoai-ngu-dung-cho-viet-nam-249508', note: 'Bậc 1–6 tương ứng A1–C2, thêm Tiền bậc 1.', short: 'Thông tư 33/2026' },
  'bdhvs': { group: 'vn', title: '“Bình dân học vụ số” phải đi từng ngõ, đến từng nhà, hướng dẫn từng người', by: 'VietnamPlus', year: '03/2025', url: 'https://www.vietnamplus.vn/binh-dan-hoc-vu-so-phai-di-tung-ngo-den-tung-nha-huong-dan-tung-nguoi-post1022854.vnp', note: 'Phong trào và nền tảng học kỹ năng số miễn phí binhdanhocvuso.gov.vn.', short: 'Bình dân học vụ số' },
  'idp': { group: 'vn', title: 'Bài về TOEIC và IELTS cho người đi làm (tiêu đề chưa đối chiếu)', by: 'IDP Việt Nam', year: 'không ghi năm', url: 'https://ielts.idp.com/vietnam/article/article-toeic-or-ielts-for-workers', note: 'Ý kiến của một đơn vị tổ chức thi IELTS, có lợi ích liên quan.', short: 'IDP Việt Nam' },

  // Doanh nghiệp và chứng chỉ
  'coursera-gda': { group: 'dn', title: 'Google Data Analytics Professional Certificate', by: 'Google, trên Coursera', year: 'tra cứu 10/2026', note: 'Thời lượng ước tính do Coursera công bố, qua đoạn trích tìm kiếm.', short: 'Coursera' },
  'comptia': { group: 'dn', title: 'How long does the CompTIA Security+ certification last?', by: 'CompTIA', year: 'không ghi năm', url: 'https://www.comptia.org/en-us/blog/how-long-does-the-comptia-security-certification-last/', note: 'Thời hạn chứng chỉ 3 năm.', short: 'CompTIA' },

  // Nghiên cứu khoa học
  'dellacqua-2023': { group: 'kh', title: 'Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality (HBS Working Paper 24-013)', by: 'Dell’Acqua và cộng sự', year: '2023', url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=64700', short: 'Dell’Acqua 2023' },
  'brynjolfsson-2025': { group: 'kh', title: 'Generative AI at Work', by: 'Brynjolfsson, Li, Raymond, Quarterly Journal of Economics 140(2)', year: '2025', url: 'https://www.nber.org/papers/w31161', short: 'Brynjolfsson 2025' },
  'adesope-2017': { group: 'kh', title: 'Rethinking the Use of Tests: A Meta-Analysis of Practice Testing', by: 'Adesope, Trevisan, Sundararajan, Review of Educational Research', year: '2017', url: 'https://journals.sagepub.com/doi/10.3102/0034654316689306', short: 'Adesope 2017' },
  'cepeda-2006': { group: 'kh', title: 'Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis', by: 'Cepeda, Pashler, Vul, Wixted, Rohrer, Psychological Bulletin 132(3)', year: '2006', url: 'https://pubmed.ncbi.nlm.nih.gov/16719566/', short: 'Cepeda 2006' },
  'dunlosky-2013': { group: 'kh', title: 'Improving Students’ Learning With Effective Learning Techniques', by: 'Dunlosky, Rawson, Marsh, Nathan, Willingham, Psychological Science in the Public Interest 14(1)', year: '2013', url: 'https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html', short: 'Dunlosky 2013' },
  'rohrer-2007': { group: 'kh', title: 'The Shuffling of Mathematics Problems Improves Learning', by: 'Rohrer, Taylor, Instructional Science', year: '2007', url: 'https://digitalcommons.usf.edu/psy_facpub/1767/', short: 'Rohrer 2007' },
  'chen-2019': { group: 'kh', title: 'Revisiting the Effects of Project-Based Learning on Students’ Academic Achievement: A Meta-Analysis Investigating Moderators', by: 'Chen, Yang, Educational Research Review 26', year: '2019', short: 'Chen 2019' },
  'wisniewski-2020': { group: 'kh', title: 'The Power of Feedback Revisited: A Meta-Analysis of Educational Feedback Research', by: 'Wisniewski, Zierer, Hattie, Frontiers in Psychology', year: '2020', url: 'https://www.frontiersin.org/articles/10.3389/fpsyg.2019.03087/full', note: 'Có dẫn kết quả của Kluger và DeNisi (1996).', short: 'Wisniewski 2020' },
  'pashler-2008': { group: 'kh', title: 'Learning Styles: Concepts and Evidence', by: 'Pashler, McDaniel, Rohrer, Bjork, Psychological Science in the Public Interest 9(3)', year: '2008', url: 'https://digitalcommons.usf.edu/psy_facpub/1765/', short: 'Pashler 2008' },
  'sala-2017': { group: 'kh', title: 'No “far transfer”: chess, memory training and music just make you better at chess, memory training and music (về Sala và Gobet 2017)', by: 'BPS Research Digest', year: '2017', url: 'https://bps.org.uk/research-digest/no-far-transfer-chess-memory-training-and-music-just-make-you-better-chess-memory', short: 'Sala và Gobet 2017' },
  'macnamara-2014': { group: 'kh', title: 'Deliberate Practice and Performance in Music, Games, Sports, Education, and Professions: A Meta-Analysis', by: 'Macnamara, Hambrick, Oswald, Psychological Science 25(8)', year: '2014', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4101876/', short: 'Macnamara 2014' },
};

export const SOURCE_GROUPS = [
  ['qt', 'Khảo sát và báo cáo quốc tế'],
  ['vn', 'Việt Nam: khảo sát, văn bản, phong trào'],
  ['dn', 'Chứng chỉ và khoá học'],
  ['kh', 'Nghiên cứu khoa học'],
];
