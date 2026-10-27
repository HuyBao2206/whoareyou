// Hồ sơ nghề nhóm Kinh doanh và dịch vụ khách hàng. Căn cứ: research/nghe-nghiep-ho-so.md mục 2.10–2.13, 2.20, 2.23.

export default [
  {
    id: 'marketing-so',
    name: 'Chuyên viên marketing số',
    field: 'kinhdoanh',
    holland: 'EAC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Đưa sản phẩm đến đúng khách hàng qua kênh số: xác định khách hàng mục tiêu, lập kế hoạch kênh, chạy và tối ưu quảng cáo, phối hợp làm nội dung, đo lường hiệu quả và quản lý ngân sách.',
    tasks: [
      ['Xác định khách hàng mục tiêu, chiến lược kênh', 'thap'],
      ['Viết nội dung quảng cáo, tạo biến thể', 'cao'],
      ['Chạy, tối ưu quảng cáo trên nền tảng', 'cao'],
      ['Đo lường, báo cáo hiệu quả', 'cao'],
      ['Quản lý ngân sách, chịu trách nhiệm kết quả', 'vua'],
    ],
    aiText: 'Các nền tảng quảng cáo đã tự đặt giá thầu và tự tạo biến thể nội dung từ trước khi có AI tạo sinh; mô hình ngôn ngữ đẩy nhanh thêm phần viết và đọc số liệu chiến dịch. Phần còn lại cho người làm là chọn khách hàng mục tiêu, hiểu thị trường địa phương và chịu trách nhiệm về ngân sách.',
    entry:
      'Đại học marketing, quản trị kinh doanh, truyền thông. Chứng chỉ của nền tảng (Google, Meta) là điểm cộng. Không có giấy phép.',
    income: null,
    demandWhy:
      'Theo báo cáo của TopCV (2025–2026), marketing, truyền thông chiếm 8,22% nhu cầu tuyển trên nền tảng này; đây là tỷ lệ tin đăng, không phải tốc độ tăng. Chưa có số liệu tăng giảm đủ tin cậy, nên đặt ở mức 3.',
    risks: [
      'Nhiều người theo học, cạnh tranh mạnh ở vị trí mới vào nghề.',
      'Áp lực chỉ số ngắn hạn; nghề thay đổi theo chính sách của nền tảng.',
    ],
    fit:
      'Thích thuyết phục, nhạy với xu hướng, chịu được việc đọc số liệu hằng ngày.',
    test: [
      'Chạy một chiến dịch quảng cáo nhỏ (vài trăm nghìn đồng) cho cửa hàng quen, báo cáo chi phí trên mỗi đơn hàng.',
      'Viết lại kế hoạch truyền thông của một thương hiệu bạn biết và nhờ người trong nghề nhận xét.',
    ],
    note:
      'Khâu thực thi của marketing số ngày càng do nền tảng tự làm. Người làm nghề giữ được chỗ đứng khi hiểu khách hàng và chịu trách nhiệm cho kết quả kinh doanh, hai việc nền tảng quảng cáo không làm thay.',
    src: ['topcv-2026'],
  },
  {
    id: 'kinh-doanh-b2b',
    name: 'Nhân viên kinh doanh (bán cho doanh nghiệp)',
    field: 'kinhdoanh',
    holland: 'ESC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Tìm khách hàng doanh nghiệp, tìm hiểu nhu cầu, tư vấn giải pháp, báo giá, thương lượng và ký hợp đồng; sau đó chăm sóc để bán thêm và giữ khách.',
    tasks: [
      ['Tìm và đánh giá khách hàng tiềm năng', 'vua'],
      ['Tìm hiểu nhu cầu, tư vấn giải pháp', 'thap'],
      ['Báo giá, thương lượng, ký hợp đồng', 'thap'],
      ['Soạn email, ghi chép cuộc gọi, cập nhật hệ thống', 'cao'],
      ['Chăm sóc, bán thêm cho khách cũ', 'thap'],
    ],
    aiText: 'Công cụ quản lý khách hàng có AI soạn email, tóm tắt cuộc gọi và tìm thông tin doanh nghiệp, tức phần hành chính của nghề. Phần quyết định doanh số là xây quan hệ, thương lượng hợp đồng lớn và tạo niềm tin, vẫn diễn ra giữa người với người.',
    entry:
      'Thường là đại học kinh tế, hoặc kỹ thuật nếu bán sản phẩm kỹ thuật; nhiều nơi nhận cao đẳng. Không có giấy phép, trừ một số ngành có quy định riêng như dược, bảo hiểm.',
    income: null,
    demandWhy:
      'Kinh doanh, bán hàng chiếm khoảng 47,5% nhu cầu tuyển trên TopCV (2025–2026), cao nhất trong các nhóm nghề. Tỷ lệ tin đăng cao chưa chắc phản ánh nhu cầu tăng: một phần có thể là tuyển thay người nghỉ, nhưng chưa có số liệu về tỷ lệ nghỉ việc. Chưa có số liệu riêng cho bán hàng cho doanh nghiệp.',
    risks: [
      'Áp lực chỉ tiêu; thu nhập gồm lương cứng và hoa hồng nên biến động.',
      'Đi lại nhiều; phải chủ động tìm khách liên tục.',
    ],
    fit:
      'Hướng ngoại dự báo hiệu suất ở nhóm nghề bán hàng, tận tâm dự báo hiệu suất ở mọi nhóm nghề (Barrick và Mount, 1991).',
    test: [
      'Làm bán hàng thời vụ 1–2 tháng (hội chợ, cửa hàng) để biết mình chịu được việc bị từ chối hay không.',
      'Hỏi một nhân viên kinh doanh về cơ cấu lương cứng và hoa hồng, số khách phải gọi mỗi tuần.',
    ],
    note:
      'Số tin tuyển luôn lớn, nhưng đó chưa phải bằng chứng về thu nhập hay độ ổn định. Người hợp nghề là người chịu được bị từ chối và thu nhập biến động; với họ, đây là nghề ít chịu tác động của AI.',
    src: ['topcv-2026', 'barrick-1991'],
  },
  {
    id: 'thuong-mai-dien-tu',
    name: 'Chuyên viên thương mại điện tử',
    field: 'kinhdoanh',
    holland: 'ECA',
    demand: 3,
    conf: 'yeu',
    summary:
      'Vận hành gian hàng trên sàn thương mại điện tử: đăng và tối ưu sản phẩm, quản lý giá và khuyến mãi theo lịch sàn, chạy quảng cáo trong sàn, xử lý đơn, tồn kho, đổi trả và đánh giá của khách.',
    tasks: [
      ['Đăng sản phẩm, viết mô tả', 'cao'],
      ['Quản lý giá, khuyến mãi theo lịch sàn', 'cao'],
      ['Chạy quảng cáo trong sàn', 'cao'],
      ['Xử lý đơn, tồn kho, đổi trả', 'vua'],
      ['Chọn hàng, làm việc với nhà cung cấp', 'thap'],
      ['Xử lý khiếu nại phức tạp', 'thap'],
    ],
    aiText: 'Phần lớn công việc vận hành gian hàng là thao tác theo quy tắc của sàn: viết mô tả, trả lời tin nhắn, chỉnh giá theo chương trình. Chính các sàn đang đưa công cụ tự động cho người bán làm những việc này. Chọn hàng, đàm phán với nhà cung cấp và xử lý khiếu nại phức tạp vẫn cần người.',
    entry:
      'Không đòi bằng chuyên ngành; đại học đã có ngành thương mại điện tử. Không có giấy phép cá nhân; người bán phải tuân thủ quy định về thương mại điện tử và thuế với hộ kinh doanh trên sàn.',
    income: null,
    demandWhy: 'Chưa có số liệu nghề đủ tin cậy.',
    risks: [
      'Phụ thuộc chính sách phí và thuật toán của sàn.',
      'Cao điểm khuyến mãi làm đêm; nhiều vị trí là hợp đồng ngắn ở doanh nghiệp nhỏ.',
    ],
    fit: 'Thích buôn bán, làm việc với số liệu bán hàng, chịu được nhịp làm việc theo đợt khuyến mãi.',
    test: [
      'Mở một gian hàng nhỏ bán 5–10 mặt hàng trong 2 tháng, ghi lại doanh thu, chi phí quảng cáo và phí sàn.',
      'Phỏng vấn một chủ shop đang bán trên sàn về phần việc nào họ đã giao cho công cụ tự động.',
    ],
    note:
      'Phần lớn nhiệm vụ vận hành gian hàng là việc theo mẫu mà sàn và công cụ đang tự động hoá. Người theo nghề nên đi về phía quản lý ngành hàng, chuỗi cung ứng hoặc làm chủ kinh doanh.',
    src: [],
  },
  {
    id: 'cham-soc-khach-hang',
    name: 'Nhân viên chăm sóc khách hàng, tổng đài',
    field: 'kinhdoanh',
    holland: 'SCE',
    demand: 2,
    conf: 'tb',
    summary:
      'Tiếp nhận cuộc gọi và tin nhắn, giải đáp, xử lý khiếu nại và đổi trả, ghi nhận vào hệ thống, chuyển vụ việc phức tạp lên cấp trên, bán thêm theo kịch bản.',
    tasks: [
      ['Trả lời câu hỏi thường gặp', 'cao'],
      ['Tra cứu thông tin, ghi nhận vào hệ thống', 'cao'],
      ['Bán thêm theo kịch bản', 'cao'],
      ['Xử lý khiếu nại thông thường', 'vua'],
      ['Xử lý khách giận dữ, tình huống ngoài quy trình', 'thap'],
    ],
    aiText: 'Câu hỏi lặp lại, trả lời theo kịch bản bằng chữ hoặc giọng nói là dạng nhiệm vụ mà chatbot đã làm được. Theo ILO, gần hai phần ba nhân viên hỗ trợ văn phòng ở Việt Nam làm nghề thuộc nhóm dễ tự động hoá nhất. Khách giận dữ, tình huống ngoài quy trình và khách cần người thật vẫn cần nhân viên.',
    entry: 'Tốt nghiệp trung học phổ thông trở lên; nhiều nơi tuyển cao đẳng, đại học; đào tạo nội bộ vài tuần. Không có giấy phép.',
    income: null,
    demandWhy:
      'Theo báo chí, một ngân hàng lớn trong nước đang thử nghiệm trung tâm dịch vụ khách hàng dùng AI và cho rằng có thể giảm tới 70% nhân sự vận hành; đây là tuyên bố của doanh nghiệp, chưa phải thống kê ngành. BLS dự báo nghề này tại Mỹ giảm khoảng 5% giai đoạn 2024–2034. ILO xếp nhóm hỗ trợ văn phòng có mức tiếp xúc cao nhất.',
    risks: [
      'Áp lực cảm xúc, chỉ tiêu thời gian xử lý; làm ca.',
      'Lộ trình thăng tiến hẹp; việc dễ chuyển sang chatbot hoặc thuê ngoài.',
    ],
    fit: 'Kiên nhẫn, giữ bình tĩnh khi bị phàn nàn, làm việc theo quy trình.',
    test: [
      'Làm thời vụ ở bộ phận chăm sóc khách hàng 1–2 tháng.',
      'Ghi lại tỷ lệ câu hỏi lặp lại trong một ca làm để thấy phần nào sẽ chuyển cho máy.',
    ],
    note:
      'Đây là nghề nằm ngay trong vùng tác động của AI hội thoại. Người đã chọn nghề có thể dùng vài năm đầu để chuyển dần sang vị trí cần xử lý vấn đề phức tạp, quản lý chất lượng dịch vụ hoặc vận hành chính các hệ thống chatbot.',
    src: ['ilo-vn', 'bank-branches', 'bls-2034'],
  },
  {
    id: 'logistics',
    name: 'Chuyên viên logistics, chuỗi cung ứng',
    field: 'kinhdoanh',
    holland: 'CEI',
    demand: 3,
    conf: 'yeu',
    summary:
      'Lập kế hoạch và điều phối dòng hàng: chọn phương thức và hãng vận chuyển, làm chứng từ xuất nhập khẩu và thủ tục hải quan, quản lý kho và tồn kho, theo dõi lô hàng, tối ưu chi phí.',
    tasks: [
      ['Nhập, kiểm tra chứng từ xuất nhập khẩu', 'cao'],
      ['Theo dõi lô hàng, cập nhật trạng thái', 'cao'],
      ['Báo giá cước theo bảng', 'cao'],
      ['Lập kế hoạch vận chuyển, tối ưu chi phí', 'vua'],
      ['Xử lý sự cố, chậm trễ', 'thap'],
      ['Đàm phán với hãng tàu, khách hàng', 'thap'],
    ],
    aiText: 'Chứng từ xuất nhập khẩu, trạng thái lô hàng và bảng giá cước đều là dữ liệu có cấu trúc, nên phần nhập liệu và theo dõi dễ được hệ thống quản lý vận tải làm thay. Khi kế hoạch bị phá vỡ (tàu chậm, hàng bị giữ, khách đổi đơn), việc xử lý và đàm phán vẫn cần người có kinh nghiệm.',
    entry:
      'Đại học logistics, kinh tế đối ngoại, quản trị chuỗi cung ứng; cao đẳng cho vị trí kho, chứng từ. Nhân viên đại lý làm thủ tục hải quan thuê cho doanh nghiệp khác cần chứng chỉ nghiệp vụ khai hải quan.',
    income: null,
    demandWhy:
      'Các ước tính nhu cầu nhân lực logistics của Việt Nam (khoảng 2,2 đến 2,5 triệu người đến năm 2030) không thống nhất và chưa nêu rõ phương pháp, nên chỉ dùng như tín hiệu định tính. Nghề phụ thuộc trực tiếp vào thương mại quốc tế, nên nhu cầu dao động theo đơn hàng xuất khẩu.',
    risks: [
      'Phụ thuộc thương mại quốc tế: thuế quan, cước biển, đơn hàng xuất khẩu.',
      'Làm theo giờ cảng, giờ của khách nước ngoài.',
    ],
    fit: 'Thích sắp xếp, làm việc với số liệu, xử lý tình huống khi kế hoạch bị phá vỡ.',
    test: [
      'Thực tập 1–2 tháng ở công ty giao nhận để biết tỷ lệ việc chứng từ so với việc xử lý sự cố.',
      'Học bộ điều kiện giao hàng Incoterms và làm thử một bộ chứng từ mẫu.',
    ],
    note:
      'Các ước tính nhu cầu nhân lực logistics đều thiếu phương pháp rõ ràng, nên chưa thể nói nghề đang thiếu người. Phần chứng từ đang được số hoá; kinh nghiệm điều phối và xử lý sự cố mới là năng lực khó thay thế.',
    src: ['logistics'],
  },
  {
    id: 'moi-gioi-bds',
    name: 'Môi giới bất động sản',
    field: 'kinhdoanh',
    holland: 'ECS',
    demand: 2,
    conf: 'tb',
    summary:
      'Kết nối người mua và người bán, người thuê và người cho thuê: tìm nguồn hàng và khách, thẩm định sơ bộ pháp lý và giá, dẫn khách xem, thương lượng, hỗ trợ ký hợp đồng.',
    tasks: [
      ['Viết tin đăng, marketing', 'cao'],
      ['Định giá sơ bộ, trả lời câu hỏi cơ bản', 'cao'],
      ['Thẩm định pháp lý sơ bộ', 'vua'],
      ['Dẫn khách xem, tư vấn', 'thap'],
      ['Thương lượng, hỗ trợ ký hợp đồng', 'thap'],
    ],
    aiText: 'Tin đăng, định giá sơ bộ theo khu vực và câu hỏi cơ bản của khách là phần công cụ số đã làm được. Môi giới vẫn cần ở khâu dẫn khách, thương lượng và tạo niềm tin, vì giao dịch có giá trị lớn và rủi ro pháp lý cao.',
    entry:
      'Theo Luật Kinh doanh bất động sản 2023, cá nhân phải có chứng chỉ hành nghề môi giới (tốt nghiệp trung học phổ thông trở lên, hoàn thành khoá bồi dưỡng, đạt sát hạch) và phải hành nghề trong một doanh nghiệp môi giới hoặc sàn giao dịch, không còn hành nghề độc lập.',
    income: null,
    demandWhy:
      'Theo Hội Môi giới Bất động sản Việt Nam, đến 12/2023 khoảng 70% môi giới đã rời nghề, từ khoảng 300.000 xuống dưới 100.000 người. Luật mới nâng điều kiện hành nghề. Chưa có số liệu 2024–2026.',
    risks: [
      'Thu nhập theo chu kỳ thị trường, có năm gần như không có; thường không có lương cứng.',
      'Rủi ro pháp lý khi tư vấn dự án chưa đủ điều kiện bán.',
    ],
    fit:
      'Hướng ngoại dự báo hiệu suất ở nhóm nghề bán hàng (Barrick và Mount, 1991).',
    test: [
      'Làm cộng tác viên cho một sàn có pháp lý rõ trong một mùa để thấy chu kỳ thu nhập.',
      'Đọc kỹ điều kiện hành nghề trong Luật Kinh doanh bất động sản 2023 trước khi đóng tiền học chứng chỉ.',
    ],
    note:
      'Thu nhập phụ thuộc hoa hồng và chu kỳ thị trường: năm 2023, theo VARS, khoảng 70% môi giới đã rời nghề. Chỉ nên theo khi có nguồn tài chính dự phòng cho những năm thị trường trầm lắng.',
    src: ['vars', 'luat-kdbds', 'barrick-1991'],
  },
];
