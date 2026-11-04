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
      'Sâu bên trong, điều bạn sợ nhất không phải là sự vất vả mà là cảm giác cuộc đời mình bị đóng khung trong một kịch bản tẻ nhạt, biết trước từng ngày. Bạn luôn khao khát có được không gian tự do để tự chọn cách làm việc, đi tới những vùng đất mới và trải nghiệm nhiều khía cạnh khác nhau của cuộc sống. Những quy định kiểm soát giờ giấc cứng nhắc hay sự thúc ép phải sống theo khuôn mẫu số đông dễ khiến bạn muốn
