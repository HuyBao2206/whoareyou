// Hồ sơ nghề nhóm Dịch vụ và vận tải. Căn cứ: research/nghe-nghiep-ho-so.md mục 2.39–2.41.

export default [
  {
    id: 'dau-bep',
    name: 'Đầu bếp',
    field: 'dichvu',
    holland: 'RAE',
    demand: 3,
    conf: 'yeu',
    summary:
      'Chế biến món ăn và điều hành bếp: sơ chế, nấu theo công thức, xây dựng thực đơn, định lượng và tính giá vốn, quản lý nguyên liệu, bảo đảm an toàn thực phẩm, điều phối bếp giờ cao điểm.',
    tasks: [
      ['Sơ chế, nấu theo công thức', 'thap'],
      ['Điều phối bếp giờ cao điểm', 'thap'],
      ['Bảo đảm an toàn thực phẩm', 'thap'],
      ['Xây dựng thực đơn, tính giá vốn', 'vua'],
      ['Quản lý nguyên liệu, đặt hàng', 'vua'],
    ],
    aiText: 'Thao tác tay, cảm quan và môi trường nóng, thay đổi liên tục khiến mức tác động thấp. Lập thực đơn và tính giá vốn có thể được phần mềm hỗ trợ.',
    entry:
      'Sơ cấp, trung cấp, cao đẳng kỹ thuật chế biến món ăn; học việc tại bếp. Người trực tiếp chế biến phải có kiến thức an toàn thực phẩm theo quy định. Lên vị trí bếp chính thường mất nhiều năm.',
    income: null,
    demandWhy: 'Chưa có số liệu Việt Nam đủ tin cậy. Nhu cầu đi theo du lịch và tiêu dùng.',
    risks: [
      'Nóng, bỏng, đứt tay; đứng lâu.',
      'Làm tối, cuối tuần, lễ Tết; nhà hàng nhỏ hay đóng cửa.',
    ],
    fit: 'Khéo tay, có óc sáng tạo với món ăn, chịu được nhịp làm việc gấp.',
    test: [
      'Làm phụ bếp ở một nhà hàng bận rộn vài tháng.',
      'Thử nấu và bán một món nhỏ (đặt hàng qua mạng) để biết chi phí và giá vốn.',
    ],
    note:
      'Ít chịu tác động của AI nhưng điều kiện làm việc nặng và thu nhập phụ thuộc nhà hàng. Lộ trình bền là đi lên quản lý bếp hoặc tự kinh doanh khi đã có tay nghề.',
    src: [],
  },
  {
    id: 'du-lich',
    name: 'Nhân viên khách sạn, hướng dẫn viên du lịch',
    field: 'dichvu',
    holland: 'SEA',
    demand: 3,
    conf: 'yeu',
    summary:
      'Lễ tân khách sạn đón và trả phòng, đặt phòng, giải đáp và xử lý phàn nàn. Hướng dẫn viên đưa đoàn theo chương trình, thuyết minh văn hoá, lịch sử, xử lý sự cố và bảo đảm an toàn cho đoàn.',
    tasks: [
      ['Đặt phòng, nhận và trả phòng', 'cao'],
      ['Trả lời câu hỏi thường gặp', 'cao'],
      ['Thuyết minh tại điểm tham quan', 'vua'],
      ['Dẫn đoàn, điều phối lịch trình', 'thap'],
      ['Xử lý sự cố, phàn nàn', 'thap'],
    ],
    aiText: 'Ở khách sạn, đặt phòng trực tuyến và nhận phòng tự động đã giảm phần việc tại quầy; ở điểm tham quan, ứng dụng thuyết minh âm thanh làm được phần giới thiệu cơ bản. Dẫn đoàn, xử lý sự cố và chăm sóc khách vẫn do người làm.',
    entry:
      'Lễ tân: trung cấp, cao đẳng quản trị khách sạn; cần ngoại ngữ. Hướng dẫn viên theo Luật Du lịch 2017 phải có thẻ: thẻ nội địa cần trung cấp trở lên chuyên ngành hướng dẫn du lịch hoặc chứng chỉ nghiệp vụ; thẻ quốc tế cần cao đẳng trở lên hoặc chứng chỉ nghiệp vụ quốc tế và sử dụng thành thạo ngoại ngữ đăng ký. Thẻ có thời hạn 5 năm.',
    income: null,
    demandWhy:
      'Chưa tra được số liệu nhân lực du lịch đủ tin cậy trong lần cập nhật này.',
    risks: [
      'Theo mùa và theo cú sốc (đại dịch 2020–2021 làm ngành gần như đóng băng).',
      'Làm lễ Tết; nhiều hướng dẫn viên làm tự do, thiếu bảo hiểm.',
    ],
    fit: 'Thích gặp người, kể chuyện, giữ bình tĩnh khi có sự cố.',
    test: [
      'Làm hướng dẫn viên tình nguyện cho khách nước ngoài ở thành phố mình vài cuối tuần.',
      'Thực tập lễ tân một mùa cao điểm.',
    ],
    note:
      'Ngoại ngữ tốt và khả năng xử lý tình huống là lợi thế khó thay thế; phần đặt phòng và giải đáp thì đang được tự động hoá. Người theo ngành nên có kế hoạch tài chính cho những năm du lịch chững lại.',
    src: ['luat-dulich'],
  },
  {
    id: 'tai-xe',
    name: 'Tài xế công nghệ, nhân viên giao hàng',
    field: 'dichvu',
    holland: 'RCS',
    demand: 3,
    conf: 'yeu',
    summary:
      'Nhận chuyến, đơn hàng qua ứng dụng; đón khách, lấy và giao hàng, thu tiền hộ; tự bảo dưỡng xe; xử lý phản hồi của khách theo quy định của nền tảng.',
    tasks: [
      ['Di chuyển, tuân thủ luật giao thông', 'thap'],
      ['Đón khách, giao nhận hàng', 'thap'],
      ['Giao tiếp, xử lý khiếu nại', 'thap'],
      ['Nhận đơn, chọn tuyến theo ứng dụng', 'vua'],
      ['Bảo dưỡng xe', 'thap'],
    ],
    aiText: 'Tác động của AI tạo sinh thấp. Rủi ro dài hạn là xe tự lái, robot hoặc thiết bị bay giao hàng, chưa có lộ trình ở Việt Nam. Tác động hiện tại đến từ thuật toán của nền tảng, đang quyết định việc phân đơn và giá.',
    entry:
      'Giấy phép lái xe phù hợp; đăng ký làm đối tác với nền tảng. Không đòi bằng cấp.',
    income:
      'Chưa có số liệu gần đây đủ tin cậy. Khảo sát của Tổng Liên đoàn Lao động năm 2022 cho thấy tài xế xe máy công nghệ làm trung bình 9,2 giờ/ngày, ô tô 11,2 giờ/ngày.',
    demandWhy:
      'WEF 2025 xếp tài xế giao hàng trong nhóm tăng nhiều nhất theo số người trên thế giới. Ở Việt Nam, chưa có số liệu nhân lực; nếu thương mại điện tử tiếp tục mở rộng, nhu cầu giao hàng sẽ tăng theo.',
    risks: [
      'Phi chính thức: đến 2026, tài xế công nghệ và người giao hàng chưa thuộc diện bảo hiểm xã hội bắt buộc, chỉ tham gia tự nguyện (Bộ Nội vụ).',
      'Tai nạn giao thông, nắng nóng, ô nhiễm.',
      'Thu nhập phụ thuộc chính sách chiết khấu của nền tảng; không có lộ trình thăng tiến.',
    ],
    fit: 'Thích di chuyển, chủ động giờ giấc, chịu được thời tiết.',
    test: [
      'Tính thu nhập ròng sau xăng, khấu hao xe, chiết khấu nền tảng cho một tháng làm thử.',
      'Kiểm tra quyền lợi bảo hiểm tự nguyện trước khi làm toàn thời gian.',
    ],
    note:
      'Việc dễ vào nhưng phi chính thức, không có lộ trình nghề. Phù hợp làm thu nhập tạm thời hơn là nghề lâu dài, trừ khi có kế hoạch chuyển sang điều phối, quản lý kho vận.',
    src: ['drivers', 'wef-2025'],
  },
];
