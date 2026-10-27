// Hồ sơ nghề nhóm Kỹ thuật và sản xuất. Căn cứ: research/nghe-nghiep-ho-so.md mục 2.32–2.38.

export default [
  {
    id: 'co-khi',
    name: 'Kỹ sư cơ khí, tự động hoá',
    field: 'kythuat',
    holland: 'RIC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Thiết kế, chế tạo và cải tiến máy móc, dây chuyền sản xuất: thiết kế chi tiết bằng phần mềm CAD, tính toán kỹ thuật, lập trình hệ tự động (PLC, robot), chạy thử, bảo trì.',
    tasks: [
      ['Thiết kế chi tiết, cụm máy trên CAD', 'vua'],
      ['Tính toán, mô phỏng kỹ thuật', 'vua'],
      ['Viết chương trình PLC, robot', 'vua'],
      ['Lắp đặt, chạy thử, xử lý sự cố tại xưởng', 'thap'],
      ['Bảo trì, cải tiến dây chuyền', 'thap'],
      ['Lập hồ sơ kỹ thuật, an toàn', 'cao'],
    ],
    aiText: 'Thiết kế sinh, mô phỏng và viết chương trình PLC nháp có thể dùng AI hỗ trợ. Lắp đặt, chạy thử và xử lý sự cố tại xưởng ít chịu tác động, vì mỗi dây chuyền có điều kiện vận hành riêng.',
    entry:
      'Đại học cơ khí, cơ điện tử, tự động hoá (4–5 năm). Không có giấy phép chung; thiết kế hạng mục cơ khí trong công trình xây dựng cần chứng chỉ hành nghề hoạt động xây dựng.',
    income: null,
    demandWhy:
      'Chưa có số liệu Việt Nam riêng. BLS dự báo nhóm kiến trúc và kỹ thuật tại Mỹ tăng khoảng 6,8% giai đoạn 2025–2035. Nhu cầu trong nước phụ thuộc đơn hàng của khu vực sản xuất xuất khẩu.',
    risks: [
      'Làm trong nhà máy, khu công nghiệp xa thành phố.',
      'Tai nạn máy móc; ca kíp theo sản xuất.',
    ],
    fit: 'Thích máy móc, giải quyết vấn đề kỹ thuật cụ thể, chịu được môi trường xưởng.',
    test: [
      'Tham gia một cuộc thi robot hoặc tự làm một mô hình tự động hoá nhỏ (Arduino, PLC mô phỏng).',
      'Thực tập ở phòng bảo trì của một nhà máy để thấy công việc hằng ngày.',
    ],
    note:
      'Chưa có số liệu Việt Nam để đánh giá nhu cầu, nên nghề nằm ở mức trung tính. Phần việc khó thay thế là lắp đặt, chạy thử và xử lý sự cố tại xưởng; kỹ năng PLC và robot công nghiệp là phần nên học thêm ngoài chương trình cơ khí.',
    src: ['bls-2035'],
  },
  {
    id: 'ky-su-dien',
    name: 'Kỹ sư điện, năng lượng tái tạo',
    field: 'kythuat',
    holland: 'RIC',
    demand: 3.5,
    conf: 'tb',
    summary:
      'Thiết kế, giám sát và vận hành hệ thống điện: cấp điện cho công trình, trạm và lưới, nhà máy điện mặt trời, điện gió; tính toán phụ tải, bảo vệ, đấu nối lưới; theo dõi hiệu suất và an toàn.',
    tasks: [
      ['Khảo sát, đánh giá tiềm năng nắng, gió', 'vua'],
      ['Thiết kế hệ thống, tính toán phụ tải', 'vua'],
      ['Mô phỏng, dự báo sản lượng', 'cao'],
      ['Giám sát thi công, lắp đặt', 'thap'],
      ['Vận hành, bảo trì, xử lý sự cố hiện trường', 'thap'],
      ['Hồ sơ đấu nối, pháp lý', 'vua'],
    ],
    aiText: 'Mô phỏng, dự báo sản lượng và giám sát từ xa dùng nhiều phần mềm và AI. Khảo sát, lắp đặt, kiểm tra hiện trường và xử lý sự cố lưới điện ít chịu tác động.',
    entry:
      'Đại học kỹ thuật điện, hệ thống điện, kỹ thuật năng lượng. Thiết kế, giám sát công trình cần chứng chỉ hành nghề hoạt động xây dựng. Yêu cầu về thẻ an toàn điện cho người vận hành chưa đối chiếu văn bản trong lần cập nhật này.',
    income:
      'Chưa có số liệu đủ tin cậy cho riêng chức danh. Thu nhập bình quân ngành sản xuất, phân phối điện, khí đốt khoảng 11,5 triệu đồng/tháng năm 2024 (Tổng cục Thống kê, qua báo chí), tính cho toàn ngành và mọi vị trí.',
    demandWhy:
      'Quy hoạch điện VIII điều chỉnh (QĐ 768/QĐ-TTg, 4/2025) đặt tỷ trọng điện tái tạo, không kể thuỷ điện, 28–36% sản lượng năm 2030 và nhu cầu vốn khoảng 136,3 tỷ USD cho nguồn và lưới giai đoạn 2026–2030. Đây là tín hiệu đầu tư, chưa phải số nhân lực cần tuyển, nên nghề được đặt ở 3,5 thay vì 4. WEF 2025 đưa kỹ sư năng lượng tái tạo và môi trường vào nhóm tăng nhanh.',
    risks: [
      'Phụ thuộc chính sách giá điện và cơ chế đấu nối của từng giai đoạn.',
      'Nguy cơ điện giật, làm trên cao, ngoài trời; công trình xa.',
    ],
    fit: 'Thích vật lý và hệ thống kỹ thuật, chịu được làm việc ngoài hiện trường.',
    test: [
      'Thực tập tại một đơn vị lắp đặt điện mặt trời mái nhà trong một mùa.',
      'Đọc tóm tắt Quy hoạch điện VIII điều chỉnh để biết loại dự án nào sẽ được đầu tư trong 5 năm tới.',
    ],
    note:
      'Quy hoạch điện tạo nền nhu cầu dài hạn có văn bản rõ ràng. Rủi ro chính đến từ chính sách: khi cơ chế giá và đấu nối thay đổi, dự án và việc làm có thể chậm lại nhiều năm.',
    src: ['qd768', 'wef-2025', 'nso-2024-bao'],
  },
  {
    id: 'xay-dung',
    name: 'Kỹ sư xây dựng',
    field: 'kythuat',
    holland: 'RIC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Thiết kế và quản lý thi công công trình: khảo sát, thiết kế kết cấu và hạ tầng, lập dự toán và hồ sơ mời thầu, giám sát chất lượng, tiến độ và an toàn, nghiệm thu.',
    tasks: [
      ['Tính toán kết cấu, bóc khối lượng', 'vua'],
      ['Lập dự toán, hồ sơ mời thầu', 'cao'],
      ['Mô hình thông tin công trình (BIM)', 'vua'],
      ['Giám sát thi công, chất lượng, an toàn', 'thap'],
      ['Xử lý sự cố, làm việc với chủ đầu tư', 'thap'],
      ['Nghiệm thu, hoàn công', 'vua'],
    ],
    aiText: 'BIM, phần mềm tính toán kết cấu và bóc khối lượng tự động làm nhanh phần văn phòng. Công trường, xử lý sự cố và ký nghiệm thu ít chịu tác động.',
    entry:
      'Đại học xây dựng (4,5–5 năm). Các chức danh thiết kế, giám sát, chủ nhiệm, chỉ huy trưởng cần chứng chỉ hành nghề hoạt động xây dựng theo Luật Xây dựng và Nghị định 175/2024/NĐ-CP, chia hạng theo kinh nghiệm.',
    income: null,
    demandWhy:
      'Chưa có số liệu nhân lực Việt Nam đủ tin cậy. Nhu cầu đi theo hai chu kỳ: đầu tư công vào hạ tầng và thị trường bất động sản.',
    risks: [
      'Tai nạn công trường; làm xa nhà.',
      'Ngành chu kỳ; nợ đọng thanh toán ở các dự án.',
    ],
    fit: 'Thích công trình cụ thể, chịu được môi trường ngoài trời và trách nhiệm an toàn.',
    test: [
      'Thực tập ở công trường một mùa hè để biết tỷ lệ việc văn phòng so với hiện trường.',
      'Hỏi kỹ sư đang làm về số năm cần để đạt chứng chỉ hành nghề hạng III, II.',
    ],
    note:
      'Nhu cầu đi theo chu kỳ đầu tư công và bất động sản. Người theo nghề cần chuẩn bị cho giai đoạn đầu làm việc xa nhà và lộ trình chứng chỉ theo kinh nghiệm.',
    src: [],
  },
  {
    id: 'dien-lanh',
    name: 'Kỹ thuật viên điện, điện lạnh',
    field: 'kythuat',
    holland: 'RCE',
    demand: 3,
    conf: 'yeu',
    summary:
      'Lắp đặt, bảo dưỡng và sửa chữa hệ thống điện và thiết bị làm lạnh trong nhà ở, toà nhà, nhà máy, kho lạnh: đi dây, lắp thiết bị, nạp gas, chẩn đoán lỗi, kiểm tra an toàn.',
    tasks: [
      ['Lắp đặt đường dây, thiết bị', 'thap'],
      ['Lắp đặt, bảo dưỡng điều hoà, kho lạnh', 'thap'],
      ['Chẩn đoán, sửa chữa', 'thap'],
      ['Đọc bản vẽ, kiểm tra an toàn', 'vua'],
      ['Báo giá, làm việc với khách', 'vua'],
    ],
    aiText: 'Phần lớn là việc tay chân trong môi trường không cố định (nhà khách, công trình), loại nhiệm vụ AI tạo sinh và robot hiện chưa làm được với chi phí hợp lý. Chẩn đoán từ xa và báo giá có thể được phần mềm hỗ trợ.',
    entry:
      'Sơ cấp, trung cấp, cao đẳng nghề điện công nghiệp, kỹ thuật máy lạnh (vài tháng đến 3 năm). Làm với môi chất lạnh chịu quy định về quản lý chất làm suy giảm tầng ô-dôn.',
    income: null,
    demandWhy:
      'Chưa có số liệu Việt Nam đủ tin cậy cho nghề này.',
    risks: [
      'Điện giật, ngã cao, nóng.',
      'Nhiều người làm thợ tự do, không bảo hiểm xã hội; thu nhập theo mùa.',
    ],
    fit: 'Khéo tay, thích sửa chữa, làm việc trực tiếp với khách hàng.',
    test: [
      'Học một khoá sơ cấp vài tháng và theo thợ đi việc thực tế.',
      'Tính chi phí đồ nghề và thời gian để có lượng khách ổn định nếu muốn làm độc lập.',
    ],
    note:
      'Nghề ít chịu tác động của AI và có rào cản đào tạo thấp. Điểm yếu là tính phi chính thức: muốn có thu nhập và bảo hiểm ổn định, nên làm cho doanh nghiệp hoặc đăng ký hộ kinh doanh.',
    src: [],
  },
  {
    id: 'o-to',
    name: 'Kỹ thuật viên ô tô, xe điện',
    field: 'kythuat',
    holland: 'RIC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Chẩn đoán, bảo dưỡng và sửa chữa ô tô: động cơ, hộp số, gầm, hệ thống điện và điện tử; với xe điện, kiểm tra pin cao áp, hệ truyền động điện và cập nhật phần mềm.',
    tasks: [
      ['Chẩn đoán lỗi bằng máy', 'vua'],
      ['Bảo dưỡng định kỳ', 'thap'],
      ['Sửa chữa cơ khí', 'thap'],
      ['Sửa hệ thống điện, điện tử, pin cao áp', 'thap'],
      ['Tư vấn khách, báo giá', 'vua'],
    ],
    aiText: 'Tác động của AI tạo sinh thấp vì phần lớn là thao tác tay. Thay đổi lớn hơn đến từ xe điện: ít chi tiết cơ khí hơn, nên việc bảo dưỡng động cơ giảm, việc điện tử và phần mềm tăng.',
    entry:
      'Trung cấp, cao đẳng công nghệ ô tô; đại học cho kỹ sư. Hãng xe đào tạo chứng chỉ nội bộ, đặc biệt cho hệ thống điện cao áp. Không có giấy phép hành nghề riêng.',
    income: null,
    demandWhy:
      'WEF 2025 xếp chuyên gia xe tự hành và xe điện, một nghề kỹ sư, trong nhóm tăng nhanh; chưa có tín hiệu tương tự cho kỹ thuật viên sửa chữa. Chưa có số liệu nhân lực Việt Nam.',
    risks: [
      'Rủi ro điện cao áp với xe điện nếu không được đào tạo.',
      'Hoá chất, tiếng ồn; tay nghề cơ khí truyền thống mất giá dần.',
    ],
    fit: 'Thích máy móc, chẩn đoán lỗi, cập nhật công nghệ mới.',
    test: [
      'Thực tập tại xưởng dịch vụ của hãng có bán xe điện.',
      'Tìm hiểu chương trình chứng chỉ điện cao áp của các hãng trước khi chọn trường.',
    ],
    note:
      'Nghề đang chuyển từ cơ khí sang điện tử. Người học nên chọn chương trình có nội dung xe điện và chẩn đoán điện tử, vì phần cơ khí thuần sẽ thu hẹp dần.',
    src: ['wef-2025'],
  },
  {
    id: 'cong-nhan',
    name: 'Công nhân vận hành dây chuyền (may, điện tử)',
    field: 'kythuat',
    holland: 'RCI',
    demand: 3,
    conf: 'yeu',
    summary:
      'Vận hành máy theo công đoạn trong dây chuyền sản xuất: may, lắp ráp, hàn linh kiện, tự kiểm tra chất lượng, vệ sinh máy, ghi sản lượng, tuân thủ an toàn.',
    tasks: [
      ['Vận hành máy theo công đoạn lặp lại, ghi sản lượng', 'cao'],
      ['Lắp ráp, hàn linh kiện điện tử', 'vua'],
      ['May chi tiết', 'thap'],
      ['Tự kiểm tra chất lượng', 'vua'],
      ['Vệ sinh, bảo dưỡng máy cơ bản', 'thap'],
    ],
    aiText: 'Tác động không đến từ AI tạo sinh mà từ robot và tự động hoá ở công đoạn lặp lại. Lắp ráp điện tử dễ tự động hoá hơn may, vì vải mềm, khó cầm nắm bằng máy. Chưa có số liệu Việt Nam về tốc độ thay thế.',
    entry:
      'Không đòi bằng; đào tạo tại doanh nghiệp vài ngày đến vài tuần. Sơ cấp, trung cấp nghề cho vị trí kỹ thuật chuyền, tổ trưởng.',
    income:
      'Sàn pháp lý là lương tối thiểu vùng: vùng I 5,31 triệu đồng/tháng từ 1/1/2026 (Nghị định 293/2025/NĐ-CP). Thu nhập thực tế gồm làm thêm giờ, phụ cấp: chưa có số liệu đủ tin cậy.',
    demandWhy:
      'Chưa có số liệu riêng cho nghề. Lao động công nghiệp và xây dựng nói chung tăng từ 17,5 triệu (năm 2025) lên 18,0 triệu (quý III/2026); ngược lại, đơn hàng xuất khẩu chịu biến động thuế quan của Mỹ giai đoạn 2025–2026.',
    risks: [
      'Làm thêm giờ dài; bệnh nghề nghiệp (cơ xương khớp, mắt).',
      'Hợp đồng ngắn; dễ bị cắt giảm khi mất đơn hàng.',
      'Ít cơ hội học kỹ năng chuyển nghề nếu chỉ làm một công đoạn.',
    ],
    fit: 'Chịu được việc lặp lại, làm theo quy trình, sức khoẻ tốt.',
    test: [
      'Hỏi kỹ về giờ làm thêm, hợp đồng và bảo hiểm trước khi nhận việc.',
      'Đăng ký khoá kỹ thuật chuyền hoặc bảo trì máy để có lối lên vị trí kỹ thuật.',
    ],
    note:
      'Việc làm trong nhà máy giúp tăng thu nhập so với nông nghiệp, nhưng phụ thuộc đơn hàng và dần chịu tác động của tự động hoá. Nên coi đây là bước đầu và tích luỹ kỹ năng kỹ thuật để không bị kẹt ở công đoạn dễ thay thế nhất.',
    src: ['nd-luong', 'nso-q3', 'nso-2025'],
  },
];
