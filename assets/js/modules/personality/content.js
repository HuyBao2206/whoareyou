// Chữ của thẻ Bản đồ tính cách (trừ nội dung từng chiều: xem traits.js; bộ câu hỏi: xem items.js).
// Hai giọng: phần kiến thức viết chuẩn mực như sách báo; phần kết quả gần gũi. Văn phong: CLAUDE.md.

export const UPDATED = '10/2026';

export const PRIVACY_LINE =
  'Câu trả lời chỉ nằm trong tab này của trình duyệt. Trang không lưu, cũng không gửi chúng đi đâu cả.';

export const INTRO = {
  eyebrow: 'Thẻ 03 · Big Five',
  title: 'Chòm sao tính cách',
  lead:
    'Năm mươi câu ngắn về cách bạn vẫn sống mỗi ngày. Trả lời xong, năm ngôi sao hiện lên thành một chòm: mỗi sao là một chiều tính cách, sao càng sáng và càng xa tâm thì điểm của chiều ấy càng cao.',
};

export const START = {
  title: 'Trước khi bắt đầu',
  points: [
    'Có 50 câu, mỗi màn một câu. Làm hết mất chừng mười phút.',
    'Tả mình như bây giờ vẫn thế, chứ không phải như mình mong sẽ thành. Khi phân vân, thử so với những người cùng giới, trạc tuổi mà bạn quen.',
    'Không có câu trả lời đúng hay sai. Ý đầu tiên bật ra trong đầu thường là ý thật nhất.',
  ],
  keys: 'Bấm phím 1 đến 5 để chọn, phím mũi tên trái để quay lại câu trước.',
  begin: 'Bắt đầu',
  resume: 'Làm tiếp',
  restart: 'Làm lại từ đầu',
};

export const QUIZ = {
  stem: 'Câu này đúng với bạn tới đâu?',
  // Năm mức trả lời của IPIP: Very Inaccurate … Very Accurate.
  scale: ['Hoàn toàn không đúng', 'Không đúng lắm', 'Lưng chừng', 'Khá đúng', 'Rất đúng'],
  scaleEn: ['Very inaccurate', 'Moderately inaccurate', 'Neither accurate nor inaccurate', 'Moderately accurate', 'Very accurate'],
  showEn: 'Xem câu gốc',
  hideEn: 'Ẩn câu gốc',
  back: 'Câu trước',
  next: 'Câu sau',
  finish: 'Xem chòm sao',
  progress: (n, total) => `Câu ${n}/${total}`,
};

export const RESULT = {
  title: 'Chòm sao của bạn',
  detailTitle: 'Năm chiều của bạn',
  lead: 'Chạm vào một ngôi sao để đọc phần giải thích của chiều đó. Dùng bàn phím thì Tab tới chòm sao rồi đổi sao bằng phím mũi tên.',
  norm:
    'Điểm cho biết bạn đứng ở đâu trên thang đo từ 1 đến 5, chưa phải so sánh với người Việt khác. Bản dịch này chưa được chuẩn hoá trên một mẫu người Việt, nên chưa có “điểm trung bình của người Việt” để đặt cạnh.',
  levels: { low: 'Thấp', mid: 'Trung bình', high: 'Cao' },
  daily: 'Biểu hiện thường ngày',
  strengths: 'Điểm mạnh',
  watchOut: 'Điểm dễ vấp',
  tips: 'Gợi ý',
  study: 'Khi học',
  work: 'Khi làm việc',
  conflict: 'Khi có mâu thuẫn',
  score: 'Điểm',
  save: 'Lưu chòm sao thành ảnh',
  saved: 'Đã lưu ảnh. Ảnh chỉ có năm điểm số, không có câu trả lời nào của bạn.',
  saveFail: 'Chưa lưu được ảnh. Thử lại, hoặc chụp màn hình phần chòm sao nhé.',
  imageNote: 'Ảnh chỉ có năm điểm số và mức, không có tên hay câu trả lời của bạn.',
  again: 'Làm lại bài',
  review: 'Xem lại câu trả lời',
  combosYours: 'Tổ hợp khớp với kết quả của bạn',
  combosNone:
    'Kết quả của bạn không rơi vào tổ hợp nào bên dưới, vì phần lớn các chiều nằm ở mức trung bình. Các tổ hợp này vẫn đáng đọc để hiểu cách các chiều ảnh hưởng lẫn nhau.',
};

/* ---------- Phần kiến thức ---------- */

export const WHAT_IS = {
  title: 'Năm yếu tố tính cách là gì',
  paragraphs: [
    'Mô hình năm yếu tố, thường gọi là Big Five, mô tả tính cách bằng năm chiều liên tục: cởi mở, tận tâm, hướng ngoại, dễ chịu và bất ổn cảm xúc. Mỗi người có một điểm trên từng chiều, giống như vị trí trên một chiếc thước, chứ không bị xếp vào một “loại người” nào.',
    'Mô hình ra đời từ một giả thuyết về ngôn ngữ: những nét tính cách quan trọng trong đời sống sẽ có tên trong từ điển. Năm 1936, Gordon Allport và Henry Odbert gom được gần 18.000 từ tiếng Anh dùng để tả con người. Từ thập niên 1960, nhiều nhóm nghiên cứu phân tích các từ ấy bằng thống kê và cùng thấy chúng tụ lại thành năm nhóm lớn. Lewis Goldberg là người đặt tên “Big Five” và soạn bộ tính từ đánh dấu cho năm nhóm này.',
    'Đến nay, Big Five là mô hình tính cách được dùng nhiều nhất trong nghiên cứu tâm lý học. Năm chiều đã được tìm thấy ở nhiều nền văn hoá, đo được khá ổn định qua thời gian và có liên hệ với kết quả học tập, công việc, sức khoẻ, các mối quan hệ. Mỗi liên hệ ấy đều ở mức vừa phải: tính cách góp một phần, hoàn cảnh và lựa chọn của mỗi người góp phần còn lại.',
  ],
  quote:
    'Không có chiều nào càng cao càng tốt. Mỗi đầu thang đo đều có chỗ mạnh, chỗ yếu, tuỳ việc và tuỳ lúc.',
};

export const METHOD = {
  title: 'Bộ câu hỏi và cách chấm',
  paragraphs: [
    'Bộ câu hỏi là bản 50 câu của IPIP Big-Five Factor Markers. IPIP (International Personality Item Pool) là kho câu hỏi tính cách do Lewis Goldberg khởi xướng năm 1996 và để ở phạm vi công cộng, ai cũng được dùng, dịch và sửa mà không cần xin phép. Bộ 50 câu này được soạn để đo năm chiều theo đúng bộ tính từ đánh dấu mà Goldberg công bố năm 1992.',
    'Mỗi chiều có 10 câu, trả lời theo năm mức từ “hoàn toàn không đúng” (1 điểm) đến “rất đúng” (5 điểm). Có câu thuận, như “Tôi là người mở lời bắt chuyện”, đồng ý càng nhiều thì điểm hướng ngoại càng cao. Có câu nghịch, như “Tôi không nói nhiều”, nên điểm được đảo lại: chọn 5 tính là 1, chọn 4 tính là 2. Điểm của một chiều là trung bình 10 câu, từ 1 đến 5.',
    'Thẻ chia mỗi chiều thành ba mức ngay trên thang đo: dưới 2,5 là thấp, từ 2,5 đến 3,5 là trung bình, trên 3,5 là cao. Ngưỡng này chỉ để dễ đọc, không phải chuẩn tâm lý học. Ở các bài đã chuẩn hoá, điểm được so với điểm của hàng nghìn người cùng nền văn hoá; bản tiếng Việt ở đây chưa làm bước đó.',
    'IPIP gọi chiều thứ năm là “trí tuệ và trí tưởng tượng” và chấm chiều thứ tư theo hướng “ổn định cảm xúc”. Thẻ này dùng tên thông dụng hơn là “cởi mở” và đảo chiều thứ tư thành “bất ổn cảm xúc”, nên điểm bất ổn cảm xúc bằng 6 trừ điểm ổn định cảm xúc.',
  ],
  tableTitle: 'Xem 50 câu, chiều và khoá chấm',
  tableNote: 'Dấu + là câu thuận, dấu − là câu nghịch (đảo điểm). Câu tiếng Anh giữ nguyên chữ của IPIP.',
  limits: [
    'Đây là bài tự đánh giá: kết quả phản ánh cách bạn nhìn mình lúc làm bài. Tâm trạng hôm đó, hay mong muốn được nhìn nhận theo một kiểu nào đó, đều làm điểm xê dịch.',
    'Bài không dùng để chẩn đoán tâm lý, chọn người hay xếp loại ai. Nếu đang khó khăn về cảm xúc, nên nói chuyện với chuyên gia tâm lý thay vì dựa vào một bài trắc nghiệm.',
  ],
};

export const COMBOS = {
  title: 'Đọc 5 chiều cùng nhau',
  lead:
    'Từng chiều đứng riêng đã nói được nhiều điều, nhưng các chiều còn tác động lẫn nhau. Dưới đây là vài tổ hợp đã được nghiên cứu, kèm nguồn. Mỗi tổ hợp là một xu hướng trung bình trên nhiều người, không phải lời đoán về riêng ai.',
  items: [
    {
      id: 'lo-ma-lam',
      title: 'Tận tâm cao, bất ổn cảm xúc cao',
      tag: 'Lo mà làm',
      text:
        'Người hay lo mà cũng rất chu đáo thì biến nỗi lo thành việc: đi khám sớm, chuẩn bị kỹ, rà lại từng chi tiết. Một số nghiên cứu gọi đây là “bất ổn cảm xúc lành mạnh”, khi thấy nhóm người này giữ thói quen sức khoẻ tốt hơn những người chỉ hay lo mà không tận tâm. Cái giá phải trả là sự căng thẳng: việc gì cũng phải chắc ăn mới yên.',
      source: 'Friedman (2000); Turiano và cộng sự (2013)',
    },
    {
      id: 'nhieu-y-it-dich',
      title: 'Cởi mở cao, tận tâm thấp',
      tag: 'Nhiều ý, ít đích',
      text:
        'Nghiên cứu tổng hợp về sáng tạo cho thấy giới nghệ sĩ có điểm cởi mở cao hơn và điểm tận tâm thấp hơn người không làm nghệ thuật. Ý tưởng đến nhiều, nhưng quy củ thì ít, nên dự án dễ dừng ở bản nháp. Một người cộng sự giỏi chốt hạn, hay vài thói quen đơn giản như hạn chót công khai, giúp các ý tưởng đi tới cùng.',
      source: 'Feist (1998)',
    },
    {
      id: 'on-dinh',
      title: 'Dễ chịu cao, tận tâm cao, bất ổn cảm xúc thấp',
      tag: 'Nhóm “ổn định”',
      text:
        'Ba chiều này hay đi cùng nhau đến mức Colin DeYoung xếp chúng vào một yếu tố bậc cao, gọi là “ổn định”: giữ được cảm xúc, giữ được lời hứa và giữ được hoà khí. Người như vậy là chỗ dựa vững cho tập thể. Điều cần để ý là sự ổn định quá lâu có thể thành ngại đổi thay.',
      source: 'DeYoung (2006)',
    },
    {
      id: 'mem-deo',
      title: 'Hướng ngoại cao, cởi mở cao',
      tag: 'Nhóm “mềm dẻo”',
      text:
        'Cũng theo DeYoung, hướng ngoại và cởi mở hợp thành một yếu tố bậc cao khác, gọi là “mềm dẻo”: xu hướng tìm tòi, thử cái mới cả trong ý nghĩ lẫn trong giao tiếp. Người như vậy mở được nhiều cánh cửa, gặp nhiều người, nghe nhiều ý. Đổi lại, họ dễ bị cuốn vào quá nhiều thứ cùng lúc.',
      source: 'DeYoung (2006)',
    },
    {
      id: 'goc',
      title: 'Hướng ngoại và bất ổn cảm xúc',
      tag: 'Bốn góc của Eysenck',
      text:
        'Từ giữa thế kỷ 20, Hans Eysenck đã đặt hai chiều này vuông góc với nhau và thấy chúng khớp với bốn khí chất cổ của Hy Lạp. Hướng ngoại mà vững cảm xúc thì vui vẻ, dễ hoà nhập. Hướng ngoại mà nhạy cảm thì sôi nổi, nóng nảy, cảm xúc lên xuống rõ. Hướng nội mà vững thì điềm đạm, bình thản. Hướng nội mà nhạy cảm thì dễ lo âu và hay giữ nỗi buồn trong lòng.',
      source: 'Eysenck (1967)',
      corners: {
        'goc-ngoai-vung': 'Bạn ở góc hướng ngoại, vững cảm xúc: người Hy Lạp xưa gọi là khí chất “hăng hái”.',
        'goc-ngoai-nhay': 'Bạn ở góc hướng ngoại, nhạy cảm: người Hy Lạp xưa gọi là khí chất “nóng nảy”.',
        'goc-noi-vung': 'Bạn ở góc hướng nội, vững cảm xúc: người Hy Lạp xưa gọi là khí chất “bình thản”.',
        'goc-noi-nhay': 'Bạn ở góc hướng nội, nhạy cảm: người Hy Lạp xưa gọi là khí chất “ưu tư”.',
      },
    },
  ],
};

export const MYTHS = {
  title: 'Hiểu lầm thường gặp',
  items: [
    {
      q: 'Hướng nội nghĩa là nhút nhát',
      a: 'Hai chuyện này khác nhau. Hướng nội là thích sự yên tĩnh và nhóm nhỏ; nhút nhát là sợ bị người khác đánh giá. Nghiên cứu của Jonathan Cheek và Arnold Buss năm 1981 cho thấy mức thích giao du và mức nhút nhát chỉ liên quan lỏng lẻo với nhau: có người hướng nội nói chuyện rất tự tin, cũng có người thích đông vui mà vẫn run khi phải phát biểu. Nỗi sợ bị đánh giá gần với chiều bất ổn cảm xúc hơn là với hướng nội.',
      source: 'Cheek & Buss (1981)',
    },
    {
      q: 'Điểm thấp là điểm xấu',
      a: 'Bài này không có điểm đạt hay trượt. Theo nhà sinh học tiến hoá Daniel Nettle, mỗi chiều tính cách tồn tại ở cả hai đầu vì đầu nào cũng có lợi trong hoàn cảnh này và có hại trong hoàn cảnh khác. Hướng ngoại giúp mở rộng quan hệ nhưng đi kèm tính liều và dễ gặp tai nạn hơn; bất ổn cảm xúc gây khổ tâm nhưng giúp cảnh giác với nguy hiểm; dễ chịu giúp hợp tác nhưng dễ bị lợi dụng.',
      source: 'Nettle (2006)',
    },
    {
      q: 'Tính cách cố định suốt đời',
      a: 'Tính cách đổi dần, chậm nhưng có thật. Một phân tích tổng hợp 92 nghiên cứu theo dõi dài hạn của Brent Roberts và cộng sự năm 2006 cho thấy, tính trung bình, con người tận tâm hơn và ổn định cảm xúc hơn khi đi từ tuổi hai mươi tới tuổi trung niên, rồi dễ chịu hơn khi về già. Phần lớn thay đổi diễn ra trong khoảng 20 đến 40 tuổi, nhưng không dừng lại ở đó. Kết quả hôm nay là ảnh chụp của bây giờ, không phải bản án cho sau này.',
      source: 'Roberts, Walton & Viechtbauer (2006)',
    },
    {
      q: 'Big Five chia người thành năm loại',
      a: 'Big Five không xếp ai vào một loại cả. Mỗi người có đủ năm chiều, mỗi chiều một mức, và phần lớn mọi người rơi vào khoảng giữa của từng thang. Hai người cùng “hướng ngoại cao” vẫn có thể khác nhau rất nhiều ở bốn chiều còn lại.',
      source: 'John, Naumann & Soto (2008)',
    },
  ],
};

/* ---------- Nguồn tham khảo ---------- */

export const SOURCES = [
  {
    title: 'Bộ câu hỏi',
    items: [
      { title: 'Administering IPIP Measures, with a 50-item Sample Questionnaire', by: 'ipip.ori.org', url: 'https://ipip.ori.org/new_ipip-50-item-scale.htm', note: 'Bảng hỏi 50 câu, thứ tự câu và năm mức trả lời.' },
      { title: 'International Personality Item Pool: Big-Five Factor Markers', by: 'ipip.ori.org', url: 'https://ipip.ori.org/newBigFive5broadKey.htm', note: 'Khoá chấm thuận, nghịch của từng câu.' },
      { title: 'The development of markers for the Big-Five factor structure', by: 'Lewis R. Goldberg, Psychological Assessment 4(1)', year: '1992', url: 'https://doi.org/10.1037/1040-3590.4.1.26', note: 'Bộ tính từ đánh dấu năm chiều mà bộ câu IPIP bám theo.' },
      { title: 'The International Personality Item Pool and the future of public-domain personality measures', by: 'Lewis R. Goldberg và cộng sự, Journal of Research in Personality 40', year: '2006', url: 'https://doi.org/10.1016/j.jrp.2005.08.007', note: 'Lịch sử và nguyên tắc phạm vi công cộng của IPIP.' },
      { title: 'Goldberg’s “IPIP” Big-Five factor markers: Internal consistency and concurrent validation in Scotland', by: 'Alan J. Gow và cộng sự, Personality and Individual Differences 39', year: '2005', note: 'Độ tin cậy của bộ 50 câu khi dùng ngoài nước Mỹ.' },
      { title: 'semanticfa: bộ dữ liệu big5', by: 'CRAN, bản 0.5.1', year: '2026', url: 'https://cran.r-project.org/package=semanticfa', note: 'Bản sao 50 câu IPIP và khoá chấm, dùng để đối chiếu từng câu khi soạn thẻ.' },
      { title: 'ITC Guidelines for Translating and Adapting Tests (Second Edition)', by: 'International Test Commission', year: '2017', note: 'Các bước cần có trước khi bản dịch được coi là đã chuẩn hoá.' },
    ],
  },
  {
    title: 'Mô hình năm yếu tố',
    items: [
      { title: 'Paradigm shift to the integrative Big Five trait taxonomy', by: 'Oliver P. John, Laura P. Naumann, Christopher J. Soto, trong Handbook of Personality (bản 3)', year: '2008', note: 'Lịch sử mô hình, từ Allport và Odbert tới Big Five.' },
      { title: 'A meta-analysis of the five-factor model of personality and academic performance', by: 'Arthur E. Poropat, Psychological Bulletin 135(2)', year: '2009', url: 'https://doi.org/10.1037/a0014996', note: 'Tận tâm và kết quả học tập.' },
      { title: 'The geographic distribution of Big Five personality traits: Patterns and profiles of human self-description across 56 nations', by: 'David P. Schmitt và cộng sự, Journal of Cross-Cultural Psychology 38(2)', year: '2007', note: 'Năm chiều xuất hiện ở nhiều nền văn hoá.' },
      { title: 'The Biological Basis of Personality', by: 'Hans J. Eysenck, Charles C. Thomas', year: '1967', note: 'Hai chiều hướng ngoại và bất ổn cảm xúc, bốn khí chất.' },
    ],
  },
  {
    title: 'Tổ hợp các chiều',
    items: [
      { title: 'Long-term relations of personality and health: Dynamisms, mechanisms, tropisms', by: 'Howard S. Friedman, Journal of Personality 68(6)', year: '2000', note: 'Ý tưởng “bất ổn cảm xúc lành mạnh”.' },
      { title: 'Big 5 personality traits and interleukin-6: Evidence for “healthy Neuroticism” in a US population sample', by: 'Nicholas A. Turiano và cộng sự, Brain, Behavior, and Immunity 28', year: '2013', note: 'Tận tâm cao đi cùng bất ổn cảm xúc cao.' },
      { title: 'A meta-analysis of personality in scientific and artistic creativity', by: 'Gregory J. Feist, Personality and Social Psychology Review 2(4)', year: '1998', note: 'Cởi mở, tận tâm và sáng tạo nghệ thuật.' },
      { title: 'Higher-order factors of the Big Five in a multi-informant sample', by: 'Colin G. DeYoung, Journal of Personality and Social Psychology 91(6)', year: '2006', note: 'Hai yếu tố bậc cao “ổn định” và “mềm dẻo”.' },
    ],
  },
  {
    title: 'Hiểu lầm thường gặp',
    items: [
      { title: 'Shyness and sociability', by: 'Jonathan M. Cheek, Arnold H. Buss, Journal of Personality and Social Psychology 41(2)', year: '1981', url: 'https://doi.org/10.1037/0022-3514.41.2.330', note: 'Nhút nhát và thích giao du là hai chuyện khác nhau.' },
      { title: 'The evolution of personality variation in humans and other animals', by: 'Daniel Nettle, American Psychologist 61(6)', year: '2006', url: 'https://doi.org/10.1037/0003-066X.61.6.622', note: 'Mỗi đầu thang đo đều có lợi và có hại.' },
      { title: 'Patterns of mean-level change in personality traits across the life course: A meta-analysis of longitudinal studies', by: 'Brent W. Roberts, Kate E. Walton, Wolfgang Viechtbauer, Psychological Bulletin 132(1)', year: '2006', url: 'https://doi.org/10.1037/0033-2909.132.1.1', note: 'Tính cách thay đổi theo tuổi.' },
    ],
  },
];
