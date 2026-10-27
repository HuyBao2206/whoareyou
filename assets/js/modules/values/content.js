// Chữ của thẻ Giá trị sống ("Bàn xếp bài"), trừ 10 giá trị (values.js) và 36 thẻ (cards.js).
// Căn cứ: research/gia-tri-song.md. Phần kiến thức viết chuẩn mực; phần kết quả nói với "bạn" như người tư vấn.
// Mọi ý về nghề nghiệp, tiền bạc, quan hệ đều ghi rõ là có nghiên cứu hay chỉ suy ra từ định nghĩa.

export const UPDATED = '10/2026';

export const INTRO = {
  eyebrow: 'Bàn xếp bài',
  title: 'Giá trị sống',
  lead:
    'Ba mươi sáu thẻ, mỗi thẻ một điều người ta có thể coi trọng trong đời. Chia thẻ thành ba chồng, lọc lấy năm, xếp thứ tự, rồi xem la bàn giá trị chỉ về phía nào. Bộ thẻ dựa trên lý thuyết giá trị cơ bản của Shalom Schwartz, đã được kiểm định trên dữ liệu từ 82 nước.',
  privacy:
    'Cách bạn chia thẻ và thứ hạng chỉ nằm trong phiên làm việc của tab này (sessionStorage), không gửi đi đâu và mất khi đóng tab. Tên hai phương án ở mục “Soi một quyết định” chỉ nằm trong bộ nhớ của trang.',
};

/* ---------- Phần kiến thức ---------- */

export const WHAT = {
  title: 'Giá trị là gì',
  lead: 'Trong tâm lý học, giá trị là những mục tiêu đáng mong muốn, vượt lên trên từng tình huống, được dùng làm thước đo để chọn hành động và đánh giá người, việc.',
  paragraphs: [
    {
      text: 'Schwartz (2012) nêu sáu đặc điểm chung của giá trị. Giá trị là niềm tin gắn với cảm xúc: khi bị đụng tới, người ta không còn bình thản. Giá trị chỉ tới mục tiêu và thúc đẩy hành động. Giá trị vượt lên trên từng hoàn cảnh: thật thà có thể áp dụng ở chỗ làm, ở nhà, với bạn hay người lạ, khác với chuẩn mực và thái độ vốn gắn với một tình huống cụ thể. Giá trị là thước đo để chọn lựa. Giá trị được xếp theo thứ tự ưu tiên riêng của mỗi người. Và chính sự cân nhắc giữa nhiều giá trị cùng lúc, chứ không phải một giá trị đơn lẻ, mới dẫn dắt hành động.',
      src: ['schwartz-2012'],
    },
    {
      text: 'Hai đặc điểm cuối là lý do thẻ này yêu cầu xếp hạng thay vì chấm điểm từng thẻ: hầu như ai cũng coi “gia đình yên ổn” hay “thật thà” là quan trọng, điều phân biệt người này với người khác là cái gì đứng trước khi buộc phải chọn.',
      src: ['schwartz-2012'],
    },
    {
      text: 'Giá trị khác nét tính cách. Nét tính cách mô tả một người thường cư xử thế nào; giá trị nói người đó coi điều gì là đáng theo đuổi. Phân tích tổng hợp 60 nghiên cứu của Parks-Leduc, Feldman và Bardi (2015) cho thấy hai thứ có liên hệ nhất quán nhưng không lớn, tức là hai khái niệm khác nhau; nét Cởi mở gắn với giá trị nhiều hơn các nét thiên về cảm xúc.',
      src: ['parks-leduc-2015', 'roccas-2002'],
    },
    {
      text: 'Giá trị cũng khác sở thích nghề nghiệp. Sở thích là thích hay không thích một hoạt động; giá trị là mục tiêu mình muốn đời mình hướng tới. Nghiên cứu của Sagiv (2002) trên những người đến tư vấn hướng nghiệp cho thấy hai thứ đi cùng nhau theo những cặp có thể dự đoán, chẳng hạn sở thích Xã hội đi cùng giá trị Nhân hậu, sở thích Quản lý đi cùng Quyền lực và Thành tựu, còn nhóm Kỹ thuật không gắn rõ với giá trị nào.',
      src: ['sagiv-2002'],
    },
  ],
  takeaway:
    'Ba thẻ Bản đồ tính cách, Sở thích nghề nghiệp và Giá trị sống đo ba thứ khác nhau: mình hay cư xử thế nào, mình thích làm việc gì, và mình muốn đời mình hướng tới điều gì. Ba kết quả nên được đọc cạnh nhau, vì mỗi thứ chỉ cho thấy một phần.',
};

export const CIRCLE = {
  title: 'Mười giá trị và vòng tròn động cơ',
  lead: 'Schwartz xếp mười giá trị cơ bản thành một vòng tròn: giá trị đứng cạnh nhau hợp nhau, giá trị đứng đối diện kéo về hai hướng ngược nhau.',
  paragraphs: [
    {
      text: 'Lý thuyết được Schwartz công bố năm 1992 trên dữ liệu ở 20 nước; bản tổng quan năm 2012 cho biết dữ liệu từ 82 nước ủng hộ cấu trúc này. Mười giá trị chia thành hai trục đối cực. Trục thứ nhất là Cởi mở với thay đổi (Tự chủ, Mới mẻ) đối với Bảo tồn (An toàn, Khuôn phép, Truyền thống). Trục thứ hai là Nâng cao bản thân (Thành tựu, Quyền lực) đối với Vượt lên bản thân (Nhân hậu, Phổ quát). Tận hưởng nằm giữa Cởi mở và Nâng cao bản thân. Truyền thống và Khuôn phép chung một nan quạt, Truyền thống ở vòng ngoài, vì hai giá trị cùng hướng tới việc gác mong muốn riêng để theo kỳ vọng bên ngoài.',
      src: ['schwartz-1992', 'schwartz-2012'],
    },
    {
      text: 'Nhân hậu và Phổ quát hay bị hiểu lẫn. Nhân hậu là chăm lo cho người trong vòng thân quen: gia đình, bạn bè, đồng nghiệp gần. Phổ quát là quan tâm tới mọi người, kể cả người lạ, và tới thiên nhiên. Bản lý thuyết tinh chỉnh năm 2012 tách mười giá trị thành mười chín, trong đó thêm hai giá trị mới là Thể diện và Khiêm nhường; thẻ này dùng khung mười giá trị vì có nhiều bằng chứng hơn, và tính Thể diện vào Quyền lực, Khiêm nhường vào Truyền thống.',
      src: ['schwartz-2012', 'schwartz-2012-refined'],
    },
    {
      text: 'Ở mẫu đại diện hoặc gần đại diện của 13 nước và mẫu giáo viên, sinh viên ở hơn 50 nước, Schwartz và Bardi (2001) thấy một thứ bậc chung khá ổn định (thứ bậc của 83% số mẫu tương quan từ 0,80 trở lên với thứ bậc chung): Nhân hậu, Tự chủ, Phổ quát được coi trọng nhất; Quyền lực, Truyền thống, Mới mẻ ít được coi trọng nhất. Đây là mô tả trung bình, không phải đánh giá giá trị nào tốt hơn.',
      src: ['schwartz-bardi-2001'],
    },
    {
      text: 'Ở Việt Nam, nghiên cứu của Różycka-Tran, Trương Thị Khánh Hà, Cieciuch và Schwartz (2017) trên khoảng 1.600 người trưởng thành ở Hà Nội, Huế và TP.HCM ủng hộ cấu trúc vòng tròn, nhưng phải gộp một số giá trị kề nhau, và thứ bậc giá trị của người tham gia khác nhiều so với thứ bậc chung ở các nước khác. Mẫu chỉ gồm ba thành phố lớn nên chưa đại diện cho cả nước; chưa có số liệu đủ tin cậy về thứ bậc giá trị của người Việt nói chung.',
      src: ['rozycka-2017'],
    },
  ],
  takeaway:
    'Không có giá trị tốt hay xấu. Vòng tròn chỉ cho biết trong cùng một hành động, hai giá trị ở hai phía đối diện khó được thoả cùng lúc.',
};

export const EFFECT = {
  title: 'Giá trị ảnh hưởng tới lựa chọn thế nào',
  lead: 'Theo tổng quan của Sagiv và cộng sự (2017), giá trị tự báo cáo dự đoán được nhiều thái độ và hành vi, nhưng mức độ khác nhau giữa các giá trị và giữa các lĩnh vực đời sống.',
  paragraphs: [
    {
      text: 'Theo tổng quan của Sagiv và Roccas (2021), giá trị ảnh hưởng tới hành vi qua ba đường: giá trị có được gợi lên trong tình huống hay không, người ta diễn giải tình huống ra sao, và họ có kiểm soát được hành vi của mình hay không. Bardi và Schwartz (2003) thấy Mới mẻ và Truyền thống liên hệ mạnh với hành vi tương ứng, còn An toàn, Khuôn phép, Thành tựu và Nhân hậu chỉ ở mức yếu, một phần vì những hành vi như lễ phép hay giúp người thân là điều ai cũng được kỳ vọng làm.',
      src: ['sagiv-roccas-2021', 'bardi-2003'],
    },
    {
      text: 'Về nghề nghiệp, Knafo và Sagiv (2004) khảo sát 652 người lao động ở Israel thuộc 32 nghề và thấy hồ sơ giá trị của từng nghề khớp với mô hình Holland: môi trường Xã hội có điểm Nhân hậu, Phổ quát cao; môi trường Nghiên cứu có điểm Tự chủ cao. Gandal và cộng sự (2005) cho thấy khác biệt giá trị giữa sinh viên kinh tế và sinh viên ngành khác có ngay từ đầu năm nhất; các tác giả cho rằng, ít nhất ở ngành kinh tế, người học mang sẵn giá trị khi chọn ngành chứ không chỉ do ngành học tạo ra.',
      src: ['knafo-2004', 'gandal-2005'],
    },
    {
      text: 'Về tiền bạc, chưa tìm được nghiên cứu vững nối trực tiếp mười giá trị Schwartz với hành vi tiết kiệm, chi tiêu hay đầu tư. Bằng chứng gần nhất đến từ thang đo chủ nghĩa vật chất: phân tích tổng hợp 259 mẫu của Dittmar và cộng sự (2014) ghi nhận người coi nặng của cải có mức hạnh phúc thấp hơn, tương quan khoảng −0,19, tức nhỏ đến vừa. Về quan hệ, theo các bài dẫn lại nghiên cứu của Luo và Klohnen (2005) trên 291 cặp mới cưới, vợ chồng rất giống nhau về thái độ và giá trị, nhưng chính độ giống về tính cách, không phải về thái độ, mới liên quan tới mức hài lòng trong hôn nhân.',
      src: ['dittmar-2014', 'luo-2005'],
    },
    {
      text: 'Giá trị khá bền nhưng có thay đổi. Các nghiên cứu dọc của Bardi và cộng sự (2009) cho thấy khi một giá trị tăng, giá trị đối diện trên vòng tròn thường giảm, giá trị kề bên thay đổi cùng chiều. Sagiv và Schwartz (2000) gợi ý rằng sống trong môi trường có giá trị chung hợp với giá trị của mình thì dễ thấy dễ chịu hơn, nhưng mẫu của phần nghiên cứu này rất nhỏ.',
      src: ['bardi-2009', 'sagiv-schwartz-2000'],
    },
  ],
  takeaway:
    'Biết thứ tự giá trị của mình không cho biết nên chọn việc gì, nhưng giúp gọi tên điều đang bị đánh đổi trong mỗi lựa chọn. Mọi liên hệ ở trên là xu hướng trung bình ở mức nhỏ đến vừa, không quyết định đời một người cụ thể.',
};

/* ---------- Bàn xếp bài ---------- */

export const PILES = [
  { id: 'hi', name: 'Rất quan trọng', key: '1' },
  { id: 'mid', name: 'Quan trọng', key: '2' },
  { id: 'lo', name: 'Ít quan trọng', key: '3' },
];

export const TOOL = {
  title: 'Bàn xếp bài',
  lead: 'Có ba bước và không có thẻ đúng hay sai; chọn theo điều bạn thật sự sống theo, không theo điều nghĩ là nên có.',
  steps: ['Chia ba chồng', 'Lọc lấy năm', 'Xếp thứ tự'],
  sortHint:
    'Kéo thẻ trên cùng thả vào một chồng, hoặc bấm nút bên dưới. Trên bàn phím: phím 1, 2, 3 hoặc mũi tên trái, xuống, phải. Thẻ ném mạnh sẽ trượt theo đà.',
  left: (n) => `Còn ${n} thẻ`,
  undo: 'Hoàn tác',
  review: 'Xem và đổi chồng',
  moveTo: 'Chuyển sang',
  sortDone: 'Đã chia hết 36 thẻ.',
  next: 'Sang bước tiếp',
  back: 'Quay lại',
  filterMore: (n) => `Chồng “Rất quan trọng” có ${n} thẻ. Giữ lại đúng năm thẻ quan trọng nhất.`,
  filterLess: (n) => `Chồng “Rất quan trọng” mới có ${n} thẻ. Chọn thêm từ chồng “Quan trọng” cho đủ năm.`,
  filterOk: 'Chồng “Rất quan trọng” có đúng năm thẻ.',
  picked: (n) => `Đã chọn ${n}/5`,
  tooFew: 'Cần ít nhất ba thẻ ở hai chồng đầu để xếp thứ tự. Quay lại bước 1 và chuyển bớt thẻ lên.',
  rankHint: 'Kéo thẻ lên xuống, hoặc dùng nút mũi tên. Thẻ ở trên cùng là điều bạn giữ lại nếu chỉ được giữ một.',
  up: 'Lên',
  down: 'Xuống',
  see: 'Xem la bàn giá trị',
  restart: 'Xếp lại từ đầu',
  restartDone: 'Đã xếp lại bộ thẻ.',
};

export const RESULT = {
  title: 'La bàn giá trị',
  lead: 'Kim la bàn là tổng hướng của năm thẻ bạn xếp hạng (hạng 1 nặng nhất), cộng thêm một phần nhỏ của các thẻ khác trong chồng “Rất quan trọng”.',
  top5: 'Năm điều bạn coi trọng nhất',
  rank: (i) => `Hạng ${i}`,
  belongs: 'Thuộc giá trị',
  career: 'Nghề nghiệp',
  money: 'Tiền bạc',
  relation: 'Quan hệ',
  bc: 'Có nghiên cứu',
  gt: 'Bằng chứng gián tiếp',
  kn: 'Suy ra từ định nghĩa',
  sameValue: (name, n) => `${n} thẻ trong năm thẻ cùng thuộc giá trị ${name}, nên giá trị này được cộng nhiều lần vào kim.`,
  pairs: 'Những cặp kéo về hai phía',
  noPairs: 'Năm thẻ của bạn không có cặp nào nằm ở hai phía đối diện của vòng tròn. Các ưu tiên này ít khi phải đánh đổi lẫn nhau.',
  pairLine: (a, b) => `${a} và ${b}`,
  reconcileIntro:
    'Theo Schwartz (2012), người ta vẫn theo đuổi được những giá trị đối nghịch, nhưng không trong cùng một hành động: họ làm điều đó bằng những việc khác nhau, vào lúc khác nhau, ở nơi khác nhau. Chưa có nghiên cứu thực nghiệm mô tả phần lớn người ta cân bằng ra sao; ba cách dưới đây là cách hiểu câu nói của Schwartz, để bạn tự soi.',
  questions: 'Ba câu hỏi để tự soi',
  conclusion: 'Lời kết',
  weak: 'Kim dao động: năm thẻ của bạn trải ra nhiều phía của vòng tròn nên không có hướng nào trội hẳn.',
  pointsTo: (g, v) => `Kim chỉ về phía ${g}, gần nhất với giá trị ${v}.`,
  chartDesc: (dir, list) => `La bàn mười giá trị. ${dir} Trọng số theo giá trị: ${list}.`,
  holland: (code) => `Mã sở thích nghề nghiệp trong phiên này: ${code}.`,
  save: 'Lưu ảnh la bàn',
  saved: 'Đã lưu ảnh.',
  saveFail: 'Chưa lưu được ảnh. Thử lại sau.',
  empty: 'La bàn sẽ hiện khi bạn xếp xong thứ tự ở bước 3.',
};

// Ba cách theo đuổi hai giá trị đối nghịch, diễn giải câu của Schwartz (2012).
export const RECONCILE = {
  'open-conserve': [
    'Chia theo lĩnh vực: giữ nếp ổn định ở một mảng (chỗ ở, tài chính gia đình) để có chỗ dựa khi thử cái mới ở mảng khác (công việc, học thêm).',
    'Chia theo thời gian: dành một giai đoạn cho việc thử, có hạn rõ, rồi quay về nhịp ổn định.',
    'Thử ở quy mô nhỏ trước: làm thêm, học thử, dự án ngắn, thay vì bỏ hẳn cái đang có.',
  ],
  'enhance-transcend': [
    'Chia theo lĩnh vực: theo đuổi thành tích ở công việc, dành phần thời gian và tiền bạc khác cho người thân hay việc chung.',
    'Chia theo thời gian: có giai đoạn dồn sức cho sự nghiệp, có giai đoạn lùi lại vì gia đình; nói rõ với người thân giai đoạn nào đang diễn ra.',
    'Tách bằng việc làm khác nhau: giữ mục tiêu thành tích ở công việc chính, và nhận một việc cố định cho người khác (kèm cặp người mới, thiện nguyện hằng tháng) để phần này không bị lấn mất.',
  ],
};

// Câu hỏi tự soi theo giá trị: lấy câu của ba giá trị đứng đầu (không trùng).
export const QUESTIONS = {
  SD: 'Lần gần nhất bạn phải làm theo cách người khác áp đặt, điều gì khiến bạn khó chịu nhất: việc đó, hay việc không được tự chọn?',
  ST: 'Nếu công việc năm năm tới gần như giống hệt hôm nay, bạn thấy yên tâm hay thấy ngột ngạt?',
  HE: 'Trong một tuần bình thường, bao nhiêu giờ thật sự là của bạn, và số giờ ấy có hay bị việc khác lấn mất không?',
  AC: 'Thành công bạn muốn được ai công nhận: người trong nghề, gia đình, hay chính bạn?',
  PO: 'Bạn muốn có quyền quyết định để làm được điều gì, và nếu không có chức danh thì điều đó còn làm được không?',
  SE: 'Mức dự phòng nào (tiền, việc làm, sức khoẻ) thì bạn thấy đủ yên tâm, và hiện mình đang cách mức đó bao xa?',
  CO: 'Trong gia đình hay chỗ làm, quy tắc nào bạn giữ vì thấy đúng, và quy tắc nào chỉ giữ cho êm chuyện?',
  TR: 'Nếp nào của gia đình bạn muốn giữ cho thế hệ sau, và nếp nào bạn sẵn lòng để nó đổi khác?',
  BE: 'Ai là những người bạn muốn có mặt khi họ cần, và lịch làm việc hiện tại có chừa chỗ cho điều đó không?',
  UN: 'Việc bạn đang làm tác động tới những người bạn không quen biết theo cách nào?',
};

// Lời kết theo hướng kim (nhóm bậc cao) hoặc khi kim yếu.
export const CONCLUSION = {
  open: 'Năm thẻ đứng đầu nghiêng về chuyện được tự quyết và được thử cái mới. Khi so các chỗ làm, mức tự chủ trong công việc đáng được hỏi kỹ như hỏi lương; một nơi quản từng bước có thể khiến việc dễ thành nặng nề với bạn.',
  enhance: 'Kết quả và vị trí của mình là điều được xếp trên cùng. Nên biết rõ thước đo thành công bạn muốn là gì, và để ý những gì đang phải trả cho thành tích ấy, trong đó có thời gian dành cho người thân.',
  conserve: 'Sự ổn định, nếp quen và những ràng buộc giữ mọi việc yên ổn chiếm phần lớn năm thẻ của bạn. Trước một thay đổi lớn, thử tách cái thật sự rủi ro khỏi cái chỉ là chưa quen; phần chưa quen thường thử được ở quy mô nhỏ.',
  transcend: 'Phần lớn ưu tiên của bạn hướng về người khác, người thân hoặc cả người không quen. Khi chọn việc, nên hỏi công việc ấy ảnh hưởng tới ai và theo cách nào; cũng nên tự đặt giới hạn, vì lo cho người khác dễ thành việc không có điểm dừng.',
  mixed: 'Năm ưu tiên trải ra nhiều phía, nên lựa chọn lớn nào cũng động tới ít nhất một điều bạn coi trọng. Như vậy không phải là thiếu định hướng; khi phải chọn, thứ hạng vừa xếp là chỗ dựa chắc hơn hướng kim.',
};

// Liên hệ trung bình giữa sở thích nghề nghiệp và giá trị (Sagiv, 2002), để nhắc khi phiên có mã Holland.
export const HOLLAND_LINK = {
  R: 'Nhóm Kỹ thuật không có liên hệ rõ với giá trị nào trong nghiên cứu của Sagiv (2002).',
  I: 'Sở thích Nghiên cứu thường đi cùng Tự chủ và Phổ quát (Sagiv, 2002).',
  A: 'Sở thích Nghệ thuật thường đi cùng Tự chủ và Phổ quát (Sagiv, 2002).',
  S: 'Sở thích Xã hội thường đi cùng Nhân hậu (Sagiv, 2002).',
  E: 'Sở thích Quản lý thường đi cùng Quyền lực và Thành tựu, ngược chiều với Phổ quát (Sagiv, 2002).',
  C: 'Sở thích Quy củ thường đi cùng Khuôn phép, An toàn, Truyền thống, ngược chiều với Tự chủ, Mới mẻ và Phổ quát (Sagiv, 2002).',
};
export const HOLLAND_NOTE = 'Đây là xu hướng trung bình ở mức vừa; giá trị và sở thích lệch nhau không có nghĩa là chọn sai.';

/* ---------- Soi một quyết định ---------- */

export const DECIDE = {
  title: 'Soi một quyết định',
  lead: 'Đặt hai phương án cạnh nhau và chấm mỗi phương án giữ được năm điều bạn coi trọng nhất tới đâu. Công cụ chỉ cộng những gì bạn nhập và chỉ ra chỗ hai phương án chênh nhau nhiều nhất; nó không khuyên chọn bên nào.',
  why: 'Cách bắt đầu từ giá trị rồi mới chấm phương án được Keeney (1992) gọi là tư duy hướng giá trị. Ở lĩnh vực y tế, tổng quan Cochrane của Stacey và cộng sự (2017; 105 thử nghiệm) cho thấy công cụ hỗ trợ quyết định giúp người dùng rõ hơn về điều mình coi trọng; bằng chứng này đến từ quyết định điều trị, chưa có bằng chứng tương đương cho quyết định nghề nghiệp.',
  src: ['keeney-1992', 'stacey-2017'],
  nameA: 'Phương án A',
  nameB: 'Phương án B',
  placeholderA: 'Ví dụ: nhận việc ở Hà Nội',
  placeholderB: 'Ví dụ: ở lại công ty ở quê',
  weight: 'Trọng số',
  scoreLabel: (opt, v) => `${opt} giữ được “${v}” tới đâu`,
  scale: ['', 'Rất ít', 'Ít', 'Vừa', 'Nhiều', 'Rất nhiều'],
  total: (name, a, max) => `${name}: ${a}/${max} điểm`,
  chartDesc: (rows) => `Biểu đồ so hai phương án theo năm giá trị. ${rows}`,
  tradeoffs: 'Chỗ đánh đổi rõ nhất',
  noTradeoff: 'Hai phương án không chênh nhau từ 2 điểm trở lên ở giá trị nào. Có thể điều quyết định nằm ngoài năm giá trị này, như chi phí, thời điểm hay người liên quan.',
  tradeLine: (v, win, lose) => `${v}: ${win} giữ được nhiều hơn ${lose}.`,
  questions: [
    'Nếu tổng điểm hai bên gần bằng nhau, giá trị nào bạn không chịu nhường?',
    'Trong điểm vừa chấm, phần nào là điều đã biết chắc, phần nào đang đoán, và phần đoán có cách nào kiểm trước khi quyết không?',
    'Một năm sau, nếu thấy tiếc, bạn đoán mình sẽ tiếc vì đã chọn A hay vì đã bỏ B?',
  ],
  questionsTitle: 'Câu hỏi trước khi quyết',
  note: 'Con số chỉ phản ánh điều bạn vừa nhập. Trọng số mặc định lấy theo thứ hạng (hạng 1 được 5, hạng 5 được 1); có thể sửa nếu thấy chưa đúng.',
  needRank: 'Công cụ dùng năm điều bạn xếp ở bàn xếp bài. Xếp xong bước 3 để bắt đầu.',
};

export const LIMITS = {
  title: 'Giới hạn của thẻ',
  items: [
    'Bộ 36 thẻ do HUB tự soạn theo lý thuyết của Schwartz, không phải thang đo chuẩn SVS hay PVQ và chưa được chuẩn hoá trên người Việt. Kết quả là bức tranh để tự soi, không phải điểm số.',
    'Cách làm chia ba chồng rồi xếp hạng mượn từ Personal Values Card Sort (Miller và cộng sự, 2001), bộ thẻ thuộc phạm vi công cộng; tên và định nghĩa thẻ ở đây viết mới.',
    'Thứ hạng phản ánh lựa chọn ở thời điểm làm. Giá trị khá bền nhưng có thể đổi theo các bước ngoặt trong đời (Bardi và cộng sự, 2009).',
    'Kim la bàn là phép cộng hướng đơn giản trên vòng tròn mười giá trị, cách tính do HUB đặt ra để minh hoạ, không phải chỉ số trong nghiên cứu của Schwartz. Nhóm Bảo tồn có nhiều thẻ hơn các nhóm khác (11 thẻ, vì gồm ba giá trị), nên kim dễ nghiêng về phía này hơn một chút.',
    'Số liệu về giá trị của người Việt còn ít; nghiên cứu năm 2017 chỉ làm ở ba thành phố.',
  ],
};

/* ---------- Nguồn ---------- */

export const SOURCE_NOTE =
  'Do giới hạn mạng của môi trường biên soạn, các nghiên cứu dưới đây được tra qua phần tóm tắt và đoạn trích của công cụ tìm kiếm, chưa đọc trọn văn bản; mức tin cậy của từng ý được ghi trong hồ sơ nghiên cứu của thẻ.';

export const SOURCES = {
  // Lý thuyết
  'schwartz-1992': { group: 'lt', title: 'Universals in the content and structure of values: Theoretical advances and empirical tests in 20 countries', by: 'Shalom H. Schwartz, Advances in Experimental Social Psychology 25', year: '1992', short: 'Schwartz 1992' },
  'schwartz-2012': { group: 'lt', title: 'An Overview of the Schwartz Theory of Basic Values', by: 'Shalom H. Schwartz, Online Readings in Psychology and Culture 2(1)', year: '2012', url: 'https://doi.org/10.9707/2307-0919.1116', short: 'Schwartz 2012' },
  'schwartz-2012-refined': { group: 'lt', title: 'Refining the theory of basic individual values', by: 'Schwartz và cộng sự, Journal of Personality and Social Psychology 103(4)', year: '2012', url: 'https://doi.org/10.1037/a0029393', note: '19 giá trị, 15 mẫu ở 10 nước.', short: 'Schwartz và cộng sự 2012' },
  'schwartz-bardi-2001': { group: 'lt', title: 'Value hierarchies across cultures: Taking a similarities perspective', by: 'Schwartz, Bardi, Journal of Cross-Cultural Psychology 32(3)', year: '2001', url: 'https://doi.org/10.1177/0022022101032003002', short: 'Schwartz và Bardi 2001' },
  'rozycka-2017': { group: 'lt', title: 'Universals and specifics of the structure and hierarchy of basic human values in Vietnam', by: 'Różycka-Tran, Trương Thị Khánh Hà, Cieciuch, Schwartz, Health Psychology Report 5(3)', year: '2017', url: 'https://doi.org/10.5114/hpr.2017.65857', note: 'Khoảng 1.600 người ở Hà Nội, Huế, TP.HCM.', short: 'Różycka-Tran và cộng sự 2017' },

  // Giá trị, tính cách, sở thích, hành vi
  'sagiv-2017': { group: 'hv', title: 'Personal values in human life', by: 'Sagiv, Roccas, Cieciuch, Schwartz, Nature Human Behaviour 1(9)', year: '2017', url: 'https://doi.org/10.1038/s41562-017-0185-3', short: 'Sagiv và cộng sự 2017' },
  'roccas-2002': { group: 'hv', title: 'The Big Five personality factors and personal values', by: 'Roccas, Sagiv, Schwartz, Knafo, Personality and Social Psychology Bulletin 28(6)', year: '2002', url: 'https://doi.org/10.1177/0146167202289008', short: 'Roccas và cộng sự 2002' },
  'parks-leduc-2015': { group: 'hv', title: 'Personality traits and personal values: A meta-analysis', by: 'Parks-Leduc, Feldman, Bardi, Personality and Social Psychology Review 19(1)', year: '2015', url: 'https://doi.org/10.1177/1088868314538548', short: 'Parks-Leduc và cộng sự 2015' },
  'sagiv-2002': { group: 'hv', title: 'Vocational interests and basic values', by: 'Lilach Sagiv, Journal of Career Assessment 10(2)', year: '2002', url: 'https://doi.org/10.1177/1069072702010002007', short: 'Sagiv 2002' },
  'sagiv-roccas-2021': { group: 'hv', title: 'How do values affect behavior? Let me count the ways', by: 'Sagiv, Roccas, Personality and Social Psychology Review 25(4)', year: '2021', url: 'https://doi.org/10.1177/10888683211015975', short: 'Sagiv và Roccas 2021' },
  'bardi-2003': { group: 'hv', title: 'Values and behavior: Strength and structure of relations', by: 'Bardi, Schwartz, Personality and Social Psychology Bulletin 29(10)', year: '2003', url: 'https://doi.org/10.1177/0146167203254602', short: 'Bardi và Schwartz 2003' },
  'bardi-2009': { group: 'hv', title: 'The structure of intraindividual value change', by: 'Bardi, Lee, Hofmann-Towfigh, Soutar, Journal of Personality and Social Psychology 97(5)', year: '2009', url: 'https://pure.royalholloway.ac.uk/files/4416729/VChStructure_LastWordVersion.pdf', short: 'Bardi và cộng sự 2009' },

  // Nghề nghiệp, tiền bạc, quan hệ, hạnh phúc
  'knafo-2004': { group: 'dd', title: 'Values and work environment: Mapping 32 occupations', by: 'Knafo, Sagiv, European Journal of Psychology of Education 19(3)', year: '2004', url: 'https://doi.org/10.1007/BF03173223', short: 'Knafo và Sagiv 2004' },
  'gandal-2005': { group: 'dd', title: 'Personal value priorities of economists', by: 'Gandal, Roccas, Sagiv, Wrzesniewski, Human Relations 58(10)', year: '2005', url: 'https://cris.huji.ac.il/en/publications/personal-value-priorities-of-economists/', short: 'Gandal và cộng sự 2005' },
  'kasser-2016': { group: 'dd', title: 'Materialistic values and goals', by: 'Tim Kasser, Annual Review of Psychology 67', year: '2016', url: 'https://doi.org/10.1146/annurev-psych-122414-033344', short: 'Kasser 2016' },
  'dittmar-2014': { group: 'dd', title: 'The relationship between materialism and personal well-being: A meta-analysis', by: 'Dittmar, Bond, Hurst, Kasser, Journal of Personality and Social Psychology 107(5)', year: '2014', url: 'https://doi.org/10.1037/a0037409', short: 'Dittmar và cộng sự 2014' },
  'luo-2005': { group: 'dd', title: 'Assortative mating and marital quality in newlyweds: A couple-centered approach', by: 'Luo, Klohnen, Journal of Personality and Social Psychology 88(2)', year: '2005', short: 'Luo và Klohnen 2005' },
  'sagiv-schwartz-2000': { group: 'dd', title: 'Value priorities and subjective well-being: Direct relations and congruity effects', by: 'Sagiv, Schwartz, European Journal of Social Psychology 30', year: '2000', short: 'Sagiv và Schwartz 2000' },

  // Phương pháp
  'miller-2001': { group: 'pp', title: 'Personal Values Card Sort', by: 'Miller, C’de Baca, Matthews, Wilbourne, University of New Mexico', year: '2001', url: 'https://casaa.unm.edu/assets/inst/personal-values-card-sort.pdf', note: 'Bộ thẻ thuộc phạm vi công cộng; thẻ này chỉ mượn cách chia nhóm rồi xếp hạng.', short: 'Miller và cộng sự 2001' },
  'keeney-1992': { group: 'pp', title: 'Value-Focused Thinking: A Path to Creative Decisionmaking', by: 'Ralph L. Keeney, Harvard University Press', year: '1992', short: 'Keeney 1992' },
  'stacey-2017': { group: 'pp', title: 'Decision aids for people facing health treatment or screening decisions', by: 'Stacey và cộng sự, Cochrane Database of Systematic Reviews', year: '2017', url: 'https://doi.org/10.1002/14651858.CD001431.pub5', note: '105 thử nghiệm, 31.043 người; bản cập nhật 2024 gồm 209 nghiên cứu.', short: 'Stacey và cộng sự 2017' },
};

export const SOURCE_GROUPS = [
  ['lt', 'Lý thuyết giá trị cơ bản'],
  ['hv', 'Giá trị, tính cách, sở thích và hành vi'],
  ['dd', 'Nghề nghiệp, tiền bạc, quan hệ'],
  ['pp', 'Phương pháp xếp thẻ và hỗ trợ quyết định'],
];
