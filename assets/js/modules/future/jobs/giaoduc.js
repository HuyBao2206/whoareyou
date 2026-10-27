// Hồ sơ nghề nhóm Giáo dục. Căn cứ: research/nghe-nghiep-ho-so.md mục 2.25–2.26.

export default [
  {
    id: 'giao-vien',
    name: 'Giáo viên phổ thông',
    field: 'giaoduc',
    holland: 'SAE',
    demand: 4,
    conf: 'kha',
    summary:
      'Dạy học và giáo dục học sinh theo chương trình phổ thông 2018: soạn kế hoạch bài dạy, dạy trên lớp, kiểm tra và đánh giá, làm chủ nhiệm, làm việc với phụ huynh, sinh hoạt chuyên môn.',
    tasks: [
      ['Soạn kế hoạch bài dạy, học liệu', 'cao'],
      ['Ra đề, chấm bài, nhận xét', 'vua'],
      ['Dạy trên lớp, quản lý lớp học', 'thap'],
      ['Chủ nhiệm, tư vấn học sinh, làm việc với phụ huynh', 'thap'],
      ['Hồ sơ, sổ sách', 'cao'],
    ],
    aiText: 'Công cụ AI soạn nháp giáo án, học liệu và hồ sơ nhanh; ra đề và chấm trắc nghiệm cũng được hỗ trợ, nhưng nhận xét học sinh vẫn cần giáo viên chịu trách nhiệm. Dạy trực tiếp, quản lý lớp và chăm sóc học sinh là phần lớn công việc và ít chịu tác động.',
    entry:
      'Theo Luật Nhà giáo 2025 (hiệu lực 1/1/2026), giáo viên tiểu học, trung học cơ sở, trung học phổ thông cần cử nhân sư phạm phù hợp; tốt nghiệp ngành khác cần chứng chỉ nghiệp vụ sư phạm. Giáo viên đang làm được chuẩn hoá theo lộ trình đến hết năm 2030. Trường công tuyển qua kỳ xét tuyển viên chức của địa phương.',
    income:
      'Khu vực công tính theo hệ số lương nhân lương cơ sở (2,53 triệu đồng từ 1/7/2026), cộng phụ cấp ưu đãi và thâm niên. Luật Nhà giáo quy định lương nhà giáo được xếp cao nhất trong thang bậc lương hành chính sự nghiệp; Nghị quyết 71-NQ/TW định hướng phụ cấp ưu đãi tối thiểu 70%. Thu nhập bình quân của ngành giáo dục: chưa có số liệu đã đối chiếu trong lần cập nhật này.',
    demandWhy:
      'Theo số Bộ Giáo dục và Đào tạo được báo chí dẫn, đến 6/2026 cả nước thiếu 104.516 giáo viên mầm non và phổ thông so với định mức (tiểu học 30.949, trung học cơ sở 42.357); một nguồn khác ghi thiếu hơn 110 nghìn biên chế, do cách tính khác. Cùng lúc vẫn còn hơn 40.000 biên chế được giao chưa tuyển hết, nên thiếu hụt không đều giữa các địa phương. Nhu cầu dài hạn ở mầm non, tiểu học còn phụ thuộc mức sinh, nên đặt ở mức 4 thay vì 5.',
    risks: [
      'Khối lượng hồ sơ, áp lực từ phụ huynh và thành tích.',
      'Lương khởi điểm thấp so với mặt bằng đô thị.',
      'Thiếu ở nơi này, thừa ở nơi khác: cơ hội phụ thuộc môn dạy và địa phương.',
    ],
    fit: 'Thích giảng giải, kiên nhẫn với trẻ, chịu được việc lặp lại theo năm học.',
    test: [
      'Dạy kèm hoặc trợ giảng một học kỳ ở cấp học muốn theo.',
      'Tra số giáo viên còn thiếu theo môn và theo tỉnh muốn làm việc trước khi chọn ngành sư phạm.',
    ],
    note:
      'Thiếu giáo viên là thiếu hụt có số liệu chính thức, nhưng phân bố không đều theo môn và vùng. Chọn đúng môn dạy và địa phương quan trọng ngang chọn ngành sư phạm.',
    src: ['teachers', 'luat-nha-giao', 'nq72', 'ilo-vn', 'nd-luong'],
  },
  {
    id: 'giao-vien-tieng-anh',
    name: 'Giáo viên tiếng Anh',
    field: 'giaoduc',
    holland: 'SAC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Dạy tiếng Anh ở trường phổ thông hoặc trung tâm ngoại ngữ: đánh giá trình độ, soạn bài, dạy bốn kỹ năng, luyện thi chứng chỉ, chấm và phản hồi bài viết, bài nói.',
    tasks: [
      ['Soạn bài, chọn giáo trình, tạo bài tập', 'cao'],
      ['Chấm bài viết, phản hồi', 'cao'],
      ['Luyện nói, sửa phát âm trực tiếp', 'vua'],
      ['Dạy trên lớp, tạo động lực, quản lý lớp', 'thap'],
      ['Làm việc với phụ huynh, trung tâm', 'thap'],
    ],
    aiText: 'Chấm bài viết, tạo bài tập và luyện nói với ứng dụng đã phổ biến, nên phần việc này chịu tác động cao. Tạo động lực, quản lý lớp trẻ em và sửa lỗi phát âm trực tiếp ít chịu tác động hơn.',
    entry:
      'Trường công: như giáo viên phổ thông (cử nhân sư phạm tiếng Anh, hoặc ngôn ngữ Anh kèm chứng chỉ nghiệp vụ sư phạm) theo Luật Nhà giáo 2025. Trung tâm ngoại ngữ thường yêu cầu IELTS khoảng 7.0 trở lên và chứng chỉ giảng dạy như TESOL hoặc CELTA; đây là yêu cầu tuyển dụng, không phải quy định pháp luật.',
    income: null,
    demandWhy:
      'Giáo viên ngoại ngữ nằm trong số thiếu chung của Bộ Giáo dục và Đào tạo, chưa có số tách riêng. Mảng trung tâm chịu cạnh tranh từ ứng dụng học. Chưa có số liệu đủ tin cậy cho riêng nghề.',
    risks: [
      'Việc ở trung tâm thường tính theo giờ, không ổn định.',
      'Cạnh tranh với giáo viên nước ngoài và ứng dụng học.',
    ],
    fit: 'Thích ngôn ngữ, thích giảng giải, chịu được việc chấm sửa nhiều.',
    test: [
      'Dạy thử một lớp nhỏ 8 buổi, ghi lại tiến bộ của học viên.',
      'Kiểm tra trình độ của mình bằng một kỳ thi chuẩn trước khi đầu tư vào chứng chỉ giảng dạy.',
    ],
    note:
      'Nhu cầu ở trường công đi theo số thiếu giáo viên chung; mảng trung tâm chịu cạnh tranh trực tiếp từ công cụ AI. Người dạy giỏi về động lực và quản lý lớp có lợi thế hơn người chỉ giỏi ngữ pháp.',
    src: ['teachers', 'luat-nha-giao'],
  },
];
