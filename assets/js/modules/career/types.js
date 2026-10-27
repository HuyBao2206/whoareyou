// Sáu nhóm sở thích nghề nghiệp theo Holland (RIASEC).
// Hai giọng (CLAUDE.md): `about`, `likes`, `envFit`, `envStifle`, `jobs` là phần kiến thức, viết chuẩn mực;
// `summary` và `note` là phần kết quả, nói gần gũi như người hiểu chuyện.
// Định nghĩa dựa trên Holland (1997) và mô tả sáu nhóm của O*NET; nghề ví dụ chọn những nghề quen thuộc ở Việt Nam.

export default {
  R: {
    letter: 'R',
    name: 'Kỹ thuật',
    en: 'Realistic',
    short: 'Làm với máy móc, dụng cụ, cây trồng, vật nuôi',
    about:
      'Nhóm Kỹ thuật gồm những người thích làm việc với vật thật: máy móc, dụng cụ, cây trồng, vật nuôi. Họ học nhanh nhất khi được cầm tận tay và tin vào thứ đo được, chạy được. Holland gọi nhóm này là Realistic, tức thiên về thực tế.',
    likes: [
      'Sửa chữa, lắp ráp, vận hành máy móc và dụng cụ',
      'Làm ngoài trời, với cây trồng hay vật nuôi',
      'Làm ra một sản phẩm cụ thể, thấy kết quả ngay',
      'Dùng sức và sự khéo tay hơn là dùng lời',
    ],
    envFit:
      'Xưởng, công trường, nông trại, phòng kỹ thuật: nơi việc được giao rõ ràng, làm xong là thấy kết quả và người ta đánh giá nhau qua tay nghề.',
    envStifle:
      'Ngồi họp cả ngày, viết báo cáo dài hay phải thuyết phục người khác bằng lời. Ở những nơi coi trọng giao tế hơn tay nghề, người nhóm này dễ thấy mình lạc chỗ.',
    jobs: [
      'Thợ sửa xe máy, ô tô',
      'Thợ điện, thợ điện lạnh',
      'Kỹ thuật viên lắp đặt mạng, camera',
      'Kỹ sư cơ khí, kỹ sư xây dựng',
      'Đầu bếp',
      'Kỹ sư nông nghiệp',
      'Thợ mộc, thợ hàn',
      'Phi công, lái tàu',
    ],
    summary:
      'Cái quạt kêu lạch cạch, cái kệ lắp lệch, mấy chậu cây úa lá: gặp là muốn xắn tay vào ngay. Làm bằng tay thì đầu óc mới yên, và sửa lành một thứ đang hỏng là một kiểu vui rất riêng.',
    note:
      'Tay nghề tích luỹ từng ngày và đi theo mình rất lâu. Nếu đang phân vân giữa hai hướng, thử nghiêng về hướng nào cho mình làm ra thứ cầm nắm được.',
  },

  I: {
    letter: 'I',
    name: 'Nghiên cứu',
    en: 'Investigative',
    short: 'Tìm hiểu, phân tích, giải bài toán khó',
    about:
      'Nhóm Nghiên cứu thích tìm hiểu vì sao mọi việc diễn ra như vậy. Họ quan sát, đặt câu hỏi, thu thập dữ kiện rồi tự rút ra lời giải. Khoa học, công nghệ và y học là những lĩnh vực quen thuộc của nhóm này.',
    likes: [
      'Đặt câu hỏi và tìm câu trả lời bằng dữ kiện',
      'Đọc tài liệu, làm thí nghiệm, phân tích số liệu',
      'Giải bài toán khó, kể cả khi chưa thấy ích lợi ngay',
      'Làm việc độc lập, có thời gian nghĩ cho kỹ',
    ],
    envFit:
      'Phòng thí nghiệm, bệnh viện, nhóm phân tích dữ liệu, bộ phận phát triển sản phẩm: nơi được hỏi “tại sao”, được thử rồi sai, và ý kiến được cân bằng bằng chứng chứ không bằng chức vụ.',
    envStifle:
      'Việc lặp đi lặp lại không cần suy nghĩ, hay chỗ làm chỉ chạy theo doanh số mà không ai muốn nghe phân tích. Bị hối thúc chốt ý trước khi kịp tìm hiểu cũng khiến nhóm này khó chịu.',
    jobs: [
      'Bác sĩ, dược sĩ',
      'Lập trình viên, kỹ sư phần mềm',
      'Chuyên viên phân tích dữ liệu',
      'Kỹ thuật viên xét nghiệm',
      'Nhà nghiên cứu, giảng viên đại học',
      'Kỹ sư điện tử',
      'Kỹ sư môi trường',
    ],
    summary:
      'Câu “tại sao” thường đến trước câu “làm thế nào”. Gặp chuyện lạ là muốn lật ra xem bên trong, đọc thêm vài nguồn, và chỉ yên tâm khi tự hiểu được lẽ của nó.',
    note:
      'Tò mò là lợi thế, miễn là biết chỗ dừng. Lần tới thấy mình đọc mãi chưa xong, thử đặt một câu hỏi thật hẹp và trả lời nó trước.',
  },

  A: {
    letter: 'A',
    name: 'Nghệ thuật',
    en: 'Artistic',
    short: 'Sáng tạo bằng hình, chữ, âm thanh',
    about:
      'Nhóm Nghệ thuật thích làm ra cái mới bằng hình ảnh, âm thanh, chữ viết hay chuyển động. Họ cần được thể hiện cách nhìn riêng và ít hợp với quy trình cứng. Ngoài hoạ sĩ hay ca sĩ, người viết và nhà thiết kế cũng thuộc nhóm này.',
    likes: [
      'Vẽ, viết, chụp ảnh, quay và dựng video',
      'Nghĩ ra cách làm khác với số đông',
      'Làm theo cảm hứng, không bị bó vào mẫu có sẵn',
      'Thấy dấu ấn của mình trong sản phẩm',
    ],
    envFit:
      'Studio, công ty truyền thông, toà soạn, đoàn nghệ thuật, hay một góc làm việc tự do: nơi ý tưởng mới được đón nhận và giờ giấc linh hoạt.',
    envStifle:
      'Biểu mẫu, quy trình duyệt nhiều tầng, việc làm theo một khuôn suốt năm. Bị sửa ý tưởng cho giống cái đã có là điều nhóm này khó chịu nhất.',
    jobs: [
      'Nhà thiết kế đồ hoạ',
      'Người làm nội dung, dựng video',
      'Nhiếp ảnh gia',
      'Kiến trúc sư',
      'Nhà báo, biên tập viên',
      'Nhà thiết kế thời trang',
      'Giáo viên mỹ thuật, âm nhạc',
      'Diễn viên, ca sĩ',
    ],
    summary:
      'Cùng một việc, thế nào cũng muốn làm theo cách của mình. Tấm thiệp mừng sinh nhật, bài đăng cho shop của bạn, góc học tập đều thành chỗ để thử ý mới. Khó chịu nhất là bị bảo làm y hệt mẫu.',
    note:
      'Cảm hứng đến rồi đi, thói quen làm đều mới giữ được tay nghề. Muốn theo nghề sáng tạo lâu dài thì nên giữ lại mọi thứ mình làm, kể cả bản nháp chưa ưng.',
  },

  S: {
    letter: 'S',
    name: 'Xã hội',
    en: 'Social',
    short: 'Dạy, chăm sóc, giúp đỡ người khác',
    about:
      'Nhóm Xã hội thích làm việc với con người: dạy học, chăm sóc, hướng dẫn, lắng nghe. Họ để ý tới cảm xúc của người khác và thấy việc mình làm có ích khi ai đó khá lên nhờ mình. Giáo dục, y tế, công tác xã hội là những lĩnh vực tiêu biểu.',
    likes: [
      'Giảng giải, chỉ cho người khác cách làm',
      'Lắng nghe và giúp người khác gỡ rối',
      'Làm việc nhóm, gặp gỡ nhiều người',
      'Chăm sóc người ốm, người già, trẻ nhỏ',
    ],
    envFit:
      'Trường học, bệnh viện, trung tâm tư vấn, tổ chức thiện nguyện, bộ phận chăm sóc khách hàng: nơi có người để trò chuyện và việc mình làm tác động thẳng tới người khác.',
    envStifle:
      'Ngồi một mình với máy móc hay giấy tờ cả ngày, hoặc môi trường cạnh tranh gắt, ai lo phần nấy. Nơi coi con người chỉ là con số dễ làm nhóm này kiệt sức.',
    jobs: [
      'Giáo viên, gia sư',
      'Điều dưỡng, hộ sinh',
      'Chuyên viên tâm lý, tư vấn học đường',
      'Nhân viên công tác xã hội',
      'Hướng dẫn viên du lịch',
      'Huấn luyện viên thể thao',
      'Chuyên viên nhân sự',
      'Nhân viên chăm sóc khách hàng',
    ],
    summary:
      'Giảng cho ai đó hiểu ra một bài là đủ vui cả buổi. Bạn bè có chuyện hay tìm đến, và việc gì có người cùng làm cũng thấy dễ chịu hơn làm một mình.',
    note:
      'Lo cho người khác là việc tốt, nhưng sức mình cũng có hạn. Muốn theo nghề này lâu thì nên tập từ chối vài lần, để còn sức cho những người thật sự cần mình.',
  },

  E: {
    letter: 'E',
    name: 'Quản lý',
    en: 'Enterprising',
    short: 'Dẫn dắt, thuyết phục, kinh doanh',
    about:
      'Nhóm Quản lý thích dẫn dắt, thuyết phục và ra quyết định. Họ đặt mục tiêu rõ, chịu được rủi ro và muốn thấy kết quả qua doanh số, vị trí hay tầm ảnh hưởng. Holland gọi nhóm này là Enterprising, nghĩa là dám đứng ra lo liệu, dám làm ăn.',
    likes: [
      'Đứng ra tổ chức, phân việc cho mọi người',
      'Bán hàng, thương lượng, thuyết phục',
      'Đặt mục tiêu rồi tìm cách đạt cho bằng được',
      'Khởi động một dự án hay một việc kinh doanh',
    ],
    envFit:
      'Công ty kinh doanh, cửa hàng, đội bán hàng, công ty khởi nghiệp: nơi chỉ tiêu rõ ràng, thưởng theo kết quả và ai chủ động thì được giao thêm quyền.',
    envStifle:
      'Nơi mọi việc phải chờ cấp trên duyệt, hoặc việc chuyên môn hẹp chẳng có ai để thuyết phục. Làm mãi mà không thấy mình tiến lên cũng khiến nhóm này chán.',
    jobs: [
      'Chủ cửa hàng, chủ shop online',
      'Nhân viên kinh doanh, môi giới bất động sản',
      'Quản lý nhà hàng, khách sạn',
      'Chuyên viên marketing',
      'Luật sư',
      'Trưởng nhóm dự án',
      'Người tổ chức sự kiện',
    ],
    summary:
      'Việc chung mà chưa ai đứng ra là thấy sốt ruột, rồi tự nhận phần lo. Thích được quyết, thích nhìn con số đi lên, và một cuộc mặc cả gay cấn lại là chuyện vui.',
    note:
      'Dám đứng ra là điểm mạnh, còn nghe kỹ trước khi quyết mới giữ được người đi cùng. Lần tới, cứ hỏi ý cả nhóm trước rồi hãy chốt.',
  },

  C: {
    letter: 'C',
    name: 'Nghiệp vụ',
    en: 'Conventional',
    short: 'Sắp xếp, số liệu, sổ sách, quy trình',
    about:
      'Nhóm Nghiệp vụ thích công việc có quy trình rõ ràng, làm với số liệu, giấy tờ và hệ thống. Họ cẩn thận, ngăn nắp và giữ cho mọi thứ chạy đúng. Holland gọi nhóm này là Conventional, nghĩa là theo nề nếp, theo quy ước.',
    likes: [
      'Sắp xếp, ghi chép, lưu trữ cho ngăn nắp',
      'Làm với con số, bảng tính, sổ sách',
      'Soát lại cho đúng từng chi tiết',
      'Làm theo quy trình rõ, biết trước việc phải làm',
    ],
    envFit:
      'Phòng kế toán, ngân hàng, cơ quan hành chính, bộ phận kho vận: nơi việc có hướng dẫn rõ, trách nhiệm phân định rạch ròi và sự chính xác được coi trọng.',
    envStifle:
      'Nơi mọi thứ tuỳ hứng, quy định đổi liên tục, hoặc phải ứng biến trước đám đông mà không kịp chuẩn bị. Thiếu thông tin rõ ràng là điều nhóm này ngại nhất.',
    jobs: [
      'Kế toán, kiểm toán viên',
      'Giao dịch viên ngân hàng',
      'Nhân viên hành chính, văn thư',
      'Thủ kho, nhân viên điều phối kho vận',
      'Chuyên viên thuế',
      'Thư ký, trợ lý',
      'Nhân viên nhập liệu',
      'Chuyên viên bảo hiểm',
    ],
    summary:
      'Bảng tính gọn gàng, cột nào ra cột nấy, nhìn đã thấy dễ chịu. Có quy trình rõ thì làm rất chắc tay, lại hay là người phát hiện ra con số lệch mà cả nhóm bỏ qua.',
    note:
      'Cẩn thận là đức tính nhiều chỗ làm đang thiếu. Nếu việc lặp lại bắt đầu thấy nhàm, thử học thêm một công cụ tự động hoá để dành sức cho phần cần đến con mắt của mình.',
  },
};
