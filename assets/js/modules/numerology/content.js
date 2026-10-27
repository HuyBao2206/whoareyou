// Nội dung phần giới thiệu của thẻ Thần số học.
// Văn phong: xem mục “Văn phong” trong CLAUDE.md trước khi sửa.

export const PRIVACY_LINE =
  'Mọi phép tính chạy ngay trên máy của bạn. Trang không lưu, cũng không gửi tên hay ngày sinh của bạn đi đâu cả.';

export const EASTER_EGG = 'Ồ, bạn đang tính cho chính người làm ra trang này đấy.';

export const INTRO = {
  eyebrow: 'Thẻ 01 · Numerology',
  title: 'Thần số học',
  lead:
    'Thần số học tính ra vài con số từ ngày sinh và họ tên của bạn, rồi gắn mỗi số với một nhóm tính cách và một bài học. Bên dưới là cách tính từng bước, tiếp theo là hai bộ tính để bạn thử với chính mình.',
};

export const WHAT_IS = {
  title: 'Thần số học là gì',
  paragraphs: [
    'Thần số học nhìn con người qua những con số rút ra từ ngày sinh và họ tên. Cách tính phổ biến nhất hiện nay tương truyền có từ Pythagoras, nhà toán học Hy Lạp cổ đại, nên hay được gọi là thần số học Pythagoras. Mỗi số từ 1 đến 9, cùng vài số đặc biệt như 11, 22 và 33, ứng với một nhóm tính cách và một bài học riêng.',
    'Cứ coi nó như một tấm gương để ngồi ngẫm, giống như đọc xong một cuốn tiểu thuyết rồi tự hỏi mình có giống nhân vật nào không. Thần số học không phải khoa học, cũng không phải lời tiên tri. Nó không đoán được bạn sẽ đỗ trường nào hay sẽ cưới ai. Nó chỉ gợi ra vài câu hỏi đáng nghĩ về cách bạn đang sống, và có khi giúp bạn gọi tên một thói quen trước giờ mình chưa để ý.',
  ],
  quote: 'Đọc như nghe một người quen tinh ý góp ý. Chỗ nào đúng thì giữ lại, chỗ nào không giống mình thì cứ bỏ qua.',
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
    text: 'Con số quan trọng nhất trong bảng. Theo thần số học, nó nói về bài học lớn và hướng đi xuyên suốt đời bạn: việc gì bạn hay làm tốt, chỗ nào hay vấp và điều gì giúp bạn trưởng thành.',
  },
  personalYear: {
    key: 'nn',
    name: 'Năm cá nhân',
    short: 'Năm cá nhân',
    source: 'Từ ngày, tháng sinh và năm muốn xem',
    calc: 'date',
    what: 'Chủ đề của năm bạn đang xem, xoay vòng từ 1 đến 9.',
    text: 'Số này đổi theo từng năm, xoay vòng từ 1 đến 9, mỗi năm một chủ đề. Có năm hợp để bắt đầu, có năm hợp để vun đắp, có năm hợp để khép lại. Biết mình đang ở năm nào thì dễ chọn nhịp làm việc cho vừa sức.',
  },
  expression: {
    key: 'sm',
    name: 'Số sứ mệnh',
    short: 'Sứ mệnh',
    source: 'Từ toàn bộ họ tên',
    calc: 'name',
    what: 'Cách bạn đem năng lực của mình ra dùng.',
    text: 'Số này nói về cách bạn đem năng lực của mình ra dùng: trong công việc, trong nhóm bạn, và ở những việc người khác hay tìm tới nhờ bạn.',
  },
  soul: {
    key: 'lh',
    name: 'Số linh hồn',
    short: 'Linh hồn',
    source: 'Từ các nguyên âm trong tên',
    calc: 'name',
    what: 'Điều bạn thật lòng mong muốn.',
    text: 'Số này nói về điều bạn thật lòng mong muốn, kể cả khi ít khi nói ra. Có người mong được yên ổn, có người mong được công nhận, có người chỉ mong được tự do.',
  },
  personality: {
    key: 'nc',
    name: 'Số nhân cách',
    short: 'Nhân cách',
    source: 'Từ các phụ âm trong tên',
    calc: 'name',
    what: 'Ấn tượng đầu tiên người khác thấy ở bạn.',
    text: 'Số này nói về ấn tượng đầu tiên bạn để lại, lúc người khác chưa kịp hiểu bạn nhiều, như trong buổi phỏng vấn hay lần đầu gặp một nhóm bạn mới.',
  },
};

export const INDEX_ORDER = ['lifePath', 'personalYear', 'expression', 'soul', 'personality'];

export const DATE_METHOD = {
  title: 'Cách tính theo ngày sinh',
  lifePathTitle: 'Số chủ đạo',
  lifePathIntro: 'Viết ngày sinh đầy đủ theo dạng ngày, tháng, năm, rồi cộng tất cả các chữ số lại.',
  rule: {
    vn: 'Tổng lớn hơn 11 thì cộng tiếp các chữ số của tổng, tới khi còn từ 11 trở xuống. Riêng tổng bằng 22 thì giữ nguyên và viết kèm số rút gọn thành 22/4. Tổng bằng 33 thì cộng tiếp ra 6.',
    western: 'Tổng lớn hơn 9 thì cộng tiếp các chữ số của tổng, tới khi còn một chữ số. Riêng 11, 22 và 33 gặp ở bước nào cũng giữ nguyên. Hai số 22 và 33 viết kèm số rút gọn thành 22/4 và 33/6.',
  },
  exampleLabel: 'Ví dụ với ngày sinh 22/06/2002',
  example: { day: 22, month: 6, year: 2002 },
  personalYearTitle: 'Năm cá nhân',
  personalYearIntro:
    'Cộng các chữ số của ngày sinh, tháng sinh và năm muốn xem, rồi rút gọn về một số từ 1 đến 9. Năm cá nhân tính theo năm dương lịch, sang ngày 1 tháng 1 là đổi số.',
  personalYearExampleLabel: 'Vẫn ngày sinh 22/06, xem cho năm 2026',
  personalYearExampleYear: 2026,
};

export const WHY_DIFFERENT = {
  summary: 'Vì sao nơi khác có thể ra số khác?',
  paragraphs: [
    'Thần số học có nhiều trường phái, mỗi nơi tính một kiểu. Có nơi rút gọn về một chữ số từ 1 đến 9, có nơi dừng lại khi tổng còn 10 hoặc 11. Có nơi giữ số 33, có nơi không. Có nơi cộng riêng ngày, tháng, năm rồi mới gộp lại, nên tổng ở giữa khác đi và có khi ra số cuối khác.',
    'Với họ tên, có nơi coi Y là phụ âm, có nơi coi là nguyên âm. Trang này tính theo cách phổ biến ở Việt Nam và ghi rõ từng bước để bạn tự đối chiếu với nơi khác.',
  ],
};

export const NAME_METHOD = {
  title: 'Cách tính theo họ tên',
  intro:
    'Mỗi chữ cái ứng với một con số từ 1 đến 9 theo bảng Pythagoras bên dưới. Tên có dấu được đổi về chữ in hoa không dấu trước khi tính, ví dụ Đặng thành DANG và Thùy thành THUY.',
  vowels:
    'A, E, I, O, U và Y là nguyên âm, các chữ còn lại là phụ âm. Trong tên tiếng Việt, Y luôn đọc như nguyên âm: Huy, Vy, Thùy, Yến.',
  yNote:
    'Tên nước ngoài thì bật công tắc “Tên nước ngoài” cạnh ô nhập tên: Y đứng ngay trước một nguyên âm, như trong Yolanda hay Maya, sẽ được tính là phụ âm.',
  formulas: [
    { index: 'expression', text: 'cộng giá trị của mọi chữ cái trong họ tên.' },
    { index: 'soul', text: 'chỉ cộng các nguyên âm.' },
    { index: 'personality', text: 'chỉ cộng các phụ âm.' },
  ],
  reduce: 'Cả ba số đều rút gọn về một chữ số từ 1 đến 9. Gặp 11, 22 hoặc 33 ở bước nào thì giữ nguyên số đó.',
  exampleLabel: 'Ví dụ với tên Bảo Huy',
  exampleName: 'Bảo Huy',
  legendVowel: 'Nguyên âm',
  legendConsonant: 'Phụ âm',
  legendY: 'Y tuỳ vị trí',
  yOption: {
    label: 'Tên nước ngoài',
    hint: 'Bật lên thì Y đứng ngay trước nguyên âm được tính là phụ âm, như Yolanda, Maya. Chỉ áp dụng trong lần mở trang này.',
    toastOn: 'Đã bật cách tính cho tên nước ngoài: Y đứng trước nguyên âm là phụ âm.',
    toastOff: 'Đã tắt cách tính cho tên nước ngoài: Y lại là nguyên âm.',
  },
};

export const CALCULATORS = {
  title: 'Hai bộ tính',
  lead: 'Hai bộ tính dùng riêng được. Chỉ nhập ngày sinh hay chỉ nhập họ tên đều được, nhập cả hai thì có đủ năm con số.',
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
    hint: 'Gõ có dấu cũng được. Nên dùng họ tên đầy đủ như trên giấy khai sinh.',
    previewLabel: 'Tên dùng để tính',
    empty: 'Bạn chưa nhập họ tên.',
    noLetters: 'Tên cần có ít nhất một chữ cái từ A tới Z.',
    submit: 'Tính',
    noSoul: 'Tên này không có nguyên âm nên chưa tính được Số linh hồn.',
    noPersonality: 'Tên này không có phụ âm nên chưa tính được Số nhân cách.',
  },
  cta: 'Xem thông điệp của bạn',
  ctaNote: 'Liên kết kết quả chỉ chứa các con số, không có tên hay ngày sinh.',
};
