// Chữ của thẻ Sở thích nghề nghiệp (trừ nội dung sáu nhóm, bộ hoạt động và các cặp: xem types.js, items.js, pairs.js).
// Hai giọng: phần kiến thức viết chuẩn mực như sách báo; phần kết quả gần gũi. Văn phong: CLAUDE.md.

export const UPDATED = '10/2026';

export const PRIVACY_LINE =
  'Trang không hỏi tên hay ngày sinh. Điểm được tính ngay trên máy của bạn, và mã Holland chỉ được giữ tạm trong tab đang mở, đóng tab là mất.';

export const INTRO = {
  eyebrow: 'Thẻ 04 · Career Interests',
  title: 'Tổ ong',
  lead:
    'Bốn mươi tám việc quen thuộc, từ sửa xe máy, dạy kèm tới bán hàng online. Gặp việc nào thì chọn thích, không thích hay phân vân. Cuối bài, sáu ô tổ ong đầy lên theo điểm của sáu nhóm sở thích, và ba ô đầy nhất ghép thành mã Holland của bạn.',
  self:
    'Bộ hoạt động do HUB tự soạn theo định nghĩa sáu nhóm của Holland, chưa được chuẩn hoá. Kết quả để gợi hướng tìm hiểu, không phải để chọn hộ một nghề.',
};

export const QUIZ = {
  title: 'Bạn thấy thế nào với việc này?',
  hintTouch: 'Vuốt phải là Thích, vuốt trái là Không thích, vuốt lên là Phân vân.',
  hintKeys: 'Trên máy tính, bấm nút hoặc dùng phím mũi tên: → Thích, ← Không thích, ↑ Phân vân. Bấm Backspace để quay lại câu trước.',
  like: 'Thích',
  dislike: 'Không thích',
  unsure: 'Phân vân',
  back: 'Câu trước',
  progress: (n, total) => `${n}/${total}`,
  done: 'Xong cả 48 hoạt động. Tổ ong của bạn ở ngay bên dưới.',
  restart: 'Làm lại từ đầu',
  resume: 'Bài này đã làm xong trong lần mở trước. Tổ ong vẫn còn ở bên dưới.',
};

export const RESULT = {
  title: 'Tổ ong của bạn',
  codeLabel: 'Mã Holland',
  scoresTitle: 'Điểm từng nhóm',
  scoreUnit: (n, max) => `${n}/${max}`,
  topTitle: 'Ba nhóm nổi nhất',
  pairTitle: 'Hai chữ đầu nói gì',
  jobsLabel: 'Nghề ví dụ',
  consistencyTitle: 'Tính nhất quán',
  save: 'Lưu tổ ong thành ảnh',
  saved: 'Đã lưu ảnh. Ảnh chỉ có mã Holland và điểm sáu nhóm.',
  saveFail: 'Chưa lưu được ảnh. Thử lại, hoặc chụp màn hình phần tổ ong nhé.',
  imageNote: 'Ảnh không chứa tên hay thông tin cá nhân của bạn.',
  again: 'Làm lại bài',
  jobs: 'Xem nghề hợp với mã của bạn',
  fine: 'Bộ 48 hoạt động do HUB tự soạn, chưa chuẩn hoá. Sở thích không phải năng lực; kết quả để gợi hướng, không chọn hộ một nghề.',
};

/** Câu cho trường hợp điểm bằng nhau ở ranh giới 3 chữ đầu. nameOf(chữ cái) trả về tên nhóm. */
export function tieLine(code, nameOf) {
  const shown = code.codes.join(', ');
  if (code.more) {
    return `Nhiều nhóm bằng điểm nhau nên có tới ${code.count} cách ghép mã, vài cách đầu là ${shown}. Đọc cả ba ô sáng và cân nhắc thêm những ô bằng điểm với chúng.`;
  }
  const [first, ...rest] = code.tied.map((g) => g.map(nameOf).join(' và '));
  const also = rest.map((r) => `, ${r} cũng vậy`).join('');
  const tail = code.codes.length === 2 ? 'Đọc cả hai cách cho đủ.' : 'Nên đọc lướt cả mấy cách.';
  return `${first} bằng điểm nhau${also}, nên mã của bạn có ${code.codes.length} khả năng: ${shown}. ${tail}`;
}

export const CONSISTENCY = {
  high: {
    label: 'Cao',
    text: 'Hai chữ đầu nằm cạnh nhau trên lục giác. Hai sở thích này dễ đi cùng nhau, và có sẵn nhiều nghề đáp ứng được cả hai.',
  },
  mid: {
    label: 'Vừa',
    text: 'Hai chữ đầu cách nhau một ô trên lục giác. Hai sở thích vẫn hay gặp chung ở một người, chỉ là ít nghề đáp ứng đủ cả hai bằng những cặp nằm sát nhau.',
  },
  low: {
    label: 'Thấp',
    text: 'Hai chữ đầu nằm đối nhau trên lục giác, nên hai sở thích này ít khi đi cùng nhau. Không có gì sai cả: khó tìm một nghề thoả cả hai, nên nhiều người để một bên cho công việc, một bên cho việc ngoài giờ.',
  },
};

/** Ghi chú khi sáu ô gần như bằng nhau. */
export const FLAT_NOTE =
  'Sáu ô đầy gần ngang nhau, nên mã ba chữ lần này chưa nói được nhiều. Thường là do chưa có dịp thử nhiều loại việc, hoặc thích đều mọi thứ một chút. Làm lại sau khi đi làm thêm hay đi thực tập một thời gian, kết quả sẽ rõ hơn.';

/** Ghi chú khi gần như không thích việc nào. */
export const LOW_NOTE =
  'Điểm cả sáu nhóm đều thấp. Có thể lúc này đang mệt, hoặc chưa việc nào trong bộ 48 câu đúng ý. Để dịp khác làm lại, và nghĩ tới những việc mình từng làm mà quên cả giờ giấc.';

export const TYPES_SEC = {
  title: 'Sáu nhóm sở thích',
  lead: 'Chọn một nhóm để đọc. Mỗi nhóm có những việc người trong nhóm thích làm, môi trường hợp và không hợp, cùng vài nghề quen thuộc ở Việt Nam.',
  likes: 'Thích làm gì',
  envFit: 'Môi trường hợp',
  envStifle: 'Môi trường dễ ngột ngạt',
  jobs: 'Nghề ví dụ',
};

export const HEX_SEC = {
  title: 'Lục giác Holland',
  paragraphs: [
    'John L. Holland (1919–2008), nhà tâm lý học người Mỹ, cho rằng sở thích nghề nghiệp của phần lớn mọi người có thể mô tả bằng mức độ giống với sáu kiểu: Kỹ thuật, Nghiên cứu, Nghệ thuật, Xã hội, Quản lý và Nghiệp vụ. Môi trường làm việc cũng chia được theo sáu kiểu ấy. Theo Holland, người làm ở môi trường hợp với kiểu của mình dễ hài lòng và gắn bó lâu hơn. Ông trình bày lý thuyết này đầy đủ trong cuốn Making Vocational Choices, bản thứ ba in năm 1997.',
    'Sáu kiểu được đặt lên sáu đỉnh của một hình lục giác theo thứ tự R, I, A, S, E, C. Hai kiểu càng gần nhau trên hình thì càng giống nhau. Ba cặp đối diện là ba cặp khác nhau nhiều nhất: Kỹ thuật với Xã hội, Nghiên cứu với Quản lý, Nghệ thuật với Nghiệp vụ. Nhà tâm lý Dale Prediger (1982) chỉ ra hai trục nằm ngầm bên dưới: làm với dữ kiện hay với ý tưởng, làm với con người hay với đồ vật.',
    'Kết quả được viết thành mã Holland gồm chữ cái của ba nhóm cao điểm nhất, xếp từ cao xuống. Mã SAE chẳng hạn, nghĩa là Xã hội nổi nhất, rồi tới Nghệ thuật và Quản lý. Holland gọi độ gần nhau của hai chữ đầu là tính nhất quán: hai chữ cạnh nhau trên lục giác là nhất quán cao, cách một ô là vừa, đối diện là thấp.',
    'Hình lục giác là một cách hình dung gần đúng. Tổng hợp nhiều nghiên cứu ở Mỹ cho thấy thứ tự vòng tròn này khá khớp với dữ liệu (Tracey và Rounds, 1993), nhưng ở nhiều nước khác thì khớp kém hơn (Rounds và Tracey, 1996). Vì vậy, tính nhất quán nên đọc như một gợi ý, không phải thước đo chính xác.',
  ],
  axes: { data: 'Dữ kiện', ideas: 'Ý tưởng', people: 'Con người', things: 'Đồ vật' },
  figCaption: 'Sáu nhóm quanh lục giác. Hai nhóm cạnh nhau giống nhau hơn hai nhóm đối diện.',
};

export const PAIRS_SEC = {
  title: 'Mười lăm cặp hai chữ đầu',
  lead: 'Hai chữ đầu của mã cho biết nhiều nhất về kiểu việc hợp với mình. Thứ tự hai chữ không quan trọng bằng việc chúng nằm gần hay xa nhau trên lục giác, nên SA và AS được đọc chung một mục.',
  groups: { 1: 'Cạnh nhau', 2: 'Cách một ô', 3: 'Đối diện' },
  mine: 'Cặp của bạn',
};

export const READ_SEC = {
  title: 'Đọc kết quả cho đúng',
  paragraphs: [
    'Sở thích không phải năng lực. Thích vẽ chưa chắc đã vẽ đẹp, và có những việc mình làm giỏi mà không thích. Tổng hợp hơn sáu mươi năm nghiên cứu của Nye và cộng sự (2012) cho thấy sở thích có liên hệ với kết quả học tập và làm việc, nhưng đó chỉ là một yếu tố, bên cạnh năng lực, sự bền bỉ và hoàn cảnh.',
    'Kết quả ở đây để gợi hướng tìm hiểu, không phải để chọn hộ một nghề. Cách dùng hợp lý là lấy mã của mình, đọc vài nghề ví dụ, rồi hỏi chuyện người đang làm nghề đó, hoặc làm thử một việc nhỏ trong vài tuần.',
    'Bộ 48 hoạt động trên trang do HUB tự soạn theo định nghĩa sáu nhóm của Holland và O*NET, chọn những việc gần với đời sống ở Việt Nam. Bộ này chưa được chuẩn hoá hay kiểm định trên mẫu người Việt, nên điểm số chỉ cho biết bạn nghiêng về đâu trong 48 câu này, không dùng để so với người khác. Bộ chuẩn có kiểm định là O*NET Interest Profiler của Bộ Lao động Mỹ, có bản tiếng Anh và tiếng Tây Ban Nha miễn phí.',
    'Sở thích cũng đổi theo tuổi và theo những gì mình đã thử. Làm lại sau một năm, hay sau một công việc mới, thấy kết quả khác đi là chuyện bình thường.',
  ],
  quote: 'Mã Holland giống tấm bản đồ phác tay: đủ để biết nên rẽ hướng nào, chưa đủ để biết con đường dài bao xa.',
  scoring: 'Cách chấm: Thích được 2 điểm, Phân vân 1 điểm, Không thích 0 điểm. Mỗi nhóm có 8 hoạt động nên tối đa 16 điểm.',
};

export const SOURCES = [
  {
    title: 'Lý thuyết của Holland',
    items: [
      { title: 'Making Vocational Choices: A Theory of Vocational Personalities and Work Environments (bản 3)', by: 'John L. Holland, Psychological Assessment Resources', year: '1997', note: 'Sáu kiểu RIASEC, lục giác, tính nhất quán và độ rõ nét của hồ sơ.' },
      { title: 'Dimensions underlying Holland’s hexagon: Missing link between interests and occupations?', by: 'Dale J. Prediger, Journal of Vocational Behavior 21(3), 259–287', year: '1982', note: 'Hai trục dữ kiện và ý tưởng, con người và đồ vật.' },
      { title: 'Evaluating Holland’s and Gati’s vocational-interest models: A structural meta-analysis', by: 'Terence J. G. Tracey, James Rounds, Psychological Bulletin 113(2), 229–246', year: '1993', note: 'Cấu trúc vòng của sáu nhóm trên dữ liệu ở Mỹ.' },
      { title: 'Cross-cultural structural equivalence of RIASEC models and measures', by: 'James Rounds, Terence J. G. Tracey, Journal of Counseling Psychology 43(3), 310–329', year: '1996', url: 'https://experts.illinois.edu/en/publications/cross-cultural-structural-equivalence-of-riasec-models-and-measur/', note: 'Lục giác khớp kém hơn ở nhiều nước ngoài Mỹ.' },
    ],
  },
  {
    title: 'Sở thích và kết quả làm việc',
    items: [
      { title: 'Vocational interests and performance: A quantitative summary of over 60 years of research', by: 'Christopher D. Nye, Rong Su, James Rounds, Fritz Drasgow, Perspectives on Psychological Science 7(4), 384–403', year: '2012', url: 'https://www.psychologicalscience.org/journals/perspectives/1745691612449021/', note: 'Sở thích có liên hệ với kết quả học tập và làm việc.' },
    ],
  },
  {
    title: 'O*NET',
    items: [
      { title: 'O*NET Interest Profiler', by: 'National Center for O*NET Development, Bộ Lao động Mỹ', url: 'https://www.onetcenter.org/IP.html', note: 'Định nghĩa sáu nhóm và bộ câu hỏi chuẩn. Trang này không dùng câu hỏi của O*NET.' },
      { title: 'O*NET Interest Profiler Short Form Psychometric Characteristics: Summary', by: 'James Rounds, Rong Su, Phil Lewis, David Rivkin', year: '2010', url: 'https://www.onetcenter.org/reports/IPSF_Psychometric.html', note: 'Bản ngắn 60 câu và cách kiểm định.' },
      { title: 'Interest Profiler (My Next Move)', by: 'U.S. Department of Labor', url: 'https://www.mynextmove.org/explore/ip', note: 'Bản làm trực tuyến miễn phí, tiếng Anh.' },
    ],
  },
  {
    title: 'Hướng nghiệp ở Việt Nam',
    items: [
      { title: 'Trắc nghiệm hướng nghiệp Holland và giải pháp giáo dục hướng nghiệp sớm cho học sinh tiểu học trong bối cảnh hiện nay', by: 'Trần Đình Tuấn, VJOL', url: 'https://vjol.info.vn/giaochuc/vi/article/view/264302', note: 'Dùng trắc nghiệm Holland để tìm hiểu sở thích, không để định nghề quá sớm.' },
    ],
  },
];
