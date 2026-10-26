// Nội dung phần giới thiệu của thẻ Thần số học.
// Văn phong: xưng "bạn", câu đủ ý, ví dụ đời thường. Xem mục 3 của brief trước khi sửa.

export const PRIVACY_LINE =
  'Mọi phép tính diễn ra ngay trên máy của bạn. Web không lưu và không gửi tên hay ngày sinh của bạn đi đâu cả.';

export const EASTER_EGG = 'Ồ, bạn đang tính cho chính người làm ra trang này đấy 👀';

export const INTRO = {
  eyebrow: 'Thẻ 01 · Numerology',
  title: 'Thần số học',
  lead:
    'Thần số học đọc ngày sinh và họ tên của bạn thành vài con số, rồi gắn mỗi số với một nhóm tính cách và một bài học. Phần dưới giải thích cách tính từng bước, sau đó là hai bộ tính để bạn thử với chính mình.',
};

export const WHAT_IS = {
  title: 'Thần số học là gì',
  paragraphs: [
    'Thần số học là cách nhìn con người qua những con số rút ra từ ngày sinh và họ tên. Cách tính được dùng nhiều nhất hiện nay tương truyền gắn với Pythagoras, nhà toán học Hy Lạp cổ đại, nên thường được gọi là thần số học Pythagoras. Mỗi con số từ 1 đến 9, cùng vài số đặc biệt như 11, 22 và 33, được gắn với một nhóm tính cách và một bài học riêng.',
    'Bạn nên coi nó như một tấm gương để ngồi ngẫm, giống cách mình đọc một cuốn tiểu thuyết rồi tự hỏi mình có giống nhân vật nào không. Thần số học không phải khoa học, cũng không phải lời tiên tri. Nó không đoán được bạn sẽ đỗ trường nào hay sẽ cưới ai. Điều nó làm được là gợi ra vài câu hỏi đáng nghĩ về cách bạn đang sống, và đôi khi giúp bạn gọi tên một thói quen mà trước giờ mình chưa để ý.',
  ],
  quote: 'Bạn đọc như đọc lời góp ý của một người quen tinh ý. Chỗ nào đúng thì giữ lại, chỗ nào không giống mình thì cứ bỏ qua.',
};

/** Thông tin chung về 5 chỉ số. key là tên tham số trên URL kết quả. */
export const INDEX_META = {
  lifePath: {
    key: 'cd',
    name: 'Số chủ đạo',
    short: 'Chủ đạo',
    source: 'Từ ngày sinh',
    calc: 'date',
    what: 'Bài học và hướng đi xuyên suốt cuộc đời bạn.',
    text: 'Đây là con số quan trọng nhất trong bảng. Nó nói về bài học lớn và hướng đi xuyên suốt đời bạn: bạn thường làm tốt việc gì, hay vấp ở đâu và lớn lên nhờ điều gì.',
  },
  personalYear: {
    key: 'nn',
    name: 'Năm cá nhân',
    short: 'Năm cá nhân',
    source: 'Từ ngày, tháng sinh và năm muốn xem',
    calc: 'date',
    what: 'Chủ đề của năm bạn đang xem, xoay vòng từ 1 đến 9.',
    text: 'Con số này xoay vòng từ 1 đến 9, mỗi năm mang một chủ đề riêng. Có năm hợp để bắt đầu, có năm hợp để vun đắp, có năm hợp để khép lại. Biết mình đang ở năm nào giúp bạn chọn nhịp làm việc cho vừa sức.',
  },
  expression: {
    key: 'sm',
    name: 'Số sứ mệnh',
    short: 'Sứ mệnh',
    source: 'Từ toàn bộ họ tên',
    calc: 'name',
    what: 'Cách bạn thể hiện năng lực của mình ra bên ngoài.',
    text: 'Số này cho thấy cách bạn đem năng lực của mình ra bên ngoài: trong công việc, trong nhóm bạn và trong những việc người khác hay tìm tới nhờ bạn.',
  },
  soul: {
    key: 'lh',
    name: 'Số linh hồn',
    short: 'Linh hồn',
    source: 'Từ các nguyên âm trong tên',
    calc: 'name',
    what: 'Điều bạn thật sự mong muốn ở bên trong.',
    text: 'Đây là điều bạn thật sự mong muốn ở bên trong, kể cả khi bạn ít khi nói ra. Có người mong được yên ổn, có người mong được công nhận, có người chỉ mong được tự do.',
  },
  personality: {
    key: 'nc',
    name: 'Số nhân cách',
    short: 'Nhân cách',
    source: 'Từ các phụ âm trong tên',
    calc: 'name',
    what: 'Ấn tượng đầu tiên người khác thấy ở bạn.',
    text: 'Số này mô tả ấn tượng đầu tiên người khác có về bạn, lúc họ chưa kịp hiểu bạn nhiều, như trong buổi phỏng vấn hay lần đầu gặp một nhóm bạn mới.',
  },
};

export const INDEX_ORDER = ['lifePath', 'personalYear', 'expression', 'soul', 'personality'];

export const DATE_METHOD = {
  title: 'Cách tính theo ngày sinh',
  lifePathTitle: 'Số chủ đạo',
  lifePathIntro: 'Bạn viết ngày sinh đầy đủ theo dạng ngày, tháng, năm, rồi cộng tất cả các chữ số lại với nhau.',
  rule: {
    vn: 'Nếu tổng lớn hơn 11, bạn cộng tiếp các chữ số của tổng cho tới khi còn từ 11 trở xuống. Riêng tổng bằng 22 hoặc 33 thì giữ nguyên và viết kèm số rút gọn, thành 22/4 và 33/6.',
    western: 'Nếu tổng lớn hơn 9, bạn cộng tiếp các chữ số của tổng cho tới khi còn một chữ số. Riêng 11, 22 và 33 thì giữ nguyên nếu gặp ở bất kỳ bước nào, trong đó 22 và 33 được viết kèm số rút gọn thành 22/4 và 33/6.',
  },
  exampleLabel: 'Ví dụ với ngày sinh 22/06/2002',
  example: { day: 22, month: 6, year: 2002 },
  personalYearTitle: 'Năm cá nhân',
  personalYearIntro:
    'Bạn cộng các chữ số của ngày sinh, tháng sinh và năm muốn xem, rồi rút gọn về một số từ 1 đến 9. Năm cá nhân tính theo năm dương lịch và đổi số vào ngày 1 tháng 1.',
  personalYearExampleLabel: 'Vẫn ngày sinh 22/06, xem cho năm 2026',
  personalYearExampleYear: 2026,
};

export const WHY_DIFFERENT = {
  summary: 'Vì sao nơi khác có thể ra số khác?',
  paragraphs: [
    'Thần số học có nhiều trường phái và mỗi nơi tính hơi khác nhau. Có nơi rút gọn về một chữ số từ 1 đến 9, có nơi dừng lại khi tổng còn 10 hoặc 11. Có nơi giữ số 33, có nơi không. Có nơi cộng riêng ngày, tháng, năm rồi mới gộp lại, nên tổng ở giữa khác đi và đôi khi ra số cuối khác.',
    'Với họ tên, có nơi coi Y là phụ âm, có nơi coi là nguyên âm. Trang này tính theo cách phổ biến ở Việt Nam và ghi rõ từng bước, để bạn tự đối chiếu được với nơi khác.',
  ],
};

export const NAME_METHOD = {
  title: 'Cách tính theo họ tên',
  intro:
    'Mỗi chữ cái ứng với một con số từ 1 đến 9 theo bảng Pythagoras bên dưới. Tên có dấu được đổi về chữ in hoa không dấu trước khi tính, ví dụ Đặng thành DANG và Thùy thành THUY.',
  vowels:
    'A, E, I, O, U và Y được tính là nguyên âm. Trong tên tiếng Việt, Y luôn đọc như nguyên âm, như trong Huy, Vy, Thùy hay Yến. Các chữ còn lại là phụ âm.',
  formulas: [
    { index: 'expression', text: 'cộng giá trị của mọi chữ cái trong họ tên.' },
    { index: 'soul', text: 'chỉ cộng các nguyên âm.' },
    { index: 'personality', text: 'chỉ cộng các phụ âm.' },
  ],
  reduce: 'Cả ba số đều rút gọn về một chữ số từ 1 đến 9. Nếu ở bước nào đó gặp 11, 22 hoặc 33 thì giữ nguyên số đó.',
  exampleLabel: 'Ví dụ với tên Bảo Huy',
  exampleName: 'Bảo Huy',
  legendVowel: 'Nguyên âm',
  legendConsonant: 'Phụ âm',
  yOption: {
    summary: 'Tuỳ chọn cho tên nước ngoài',
    text: 'Với một số tên nước ngoài, Y đứng cạnh nguyên âm khác và đọc như phụ âm, ví dụ Yolanda hay Maya. Khi đó bạn có thể coi Y là phụ âm. Tuỳ chọn này chỉ áp dụng trong lần mở trang hiện tại.',
    label: 'Coi Y là phụ âm',
  },
};

export const CALCULATORS = {
  title: 'Hai bộ tính',
  lead: 'Mỗi bộ tính dùng độc lập. Bạn có thể chỉ nhập ngày sinh, chỉ nhập họ tên, hoặc nhập cả hai để có đủ năm con số.',
  date: {
    title: 'Tính theo ngày sinh',
    sub: 'Ra Số chủ đạo và Năm cá nhân',
    legend: 'Ngày sinh',
    day: 'Ngày',
    month: 'Tháng',
    year: 'Năm',
    target: 'Năm muốn xem',
    targetHint: 'Dùng để tính Năm cá nhân. Mặc định là năm nay.',
    thisYear: 'Năm nay',
    nextYear: 'Năm sau',
    submit: 'Tính',
  },
  name: {
    title: 'Tính theo họ tên',
    sub: 'Ra Số sứ mệnh, Số linh hồn và Số nhân cách',
    label: 'Họ và tên đầy đủ',
    placeholder: 'Ví dụ: Nguyễn Thị Thùy Linh',
    hint: 'Gõ có dấu cũng được. Bạn nên dùng họ tên đầy đủ như trên giấy khai sinh.',
    previewLabel: 'Tên dùng để tính',
    empty: 'Bạn chưa nhập họ tên.',
    noLetters: 'Tên cần có ít nhất một chữ cái A đến Z.',
    submit: 'Tính',
    noSoul: 'Tên này không có nguyên âm nên chưa tính được Số linh hồn.',
    noPersonality: 'Tên này không có phụ âm nên chưa tính được Số nhân cách.',
  },
  cta: 'Xem thông điệp của bạn',
  ctaNote: 'Liên kết kết quả chỉ chứa các con số, không có tên hay ngày sinh.',
};
