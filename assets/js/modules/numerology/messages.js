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
    title: 'Người mở lối độc lập',
    keywords: ['Tự chủ', 'Quyết đoán', 'Dám khởi xướng', 'Thẳng thắn'],
    summary:
      'Phản xạ tự nhiên của bạn trước một vấn đề khó là tự mình tìm cách giải quyết chứ không ngồi chờ người khác chỉ đường. Ngay từ sớm, bạn đã thích tự quyết định theo góc nhìn riêng, kể cả khi phải tự thử và tự chịu phần thiệt. Trong một tập thể đang phân vân bàn bạc, bạn thường là người chốt phương án để công việc bắt đầu chuyển động. Bài học xuyên suốt của bạn là giữ vững bản lĩnh độc lập đó nhưng biết lắng nghe và phối hợp để không biến mình thành ốc đảo.',
    strengths: [
      'Khả năng khởi động công việc rất nhanh: khi một kế hoạch còn đang nằm trên giấy, bạn đã chủ động dựng khung thực hiện và bắt tay vào bước đầu tiên.',
      'Dám làm dám chịu: một khi đã tự đưa ra lựa chọn, nếu kết quả chệch hướng, bạn tập trung tìm phương án gỡ rối thay vì đổ lỗi cho hoàn cảnh.',
      'Hiệu suất cao nhất khi được trao quyền tự chủ: giao rõ mục tiêu và thời hạn rồi để bạn tự xoay xở luôn mang lại kết quả tốt hơn việc giám sát từng chi tiết.',
    ],
    watchOut: [
      'Dễ nhầm lẫn giữa góp ý chuyên môn và sự công kích cá nhân, khiến một câu nhận xét thẳng từ đồng nghiệp cũng làm bạn khó chịu cả ngày.',
      'Thói quen ôm đồm vì nghĩ tự mình làm sẽ nhanh hơn, dẫn đến tình trạng quá tải một mình trong khi người xung quanh sẵn sàng hỗ trợ.',
      'Những lúc cần đẩy nhanh tiến độ, bạn dễ áp đặt quyết định của mình lên người khác mà quên hỏi ý kiến của họ.',
    ],
    advice: [
      'Trong tuần này, hãy chọn một đầu việc bạn vốn quen tự ôm và chuyển giao hẳn cho một cộng sự phụ trách để tập tin tưởng vào cách làm của người khác.',
      'Khi nhận được một lời phê bình trái ý, hãy tạm hoãn phản hồi vài tiếng để tách cảm xúc tự ái ra khỏi nội dung công việc.',
      'Đặt ra một mục tiêu dài hạn xuất phát từ nhu cầu phát triển thực chất của chính bạn, thay vì chạy theo tâm lý muốn chứng tỏ mình hơn người.',
    ],
    fields: ['Khởi nghiệp, kinh doanh độc lập', 'Quản lý dự án', 'Nghề tự do chuyên môn', 'Phát triển thị trường', 'Thiết kế sản phẩm'],
  },

  2: {
    title: 'Người kết nối và điều hoà',
    keywords: ['Tinh tế', 'Hợp tác', 'Kiên nhẫn', 'Biết lắng nghe'],
    summary:
      'Khả năng quan sát sắc thái tâm lý giúp bạn nhận ra sự thay đổi của người đối diện chỉ qua một câu trả lời ngắn hoặc cái nhíu mày thoáng qua. Thay vì chọn cách đối đầu gay gắt, bạn phát huy năng lực tốt nhất khi đóng vai trò gắn kết, tìm điểm chung và giữ nhịp ổn định cho tập thể. Sự có mặt của bạn thường làm dịu đi những cái đầu nóng trong các cuộc thảo luận căng thẳng. Bài học lớn nhất dành cho bạn là bảo vệ được tiếng nói và ranh giới cá nhân trong lúc vẫn duy trì sự hài hoà chung.',
    strengths: [
      'Lắng nghe có chiều sâu: người xung quanh dễ mở lòng chia sẻ với bạn vì bạn thực sự đặt mình vào vị trí của họ thay vì vội vàng phán xét.',
      'Khéo léo tháo gỡ mâu thuẫn: khi hai bên đang căng thẳng, bạn luôn biết cách chọn từ ngữ vừa đủ mềm mỏng để mở đường cho cả hai cùng ngồi lại.',
      'Sự bền bỉ và chu đáo: những công việc đòi hỏi sự kiên nhẫn tích luỹ từng ngày hay chăm sóc mối quan hệ đường dài đều là thế mạnh tự nhiên của bạn.',
    ],
    watchOut: [
      'Thói quen chiều lòng người khác bằng câu “sao cũng được” dù trong bụng đã có ý riêng, để rồi sau đó lại ấm ức một mình.',
      'Tâm trạng dễ bị cuốn theo thái độ của người ngoài, chẳng hạn cứ bận tâm mãi về một tin nhắn đã xem nhưng chưa thấy đối phương hồi âm.',
      'Khi đứng trước tình huống buộc phải lựa chọn dứt khoát giữa hai phương án, bạn hay chần chừ quá lâu vì sợ làm mất lòng một bên.',
    ],
    advice: [
      'Tập nói rõ lựa chọn cụ thể của bạn ngay từ những việc nhỏ hằng ngày như chọn quán ăn, chọn khung giờ họp thay vì nhường hết cho người khác.',
      'Khi cảm thấy tâm trạng trùng xuống, hãy tự hỏi cảm xúc này là của chính bạn hay bạn đang vô thức gánh hộ sự căng thẳng của người bên cạnh.',
      'Luyện cách từ chối ngắn gọn, lịch sự mà không cần viện cớ dài dòng: chỉ cần báo rõ hiện tại bạn chưa thu xếp được thời gian là đủ.',
    ],
    fields: ['Chăm sóc khách hàng', 'Quản trị nhân sự', 'Điều phối dự án', 'Giáo dục, đào tạo', 'Quan hệ đối tác, ngoại giao'],
  },

  3: {
    title: 'Người truyền đạt và sáng tạo',
    keywords: ['Hoạt ngôn', 'Linh hoạt', 'Giàu ý tưởng', 'Truyền cảm hứng'],
    summary:
      'Năng lượng của bạn bộc lộ mạnh mẽ nhất qua ngôn từ, cách kể chuyện và tư duy giàu hình ảnh. Một vấn đề khô khan hay buổi họp căng thẳng khi qua cách diễn đạt của bạn thường trở nên sáng sủa, dễ hiểu và cuốn hút hơn hẳn. Bạn nhạy bén với cái mới và luôn tìm ra những góc tiếp cận thú vị mà lối mòn cũ bỏ sót. Bài học trọng tâm của bạn là rèn tính kỷ luật để đi tới tận cùng với một ý tưởng, thay vì dừng lại ở sự hào hứng lúc ban đầu.',
    strengths: [
      'Diễn đạt слож phức tạp thành đơn giản: bạn biết dùng ví dụ đời thường để thuyết phục và giúp người nghe nắm bắt nhanh cốt lõi vấn đề.',
      'Tạo sinh khí cho tập thể: sự hài hước, cởi mở tự nhiên của bạn giúp phá vỡ bầu không khí ngượng ngập và kích thích cả nhóm cùng đóng góp ý kiến.',
      'Tư duy linh hoạt, nảy số nhanh: bạn hiếm khi chịu bó tay trước một bài toán khó mà luôn xoay ra được hai, ba phương án thay thế.',
    ],
    watchOut: [
      'Hào hứng mở ra nhiều kế hoạch cùng lúc nhưng dễ chán và bỏ dở khi công việc bước vào giai đoạn xử lý chi tiết lặp đi lặp lại.',
      'Khi gặp chuyện buồn hoặc áp lực, bạn hay lấy sự vui vẻ, bông đùa ra che chắn khiến người thân không nhận ra lúc nào bạn thực sự cần sẻ chia.',
      'Quản lý chi tiêu hoặc thời gian dễ cảm tính, đôi khi quyết định mua sắm hay nhận lời chỉ vì cảm xúc bốc đồng ngay lúc đó.',
    ],
    advice: [
      'Áp dụng nguyên tắc chỉ giữ tối đa hai dự án cá nhân cùng lúc: phải hoàn tất hoặc đóng hẳn việc cũ mới được phép bắt đầu ý tưởng mới.',
      'Khi có một ý tưởng tâm đắc, hãy lập tức chia nhỏ nó thành ba đầu việc cụ thể có hạn chót trong hai tuần đầu tiên để giữ đà thực thi.',
      'Tạo khoảng dừng ba ngày trước các khoản chi tiêu không thiết yếu để phân biệt đâu là nhu cầu thật, đâu là hứng thú nhất thời.',
    ],
    fields: ['Sáng tạo nội dung, biên tập', 'Truyền thông, marketing', 'Thiết kế, nghệ thuật', 'Giảng dạy, đào tạo', 'Dẫn chương trình, thuyết trình'],
  },

  4: {
    title: 'Người xây dựng nền tảng',
    keywords: ['Thực tế', 'Kỷ luật', 'Có hệ thống', 'Đáng tin cậy'],
    summary:
      'Sự rõ ràng, trật tự và tính thực tế là kim chỉ nam trong cách bạn vận hành cuộc sống. Bạn không dễ bị thuyết phục bởi những lời hứa hẹn màu hồng nếu thiếu số liệu cụ thể và kế hoạch triển khai từng bước. Khi một công việc đã giao vào tay bạn, người xung quanh hoàn toàn yên tâm vì bạn luôn làm đến nơi đến chốn với chất lượng ổn định. Bài học cần thiết của bạn là rèn sự linh hoạt trước những biến số bất ngờ, bởi thực tế hiếm khi vận hành khớp tuyệt đối với bản kế hoạch.',
    strengths: [
      'Tác phong chuẩn chỉnh và giữ chữ tín: bạn luôn chủ động tính toán thời gian dự phòng để hoàn thành cam kết đúng hoặc trước hạn.',
      'Tư duy hệ thống mạch lạc: đứng trước một khối lượng việc ngổn ngang, bạn biết cách phân loại, sắp xếp thứ tự ưu tiên để giải quyết gọn gàng.',
      'Sức bền kỷ luật cao: bạn duy trì được những thói quen tích luỹ dài hạn về chuyên môn, sức khoẻ và quản lý tài chính cá nhân.',
    ],
    watchOut: [
      'Dễ nảy sinh tâm lý khắt khe, khó chịu khi thấy người khác làm việc không theo đúng quy trình quen thuộc của bạn dù họ vẫn đạt kết quả tốt.',
      'Quá cầu toàn vào các chi tiết kỹ thuật nhỏ, đôi khi làm chậm tốc độ ra quyết định ở những thời điểm cần chớp cơ hội nhanh.',
      'Xu hướng tự ép bản thân làm việc quá tải và dễ cảm thấy áy náy vô lý mỗi khi dành thời gian nghỉ ngơi hoàn toàn.',
    ],
    advice: [
      'Trong công việc nhóm, hãy thống nhất kỹ tiêu chuẩn đầu ra cuối cùng rồi cho phép đồng nghiệp tự do chọn cách làm phù hợp với họ.',
      'Đưa thời gian nghỉ ngơi, tái tạo sức lao động vào lịch trình cố định trong tuần và coi đó là một hạng mục bắt buộc phải hoàn thành.',
      'Với mỗi kế hoạch quan trọng, hãy chuẩn bị sẵn một phương án dự phòng linh hoạt để tâm lý không bị căng cứng khi hoàn cảnh thay đổi.',
    ],
    fields: ['Tài chính, kế toán, kiểm toán', 'Kỹ thuật, xây dựng', 'Quản lý vận hành, hậu cần', 'Phát triển và kiểm thử phần mềm', 'Quản lý chất lượng, pháp chế'],
  },

  5: {
    title: 'Người thích nghi và cải tiến',
    keywords: ['Linh hoạt', 'Tự do', 'Thực chiến', 'Ưa đổi mới'],
    summary:
      'Một lịch trình rập khuôn lặp đi lặp lại ngày này qua tháng khác rất dễ làm bạn cảm thấy ngột ngạt và tụt năng lượng. Bạn tiếp thu nhanh nhất khi được trực tiếp va chạm thực tế, thử nghiệm cái mới và tự mình rút kinh nghiệm. Khi hoàn cảnh xung quanh biến động, trong lúc nhiều người còn lúng túng thì bạn đã nhanh chóng xoay xở và tìm ra lối đi mới. Bài học quan trọng nhất của bạn là gắn sự tự do với một mục tiêu có chiều sâu, để mỗi lần dịch chuyển đều giúp bạn nâng tầm năng lực thay vì chỉ đổi chỗ cho đỡ chán.',
    strengths: [
      'Khả năng thích ứng cực nhanh: dù chuyển sang môi trường mới, công cụ mới hay lĩnh vực chưa từng làm, bạn chỉ mất thời gian rất ngắn để bắt nhịp.',
      'Dám thử nghiệm và cải tiến: bạn không ngại phá bỏ những quy trình rườm rà để tìm ra cách làm ngắn gọn, hiệu quả hơn.',
      'Giao tiếp cởi mở, đa dạng: bạn dễ dàng bắt chuyện và làm việc ăn ý với nhiều kiểu người thuộc các ngành nghề, hoàn cảnh khác nhau.',
    ],
    watchOut: [
      'Dễ bỏ ngang công việc ngay ở giai đoạn hoàn thiện cuối cùng chỉ vì cảm giác háo hức ban đầu đã qua đi.',
      'Đôi khi đưa ra các quyết định thay đổi lớn như nghỉ việc, chuyển hướng hay chi tiêu chỉ dựa trên sự bốc đồng nhất thời.',
      'Phản ứng gay gắt hoặc mất hết động lực khi phải làm việc dưới sự quản lý vi mô, gò bó từng giờ giấc.',
    ],
    advice: [
      'Trước khi quyết định từ bỏ một công việc hay dự án, hãy tự vấn xem bạn thực sự hết cơ hội phát triển ở đó hay chỉ đang né tránh giai đoạn khó khăn.',
      'Thiết lập một quỹ tài chính dự phòng riêng cho các kế hoạch trải nghiệm để sự tự do của bạn luôn có điểm tựa an toàn.',
      'Chọn một lĩnh vực chuyên môn cốt lõi để đào sâu liên tục ít nhất hai năm, thay vì biết mỗi thứ một chút nhưng thiếu hẳn một thế mạnh sắc bén.',
    ],
    fields: ['Phát triển kinh doanh, bán hàng', 'Du lịch, tổ chức sự kiện', 'Báo chí, truyền thông đa phương tiện', 'Thương mại, xuất nhập khẩu', 'Khởi nghiệp đổi mới'],
  },

  6: {
    title: 'Người giữ trách nhiệm và gắn kết',
    keywords: ['Trách nhiệm', 'Chu đáo', 'Trọng chữ tín', 'Hướng về tập thể'],
    summary:
      'Bạn tìm thấy ý nghĩa lớn nhất khi chăm lo được cho sự ổn định của gia đình, đội nhóm và những người mình yêu quý. Trong công việc cũng như đời sống, bạn là người tinh ý nhận ra ai đang gặp khó khăn và sẵn sàng xắn tay áo vào gánh vác mà không tính toán thiệt hơn. Bên cạnh tinh thần trách nhiệm, bạn còn có mắt thẩm mỹ tốt và luôn muốn giữ cho không gian xung quanh chỉn chu, hài hoà. Bài học cốt lõi của bạn là học cách giúp đỡ đúng mực để người khác tự trưởng thành, đồng thời không bỏ quên nhu cầu của chính mình.',
    strengths: [
      'Tinh thần trách nhiệm rất cao: một khi đã nhận lời, bạn luôn theo sát công việc đến cùng dù có người giám sát hay không.',
      'Khả năng chăm sóc và gắn kết: bạn tạo ra bầu không khí ấm áp, tin cậy, khiến các thành viên trong gia đình hay đội nhóm dễ xích lại gần nhau.',
      'Gu thẩm mỹ thực tế: bạn có năng khiếu tự nhiên trong việc sắp xếp không gian sống, trình bày sản phẩm và chăm chút trải nghiệm cho người khác.',
    ],
    watchOut: [
      'Thói quen lo thay, làm thay phần việc của người khác rồi tự rơi vào trạng thái kiệt sức và tủi thân vì không ai hiểu cho mình.',
      'Sự quan tâm quá mức đôi khi biến thành áp đặt ngầm, muốn người thân phải làm theo đúng cách bạn cho là tốt nhất.',
      'Đặt tiêu chuẩn hoàn hảo quá cao cho các mối quan hệ, dễ thất vọng nặng nề khi sự nhiệt tình của mình không được đáp lại tương xứng.',
    ],
    advice: [
      'Trước khi gật đầu nhận thêm việc giúp người khác, hãy kiểm tra lại quỹ thời gian và sức khoẻ của chính bạn trong tuần đó trước.',
      'Khi muốn góp ý hay can thiệp vào chuyện của người thân, hãy tập hỏi xem họ cần bạn lắng nghe hay cần giải pháp trước khi đưa ra lời khuyên.',
      'Dành riêng những khoảng thời gian cố định trong tuần để chăm sóc sức khoẻ và sở thích cá nhân mà không cảm thấy có lỗi với ai.',
    ],
    fields: ['Y tế, chăm sóc sức khoẻ', 'Giáo dục, đào tạo', 'Thiết kế nội thất, không gian', 'Quản trị dịch vụ, khách sạn', 'Quản trị nhân sự, văn hoá nội bộ'],
  },

  7: {
    title: 'Người phân tích và đào sâu bản chất',
    keywords: ['Tư duy logic', 'Độc lập', 'Quan sát sâu', 'Chuyên môn cao'],
    summary:
      'Bạn hiếm khi tin ngay những lời giải thích hời hợt trên bề mặt mà luôn muốn tự mình tìm hiểu tận gốc rễ vấn đề. Đứng trước một thông tin mới, phản xạ của bạn là đặt câu hỏi ngược lại, đối chiếu nhiều nguồn dữ liệu và quan sát thực tế rồi mới đưa ra kết luận. Những khoảng không gian yên tĩnh, độc lập là điều kiện bắt buộc để bạn suy ngẫm và tái tạo năng lượng. Bài học lớn của bạn là bước qua rào cản hoài nghi để mở lòng kết nối với mọi người và biến kiến thức trong đầu thành hành động thực tế.',
    strengths: [
      'Năng lực phân tích sắc sảo: bạn dễ dàng phát hiện ra những điểm bất hợp lý trong lập luận hoặc lỗi ẩn sâu trong quy trình mà người khác lướt qua.',
      'Khả năng tự học và tập trung sâu: khi đã quan tâm tới một lĩnh vực, bạn có thể kiên trì nghiên cứu hàng giờ liền để nắm vững bản chất.',
      'Góc nhìn điềm tĩnh, khách quan: giữa những tình huống hỗn loạn, bạn ít bị tâm lý đám đông cuốn đi mà giữ được cái đầu lạnh.',
    ],
    watchOut: [
      'Dễ mắc kẹt trong việc phân tích quá mức, cứ muốn thu thập thêm thông tin mãi mà chần chừ không chịu bắt tay vào thử nghiệm.',
      'Phong thái khép kín, kiệm lời đôi khi khiến người xung quanh hiểu lầm là bạn lạnh lùng, xa cách hoặc đang ngầm đánh giá họ.',
      'Khi gặp chuyện tổn thương tâm lý, bạn có xu hướng tự rút vào vỏ bọc im lặng thay vì thẳng thắn trao đổi để tháo gỡ khúc mắc.',
    ],
    advice: [
      'Áp dụng quy tắc ra quyết định khi đã nắm được khoảng 70 đến 80 phần trăm dữ kiện, vì những thông tin còn lại chỉ lộ ra khi bạn bắt đầu làm thật.',
      'Chủ động chia sẻ ngắn gọn tiến độ hoặc suy nghĩ của bạn với đồng nghiệp, người thân để họ hiểu bạn đang tập trung chứ không phải thờ ơ.',
      'Thiết lập một khung giờ yên tĩnh cố định mỗi ngày cho việc đọc và suy ngẫm, giúp tâm trí được nạp lại năng lượng một cách chủ động.',
    ],
    fields: ['Nghiên cứu và phát triển', 'Phân tích dữ liệu, tài chính', 'Kỹ thuật phần mềm, hệ thống', 'Tâm lý học, tư vấn chuyên sâu', 'Biên khảo, học thuật'],
  },

  8: {
    title: 'Người điều hành và tối ưu nguồn lực',
    keywords: ['Thực tế', 'Tư duy quản trị', 'Bản lĩnh', 'Định hướng kết quả'],
    summary:
      'Bạn nhìn nhận công việc và cuộc sống qua lăng kính rất thực tế của hiệu suất, nguồn lực và kết quả đo đếm được. Ngay từ sớm, bạn đã ý thức rõ tầm quan trọng của sự tự chủ tài chính cũng như vị thế cá nhân để làm chủ các lựa chọn của mình. Khi tập thể đứng trước bài toán lớn cần người cầm trịch và chịu trách nhiệm, bạn có đủ sự quyết đoán để đứng mũi chịu sào. Bài học xuyên suốt của bạn là cân bằng giữa mục tiêu lợi ích với sự thấu cảm con người, bởi thành tựu bền vững không bao giờ chỉ đo bằng con số.',
    strengths: [
      'Tư duy tổ chức và phân bổ nguồn lực: bạn biết cách sắp xếp con người, ngân sách và thời gian sao cho tạo ra giá trị thực tế cao nhất.',
      'Bản lĩnh vững vàng trước áp lực: những va vấp hay thất bại tạm thời ít khi làm bạn nản lòng mà thường kích thích bạn tìm cách làm lại bài bản hơn.',
      'Rõ ràng, sòng phẳng và quyết đoán: bạn dám đưa ra những quyết định cắt bỏ hoặc đầu tư khó khăn ở thời điểm then chốt.',
    ],
    watchOut: [
      'Dễ đánh đồng giá trị bản thân với thu nhập hoặc chức vụ, khiến bạn rơi vào trạng thái căng thẳng nặng nề mỗi khi sự nghiệp chững lại.',
      'Trong quá trình làm việc, đôi khi vì quá sốt ruột với tiến độ mà bạn vô tình lấn át hoặc bỏ qua cảm xúc của những người đồng hành.',
      'Thói quen cuốn vào guồng công việc liên miên không có điểm dừng, luôn tự nhủ xong dự án này sẽ nghỉ nhưng rồi lại ôm tiếp mục tiêu mới.',
    ],
    advice: [
      'Song song với các chỉ tiêu về tài chính và công việc, hãy đặt ra những mục tiêu cụ thể về sức khoẻ và thời gian chất lượng bên gia đình.',
      'Trong các buổi thảo luận nhóm, hãy rèn thói quen lắng nghe hết góc nhìn của các thành viên trước khi bạn đưa ra quyết định chốt cuối cùng.',
      'Định kỳ rà soát lại các khoản chi tiêu và mục tiêu lớn để chắc chắn rằng bạn đang đầu tư cho giá trị thực chất chứ không phải vì sĩ diện bề ngoài.',
    ],
    fields: ['Quản trị doanh nghiệp, điều hành', 'Tài chính, đầu tư, ngân hàng', 'Kinh doanh bất động sản, thương mại', 'Luật, tư vấn chiến lược', 'Quản lý vận hành quy mô lớn'],
  },

  9: {
    title: 'Người định hướng giá trị cộng đồng',
    keywords: ['Bao dung', 'Tầm nhìn rộng', 'Trách nhiệm xã hội', 'Truyền cảm hứng'],
    summary:
      'Bạn luôn có xu hướng nhìn vượt ra khỏi lợi ích cá nhân để quan tâm tới tác động chung đối với tập thể và xã hội. Nhờ góc nhìn cởi mở và sự đồng cảm tự nhiên, bạn dễ dàng thấu hiểu những con người có xuất thân, quan điểm hoàn toàn khác biệt với mình. Một công việc chỉ đơn thuần mang lại thu nhập nhưng thiếu đi giá trị nhân văn rất khó giữ chân bạn lâu dài. Bài học lớn của bạn là giữ đôi chân thực tế khi theo đuổi lý tưởng và học cách buông bỏ những chuyện cũ đã không còn phù hợp.',
    strengths: [
      'Tầm nhìn bao quát và nhân văn: bạn giúp đội nhóm hiểu rõ ý nghĩa lớn hơn của công việc đang làm để cùng giữ lửa đường dài.',
      'Sự bao dung và khả năng thu phục: cách ứng xử rộng lượng, không chấp nhặt tiểu tiết giúp bạn nhận được sự nể trọng tự nhiên từ mọi người.',
      'Sẵn sàng sẻ chia kiến thức, kinh nghiệm và nguồn lực để nâng đỡ những người xung quanh cùng tiến bộ.',
    ],
    watchOut: [
      'Dễ cho đi quá mức hoặc nhận phần thiệt về mình mà không nói rõ, đến khi mệt mỏi lại âm thầm thất vọng vì người khác vô tâm.',
      'Hay nặng lòng với quá khứ, khó dứt khoát khép lại những mối quan hệ hoặc dự án đã không còn mang lại giá trị tích cực.',
      'Đôi khi lý tưởng hoá vấn đề mà thiếu sự tính toán chặt chẽ về bài toán chi phí, nguồn lực và tính khả thi thực tế.',
    ],
    advice: [
      'Mọi kế hoạch hỗ trợ cộng đồng hay tập thể đều cần được gắn với ngân sách, quy trình thực tế để duy trì được lâu dài mà không làm bạn kiệt sức.',
      'Tập thói quen dọn dẹp định kỳ từ không gian sống đến các cam kết công việc, chủ động khép lại những thứ đã hoàn thành vai trò của nó.',
      'Khi cần sự hỗ trợ hoặc ghi nhận từ người khác, hãy thẳng thắn trao đổi thay vì im lặng chịu đựng rồi tự buồn một mình.',
    ],
    fields: ['Tổ chức xã hội, phát triển cộng đồng', 'Giáo dục, đào tạo con người', 'Nghệ thuật, văn hoá, truyền thông', 'Y tế, chăm sóc sức khoẻ cộng đồng', 'Ngoại giao, quan hệ quốc tế'],
  },

  10: {
    title: 'Người linh hoạt và bền sức bật',
    keywords: ['Tự lập', 'Thích ứng nhanh', 'Bền chí', 'Dám làm lại'],
    summary:
      'Trong cách tính phổ biến tại Việt Nam, tổng ngày sinh bằng 10 được giữ riêng để nhấn mạnh sự kết hợp giữa tính tự chủ của số 1 và độ linh hoạt xoay chuyển của số 0. Bạn vừa có khả năng độc lập tự lo cho mình, vừa có sức bật rất nhanh mỗi khi hoàn cảnh sống hoặc công việc thay đổi đột ngột. Thực tế cho thấy dù phải chuyển hướng hay bắt đầu lại ở một môi trường hoàn toàn mới, bạn vẫn nhanh chóng tìm được chỗ đứng. Bài học trọng tâm của bạn là kết hợp khả năng ứng biến đó với sự kiên trì theo đuổi mục tiêu đến cùng.',
    strengths: [
      'Khả năng phục hồi tâm lý rất nhanh: sau một thất bại hay biến cố, bạn không mất quá nhiều thời gian than vãn mà sớm bắt tay vào phương án mới.',
      'Tư duy cởi mở, ít định kiến: bạn vừa tự làm việc độc lập tốt, vừa sẵn sàng học hỏi cách làm mới từ những người xung quanh.',
      'Dám bước vào những lĩnh vực mới mẻ và nhanh chóng đúc kết thành kinh nghiệm thực tế để hướng dẫn lại cho người đi sau.',
    ],
    watchOut: [
      'Vì quá quen với việc có thể bắt đầu lại từ đầu, đôi khi bạn buông bỏ một hướng đi hơi sớm ngay trước lúc nó kịp mang lại thành quả.',
      'Đôi lúc chủ quan, ỷ lại vào khả năng ứng biến tại chỗ của bản thân nên khâu chuẩn bị nền tảng chưa đủ kỹ lưỡng.',
    ],
    advice: [
      'Với mục tiêu quan trọng nhất hiện tại, hãy đặt cam kết theo đuổi liên tục ít nhất sáu tháng đến một năm trước khi nghĩ tới chuyện đổi hướng.',
      'Ghi chép lại những bài học xương máu sau mỗi lần chuyển đổi công việc để không lặp lại cùng một kiểu sai lầm ở môi trường mới.',
      'Trước các quyết định rẽ nhánh lớn, hãy tham khảo góc nhìn phản biện từ một người có chuyên môn sâu để bổ sung những rủi ro bạn chưa tính tới.',
    ],
    fields: ['Khởi nghiệp, phát triển kinh doanh', 'Quản lý dự án', 'Tư vấn giải pháp', 'Thương mại, dịch vụ', 'Nghề tự do đa lĩnh vực'],
  },

  11: {
    title: 'Người nhạy bén trực giác và truyền cảm hứng',
    keywords: ['Trực giác sắc bén', 'Thấu cảm sâu', 'Truyền cảm hứng', 'Tinh tế'],
    summary:
      'Mang nền tảng kết nối của số 2 nhưng ở cường độ nhạy bén cao hơn, bạn thường nhận ra bản chất của một tình huống hoặc tâm trạng ẩn giấu của người đối diện trước cả khi họ lên tiếng. Bạn không thích những cuộc trò chuyện xã giao hời hợt mà luôn tìm kiếm chiều sâu ý nghĩa trong công việc lẫn các mối quan hệ. Khi bạn chia sẻ về một điều mình thực sự tâm huyết, sự chân thành và góc nhìn sắc sảo của bạn có sức thuyết phục người nghe rất tự nhiên. Bài học lớn của bạn là giữ cho tâm trí vững vàng, thực tế để độ nhạy cảm cao không trở thành gánh nặng gây căng thẳng.',
    strengths: [
      'Trực giác đọc tình huống và con người rất nhạy: bạn sớm nhận ra những điểm bất ổn ngầm hoặc cơ hội mới mà số liệu bề nổi chưa phản ánh hết.',
      'Khả năng truyền đạt chạm tới cảm xúc: lời nói và bài viết của bạn dễ khơi dậy động lực cũng như sự đồng cảm sâu sắc nơi người khác.',
      'Tư duy giàu chiều sâu: bạn luôn biết cách kết nối những sự việc rời rạc để nhìn ra ý nghĩa và giá trị cốt lõi phía sau.',
    ],
    watchOut: [
      'Hệ thần kinh dễ bị quá tải, mất ngủ hoặc kiệt sức khi phải làm việc lâu trong môi trường ồn ào, nhiều sự cạnh tranh thiếu lành mạnh.',
      'Tâm lý dễ dao động giữa hai thái cực: có lúc rất tin vào tầm nhìn của mình, có lúc lại tự nghi ngờ bản thân gay gắt.',
      'Đặt kỳ vọng lý tưởng quá cao vào thực tế hoặc con người, dẫn đến cảm giác hẫng hụt khi mọi thứ diễn ra trần trụi hơn mình nghĩ.',
    ],
    advice: [
      'Rèn thói quen kiểm chứng trực giác bằng dữ kiện thực tế: hãy ghi lại những phán đoán của bạn và đối chiếu với kết quả để tăng độ chuẩn xác.',
      'Duy trì các thói quen giúp cân bằng thể chất hằng ngày như vận động ngoài trời, ngủ đủ giấc và giới hạn thời gian tiếp nhận thông tin tiêu cực.',
      'Mỗi khi có một ý tưởng tâm huyết, hãy bắt tay ngay vào những bước thực thi nhỏ, cụ thể để neo nguồn cảm hứng của bạn vào đời sống thực.',
    ],
    fields: ['Tư vấn tâm lý, định hướng', 'Giảng dạy, đào tạo, diễn thuyết', 'Sáng tạo nghệ thuật, biên kịch', 'Viết lách, truyền thông chiều sâu', 'Phát triển văn hoá, cộng đồng'],
  },

  22: {
    title: 'Người kiến tạo hệ thống quy mô lớn',
    keywords: ['Tầm nhìn xa', 'Thực thi bài bản', 'Tổ chức quy mô', 'Bền bỉ'],
    summary:
      'Được ký hiệu là 22/4, chỉ số này kết hợp trực giác tầm nhìn của số 11 với kỷ luật thực thi chặt chẽ của số 4. Bạn không dừng lại ở việc nghĩ ra những ý tưởng lớn mà có khả năng hiếm có trong việc bóc tách chúng thành quy trình, nguồn lực và từng bước xây dựng cụ thể. Những bài toán phức tạp, dài hơi đòi hỏi sự phối hợp của nhiều bộ phận chính là nơi năng lực của bạn bộc lộ rõ nhất. Bài học cốt lõi của bạn là vượt qua áp lực cầu toàn, biết phân quyền cho đội ngũ và kiên nhẫn với tiến độ phát triển tự nhiên của công việc.',
    strengths: [
      'Năng lực chuyển hoá tầm nhìn thành kế hoạch: bạn nhìn thấy cả bức tranh tổng thể sau nhiều năm lẫn những viên gạch đầu tiên cần đặt xuống hôm nay.',
      'Sức bền trước các dự án phức tạp: những công việc đòi hỏi thời gian tích luỹ dài hạn và áp lực cao không làm bạn chùn bước.',
      'Khả năng tổ chức và điều phối: bạn biết cách kết nối những con người có chuyên môn khác nhau vào chung một guồng máy vận hành trơn tru.',
    ],
    watchOut: [
      'Tự đặt lên vai áp lực nặng nề rằng mình phải tạo ra thành tựu thật lớn, dẫn đến làm việc quá sức và không cho phép bản thân ngơi nghỉ.',
      'Xu hướng kiểm soát chặt và thiếu kiên nhẫn với những cộng sự có tốc độ xử lý chậm hoặc ít kinh nghiệm hơn mình.',
      'Khi thực tế hiện tại còn cách quá xa mục tiêu lớn, bạn dễ rơi vào tâm lý nản lòng rồi tự thu mình lại trong vùng an toàn cứng nhắc.',
    ],
    advice: [
      'Chia nhỏ mọi mục tiêu dài hạn thành các cột mốc theo từng quý và ghi nhận đàng hoàng từng kết quả thực tế đã hoàn thành.',
      'Đầu tư thời gian xây dựng quy trình chuẩn và đào tạo người kế cận, vì không một hệ thống lớn nào có thể vận hành mãi trên vai một cá nhân.',
      'Duy trì nguyên tắc tách bạch thời gian làm việc và nghỉ ngơi để bảo vệ sự minh mẫn cho những quyết định chiến lược đường dài.',
    ],
    fields: ['Kiến trúc, quy hoạch, xây dựng', 'Quản trị dự án và chương trình lớn', 'Kỹ thuật hệ thống, công nghệ', 'Khởi nghiệp và điều hành doanh nghiệp', 'Hoạch định chính sách, vận hành chuỗi'],
  },

  33: {
    title: 'Người dẫn dắt bằng sự thấu cảm và gương mẫu',
    keywords: ['Nâng đỡ con người', 'Trách nhiệm lớn', 'Bao dung', 'Chữa lành'],
    summary:
      'Được ký hiệu là 33/6, chỉ số này hội tụ khả năng truyền đạt của số 3 và tinh thần trách nhiệm chăm sóc của số 6 ở mức độ rộng lớn hơn. Bạn có xu hướng tự nhiên trong việc lắng nghe, nâng đỡ tinh thần và hướng dẫn người khác vượt qua những giai đoạn bế tắc. Sự thuyết phục của bạn không đến từ quyền lực áp đặt mà đến từ chính sự nhất quán, tử tế trong cách bạn sống và làm việc mỗi ngày. Bài học quan trọng nhất của bạn là phân định rõ ranh giới giữa việc đồng hành hỗ trợ với việc gánh vác thay phần đời của người khác.',
    strengths: [
      'Khả năng điểm tựa tinh thần vững chãi: sự điềm đạm và thấu cảm của bạn giúp người đang khủng hoảng nhanh chóng lấy lại sự bình tĩnh.',
      'Năng khiếu đào tạo và kèm cặp: bạn đủ kiên nhẫn để hướng dẫn từng bước và khơi dậy sự tự tin ở những người mới bắt đầu.',
      'Uy tín từ sự chính trực: bạn nói đi đôi với làm, giữ chuẩn mực đạo đức rõ ràng nên dễ dàng tạo dựng niềm tin bền vững trong tập thể.',
    ],
    watchOut: [
      'Dễ ôm đồm nỗi buồn và rắc rối của quá nhiều người xung quanh vào lòng, dẫn đến kiệt quệ cả về thời gian lẫn năng lượng tinh thần.',
      'Đôi khi tự áp đặt tiêu chuẩn hy sinh quá cao cho bản thân rồi tự trách móc nặng nề khi mình không giúp được trọn vẹn.',
      'Vô tình làm người khác ỷ lại vì lúc nào bạn cũng sẵn sàng đứng ra giải quyết hậu quả thay cho họ.',
    ],
    advice: [
      'Mỗi khi hỗ trợ ai đó, hãy tập trung hướng dẫn phương pháp để họ tự đứng dậy xử lý vấn đề thay vì làm hộ từ đầu đến cuối.',
      'Thiết lập giới hạn rõ ràng về những việc bạn có thể giúp và những việc vượt quá khả năng hoặc trách nhiệm của mình trong từng giai đoạn.',
      'Chủ động xây dựng cho mình một không gian riêng để nạp lại năng lượng, bởi bạn chỉ có thể nâng đỡ người khác khi chính bạn đang vững vàng.',
    ],
    fields: ['Giáo dục, đào tạo và phát triển con người', 'Tâm lý trị liệu, tham vấn', 'Y tế, điều dưỡng, chăm sóc sức khoẻ', 'Hoạt động xã hội, cộng đồng', 'Xây dựng văn hoá tổ chức'],
  },
};

/* ===================== NĂM CÁ NHÂN ===================== */

const personalYear = {
  1: {
    title: 'Năm khởi động chu kỳ mới',
    keywords: ['Bắt đầu', 'Chủ động', 'Định hướng mới'],
    summary:
      'Năm cá nhân số 1 mở ra một chu kỳ chín năm hoàn toàn mới với trọng tâm là sự chủ động và tính tự quyết. Đây là thời điểm phù hợp nhất để bạn bắt tay triển khai những dự án riêng, học một kỹ năng mới hoặc thay đổi những thói quen cũ đã trì trệ. Những lựa chọn và nền móng bạn đặt xuống trong năm nay sẽ định hình hướng phát triển của bạn trong suốt nhiều năm tiếp theo. Thay vì chờ đợi mọi điều kiện hoàn hảo, sự dứt khoát bước đi bước đầu tiên sẽ mang lại lợi thế lớn nhất cho bạn.',
    theme: 'Trọng tâm của năm là tự mình khởi xướng và mở đường. Hãy dồn năng lượng vào việc bắt đầu những kế hoạch thực chất của riêng bạn.',
    doMore: [
      'Xác lập từ hai đến ba mục tiêu cốt lõi nhất của năm kèm theo lộ trình hành động cụ thể từng tháng.',
      'Bắt tay thực hiện ngay một dự định bạn đã trì hoãn từ lâu như học nâng cao chuyên môn, chuyển hướng công việc hoặc làm dự án độc lập.',
      'Rèn thói quen tự đưa ra quyết định dựa trên đánh giá của bản thân thay vì phụ thuộc quá nhiều vào sự đồng thuận của người xung quanh.',
    ],
    doLess: [
      'Bớt tâm lý chờ đợi tới lúc thật sự sẵn sàng, vì sự tự tin chỉ xuất hiện sau khi bạn đã bắt đầu làm thật.',
      'Bớt đem vạch xuất phát mới của mình ra so sánh với thành quả của những người đã đi trước nhiều năm.',
    ],
    byQuarter: [
      'Đánh giá lại toàn bộ bài học từ năm cũ, lọc bỏ những mục tiêu không còn phù hợp và chốt định hướng trọng tâm cho năm mới.',
      'Tập trung nguồn lực để khởi chạy các kế hoạch đã chọn, ưu tiên tạo ra đà chuyển động thực tế dù kết quả ban đầu còn nhỏ.',
      'Rà soát lại tiến độ giữa năm, mạnh dạn cắt bỏ những việc làm phân tán thời gian để dồn sức cho mục tiêu chính.',
      'Chuẩn bị tinh thần và củng cố những phần việc đang vận hành tốt để sẵn sàng bước sang năm số 2 thiên về sự kiên nhẫn và kết nối.',
    ],
  },

  2: {
    title: 'Năm củng cố và kết nối',
    keywords: ['Kiên nhẫn', 'Hợp tác', 'Bồi đắp chiều sâu'],
    summary:
      'Bước sang năm cá nhân số 2, nhịp độ mọi việc thường chậm lại so với năm trước để những kế hoạch bạn vừa khởi động có thời gian bén rễ. Đây không phải là lúc nóng vội ép tiến độ một mình, mà là giai đoạn vàng để xây dựng quan hệ đối tác, lắng nghe phản hồi và hoàn thiện các chi tiết còn thiếu sót. Sự tinh tế trong giao tiếp và khả năng phối hợp nhịp nhàng với người xung quanh sẽ mở ra những cánh cửa mà sức cá nhân khó tự làm được. Bạn chỉ cần giữ sự kiên trì và tránh để những cảm xúc nhạy cảm nhất thời làm xao nhãng.',
    theme: 'Trọng tâm của năm là sự kiên nhẫn và hợp tác. Đi cùng những người đồng hành phù hợp sẽ giúp công việc của bạn tiến vững chắc hơn.',
    doMore: [
      'Chủ động hâm nóng các mối quan hệ chất lượng và tìm kiếm những người có thế mạnh bổ khuyết cho điểm yếu của bạn.',
      'Dành thời gian rà soát, nâng cấp chất lượng từng khâu nhỏ trong công việc hoặc quy trình đang vận hành.',
      'Rèn kỹ năng lắng nghe và đàm phán win-win trong cả công việc lẫn đời sống cá nhân.',
    ],
    doLess: [
      'Bớt tâm lý sốt ruột muốn thấy kết quả đột phá ngay tức thì khi nền tảng chưa đủ độ chín.',
      'Bớt gật đầu nhận lời mọi yêu cầu vô lý chỉ vì ngại va chạm hoặc sợ làm mất lòng người khác.',
      'Bớt suy diễn quá mức trước những thái độ hoặc lời nói vô tình của người xung quanh.',
    ],
    byQuarter: [
      'Rà soát lại những dự án đã gieo từ năm trước để phân loại rõ việc nào cần tiếp tục đầu tư chăm sóc.',
      'Đẩy mạnh việc kết nối, trao đổi với cộng sự, khách hàng và lắng nghe kỹ các góp ý thực tế.',
      'Đi sâu vào tinh chỉnh chất lượng chuyên môn, vá lại những lỗ hổng nhỏ mà giai đoạn khởi động nhanh từng bỏ sót.',
      'Củng cố sự gắn kết với đội ngũ và người thân, chuẩn bị nền tảng vững vàng trước khi bước sang năm số 3 năng động hơn.',
    ],
  },

  3: {
    title: 'Năm mở rộng giao tiếp và sáng tạo',
    keywords: ['Biểu đạt', 'Sáng tạo', 'Mở rộng mạng lưới'],
    summary:
      'Năm cá nhân số 3 mang tới luồng sinh khí cởi mở, thúc đẩy bạn bước ra ngoài giao lưu và thể hiện năng lực bản thân rõ nét hơn. Những ý tưởng từng ấp ủ trong thời gian qua nay đã có cơ hội thuận lợi để trình bày, thử nghiệm và đưa tới tay nhiều người. Việc tích cực học hỏi, chia sẻ kiến thức hoặc mở rộng mạng lưới quan hệ xã hội trong năm nay thường mang lại những cơ hội hợp tác rất bất ngờ. Điểm duy nhất bạn cần lưu tâm là giữ sự tập trung, tránh để sự hào hứng kéo mình chạy theo quá nhiều hướng cùng lúc.',
    theme: 'Trọng tâm của năm là phát triển ý tưởng và mở rộng kết nối. Hãy mạnh dạn đưa tiếng nói cũng như sản phẩm của bạn ra thực tế.',
    doMore: [
      'Đầu tư xây dựng hình ảnh cá nhân hoặc công bố những sản phẩm, bài viết, dự án mang dấu ấn sáng tạo của riêng bạn.',
      'Tham gia các hội thảo chuyên môn, khoá học kỹ năng giao tiếp hoặc các cộng đồng có cùng mục tiêu phát triển.',
      'Thử nghiệm những phương pháp tiếp cận mới mẻ cho các bài toán công việc vốn đang đi vào lối mòn.',
    ],
    doLess: [
      'Bớt ôm đồm mở mới thêm hàng loạt kế hoạch trong khi các đầu việc hiện tại vẫn chưa đi đến đâu.',
      'Bớt chi tiêu cảm tính cho những cuộc vui xã giao hoặc những món đồ mua theo hứng nhất thời.',
      'Bớt phát ngôn vội vàng khi cảm xúc đang bốc đồng để tránh những hiểu lầm không đáng có.',
    ],
    byQuarter: [
      'Chọn lọc những ý tưởng khả thi nhất và xác định kênh truyền tải phù hợp để bắt đầu triển khai.',
      'Tăng cường giao tiếp, mở rộng mạng lưới quan hệ và đón nhận các cơ hội hợp tác mới.',
      'Thu gọn lại sự dàn trải, dồn sức hoàn thành dứt điểm các sản phẩm hoặc mục tiêu trọng tâm đã mở ra từ đầu năm.',
      'Đánh giá lại hiệu quả thực chất của các kết nối mới và chuẩn bị tâm thế kỷ luật cho năm số 4 tiếp theo.',
    ],
  },

  4: {
    title: 'Năm kỷ luật và kiện toàn nền tảng',
    keywords: ['Kỷ luật', 'Tối ưu quy trình', 'Vững chắc'],
    summary:
      'Sau giai đoạn mở rộng sôi nổi của năm số 3, năm cá nhân số 4 yêu cầu bạn quay về với sự thực tế, kỷ luật và tính hệ thống. Bạn sẽ cần dành nhiều tâm sức hơn để chuẩn hoá quy trình làm việc, kiểm soát chặt chẽ bài toán tài chính và rèn luyện chuyên môn cốt lõi. Dù nhịp sống năm nay có phần nghiêm túc và đòi hỏi nhiều nỗ lực bền bỉ, mọi viên gạch bạn xây chắc ở hiện tại sẽ là bệ phóng an toàn cho nhiều năm tới. Đi từng bước bài bản, không đốt cháy giai đoạn là chiến lược thông minh nhất trong năm này.',
    theme: 'Trọng tâm của năm là củng cố nội lực và thiết lập trật tự. Sự chỉn chu, kỷ luật hôm nay sẽ quyết định sức bền của bạn về sau.',
    doMore: [
      'Thiết lập bảng quản lý thu chi, tiết kiệm rõ ràng và rà soát lại toàn bộ các cam kết pháp lý, giấy tờ quan trọng.',
      'Đào sâu rèn luyện một kỹ năng chuyên môn thực chiến giúp nâng cao năng suất và giá trị công việc chính.',
      'Sắp xếp lại nhịp sinh hoạt, khám sức khoẻ định kỳ và duy trì thói quen vận động đều đặn.',
    ],
    doLess: [
      'Bớt tâm lý tìm đường tắt hoặc đầu tư mạo hiểm thiếu cơ sở dữ liệu chắc chắn.',
      'Bớt làm việc theo cảm hứng lúc vội vã lúc bỏ bê mà không có quy trình rõ ràng.',
      'Bớt cắt xén thời gian ngủ nghỉ tối thiểu để chạy theo khối lượng công việc.',
    ],
    byQuarter: [
      'Lập kế hoạch tổng thể cho cả năm với các con số định lượng và hạn chót cụ thể cho từng hạng mục.',
      'Tập trung thực thi đều đặn theo đúng kỷ luật đã đề ra, ưu tiên chất lượng và độ chính xác trong từng đầu việc.',
      'Kiểm tra lại sức khoẻ thể chất cũng như hiệu quả tài chính giữa năm để kịp thời điều chỉnh những chỗ chưa hợp lý.',
      'Hoàn tất việc chuẩn hoá nền tảng cá nhân, tạo điểm tựa vững chắc trước khi đón luồng gió dịch chuyển của năm số 5.',
    ],
  },

  5: {
    title: 'Năm dịch chuyển và nắm bắt cơ hội',
    keywords: ['Đổi mới', 'Linh hoạt', 'Mở rộng trải nghiệm'],
    summary:
      'Nằm ở điểm giữa của chu kỳ chín năm, năm cá nhân số 5 thường mang tới những bước ngoặt, cơ hội mới và nhu cầu bức thiết muốn thoát khỏi sự trì trệ cũ. Sau một năm số 4 rèn kỷ luật vất vả, đây là lúc bạn có không gian để thử nghiệm phương thức làm việc mới, mở rộng thị trường hoặc thực hiện những chuyến đi xa. Môi trường xung quanh có thể phát sinh nhiều thay đổi ngoài dự kiến, đòi hỏi bạn phải giữ tư duy linh hoạt để xoay chuyển tình thế. Bí quyết của năm nay là chủ động đón nhận cái mới nhưng vẫn giữ tỉnh táo trước những quyết định bốc đồng.',
    theme: 'Trọng tâm của năm là bứt phá khỏi lối mòn và linh hoạt nắm bắt cơ hội. Sự cởi mở học hỏi cái mới sẽ giúp bạn tiến rất nhanh.',
    doMore: [
      'Mạnh dạn ứng dụng công nghệ mới, phương pháp mới vào công việc để giải phóng sức lao động.',
      'Mở rộng không gian trải nghiệm qua các chuyến đi thực tế, dự án liên ngành hoặc tiếp xúc với những môi trường mới.',
      'Linh hoạt điều chỉnh kế hoạch khi thị trường hoặc hoàn cảnh thực tế mở ra hướng đi tốt hơn.',
    ],
    doLess: [
      'Bớt đưa ra các quyết định đập bỏ toàn bộ nền tảng cũ chỉ vì một phút chán nản nhất thời.',
      'Bớt vung tay quá trán cho những thú vui ngắn hạn hoặc các khoản đầu tư theo phong trào.',
      'Bớt hứa hẹn tràn lan khi chưa tính kỹ khả năng đáp ứng về mặt thời gian của bản thân.',
    ],
    byQuarter: [
      'Rà soát lại những điểm đang gây tắc nghẽn trong công việc hiện tại và xác định rõ lĩnh vực cần đổi mới.',
      'Thử nghiệm các hướng tiếp cận mới ở quy mô vừa phải để đánh giá mức độ hiệu quả thực tế.',
      'Mở rộng tối đa việc học hỏi, di chuyển và kết nối để thu nạp thêm góc nhìn cũng như cơ hội phát triển.',
      'Chắt lọc giữ lại những cải tiến mang lại giá trị thật và ổn định lại nhịp sinh hoạt để chuẩn bị vào năm số 6.',
    ],
  },

  6: {
    title: 'Năm gắn kết và chu toàn trách nhiệm',
    keywords: ['Gia đình', 'Trách nhiệm', 'Củng cố hậu phương'],
    summary:
      'Năm cá nhân số 6 kéo trọng tâm ưu tiên của bạn quay về với gia đình, những người thân thiết và các cam kết trách nhiệm lâu dài. Trong công việc cũng như cuộc sống riêng, bạn sẽ thấy mình cần dành nhiều tâm sức hơn để chăm lo cho đội ngũ cốt cán, sửa sang nơi ở hoặc giải quyết các nghĩa vụ đối với người thân. Đây là giai đoạn rất thuận lợi để thắt chặt các mối quan hệ bền vững và xây dựng uy tín qua sự tận tâm. Điều quan trọng là bạn cần giữ sự cân bằng để lòng tốt không biến thành sự ôm đồm quá sức.',
    theme: 'Trọng tâm của năm là củng cố hậu phương và thực hiện trọn vẹn các cam kết. Sự vững vàng từ những mối quan hệ gần gũi nhất sẽ tiếp sức cho bạn.',
    doMore: [
      'Dành thời gian chất lượng, cố định mỗi tuần cho gia đình và những người thực sự quan trọng với bạn.',
      'Cải thiện không gian sống và góc làm việc để tạo sự thoải mái, tái tạo năng lượng mỗi ngày.',
      'Chủ động đối thoại thẳng thắn, chân thành để tháo gỡ dứt điểm những hiểu lầm còn tồn đọng trong các mối quan hệ.',
    ],
    doLess: [
      'Bớt gánh vác thay phần trách nhiệm mà người khác hoàn toàn có thể tự mình làm được.',
      'Bớt áp đặt tiêu chuẩn cá nhân của bạn lên cách sống của những người thân xung quanh.',
      'Bớt hy sinh toàn bộ nhu cầu nghỉ ngơi của bản thân chỉ để làm vừa lòng tất cả mọi người.',
    ],
    byQuarter: [
      'Nhìn nhận lại các mối quan hệ trọng yếu và ưu tiên dành thời gian cho những nơi đang cần sự có mặt của bạn.',
      'Giải quyết gọn gàng các công việc liên quan đến nhà cửa, nơi ở hoặc các nghĩa vụ gia đình từng bị trì hoãn.',
      'Chú ý cân bằng lại sức khoẻ cá nhân, thiết lập ranh giới hợp lý giữa việc hỗ trợ người khác và việc chăm sóc chính mình.',
      'Tận hưởng sự gắn kết ấm áp bên người thân và chuẩn bị khoảng lặng cần thiết để bước vào năm số 7.',
    ],
  },

  7: {
    title: 'Năm chiêm nghiệm và đào sâu chuyên môn',
    keywords: ['Nghiên cứu sâu', 'Tĩnh lặng', 'Nâng cấp tư duy'],
    summary:
      'Năm cá nhân số 7 là khoảng lặng chiến lược trong chu kỳ chín năm để bạn tạm giảm tốc độ chạy đua bề nổi và quay vào nâng cấp chiều sâu nội lực. Bạn sẽ thấy mình có nhu cầu ở một mình nhiều hơn, muốn đọc sâu hơn và đặt lại câu hỏi về giá trị thực chất của những việc đang theo đuổi. Thay vì lo lắng khi thấy nhịp bên ngoài có vẻ trầm lắng, hãy tận dụng tối đa năm nay để mài sắc chuyên môn và rà soát lại định hướng dài hạn. Những gì bạn nghiên cứu và ngộ ra trong giai đoạn này chính là đòn bẩy quyết định cho bước tiến lớn ở năm số 8 kế tiếp.',
    theme: 'Trọng tâm của năm là học sâu và tự nhìn lại. Đây là giai đoạn mài sắc tư duy cũng như năng lực cốt lõi trước khi bứt phá.',
    doMore: [
      'Đầu tư thời gian cho một chương trình học chuyên sâu, nghiên cứu chuyên ngành hoặc rèn luyện kỹ năng khó.',
      'Duy trì thói quen ghi chép, phân tích lại những thành công và thất bại trong chặng đường sáu năm vừa qua.',
      'Chủ động dành những khoảng thời gian tách khỏi mạng xã hội và sự ồn ào để giữ sự minh mẫn cho tâm trí.',
    ],
    doLess: [
      'Bớt nôn nóng ép bản thân phải mở rộng quy mô ồ ạt hoặc kiếm lợi nhuận ngắn hạn bằng mọi giá.',
      'Bớt tham gia những buổi tụ tập xã giao hình thức làm tiêu hao năng lượng mà không mang lại giá trị thực.',
      'Bớt khép kín cực đoan tới mức cắt đứt giao tiếp với cả những người thân đang thực sự quan tâm tới bạn.',
    ],
    byQuarter: [
      'Xác định rõ những lỗ hổng kiến thức hoặc những câu hỏi lớn về định hướng sự nghiệp mà bạn cần lời giải.',
      'Tập trung hoàn toàn vào việc học tập, nghiên cứu, tìm gặp những chuyên gia có chiều sâu để mở rộng tầm nhìn.',
      'Dành thời gian nghỉ ngơi tĩnh dưỡng, kết hợp quan sát thực tế để kiểm nghiệm lại những kiến thức vừa thu nạp.',
      'Đúc kết toàn bộ những gì đã học được thành kế hoạch hành động sắc bén, sẵn sàng cho năm số 8 tăng tốc.',
    ],
  },

  8: {
    title: 'Năm tối ưu hiệu suất và thu hoạch',
    keywords: ['Sự nghiệp', 'Tài chính', 'Khẳng định năng lực'],
    summary:
      'Sau thời gian tích luỹ và mài sắc chuyên môn ở năm số 7, năm cá nhân số 8 đẩy các bài toán về sự nghiệp, hiệu suất và tài chính lên vị trí ưu tiên hàng đầu. Đây là giai đoạn những nỗ lực bền bỉ của bạn suốt các năm trước bắt đầu kết trái và mang lại sự ghi nhận xứng đáng. Bạn có nhiều cơ hội để đảm nhận trọng trách lớn hơn, đàm phán lại quyền lợi hoặc mở rộng quy mô kinh doanh thực tế. Sự chủ động, minh bạch và bản lĩnh quản trị nguồn lực chặt chẽ sẽ giúp bạn đạt được bước tiến rất dài trong năm nay.',
    theme: 'Trọng tâm của năm là thực thi quyết liệt và gặt hái thành quả. Hãy tự tin đứng ra cầm trịch những mục tiêu lớn của bạn.',
    doMore: [
      'Tổng hợp kết quả công việc bằng số liệu cụ thể để chủ động đề xuất thăng tiến, tăng thu nhập hoặc mở rộng dự án.',
      'Quản trị dòng tiền chặt chẽ: rà soát lại danh mục đầu tư, tối ưu chi phí và giải quyết dứt điểm các khoản nợ tồn đọng.',
      'Rèn luyện năng lực lãnh đạo, phân quyền và ra quyết định dựa trên hiệu quả thực chất.',
    ],
    doLess: [
      'Bớt chi tiêu phô trương hình thức bên ngoài vượt quá năng lực tài chính thực tế.',
      'Bớt thái độ cứng nhắc, áp đặt gây căng thẳng không cần thiết cho cộng sự và người thân.',
      'Bớt đánh đổi sức khoẻ nền tảng lấy những khoản lợi ích ngắn hạn.',
    ],
    byQuarter: [
      'Thiết lập các chỉ tiêu rõ ràng về doanh thu, thu nhập và vị trí công việc cần đạt được trong năm.',
      'Tăng tốc triển khai các dự án trọng điểm, chủ động nắm bắt cơ hội kinh doanh và đàm phán quyền lợi.',
      'Kiểm toán lại hiệu quả sử dụng vốn và thời gian, cắt giảm ngay những hạng mục đang gây thất thoát nguồn lực.',
      'Thu hoạch thành quả, chia sẻ lợi ích công bằng với những người đồng hành và chuẩn bị bước vào năm tổng kết số 9.',
    ],
  },

  9: {
    title: 'Năm hoàn tất và dọn đường',
    keywords: ['Tổng kết', 'Thanh lọc', 'Chuẩn bị chu kỳ mới'],
    summary:
      'Năm cá nhân số 9 khép lại trọn vẹn một hành trình chín năm để chuẩn bị mặt bằng cho vòng phát triển tiếp theo. Nhiệm vụ quan trọng nhất của bạn trong năm nay là giải quyết dứt điểm những dự án còn dang dở, đồng thời mạnh dạn buông bỏ những công việc, thói quen hoặc mối quan hệ đã không còn phù hợp. Việc một vài cánh cửa cũ tự nhiên khép lại trong giai đoạn này là quy luật tất yếu để giải phóng nguồn lực của bạn. Càng dọn dẹp gọn gàng và tổng kết sâu sắc bao nhiêu, bạn càng có đà bứt phá nhẹ nhàng bấy nhiêu khi bước sang năm số 1 kế tiếp.',
    theme: 'Trọng tâm của năm là hoàn tất và buông bỏ có chủ đích. Hãy làm gọn hành trang của mình trước khi bước vào chu kỳ mới.',
    doMore: [
      'Tập trung đóng gói và hoàn thành dứt điểm các cam kết, dự án, khoá học hoặc công nợ còn tồn đọng.',
      'Thanh lọc lại không gian sống, tài liệu làm việc và cắt giảm những đầu việc không còn mang lại giá trị.',
      'Chia sẻ lại kiến thức, kinh nghiệm bạn đã tích luỹ suốt chín năm qua để hỗ trợ những người đi sau.',
    ],
    doLess: [
      'Bớt vội vàng ký kết hoặc khởi động những dự án đầu tư dài hạn hoàn toàn mới vào dịp cuối năm.',
      'Bớt cố chấp níu kéo những công việc hay mối quan hệ đã bộc lộ rõ sự lệch pha không thể hàn gắn.',
      'Bớt giữ lại những sự tự trách hoặc hiềm khích cũ đã qua từ lâu.',
    ],
    byQuarter: [
      'Lập danh sách toàn bộ những việc còn tồn đọng và sắp xếp lộ trình giải quyết dứt điểm từng phần.',
      'Tiến hành thanh lọc công việc, dọn dẹp môi trường sống và chủ động dừng lại những hướng đi kém hiệu quả.',
      'Tổng kết lại các bài học lớn của cả chu kỳ chín năm, gửi lời tri ân tới những người đã từng hỗ trợ bạn.',
      'Dành thời gian nghỉ ngơi tái tạo năng lượng và phác thảo những ý tưởng mới để sẵn sàng khởi động vào năm số 1 tới.',
    ],
  },
};

/* ===================== SỐ SỨ MỆNH ===================== */

const expression = {
  1: {
    title: 'Tác phong tiên phong và tự chủ',
    keywords: ['Chủ động', 'Dẫn dắt', 'Độc lập'],
    summary:
      'Trong công việc thực tế, năng lực của bạn phát huy mạnh nhất khi được đứng ở vị trí mở đường và tự chịu trách nhiệm về kết quả. Khi tập thể cần một người đưa ra quyết định dứt khoát để phá vỡ thế bế tắc, bạn thường là người chủ động nhận lấy vai trò đó. Mọi người tin tưởng bạn ở sự nhanh nhạy, nói đi đôi với làm mà không cần ai phải đốc thúc. Thử thách lớn nhất trong tác phong của bạn là học cách lùi lại đúng lúc để tạo không gian cho cộng sự cùng phát huy.',
    strengths: [
      'Chuyển hoá nhanh từ bàn bạc sang hành động: kết thúc cuộc họp không lâu, bạn đã có sẵn phương án triển khai cụ thể.',
      'Vững vàng khi phải tự quyết định trong những tình huống mới mẻ chưa có sẵn tiền lệ.',
      'Khả năng tự mày mò, làm chủ công cụ và phương pháp mới mà không cần chờ đào tạo cầm tay chỉ việc.',
    ],
    watchOut: [
      'Dễ nảy sinh tâm lý bức bối khi phải làm việc dưới sự điều hành của một người thiếu quyết đoán hoặc chậm chạp hơn mình.',
      'Vì luôn nhìn về mục tiêu tiếp theo nên đôi khi bạn quên ghi nhận kịp thời công sức đóng góp của các thành viên trong nhóm.',
    ],
    advice: [
      'Trong các dự án tập thể, hãy chủ động uỷ quyền trọn vẹn một vài hạng mục cho đồng đội và đóng vai trò người hỗ trợ phía sau.',
      'Duy trì thói quen gửi lời khen cụ thể, đúng trọng tâm tới từng cộng sự sau mỗi cột mốc hoàn thành công việc.',
    ],
    fields: ['Quản lý dự án, trưởng nhóm', 'Khởi nghiệp kinh doanh', 'Phát triển thị trường, bán hàng', 'Chuyên gia độc lập', 'Quản trị sản phẩm'],
  },

  2: {
    title: 'Tác phong kết nối và phối hợp',
    keywords: ['Khéo léo', 'Hợp tác', 'Chu đáo'],
    summary:
      'Thế mạnh làm việc rõ nét nhất của bạn nằm ở khả năng điều phối mối quan hệ và giữ cho guồng máy tập thể vận hành êm thấm. Bạn có biệt tài lắng nghe nhu cầu của từng bên, tìm ra điểm giao thoa để đi tới thoả thuận mà không làm sứt mẻ tình cảm. Những chi tiết hậu cần hoặc tâm lý nhân sự mà người khác dễ bỏ sót lại luôn được bạn xử lý rất gọn gàng. Điểm bạn cần rèn thêm là sự dứt khoát bảo vệ công sức của chính mình để không bị chìm khuất ở hậu trường.',
    strengths: [
      'Đàm phán mềm mỏng nhưng hiệu quả: đứng trước đối tác khó tính, bạn vẫn giữ được thái độ ôn hoà mà không đánh mất quyền lợi cốt lõi.',
      'Khả năng hỗ trợ và gắn kết đội ngũ: bạn giúp những thành viên mới hoặc cá tính trái ngược nhau dễ dàng phối hợp làm việc.',
      'Sự cẩn trọng, tỉ mỉ trong việc rà soát câu chữ, dữ liệu và các khâu chuẩn bị trước khi đưa sản phẩm ra ngoài.',
    ],
    watchOut: [
      'Vì quen nhường phần nổi cho người khác nên đôi khi đóng góp thực chất của bạn không được đánh giá đúng mức.',
      'Xu hướng né tránh các cuộc tranh luận trực diện, vô tình để những bất đồng nhỏ âm ỉ thành vấn đề lớn.',
    ],
    advice: [
      'Lưu trữ rõ ràng các kết quả công việc bạn đã thực hiện để làm cơ sở trao đổi minh bạch trong các kỳ đánh giá năng lực.',
      'Khi phát hiện điểm bất hợp lý trong nhóm, hãy chủ động nêu vấn đề sớm trên tinh thần xây dựng thay vì im lặng tự sửa một mình.',
    ],
    fields: ['Quản trị nhân sự', 'Chăm sóc khách hàng chuyên nghiệp', 'Trợ lý điều hành, thư ký', 'Tư vấn, hoà giải thương mại', 'Phát triển quan hệ đối tác'],
  },

  3: {
    title: 'Tác phong truyền cảm hứng và sáng tạo',
    keywords: ['Hoạt ngôn', 'Sáng tạo', 'Thuyết phục'],
    summary:
      'Bạn tạo ra giá trị lớn nhất trong công việc thông qua khả năng ngôn ngữ, trình bày ý tưởng và tìm kiếm góc nhìn mới. Cùng một thông tin chuyên môn, khi qua cách viết hoặc thuyết trình của bạn sẽ trở nên sinh động và dễ thuyết phục người nghe hơn hẳn. Sự nhiệt huyết của bạn cũng là chất xúc tác giúp kéo tinh thần cả nhóm lên cao trong những giai đoạn căng thẳng. Thử thách thực tế của bạn là rèn tính kỷ luật về thời hạn để mỗi ý tưởng bay bổng đều được đóng gói thành sản phẩm hoàn chỉnh.',
    strengths: [
      'Kỹ năng thuyết trình và kể chuyện lôi cuốn: bạn biết cách đặt vấn đề chạm đúng mối quan tâm của người nghe ngay từ những phút đầu.',
      'Luôn có phương án sáng tạo để làm mới những quy trình, sản phẩm hoặc chiến dịch truyền thông đã cũ.',
      'Khả năng giao thiệp rộng, nhanh chóng phá vỡ khoảng cách với khách hàng và đối tác mới.',
    ],
    watchOut: [
      'Dễ bị cuốn vào quá nhiều ý tưởng mới cùng lúc, dẫn đến việc phân tán nguồn lực và chậm trễ tiến độ cam kết.',
      'Đôi khi phản ứng khá nhạy cảm trước những lời phê bình thẳng thắn về đứa con tinh thần của mình.',
    ],
    advice: [
      'Luôn gắn mỗi ý tưởng sáng tạo với một bảng tiến độ конкрет và hoàn thành bản nháp đầu tiên trước khi cầu toàn chi tiết.',
      'Tập nhìn nhận các góp ý trái chiều như dữ liệu để tối ưu sản phẩm thay vì coi đó là sự phủ nhận năng lực cá nhân.',
    ],
    fields: ['Truyền thông, quảng cáo, PR', 'Biên tập, sáng tạo nội dung', 'Thiết kế đồ hoạ, đa phương tiện', 'Đào tạo, giảng dạy', 'Nghệ thuật biểu diễn, dẫn chương trình'],
  },

  4: {
    title: 'Tác phong chuẩn hoá và kỷ luật',
    keywords: ['Hệ thống', 'Tỉ mỉ', 'Đáng tin cậy'],
    summary:
      'Trong bất kỳ tổ chức nào, bạn luôn là trụ cột đảm bảo cho các kế hoạch trên giấy được thực thi chuẩn xác ngoài đời thực. Bạn làm việc dựa trên quy trình rõ ràng, số liệu cụ thể và sự kiểm soát chất lượng chặt chẽ từ đầu tới cuối. Khi giao những hạng mục đòi hỏi sự tỉ mỉ, kiên trì cho bạn, cấp trên và đồng nghiệp hiếm khi phải lo lắng về sai sót. Điều bạn cần lưu ý là giữ sự cởi mở trước những cải tiến mới để tính nguyên tắc không biến thành sự bảo thủ.',
    strengths: [
      'Biến sự hỗn độn thành trật tự: bạn rất giỏi thiết lập quy trình, biểu mẫu và hệ thống lưu trữ giúp cả nhóm làm việc hiệu quả hơn.',
      'Phong độ làm việc ổn định: chất lượng đầu ra của bạn được duy trì đồng đều nhờ tính kỷ luật chứ không phụ thuộc vào cảm hứng.',
      'Khả năng chịu đựng tốt những công việc đòi hỏi độ chính xác cao và thời gian theo đuổi dài hạn.',
    ],
    watchOut: [
      'Đôi khi quá thận trọng rà soát từng chi tiết nhỏ khiến tốc độ phản ứng bị chậm trong những tình huống cần quyết nhanh.',
      'Tâm lý ngại thay đổi, dễ phản kháng ban đầu khi tổ chức áp dụng công cụ hoặc phương thức làm việc mới.',
    ],
    advice: [
      'Định kỳ mỗi quý, hãy chủ động rà soát lại quy trình làm việc của chính mình để cắt bỏ những bước thủ tục không còn cần thiết.',
      'Tập phân loại công việc theo mức độ quan trọng: những việc cần độ chính xác tuyệt đối thì làm kỹ, những việc thử nghiệm nhỏ thì ưu tiên tốc độ.',
    ],
    fields: ['Kế toán, kiểm toán, tài chính', 'Kỹ thuật, xây dựng', 'Quản lý vận hành, chuỗi cung ứng', 'Kỹ thuật phần mềm, kiểm thử', 'Hành chính, pháp chế doanh nghiệp'],
  },

  5: {
    title: 'Tác phong ứng biến và đột phá',
    keywords: ['Linh hoạt', 'Đa nhiệm', 'Nhạy bén thực tế'],
    summary:
      'Bạn phát huy tối đa năng lực ở những vị trí đòi hỏi sự linh hoạt, xoay xở nhanh và liên tục tiếp xúc với luồng thông tin mới. Những công việc cố định một chỗ với quy trình cứng nhắc rất dễ làm thui chột sự nhạy bén tự nhiên của bạn. Ngược lại, khi được đặt vào môi trường thị trường biến động hoặc cần xử lý tình huống phát sinh, bạn luôn tìm ra giải pháp cực kỳ tháo vát. Bài toán lớn nhất của bạn là rèn sự kiên định để đào sâu chuyên môn thay vì dừng lại ở việc biết mỗi thứ một ít.',
    strengths: [
      'Ứng biến tình huống xuất sắc: khi kế hoạch ban đầu gặp sự cố bất ngờ, bạn bình tĩnh xoay chuyển phương án thay thế ngay tại chỗ.',
      'Sức thuyết phục tự nhiên trong giao thương nhờ sự hoạt bát, hiểu tâm lý khách hàng và nắm bắt xu hướng nhanh.',
      'Khả năng kết nối thông tin và con người từ nhiều lĩnh vực khác nhau để tạo ra cơ hội hợp tác mới.',
    ],
    watchOut: [
      'Dễ giảm sút nhiệt huyết khi dự án qua giai đoạn đột phá ban đầu và bước vào khâu duy trì lặp đi lặp lại.',
      'Đôi khi nhận lời ôm quá nhiều đầu việc cùng lúc vì đánh giá quá lạc quan quỹ thời gian của mình.',
    ],
    advice: [
      'Xác định rõ một đến hai mũi nhọn chuyên môn mang lại giá trị cao nhất để kiên trì rèn luyện thành lợi thế cạnh tranh dài hạn.',
      'Sử dụng công cụ quản lý lịch trình và danh sách việc cần làm hằng ngày để giữ kỷ luật hoàn thành cho tới bước cuối cùng.',
    ],
    fields: ['Kinh doanh, phát triển thị trường', 'Tổ chức sự kiện, du lịch', 'Báo chí, truyền thông hiện trường', 'Marketing, thương mại điện tử', 'Tư vấn độc lập'],
  },

  6: {
    title: 'Tác phong tận tâm và nâng chuẩn dịch vụ',
    keywords: ['Trách nhiệm', 'Chu đáo', 'Thẩm mỹ hài hoà'],
    summary:
      'Trong công việc, bạn tạo dựng uy tín bằng sự tận tâm, chu đáo và tinh thần trách nhiệm cao với tập thể cũng như khách hàng. Bạn luôn đặt mình vào vị trí của người sử dụng sản phẩm hoặc người nhận dịch vụ để chăm chút từng trải nghiệm nhỏ nhất. Ở đâu có sự tham gia của bạn, ở đó có sự chỉn chu về mặt hình thức lẫn sự ấm áp trong cách đối đãi con người. Thử thách của bạn là thiết lập ranh giới công việc rõ ràng để lòng nhiệt tình không dẫn tới tình trạng quá tải.',
    strengths: [
      'Nhạy bén với trải nghiệm con người: bạn nhận ra ngay những điểm nhỏ cần tinh chỉnh để khách hàng hoặc đồng nghiệp cảm thấy hài lòng hơn.',
      'Đáng tin cậy trong việc giữ chữ tín và bảo vệ chất lượng sản phẩm, dịch vụ của cả đội ngũ.',
      'Có con mắt thẩm mỹ hài hoà trong việc thiết kế, bài trí không gian và trình bày ấn phẩm.',
    ],
    watchOut: [
      'Hay tự nguyện gánh thêm phần việc của đồng nghiệp vì cả nể, dẫn đến việc chính của mình bị ảnh hưởng tiến độ.',
      'Dễ cảm thấy hụt hẫng, tủi thân nếu sự hy sinh thầm lặng của mình không được tập thể nhận ra và ghi nhận.',
    ],
    advice: [
      'Phân định rõ trách nhiệm của từng vị trí trong nhóm: hỗ trợ đồng đội lúc khẩn cấp nhưng không làm thay công việc thường nhật của họ.',
      'Khi cần thêm nguồn lực hoặc sự ghi nhận cho công sức đã bỏ ra, hãy trao đổi thẳng thắn bằng số liệu và kết quả với cấp quản lý.',
    ],
    fields: ['Giáo dục, đào tạo', 'Y tế, chăm sóc sức khoẻ', 'Thiết kế nội thất, thời trang, ẩm thực', 'Quản trị khách sạn, dịch vụ khách hàng', 'Phát triển văn hoá doanh nghiệp'],
  },

  7: {
    title: 'Tác phong chuyên gia và phân tích chiều sâu',
    keywords: ['Phân tích logic', 'Chuyên môn sâu', 'Độc lập'],
    summary:
      'Giá trị đóng góp lớn nhất của bạn nằm ở các công việc đòi hỏi tư duy phân tích độc lập, nghiên cứu chuyên sâu và kiểm định chất lượng. Bạn không thích làm việc kiểu hời hợt chạy theo số lượng mà luôn đào tới tận gốc rễ nguyên lý trước khi đưa ra giải pháp. Trong một đội ngũ, bạn thường là người phát hiện ra những rủi ro tiềm ẩn hoặc lỗi logic mà số đông dễ bỏ qua. Để tiến xa hơn, bạn cần rèn thêm kỹ năng diễn đạt những phân tích chuyên môn phức tạp thành ngôn ngữ dễ hiểu cho mọi người.',
    strengths: [
      'Tư duy phản biện và phân tích dữ liệu sắc bén: mọi đề xuất của bạn đều dựa trên cơ sở tìm hiểu kỹ lưỡng, có sức nặng chuyên môn cao.',
      'Làm việc độc lập cực kỳ hiệu quả trong những dự án phức tạp cần sự tập trung cao độ.',
      'Khả năng rà soát lỗi hệ thống và nhìn ra quy luật vận hành ngầm phía sau các con số.',
    ],
    watchOut: [
      'Đôi khi gặp khó khăn trong việc tóm lược vấn đề cho những người không có cùng nền tảng chuyên môn kỹ thuật.',
      'Xu hướng trì hoãn việc bàn giao kết quả chỉ vì muốn dành thêm thời gian tìm hiểu cho thật hoàn hảo.',
    ],
    advice: [
      'Luyện cách trình bày báo cáo theo cấu trúc đi thẳng vào kết luận và giải pháp trước, sau đó mới đính kèm phần phân tích chi tiết phía sau.',
      'Thống nhất rõ mốc thời gian nghiệm thu cho từng giai đoạn nghiên cứu để đảm bảo tiến độ chung của cả dự án.',
    ],
    fields: ['Nghiên cứu và phát triển chuyên sâu', 'Phân tích dữ liệu, kinh tế, tài chính', 'Kỹ thuật phần mềm, an ninh mạng', 'Y dược, công nghệ sinh học', 'Tư vấn chiến lược, biên khảo'],
  },

  8: {
    title: 'Tác phong điều hành và tối ưu hiệu quả',
    keywords: ['Quản trị', 'Định hướng kết quả', 'Quyết đoán'],
    summary:
      'Năng lực thực thi của bạn bộc lộ mạnh mẽ nhất khi giải quyết các bài toán về tổ chức nhân sự, quản lý ngân sách và mở rộng quy mô. Bạn có cái nhìn rất thực tế về hiệu quả đầu tư: bỏ ra bao nhiêu thời gian, chi phí và thu về kết quả cụ thể gì. Đứng trước các tình huống khủng hoảng hoặc đàm phán thương mại căng thẳng, bạn giữ được sự bình tĩnh và bản lĩnh cầm trịch. Thử thách của bạn là kết hợp sự sắc bén về mặt con số với sự mềm mỏng trong nghệ thuật dùng người.',
    strengths: [
      'Thiết lập mục tiêu định lượng rõ ràng và biết cách tổ chức bộ máy để đẩy kế hoạch về đích đúng hạn.',
      'Bản lĩnh đàm phán vững vàng, biết định giá đúng giá trị sức lao động và sản phẩm của đội ngũ.',
      'Khả năng nhìn ra cơ hội thương mại và tối ưu hoá hiệu suất sử dụng nguồn lực trong tổ chức.',
    ],
    watchOut: [
      'Đôi lúc quá đặt nặng chỉ tiêu hiệu suất mà gây áp lực nghẹt thở lên tâm lý của các thành viên trong nhóm.',
      'Dễ rơi vào tâm lý muốn kiểm soát mọi quyết định từ lớn đến nhỏ vì chưa thực sự yên tâm về cấp dưới.',
    ],
    advice: [
      'Khi đưa ra các quyết sách lớn, hãy luôn đánh giá song song cả bài toán lợi nhuận ngắn hạn lẫn sự gắn kết dài hạn của đội ngũ nhân sự.',
      'Dành thời gian đào tạo và trao quyền theo từng cấp độ cho cộng sự để giải phóng bản thân khỏi các công việc sự vụ.',
    ],
    fields: ['Quản trị và điều hành doanh nghiệp', 'Tài chính, ngân hàng, đầu tư', 'Kinh doanh thương mại, bất động sản', 'Tư vấn luật, mua bán sáp nhập', 'Giám đốc vận hành, quản lý dự án'],
  },

  9: {
    title: 'Tác phong định hướng tầm nhìn và giá trị chung',
    keywords: ['Bao quát', 'Nhân văn', 'Truyền động lực'],
    summary:
      'Bạn phát huy năng lực xuất sắc nhất trong những công việc mang lại tác động tích cực cho tập thể rộng lớn hoặc giải quyết các bài toán con người. Thay vì bị cuốn vào các chi tiết vụn vặt, bạn có khả năng nhìn tổng thể và kết nối mọi người cùng hướng về một mục tiêu có ý nghĩa. Phong thái làm việc rộng lượng, văn minh giúp bạn dễ dàng hợp tác với nhiều tầng lớp và nền văn hoá khác nhau. Điều bạn cần chú ý là bổ sung tính kỷ luật tài chính và các mốc nghiệm thu cụ thể cho từng dự án.',
    strengths: [
      'Khả năng truyền tải tầm nhìn và ý nghĩa công việc, giúp đội ngũ tìm thấy động lực làm việc từ bên trong.',
      'Làm việc hiệu quả trong môi trường đa văn hoá hoặc các dự án đòi hỏi sự thấu hiểu xã hội sâu sắc.',
      'Giải quyết các xung đột lợi ích bằng góc nhìn công tâm, hướng tới sự phát triển bền vững của cả tập thể.',
    ],
    watchOut: [
      'Đôi khi đặt mục tiêu quá rộng và lý tưởng hoá khiến kế hoạch thiếu tính khả thi khi đưa vào vận hành thực tế.',
      'Hay xem nhẹ việc tính toán chi phí, lợi nhuận khiến các dự án tâm huyết dễ bị hụt hơi về nguồn lực.',
    ],
    advice: [
      'Luôn cụ thể hoá mọi mục tiêu lớn thành các chỉ số đo lường được trong từng tháng và từng quý.',
      'Phối hợp chặt chẽ với những cộng sự giỏi về quản trị tài chính và vận hành chi tiết để giữ cho dự án đi đúng đường ray thực tế.',
    ],
    fields: ['Quản trị tổ chức phi lợi nhuận, xã hội', 'Giáo dục, đào tạo và phát triển nhân lực', 'Nghệ thuật, văn hoá, truyền thông đại chúng', 'Y tế cộng đồng, môi trường', 'Đối ngoại, hợp tác quốc tế'],
  },

  11: {
    title: 'Tác phong cố vấn và khơi mở xu hướng',
    keywords: ['Nhạy bén xu hướng', 'Truyền cảm hứng', 'Thấu suốt'],
    summary:
      'Trong công việc, bạn đóng góp giá trị đặc biệt qua khả năng nắm bắt nhanh tâm lý con người và nhận diện sớm các xu hướng mới. Bạn thường nhìn ra điểm mấu chốt của một vấn đề truyền thông, nhân sự hay sản phẩm trước khi nó biểu hiện rõ thành số liệu. Khi đảm nhận vai trò cố vấn, đào tạo hoặc thuyết trình, sự tinh tế của bạn tạo ra sức thuyết phục rất lớn. Để năng lực này phát huy trọn vẹn, bạn cần kết hợp nguồn cảm hứng nhạy bén với một quy trình làm việc có kỷ luật.',
    strengths: [
      'Nắm bắt tâm lý khách hàng và xu hướng thị trường rất nhạy, giúp định hướng nội dung hoặc sản phẩm chạm đúng nhu cầu thật.',
      'Khả năng cố vấn, khích lệ tinh thần và gỡ rối tâm lý cho các thành viên trong đội ngũ.',
      'Tạo ra những ý tưởng đột phá mang chiều sâu giá trị chứ không chỉ chạy theo hình thức bề nổi.',
    ],
    watchOut: [
      'Hiệu suất làm việc dễ bị sụt giảm mạnh nếu phải xử lý quá nhiều thủ tục hành chính vụn vặt hoặc môi trường thiếu sự tôn trọng.',
      'Đôi khi quá tin vào cảm nhận chủ quan mà bỏ qua bước kiểm chứng thực nghiệm ở quy mô nhỏ.',
    ],
    advice: [
      'Hợp tác chặt chẽ với những người mạnh về lập kế hoạch và quản lý tiến độ để chuyển hoá nhanh các ý tưởng của bạn thành kết quả thực tế.',
      'Trước khi đề xuất một hướng đi mới, hãy chuẩn bị sẵn các dữ kiện thực tế và ba bước thử nghiệm đầu tiên để thuyết phục tập thể.',
    ],
    fields: ['Cố vấn chiến lược, thương hiệu', 'Đào tạo, huấn luyện phát triển cá nhân', 'Sáng tạo nội dung, biên kịch, nghệ thuật', 'Nghiên cứu hành vi người dùng', 'Truyền thông, quan hệ công chúng'],
  },

  22: {
    title: 'Tác phong kiến trúc sư hệ thống',
    keywords: ['Tầm nhìn chiến lược', 'Tổ chức quy mô', 'Thực thi bền bỉ'],
    summary:
      'Được ký hiệu là 22/4, chỉ số này cho thấy bạn có năng lực thiết kế và vận hành những dự án có quy mô lớn, đòi hỏi sự kết hợp giữa tầm nhìn dài hạn và tính chuẩn xác từng chi tiết. Bạn không chỉ nhìn ra mục tiêu xa mà còn biết cách dựng lên bộ khung quy trình để cả một tập thể hàng chục, hàng trăm người cùng chạy theo trật tự. Những bài toán hóc búa về mặt cấu trúc tổ chức hay hạ tầng kỹ thuật là nơi bạn thể hiện rõ nhất bản lĩnh của mình. Thử thách của bạn là biết phân bổ áp lực và chấp nhận mức sai số cho phép trong quá trình vận hành.',
    strengths: [
      'Năng lực thiết kế quy trình và cấu trúc hệ thống có tính mở rộng cao, phục vụ được mục tiêu dài hạn nhiều năm.',
      'Sự kiên trì và thực tế khi giải quyết các bài toán lớn đòi hỏi phối hợp đa nguồn lực.',
      'Làm cầu nối hiệu quả giữa nhóm hoạch định chiến lược và đội ngũ thực thi kỹ thuật trực tiếp.',
    ],
    watchOut: [
      'Tự gây áp lực quá lớn lên bản thân và tập thể vì tiêu chuẩn cầu toàn trong mọi hạng mục.',
      'Dễ rơi vào tình trạng ôm đồm mọi khâu trọng yếu vì sợ bàn giao cho người khác sẽ làm giảm chất lượng hệ thống.',
    ],
    advice: [
      'Xây dựng hệ thống tài liệu hướng dẫn và tiêu chuẩn kiểm soát chất lượng rõ ràng để có thể tự tin chuyển giao việc cho đội ngũ.',
      'Áp dụng phương pháp triển khai cuốn chiếu: hoàn thiện và đưa vào vận hành từng phân đoạn thực tế thay vì chờ toàn bộ hệ thống hoàn hảo mới ra mắt.',
    ],
    fields: ['Kiến trúc hệ thống, hạ tầng công nghệ', 'Quản trị chương trình và dự án quy mô lớn', 'Quy hoạch đô thị, xây dựng công trình', 'Điều hành chuỗi cung ứng, sản xuất', 'Quản trị chiến lược doanh nghiệp'],
  },

  33: {
    title: 'Tác phong dẫn dắt và bồi dưỡng con người',
    keywords: ['Đào tạo', 'Nâng đỡ', 'Chuẩn mực đạo đức'],
    summary:
      'Được ký hiệu là 33/6, chỉ số này thể hiện năng lực nổi trội của bạn trong việc đào tạo, gắn kết và phát triển con người bằng chính sự gương mẫu của bản thân. Trong tập thể, bạn thường là người định hình văn hoá làm việc tử tế, tạo ra môi trường an toàn để mỗi cá nhân dám học hỏi và phát huy hết khả năng. Lời góp ý của bạn có sức nặng vì mọi người cảm nhận rõ sự chân thành và trách nhiệm phía sau. Điểm cần lưu ý nhất là bạn phải giữ ranh giới hợp lý để không gánh thay phần việc chuyên môn của cấp dưới.',
    strengths: [
      'Năng lực kèm cặp, hướng dẫn nhân sự rất bài bản, biết cách khích lệ đúng lúc và chỉ ra điểm cần sửa một cách tinh tế.',
      'Xây dựng được sự gắn kết và niềm tin vững chắc trong đội ngũ nhờ tác phong chính trực, nhất quán.',
      'Giữ được sự điềm tĩnh và góc nhìn nhân văn khi xử lý các khủng hoảng nhân sự hoặc dịch vụ khách hàng.',
    ],
    watchOut: [
      'Dễ dành quá nhiều thời gian đi giải quyết tâm lý hoặc làm hộ việc cho người khác đến mức quá tải lịch trình cá nhân.',
      'Cảm thấy áy náy khi phải đưa ra các quyết định kỷ luật hoặc cắt giảm nhân sự không đáp ứng yêu cầu công việc.',
    ],
    advice: [
      'Xác định rõ nguyên tắc quản trị: sự tử tế trong công việc là tạo điều kiện và tiêu chuẩn rõ ràng để nhân sự tự trưởng thành, không phải bao bọc vô điều kiện.',
      'Giới hạn số lượng người bạn trực tiếp kèm cặp trong mỗi giai đoạn để đảm bảo chất lượng hướng dẫn cũng như sức khoẻ của chính bạn.',
    ],
    fields: ['Giáo dục, đào tạo và phát triển tổ chức', 'Tham vấn tâm lý, chăm sóc sức khoẻ', 'Quản trị nhân sự và văn hoá doanh nghiệp', 'Điều hành tổ chức xã hội, giáo dục cộng đồng', 'Quản lý dịch vụ khách hàng cao cấp'],
  },
};

/* ===================== SỐ LINH HỒN ===================== */

const soul = {
  1: {
    title: 'Khát khao tự chủ và khẳng định bản lĩnh',
    keywords: ['Tự quyết', 'Độc lập', 'Khẳng định giá trị'],
    summary:
      'Ẩn sâu bên dưới mọi lựa chọn của bạn là nhu cầu mạnh mẽ được tự mình cầm lái cuộc sống và công việc. Bạn cảm thấy cực kỳ ngột ngạt nếu phải sống theo sự sắp đặt sẵn của người khác, kể cả khi sự sắp đặt đó mang lại sự an nhàn. Niềm vui trọn vẹn nhất đến với bạn khi tự tay chinh phục được một mục tiêu khó và được ghi nhận bằng chính thực lực của mình. Dù ít khi nói ra thành lời, bạn luôn mong muốn có một vị thế độc lập để không bao giờ phải phụ thuộc vào ai.',
    strengths: [
      'Động lực tự thân rất lớn, luôn chủ động tìm cách vươn lên mà không cần người ngoài thúc ép.',
      'Có lập trường và tiêu chuẩn cá nhân rõ ràng, hiếm khi bị tâm lý đám đông làm lung lay.',
      'Đủ can đảm để chọn hướng đi riêng phù hợp với năng lực thực tế của bản thân.',
    ],
    watchOut: [
      'Vì sĩ diện hoặc sợ bị đánh giá là yếu kém nên bạn rất ngại mở lời nhờ giúp đỡ ngay cả khi đang gặp khó khăn thật.',
      'Dễ nảy sinh sự bức bối ngầm nếu rơi vào môi trường làm việc hoặc mối quan hệ có tính kiểm soát cao.',
    ],
    advice: [
      'Luôn duy trì cho mình ít nhất một dự án cá nhân hoặc một mảng công việc mà ở đó bạn có toàn quyền quyết định.',
      'Tập nhìn nhận việc hỏi ý kiến chuyên gia hoặc nhờ hỗ trợ đúng lúc là cách tối ưu nguồn lực thông minh chứ không phải sự phụ thuộc.',
    ],
  },

  2: {
    title: 'Khát khao bình yên và sự thấu hiểu chân thành',
    keywords: ['Gắn bó', 'Hài hoà', 'Được thấu hiểu'],
    summary:
      'Điều làm bạn cảm thấy an tâm và hạnh phúc nhất không phải là những cuộc đua tranh thắng thua, mà là sự hoà thuận, tin cậy trong các mối quan hệ thân thiết. Bạn luôn mong có những người đồng hành đủ tinh tế để chia sẻ buồn vui thường ngày mà không cần phải phòng bị hay giải thích dài dòng. Những môi trường đầy rẫy sự đấu đá,nói xấu hoặc xung đột gay gắt thường rút cạn năng lượng tinh thần của bạn rất nhanh. Sâu bên trong, bạn coi trọng sự tử tế, êm ấm hơn bất kỳ danh hiệu hào nhoáng nào.',
    strengths: [
      'Trân trọng và biết cách vun đắp cho các mối quan hệ bền chặt, lâu dài bằng sự chân thành.',
      'Nhạy bén với cảm xúc của người thương yêu, luôn mang lại cảm giác dịu dàng, an toàn cho người bên cạnh.',
      'Biết tìm kiếm và trân quý niềm vui từ những khoảnh khắc bình dị, gần gũi trong đời sống hằng ngày.',
    ],
    watchOut: [
      'Hay tự kìm nén mong muốn thật sự của bản thân để chiều theo ý người khác vì sợ xảy ra bất đồng.',
      'Dễ rơi vào cảm giác trống trải, bất an khi phải làm việc độc lập hoặc ở một mình trong thời gian dài.',
    ],
    advice: [
      'Tập thói quen nói rõ nhu cầu và mong muốn của bạn một cách nhẹ nhàng, vì người thân không thể lúc nào cũng tự đoán trúng ý bạn.',
      'Xây dựng những sở thích cá nhân độc lập để bạn luôn cảm thấy bình an, trọn vẹn ngay cả trong những khoảng thời gian ở một mình.',
    ],
  },

  3: {
    title: 'Khát khao tự do biểu đạt và niềm vui sống',
    keywords: ['Sáng tạo', 'Tự do chia sẻ', 'Được lắng nghe'],
    summary:
      'Động lực ngầm thúc đẩy bạn mỗi ngày là nhu cầu được nói ra suy nghĩ của mình, được sáng tạo và tận hưởng bầu không khí sống động, tích cực. Bạn cảm thấy mình thực sự sống khi được chia sẻ ý tưởng, kể chuyện hoặc tạo ra những sản phẩm mang dấu ấn cá nhân. Một nhịp sống khô khan, cứng nhắc chỉ xoay quanh quy trình lặp đi lặp lại rất dễ làm tinh thần bạn héo mòn. Sâu trong lòng, bạn luôn mong có được những người nghe cởi mở, trân trọng các ý tưởng mới mẻ của bạn mà không vội vàng phán xét.',
    strengths: [
      'Khả năng giữ tinh thần lạc quan và tìm ra góc nhìn thú vị ngay cả trong những giai đoạn nhiều áp lực.',
      'Đời sống tinh thần phong phú, luôn dồi dào cảm hứng để làm mới không gian sống và công việc.',
      'Mang lại nguồn năng lượng tích cực, ấm áp cho những người thân thiết xung quanh.',
    ],
    watchOut: [
      'Xu hướng dùng sự vui vẻ bề nổi để lảng tránh việc phải đối diện và giải quyết những nỗi buồn sâu bên trong.',
      'Dễ tụt cảm hứng đột ngột nếu tâm huyết chia sẻ của mình gặp phải thái độ thờ ơ hoặc dội gáo nước lạnh từ người khác.',
    ],
    advice: [
      'Duy trì một kênh cá nhân như sổ tay, blog hoặc một dự án nghệ thuật nhỏ để bạn tự do sáng tạo mà không phụ thuộc vào lời khen chê bên ngoài.',
      'Cho phép bản thân được lắng lại và tâm sự thẳng thắn với người tin cậy mỗi khi gặp chuyện buồn thay vì cố gồng mình tỏ ra ổn.',
    ],
  },

  4: {
    title: 'Khát khao sự ổn định và nền tảng vững chắc',
    keywords: ['An toàn', 'Trật tự', 'Minh bạch'],
    summary:
      'Nhu cầu cốt lõi nhất bên trong bạn là cảm giác an toàn, rõ ràng và mọi thứ nằm trong tầm kiểm soát dự tính được. Bạn chỉ thực sự ngủ ngon khi biết kế hoạch công việc đã vào guồng, tài chính có khoản dự phòng chắc chắn và các mối quan hệ minh bạch, giữ đúng cam kết. Những sự thay đổi đột ngột phút chót hoặc môi trường làm việc mập mờ, thiếu quy tắc thường làm bạn căng thẳng hơn người khác rất nhiều. Sâu thẳm bên trong, mong ước lớn nhất của bạn là xây dựng được một cuộc sống vững chãi, không bấp bênh cho mình và gia đình.',
    strengths: [
      'Ý thức trách nhiệm và sự cẩn trọng cao trong việc bảo vệ sự an toàn tài chính cũng như đời sống gia đình.',
      'Sống chân thực, rõ ràng, luôn tôn trọng các nguyên tắc và lời hứa đã cam kết.',
      'Kiên trì tích luỹ từng bước để tạo dựng những giá trị bền vững theo thời gian.',
    ],
    watchOut: [
      'Vì quá ưu tiên sự an toàn tuyệt đối nên đôi khi bạn tự đóng cánh cửa trước những cơ hội phát triển mới có độ rủi ro vừa phải.',
      'Hay lo xa và tự tạo áp lực tâm lý trước những kịch bản bất trắc chưa chắc đã xảy ra trong thực tế.',
    ],
    advice: [
      'Xây dựng một quỹ tài chính dự phòng đủ cho sáu tháng sinh hoạt để tâm lý bạn luôn có điểm tựa vững vàng khi cần thử nghiệm điều mới.',
      'Mỗi khi lo lắng về một thay đổi sắp tới, hãy viết rõ phương án xử lý cho tình huống xấu nhất ra giấy để giải phóng đầu óc khỏi sự bất an mơ hồ.',
    ],
  },

  5: {
    title: 'Khát khao tự do trải nghiệm và khám phá',
    keywords: ['Tự do', 'Trải nghiệm mới', 'Không gò bó'],
    summary:
      'Sâu bên trong, điều bạn sợ nhất không phải là sự vất vả mà là cảm giác cuộc đời mình bị đóng khung trong một kịch bản tẻ nhạt, biết trước từng ngày. Bạn luôn khao khát có được không gian tự do để tự chọn cách làm việc, đi tới những vùng đất mới và trải nghiệm nhiều khía cạnh khác nhau của cuộc sống. Những quy định kiểm soát giờ giấc cứng nhắc hay sự thúc ép phải sống theo khuôn mẫu số đông dễ khiến bạn muốn vùng vẫy thoát ra. Bạn chỉ thực sự tràn đầy sinh lực khi cảm thấy mình vẫn đang học được điều gì đó mới mẻ mỗi ngày.',
    strengths: [
      'Tinh thần phóng khoáng, cởi mở đón nhận những góc nhìn và lối sống đa dạng mà không định kiến.',
      'Biết cách làm cho cuộc sống cá nhân luôn tươi mới thông qua việc học hỏi và dịch chuyển.',
      'Không bị nỗi sợ thay đổi trói buộc khi cần bước ra khỏi những hoàn cảnh đã lỗi thời.',
    ],
    watchOut: [
      'Tâm lý e ngại các cam kết gắn bó dài hạn vì lo sợ điều đó sẽ tước mất quyền tự do cá nhân của mình.',
      'Đôi khi chạy theo những kích thích mới mẻ bên ngoài chỉ để khoả lấp sự thiếu kiên nhẫn ở bên trong.',
    ],
    advice: [
      'Chủ động thiết kế lối sống và công việc có tính linh hoạt cao về không gian, thời gian thay vì liên tục đập bỏ công việc đang làm.',
      'Hiểu rằng sự tự do bền vững nhất luôn đi kèm với năng lực tự kỷ luật và tự chủ về mặt tài chính.',
    ],
  },

  6: {
    title: 'Khát khao mái ấm gắn kết và sự chở che',
    keywords: ['Gia đình', 'Yêu thương', 'Sự thuộc về'],
    summary:
      'Động lực sâu thẳm nhất trong lòng bạn là xây dựng và gìn giữ một mái ấm bình yên, nơi mọi người thực sự thương yêu và chăm lo cho nhau. Bạn cảm thấy cuộc sống có ý nghĩa trọn vẹn nhất khi sự quan tâm, vun vén của mình mang lại niềm vui và sự ổn định cho người thân. Dù bên ngoài xã hội có đạt được bao nhiêu thành tích, nếu hậu phương gia đình lục đục hoặc thiếu vắng sự sẻ chia, bạn vẫn thấy trống trải. Trong thâm tâm, bạn luôn mong muốn trở thành điểm tựa đáng tin cậy cho những người mình trân quý.',
    strengths: [
      'Tình cảm chân thành, sâu sắc và luôn thể hiện sự quan tâm qua những hành động chăm sóc thực tế.',
      'Biết cách tạo dựng không khí sum vầy, ấm cúng, giúp người thân luôn muốn quay về.',
      'Sẵn sàng sẻ chia, nâng đỡ người khác vượt qua những giai đoạn khó khăn với tất cả sự tận tuỵ.',
    ],
    watchOut: [
      'Dễ đặt toàn bộ niềm vui và giá trị của bản thân phụ thuộc vào thái độ hoặc sự hài lòng của người thân.',
      'Cảm thấy áy náy, có lỗi vô lý mỗi khi ưu tiên thời gian và tiền bạc cho nhu cầu riêng của chính mình.',
    ],
    advice: [
      'Ghi nhớ rằng việc bạn giữ cho bản thân khoẻ mạnh, vui vẻ chính là món quà lớn nhất giúp bầu không khí gia đình luôn nhẹ nhàng.',
      'Học cách tôn trọng khoảng không gian riêng và quyền tự quyết định của người thân thay vì lo lắng bao bọc quá mức.',
    ],
  },

  7: {
    title: 'Khát khao sự tĩnh lặng và hiểu biết bản chất',
    keywords: ['Chiều sâu nội tâm', 'Sự thật', 'Không gian riêng'],
    summary:
      'Bên dưới vẻ ngoài giao tiếp thường ngày, bạn luôn cần một khoảng không gian riêng tư tuyệt đối để suy ngẫm và nạp lại năng lượng. Bạn không hứng thú với những giá trị hào nhoáng bề nổi mà luôn khao khát hiểu thấu bản chất thật của con người, công việc và cuộc sống. Một lịch trình phải giao tiếp xã giao liên tục từ sáng tới tối mà không có lấy một giờ yên tĩnh sẽ làm bạn kiệt sức rất nhanh. Trong các mối quan hệ, bạn chỉ cần một vài người thực sự thấu hiểu và tôn trọng chiều sâu tư tưởng của nhau.',
    strengths: [
      'Đời sống nội tâm độc lập, phong phú, hoàn toàn tự tìm thấy niềm vui trong việc đọc, nghiên cứu và chiêm nghiệm một mình.',
      'Thái độ sống trung thực, trọng thực chất và không bị cuốn theo những trào lưu phù phiếm của đám đông.',
      'Có trực giác và sự thấu hiểu sâu sắc về quy luật tâm lý cũng như nguyên lý vận hành của sự việc.',
    ],
    watchOut: [
      'Xu hướng tự cô lập bản thân và đóng cửa lòng mỗi khi gặp chuyện thất vọng hoặc tổn thương tình cảm.',
      'Đôi khi quá khắt khe và hoài nghi khiến người muốn quan tâm thật lòng cũng cảm thấy khó bước vào thế giới của bạn.',
    ],
    advice: [
      'Thiết lập một góc không gian yên tĩnh cố định tại nhà và thông báo rõ nhu cầu cần thời gian riêng của bạn để người thân thấu hiểu.',
      'Mở lòng chia sẻ những suy ngẫm hoặc trăn trở của bạn với một người bạn đủ tin cậy để suy nghĩ không bị luẩn quẩn một chiều.',
    ],
  },

  8: {
    title: 'Khát khao thành tựu lớn và vị thế độc lập',
    keywords: ['Thành tựu thực chất', 'Tự chủ tài chính', 'Vị thế'],
    summary:
      'Động lực mạnh mẽ nhất thúc đẩy bạn từ bên trong là khát vọng làm nên những thành tựu cụ thể, có quy mô và đạt được sự tự chủ vững vàng về tài chính. Bạn không bằng lòng với một cuộc sống chỉ vừa đủ qua ngày mà luôn muốn thử sức ở những sân chơi lớn hơn để khẳng định năng lực. Cảm giác nhìn thấy một dự án kinh doanh tăng trưởng hoặc một mục tiêu khó được chinh phục mang lại cho bạn sự thoả mãn sâu sắc. Sâu trong lòng, bạn muốn có đủ thực lực và nguồn lực để bảo vệ những người mình thương yêu trước mọi biến cố.',
    strengths: [
      'Ý chí vươn lên rất mạnh, luôn biến áp lực và nghịch cảnh thành động lực để bứt phá.',
      'Nhìn nhận thẳng thắn, thực tế về giá trị của đồng tiền cũng như công sức lao động.',
      'Khát khao xây dựng những nền tảng vật chất và sự nghiệp vững chắc, lâu dài.',
    ],
    watchOut: [
      'Dễ rơi vào cảm giác bứt rứt, tự coi nhẹ bản thân trong những giai đoạn thu nhập hoặc công việc chưa đạt kỳ vọng.',
      'Thói quen ngầm so sánh tốc độ thành công của mình với người khác dẫn đến căng thẳng tâm lý kéo dài.',
    ],
    advice: [
      'Tự định nghĩa rõ thước đo thành công toàn diện của riêng bạn, trong đó có cả sự bình an nội tâm và sức khoẻ chứ không chỉ là con số tài khoản.',
      'Cho phép bản thân ghi nhận và tận hưởng những cột mốc thành quả đã đạt được thay vì lập tức tự ép mình vào cuộc đua tiếp theo.',
    ],
  },

  9: {
    title: 'Khát khao sống có ý nghĩa và cống hiến',
    keywords: ['Giá trị nhân văn', 'Sẻ chia', 'Lòng trắc ẩn'],
    summary:
      'Điều làm tâm hồn bạn thực sự thoả mãn là biết rằng sự tồn tại và công việc của mình đang góp phần làm cho cuộc sống của người khác tốt đẹp hơn. Nếu một công việc chỉ mang lại thu nhập cao nhưng hoàn toàn xoay quanh sự tính toán thiệt hơn nhỏ nhặt, bạn sẽ sớm cảm thấy trống rỗng. Bạn dễ đồng cảm sâu sắc trước những mảnh đời khó khăn và luôn có thôi thúc tự nhiên muốn đứng ra nâng đỡ, sẻ chia. Sâu thẳm bên trong, bạn mong muốn sống một cuộc đời rộng lượng và để lại những giá trị tử tế cho cộng đồng.',
    strengths: [
      'Tấm lòng trắc ẩn chân thành, luôn hướng tới những điều thiện lành và công bằng trong cuộc sống.',
      'Khả năng vị tha, bao dung lớn, ít khi giữ sự thù hằn hay tính toán chi li với người khác.',
      'Tìm thấy nguồn năng lượng bền bỉ khi được làm những việc mang lại lợi ích chung cho tập thể.',
    ],
    watchOut: [
      'Dễ tiêu hao quá nhiều tâm sức và tiền bạc để lo chuyện bao đồng trong khi nhu cầu cơ bản của bản thân lại bị bỏ bê.',
      'Hay rơi vào trạng thái buồn nản, bi quan khi chứng kiến sự thực dụng hoặc bất công trong thực tế xã hội.',
    ],
    advice: [
      'Chọn một lĩnh vực đóng góp xã hội phù hợp nhất với chuyên môn và nguồn lực của bạn để làm một cách bền bỉ, có trọng tâm.',
      'Học cách mở lòng đón nhận sự giúp đỡ và lời cảm ơn từ người khác để dòng chảy cho đi và nhận lại luôn cân bằng.',
    ],
  },

  11: {
    title: 'Khát khao sự đồng điệu tinh thần và chiều sâu tâm thức',
    keywords: ['Đồng điệu sâu', 'Trực giác', 'Truyền cảm hứng'],
    summary:
      'Sâu bên trong, bạn luôn tìm kiếm sự kết nối chân thật ở tầng sâu của tâm hồn và tư tưởng chứ không mặn mà với những hào nhoáng vật chất bề nổi. Bạn cực kỳ nhạy cảm với cái đẹp, nghệ thuật và những biến chuyển tinh tế trong bầu không khí tâm lý giữa người với người. Bạn mong muốn cuộc sống và lời nói của mình có thể khơi dậy sự thức tỉnh, niềm tin và điều tử tế nơi người đối diện. Chính vì chuẩn mực tinh thần cao đó, đôi khi bạn cảm thấy lạc lõng giữa những môi trường sống quá vội vã và thực dụng.',
    strengths: [
      'Khả năng thấu cảm và nhận diện vẻ đẹp tinh thần trong những điều giản dị nhất của đời sống.',
      'Sống chân thật với tiếng nói lương tâm và trực giác nhạy bén của bản thân.',
      'Truyền đi sự bình an và nguồn cảm hứng sống tích cực cho những người có duyên tiếp xúc sâu với bạn.',
    ],
    watchOut: [
      'Dễ bị kiệt sức về mặt cảm xúc khi phải tiếp xúc liên tục với những năng lượng tiêu cực, phàn nàn hoặc xung đột.',
      'Đôi khi cảm thấy cô đơn vì khó tìm được người thực sự hiểu hết những suy tư nhạy cảm trong lòng mình.',
    ],
    advice: [
      'Duy trì các thói quen giúp làm dịu hệ thần kinh mỗi ngày như đi bộ giữa thiên nhiên, tập thở sâu hoặc viết nhật ký.',
      'Chấp nhận sự khác biệt về mức độ nhạy cảm của mỗi người để không tự làm khổ mình khi người khác chưa hiểu hết ý bạn.',
    ],
  },

  22: {
    title: 'Khát khao kiến tạo di sản thực chất và bền vững',
    keywords: ['Di sản lâu bền', 'Kiến tạo quy mô', 'Giá trị thực tế'],
    summary:
      'Được ký hiệu là 22/4, khát vọng sâu kín nhất của bạn là xây dựng nên những công trình, tổ chức hoặc hệ thống có giá trị sử dụng lâu dài cho nhiều người. Bạn không tìm thấy sự thoả mãn ở những thành công ngắn hạn mang tính thời vụ mà luôn hướng tới những gì có nền móng vững chắc qua năm tháng. Trong bạn vừa có ước mơ vươn tới tầm ảnh hưởng lớn, vừa có nhu cầu kiểm soát thực tế từng bước đi cho thật chắc chắn. Đôi khi chính sức nặng của khát vọng lớn này khiến bạn tự đặt mình vào trạng thái làm việc căng như dây đàn.',
    strengths: [
      'Sự kết hợp hiếm có giữa lý tưởng phụng sự rộng lớn và tư duy xây dựng thực tế, bài bản.',
      'Ý chí bền bỉ, không ngại đầu tư thời gian hàng chục năm cho một mục tiêu xứng đáng.',
      'Mong muốn tạo ra những giá trị vật chất và hệ thống mang lại lợi ích thiết thực cho xã hội.',
    ],
    watchOut: [
      'Luôn cảm thấy những gì mình đã làm được vẫn còn quá nhỏ bé, dẫn đến tâm lý không bao giờ cho phép mình nghỉ ngơi trọn vẹn.',
      'Dễ bỏ quên niềm vui sống ở hiện tại vì đầu óc lúc nào cũng bận tính toán cho các kế hoạch dài hạn phía trước.',
    ],
    advice: [
      'Ghi nhận giá trị của từng giai đoạn nhỏ trên hành trình dài, bởi mọi công trình lớn đều được ghép lại từ những phần việc hoàn chỉnh mỗi ngày.',
      'Dành thời gian nuôi dưỡng đời sống tình cảm cá nhân để tâm hồn luôn có độ mềm mại bên cạnh những mục tiêu kỷ luật.',
    ],
  },

  33: {
    title: 'Khát khao nâng đỡ và chữa lành vô điều kiện',
    keywords: ['Thấu cảm sâu sắc', 'Che chở', 'Phụng sự con người'],
    summary:
      'Được ký hiệu là 33/6, nhu cầu tinh thần cốt lõi của bạn là được lan toả sự ấm áp, che chở và giúp những người xung quanh vượt qua nỗi đau hoặc sự bế tắc. Bạn có khả năng đồng cảm tự nhiên tới mức nỗi buồn của người thân hay cộng sự cũng chạm trực tiếp vào lòng bạn. Niềm hạnh phúc sâu sắc nhất đến với bạn khi nhìn thấy một người từng tổn thương, yếu thế lấy lại được nụ cười và sự vững vàng. Tuy nhiên, để giữ được ngọn lửa bao dung đó lâu dài, bạn buộc phải học cách bảo vệ sức khoẻ tinh thần của chính mình.',
    strengths: [
      'Tấm lòng nhân hậu, rộng mở, luôn sẵn sàng lắng nghe và nâng đỡ người khác mà không toan tính.',
      'Tạo ra cảm giác bình an, tin cậy tuyệt đối cho những ai đang cần một chỗ dựa tinh thần.',
      'Sống có trách nhiệm sâu sắc với các giá trị đạo đức và tình cảm gia đình, cộng đồng.',
    ],
    watchOut: [
      'Dễ mang theo những câu chuyện buồn và gánh nặng tâm lý của người khác về nhà khiến bản thân mất ngủ, suy nhược.',
      'Thường xuyên xếp nhu cầu nghỉ ngơi và cảm xúc riêng của mình xuống vị trí cuối cùng.',
    ],
    advice: [
      'Tập thói quen tách bạch cảm xúc sau mỗi cuộc trò chuyện hỗ trợ: bạn có thể thương và giúp người khác hết lòng nhưng không sống thay cuộc đời của họ.',
      'Chủ động tìm kiếm những hoạt động và những mối quan hệ mà ở đó chính bạn cũng được lắng nghe, chăm sóc và tiếp thêm sức mạnh.',
    ],
  },
};

/* ===================== SỐ NHÂN CÁCH ===================== */

const personality = {
  1: {
    title: 'Phong thái độc lập và dứt khoát',
    keywords: ['Tự tin', 'Thẳng thắn', 'Rõ ràng'],
    summary:
      'Trong những lần tiếp xúc đầu tiên, bạn tạo ấn tượng là một người tự chủ, có chính kiến rõ ràng và không thích sự vòng vo. Cách bạn đặt câu hỏi, trả lời phỏng vấn hay đưa ra quan điểm đều đi thẳng vào trọng tâm vấn đề. Nhờ tác phong nhanh gọn đó, người đối diện dễ dàng nhớ tới bạn và tin tưởng khi cần giao việc độc lập. Tuy nhiên, nếu chưa kịp trò chuyện sâu, một số người có thể cảm thấy bạn hơi sắc lạnh hoặc tạo khoảng cách.',
    strengths: [
      'Tạo dấu ấn cá nhân rõ nét ngay từ buổi gặp đầu, không bị hoà lẫn giữa đám đông.',
      'Toát ra sự tự tin, quyết đoán của người có khả năng tự chịu trách nhiệm.',
      'Giao tiếp mạch lạc, nói thẳng ý chính giúp tiết kiệm thời gian cho cả hai bên.',
    ],
    watchOut: [
      'Gương mặt hoặc giọng nói lúc tập trung dễ làm người mới quen hiểu lầm là bạn đang khó chịu hoặc kiêu ngạo.',
      'Cách phản hồi quá trực diện đôi khi làm những người có tính cách nhạy cảm cảm thấy bị khớp.',
    ],
    advice: [
      'Chủ động mở đầu cuộc trò chuyện bằng một câu hỏi thăm nhẹ nhàng về đối phương để làm mềm bầu không khí.',
      'Khi cần đưa ra ý kiến phản biện với người mới hợp tác, hãy ghi nhận điểm hợp lý của họ trước rồi mới nêu đề xuất của bạn.',
    ],
  },

  2: {
    title: 'Phong thái lịch thiệp và dễ gần',
    keywords: ['Ôn hoà', 'Biết lắng nghe', 'Tinh tế'],
    summary:
      'Ấn tượng đầu tiên bạn mang lại cho người đối diện là sự nhẹ nhàng, lịch sự và rất tôn trọng người nghe. Bạn không bao giờ cố giành phần nói hay áp đặt câu chuyện, nhờ vậy những người mới gặp thường cảm thấy thoải mái và dễ mở lòng với bạn. Trong môi trường công sở hay giao dịch, vẻ ngoài điềm đạm của bạn giúp tháo gỡ nhanh sự căng thẳng ban đầu. Điểm cần lưu ý là phong thái quá hiền hoà đôi khi khiến những người thích lấn lướt đánh giá thấp sự kiên định bên trong bạn.',
    strengths: [
      'Tạo thiện cảm và sự an tâm ngay từ vài phút trò chuyện đầu tiên.',
      'Cư xử khéo léo, tinh tế, biết điều chỉnh nhịp điệu giao tiếp phù hợp với từng hoàn cảnh.',
      'Dễ được người khác tin cậy chia sẻ thông tin thật hoặc tìm đến nhờ cậy hỗ trợ.',
    ],
    watchOut: [
      'Trong những buổi đàm phán hoặc phỏng vấn cạnh tranh, bạn dễ bị nhìn nhận là hơi thiếu sự quyết liệt.',
      'Vẻ ngoài dễ chịu khiến người khác hay tự tiện nhờ vả thêm việc vì mặc định bạn sẽ không từ chối.',
    ],
    advice: [
      'Trong các buổi họp hoặc phỏng vấn quan trọng, hãy chuẩn bị trước các luận điểm chính và trình bày với âm lượng rõ ràng, dứt khoát.',
      'Duy trì ánh nhìn thẳng và tư thế ngồi vững chãi để thể hiện rằng sự lịch thiệp của bạn luôn đi kèm với bản lĩnh riêng.',
    ],
  },

  3: {
    title: 'Phong thái cởi mở và cuốn hút',
    keywords: ['Hoạt ngôn', 'Duyên dáng', 'Năng lượng tích cực'],
    summary:
      'Ngay từ lần gặp đầu tiên, bạn thường thu hút sự chú ý nhờ lối nói chuyện có duyên, biểu cảm linh hoạt và nguồn năng lượng tươi sáng. Bạn rất giỏi phá vỡ sự ngượng ngập ban đầu bằng một câu nhận xét thông minh hoặc một câu chuyện vừa đủ vui vẻ. Người xung quanh dễ có cảm tình với bạn vì ở cạnh bạn không khí luôn thoải mái, tự nhiên. Dù vậy, nếu không tiết chế đúng lúc, vẻ hoạt bát bề ngoài đôi khi làm người khác chưa nhìn thấy hết độ chín chắn và chiều sâu chuyên môn của bạn.',
    strengths: [
      'Khả năng bắt chuyện và làm quen cực kỳ tự nhiên trong các sự kiện hoặc môi trường mới.',
      'Có gu ăn mặc và cách thể hiện bản thân sáng sủa, tạo ấn tượng trẻ trung, linh hoạt.',
      'Giúp người đối diện nhanh chóng cởi bỏ tâm lý phòng bị để cuộc trao đổi diễn ra thuận lợi.',
    ],
    watchOut: [
      'Ở những bối cảnh đòi hỏi tính nghi thức nghiêm trang, sự thoải mái quá mức dễ bị hiểu lầm là thiếu sự chuẩn bị kỹ.',
      'Khi tâm lý hồi hộp, bạn dễ nói lan man sang nhiều chủ đề làm loãng thông điệp chính cần truyền đạt.',
    ],
    advice: [
      'Trong các cuộc gặp công việc, hãy đan xen sự duyên dáng tự nhiên với những con số và phân tích chuyên môn sắc gọn.',
      'Tập chừa những khoảng dừng ngắn sau khi nói để lắng nghe phản hồi của đối phương thay vì tự mình lấp đầy toàn bộ cuộc trò chuyện.',
    ],
  },

  4: {
    title: 'Phong thái chỉn chu và đáng tin cậy',
    keywords: ['Nghiêm túc', 'Đúng mực', 'Chắc chắn'],
    summary:
      'Khi mới tiếp xúc, bạn để lại ấn tượng rất rõ về một người đàng hoàng, đúng giờ và làm việc có nguyên tắc. Từ trang phục gọn gàng cho đến cách trả lời đi thẳng vào dữ kiện thực tế, mọi thứ ở bạn đều toát lên sự chuẩn bị kỹ lưỡng. Đối tác hoặc nhà tuyển dụng thường cảm thấy yên tâm rất nhanh vì biết bạn là kiểu người nói được làm được, không hứa suông. Tuy nhiên, sự nghiêm ngắn quá mức lúc ban đầu đôi khi làm người khác cảm thấy bạn hơi khô khan và ngại bắt chuyện xã giao.',
    strengths: [
      'Tạo dựng uy tín chuyên nghiệp rất nhanh trong các buổi phỏng vấn, ký kết hoặc làm việc với đối tác.',
      'Toát ra sự cẩn trọng, chín chắn khiến người khác tin tưởng giao phó những công việc quan trọng.',
      'Lời nói ngắn gọn, rõ ràng, có căn cứ thực tế chứ không tô vẽ màu mè.',
    ],
    watchOut: [
      'Dễ tạo cảm giác hơi cứng nhắc hoặc khắt khe khi mới gặp lần đầu.',
      'Đồng nghiệp mới hoặc cấp dưới có thể ngại chia sẻ các ý tưởng táo bạo vì sợ bạn đánh giá.',
    ],
    advice: [
      'Mở đầu các buổi gặp gỡ bằng nụ cười thoải mái và vài câu trò chuyện đời thường trước khi đi thẳng vào nội dung công việc.',
      'Khi lắng nghe ý kiến mới, hãy giữ biểu cảm cởi mở và đặt câu hỏi tìm hiểu thêm để người đối diện thấy bạn dễ tiếp cận hơn.',
    ],
  },

  5: {
    title: 'Phong thái năng động và phóng khoáng',
    keywords: ['Linh hoạt', 'Hiện đại', 'Cởi mở'],
    summary:
      'Người khác khi mới gặp thường nhận thấy ở bạn sự nhanh nhẹn, phóng khoáng và tinh thần cởi mở với mọi điều mới mẻ. Bạn mang lại cảm giác của một người có nhiều trải nghiệm thực tế, dễ dàng thích nghi với bất kỳ chủ đề hay nhóm người nào. Nhờ phong thái tự nhiên không câu nệ hình thức, bạn kết nối với người lạ rất nhanh mà không tạo cảm giác gượng gạo. Mặt trái cần lưu ý là đôi khi sự linh hoạt quá mức khiến những người thiên về truyền thống lo ngại rằng bạn thiếu sự gắn bó lâu dài.',
    strengths: [
      'Tạo bầu không khí hiện đại, sảng khoái và thu hút sự tò mò ngay từ lần đầu trò chuyện.',
      'Hoà nhập nhanh chóng vào các tập thể mới hoặc những buổi gặp gỡ đa ngành nghề.',
      'Phản xạ giao tiếp nhạy bén, ứng답 linh hoạt trước những câu hỏi bất ngờ.',
    ],
    watchOut: [
      'Trong mắt những nhà tuyển dụng hoặc đối tác khó tính, bạn có thể bị nghi ngại về tính kiên trì với các công việc dài hạn.',
      'Cách nói chuyện bộc trực, nhanh nhảu đôi lúc dễ làm lộ sự thiếu kiên nhẫn với các thủ tục quy trình.',
    ],
    advice: [
      'Khi trao đổi về công việc, hãy chủ động nhấn mạnh vào những dự án bạn đã kiên trì theo đuổi đến kết quả cuối cùng để tạo sự tin cậy.',
      'Chú ý giữ chuẩn mực đúng giờ và hoàn thành gọn các cam kết nhỏ ngay từ những lần hợp tác đầu tiên.',
    ],
  },

  6: {
    title: 'Phong thái ấm áp và chu đáo',
    keywords: ['Thân thiện', 'Đáng tin', 'Biết quan tâm'],
    summary:
      'Ấn tượng ban đầu bạn để lại cho người xung quanh là sự gần gũi, chỉn chu và rất có trách nhiệm. Ngay trong lần đầu gặp gỡ, cách bạn để ý tới những chi tiết nhỏ như rót nước, hỏi thăm hay sắp xếp chỗ ngồi đã khiến người đối diện cảm thấy được tôn trọng. Mọi người thường có xu hướng tin tưởng và dễ tìm đến bạn để nhờ hỗ trợ khi ở trong một tập thể mới. Điểm bạn cần để ý là vẻ ngoài quá tận tuỵ đôi khi làm người khác mặc định bạn sẽ luôn nhường nhịn hoặc nhận phần việc vất vả về mình.',
    strengths: [
      'Mang lại cảm giác an tâm, ấm áp và dễ tạo dựng thiện cảm với nhiều lứa tuổi khác nhau.',
      'Ngoại hình và tác phong luôn giữ được sự tươm tất, lịch sự, hài hoà với hoàn cảnh.',
      'Dễ dàng tạo dựng lòng tin trong các lĩnh vực dịch vụ, giáo dục, tư vấn hoặc chăm sóc khách hàng.',
    ],
    watchOut: [
      'Dễ bị những người thiếu ý thức tận dụng lòng tốt để đùn đẩy thêm các phần việc hậu cần không tên.',
      'Vì trông quá hiền và chu đáo nên đôi khi các đề xuất mang tính đột phá, góc cạnh của bạn ít được chú ý đúng mức.',
    ],
    advice: [
      'Giữ sự nhiệt tình vừa phải trong những lần đầu tiếp xúc và chỉ nhận hỗ trợ khi đã nắm rõ phạm vi công việc.',
      'Khi phát biểu trong cuộc họp, hãy trình bày thẳng vào giải pháp và số liệu để khẳng định năng lực chuyên môn bên cạnh sự chu đáo.',
    ],
  },

  7: {
    title: 'Phong thái điềm tĩnh và có chiều sâu',
    keywords: ['Chín chắn', 'Kín đáo', 'Quan sát sắc sảo'],
    summary:
      'Trong lần đầu tiếp xúc, bạn thường xuất hiện với vẻ ngoài điềm đạm, kiệm lời và quan sát nhiều hơn là vội vã thể hiện bản thân. Bạn không thích những màn chào hỏi ồn ào mà giữ một khoảng cách lịch sự để đánh giá tình hình trước khi lên tiếng. Chính sự tĩnh lặng và ánh nhìn tập trung đó tạo cho bạn phong thái của một người có chiều sâu chuyên môn, nói câu nào chắc câu đó. Tuy nhiên, nếu không chú ý, sự kín tiếng này rất dễ bị người mới quen hiểu lầm là thái độ lạnh nhạt hoặc khó gần.',
    strengths: [
      'Toát ra vẻ chững chạc, trí thức, tạo sự nể trọng trong các môi trường học thuật hoặc chuyên môn kỹ thuật.',
      'Giữ được phong thái bình tĩnh, làm chủ cảm xúc tốt ngay cả trong những buổi làm việc căng thẳng.',
      'Mỗi khi bạn phát biểu, người nghe thường tập trung chú ý vì biết bạn đã suy nghĩ kỹ trước khi nói.',
    ],
    watchOut: [
      'Người mới gặp thường cảm thấy ngại bắt chuyện trước vì không đoán được thái độ của bạn.',
      'Sự im lặng quan sát của bạn đôi khi vô tình gây áp lực tâm lý cho người đang trình bày đối diện.',
    ],
    advice: [
      'Tập phản hồi bằng cử chỉ gật đầu khích lệ hoặc đặt một vài câu hỏi ngắn để người đối diện biết bạn vẫn đang lắng nghe tích cực.',
      'Chủ động giới thiệu ngắn gọn về lĩnh vực mình quan tâm khi vào nhóm mới để mở đường cho những cuộc trò chuyện có chiều sâu.',
    ],
  },

  8: {
    title: 'Phong thái bản lĩnh và chuyên nghiệp',
    keywords: ['Chuyên nghiệp', 'Quyết đoán', 'Có sức nặng'],
    summary:
      'Khi bước vào một cuộc gặp, bạn tự nhiên toát ra phong thái của người nắm vững cuộc chơi, tự tin và rất coi trọng hiệu quả. Cách bạn trao đổi thẳng vào mục tiêu, nguồn lực cũng như tác phong chỉn chu khiến người đối diện dễ đánh giá bạn ở vị trí quản lý hoặc người có thực quyền. Trong đàm phán thương mại hay phỏng vấn cấp cao, ấn tượng vững chãi này là một lợi thế lớn giúp bạn tạo thế chủ động. Dù vậy, với những môi trường đề cao sự gần gũi, vẻ ngoài quá sắc sảo của bạn đôi khi tạo cảm giác áp lực cho người mới quen.',
    strengths: [
      'Tạo dựng uy tín và sức nặng lời nói ngay từ những phút đầu tiên làm việc với đối tác.',
      'Thể hiện rõ sự tự tin vào giá trị bản thân, giúp việc thương lượng quyền lợi thuận lợi hơn.',
      'Mang lại cảm giác an tâm rằng bạn hoàn toàn đủ bản lĩnh để gánh vác các dự án quy mô lớn.',
    ],
    watchOut: [
      'Dễ bị nhìn nhận là người quá thực dụng, cứng rắn hoặc khó thoả hiệp khi mới tiếp xúc.',
      'Các thành viên trẻ hoặc mới vào nhóm có thể cảm thấy khớp và ngại bộc lộ khó khăn thật trước mặt bạn.',
    ],
    advice: [
      'Kết hợp tác phong chuyên nghiệp với sự lắng nghe chân thành, dành thời gian hỏi thăm về góc nhìn của cộng sự trước khi chốt phương án.',
      'Đôi lúc hãy chia sẻ thoải mái về những bài học vấp ngã thực tế của bạn để rút ngắn khoảng cách với người đối diện.',
    ],
  },

  9: {
    title: 'Phong thái rộng lượng và từng trải',
    keywords: ['Văn minh', 'Bao dung', 'Chiều sâu nhân văn'],
    summary:
      'Người khác khi mới gặp thường cảm nhận ở bạn một phong thái điềm đạm, hiểu chuyện và có cái nhìn rất rộng mở. Bạn giao tiếp với mọi người bằng sự tôn trọng bình đẳng, không phân biệt vị thế hay hoàn cảnh xuất thân. Chính sự tử tế, không phán xét đó khiến nhiều người dù mới quen đã cảm thấy tin cậy và muốn chia sẻ câu chuyện của họ với bạn. Điểm cần lưu ý là đôi khi phong thái quá nhẹ nhàng, bao quát làm bạn trông hơi xa rời các chi tiết thực dụng trước mắt.',
    strengths: [
      'Tạo thiện cảm tự nhiên và sự kính trọng nhờ cách ứng xử văn minh, lịch lãm.',
      'Dễ dàng hoà nhập và kết nối với những người đến từ nhiều tầng lớp, văn hoá khác nhau.',
      'Truyền đi cảm giác bình an, chín chắn trong các buổi thảo luận về định hướng hoặc cộng đồng.',
    ],
    watchOut: [
      'Trong các cuộc thương lượng thuần tuý về lợi ích thương mại, bạn dễ bị đánh giá là hơi thiên về lý tưởng.',
      'Người mới quen dễ tìm đến bạn để trút bầu tâm sự cá nhân, đôi khi làm tốn nhiều thời gian làm việc của bạn.',
    ],
    advice: [
      'Khi làm việc với đối tác mới, hãy trình bày song song cả tầm nhìn nhân văn lẫn các chỉ số thực thi cụ thể để tăng tính thuyết phục.',
      'Giữ sự thân thiện nhưng biết cách khéo léo khép lại những cuộc trò chuyện đi quá xa khỏi trọng tâm công việc.',
    ],
  },

  11: {
    title: 'Phong thái tinh tế và giàu sức hút nội tâm',
    keywords: ['Cuốn hút', 'Tinh tế', 'Chiều sâu cảm xúc'],
    summary:
      'Ấn tượng bạn tạo ra trong lần đầu gặp gỡ không nằm ở sự ồn ào náo nhiệt, mà ở ánh nhìn có chiều sâu và khả năng nắm bắt rất nhanh ý người đối diện. Người khác thường cảm thấy ở bạn có một sức hút đặc biệt khiến họ muốn lắng nghe xem bạn sắp nói điều gì. Khi bạn chia sẻ về một chủ đề mình quan tâm, sự chân thành trong giọng nói của bạn rất dễ chạm tới cảm xúc người nghe. Tuy nhiên, vào những lúc môi trường quá đông đúc hoặc lộn xộn, sự nhạy cảm của bạn có thể lộ ra thành vẻ hơi căng thẳng hoặc trầm ngâm.',
    strengths: [
      'Để lại dấu ấn sâu sắc, khác biệt ngay từ cuộc trò chuyện đầu tiên nhờ góc nhìn tinh tế.',
      'Tạo được sự kết nối có chiều sâu rất nhanh trong các cuộc trao đổi một-một.',
      'Khả năng truyền cảm hứng tự nhiên qua phong thái điềm tĩnh và ánh mắt tập trung.',
    ],
    watchOut: [
      'Dễ lộ vẻ mệt mỏi hoặc thu mình lại nếu phải tham gia những buổi tiệc tùng xã giao kéo dài nhiều tiếng đồng hồ.',
      'Người ngoài đôi khi đặt kỳ vọng quá cao hoặc cảm thấy bạn hơi bí ẩn, khó đoán.',
    ],
    advice: [
      'Trước những sự kiện hoặc buổi họp quan trọng, hãy dành vài phút tĩnh tâm để làm chủ nhịp thở và giữ trạng thái cân bằng.',
      'Chủ động sử dụng những ví dụ đời thường, gần gũi khi trò chuyện để người mới quen cảm thấy dễ kết nối với bạn hơn.',
    ],
  },

  22: {
    title: 'Phong thái vững chãi và có tầm vóc',
    keywords: ['Vững vàng', 'Thực tế', 'Bản lĩnh tổ chức'],
    summary:
      'Được ký hiệu là 22/4, bạn mang lại ấn tượng ban đầu của một người cực kỳ điềm tĩnh, chắc chắn và có khả năng bao quát công việc lớn. Bạn không thích nói những lời hoa mỹ xã giao mà thường đi thẳng vào cấu trúc vấn đề và giải pháp thực thi khả thi. Nhờ sự kết hợp giữa vẻ ngoài chỉn chu và tư duy mạch lạc, người đối diện rất dễ tin tưởng giao cho bạn những trọng trách phức tạp ngay từ sớm. Điều bạn cần lưu ý là phong thái quá nghiêm nghị đôi khi tạo ra một bức tường vô hình khiến người khác ngại tiếp cận.',
    strengths: [
      'Tạo cảm giác an tâm tuyệt đối về năng lực thực thi và khả năng kiểm soát tình hình.',
      'Toát ra tầm nhìn của một người biết tổ chức hệ thống chứ không chỉ làm việc manh mún.',
      'Lời nói có trọng lượng cao trong các cuộc họp chiến lược và triển khai dự án.',
    ],
    watchOut: [
      'Cộng sự mới hoặc cấp dưới dễ cảm thấy e dè, không dám trao đổi những vướng mắc nhỏ với bạn.',
      'Dễ bị nhìn nhận là người chỉ biết đến công việc và thiếu sự mềm mại trong giao tiếp.',
    ],
    advice: [
      'Chủ động hỏi thăm cụ thể về những thuận lợi, khó khăn của đồng nghiệp mới để phá vỡ khoảng cách ban đầu.',
      'Dành chỗ cho những câu chuyện nhẹ nhàng về sở thích đời thường trong các buổi gặp mặt để hình ảnh của bạn cân bằng và gần gũi hơn.',
    ],
  },

  33: {
    title: 'Phong thái điềm đạm và giàu lòng nhân ái',
    keywords: ['Điềm đạm', 'Bao dung', 'Đáng kính trọng'],
    summary:
      'Được ký hiệu là 33/6, bạn tạo ấn tượng ngay từ lần đầu gặp gỡ bởi sự hiền hậu, chững chạc và thái độ quan tâm rất thật lòng tới người đối diện. Ở cạnh bạn, người khác tự nhiên cảm thấy áp lực dịu xuống và có cảm giác được lắng nghe, tôn trọng. Phong thái của bạn giống như một người thầy hoặc người anh, người chị điềm tĩnh, luôn sẵn sàng nâng đỡ mọi người. Tuy nhiên, chính vẻ ngoài quá bao dung đó đôi khi khiến người xung quanh dễ trút hết gánh nặng của họ sang vai bạn ngay từ khi mới quen.',
    strengths: [
      'Tạo dựng được sự tin cậy và lòng quý mến rất nhanh nhờ sự chân thành, ấm áp.',
      'Phù hợp tự nhiên với các vai trò cố vấn, đào tạo, chăm sóc sức khoẻ hoặc dẫn dắt tinh thần.',
      'Giữ được vẻ ung dung, độ lượng ngay cả khi đối diện với những người đang nóng nảy.',
    ],
    watchOut: [
      'Rất dễ bị người mới quen nhờ vả quá mức hoặc kéo vào những rắc rối cá nhân của họ.',
      'Mọi người thường mặc định bạn lúc nào cũng vững vàng nên ít khi để ý hỏi han xem bạn có đang mệt mỏi không.',
    ],
    advice: [
      'Giữ thái độ lắng nghe tử tế nhưng luôn đặt rõ giới hạn về những gì bạn có thể hỗ trợ ngay từ đầu.',
      'Cho phép bản thân thể hiện sự mệt mỏi hoặc nhu cầu cần nghỉ ngơi một cách tự nhiên thay vì lúc nào cũng gồng mình làm chỗ dựa.',
    ],
  },
};

export const MESSAGES = { lifePath, personalYear, expression, soul, personality };