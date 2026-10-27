// Chữ của thẻ Cung hoàng đạo & con giáp (trừ nội dung từng cung, từng con giáp: xem signs.js, animals.js).
// Hai giọng: phần kiến thức viết chuẩn mực như sách báo; phần kết quả gần gũi. Văn phong: CLAUDE.md.

export const UPDATED = '10/2026';

export const PRIVACY_LINE =
  'Mọi phép tính chạy ngay trên máy của bạn. Trang không lưu, cũng không gửi ngày sinh của bạn đi đâu cả.';

export const INTRO = {
  eyebrow: 'Thẻ 02 · Zodiac',
  title: 'Hai bầu trời',
  lead:
    'Phương Tây nhìn vị trí Mặt Trời để chia mười hai cung hoàng đạo. Phương Đông đếm năm theo Can Chi và mười hai con giáp. Nhập ngày sinh để xem hai cách nhìn ấy nói gì về cùng một người.',
  west: 'Phương Tây · Hoàng đạo',
  east: 'Phương Đông · Can Chi',
};

export const FORM = {
  title: 'Ngày sinh của bạn',
  sub: 'Ra cung hoàng đạo, năm âm lịch, con giáp và mệnh nạp âm.',
  submit: 'Xem hai bầu trời',
  again: 'Xem cho ngày khác',
};

export const WHAT_IS = {
  title: 'Hai hệ này là gì',
  paragraphs: [
    'Cung hoàng đạo là cách chiêm tinh phương Tây chia một năm thành mười hai phần theo vị trí của Mặt Trời trên nền trời. Mỗi cung gắn với một trong bốn nguyên tố (Lửa, Đất, Khí, Nước), một trong ba tính chất (khởi xướng, kiên định, linh hoạt) và một hành tinh chủ quản. Từ ba yếu tố ấy, chiêm tinh suy ra nét tính cách của người sinh trong cung.',
    'Con giáp thuộc hệ Can Chi của lịch phương Đông. Mười thiên can ghép lần lượt với mười hai địa chi thành vòng sáu mươi năm, gọi là lục thập hoa giáp. Mỗi địa chi ứng với một con vật. Người Việt gọi chi Mão là Mèo, chi Sửu là Trâu, chi Mùi là Dê, chi Hợi là Lợn, khác với tên gọi ở một số nước dùng chung hệ này.',
    'Con giáp tính theo năm âm lịch, nên đổi vào ngày Tết chứ không phải ngày 1 tháng 1. Lịch âm Việt Nam tính theo giờ Hà Nội (UTC+7), còn lịch Trung Quốc tính theo giờ Bắc Kinh (UTC+8). Vì lệch một giờ, có năm Tết hai nước khác ngày: năm 2007 Tết Việt Nam là ngày 17/2, Trung Quốc là ngày 18/2; năm 1985 Tết Việt Nam còn sớm hơn trọn một tháng.',
  ],
  quote:
    'Cả hai đều là quan niệm văn hoá có từ hàng nghìn năm, không phải khoa học. Cứ đọc để hiểu thêm về mình và về cách người xưa nhìn trời, đừng để chúng quyết định thay mình.',
};

export const RESULT = {
  title: 'Thẻ đôi của bạn',
  west: 'Phương Tây',
  east: 'Phương Đông',
  element: 'Nguyên tố',
  modality: 'Tính chất',
  ruler: 'Sao chủ quản',
  animal: 'Con giáp',
  napAm: 'Mệnh nạp âm',
  hanh: 'Hành',
  more: 'Đọc đầy đủ',
  less: 'Thu gọn',
  strengths: 'Điểm mạnh',
  watchOut: 'Điều cần để ý',
  work: 'Công việc',
  love: 'Tình cảm',
  culture: 'Trong văn hoá Việt',
  tamHop: 'Tam hợp',
  xung: 'Tứ hành xung',
  save: 'Lưu thẻ đôi thành ảnh',
  saved: 'Đã lưu ảnh. Ảnh chỉ có cung, con giáp và mệnh, không có ngày sinh của bạn.',
  saveFail: 'Chưa lưu được ảnh. Thử lại, hoặc chụp màn hình phần thẻ đôi nhé.',
  imageNote: 'Ảnh không chứa ngày sinh hay tên của bạn.',
  western: 'Theo chiêm tinh phương Tây, để tham khảo.',
  eastern: 'Theo quan niệm dân gian, để tham khảo.',
};

/** Câu ghi chú cho người sinh sát ngày giao cung. */
export const cuspNote = (date, main, other) =>
  `Ngày ${date} nằm sát ranh giới giữa ${main} và ${other}. Bảng ngày phổ biến xếp ngày này vào ${main}, nhưng thời điểm Mặt Trời giao cung xê dịch khoảng một ngày tuỳ năm, tuỳ giờ sinh, nên đọc thêm cả ${other} cho chắc.`;

/** Câu ghi chú cho người sinh trước Tết. */
export const beforeTetNote = (year, tet, canChi, animal) =>
  `Năm ${year}, Tết rơi vào ngày ${tet}. Sinh trước Tết nên theo âm lịch bạn vẫn thuộc năm ${canChi}, tuổi ${animal}.`;

export const SIGNS_SEC = {
  title: 'Mười hai cung',
  lead: 'Chọn một cung để đọc. Nội dung viết theo mô tả truyền thống của chiêm tinh phương Tây, để tham khảo.',
  range: 'Ngày sinh',
};

export const ANIMALS_SEC = {
  title: 'Mười hai con giáp',
  lead: 'Chọn một con giáp để đọc. Nội dung viết theo quan niệm dân gian Việt Nam, để tham khảo.',
  hours: 'Giờ',
  element: 'Hành của chi',
  groupsTitle: 'Tam hợp và tứ hành xung',
  groups: [
    'Trong văn hoá Á Đông, mười hai địa chi còn được xếp nhóm. Tam hợp gồm bốn nhóm, mỗi nhóm ba chi cách nhau bốn năm: Thân, Tý, Thìn; Dần, Ngọ, Tuất; Tỵ, Dậu, Sửu; Hợi, Mão, Mùi. Theo quan niệm cổ, ba chi trong một nhóm hợp thành một “cục” ngũ hành, lần lượt là Thủy, Hỏa, Kim và Mộc.',
    'Tứ hành xung gồm ba nhóm, mỗi nhóm bốn chi đứng ở bốn góc của vòng mười hai chi: Tý, Ngọ, Mão, Dậu; Thìn, Tuất, Sửu, Mùi; Dần, Thân, Tỵ, Hợi. Những cách ghép này hay được nhắc khi chọn ngày, xem tuổi làm ăn hay cưới hỏi.',
    'Trang trình bày tam hợp và tứ hành xung như một nét văn hoá. Tuổi không quyết định hai người có hợp nhau hay không; điều đó nằm ở cách hai người đối xử với nhau.',
  ],
  tamHopLabel: 'Tam hợp',
  xungLabel: 'Tứ hành xung',
};

export const ELEMENTS_SEC = {
  title: 'Ngũ hành',
  lead:
    'Ngũ hành là năm hành Kim, Mộc, Thủy, Hỏa, Thổ, cách người xưa dùng để giải thích sự vận động của vạn vật. Các hành nuôi nhau theo một vòng (tương sinh) và chế ngự nhau theo một vòng khác (tương khắc). Chạm vào một hành trên sơ đồ để xem nó sinh ra hành nào và khắc hành nào.',
  hint: 'Đường cong: tương sinh. Đường thẳng: tương khắc.',
  // Lý giải truyền thống cho từng quan hệ, viết theo hình ảnh trong tự nhiên.
  sinh: {
    Mộc: 'gỗ cháy thành lửa',
    Hỏa: 'lửa đốt mọi thứ thành tro, tro thành đất',
    Thổ: 'kim loại hình thành trong lòng đất',
    Kim: 'kim loại nung chảy thành thể lỏng',
    Thủy: 'nước tưới cho cây lớn',
  },
  khac: {
    Mộc: 'rễ cây hút chất của đất',
    Thổ: 'đất đắp đê ngăn nước',
    Thủy: 'nước dập tắt lửa',
    Hỏa: 'lửa nung chảy kim loại',
    Kim: 'dao rìu bằng kim loại chặt được cây',
  },
  napAmTitle: 'Mệnh nạp âm là gì',
  napAm: [
    'Khi nói “tuổi Nhâm Ngọ mệnh Mộc”, người ta đang nói về hành nạp âm của năm sinh. Trong vòng sáu mươi năm, cứ hai năm liền nhau được gán chung một hành và một hình ảnh cụ thể, tổng cộng ba mươi tên gọi. Chữ “nạp âm” có nghĩa là thu nạp âm thanh: theo cách giải thích truyền thống, mỗi cặp năm được ghép với một âm trong hệ âm luật cổ.',
    'Hành nạp âm khác với hành của can hay chi đứng riêng. Năm Nhâm Ngọ có can Nhâm thuộc Thủy, chi Ngọ thuộc Hỏa, nhưng nạp âm là Dương Liễu Mộc, tức hành Mộc. Tên gọi cho biết hành ấy ở trạng thái nào: lửa trong lò khác lửa sấm sét, nước dưới khe khác nước biển lớn.',
  ],
  tableTitle: 'Bảng 30 nạp âm',
  yours: 'Mệnh của bạn',
};

// Nghĩa của 30 tên nạp âm, theo thứ tự trong NAP_AM (calc.js).
export const NAP_AM_MEANING = [
  'vàng trong biển',
  'lửa trong lò',
  'cây trong rừng lớn',
  'đất ven đường',
  'kim loại ở mũi kiếm',
  'lửa trên đỉnh núi',
  'nước dưới khe',
  'đất trên mặt thành',
  'kim loại trong sáp trắng (chân nến)',
  'gỗ cây dương liễu',
  'nước giữa dòng suối',
  'đất trên mái nhà',
  'lửa sấm sét',
  'gỗ cây tùng, cây bách',
  'dòng nước chảy dài',
  'vàng lẫn trong cát',
  'lửa dưới chân núi',
  'cây ở đồng bằng',
  'đất trên vách',
  'vàng lá, vàng dát mỏng',
  'lửa ngọn đèn',
  'nước trên trời, tức nước mưa',
  'đất ven đầm lớn',
  'vàng làm trâm, làm vòng',
  'gỗ cây dâu',
  'nước khe lớn',
  'đất lẫn trong cát',
  'lửa trên trời, tức ánh nắng',
  'gỗ cây thạch lựu',
  'nước biển lớn',
];

export const SKY_SEC = {
  title: 'Bầu trời thật hôm bạn sinh',
  lead:
    'Cung chiêm tinh và chòm sao mang cùng tên, nhưng không trùng nhau. Mục này cho biết vào hôm bạn sinh, Mặt Trời thực sự đứng trước chòm sao nào.',
  empty: 'Nhập ngày sinh ở trên để xem Mặt Trời nằm trước chòm sao nào vào hôm bạn sinh.',
  bandSigns: 'Cung chiêm tinh (12 phần bằng nhau)',
  bandStars: 'Chòm sao thật (ranh giới IAU)',
  sun: 'Mặt Trời hôm bạn sinh',
  method:
    'Vị trí Mặt Trời tính theo công thức của Jean Meeus cho 12 giờ trưa giờ Việt Nam; ranh giới chòm sao theo bản của Hiệp hội Thiên văn Quốc tế.',
  paragraphs: [
    'Chiêm tinh phương Tây chia đường đi của Mặt Trời thành mười hai phần bằng nhau, mỗi phần 30°, bắt đầu từ điểm xuân phân. Cách chia này định hình từ thời Hy Lạp cổ đại, hơn hai nghìn năm trước, khi điểm xuân phân còn nằm trong chòm Bạch Dương. Vì thế cung đầu tiên mang tên Bạch Dương.',
    'Trục quay của Trái Đất lắc chậm như một con quay sắp đổ, hết một vòng mất khoảng 26.000 năm. Hiện tượng này gọi là tuế sai. Nó làm điểm xuân phân lùi dần so với các vì sao, chừng 1° sau mỗi 72 năm. Đến nay điểm xuân phân đã lùi sang chòm Song Ngư, và các cung chiêm tinh lệch với chòm sao cùng tên gần trọn một chòm.',
    'Năm 1930, Hiệp hội Thiên văn Quốc tế (IAU) công bố ranh giới chính thức của 88 chòm sao, theo bản do nhà thiên văn Eugène Delporte soạn. Các chòm to nhỏ khác nhau: Mặt Trời ở trước chòm Xử Nữ khoảng 45 ngày nhưng chỉ ở chòm Bọ Cạp chừng một tuần. Đường đi của Mặt Trời còn cắt qua chòm Xà Phu (Ophiuchus), từ khoảng 30/11 đến 18/12, nên có người gọi đây là “cung thứ mười ba”.',
    'Chiêm tinh không đổi cung theo những ranh giới này, vì cung được chia theo mùa chứ không theo chòm sao. Mục này chỉ để bạn biết bầu trời thật trông thế nào vào hôm mình chào đời.',
  ],
};

/** Câu kết quả cho mục Bầu trời thật. */
export function skyLine({ sky, signName }) {
  const c = sky.constellation;
  if (sky.crossing) {
    return `Đúng hôm bạn sinh, Mặt Trời đi từ chòm ${sky.crossing.from.name} sang chòm ${sky.crossing.to.name}. Cung chiêm tinh của bạn theo bảng ngày là ${signName}.`;
  }
  const same = c.name.startsWith(signName);
  return same
    ? `Hôm bạn sinh, Mặt Trời đứng trước chòm ${c.name} (${c.latin}), trùng tên với cung ${signName} của bạn. Năm nào cũng có vài ngày như thế, khi cung và chòm còn chồng lên nhau.`
    : `Hôm bạn sinh, Mặt Trời đứng trước chòm ${c.name} (${c.latin}), trong khi cung chiêm tinh của bạn là ${signName}.`;
}

export const SOURCES = [
  {
    title: 'Lịch âm và cách tính toán',
    items: [
      { title: 'Âm lịch Việt Nam', by: 'Hồ Ngọc Đức', url: 'https://www.informatik.uni-leipzig.de/~duc/amlich/', note: 'Thuật toán đổi ngày dương sang âm lịch, múi giờ UTC+7.' },
      { title: 'Chung quanh thông tin về ngày âm lịch khác nhau trên một số loại lịch', by: 'Báo Nhân Dân', url: 'https://nhandan.vn/chung-quanh-thong-tin-ve-ngay-am-lich-khac-nhau-tren-mot-so-loai-lich-post489744.html', note: 'Vì sao lịch âm Việt Nam và Trung Quốc có năm lệch ngày.' },
      { title: 'Bản tin Khoa học và Công nghệ số 01/2019', by: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam', url: 'https://isdi.vast.vn/bantin/BantinKHCN012019.pdf', note: 'Múi giờ dùng để làm lịch ở Việt Nam qua các thời kỳ.' },
      { title: 'Astronomical Algorithms (bản 2)', by: 'Jean Meeus, Willmann-Bell', year: '1998', note: 'Công thức vị trí Mặt Trời.' },
      { title: 'Astronomy Engine', by: 'Don Cross', url: 'https://github.com/cosinekitty/astronomy', note: 'Dùng khi phát triển để tính ranh giới chòm sao dọc hoàng đạo và đối chiếu từng ngày âm lịch 1950–2025.' },
      { title: 'Lịch vạn niên', by: 'xemlicham.com, ngaydep.com', url: 'https://www.xemlicham.com/', note: 'Đối chiếu ngẫu nhiên 10 ngày âm lịch trong bộ kiểm thử.' },
    ],
  },
  {
    title: 'Thiên văn',
    items: [
      { title: 'Constellations (Astronomy FAQs)', by: 'International Astronomical Union', url: 'https://www.iau.org/IAU/Astronomy-FAQs/Constellations.aspx', note: '88 chòm sao và ranh giới do Eugène Delporte soạn.' },
      { title: 'The Truth About Astrological Signs', by: 'Space.com', url: 'https://www.space.com/34475-the-truth-about-astrological-signs.html', note: 'Tuế sai và chòm Xà Phu trên đường đi của Mặt Trời.' },
      { title: 'Sun in Ophiuchus November 30 to December 18', by: 'EarthSky', url: 'https://earthsky.org/astronomy-essentials/sun-in-ophiuchus-november-30-to-december-18/', note: 'Khoảng thời gian Mặt Trời đi qua chòm Xà Phu.' },
    ],
  },
  {
    title: 'Chiêm tinh phương Tây',
    items: [
      { title: 'Astrology', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/topic/astrology', note: 'Lịch sử và nguyên tắc của chiêm tinh.' },
      { title: 'Zodiac Modalities Explained: Cardinal, Fixed & Mutable Signs', by: 'The Old Farmer’s Almanac', url: 'https://www.almanac.com/cardinal-fixed-mutable-cardinal-signs', note: 'Ba tính chất khởi xướng, kiên định, linh hoạt.' },
      { title: 'Sun Signs', by: 'Linda Goodman, Taplinger', year: '1968', note: 'Mô tả tính cách truyền thống của 12 cung.' },
    ],
  },
  {
    title: 'Con giáp và ngũ hành trong văn hoá Việt',
    items: [
      { title: 'Vì sao năm Mão của Việt Nam là mèo, ở Trung Quốc, Hàn Quốc là thỏ', by: 'Znews', url: 'https://znews.vn/vi-sao-nam-mao-cua-viet-nam-la-meo-o-trung-quoc-han-quoc-la-tho-post1391122.html', note: 'Các cách giải thích chuyện Mèo thay Thỏ.' },
      { title: 'Vì sao năm Mão của Việt Nam là mèo, ở Trung Quốc, Hàn Quốc là thỏ?', by: 'VTC News', url: 'https://www.vtcnews.vn/vi-sao-nam-mao-cua-viet-nam-la-meo-o-trung-quoc-han-quoc-la-tho-ar725060.html' },
      { title: 'Cấm yêu vì “tứ hành xung”', by: 'VnExpress', url: 'https://vnexpress.net/cam-yeu-vi-tu-hanh-xung-2834019.html', note: 'Tứ hành xung trong đời sống, nhìn như một quan niệm.' },
      { title: 'Tra cứu con giáp theo năm sinh, cách tính tuổi Can Chi ngũ hành', by: 'Điện Máy Chợ Lớn', url: 'https://dienmaycholon.com/kinh-nghiem-mua-sam/tra-cuu-con-giap-theo-nam-sinh-cach-tinh-tuoi-can-chi-ngu-hanh', note: 'Bảng 60 hoa giáp và nạp âm phổ thông, dùng để đối chiếu tên gọi.' },
    ],
  },
];
