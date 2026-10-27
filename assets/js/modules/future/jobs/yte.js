// Hồ sơ nghề nhóm Y tế và chăm sóc. Căn cứ: research/nghe-nghiep-ho-so.md mục 2.27–2.31.

export default [
  {
    id: 'dieu-duong',
    name: 'Điều dưỡng',
    field: 'yte',
    holland: 'SIR',
    demand: 4.5,
    conf: 'kha',
    summary:
      'Theo dõi và chăm sóc người bệnh, thực hiện y lệnh (thuốc, tiêm truyền, thủ thuật), ghi hồ sơ điều dưỡng, tư vấn và giáo dục sức khoẻ, phối hợp cấp cứu.',
    tasks: [
      ['Đánh giá, theo dõi người bệnh', 'thap'],
      ['Thực hiện y lệnh: thuốc, tiêm truyền, thủ thuật', 'thap'],
      ['Chăm sóc cơ bản, vệ sinh, dinh dưỡng', 'thap'],
      ['Ghi hồ sơ, lập kế hoạch chăm sóc', 'cao'],
      ['Tư vấn, giáo dục sức khoẻ', 'vua'],
    ],
    aiText: 'Phần lớn công việc là chăm sóc trực tiếp, thao tác trên người bệnh trong môi trường thay đổi liên tục, nên mức tác động thấp. AI hỗ trợ được phần ghi chép hồ sơ và lập kế hoạch chăm sóc nháp.',
    entry:
      'Cao đẳng hoặc đại học điều dưỡng. Theo Luật Khám bệnh, chữa bệnh 2023, phải thực hành 6 tháng (5 tháng chuyên môn, 1 tháng hồi sức cấp cứu) trước khi được cấp giấy phép hành nghề; từ 1/1/2028, điều dưỡng phải qua kỳ kiểm tra đánh giá năng lực của Hội đồng Y khoa quốc gia.',
    income:
      'Khu vực công tính theo hệ số lương nhân lương cơ sở (2,53 triệu đồng từ 1/7/2026) cộng phụ cấp. Nghị quyết 72-NQ/TW (9/2025) định hướng phụ cấp ưu đãi nghề tối thiểu 70% cho người trực tiếp chăm sóc; mức cụ thể còn chờ nghị định. Thu nhập bình quân của ngành y tế: chưa có số liệu đã đối chiếu trong lần cập nhật này.',
    demandWhy:
      'Theo số Bộ Y tế được báo chí dẫn, năm 2024 Việt Nam có khoảng 18 điều dưỡng trên 10.000 dân (một số nguồn khác ghi 14–15), trong khi Quy hoạch mạng lưới cơ sở y tế (QĐ 201/QĐ-TTg, 2/2024) đặt mục tiêu 25 năm 2025 và 33 năm 2030. Nhiều bệnh viện báo cáo khó tuyển điều dưỡng. Dù dùng số nào, khoảng cách với mục tiêu vẫn lớn.',
    risks: [
      'Ca đêm, quá tải; nguy cơ bạo lực với nhân viên y tế.',
      'Phơi nhiễm bệnh truyền nhiễm, vật sắc nhọn.',
      'Lương khu vực công thấp so với khối lượng công việc.',
    ],
    fit: 'Muốn giúp người trực tiếp, chịu được áp lực và môi trường bệnh viện, cẩn thận khi thao tác.',
    test: [
      'Làm tình nguyện viên tại bệnh viện hoặc viện dưỡng lão vài tuần để biết mình có chịu được môi trường đó không.',
      'Hỏi một điều dưỡng về ca trực, số người bệnh phải chăm mỗi ca và lộ trình học lên.',
    ],
    note:
      'Khoảng cách giữa số điều dưỡng hiện có và mục tiêu quy hoạch là một trong những thiếu hụt có số liệu rõ nhất trong danh sách. Đổi lại là điều kiện làm việc nặng và thu nhập khu vực công chưa tương xứng.',
    src: ['nurses', 'qd201', 'luat-kbcb', 'nq72', 'nd-luong'],
  },
  {
    id: 'bac-si',
    name: 'Bác sĩ',
    field: 'yte',
    holland: 'ISR',
    demand: 4.5,
    conf: 'kha',
    summary:
      'Khám, chẩn đoán và điều trị: hỏi bệnh, chỉ định và đọc xét nghiệm, chẩn đoán hình ảnh, kê đơn, làm thủ thuật hoặc phẫu thuật, theo dõi, hội chẩn, tư vấn phòng bệnh.',
    tasks: [
      ['Hỏi bệnh, khám lâm sàng, tư vấn người bệnh', 'thap'],
      ['Đọc xét nghiệm, chẩn đoán hình ảnh', 'vua'],
      ['Gợi ý chẩn đoán, đối chiếu phác đồ', 'vua'],
      ['Quyết định điều trị', 'thap'],
      ['Thủ thuật, phẫu thuật', 'thap'],
      ['Ghi hồ sơ bệnh án', 'cao'],
    ],
    aiText: 'Đọc ảnh chẩn đoán, gợi ý chẩn đoán và ghi chép tự động là các ứng dụng AI đang được đưa vào bệnh viện. Khám, thủ thuật, quyết định điều trị và trách nhiệm pháp lý vẫn thuộc về bác sĩ; vì vậy các khung phân tích theo nhiệm vụ thường xếp bác sĩ vào nhóm được AI hỗ trợ hơn là bị thay thế.',
    entry:
      'Đại học y khoa 6 năm. Theo Luật Khám bệnh, chữa bệnh 2023, phải thực hành 12 tháng (9 tháng khám chữa bệnh, 3 tháng hồi sức cấp cứu) để được cấp giấy phép hành nghề; từ 1/1/2027 phải qua kỳ kiểm tra đánh giá năng lực của Hội đồng Y khoa quốc gia. Theo chuyên khoa (nội trú, chuyên khoa I, II) mất thêm nhiều năm; thực tế 7–10 năm mới hành nghề độc lập có chuyên khoa.',
    income:
      'Khu vực công: Nghị quyết 72-NQ/TW cho bác sĩ xếp lương từ bậc 2 ngay khi tuyển dụng và định hướng phụ cấp ưu đãi nghề tối thiểu 70%; mức cụ thể còn chờ nghị định. Khu vực tư: chưa có số liệu đủ tin cậy.',
    demandWhy:
      'Theo số Bộ Y tế được báo chí dẫn, Việt Nam có khoảng 12,5 bác sĩ trên 10.000 dân năm 2023; QĐ 201/QĐ-TTg đặt mục tiêu 15 năm 2025 và 19 năm 2030. Phân bố lệch: Tây Nguyên, Đồng bằng sông Cửu Long thấp hơn trung bình. BLS dự báo bác sĩ tại Mỹ tăng khoảng 4% giai đoạn 2025–2035.',
    risks: [
      'Đào tạo dài và tốn kém; thu nhập khu vực công thấp ở những năm đầu.',
      'Quá tải ở tuyến trên; trực đêm; bạo lực y tế.',
      'Trách nhiệm pháp lý cao.',
    ],
    fit: 'Thích khoa học, muốn giúp người, chịu được học dài và áp lực quyết định.',
    test: [
      'Theo một bác sĩ trong vài ca trực (nếu bệnh viện cho phép) hoặc làm tình nguyện viên ở khoa khám bệnh.',
      'Tính tổng thời gian và chi phí từ năm nhất đến khi hành nghề độc lập ở chuyên khoa muốn theo.',
    ],
    note:
      'Nhu cầu có mục tiêu quy hoạch và chính sách ưu đãi mới hỗ trợ. Chi phí là khoảng 7–10 năm đào tạo trước khi có thu nhập ổn định; đó là khoản đầu tư cần cân nhắc cùng gia đình.',
    src: ['qd201', 'luat-kbcb', 'nq72', 'bls-2035'],
  },
  {
    id: 'duoc-si',
    name: 'Dược sĩ',
    field: 'yte',
    holland: 'ICS',
    demand: 3,
    conf: 'tb',
    summary:
      'Bảo đảm thuốc được dùng đúng và an toàn: kiểm tra đơn, cấp phát, tư vấn sử dụng thuốc, dược lâm sàng tại bệnh viện, quản lý chất lượng, sản xuất, kiểm nghiệm, đăng ký thuốc, kinh doanh dược.',
    tasks: [
      ['Kiểm tra đơn, tra cứu tương tác thuốc', 'cao'],
      ['Quản lý kho thuốc', 'cao'],
      ['Kiểm soát chất lượng thuốc', 'vua'],
      ['Cấp phát thuốc', 'vua'],
      ['Tư vấn người bệnh trực tiếp', 'thap'],
      ['Dược lâm sàng, phối hợp với bác sĩ', 'thap'],
    ],
    aiText: 'Kiểm tra tương tác thuốc, tra cứu và quản lý kho đã có phần mềm và chịu tác động cao. Tư vấn trực tiếp và trách nhiệm chuyên môn khi phụ trách nhà thuốc, khoa dược ít chịu tác động.',
    entry:
      'Đại học dược 5 năm; cao đẳng dược cho một số vị trí. Chứng chỉ hành nghề dược theo Luật Dược 2016, sửa đổi năm 2024, hướng dẫn tại Nghị định 163/2025/NĐ-CP; hồ sơ cần xác nhận thời gian thực hành tại cơ sở dược.',
    income:
      'Khu vực công: Nghị quyết 72-NQ/TW cho dược sĩ xếp lương từ bậc 2 khi tuyển dụng. Khu vực tư: chưa có số liệu đủ tin cậy.',
    demandWhy:
      'BLS dự báo dược sĩ tại Mỹ tăng khoảng 5% giai đoạn 2025–2035. Chưa có số liệu Việt Nam.',
    risks: [
      'Nhà thuốc chuỗi cạnh tranh, áp lực doanh số.',
      'Trách nhiệm pháp lý khi bán thuốc kê đơn sai quy định.',
    ],
    fit: 'Thích hoá học và sinh học, cẩn thận, sẵn sàng tư vấn cho người bệnh.',
    test: [
      'Làm thêm tại một nhà thuốc đạt chuẩn vài tháng.',
      'Tìm hiểu ba hướng đi (nhà thuốc, bệnh viện, doanh nghiệp dược) qua phỏng vấn người đang làm.',
    ],
    note:
      'Chứng chỉ hành nghề là hàng rào vào nghề, nhưng mảng bán lẻ chịu áp lực doanh số. Hướng dược lâm sàng và kiểm nghiệm đòi hỏi chuyên môn sâu hơn và ít chịu tác động của tự động hoá hơn.',
    src: ['luat-duoc', 'nq72', 'bls-2035'],
  },
  {
    id: 'xet-nghiem',
    name: 'Kỹ thuật viên xét nghiệm y học',
    field: 'yte',
    holland: 'IRC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Thực hiện xét nghiệm phục vụ chẩn đoán: nhận và xử lý mẫu bệnh phẩm, vận hành máy xét nghiệm, kiểm soát chất lượng, đọc và duyệt kết quả theo phân quyền, bảo đảm an toàn sinh học.',
    tasks: [
      ['Vận hành máy, chạy mẫu', 'cao'],
      ['Ghi hồ sơ, trả kết quả', 'cao'],
      ['Nhận, xử lý mẫu bệnh phẩm', 'vua'],
      ['Kiểm soát chất lượng, xử lý sự cố máy', 'thap'],
      ['Đọc tiêu bản, duyệt kết quả bất thường', 'vua'],
    ],
    aiText: 'Máy xét nghiệm tự động và hệ thống xử lý mẫu đã làm phần lớn thao tác lặp lại; AI hỗ trợ đọc tiêu bản. Kiểm soát chất lượng, xử lý mẫu bất thường và sự cố máy vẫn cần người có chuyên môn.',
    entry:
      'Cao đẳng hoặc đại học kỹ thuật xét nghiệm y học. Thuộc chức danh kỹ thuật y trong Luật Khám bệnh, chữa bệnh 2023: thực hành 6 tháng để được cấp giấy phép; kiểm tra đánh giá năng lực áp dụng từ 1/1/2029 theo văn bản luật (một số bài báo ghi 2028).',
    income: null,
    demandWhy:
      'Chưa có số liệu Việt Nam riêng. Mục tiêu mở rộng mạng lưới cơ sở y tế đến 2030 là tín hiệu tăng; tự động hoá phòng xét nghiệm là tín hiệu ngược chiều.',
    risks: [
      'Phơi nhiễm sinh học, hoá chất; trực đêm.',
      'Ít được người bệnh nhìn thấy; khó thăng tiến nếu không học lên.',
    ],
    fit: 'Thích làm việc trong phòng thí nghiệm, chính xác, chịu được việc có quy trình chặt.',
    test: [
      'Tham quan hoặc thực tập ngắn tại khoa xét nghiệm của một bệnh viện.',
      'Hỏi kỹ thuật viên đang làm về tỷ lệ thao tác tay so với vận hành máy.',
    ],
    note:
      'Tự động hoá đã thay đổi nghề trước khi AI tạo sinh xuất hiện. Giá trị của kỹ thuật viên nằm ở kiểm soát chất lượng và xử lý bất thường; đó là năng lực cần đầu tư.',
    src: ['luat-kbcb', 'qd201'],
  },
  {
    id: 'tam-ly',
    name: 'Chuyên viên tâm lý, tham vấn tâm lý',
    field: 'yte',
    holland: 'SIA',
    demand: 3,
    conf: 'yeu',
    summary:
      'Đánh giá và hỗ trợ sức khoẻ tâm thần: tiếp nhận, dùng trắc nghiệm tâm lý chuẩn hoá, trị liệu hoặc tham vấn cá nhân và nhóm, can thiệp khủng hoảng, phối hợp với bác sĩ tâm thần.',
    tasks: [
      ['Tiếp nhận, đánh giá ban đầu', 'thap'],
      ['Chấm trắc nghiệm, ghi chép hồ sơ', 'cao'],
      ['Trị liệu, tham vấn cá nhân và nhóm', 'thap'],
      ['Can thiệp khủng hoảng, đánh giá nguy cơ', 'thap'],
      ['Soạn tài liệu giáo dục sức khoẻ tâm thần', 'cao'],
    ],
    aiText: 'Chatbot hỗ trợ tâm lý đã xuất hiện, và phần ghi chép, chấm trắc nghiệm chịu tác động cao. Quan hệ trị liệu, đánh giá nguy cơ tự sát và trách nhiệm đạo đức nghề nghiệp ít chịu tác động.',
    entry:
      'Cử nhân tâm lý học. Tâm lý lâm sàng là chức danh hành nghề trong Luật Khám bệnh, chữa bệnh 2023, cần giấy phép và thời gian thực hành. Quy định cấp phép cho tham vấn ngoài cơ sở y tế chưa xác minh được trong lần cập nhật này. Thực tế thường cần thạc sĩ và nhiều giờ thực hành có giám sát.',
    income: null,
    demandWhy:
      'Việt Nam có khoảng 1.000 bác sĩ tâm thần, gần 1 trên 100.000 dân, so với mức trung bình toàn cầu 3,96 trên 100.000 dân (WHO, 2022, qua báo Nhân Dân). Đây là số về bác sĩ, không phải chuyên viên tâm lý; số chuyên gia tâm lý lâm sàng chưa có thống kê chính thức.',
    risks: [
      'Kiệt sức cảm xúc.',
      'Thị trường dịch vụ chưa chuẩn hoá, có người hành nghề không đủ trình độ.',
      'Thu nhập không ổn định khi làm tư.',
    ],
    fit: 'Quan tâm sâu đến người khác, lắng nghe tốt, giữ ranh giới nghề nghiệp.',
    test: [
      'Tham gia khoá sơ cứu tâm lý và làm tình nguyện cho đường dây hỗ trợ có giám sát.',
      'Tìm hiểu chương trình thạc sĩ tâm lý lâm sàng và số giờ thực hành bắt buộc trước khi chọn ngành.',
    ],
    note:
      'Nhu cầu thật về chăm sóc sức khoẻ tâm thần lớn hơn nhiều so với số người được đào tạo, nhưng thị trường trả tiền cho dịch vụ còn đang hình thành. Con đường đáng tin cậy là đào tạo bài bản đến mức đủ điều kiện hành nghề lâm sàng.',
    src: ['mental', 'luat-kbcb'],
  },
];
