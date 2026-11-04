// Nội dung phần giới thiệu của thẻ Thần số học.
// Văn phong: xưng "bạn", câu đủ ý, ví dụ đời thường. Xem mục 3 của brief trước khi sửa.

export const PRIVACY_LINE =
  'Mọi phép tính đều xử lý trực tiếp trên trình duyệt của bạn. Trang web không lưu trữ và không gửi họ tên hay ngày sinh của bạn đi bất kỳ đâu.';

export const EASTER_EGG = 'Ồ, bạn đang tra cứu đúng ngày sinh và tên của người làm ra trang web này đấy 👀';

export const INTRO = {
  eyebrow: 'Thẻ 01 · Numerology',
  title: 'Thần số học',
  lead:
    'Từ ngày sinh và họ tên khai sinh, thần số học quy đổi thành năm chỉ số cốt lõi để phác thảo xu hướng tính cách, điểm mạnh tự nhiên và những thói quen dễ làm bạn vấp ngã. Phần dưới đây giải thích rõ nguyên tắc tính từng bước, kèm hai bảng tính độc lập để bạn tự kiểm chứng.',
};

export const WHAT_IS = {
  title: 'Thần số học là gì',
  paragraphs: [
    'Thần số học là hệ thống phân tích tính cách thông qua các con số được rút gọn từ ngày sinh và họ tên. Phương pháp phổ biến nhất hiện nay bắt nguồn từ trường phái của nhà toán học Hy Lạp cổ đại Pythagoras. Trong hệ quy chiếu này, mỗi con số từ 1 đến 9, cùng ba số đặc biệt 11, 22 và 33, đại diện cho một nhóm đặc điểm hành vi, động lực nội tâm và cách phản ứng trước hoàn cảnh.',
    'Thay vì xem đây là công cụ bói toán định mệnh, bạn hãy coi nó như một bản gợi ý để tự quan sát lại chính mình. Thần số học không có cơ sở thực nghiệm để đoán trước bạn sẽ làm nghề gì hay thành công ở tuổi nào. Giá trị thực tế nhất của nó là đặt ra những góc nhìn cụ thể, giúp bạn gọi tên rõ hơn những điểm mạnh mình đang có và những điểm mù trong thói quen ứng xử hằng ngày.',
  ],
  quote: 'Hãy đọc kết quả như nghe góc nhìn từ một người bạn biết quan sát: điều gì phản ánh đúng thực tế của bạn thì giữ lại để điều chỉnh, điều gì lệch với trải nghiệm của bạn thì thoải mái bỏ qua.',
};

/** Thông tin chung về 5 chỉ số. key là tên tham số trên URL kết quả. */
export const INDEX_META = {
  lifePath: {
    key: 'cd',
    name: 'Số chủ đạo',
    short: 'Chủ đạo',
    source: 'Từ ngày sinh',
    calc: 'date',
    what: 'Trục tính cách chính và bài học trưởng thành xuyên suốt của bạn.',
    text: 'Đây là chỉ số đóng vai trò nền tảng nhất. Nó phản ánh xu hướng tự nhiên của bạn khi giải quyết vấn đề: bạn phát huy tốt nhất trong điều kiện nào, thường vấp phải rào cản tâm lý gì và cần rèn luyện điều gì để đi đường dài.',
  },
  personalYear: {
    key: 'nn',
    name: 'Năm cá nhân',
    short: 'Năm cá nhân',
    source: 'Từ ngày, tháng sinh và năm muốn xem',
    calc: 'date',
    what: 'Nhịp ưu tiên của bạn trong năm đang xem, xoay vòng theo chu kỳ 9 năm.',
    text: 'Chỉ số này vận hành theo chu kỳ từ 1 đến 9, mỗi năm gợi ý một trọng tâm hành động khác nhau. Có giai đoạn phù hợp để tăng tốc mở rộng, có giai đoạn nên tập trung củng cố chuyên môn hoặc thu gọn những việc dàn trải để phân bổ sức lực hợp lý.',
  },
  expression: {
    key: 'sm',
    name: 'Số sứ mệnh',
    short: 'Sứ mệnh',
    source: 'Từ toàn bộ họ tên',
    calc: 'name',
    what: 'Tác phong làm việc và cách bạn biến năng lực thành kết quả.',
    text: 'Chỉ số này mô tả cách bạn hành động trong thực tế công việc và tập thể: bạn thường đảm nhận vai trò gì khi phối hợp nhóm, xử lý áp lực ra sao và tạo dựng uy tín bằng thế mạnh nào.',
  },
  soul: {
    key: 'lh',
    name: 'Số linh hồn',
    short: 'Linh hồn',
    source: 'Từ các nguyên âm trong tên',
    calc: 'name',
    what: 'Động lực ngầm và nhu cầu tinh thần thật sự bên trong bạn.',
    text: 'Đây là phần nhu cầu sâu kín đứng sau các lựa chọn lớn nhỏ của bạn, đôi khi khác hẳn vẻ ngoài bạn thể hiện. Hiểu rõ chỉ số này giúp bạn lý giải vì sao có những môi trường nhìn bề ngoài rất tốt nhưng vẫn khiến bạn thấy ngột ngạt hoặc trống rỗng.',
  },
  personality: {
    key: 'nc',
    name: 'Số nhân cách',
    short: 'Nhân cách',
    source: 'Từ các phụ âm trong tên',
    calc: 'name',
    what: 'Ấn tượng ban đầu bạn tạo ra khi người khác mới tiếp xúc.',
    text: 'Chỉ số này phản ánh phong thái giao tiếp bề ngoài của bạn trong những lần gặp đầu tiên, chẳng hạn khi đi phỏng vấn, gặp đối tác hoặc bước vào một tập thể mới trước khi mọi người kịp hiểu sâu về bạn.',
  },
};

export const INDEX_ORDER = ['lifePath', 'personalYear', 'expression', 'soul', 'personality'];

export const DATE_METHOD = {
  title: 'Cách tính theo ngày sinh',
  lifePathTitle: 'Số chủ đạo',
  lifePathIntro: 'Bạn viết đầy đủ ngày, tháng, năm sinh dương lịch, sau đó cộng tất cả các chữ số đơn lẻ lại với nhau.',
  rule: {
    vn: 'Nếu tổng lớn hơn 11, bạn tiếp tục cộng các chữ số của tổng đó cho tới khi kết quả nằm trong khoảng từ 2 đến 11. Riêng trường hợp tổng bằng 22 hoặc 33 ở bước trung gian thì giữ nguyên và ghi kèm số rút gọn thành 22/4 hoặc 33/6.',
    western: 'Nếu tổng lớn hơn 9, bạn tiếp tục cộng các chữ số cho tới khi còn một chữ số từ 1 đến 9. Riêng các tổng đặc biệt 11, 22 và 33 được giữ nguyên nếu xuất hiện trong quá trình rút gọn, trong đó 22 và 33 ghi kèm thành 22/4 và 33/6.',
  },
  exampleLabel: 'Ví dụ với ngày sinh 22/06/2002',
  example: { day: 22, month: 6, year: 2002 },
  personalYearTitle: 'Năm cá nhân',
  personalYearIntro:
    'Bạn lấy tổng các chữ số của ngày sinh, tháng sinh cộng với bốn chữ số của năm dương lịch muốn xem, sau đó rút gọn về một số từ 1 đến 9. Chu kỳ Năm cá nhân tính theo lịch dương và bắt đầu chuyển sang số mới từ ngày 1 tháng 1 hằng năm.',
  personalYearExampleLabel: 'Cùng ngày sinh 22/06, tính cho năm 2026',
  personalYearExampleYear: 2026,
};

export const WHY_DIFFERENT = {
  summary: 'Vì sao các trang web khác nhau có thể ra kết quả khác nhau?',
  paragraphs: [
    'Trong thực tế, thần số học có nhiều nhánh quy ước cách rút gọn khác nhau. Có hệ thống rút gọn triệt để về từ 1 đến 9, có hệ thống tại Việt Nam giữ lại số 10 và 11. Một số nơi cộng gộp toàn bộ ngày tháng năm sinh một lần, trong khi nơi khác lại rút gọn riêng từng cụm ngày, tháng, năm rồi mới cộng tổng, dẫn đến việc xuất hiện hoặc mất đi các số 11, 22, 33 ở bước giữa.',
    'Tương tự với phần họ tên, cách phân loại chữ Y là nguyên âm hay phụ âm cũng tạo ra sự chênh lệch ở Số linh hồn và Số nhân cách. Trang web này trình bày minh bạch toàn bộ công thức và từng bước cộng trung gian để bạn dễ dàng kiểm tra, đối chiếu.',
  ],
};

export const NAME_METHOD = {
  title: 'Cách tính theo họ tên',
  intro:
    'Mỗi chữ cái trong bảng chữ cái La-tinh tương ứng với một giá trị từ 1 đến 9 theo chuẩn Pythagoras dưới đây. Trước khi tính, tiếng Việt có dấu được chuyển về chữ in hoa không dấu, chẳng hạn Đặng đổi thành DANG và Thùy đổi thành THUY.',
  vowels:
    'Các chữ A, E, I, O, U và Y được tính là nguyên âm. Trong cấu trúc tên tiếng Việt, chữ Y luôn đóng vai trò nguyên âm (như trong Huy, Vy, Thùy, Yến). Toàn bộ các chữ cái còn lại được tính là phụ âm.',
  formulas: [
    { index: 'expression', text: 'cộng giá trị của toàn bộ các chữ cái trong họ tên đầy đủ.' },
    { index: 'soul', text: 'chỉ cộng giá trị của các nguyên âm trong họ tên.' },
    { index: 'personality', text: 'chỉ cộng giá trị của các phụ âm trong họ tên.' },
  ],
  reduce: 'Cả ba chỉ số từ họ tên đều được rút gọn về một chữ số từ 1 đến 9. Nếu quá trình cộng xuất hiện tổng 11, 22 hoặc 33 thì giữ nguyên số đặc biệt đó.',
  exampleLabel: 'Ví dụ với tên Bảo Huy',
  exampleName: 'Bảo Huy',
  legendVowel: 'Nguyên âm',
  legendConsonant: 'Phụ âm',
  yOption: {
    summary: 'Tuỳ chọn cho tên tiếng nước ngoài',
    text: 'Trong một số tên tiếng Anh hoặc tên quốc tế, chữ Y khi đứng ghép trước nguyên âm khác sẽ phát âm như phụ âm (ví dụ Yolanda hoặc Maya). Nếu tính cho các tên này, bạn có thể bật tuỳ chọn bên dưới để chuyển Y sang nhóm phụ âm.',
    label: 'Tính chữ Y là phụ âm',
  },
};

export const CALCULATORS = {
  title: 'Bảng tính chỉ số',
  lead: 'Hai bảng tính dưới đây hoạt động độc lập. Bạn có thể tra cứu riêng theo ngày sinh, riêng theo họ tên, hoặc nhập cả hai để lập hồ sơ đầy đủ 5 chỉ số.',
  date: {
    title: 'Tính theo ngày sinh',
    sub: 'Xác định Số chủ đạo và Năm cá nhân',
    legend: 'Ngày sinh dương lịch',
    day: 'Ngày',
    month: 'Tháng',
    year: 'Năm',
    target: 'Năm muốn xem',
    targetHint: 'Dùng để tính chỉ số Năm cá nhân. Mặc định chọn năm hiện tại.',
    thisYear: 'Năm nay',
    nextYear: 'Năm sau',
    submit: 'Tính',
  },
  name: {
    title: 'Tính theo họ tên',
    sub: 'Xác định Số sứ mệnh, Số linh hồn và Số nhân cách',
    label: 'Họ và tên đầy đủ',
    placeholder: 'Ví dụ: Nguyễn Thị Thùy Linh',
    hint: 'Bạn có thể gõ tiếng Việt có dấu bình thường. Nên nhập đúng họ tên đầy đủ trên giấy khai sinh để có kết quả sát nhất.',
    previewLabel: 'Chuỗi chữ dùng để tính',
    empty: 'Bạn chưa nhập họ tên.',
    noLetters: 'Họ tên cần có ít nhất một chữ cái từ A đến Z.',
    submit: 'Tính',
    noSoul: 'Chuỗi tên này không chứa nguyên âm nên chưa thể tính Số linh hồn.',
    noPersonality: 'Chuỗi tên này không chứa phụ âm nên chưa thể tính Số nhân cách.',
  },
  cta: 'Xem bản phân tích chi tiết',
  ctaNote: 'Đường dẫn kết quả chỉ lưu các con số đã tính, hoàn toàn không chứa họ tên hay ngày sinh của bạn.',
};
