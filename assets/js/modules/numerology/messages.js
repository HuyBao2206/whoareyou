// Thông điệp cho từng cặp chỉ số × con số.
// Mỗi chỉ số viết riêng, không dùng chung đoạn văn. Văn phong theo mục 3 của brief.
// Sau khi sửa, chạy: node tools/check-copy.mjs && node tools/check-messages.mjs
//
// Cấu trúc mỗi mục:
//   title, keywords (3–5), summary (3–5 câu)
//   strengths (3), watchOut (2–3), advice (2–3)
//   fields: chỉ có ở Số chủ đạo và Số sứ mệnh
//   Năm cá nhân thay strengths/watchOut/advice bằng theme, doMore, doLess, byQuarter (4 quý)

/* ===================== SỐ CHỦ ĐẠO ===================== */

const lifePath = {
  1: {
    title: 'Người mở lối đi riêng',
    keywords: ['Tự lập', 'Dám bắt đầu', 'Quyết đoán', 'Cá tính'],
    summary:
      'Người mang số chủ đạo 1 thường thấy dễ chịu nhất khi được tự quyết việc của mình. Từ nhỏ bạn có thể đã thích làm theo cách riêng, kể cả khi cách đó chậm hơn cách người lớn chỉ. Khi cả nhóm còn bàn tới bàn lui, bạn hay là người nói “thôi mình làm thử đi”. Bài học lớn của số 1 là đứng vững trên đôi chân của mình mà không đẩy người khác ra xa.',
    strengths: [
      'Bạn dám bắt đầu. Một dự án nhóm còn nằm trên giấy, bạn đã lập xong file chung và chia việc cho từng người.',
      'Bạn chịu trách nhiệm cho lựa chọn của mình. Khi quyết sai, bạn ít đổ lỗi mà tự tìm cách sửa.',
      'Bạn làm việc độc lập tốt. Giao cho bạn một đầu việc rõ ràng rồi để bạn yên, kết quả thường tốt hơn khi có người đứng sau nhắc từng bước.',
    ],
    watchOut: [
      'Bạn dễ nghe góp ý thành chê bai. Một câu “chỗ này hơi rối” từ đồng nghiệp có thể khiến bạn khó chịu cả buổi chiều.',
      'Vì quen tự làm, bạn hay ôm hết việc rồi mệt một mình, trong khi chỉ cần mở lời là có người giúp.',
      'Lúc nóng vội, bạn có thể quyết thay người khác mà quên hỏi ý họ.',
    ],
    advice: [
      'Tuần này, bạn chọn một việc mình hay tự làm và nhờ một người làm cùng. Để ý xem kết quả có tệ như bạn lo không.',
      'Khi nhận góp ý, bạn đợi qua một đêm rồi hãy trả lời. Sáng hôm sau đọc lại, câu đó thường nhẹ hơn nhiều.',
      'Viết ra một mục tiêu cho năm nay mà bạn muốn đạt vì chính mình, không phải để hơn ai.',
    ],
    fields: ['Khởi nghiệp, kinh doanh nhỏ', 'Quản lý dự án', 'Nghề tự do', 'Phát triển thị trường', 'Thiết kế sản phẩm'],
  },

  2: {
    title: 'Người giữ nhịp cho cả nhóm',
    keywords: ['Tinh tế', 'Hợp tác', 'Kiên nhẫn', 'Lắng nghe'],
    summary:
      'Người mang số chủ đạo 2 rất nhạy với cảm xúc của người xung quanh. Bạn nhận ra một người bạn đang buồn chỉ qua cách họ trả lời tin nhắn cụt hơn mọi ngày. Bạn làm tốt nhất khi có người đồng hành, và thường là người giúp cả nhóm hiểu nhau hơn. Bài học của số 2 là giữ được tiếng nói của mình trong lúc vẫn chăm lo cho sự hoà thuận.',
    strengths: [
      'Bạn lắng nghe thật lòng. Người khác hay tìm bạn để kể chuyện vì bạn không vội chen vào khuyên.',
      'Bạn giỏi hoà giải. Khi hai người trong nhóm căng với nhau, bạn biết nói câu nào để cả hai cùng xuống nước.',
      'Bạn kiên nhẫn với những việc cần thời gian, như kèm một bạn mới vào làm hay vun một mối quan hệ lâu dài.',
    ],
    watchOut: [
      'Bạn hay nói “sao cũng được” dù trong lòng có ý riêng, rồi về nhà lại tiếc vì không nói ra.',
      'Bạn dễ để lời nói của người khác ảnh hưởng tới tâm trạng cả ngày, nhất là một tin nhắn đã xem mà không trả lời.',
      'Khi phải chọn giữa hai bên, bạn có thể chần chừ quá lâu vì sợ làm ai đó buồn.',
    ],
    advice: [
      'Lần tới khi được hỏi ăn gì hay đi đâu, bạn thử nói hẳn một lựa chọn thay vì “tuỳ bạn”.',
      'Mỗi tối, bạn viết vài dòng về điều mình cảm thấy trong ngày. Việc này giúp bạn tách cảm xúc của mình khỏi cảm xúc của người khác.',
      'Khi cần từ chối, bạn có thể nói ngắn và tử tế: “Lần này mình không giúp được, mong bạn thông cảm.” Bạn không cần giải thích dài.',
    ],
    fields: ['Hỗ trợ khách hàng', 'Nhân sự', 'Điều phối dự án', 'Giáo dục mầm non, tiểu học', 'Quan hệ đối tác'],
  },

  3: {
    title: 'Người kể chuyện',
    keywords: ['Biểu đạt', 'Sáng tạo', 'Vui vẻ', 'Giao tiếp'],
    summary:
      'Người mang số chủ đạo 3 cần được nói ra, viết ra hay vẽ ra những gì mình nghĩ. Bạn có thể biến một chuyện bình thường ở chỗ làm thành câu chuyện khiến cả bàn ăn bật cười. Niềm vui của bạn lan sang người khác khá tự nhiên. Bài học của số 3 là đi tới cùng với một ý tưởng, thay vì để nó dừng ở mức “nghe hay đấy”.',
    strengths: [
      'Bạn diễn đạt tốt. Gặp một ý khó, bạn biết nói lại cho người khác hiểu bằng ví dụ gần gũi.',
      'Bạn đem lại không khí dễ chịu. Buổi họp có bạn thường bớt căng hơn hẳn.',
      'Bạn nghĩ ra nhiều ý mới, từ cách trang trí góc học tập tới tên gọi cho một sản phẩm.',
    ],
    watchOut: [
      'Bạn dễ bắt đầu nhiều việc cùng lúc, nên trong máy có cả chục bản nháp chưa bao giờ xong.',
      'Khi buồn, bạn hay giấu sau những câu đùa, khiến người thân không biết bạn đang cần được hỏi han.',
      'Bạn có thể tiêu tiền theo hứng, nhất là cho những món đẹp mà sau đó ít dùng.',
    ],
    advice: [
      'Bạn chọn một ý tưởng mình thích nhất và đặt hạn hoàn thành trong hai tuần. Nói hạn đó với một người bạn để có người nhắc.',
      'Mỗi ngày dành mười lăm phút để viết, vẽ hoặc ghi âm. Bạn làm vì mình, không cần đăng lên đâu cả.',
      'Trước khi mua một món không cần gấp, bạn để nó trong giỏ hàng ba ngày rồi hãy quyết.',
    ],
    fields: ['Viết, biên tập nội dung', 'Truyền thông, marketing', 'Thiết kế, minh hoạ', 'Giảng dạy, đào tạo', 'Biểu diễn, dẫn chương trình'],
  },

  4: {
    title: 'Người xây móng',
    keywords: ['Chắc chắn', 'Chăm chỉ', 'Có trật tự', 'Đáng tin'],
    summary:
      'Người mang số chủ đạo 4 thích mọi thứ có kế hoạch và làm tới đâu chắc tới đó. Bạn là kiểu người ghi chi tiêu từng khoản, hoặc ít nhất luôn biết tiền của mình đang nằm ở đâu. Người khác yên tâm khi giao việc cho bạn vì bạn hiếm khi bỏ dở. Bài học của số 4 là mềm lại một chút khi kế hoạch phải đổi, vì đời ít khi đi đúng như bảng tính.',
    strengths: [
      'Bạn đáng tin. Hẹn nộp thứ Sáu thì tới thứ Năm bạn đã gần xong.',
      'Bạn biết chia việc lớn thành từng bước nhỏ và đi lần lượt, nên việc khó mấy cũng tìm được lối ra.',
      'Bạn giữ được kỷ luật với những thói quen dài hơi như tập thể dục, học ngoại ngữ hay để dành tiền.',
    ],
    watchOut: [
      'Bạn dễ khó chịu khi người khác làm theo cách khác mình, dù cách đó vẫn ra kết quả.',
      'Bạn có thể làm việc tới quên nghỉ, rồi coi việc nghỉ ngơi là lười.',
      'Khi có thay đổi bất ngờ, bạn hay phản ứng bằng cách cứng lại thay vì tìm phương án mới.',
    ],
    advice: [
      'Trong lịch tuần này, bạn chừa ra một buổi không có kế hoạch gì cả và xem mình thấy thế nào.',
      'Khi đồng nghiệp làm khác cách bạn, bạn hỏi lý do trước khi góp ý. Đôi khi bạn sẽ học được một mẹo mới.',
      'Với mỗi kế hoạch lớn, bạn viết sẵn một phương án dự phòng. Có nó rồi, thay đổi sẽ đỡ làm bạn chao đảo.',
    ],
    fields: ['Kế toán, tài chính', 'Kỹ thuật, xây dựng', 'Vận hành, hậu cần', 'Lập trình, kiểm thử phần mềm', 'Quản lý chất lượng'],
  },

  5: {
    title: 'Người thích đường mới',
    keywords: ['Tự do', 'Thích nghi', 'Tò mò', 'Đổi mới'],
    summary:
      'Người mang số chủ đạo 5 thường thấy bứt rứt khi một ngày trôi qua y hệt ngày hôm trước. Bạn học nhanh nhất khi được làm thật, đi thật, thử thật. Điểm cần để ý là bạn dễ bỏ ngang lúc mọi thứ bắt đầu nhàm, dù chỉ còn một chút nữa là xong. Bài học của số 5 là dùng sự tự do của mình có chủ đích, để mỗi lần đổi hướng đều đưa bạn tới gần điều mình muốn hơn.',
    strengths: [
      'Bạn thích nghi nhanh. Chuyển tới thành phố mới hay đổi sang nhóm mới, bạn thường quen việc chỉ sau vài tuần.',
      'Bạn dám thử. Món ăn lạ, công cụ mới hay một lối khác để về nhà, bạn đều muốn thử một lần cho biết.',
      'Bạn nói chuyện được với nhiều kiểu người, nên hay là cầu nối giữa những nhóm vốn không quen nhau.',
    ],
    watchOut: [
      'Bạn dễ bỏ ngang khi việc hết mới mẻ, kể cả những việc chỉ còn chút nữa là thấy kết quả.',
      'Bạn hay quyết nhanh theo cảm hứng, như đặt vé đi chơi trước rồi mới tính chuyện tiền.',
      'Khi bị gò vào quy định chặt, bạn có thể bực bội ra mặt và khiến người khác hiểu lầm là bạn coi thường họ.',
    ],
    advice: [
      'Trước khi bỏ một việc, bạn tự hỏi mình chán việc này hay chỉ chán giai đoạn này. Hai câu trả lời dẫn tới hai lựa chọn rất khác nhau.',
      'Giữ một khoản tiền riêng cho những chuyến đi và trải nghiệm. Có sẵn khoản đó, bạn vừa được tự do vừa không lo hụt tháng.',
      'Biến việc lặp lại thành thử thách nhỏ, ví dụ làm xong báo cáo tuần nhanh hơn tuần trước mười phút.',
    ],
    fields: ['Du lịch, sự kiện', 'Bán hàng, kinh doanh', 'Báo chí, sáng tạo nội dung', 'Công việc hay đi lại', 'Khởi nghiệp'],
  },

  6: {
    title: 'Người giữ lửa',
    keywords: ['Trách nhiệm', 'Chăm sóc', 'Gia đình', 'Hài hoà'],
    summary:
      'Người mang số chủ đạo 6 thấy mình có ích nhất khi chăm lo được cho người khác. Bạn là người nhớ sinh nhật cả nhóm, hay mang thêm hộp cơm cho bạn cùng phòng đang bận. Nhà cửa, gia đình và những người thân thiết chiếm chỗ rất lớn trong lòng bạn. Bài học của số 6 là chăm cho người khác mà không quên chăm cho chính mình.',
    strengths: [
      'Bạn có trách nhiệm. Việc đã nhận, bạn lo cho tới nơi, kể cả khi không ai kiểm tra.',
      'Bạn tạo được không gian ấm áp. Bạn bè hay thích tụ tập ở chỗ bạn vì ở đó thấy dễ chịu.',
      'Bạn có mắt thẩm mỹ cho những thứ thường ngày, như cách bày bàn ăn hay sắp lại góc làm việc.',
    ],
    watchOut: [
      'Bạn dễ ôm việc của người khác vào mình, rồi mệt mà không dám kêu.',
      'Đôi lúc sự quan tâm của bạn thành ra kiểm soát, như nhắc đi nhắc lại một người nên làm gì.',
      'Bạn đặt chuẩn cao cho mình và người thân, nên dễ thất vọng khi mọi thứ không trọn vẹn.',
    ],
    advice: [
      'Trước khi nhận lời giúp ai, bạn hỏi mình tuần này còn sức không. Nếu không, bạn có quyền hẹn dịp khác.',
      'Khi muốn khuyên người thân, bạn hỏi trước “bạn có muốn nghe ý kiến của mình không” rồi mới nói.',
      'Mỗi tuần dành một buổi cho việc chỉ mình thích, không phải làm vì ai cả.',
    ],
    fields: ['Y tế, chăm sóc', 'Giáo dục', 'Thiết kế nội thất', 'Nhà hàng, khách sạn', 'Công tác xã hội'],
  },

  7: {
    title: 'Người đi tìm lẽ',
    keywords: ['Suy ngẫm', 'Phân tích', 'Hiểu sâu', 'Độc lập'],
    summary:
      'Người mang số chủ đạo 7 không dễ tin ngay điều người khác nói. Bạn muốn tự tìm hiểu, đọc thêm, so sánh vài nguồn rồi mới gật đầu. Bạn cần những khoảng yên tĩnh để lấy lại sức, và một buổi tối đọc sách một mình có thể quý hơn một bữa tiệc đông người. Bài học của số 7 là tin người khác đủ để mở lòng, dù chưa có câu trả lời chắc chắn cho mọi thứ.',
    strengths: [
      'Bạn phân tích giỏi. Trước khi mua một món đồ đắt tiền, bạn đã đọc kỹ đánh giá và biết rõ điểm yếu của nó.',
      'Bạn tập trung sâu được. Khi đã mê một chủ đề, bạn có thể tìm hiểu nhiều giờ liền mà không thấy chán.',
      'Bạn có trực giác tốt về con người, thường nhận ra điều không ổn trước khi người khác để ý.',
    ],
    watchOut: [
      'Bạn có thể trông xa cách, khiến người mới quen nghĩ bạn khó gần hay đang chê họ.',
      'Bạn dễ nghĩ quá nhiều. Một tin nhắn mơ hồ có thể khiến bạn đoán già đoán non cả buổi.',
      'Khi bị tổn thương, bạn hay rút vào trong và im lặng thay vì nói cho người kia biết.',
    ],
    advice: [
      'Khi đã tìm hiểu kha khá, bạn đặt một hạn để ra quyết định, vì thông tin không bao giờ đủ trăm phần trăm.',
      'Chọn một người tin cậy và kể cho họ nghe một điều bạn đang nghĩ. Nói ra thường nhẹ hơn bạn tưởng.',
      'Giữ một khoảng yên tĩnh cố định mỗi ngày, ví dụ nửa tiếng trước khi ngủ, để bạn không phải chật vật tìm nó.',
    ],
    fields: ['Nghiên cứu khoa học', 'Phân tích dữ liệu', 'Lập trình', 'Tâm lý học', 'Viết chuyên sâu, biên khảo'],
  },

  8: {
    title: 'Người cầm lái',
    keywords: ['Tham vọng', 'Quản lý', 'Thực tế', 'Bản lĩnh'],
    summary:
      'Người mang số chủ đạo 8 thường nghĩ tới kết quả và cách để đạt được nó. Bạn để ý tới chuyện tiền bạc, vị trí và sự ổn định từ khá sớm, và điều đó không có gì xấu. Khi có việc lớn cần người đứng ra lo, mọi người hay nhìn về phía bạn. Bài học của số 8 là dùng sức mạnh của mình cho công bằng, và nhớ rằng thành công không đo hết được bằng con số.',
    strengths: [
      'Bạn có đầu óc tổ chức. Chuyến đi chơi của cả nhóm, bạn tính được ngân sách, chia chi phí và đặt chỗ gọn gàng.',
      'Bạn bền bỉ khi theo đuổi mục tiêu. Hỏng một lần, bạn thường rút kinh nghiệm rồi làm lại.',
      'Bạn dám ra những quyết định khó và chịu trách nhiệm về chúng.',
    ],
    watchOut: [
      'Bạn dễ đo giá trị bản thân bằng thu nhập hay thành tích, nên những giai đoạn chững lại làm bạn rất bứt rứt.',
      'Trong nhóm, bạn có thể vô tình lấn át người khác vì muốn mọi thứ chạy theo ý mình cho nhanh.',
      'Bạn hay làm tới khuya và hứa “xong đợt này sẽ nghỉ”, nhưng rồi đợt sau lại tới.',
    ],
    advice: [
      'Bên cạnh mục tiêu về tiền, bạn đặt thêm một mục tiêu không đo bằng tiền, như học đàn hay về thăm ông bà đều đặn.',
      'Trong buổi họp tới, bạn để người khác nói trước rồi mới nêu ý của mình.',
      'Ghi lại các khoản chi lớn trong tháng và xem khoản nào thật sự làm bạn vui, khoản nào chỉ để chứng tỏ.',
    ],
    fields: ['Quản trị doanh nghiệp', 'Tài chính, ngân hàng', 'Bất động sản', 'Luật', 'Quản lý vận hành'],
  },

  9: {
    title: 'Người rộng lòng',
    keywords: ['Bao dung', 'Lý tưởng', 'Cho đi', 'Biết buông'],
    summary:
      'Người mang số chủ đạo 9 thường quan tâm tới những chuyện lớn hơn bản thân mình. Bạn dễ xúc động trước một bản tin về người gặp nạn và hay là người chuyển khoản ủng hộ đầu tiên. Bạn hiểu được nhiều kiểu người vì nhìn mọi chuyện bằng tấm lòng rộng. Bài học của số 9 là biết buông những gì đã hết, từ một mối quan hệ cũ tới một nỗi giận đã lâu.',
    strengths: [
      'Bạn cảm thông với người khác, kể cả những người rất khác mình về tuổi tác hay hoàn cảnh.',
      'Bạn nhìn được bức tranh lớn, nên hay giúp nhóm nhớ lại vì sao mọi người làm việc này.',
      'Bạn rộng rãi thời gian và công sức cho những việc có ích cho người khác.',
    ],
    watchOut: [
      'Bạn dễ cho đi quá sức rồi thấy tủi khi không ai để ý.',
      'Bạn hay giữ lại kỷ niệm, đồ cũ và cả những mối quan hệ đã làm mình mệt.',
      'Khi người khác không sống đúng như lý tưởng của bạn, bạn có thể thất vọng một cách lặng lẽ.',
    ],
    advice: [
      'Trong tuần này, bạn dọn một góc tủ và cho đi những món đã không dùng tới trong một năm.',
      'Chọn một việc thiện nguyện vừa sức và làm đều đặn, thay vì đáp lại mọi lời kêu gọi rồi kiệt sức.',
      'Khi thấy tủi vì cho nhiều mà nhận ít, bạn nói thẳng với người kia điều mình cần.',
    ],
    fields: ['Phi lợi nhuận, công tác xã hội', 'Giáo dục', 'Nghệ thuật', 'Y tế, chăm sóc', 'Quan hệ quốc tế'],
  },

  10: {
    title: 'Người biết làm lại',
    keywords: ['Tự lập', 'Linh hoạt', 'Bền chí', 'Khởi đầu'],
    summary:
      'Ở cách tính phổ biến tại Việt Nam, tổng bằng 10 được giữ lại thay vì rút về 1. Người mang số này có sự tự lập của số 1, cộng thêm khả năng xoay xở khi hoàn cảnh đổi khác. Bạn có thể đã đổi trường, đổi việc hay đổi chỗ ở vài lần, và lần nào cũng gượng dậy được. Bài học của số 10 là tin vào khả năng làm lại của mình, đồng thời học cách đi đường dài với một lựa chọn.',
    strengths: [
      'Bạn đứng dậy nhanh sau vấp ngã. Trượt một kỳ thi hay lỡ một cơ hội, bạn buồn vài hôm rồi tính bước tiếp theo.',
      'Bạn vừa tự làm được vừa chịu học hỏi, nên hợp với những môi trường hay thay đổi.',
      'Bạn hay là người thử cách mới đầu tiên, rồi quay lại chỉ cho người khác.',
    ],
    watchOut: [
      'Vì quen làm lại từ đầu, bạn có thể bỏ một hướng đi hơi sớm, trước khi nó kịp cho kết quả.',
      'Bạn đôi khi tin quá vào khả năng xoay xở của mình, nên chuẩn bị ít hơn mức cần.',
    ],
    advice: [
      'Với mục tiêu quan trọng nhất lúc này, bạn cam kết theo nó ít nhất sáu tháng rồi mới đánh giá lại.',
      'Ghi lại những lần bạn đã làm lại từ đầu và điều học được sau mỗi lần. Danh sách đó sẽ nhắc bạn mỗi khi chùn bước.',
      'Trước một thay đổi lớn, bạn hỏi ý một người đi trước để có thêm góc nhìn.',
    ],
    fields: ['Khởi nghiệp', 'Quản lý dự án', 'Phát triển kinh doanh', 'Tư vấn', 'Nghề tự do'],
  },

  11: {
    title: 'Người nhạy với tín hiệu nhỏ',
    keywords: ['Trực giác', 'Truyền cảm hứng', 'Nhạy cảm', 'Lý tưởng'],
    summary:
      'Số 11 được xem là một số đặc biệt nên không bị rút gọn tiếp. Người mang số chủ đạo 11 cảm nhận rất rõ những thứ người khác hay bỏ qua, như sự gượng gạo trong một cuộc gọi hay một ý tưởng còn mơ hồ. Bạn hay có những lúc tự dưng biết, và về sau thấy mình đúng. Bài học của số 11 là sống với độ nhạy đó mà không để nó làm mình căng thẳng.',
    strengths: [
      'Bạn có trực giác tốt, nhất là trong chuyện đọc người và đoán xem một ý tưởng có chạm được tới người khác không.',
      'Bạn truyền được cảm hứng. Khi bạn kể về điều mình tin, người nghe dễ muốn làm cùng.',
      'Bạn để ý tới phần ý nghĩa của mọi việc, nên hay giúp người khác thấy điều họ đang làm có giá trị ra sao.',
    ],
    watchOut: [
      'Bạn dễ căng thẳng và khó ngủ khi có nhiều chuyện chưa rõ ràng.',
      'Bạn hay nghi ngờ bản thân, dù người khác thấy bạn đang làm tốt.',
      'Vì kỳ vọng cao, bạn có thể hụt hẫng khi thực tế không đẹp như mình hình dung.',
    ],
    advice: [
      'Ghi lại các linh cảm của bạn kèm ngày tháng. Sau vài tháng, bạn sẽ biết lúc nào nên tin chúng, lúc nào nên kiểm tra thêm.',
      'Tạo một thói quen giúp mình chậm lại mỗi tối, như đi bộ ngắn hay tắt điện thoại sớm.',
      'Biến ý tưởng thành việc nhỏ có hạn chót, để cảm hứng có chỗ đứng trong đời thực.',
    ],
    fields: ['Tư vấn', 'Nghệ thuật, âm nhạc', 'Giảng dạy, diễn thuyết', 'Viết lách', 'Hoạt động cộng đồng'],
  },

  22: {
    title: 'Người dựng việc lớn',
    keywords: ['Tầm nhìn', 'Thực tế', 'Bền bỉ', 'Xây dựng'],
    summary:
      'Số 22 được viết là 22/4 vì nó mang nền của số 4 nhưng với tầm nhìn rộng hơn. Người mang số chủ đạo này có thể nghĩ tới những việc lớn, như một tổ chức hay một sản phẩm cho nhiều người dùng, và cũng đủ chắc chắn để làm ra nó từng bước. Áp lực đi kèm là bạn hay thấy mình chưa làm đủ. Bài học của số 22 là kiên nhẫn với tiến độ và chấp nhận rằng việc lớn cần nhiều năm.',
    strengths: [
      'Bạn biến ý tưởng thành kế hoạch làm được. Người khác còn đang mơ, bạn đã ngồi xuống chia nó thành từng giai đoạn.',
      'Bạn chịu được việc khó và dài hơi, như theo một ngành học nhiều năm hay dựng một dự án từ con số không.',
      'Bạn biết kết nối người và nguồn lực để cùng làm một việc chung.',
    ],
    watchOut: [
      'Bạn đặt áp lực lên mình rất nặng, có lúc tới mức không cho phép mình nghỉ.',
      'Bạn có thể khó tính với người làm chậm hơn hay kém cẩn thận hơn mình.',
      'Khi tầm nhìn quá xa so với hiện tại, bạn dễ nản và nghĩ mình kém.',
    ],
    advice: [
      'Chia mục tiêu lớn thành từng mốc ba tháng, và ăn mừng mỗi mốc dù nhỏ.',
      'Tìm một người đi trước từng làm việc tương tự để học hỏi, thay vì tự mò mọi thứ.',
      'Cho mình một ngày nghỉ thật sự mỗi tuần, không email, không kế hoạch.',
    ],
    fields: ['Kiến trúc, xây dựng', 'Quản lý dự án lớn', 'Kỹ thuật hệ thống', 'Khởi nghiệp quy mô lớn', 'Chính sách công'],
  },

  33: {
    title: 'Người dạy bằng sự tử tế',
    keywords: ['Yêu thương', 'Phụng sự', 'Kiên nhẫn', 'Dẫn dắt'],
    summary:
      'Số 33 được viết là 33/6 vì nó mang nền của số 6, với mức quan tâm tới người khác còn cao hơn nữa. Người mang số chủ đạo này hay được tìm tới khi ai đó gặp chuyện, và bạn thường biết nói điều khiến người kia thấy được an ủi. Bạn dạy người khác bằng cách mình sống nhiều hơn bằng lời. Bài học của số 33 là giúp người mà không gánh luôn phần đời của họ.',
    strengths: [
      'Bạn có sức an ủi. Người đang buồn ngồi với bạn một lúc thường thấy nhẹ lòng hơn.',
      'Bạn kiên nhẫn khi dạy, như giảng lại một bài toán lần thứ ba cho em mà không bực.',
      'Bạn sống tử tế cả lúc không ai nhìn, và điều đó khiến người xung quanh tin bạn.',
    ],
    watchOut: [
      'Bạn dễ nhận phần trách nhiệm không phải của mình, rồi kiệt sức.',
      'Bạn có thể đặt chuẩn đạo đức rất cao cho bản thân và tự trách nặng nề khi lỡ sai.',
      'Đôi khi bạn quên rằng người khác cũng cần tự học từ sai lầm của họ.',
    ],
    advice: [
      'Mỗi khi muốn giúp, bạn hỏi người kia họ cần gì, thay vì làm theo điều bạn nghĩ là tốt cho họ.',
      'Viết ra ba việc bạn sẽ không nhận thêm trong tháng này, và giữ đúng như vậy.',
      'Tìm một nơi bạn được chăm sóc lại, như một người bạn để tâm sự hay một sở thích riêng.',
    ],
    fields: ['Giáo dục', 'Tư vấn tâm lý', 'Y tế, điều dưỡng', 'Công tác xã hội', 'Nghệ thuật cộng đồng'],
  },
};

/* ===================== NĂM CÁ NHÂN ===================== */

const personalYear = {
  1: {
    title: 'Năm gieo hạt',
    keywords: ['Bắt đầu', 'Chủ động', 'Mục tiêu mới'],
    summary:
      'Năm cá nhân số 1 mở đầu một vòng chín năm mới. Đây là lúc hợp để bắt tay vào những gì bạn đã ấp ủ, từ một khoá học tới một thói quen mới. Những gì bạn gieo trong năm nay có thể theo bạn vài năm tới, nên bạn chọn kỹ một chút. Bạn sẽ thấy mình có nhiều sức để tự quyết hơn mọi năm.',
    theme: 'Chủ đề của năm là tự khởi động. Bạn không cần đợi ai cho phép hay đợi mọi thứ hoàn hảo, chỉ cần bước bước đầu tiên.',
    doMore: [
      'Viết ra hai hoặc ba mục tiêu cho năm và dán ở chỗ bạn nhìn thấy hằng ngày.',
      'Đăng ký một việc mới mà bạn đã chần chừ lâu, như lớp học buổi tối hay một dự án riêng.',
      'Tập tự ra những quyết định nhỏ mà không hỏi quá nhiều người.',
    ],
    doLess: [
      'Bớt chờ tới lúc “thật sự sẵn sàng”, vì lúc đó hiếm khi tới.',
      'Bớt so điểm xuất phát của mình với người đã đi trước nhiều năm.',
    ],
    byQuarter: [
      'Ngồi xuống xem năm cũ đã dạy bạn điều gì, rồi chọn hướng đi chính cho năm nay.',
      'Bắt tay vào việc. Kết quả còn nhỏ cũng không sao, quan trọng là bạn đã bắt đầu.',
      'Rà lại tiến độ và bỏ bớt những thứ bạn nhận ra mình không thật sự muốn.',
      'Củng cố những gì đang chạy ổn để mang sang năm sau, một năm cần nhiều kiên nhẫn.',
    ],
  },

  2: {
    title: 'Năm vun gốc',
    keywords: ['Kiên nhẫn', 'Hợp tác', 'Kết nối'],
    summary:
      'Năm cá nhân số 2 chậm hơn năm trước, và đó là chuyện bình thường. Những hạt bạn gieo năm ngoái đang cần thời gian bén rễ. Năm nay hợp để làm việc cùng người khác, chăm các mối quan hệ và để ý tới chi tiết. Bạn có thể thấy mình nhạy cảm hơn thường lệ, nên hãy nhẹ tay với chính mình.',
    theme: 'Chủ đề của năm là kiên nhẫn và cộng tác. Nhiều việc sẽ đi xa hơn nếu bạn có người đồng hành.',
    doMore: [
      'Chủ động hẹn gặp những người bạn đã lâu không liên lạc.',
      'Nhận làm chung một việc với người có thế mạnh khác bạn.',
      'Để ý tới những chi tiết nhỏ trong công việc, vì năm nay chúng tạo ra khác biệt.',
    ],
    doLess: [
      'Bớt nóng ruột khi kết quả chưa tới ngay.',
      'Bớt nhận lời mọi thứ chỉ để giữ hoà khí.',
      'Bớt đọc quá nhiều ý nghĩa vào một tin nhắn hay một ánh mắt.',
    ],
    byQuarter: [
      'Xem lại những việc đã bắt đầu năm ngoái và chọn việc nào đáng chăm tiếp.',
      'Tìm người cùng làm, hỏi ý kiến và lắng nghe nhiều hơn nói.',
      'Chăm chút chi tiết, sửa những chỗ nhỏ mà trước đây bạn bỏ qua.',
      'Cảm ơn những người đã đồng hành với bạn trong năm.',
    ],
  },

  3: {
    title: 'Năm lên tiếng',
    keywords: ['Biểu đạt', 'Sáng tạo', 'Giao lưu'],
    summary:
      'Năm cá nhân số 3 mang không khí nhẹ và vui hơn. Đây là năm hợp để nói ra, viết ra và chia sẻ những gì bạn nghĩ. Bạn có thể được rủ đi chơi, đi sự kiện nhiều hơn và gặp thêm người mới. Điều cần giữ là đừng để niềm vui kéo bạn đi theo quá nhiều hướng cùng lúc.',
    theme: 'Chủ đề của năm là thể hiện bản thân. Ý tưởng của bạn cần được đưa ra ngoài thay vì nằm yên trong sổ.',
    doMore: [
      'Chia sẻ một sản phẩm của riêng bạn, như bài viết, bức ảnh hay một món đồ tự làm.',
      'Nhận lời những buổi gặp gỡ giúp bạn quen thêm người hay.',
      'Thử một hoạt động sáng tạo bạn chưa từng làm.',
    ],
    doLess: [
      'Bớt mở thêm dự án khi các dự án cũ còn dang dở.',
      'Bớt tiêu tiền theo hứng sau những buổi vui.',
      'Bớt nói những câu bạn biết mình sẽ hối hận khi đang bực.',
    ],
    byQuarter: [
      'Chọn một nơi để thể hiện mình, như một cuốn sổ, một trang cá nhân hay một nhóm cùng sở thích.',
      'Ra ngoài nhiều hơn và trò chuyện với những người mới quen.',
      'Gom ý tưởng lại và hoàn thành trọn vẹn ít nhất một việc.',
      'Nhìn lại những niềm vui của năm và chuẩn bị tinh thần cho một năm làm việc chăm chỉ.',
    ],
  },

  4: {
    title: 'Năm đặt gạch',
    keywords: ['Kỷ luật', 'Xây nền', 'Ổn định'],
    summary:
      'Năm cá nhân số 4 là năm của công việc thật. Bạn có thể thấy mình bận rộn hơn, phải sắp xếp lại giấy tờ, tiền bạc hay nếp sinh hoạt. Năm này không lấp lánh, nhưng những gì bạn xây bây giờ sẽ đỡ bạn trong nhiều năm sau. Bạn cứ đi chậm mà chắc là được.',
    theme: 'Chủ đề của năm là xây nền móng. Những thói quen tốt và kỹ năng bạn rèn trong năm nay là thứ đáng đầu tư nhất.',
    doMore: [
      'Lập một ngân sách đơn giản và theo nó suốt năm.',
      'Học sâu một kỹ năng giúp ích cho công việc chính của bạn.',
      'Dọn dẹp, sắp xếp lại nhà cửa và các giấy tờ quan trọng.',
    ],
    doLess: [
      'Bớt tìm đường tắt cho những việc cần thời gian.',
      'Bớt than mệt mà không đổi cách làm.',
      'Bớt bỏ bữa, bỏ giấc vì công việc.',
    ],
    byQuarter: [
      'Lập kế hoạch cụ thể cho năm, có mốc thời gian và con số rõ ràng.',
      'Bám theo kế hoạch, kể cả những ngày không có hứng.',
      'Giữ nhịp ngủ nghỉ đều đặn để không đuối sức vào giữa năm.',
      'Tổng kết những gì đã xây được và chuẩn bị cho một năm nhiều thay đổi.',
    ],
  },

  5: {
    title: 'Năm đổi gió',
    keywords: ['Thay đổi', 'Tự do', 'Trải nghiệm'],
    summary:
      'Năm cá nhân số 5 nằm giữa vòng chín năm và thường mang theo nhiều thay đổi. Bạn có thể muốn đi xa, đổi việc, đổi chỗ ở hay đơn giản là bỏ một thói quen cũ. Sau một năm làm việc chăm chỉ, đây là lúc bạn được nới lỏng một chút. Điều cần giữ là chọn thay đổi có chủ đích, đừng đổi chỉ vì chán.',
    theme: 'Chủ đề của năm là trải nghiệm. Bạn học được nhiều nhất khi bước ra khỏi chỗ quen thuộc.',
    doMore: [
      'Đi tới một nơi bạn chưa từng tới, dù chỉ là một thị trấn gần nhà.',
      'Thử một cách làm việc mới hoặc nhận một nhiệm vụ khác hẳn thường ngày.',
      'Gặp gỡ những người có lối sống khác bạn.',
    ],
    doLess: [
      'Bớt ra quyết định lớn chỉ trong một buổi tối.',
      'Bớt chi quá tay cho những trải nghiệm chóng qua.',
      'Bớt bỏ dở những cam kết đã hứa với người khác.',
    ],
    byQuarter: [
      'Liệt kê những thay đổi bạn muốn và xếp theo mức độ quan trọng.',
      'Thử một hai thay đổi nhỏ trước để xem mình hợp tới đâu.',
      'Đi xa, học thêm hoặc gặp gỡ người mới để mở rộng góc nhìn.',
      'Giữ lại những thay đổi tốt và chuẩn bị cho một năm hướng về gia đình.',
    ],
  },

  6: {
    title: 'Năm về nhà',
    keywords: ['Gia đình', 'Trách nhiệm', 'Chăm sóc'],
    summary:
      'Năm cá nhân số 6 kéo sự chú ý của bạn về nhà và về những người thân thiết. Bạn có thể phải lo nhiều hơn cho bố mẹ, con cái hay một người bạn đang cần giúp. Năm này cũng hợp để sửa sang chỗ ở hoặc vun lại một mối quan hệ quan trọng. Điều cần giữ là chăm cho người khác mà không bỏ quên bản thân.',
    theme: 'Chủ đề của năm là trách nhiệm và tình thương. Những việc nhỏ bạn làm cho người thân sẽ có ý nghĩa hơn bạn nghĩ.',
    doMore: [
      'Dành thời gian cố định cho gia đình mỗi tuần, như một bữa cơm chung.',
      'Sửa lại góc nhà bạn hay dùng nhất cho dễ chịu hơn.',
      'Nói lời cảm ơn và lời xin lỗi khi cần, đừng để dồn lại.',
    ],
    doLess: [
      'Bớt gánh việc của người khác chỉ vì ngại từ chối.',
      'Bớt đòi hỏi mọi thứ trong nhà phải hoàn hảo.',
      'Bớt ôm hết cảm xúc của người thân vào mình.',
    ],
    byQuarter: [
      'Xem lại các mối quan hệ quan trọng và chọn một mối quan hệ cần vun vén.',
      'Lo những việc nhà bị hoãn lâu, từ sửa chữa tới giấy tờ.',
      'Dành thời gian cho riêng mình để có sức chăm người khác.',
      'Sum họp với người thân và chuẩn bị cho một năm lắng lại để suy ngẫm.',
    ],
  },

  7: {
    title: 'Năm lắng lại',
    keywords: ['Suy ngẫm', 'Học hỏi', 'Nội tâm'],
    summary:
      'Năm cá nhân số 7 là một năm chậm và hướng vào bên trong. Bạn có thể muốn ở một mình nhiều hơn, đọc nhiều hơn và đặt câu hỏi về những gì mình đang làm. Đó không phải dấu hiệu bạn đi lùi, đó là lúc bạn hiểu mình sâu hơn. Những câu trả lời tìm được năm nay sẽ giúp bạn chọn hướng cho năm sau.',
    theme: 'Chủ đề của năm là học và hiểu. Năm này hợp để đi sâu vào một lĩnh vực, hoặc ngồi lại với chính mình.',
    doMore: [
      'Chọn một chủ đề và học sâu, như một khoá học dài hay vài cuốn sách cùng mảng.',
      'Dành thời gian đi bộ, viết nhật ký hoặc ngồi yên một lúc mỗi ngày.',
      'Xem lại lý do bạn chọn công việc, các mối quan hệ và nơi ở hiện tại.',
    ],
    doLess: [
      'Bớt ép mình phải có kết quả nhanh trong năm này.',
      'Bớt nhận lời những cuộc vui chỉ vì ngại từ chối.',
      'Bớt thu mình tới mức người thân phải lo lắng.',
    ],
    byQuarter: [
      'Viết ra những câu hỏi lớn bạn đang có về cuộc sống và công việc.',
      'Đọc, học và trò chuyện với người có kinh nghiệm để tìm câu trả lời.',
      'Dành vài ngày nghỉ để thật sự tách khỏi nhịp thường ngày.',
      'Ghi lại những điều bạn đã hiểu ra và chuẩn bị cho một năm bận rộn hơn.',
    ],
  },

  8: {
    title: 'Năm cầm lái',
    keywords: ['Sự nghiệp', 'Thành quả', 'Quản lý tiền bạc'],
    summary:
      'Năm cá nhân số 8 thường đưa công việc và tiền bạc lên hàng đầu. Những gì bạn chuẩn bị trong mấy năm qua có cơ hội được nhìn nhận, nếu bạn chủ động đưa nó ra. Bạn có thể được giao thêm trách nhiệm, hoặc muốn đòi hỏi nhiều hơn cho công sức của mình. Năm này hợp để quản lý tiền chặt hơn và mạnh dạn nói về giá trị của bạn.',
    theme: 'Chủ đề của năm là tin vào năng lực của mình. Bạn nên cầm lái những việc quan trọng thay vì đợi người khác giao.',
    doMore: [
      'Chuẩn bị số liệu về những gì bạn đã làm được để nói chuyện tăng lương hay xin dự án mới.',
      'Rà lại các khoản chi, khoản để dành và khoản nợ, rồi đặt kế hoạch rõ ràng.',
      'Nhận những trách nhiệm giúp bạn học cách quản lý.',
    ],
    doLess: [
      'Bớt chi tiêu để chứng tỏ với người khác.',
      'Bớt hy sinh giấc ngủ và bữa ăn cho công việc.',
      'Bớt cứng rắn quá mức với người làm cùng.',
    ],
    byQuarter: [
      'Đặt mục tiêu công việc và tài chính cụ thể, có con số.',
      'Chủ động đề xuất, xin cơ hội và nói về đóng góp của mình.',
      'Kiểm tra lại cách bạn dùng tiền và thời gian, vá những chỗ đang rò rỉ.',
      'Nhìn lại thành quả, cảm ơn những người đã giúp bạn và chuẩn bị khép lại một vòng.',
    ],
  },

  9: {
    title: 'Năm khép vòng',
    keywords: ['Hoàn tất', 'Buông bỏ', 'Bao dung'],
    summary:
      'Năm cá nhân số 9 là năm cuối của vòng chín năm. Đây là lúc dọn dẹp, làm nốt những việc còn dở và buông những gì không còn hợp với bạn. Bạn có thể thấy vài mối quan hệ hay công việc tự nhiên đi tới hồi kết. Khoảng trống đó là chỗ cho những điều mới khi năm số 1 tới.',
    theme: 'Chủ đề của năm là hoàn tất và buông. Việc nào đáng xong thì làm cho xong, việc nào đã hết thì để nó đi.',
    doMore: [
      'Làm nốt những việc dang dở, từ một khoá học tới một món nợ nhỏ với bạn bè.',
      'Dọn đồ đạc, dọn danh bạ và dọn lịch làm việc.',
      'Giúp người khác bằng những kinh nghiệm bạn đã có.',
    ],
    doLess: [
      'Bớt khởi động dự án lớn mới, nên để dành cho năm sau.',
      'Bớt níu giữ những gì đã rõ là không hợp.',
      'Bớt ôm giận với chuyện cũ.',
    ],
    byQuarter: [
      'Lập danh sách những việc còn dở và chọn ra việc cần làm xong trước.',
      'Dọn dẹp đồ đạc, giấy tờ và cả những thói quen không còn giúp gì cho bạn.',
      'Nói lời tạm biệt hay lời cảm ơn với những gì đã qua.',
      'Nghỉ ngơi, nhìn lại chín năm vừa rồi và nghĩ về điều bạn muốn gieo khi vòng mới bắt đầu.',
    ],
  },
};

/* ===================== SỐ SỨ MỆNH ===================== */

const expression = {
  1: {
    title: 'Người đứng ra nhận việc',
    keywords: ['Chủ động', 'Dẫn dắt', 'Độc lập'],
    summary:
      'Số sứ mệnh 1 cho thấy bạn thể hiện năng lực rõ nhất khi được đứng ra dẫn dắt. Trong nhóm, bạn hay là người đề xuất hướng đi và chịu trách nhiệm cho nó. Người khác nhớ tới bạn như một người quyết đoán, làm được việc mà không cần nhắc. Thử thách của bạn là biết lúc nào nên dẫn và lúc nào nên lùi lại cho người khác thử.',
    strengths: [
      'Bạn biến ý định thành hành động nhanh. Họp xong chưa lâu, bạn đã gửi bảng phân công cho cả nhóm.',
      'Bạn chịu được áp lực khi phải chọn một hướng đi mà chưa chắc chắn.',
      'Bạn tự học tốt và không ngại một mình mày mò công cụ mới.',
    ],
    watchOut: [
      'Bạn có thể thấy khó làm việc dưới quyền một người chậm hơn mình.',
      'Bạn hay quên khen người khác vì mải nhìn sang việc tiếp theo.',
    ],
    advice: [
      'Ở dự án tới, bạn giao một phần việc dẫn dắt cho người khác và đóng vai hỗ trợ.',
      'Cuối mỗi tuần, bạn gửi một lời ghi nhận cụ thể tới một người trong nhóm.',
    ],
    fields: ['Quản lý, trưởng nhóm', 'Khởi nghiệp', 'Bán hàng', 'Nghề tự do', 'Quản lý sản phẩm'],
  },

  2: {
    title: 'Người nối người',
    keywords: ['Hợp tác', 'Khéo léo', 'Chu đáo'],
    summary:
      'Số sứ mệnh 2 cho thấy bạn phát huy năng lực tốt nhất khi làm cùng người khác. Bạn có tài làm cầu nối, giúp hai bên hiểu nhau và đi tới một thoả thuận. Bạn để ý tới những điều người khác bỏ sót, như ai đang bị lép vế trong cuộc họp. Thử thách của bạn là dám nhận phần ghi nhận xứng với đóng góp của mình.',
    strengths: [
      'Bạn trao đổi mềm mà chắc. Gặp khách khó tính, bạn giữ được không khí mà vẫn bảo vệ được quyền lợi của bên mình.',
      'Bạn làm việc nhóm tốt và giúp người mới hoà nhập nhanh.',
      'Bạn cẩn thận với chi tiết, từ con số trong báo cáo tới câu chữ trong email.',
    ],
    watchOut: [
      'Bạn hay đứng ở hậu trường nên công sức dễ bị người khác nhận phần.',
      'Bạn có thể né những cuộc tranh luận cần thiết, để chuyện nhỏ thành chuyện lớn.',
    ],
    advice: [
      'Ghi lại những gì bạn đã đóng góp trong tháng, để khi cần bạn có thể nói ra rõ ràng.',
      'Khi thấy một vấn đề trong nhóm, bạn nêu nó sớm bằng giọng nhẹ nhàng thay vì đợi nó tự hết.',
    ],
    fields: ['Nhân sự', 'Chăm sóc khách hàng', 'Trợ lý điều hành', 'Hoà giải, tư vấn', 'Quan hệ đối tác'],
  },

  3: {
    title: 'Người làm chữ và làm vui',
    keywords: ['Diễn đạt', 'Sáng tạo', 'Truyền cảm hứng'],
    summary:
      'Số sứ mệnh 3 cho thấy năng lực của bạn lộ ra rõ nhất qua lời nói, chữ viết hoặc hình ảnh. Bạn biết cách trình bày một ý tưởng sao cho người nghe thấy hứng thú. Khi bạn làm điều mình thích, người xung quanh cũng có thêm năng lượng. Thử thách của bạn là giữ tập trung đủ lâu để biến tài năng thành sản phẩm.',
    strengths: [
      'Bạn thuyết trình tốt, biết mở đầu bằng một câu chuyện để kéo người nghe vào.',
      'Bạn có nhiều ý tưởng mới cho những việc tưởng đã nhàm, như một cách giới thiệu sản phẩm khác hẳn mọi khi.',
      'Bạn dễ kết thân và giữ được không khí vui vẻ trong nhóm.',
    ],
    watchOut: [
      'Bạn dễ ôm nhiều dự án sáng tạo cùng lúc rồi bỏ dở.',
      'Bạn có thể nhạy cảm với lời chê về sản phẩm của mình hơn mức cần.',
    ],
    advice: [
      'Chọn một sản phẩm và đưa nó tới tay người dùng, dù nó chưa hoàn hảo.',
      'Khi nhận góp ý, bạn tách riêng ý tưởng của mình với con người mình để nghe cho khách quan.',
    ],
    fields: ['Truyền thông, quảng cáo', 'Viết, biên tập', 'Thiết kế', 'Giảng dạy', 'Nghệ thuật biểu diễn'],
  },

  4: {
    title: 'Người làm cho chắc',
    keywords: ['Tổ chức', 'Tỉ mỉ', 'Bền bỉ'],
    summary:
      'Số sứ mệnh 4 cho thấy bạn đóng góp tốt nhất qua sự chắc chắn và có hệ thống. Bạn là người dựng quy trình, làm bảng theo dõi và giữ cho mọi thứ không bị sót. Khi bạn đã nhận việc, người khác ít phải lo. Thử thách của bạn là đón nhận ý tưởng mới mà không vội gạt đi chỉ vì nó chưa có tiền lệ.',
    strengths: [
      'Bạn biến việc lộn xộn thành quy trình rõ ràng, như sắp lại cả thư mục tài liệu chung của nhóm.',
      'Bạn giữ chất lượng đều tay, ngày bận hay ngày rảnh đều làm kỹ như nhau.',
      'Bạn có sức bền với những việc dài hơi và lặp lại.',
    ],
    watchOut: [
      'Bạn có thể cẩn thận tới mức chậm trễ, trong khi tình huống cần quyết nhanh.',
      'Bạn đôi khi bám quy trình cũ dù nó không còn hợp.',
    ],
    advice: [
      'Mỗi quý, bạn chọn một quy trình đang dùng và tự hỏi nếu làm lại từ đầu, mình có thiết kế nó như thế này không.',
      'Thử đặt cho mình một hạn chót ngắn với một việc nhỏ để luyện cách quyết nhanh.',
    ],
    fields: ['Kế toán, kiểm toán', 'Kỹ thuật', 'Quản lý vận hành', 'Phát triển phần mềm', 'Hành chính, pháp chế'],
  },

  5: {
    title: 'Người xoay xở giỏi',
    keywords: ['Linh hoạt', 'Đa năng', 'Thuyết phục'],
    summary:
      'Số sứ mệnh 5 cho thấy bạn thể hiện năng lực tốt nhất ở những nơi có nhiều thay đổi. Bạn học cái mới nhanh, ứng biến tốt và nói chuyện được với nhiều kiểu người. Một công việc đứng yên một chỗ dễ khiến bạn héo dần. Thử thách của bạn là chọn ra vài thế mạnh để đi sâu, thay vì biết một chút về mọi thứ.',
    strengths: [
      'Bạn ứng biến tốt khi kế hoạch đổ vỡ, như sự kiện bị mất điện mà bạn vẫn xoay được chương trình.',
      'Bạn có sức thuyết phục tự nhiên, nhất là khi nói về điều mình thật sự thích.',
      'Bạn kết nối được người ở nhiều lĩnh vực khác nhau.',
    ],
    watchOut: [
      'Bạn dễ chán khi việc bước vào giai đoạn lặp lại và bắt đầu nhìn sang việc khác.',
      'Bạn có thể hứa nhiều hơn khả năng làm vì quá hào hứng lúc đầu.',
    ],
    advice: [
      'Chọn hai kỹ năng cốt lõi và đầu tư cho chúng trong một năm.',
      'Trước khi nhận việc mới, bạn mở lịch ra xem mình còn chỗ trống thật không.',
    ],
    fields: ['Bán hàng, kinh doanh', 'Du lịch, sự kiện', 'Báo chí', 'Marketing', 'Tư vấn độc lập'],
  },

  6: {
    title: 'Người chăm cho nơi mình ở',
    keywords: ['Trách nhiệm', 'Tận tâm', 'Thẩm mỹ'],
    summary:
      'Số sứ mệnh 6 cho thấy bạn đóng góp tốt nhất khi được chăm lo cho người khác hoặc làm đẹp cho một không gian. Bạn nghĩ tới cảm giác của người dùng, người học hay người được phục vụ. Người ta tin bạn vì bạn coi việc của họ như việc của mình. Thử thách của bạn là đặt giới hạn để sự tận tâm không biến thành kiệt sức.',
    strengths: [
      'Bạn để ý tới trải nghiệm của người khác, như khách có thấy dễ chịu khi bước vào cửa hàng hay không.',
      'Bạn giữ lời, nên hay được giao những việc quan trọng.',
      'Bạn có gu thẩm mỹ hài hoà trong cách sắp xếp và trình bày.',
    ],
    watchOut: [
      'Bạn hay nhận thêm việc của đồng nghiệp vì thương họ bận.',
      'Bạn dễ phật lòng khi sự chăm chút của mình không được ai nhắc tới.',
    ],
    advice: [
      'Đặt một giờ kết thúc công việc mỗi ngày và giữ đúng ít nhất bốn ngày trong tuần.',
      'Khi muốn được ghi nhận, bạn nói ra nhẹ nhàng thay vì chờ người khác tự thấy.',
    ],
    fields: ['Giáo dục', 'Y tế, điều dưỡng', 'Thiết kế nội thất, thời trang', 'Nhà hàng, khách sạn', 'Công tác xã hội'],
  },

  7: {
    title: 'Người đào sâu',
    keywords: ['Phân tích', 'Chuyên môn', 'Tư duy độc lập'],
    summary:
      'Số sứ mệnh 7 cho thấy năng lực của bạn lộ rõ nhất khi được đi sâu vào một vấn đề. Bạn thích tìm hiểu bản chất, hỏi vì sao cho tới khi thật hiểu. Người khác hay tìm tới bạn với những câu hỏi khó. Thử thách của bạn là chia sẻ hiểu biết của mình ra ngoài thay vì giữ nó trong đầu.',
    strengths: [
      'Bạn phân tích kỹ và hiếm khi kết luận vội, nên lời bạn nói có trọng lượng.',
      'Bạn làm việc độc lập tốt trong những dự án cần tập trung lâu.',
      'Bạn phát hiện ra lỗi mà người khác bỏ qua, như một con số bị lệch trong bảng tính.',
    ],
    watchOut: [
      'Bạn có thể thấy khó giải thích ý mình cho người không cùng chuyên môn.',
      'Bạn dễ trì hoãn việc công bố kết quả vì muốn chắc thêm chút nữa.',
    ],
    advice: [
      'Tập giải thích công việc của bạn cho một người ngoài ngành trong ba câu.',
      'Đặt hạn chót cho phần tìm hiểu và gửi bản nháp sớm để nhận góp ý.',
    ],
    fields: ['Nghiên cứu', 'Phân tích dữ liệu', 'Kỹ thuật phần mềm', 'Y học, dược học', 'Biên tập chuyên môn'],
  },

  8: {
    title: 'Người điều hành',
    keywords: ['Quản lý', 'Kết quả', 'Tầm vóc'],
    summary:
      'Số sứ mệnh 8 cho thấy bạn thể hiện năng lực rõ nhất khi được quản lý nguồn lực, con người hay tiền bạc. Bạn nhìn ra cách một việc có thể lớn lên và biết sắp xếp để nó chạy. Người khác thấy ở bạn sự tự tin của một người cầm trịch. Thử thách của bạn là giữ được sự công bằng và tình người khi nắm quyền.',
    strengths: [
      'Bạn đặt mục tiêu rõ ràng và theo dõi tiến độ bằng con số cụ thể.',
      'Bạn đứng vững trước áp lực, kể cả khi phải nói “không” với một khách hàng lớn.',
      'Bạn biết định giá đúng sản phẩm và công sức, không bán rẻ mình.',
    ],
    watchOut: [
      'Bạn có thể đặt hiệu quả lên trên cảm xúc của người làm cùng.',
      'Bạn dễ gắn giá trị bản thân với chức danh và thu nhập.',
    ],
    advice: [
      'Với mỗi quyết định lớn, bạn hỏi thêm một câu: quyết định này ảnh hưởng thế nào tới người trong nhóm.',
      'Dành thời gian kèm một người trẻ hơn. Bạn sẽ thấy sức ảnh hưởng của mình theo một cách khác.',
    ],
    fields: ['Quản trị kinh doanh', 'Tài chính, ngân hàng', 'Bất động sản', 'Luật', 'Điều hành dự án'],
  },

  9: {
    title: 'Người làm vì nhiều người',
    keywords: ['Nhân văn', 'Nhìn xa', 'Cống hiến'],
    summary:
      'Số sứ mệnh 9 cho thấy bạn phát huy năng lực tốt nhất khi công việc có ích cho nhiều người. Bạn nhìn vấn đề rộng và dễ đồng cảm với những hoàn cảnh khác mình. Người ta thấy ở bạn một người tử tế và có lý tưởng. Thử thách của bạn là biến lý tưởng thành việc làm cụ thể, có điểm kết thúc rõ ràng.',
    strengths: [
      'Bạn nói được ý nghĩa của công việc, giúp người khác thấy mình đang góp vào điều gì.',
      'Bạn làm việc tốt với người đến từ nhiều vùng miền và hoàn cảnh.',
      'Bạn có cảm xúc tinh tế, hợp với những công việc chạm tới lòng người.',
    ],
    watchOut: [
      'Bạn dễ ôm những mục tiêu quá lớn rồi thấy mình nhỏ bé.',
      'Bạn có thể bỏ qua chuyện tiền bạc và chi phí khi làm một việc mình tin là tốt.',
    ],
    advice: [
      'Với mỗi lý tưởng, bạn viết ra một việc nhỏ làm được ngay trong tháng này.',
      'Khi tham gia dự án cộng đồng, bạn hỏi rõ ngân sách và vai trò để không gánh quá sức.',
    ],
    fields: ['Phi lợi nhuận, phát triển cộng đồng', 'Giáo dục', 'Nghệ thuật', 'Y tế cộng đồng', 'Quan hệ quốc tế'],
  },

  11: {
    title: 'Người truyền cảm hứng',
    keywords: ['Cảm hứng', 'Trực giác', 'Nhìn trước'],
    summary:
      'Số sứ mệnh 11 cho thấy bạn đóng góp mạnh nhất qua ý tưởng và khả năng khiến người khác tin vào nó. Bạn hay thấy một hướng đi trước khi mọi người kịp nhận ra. Khi bạn nói về điều mình tin, người nghe thường bị cuốn theo. Thử thách của bạn là đặt chân xuống đất, ghép cảm hứng với một kế hoạch rõ ràng.',
    strengths: [
      'Bạn nắm bắt xu hướng sớm, như nhận ra một thói quen mới của khách hàng trước khi số liệu kịp cho thấy.',
      'Bạn nói chuyện chạm tới cảm xúc, hợp với những vai trò cần thuyết phục hay động viên người khác.',
      'Bạn nhạy với nhu cầu tinh thần của những người làm cùng.',
    ],
    watchOut: [
      'Bạn dễ căng thẳng khi phải xử lý quá nhiều việc vụn vặt.',
      'Bạn có thể bị cuốn vào ý tưởng mà quên kiểm tra xem nó có làm được không.',
    ],
    advice: [
      'Bắt cặp với một người giỏi thực thi để biến ý tưởng của bạn thành sản phẩm.',
      'Trước khi trình bày một ý tưởng, bạn chuẩn bị sẵn ba bước làm đầu tiên.',
    ],
    fields: ['Diễn giả, đào tạo', 'Sáng tạo nội dung', 'Tư vấn', 'Nghệ thuật', 'Hoạt động xã hội'],
  },

  22: {
    title: 'Người dựng hệ thống',
    keywords: ['Nhìn xa', 'Thực thi', 'Tổ chức'],
    summary:
      'Số sứ mệnh 22, viết là 22/4, cho thấy bạn có thể đóng góp ở quy mô lớn, nơi cần cả tầm nhìn lẫn sự tỉ mỉ. Bạn hình dung được cả một hệ thống và biết từng viên gạch cần đặt ở đâu. Người khác tin tưởng giao cho bạn những việc phức tạp. Thử thách của bạn là chấp nhận tiến độ thực tế và không đòi mọi thứ phải hoàn hảo ngay.',
    strengths: [
      'Bạn thiết kế được quy trình cho cả tổ chức, không chỉ cho riêng mình.',
      'Bạn bền bỉ với những dự án kéo dài nhiều năm.',
      'Bạn ghép được người có ý tưởng với người làm thực tế.',
    ],
    watchOut: [
      'Bạn có thể tự tạo áp lực quá lớn vì muốn làm việc to tát.',
      'Bạn dễ ôm hết phần quan trọng vì sợ người khác làm không đúng.',
    ],
    advice: [
      'Viết tài liệu hướng dẫn cho những việc bạn đang làm, để người khác có thể tiếp nhận.',
      'Chia dự án thành từng giai đoạn và cho phép mỗi giai đoạn có vài sai sót nhỏ.',
    ],
    fields: ['Kiến trúc, quy hoạch', 'Kỹ thuật hệ thống', 'Quản lý chương trình lớn', 'Khởi nghiệp công nghệ', 'Hành chính công'],
  },

  33: {
    title: 'Người dẫn dắt bằng tấm gương',
    keywords: ['Tận tuỵ', 'Dạy dỗ', 'Nâng đỡ'],
    summary:
      'Số sứ mệnh 33, viết là 33/6, cho thấy bạn thể hiện năng lực rõ nhất khi nâng đỡ người khác lớn lên. Bạn có thể là người thầy, người hướng dẫn hay người quản lý mà ai cũng muốn làm cùng. Sự tận tuỵ của bạn khiến người khác muốn cố gắng hơn. Thử thách của bạn là chăm cho người khác mà vẫn giữ được sức cho mình.',
    strengths: [
      'Bạn kèm người mới rất có tâm, biết khen đúng lúc và sửa đúng chỗ.',
      'Bạn tạo ra một môi trường an toàn để người khác dám hỏi và dám sai.',
      'Bạn sống theo những giá trị rõ ràng, nên lời khuyên của bạn có trọng lượng.',
    ],
    watchOut: [
      'Bạn dễ nhận giúp quá nhiều người cùng một lúc.',
      'Bạn có thể thấy có lỗi mỗi khi đặt nhu cầu của mình lên trước.',
    ],
    advice: [
      'Giới hạn số người bạn trực tiếp hướng dẫn, và chọn những người phù hợp nhất.',
      'Lên lịch nghỉ ngơi giống như lên lịch họp, và giữ nó như một lời hẹn.',
    ],
    fields: ['Giáo dục, đào tạo', 'Tư vấn tâm lý', 'Y tế', 'Quản lý con người', 'Công tác xã hội'],
  },
};

/* ===================== SỐ LINH HỒN ===================== */

const soul = {
  1: {
    title: 'Muốn tự cầm lái',
    keywords: ['Tự chủ', 'Được là mình', 'Khẳng định'],
    summary:
      'Số linh hồn 1 cho thấy sâu bên trong, bạn mong được làm chủ cuộc đời mình. Bạn thấy ngột ngạt khi người khác quyết định thay, dù họ có ý tốt. Cảm giác tự tay làm nên một điều gì đó mang lại cho bạn niềm vui rất lớn. Bạn có thể không nói ra, nhưng bạn muốn được nhìn nhận là một người có bản lĩnh riêng.',
    strengths: [
      'Bạn có động lực tự thân, không cần ai thúc vẫn muốn tiến lên.',
      'Bạn biết mình muốn gì và ít bị đám đông kéo đi.',
      'Bạn đủ can đảm để chọn con đường khác với gia đình hay bạn bè nếu thấy cần.',
    ],
    watchOut: [
      'Bạn có thể ngại nhờ giúp vì sợ bị xem là yếu.',
      'Khi không được tự quyết, bạn dễ bực bội ngầm mà không nói ra.',
    ],
    advice: [
      'Tìm một góc trong cuộc sống mà bạn hoàn toàn tự quyết, như một dự án riêng hay một sở thích.',
      'Trong tuần này, bạn tập nói câu “mình cần giúp một chút” với một người tin cậy.',
    ],
  },

  2: {
    title: 'Muốn được ở bên',
    keywords: ['Gắn bó', 'Bình yên', 'Được thấu hiểu'],
    summary:
      'Số linh hồn 2 cho thấy điều bạn mong nhất là sự gắn bó và hoà thuận. Bạn thấy bình yên khi có một người để kể chuyện trong ngày, dù chỉ là vài tin nhắn trước khi ngủ. Những cuộc cãi vã, kể cả không liên quan tới bạn, cũng làm bạn bất an. Sâu trong lòng, bạn muốn được hiểu mà không phải giải thích quá nhiều.',
    strengths: [
      'Bạn quý các mối quan hệ và giữ liên lạc với người thân rất đều đặn.',
      'Bạn cảm được nhu cầu của người khác, nên là một người bạn, người thương chu đáo.',
      'Bạn tìm được niềm vui trong những điều nhỏ, như một bữa cơm có đủ mặt cả nhà.',
    ],
    watchOut: [
      'Bạn có thể gác mong muốn của mình lại để giữ hoà khí.',
      'Bạn dễ thấy trống trải khi phải ở một mình lâu.',
    ],
    advice: [
      'Viết ra ba điều bạn muốn cho riêng mình, không liên quan tới ai khác.',
      'Tập ở một mình một buổi mà vẫn thấy dễ chịu, như đi uống cà phê hay xem phim một mình.',
    ],
  },

  3: {
    title: 'Muốn được vui và được nói',
    keywords: ['Niềm vui', 'Tự do biểu đạt', 'Được lắng nghe'],
    summary:
      'Số linh hồn 3 cho thấy bên trong bạn là mong muốn được sống vui và được nói ra điều mình nghĩ. Bạn thấy mình sống động nhất khi được sáng tạo, kể chuyện hay làm người khác bật cười. Một cuộc sống quá nghiêm túc, chỉ có việc và việc, làm bạn héo đi. Bạn mong có người lắng nghe cả những ý tưởng nhỏ nhặt của mình mà không phán xét.',
    strengths: [
      'Bạn biết tìm niềm vui ngay trong những ngày bình thường.',
      'Bạn giàu trí tưởng tượng và thích làm ra những thứ mới.',
      'Bạn lạc quan, giúp người xung quanh nhẹ lòng hơn.',
    ],
    watchOut: [
      'Bạn có thể né những cảm xúc nặng nề bằng cách lúc nào cũng tỏ ra vui vẻ.',
      'Bạn dễ buồn khi ý tưởng của mình bị gạt đi.',
    ],
    advice: [
      'Dành chỗ cho một hoạt động sáng tạo mỗi tuần, như vẽ, hát hay viết.',
      'Khi buồn, bạn thử nói thật với một người bạn thay vì đùa cho qua.',
    ],
  },

  4: {
    title: 'Muốn có chỗ dựa vững',
    keywords: ['Ổn định', 'An toàn', 'Rõ ràng'],
    summary:
      'Số linh hồn 4 cho thấy bạn mong một cuộc sống ổn định và có trật tự. Bạn thấy yên tâm khi biết tháng sau đủ tiền tiêu, nhà cửa gọn gàng và kế hoạch rõ ràng. Những thay đổi đột ngột làm bạn mất ngủ hơn người khác. Sâu bên trong, bạn muốn xây một nền nhà vững cho mình và người thân.',
    strengths: [
      'Bạn biết giữ gìn những gì mình có, từ đồ đạc tới các mối quan hệ lâu năm.',
      'Bạn có kế hoạch cho tương lai, kể cả những khoản để dành nhỏ.',
      'Bạn trung thực và muốn mọi thứ minh bạch.',
    ],
    watchOut: [
      'Bạn có thể bỏ qua cơ hội tốt vì nó đi kèm rủi ro.',
      'Bạn dễ lo xa, lo cả những chuyện chưa chắc sẽ xảy ra.',
    ],
    advice: [
      'Lập một khoản dự phòng nhỏ để bạn thấy an toàn mà vẫn dám thử điều mới.',
      'Mỗi khi lo lắng, bạn viết ra điều tệ nhất có thể xảy ra và cách mình sẽ xử lý. Nỗi lo sẽ có hình dạng rõ hơn và bớt đáng sợ.',
    ],
  },

  5: {
    title: 'Muốn được tự do',
    keywords: ['Tự do', 'Trải nghiệm', 'Không bị gò bó'],
    summary:
      'Số linh hồn 5 cho thấy điều bạn khao khát nhất là tự do. Bạn muốn được đi đây đi đó và tự chọn cách sống của mình, không bị trói vào một khuôn khổ cố định. Một lịch trình kín mít từ sáng tới tối có thể làm bạn thấy ngộp. Bên trong bạn luôn có một phần muốn biết bên kia ngọn đồi có gì.',
    strengths: [
      'Bạn cởi mở với cái mới và không ngại thay đổi.',
      'Bạn biến những chuyến đi ngắn thành kỷ niệm đáng nhớ.',
      'Bạn hiểu và tôn trọng nhiều lối sống khác nhau.',
    ],
    watchOut: [
      'Bạn có thể ngại cam kết lâu dài vì sợ mất tự do.',
      'Bạn dễ tìm tới cảm giác mới để khỏi phải đối diện với cảm giác chán.',
    ],
    advice: [
      'Tìm tự do ngay trong khuôn khổ, như xin cách làm việc linh hoạt thay vì bỏ hẳn công việc.',
      'Khi thấy muốn bỏ đi, bạn tự hỏi mình đang tránh điều gì.',
    ],
  },

  6: {
    title: 'Muốn một mái nhà ấm',
    keywords: ['Yêu thương', 'Gia đình', 'Được cần đến'],
    summary:
      'Số linh hồn 6 cho thấy bạn mong có một mái nhà ấm áp và những người thân yêu ở quanh mình. Bạn thấy hạnh phúc khi được chăm sóc người khác và được họ cần đến. Một bữa cơm đông đủ có thể làm bạn vui hơn cả một món quà đắt tiền. Sâu bên trong, bạn muốn những người mình thương đều được bình an.',
    strengths: [
      'Bạn yêu thương thật lòng và thể hiện bằng việc làm cụ thể.',
      'Bạn khiến người khác thấy mình thuộc về một nơi nào đó.',
      'Bạn có tinh thần trách nhiệm cao với gia đình.',
    ],
    watchOut: [
      'Bạn có thể để niềm vui của mình phụ thuộc vào việc người khác có ổn không.',
      'Bạn dễ thấy có lỗi khi dành thời gian cho riêng mình.',
    ],
    advice: [
      'Nhắc mình rằng chăm cho bản thân cũng là một cách chăm cho gia đình.',
      'Tập để người thân tự giải quyết chuyện của họ, và chỉ giúp khi được nhờ.',
    ],
  },

  7: {
    title: 'Muốn hiểu cho tận cùng',
    keywords: ['Hiểu biết', 'Yên tĩnh', 'Sự thật'],
    summary:
      'Số linh hồn 7 cho thấy bên trong bạn là mong muốn được hiểu thấu mọi chuyện, kể cả chính mình. Bạn cần những khoảng lặng để nghĩ, và một ngày không có phút nào yên tĩnh làm bạn rất mệt. Bạn coi trọng sự thật hơn những lời nói cho dễ nghe. Bạn mong có vài người thật sự hiểu mình, hơn là có thật nhiều người quen.',
    strengths: [
      'Bạn có đời sống bên trong phong phú và biết tự làm mình vui.',
      'Bạn tìm ý nghĩa sâu xa thay vì dừng ở bề ngoài.',
      'Bạn trung thực với cảm nhận của mình.',
    ],
    watchOut: [
      'Bạn có thể tự thu mình lại mỗi khi gặp chuyện buồn.',
      'Bạn dễ nghi ngờ lòng tốt của người khác.',
    ],
    advice: [
      'Giữ một góc riêng trong nhà, dù nhỏ, để bạn có chỗ yên tĩnh.',
      'Mỗi tuần, chia sẻ điều mình đang nghĩ với một người bạn tin ít nhất một lần.',
    ],
  },

  8: {
    title: 'Muốn làm nên chuyện',
    keywords: ['Thành tựu', 'Tự chủ tài chính', 'Được tôn trọng'],
    summary:
      'Số linh hồn 8 cho thấy sâu bên trong, bạn mong đạt được thành tựu và được người khác tôn trọng. Bạn muốn tự đứng vững về tiền bạc, không phải trông vào ai. Nhìn thấy kết quả cụ thể từ công sức của mình khiến bạn thấy thoả mãn. Bạn có thể không nói ra, nhưng bạn muốn chứng minh rằng mình làm được.',
    strengths: [
      'Bạn có động lực mạnh để vượt qua khó khăn.',
      'Bạn hiểu giá trị của đồng tiền và của công sức.',
      'Bạn muốn xây một điều gì đó bền vững cho bản thân và gia đình.',
    ],
    watchOut: [
      'Bạn có thể thấy bất an mỗi khi thu nhập chững lại.',
      'Bạn dễ so sánh mình với những người đi nhanh hơn.',
    ],
    advice: [
      'Viết ra định nghĩa thành công theo cách riêng của bạn, không mượn của ai.',
      'Ghi lại những thành tựu nhỏ mỗi tháng, đừng đợi tới thành tựu lớn mới cho phép mình vui.',
    ],
  },

  9: {
    title: 'Muốn đời có ý nghĩa',
    keywords: ['Ý nghĩa', 'Cho đi', 'Lòng trắc ẩn'],
    summary:
      'Số linh hồn 9 cho thấy điều bạn mong nhất là sống một cuộc đời có ý nghĩa với người khác. Bạn thấy trống trải nếu chỉ làm việc để kiếm tiền mà không thấy mình giúp được ai. Bạn dễ rung động trước nỗi khổ của cả những người không quen. Sâu bên trong, bạn muốn để lại một điều tốt đẹp sau mình.',
    strengths: [
      'Bạn có lòng trắc ẩn và luôn sẵn lòng giúp đỡ.',
      'Bạn biết tha thứ và không giữ thù lâu.',
      'Bạn nhìn cuộc sống bằng con mắt rộng lượng.',
    ],
    watchOut: [
      'Bạn có thể cho đi tới mức quên mất nhu cầu của mình.',
      'Bạn dễ thất vọng khi thế giới không như bạn mong.',
    ],
    advice: [
      'Tìm một cách giúp người vừa với sức mình và làm đều đặn.',
      'Cho phép mình nhận lại, dù là một lời cảm ơn hay một sự giúp đỡ.',
    ],
  },

  11: {
    title: 'Muốn chạm tới điều sâu xa',
    keywords: ['Trực giác', 'Đời sống tinh thần', 'Cảm hứng'],
    summary:
      'Số linh hồn 11 cho thấy bên trong bạn có nhu cầu tìm kiếm ý nghĩa tinh thần sâu sắc. Bạn nhạy cảm với cái đẹp, với âm nhạc hay một khoảnh khắc lặng yên. Bạn mong cuộc sống của mình truyền được điều gì đó tốt đẹp cho người khác. Đôi khi chính sự nhạy cảm ấy khiến bạn thấy mệt giữa những nơi ồn ào.',
    strengths: [
      'Bạn có trực giác mạnh về con người và tình huống.',
      'Bạn dễ thấy được cái đẹp và ý nghĩa trong những điều bình thường.',
      'Bạn truyền cảm hứng cho người khác chỉ bằng cách sống thật với mình.',
    ],
    watchOut: [
      'Bạn dễ quá tải cảm xúc khi ở trong môi trường căng thẳng.',
      'Bạn có thể đặt kỳ vọng rất cao cho bản thân.',
    ],
    advice: [
      'Tìm một hoạt động giúp bạn tĩnh lại, như ngồi yên mười phút mỗi sáng hay đi dạo trong công viên.',
      'Viết hoặc vẽ ra những gì bạn cảm nhận, để nó có chỗ đi thay vì dồn lại trong lòng.',
    ],
  },

  22: {
    title: 'Muốn để lại điều lâu bền',
    keywords: ['Để lại dấu ấn', 'Xây dựng', 'Có ích thật'],
    summary:
      'Số linh hồn 22, viết là 22/4, cho thấy bạn mong tạo ra điều gì đó lâu bền và có ích cho nhiều người. Bạn không thoả mãn với những thành công lẻ tẻ mà muốn thấy công sức của mình góp vào một thứ lớn hơn. Bạn cần sự ổn định để xây, nhưng điều bạn nhắm tới rộng hơn bốn bức tường nhà mình. Áp lực tự đặt ra có lúc khiến bạn khó thả lỏng.',
    strengths: [
      'Bạn có lý tưởng lớn mà vẫn thực tế.',
      'Bạn kiên trì với những gì mình tin là đáng làm.',
      'Bạn muốn công việc của mình giúp được cộng đồng.',
    ],
    watchOut: [
      'Bạn dễ thấy những gì mình đang làm là chưa đủ.',
      'Bạn có thể quên tận hưởng hiện tại vì mải nhìn về tương lai.',
    ],
    advice: [
      'Viết ra điều bạn muốn để lại sau mười năm, rồi chọn một bước làm được ngay trong năm nay.',
      'Dành thời gian tận hưởng những thành quả nhỏ trước khi lao vào việc tiếp theo.',
    ],
  },

  33: {
    title: 'Muốn thương người trọn vẹn',
    keywords: ['Lòng trắc ẩn', 'Che chở', 'Phụng sự'],
    summary:
      'Số linh hồn 33, viết là 33/6, cho thấy sâu bên trong, bạn mong được yêu thương và che chở cho người khác một cách trọn vẹn. Bạn thấy đời mình có ý nghĩa khi giúp được ai đó vượt qua khó khăn. Nỗi buồn của người khác chạm tới bạn rất nhanh. Bạn cần học cách giữ lại một phần sức cho chính mình.',
    strengths: [
      'Bạn có lòng trắc ẩn sâu và chân thành.',
      'Bạn khiến người khác thấy an toàn khi ở cạnh.',
      'Bạn sẵn lòng hy sinh cho điều mình tin là đúng.',
    ],
    watchOut: [
      'Bạn dễ mang nỗi buồn của người khác về nhà.',
      'Bạn có thể quên rằng mình cũng xứng đáng được chăm sóc.',
    ],
    advice: [
      'Tạo một thói quen nhỏ để trút bỏ cảm xúc sau một ngày dài, như tắm nước ấm hay viết nhật ký.',
      'Khi giúp người, bạn nhắc mình rằng bạn đi cùng họ chứ không gánh thay họ.',
    ],
  },
};

/* ===================== SỐ NHÂN CÁCH ===================== */

const personality = {
  1: {
    title: 'Dáng vẻ tự tin',
    keywords: ['Tự tin', 'Thẳng thắn', 'Có chính kiến'],
    summary:
      'Số nhân cách 1 cho thấy người khác thường thấy bạn là người tự tin và có chính kiến. Lần đầu gặp, bạn để lại ấn tượng của một người biết mình muốn gì. Trong buổi phỏng vấn, bạn trả lời dứt khoát và ít vòng vo. Có người thấy bạn hơi khó gần lúc đầu, cho tới khi họ hiểu bạn hơn.',
    strengths: [
      'Bạn để lại ấn tượng rõ, dễ được nhớ tên sau lần đầu gặp.',
      'Bạn trông đáng tin khi đứng ở vai trò dẫn dắt.',
      'Bạn nói rõ ý mình, người khác không phải đoán.',
    ],
    watchOut: [
      'Bạn có thể bị hiểu là kiêu hoặc lạnh lùng khi chưa kịp cười.',
      'Sự thẳng thắn của bạn đôi khi làm người nhạy cảm bị tổn thương.',
    ],
    advice: [
      'Khi gặp người mới, bạn hỏi họ một câu về chính họ trước khi nói về mình.',
      'Thêm một câu mềm vào những góp ý thẳng, như “mình nghĩ thế này, bạn thấy sao”.',
    ],
  },

  2: {
    title: 'Dáng vẻ dịu dàng',
    keywords: ['Dễ gần', 'Nhẹ nhàng', 'Tế nhị'],
    summary:
      'Số nhân cách 2 cho thấy người khác thường thấy ở bạn sự dịu dàng và dễ gần. Lần đầu gặp, người ta thấy bạn biết lắng nghe và không làm ai khó xử. Bạn thường được nhờ vả vì trông hiền và dễ nói chuyện. Có điều, ấn tượng hiền lành ấy có thể khiến người khác đánh giá thấp sự vững vàng trong bạn.',
    strengths: [
      'Bạn khiến người khác thấy thoải mái ngay từ đầu.',
      'Bạn trông đáng tin để người ta kể chuyện riêng.',
      'Bạn cư xử tế nhị, hợp với những tình huống cần khéo léo.',
    ],
    watchOut: [
      'Bạn có thể bị xem là thiếu quyết đoán.',
      'Người khác dễ nhờ bạn làm thêm việc vì nghĩ bạn sẽ không từ chối.',
    ],
    advice: [
      'Trước buổi gặp quan trọng, bạn chuẩn bị sẵn một ý kiến rõ ràng để nói ra.',
      'Tập nhìn vào mắt người đối diện và nói chậm, chắc giọng hơn khi trình bày.',
    ],
  },

  3: {
    title: 'Dáng vẻ rạng rỡ',
    keywords: ['Có duyên', 'Hoạt bát', 'Hài hước'],
    summary:
      'Số nhân cách 3 cho thấy người khác thường thấy bạn vui vẻ và dễ bắt chuyện. Lần đầu gặp, bạn có thể làm cả nhóm cười chỉ sau vài câu. Bạn chăm chút cho vẻ ngoài và cách nói chuyện của mình. Đôi khi người ta nghĩ bạn chỉ vui ngoài mặt mà chưa thấy được chiều sâu bên trong.',
    strengths: [
      'Bạn phá băng giỏi, làm buổi gặp đầu tiên bớt ngượng.',
      'Bạn có phong cách riêng trong cách ăn mặc và trình bày.',
      'Bạn được nhiều người quý nhờ sự cởi mở.',
    ],
    watchOut: [
      'Bạn có thể bị xem là thiếu nghiêm túc ở những nơi trang trọng.',
      'Bạn dễ nói nhiều hơn cần khi hồi hộp.',
    ],
    advice: [
      'Trước buổi gặp quan trọng, bạn chuẩn bị vài ý chính và giữ câu chuyện xoay quanh chúng.',
      'Để người khác thấy chiều sâu của bạn bằng cách kể về một điều bạn đã nghĩ kỹ.',
    ],
  },

  4: {
    title: 'Dáng vẻ chỉn chu',
    keywords: ['Đáng tin', 'Nghiêm túc', 'Gọn gàng'],
    summary:
      'Số nhân cách 4 cho thấy người khác thường thấy bạn chỉn chu và đáng tin cậy. Lần đầu gặp, bạn để lại ấn tượng của một người đúng giờ, ăn mặc gọn gàng và nói có trọng tâm. Người ta sẵn lòng giao việc cho bạn ngay cả khi mới quen. Có điều, bạn có thể trông nghiêm hơn con người thật của mình.',
    strengths: [
      'Bạn tạo cảm giác chắc chắn, rất hợp với buổi phỏng vấn hay buổi gặp đối tác.',
      'Bạn được tin về sự đúng hẹn và cẩn thận.',
      'Bạn trông có tổ chức, người khác dễ đoán được cách bạn làm việc.',
    ],
    watchOut: [
      'Bạn có thể bị xem là cứng nhắc hoặc khó gần.',
      'Người khác có thể ngại đùa với bạn vì nghĩ bạn không thích.',
    ],
    advice: [
      'Khi gặp người mới, bạn kể một chuyện nhỏ về sở thích của mình để họ thấy bạn gần gũi hơn.',
      'Bắt đầu cuộc trò chuyện bằng một nụ cười, kể cả trong những buổi gặp nghiêm túc.',
    ],
  },

  5: {
    title: 'Dáng vẻ phóng khoáng',
    keywords: ['Năng động', 'Cuốn hút', 'Cởi mở'],
    summary:
      'Số nhân cách 5 cho thấy người khác thường thấy bạn là người năng động và có nhiều chuyện hay để kể. Lần đầu gặp, bạn trông như người đã đi đây đi đó và chẳng ngại điều gì mới. Người ta dễ bị cuốn vào năng lượng của bạn. Có điều, bạn cũng có thể bị xem là khó đoán hoặc thiếu kiên định.',
    strengths: [
      'Bạn tạo cảm giác mới mẻ và hấp dẫn ngay từ lần gặp đầu.',
      'Bạn hoà vào được với nhiều kiểu người và hoàn cảnh.',
      'Bạn trông trẻ trung và tràn đầy năng lượng.',
    ],
    watchOut: [
      'Bạn có thể bị nghĩ là người không ở lâu một chỗ.',
      'Sự bộc trực của bạn đôi khi bị hiểu là thiếu cẩn trọng.',
    ],
    advice: [
      'Khi đi phỏng vấn, bạn kể về một việc mình đã theo tới cùng để hình ảnh của bạn cân bằng hơn.',
      'Giữ đúng những lời hẹn nhỏ, như giờ gặp hay một tin nhắn cần trả lời.',
    ],
  },

  6: {
    title: 'Dáng vẻ ấm áp',
    keywords: ['Đáng mến', 'Chu đáo', 'Đáng tin cậy'],
    summary:
      'Số nhân cách 6 cho thấy người khác thường thấy bạn ấm áp và đáng tin cậy. Lần đầu gặp, người ta có cảm giác bạn sẽ giúp nếu họ cần. Bạn hay được nhờ trông đồ, trông em nhỏ hay lo hậu cần cho cả nhóm. Có điều, bạn có thể trông như người lúc nào cũng sẵn sàng hy sinh, khiến người khác dễ dựa dẫm.',
    strengths: [
      'Bạn tạo cảm giác an toàn và gần gũi.',
      'Bạn có vẻ ngoài chăm chút và hài hoà.',
      'Bạn dễ được tin tưởng ở những vai trò chăm sóc hay phục vụ.',
    ],
    watchOut: [
      'Bạn có thể bị nhờ vả quá mức.',
      'Vì bị xem là người hiền, ý kiến trái chiều của bạn đôi khi ít được lắng nghe.',
    ],
    advice: [
      'Khi được nhờ ngay lần đầu gặp, bạn có quyền nói “để mình xem lịch đã”.',
      'Nêu quan điểm riêng trong cuộc trò chuyện, để người khác thấy bạn có chính kiến.',
    ],
  },

  7: {
    title: 'Dáng vẻ trầm tĩnh',
    keywords: ['Kín đáo', 'Sâu sắc', 'Điềm tĩnh'],
    summary:
      'Số nhân cách 7 cho thấy người khác thường thấy bạn kín đáo và điềm tĩnh. Lần đầu gặp, bạn có vẻ như đang quan sát nhiều hơn nói. Người ta tò mò về bạn nhưng chưa biết bắt chuyện từ đâu. Ấn tượng đó có thể khiến bạn trông xa cách, dù thật ra bạn chỉ cần thêm thời gian để cởi mở.',
    strengths: [
      'Bạn trông sâu sắc và đáng tin trong những chuyện cần suy nghĩ kỹ.',
      'Bạn giữ được bình tĩnh khi tình huống căng thẳng.',
      'Khi bạn lên tiếng, lời bạn nói thường được lắng nghe.',
    ],
    watchOut: [
      'Bạn có thể bị xem là lạnh lùng hay khó gần.',
      'Người khác không biết bạn đang nghĩ gì nên dễ hiểu lầm sự im lặng của bạn.',
    ],
    advice: [
      'Chuẩn bị sẵn hai ba câu hỏi để bắt chuyện khi gặp người mới.',
      'Nói ra cảm nhận của mình sớm hơn, dù chỉ là một câu ngắn.',
    ],
  },

  8: {
    title: 'Dáng vẻ có uy',
    keywords: ['Bản lĩnh', 'Chuyên nghiệp', 'Có uy'],
    summary:
      'Số nhân cách 8 cho thấy người khác thường thấy bạn có uy và chuyên nghiệp. Lần đầu gặp, bạn trông như người nắm được tình hình và biết cách giải quyết. Người ta dễ nghĩ bạn là trưởng nhóm, kể cả khi bạn chưa phải. Có điều, với người chưa hiểu bạn, bạn có thể trông khó gần hoặc quá tham vọng.',
    strengths: [
      'Bạn để lại ấn tượng mạnh trong các buổi gặp về công việc.',
      'Bạn trông tự tin về năng lực và giá trị của mình.',
      'Người khác dễ tin rằng bạn gánh được việc lớn.',
    ],
    watchOut: [
      'Bạn có thể bị xem là áp đặt hoặc lạnh lùng.',
      'Người khác có thể ngại chia sẻ với bạn những chuyện riêng.',
    ],
    advice: [
      'Khi gặp người mới, bạn hỏi thăm họ về những chuyện ngoài công việc.',
      'Thỉnh thoảng kể về một lần mình từng thất bại, để người khác thấy bạn gần gũi hơn.',
    ],
  },

  9: {
    title: 'Dáng vẻ bao dung',
    keywords: ['Rộng lượng', 'Thanh lịch', 'Có chiều sâu'],
    summary:
      'Số nhân cách 9 cho thấy người khác thường thấy bạn rộng lượng và có chiều sâu. Lần đầu gặp, bạn trông như người từng trải và hiểu chuyện. Người ta thấy dễ tâm sự với bạn vì bạn không phán xét. Có điều, bạn có thể trông hơi xa vời, như đang nghĩ về một chuyện lớn hơn cuộc trò chuyện trước mắt.',
    strengths: [
      'Bạn khiến người đối diện thấy mình được tôn trọng.',
      'Bạn có phong thái thanh lịch, dễ được quý mến.',
      'Bạn trông đáng tin trong những việc liên quan tới cộng đồng.',
    ],
    watchOut: [
      'Bạn có thể bị nghĩ là mơ mộng, không thực tế.',
      'Người khác dễ tìm tới bạn để trút tâm sự, khiến bạn mệt.',
    ],
    advice: [
      'Trong buổi gặp công việc, bạn nói rõ con số và kết quả cụ thể bên cạnh lý tưởng.',
      'Đặt giới hạn thời gian cho những cuộc tâm sự kéo dài, và nói điều đó một cách nhẹ nhàng.',
    ],
  },

  11: {
    title: 'Sức hút khó gọi tên',
    keywords: ['Cuốn hút', 'Nhạy cảm', 'Truyền cảm hứng'],
    summary:
      'Số nhân cách 11 cho thấy người khác thường thấy ở bạn một sức hút khó gọi tên. Lần đầu gặp, người ta có cảm giác bạn hiểu họ nhanh hơn bình thường. Bạn có thể khiến cả căn phòng chú ý mà không cần nói to. Có điều, sự nhạy cảm của bạn đôi khi lộ ra thành vẻ căng thẳng hay ngượng ngùng.',
    strengths: [
      'Bạn để lại ấn tượng khó quên.',
      'Bạn truyền được cảm hứng qua cách nói chuyện.',
      'Bạn dễ tạo được sự kết nối sâu ngay từ lần gặp đầu.',
    ],
    watchOut: [
      'Bạn có thể trông hồi hộp hay căng thẳng ở chỗ đông người.',
      'Người khác có thể kỳ vọng ở bạn nhiều hơn những gì bạn muốn thể hiện.',
    ],
    advice: [
      'Trước buổi gặp quan trọng, bạn dành vài phút hít thở chậm để bình tĩnh lại.',
      'Chuẩn bị một câu giới thiệu ngắn về mình để mở đầu cho tự tin.',
    ],
  },

  22: {
    title: 'Dáng vẻ vững vàng',
    keywords: ['Vững vàng', 'Có năng lực', 'Đáng tin'],
    summary:
      'Số nhân cách 22, viết là 22/4, cho thấy người khác thường thấy bạn vững vàng và có năng lực. Lần đầu gặp, bạn để lại ấn tượng của người có thể đảm đương việc lớn. Người ta tin bạn vì bạn nói ít mà làm thật. Có điều, bạn có thể trông nghiêm và khó tiếp cận.',
    strengths: [
      'Bạn tạo cảm giác yên tâm cho những người làm cùng.',
      'Bạn trông như người có kế hoạch và nhìn xa.',
      'Bạn dễ được giao trọng trách ngay từ đầu.',
    ],
    watchOut: [
      'Người khác có thể ngại tìm tới bạn vì những chuyện nhỏ.',
      'Bạn có thể bị nghĩ là quá nghiêm túc.',
    ],
    advice: [
      'Kể về một sở thích đời thường để người khác thấy bạn dễ gần.',
      'Chủ động hỏi han đồng nghiệp mới, để họ không ngại bạn.',
    ],
  },

  33: {
    title: 'Dáng vẻ hiền hậu',
    keywords: ['Hiền hậu', 'Che chở', 'Đáng kính'],
    summary:
      'Số nhân cách 33, viết là 33/6, cho thấy người khác thường thấy ở bạn sự hiền hậu và đáng kính. Lần đầu gặp, người ta cảm thấy bạn quan tâm thật lòng. Trẻ nhỏ và người lớn tuổi thường quý bạn khá nhanh. Có điều, bạn có thể bị xem là người lúc nào cũng sẵn sàng gánh vác, nên dễ bị nhờ quá sức.',
    strengths: [
      'Bạn khiến người xung quanh thấy được che chở.',
      'Bạn được tin tưởng ở vai trò hướng dẫn hay chăm sóc.',
      'Sự tử tế của bạn dễ nhận ra ngay từ đầu.',
    ],
    watchOut: [
      'Bạn dễ bị nhờ vả vượt quá sức mình.',
      'Người khác có thể nghĩ bạn không bao giờ buồn hay mệt.',
    ],
    advice: [
      'Cho người khác biết khi bạn đang mệt, để họ không mặc định lúc nào bạn cũng ổn.',
      'Trong tuần này, bạn tập từ chối một lời nhờ không gấp.',
    ],
  },
};

export const MESSAGES = { lifePath, personalYear, expression, soul, personality };
