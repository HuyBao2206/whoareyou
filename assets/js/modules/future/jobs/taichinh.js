// Hồ sơ nghề nhóm Tài chính, hành chính, pháp lý. Căn cứ: research/nghe-nghiep-ho-so.md mục 2.14–2.19, 2.22.

export default [
  {
    id: 'hanh-chinh',
    name: 'Nhân viên hành chính, văn thư, nhập liệu',
    field: 'taichinh',
    holland: 'CSE',
    demand: 2,
    conf: 'kha',
    summary:
      'Bảo đảm công việc giấy tờ và hậu cần của văn phòng: soạn, lưu trữ, phát hành văn bản; nhập và kiểm tra dữ liệu; quản lý lịch, phòng họp; tiếp khách; hỗ trợ thủ tục hành chính.',
    tasks: [
      ['Soạn, lưu trữ, phát hành văn bản', 'cao'],
      ['Nhập và kiểm tra dữ liệu', 'cao'],
      ['Quản lý lịch, phòng họp, văn phòng phẩm', 'cao'],
      ['Hỗ trợ thủ tục hành chính, chấm công', 'vua'],
      ['Tiếp khách, điều phối việc cần gặp mặt', 'thap'],
    ],
    aiText: 'Nhóm nhân viên văn phòng là nhóm có mức tiếp xúc với AI tạo sinh cao nhất, cả trên toàn cầu (ILO, 2025) lẫn ở Việt Nam, nơi gần hai phần ba nhân viên hỗ trợ văn phòng làm nghề thuộc nhóm dễ tự động hoá nhất (ILO, 2026). Cơ chế: nhiệm vụ chữ vào chữ ra, theo quy tắc, lặp lại. Ít chịu tác động: tiếp khách, điều phối việc cần mặt người, xử lý giấy tờ đặc thù.',
    entry:
      'Trung cấp, cao đẳng văn thư lưu trữ, quản trị văn phòng; hoặc đại học bất kỳ. Không có giấy phép. Ở khu vực công, văn thư tuyển theo tiêu chuẩn chức danh viên chức.',
    income: null,
    demandWhy:
      'WEF 2025 xếp nhân viên nhập liệu, trợ lý hành chính và thư ký trong năm nghề giảm nhanh nhất. Theo bảng tổng hợp của Visual Capitalist từ số liệu BLS, nhân viên nhập liệu tại Mỹ giảm khoảng 26% giai đoạn 2024–2034. Ở Việt Nam, ILO xếp nhóm hỗ trợ văn phòng có mức tiếp xúc cao nhất; chưa có số liệu đếm số người làm nghề giảm.',
    risks: [
      'Việc bị gộp hoặc cắt khi cơ quan, doanh nghiệp số hoá quy trình.',
      'Thu nhập thấp; khó thăng tiến nếu không học thêm kỹ năng chuyên môn.',
    ],
    fit: 'Cẩn thận, ngăn nắp, thích công việc có quy trình rõ.',
    test: [
      'Ghi lại một tuần làm việc văn phòng (thực tập hoặc làm thêm), đánh dấu việc nào đã có phần mềm làm thay.',
      'Học một kỹ năng chuyên môn đi kèm (kế toán, nhân sự, quản lý dự án) để có lối chuyển nghề.',
    ],
    note:
      'Ở quốc tế, đây là nhóm có dự báo giảm rõ nhất; ở Việt Nam, đây là nhóm có mức tiếp xúc với AI cao nhất theo ILO, nhưng chưa có số đếm người làm nghề giảm. Không nên chọn làm đích đến lâu dài; nếu đang làm, nên tích luỹ một chuyên môn để chuyển sang vị trí cần phán đoán.',
    src: ['ilo-wp140', 'ilo-vn', 'wef-2025', 'bls-2034'],
  },
  {
    id: 'ke-toan',
    name: 'Kế toán',
    field: 'taichinh',
    holland: 'CEI',
    demand: 3,
    conf: 'tb',
    summary:
      'Ghi chép, tổng hợp và báo cáo tình hình tài chính của đơn vị: hạch toán, lập báo cáo tài chính và báo cáo thuế, quản lý công nợ, tính lương, phân tích chi phí, làm việc với kiểm toán và cơ quan thuế.',
    tasks: [
      ['Hạch toán nghiệp vụ, đối chiếu chứng từ', 'cao'],
      ['Lập báo cáo tài chính, báo cáo thuế', 'vua'],
      ['Quản lý công nợ, thanh toán', 'cao'],
      ['Tính lương, bảo hiểm', 'cao'],
      ['Phân tích chi phí, lập ngân sách', 'vua'],
      ['Giải trình với cơ quan thuế, kiểm toán', 'thap'],
    ],
    aiText: 'Hoá đơn điện tử đã bắt buộc ở Việt Nam, nên hạch toán theo mẫu, đối chiếu chứng từ và tính lương ngày càng được phần mềm làm. Phần ít chịu tác động là xét đoán nghiệp vụ, giải trình với cơ quan thuế và chịu trách nhiệm khi ký báo cáo. Phần nhập liệu kế toán thu hẹp nhanh hơn phần phân tích, thuế và kiểm soát.',
    entry:
      'Trung cấp, cao đẳng, đại học kế toán. Làm kế toán trong doanh nghiệp không cần chứng chỉ hành nghề; kế toán trưởng phải đáp ứng tiêu chuẩn riêng theo Luật Kế toán 2015 (chưa đối chiếu văn bản trong lần cập nhật này). Hành nghề dịch vụ kế toán cần chứng chỉ kế toán viên, thi do Bộ Tài chính tổ chức; điều kiện dự thi gồm tối thiểu 36 tháng làm tài chính, kế toán, kiểm toán sau khi tốt nghiệp đại học.',
    income: null,
    demandWhy:
      'BLS dự báo kế toán và kiểm toán viên tại Mỹ tăng khoảng 5% giai đoạn 2024–2034. Chưa có số liệu Việt Nam. Sức ép tập trung ở phần hạch toán theo mẫu (xem bảng nhiệm vụ), không ở toàn nghề.',
    risks: [
      'Số người học lớn, cạnh tranh mạnh ở vị trí mới vào nghề.',
      'Cao điểm quyết toán; trách nhiệm pháp lý khi sai số liệu.',
    ],
    fit: 'Cẩn thận với số liệu, làm việc theo chuẩn mực, chịu được cao điểm cuối kỳ.',
    test: [
      'Làm sổ sách thu chi một tháng cho cửa hàng của người quen bằng phần mềm kế toán miễn phí.',
      'Hỏi một kế toán đang đi làm về phần việc phần mềm đã làm thay trong 3 năm qua.',
    ],
    note:
      'Phần việc thường giao cho người mới vào nghề, như hạch toán và đối chiếu chứng từ, là phần phần mềm làm được nhiều nhất. Lợi thế thuộc về người hiểu thuế, phân tích chi phí và đi được đến chứng chỉ hành nghề.',
    src: ['bls-2034', 'luat-kt'],
  },
  {
    id: 'kiem-toan',
    name: 'Kiểm toán viên',
    field: 'taichinh',
    holland: 'CEI',
    demand: 3,
    conf: 'tb',
    summary:
      'Kiểm tra và đưa ý kiến độc lập về báo cáo tài chính và hệ thống kiểm soát của đơn vị: lập kế hoạch, đánh giá rủi ro, kiểm tra chứng từ, làm việc với khách hàng, lập báo cáo kiểm toán.',
    tasks: [
      ['Kiểm tra chứng từ, chọn mẫu, đối chiếu', 'cao'],
      ['Đọc hợp đồng, tài liệu hàng loạt', 'cao'],
      ['Lập kế hoạch, đánh giá rủi ro', 'vua'],
      ['Đánh giá kiểm soát nội bộ', 'vua'],
      ['Làm việc với khách hàng, thu thập giải trình', 'thap'],
      ['Ký và chịu trách nhiệm ý kiến kiểm toán', 'thap'],
    ],
    aiText: 'Phần mềm phân tích dữ liệu cho phép kiểm tra toàn bộ giao dịch thay vì chọn mẫu, và mô hình ngôn ngữ đọc hợp đồng hàng loạt, nên các khâu kiểm tra chi tiết chịu tác động cao. Xét đoán chuyên môn, thái độ hoài nghi nghề nghiệp và trách nhiệm ký báo cáo vẫn thuộc về kiểm toán viên.',
    entry:
      'Đại học kế toán, kiểm toán, tài chính. Ký báo cáo kiểm toán phải là kiểm toán viên hành nghề: có chứng chỉ kiểm toán viên (thi do Bộ Tài chính tổ chức, tối thiểu 36 tháng kinh nghiệm để dự thi) và đăng ký hành nghề theo Luật Kiểm toán độc lập. Một số người học thêm chứng chỉ quốc tế. Từ khi ra trường đến khi ký báo cáo thường mất nhiều năm.',
    income: null,
    demandWhy:
      'BLS gộp nghề này với kế toán, dự báo tăng khoảng 5% tại Mỹ giai đoạn 2024–2034. Chưa có số liệu Việt Nam.',
    risks: [
      'Mùa cao điểm đầu năm làm rất nhiều giờ.',
      'Trách nhiệm pháp lý cao; con đường lấy chứng chỉ dài.',
    ],
    fit: 'Cẩn thận, hoài nghi, làm việc tốt với khách hàng khi phải đặt câu hỏi khó.',
    test: [
      'Thực tập một mùa kiểm toán (thường tháng 1–3) tại một công ty kiểm toán.',
      'Làm thử một đề thi chứng chỉ kiểm toán viên các năm trước để biết khối lượng học thực tế.',
    ],
    note:
      'Công nghệ thay đổi cách kiểm toán, nhưng trách nhiệm ký báo cáo vẫn là rào cản bảo vệ nghề. Đổi lại, con đường vào nghề dài và mùa cao điểm rất nặng.',
    src: ['bls-2034', 'luat-kt'],
  },
  {
    id: 'giao-dich-vien',
    name: 'Giao dịch viên ngân hàng',
    field: 'taichinh',
    holland: 'CES',
    demand: 1,
    conf: 'kha',
    summary:
      'Thực hiện giao dịch tại quầy: nhận và chi tiền, chuyển khoản, mở tài khoản, phát hành thẻ, kiểm đếm quỹ cuối ngày, xác minh giấy tờ, giới thiệu sản phẩm của ngân hàng.',
    tasks: [
      ['Nhận, chi tiền, chuyển khoản tại quầy', 'cao'],
      ['Mở tài khoản, phát hành thẻ', 'cao'],
      ['Kiểm đếm, quản lý quỹ cuối ngày', 'vua'],
      ['Xác minh giấy tờ, chống gian lận', 'vua'],
      ['Tư vấn khách lớn tuổi, giao dịch bất thường', 'thap'],
    ],
    aiText: 'Tác động chính đến từ ngân hàng số và xác thực sinh trắc học, không chỉ AI tạo sinh: khách tự mở tài khoản và chuyển tiền trên ứng dụng. Phần còn lại tại quầy là giao dịch phức tạp và khách cần hỗ trợ trực tiếp.',
    entry:
      'Đại học tài chính ngân hàng, kinh tế; ngân hàng tự đào tạo nghiệp vụ. Không có giấy phép cá nhân.',
    income:
      'Chưa có số liệu đủ tin cậy cho riêng chức danh. Thu nhập bình quân ngành tài chính, ngân hàng, bảo hiểm khoảng 12,8 triệu đồng/tháng năm 2024 (Tổng cục Thống kê, qua báo chí), tính cho toàn ngành và mọi vị trí.',
    demandWhy:
      'Năm 2025, VietinBank đóng 108 phòng giao dịch và Vietcombank dừng 27 điểm giao dịch; khảo sát của Ngân hàng Nhà nước quý I/2025 cho thấy hơn 21% ngân hàng tiếp tục giảm nhân sự; Sacombank giảm 930 người trong quý I/2025 (theo báo chí dẫn báo cáo tài chính). Số đóng phòng giao dịch không trực tiếp là số giao dịch viên, nhưng cùng chiều với xu hướng giảm của nghề trong WEF 2025.',
    risks: [
      'Nghề co lại nhanh; chỉ tiêu bán sản phẩm.',
      'Áp lực sai sót tiền mặt.',
    ],
    fit: 'Cẩn thận, giao tiếp tốt với khách, làm việc theo quy trình chặt.',
    test: [
      'Nếu đã được nhận, hỏi rõ lộ trình chuyển sang tư vấn tài chính cá nhân hoặc tín dụng sau 1–2 năm.',
      'So sánh số phòng giao dịch của ngân hàng định ứng tuyển trong 3 năm gần nhất (công bố trong báo cáo thường niên).',
    ],
    note:
      'Số liệu đóng phòng giao dịch và cắt giảm nhân sự ở Việt Nam trùng với xu hướng quốc tế. Vị trí này chỉ nên là bước đầu vào ngân hàng, với kế hoạch chuyển sang mảng tư vấn hoặc tín dụng.',
    src: ['bank-branches', 'wef-2025', 'nso-2024-bao'],
  },
  {
    id: 'tin-dung',
    name: 'Chuyên viên phân tích tài chính, tín dụng',
    field: 'taichinh',
    holland: 'CIE',
    demand: 3,
    conf: 'yeu',
    summary:
      'Đánh giá sức khoẻ tài chính của doanh nghiệp, khách hàng vay hoặc khoản đầu tư: thu thập báo cáo, phân tích khả năng trả nợ và định giá, lập mô hình, thẩm định hồ sơ vay, viết tờ trình.',
    tasks: [
      ['Thu thập báo cáo tài chính, số liệu ngành', 'cao'],
      ['Chấm điểm tín dụng khách hàng cá nhân', 'cao'],
      ['Viết tờ trình nháp', 'cao'],
      ['Lập mô hình, dự báo', 'vua'],
      ['Thẩm định doanh nghiệp phức tạp, gặp khách', 'thap'],
      ['Chịu trách nhiệm đề xuất phê duyệt', 'thap'],
    ],
    aiText: 'ILO xếp tài chính trong nhóm ngành có tỷ lệ việc làm tiếp xúc cao ở Việt Nam. Thu thập số liệu, viết tờ trình nháp và chấm điểm tín dụng bán lẻ (vốn đã được tự động hoá) chịu tác động cao. Thẩm định doanh nghiệp phức tạp, gặp khách và chịu trách nhiệm phê duyệt ít chịu tác động.',
    entry:
      'Đại học tài chính, ngân hàng, kinh tế. Phân tích, tư vấn đầu tư tại công ty chứng khoán cần chứng chỉ hành nghề chứng khoán. CFA là chuẩn quốc tế, không bắt buộc.',
    income: null,
    demandWhy:
      'BLS dự báo nhà phân tích tài chính, đầu tư tại Mỹ tăng khoảng 5,7% giai đoạn 2024–2034. Ở Việt Nam, ngành ngân hàng đang tinh gọn nhân sự, nhưng chưa có số liệu tách riêng cho vị trí phân tích.',
    risks: [
      'Chỉ tiêu tín dụng; trách nhiệm khi nợ xấu.',
      'Ngành ngân hàng đang giảm nhân sự ở nhiều bộ phận.',
    ],
    fit: 'Thích phân tích số liệu, cẩn trọng khi ra quyết định có rủi ro.',
    test: [
      'Phân tích báo cáo tài chính của một công ty niêm yết và viết một trang khuyến nghị, nhờ người trong ngành nhận xét.',
      'Thi thử cấp độ 1 của một chứng chỉ phân tích tài chính để đo khối lượng học.',
    ],
    note:
      'Phần thu thập và tổng hợp số liệu đang được tự động hoá; phần thẩm định và chịu trách nhiệm thì không. Người theo nghề cần đi nhanh đến mức được giao quyết định.',
    src: ['ilo-vn', 'bls-2034', 'bank-branches'],
  },
  {
    id: 'nhan-su',
    name: 'Chuyên viên nhân sự',
    field: 'taichinh',
    holland: 'SEC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Quản lý con người trong tổ chức: tuyển dụng, hồ sơ và hợp đồng lao động, bảo hiểm xã hội, phối hợp tính lương, đào tạo, đánh giá hiệu suất, quan hệ lao động, bảo đảm tuân thủ Bộ luật Lao động.',
    tasks: [
      ['Đăng tin, sàng lọc hồ sơ', 'cao'],
      ['Soạn mô tả công việc, trả lời câu hỏi chính sách', 'cao'],
      ['Hồ sơ, hợp đồng, bảo hiểm xã hội', 'vua'],
      ['Phỏng vấn, đánh giá ứng viên', 'thap'],
      ['Xử lý mâu thuẫn, kỷ luật, quan hệ lao động', 'thap'],
    ],
    aiText: 'Sàng lọc hồ sơ, soạn mô tả công việc và trả lời câu hỏi về chính sách chịu tác động cao. Phỏng vấn, xử lý mâu thuẫn và thương lượng ít chịu tác động. Rủi ro riêng: sàng lọc bằng AI có thể mang thiên lệch, và người làm nhân sự phải chịu trách nhiệm về quyết định đó.',
    entry: 'Đại học quản trị nhân lực, quản trị kinh doanh, luật, tâm lý. Không có giấy phép.',
    income: null,
    demandWhy: 'Chưa có số liệu Việt Nam đủ tin cậy.',
    risks: [
      'Phần hành chính nhân sự dễ bị số hoá.',
      'Đứng giữa người lao động và ban giám đốc trong các quyết định khó.',
    ],
    fit: 'Quan tâm đến con người, nắm quy định, giữ được bí mật và công bằng.',
    test: [
      'Tham gia tổ chức tuyển thành viên cho một câu lạc bộ hoặc dự án, từ đăng tin đến phỏng vấn.',
      'Đọc chương về hợp đồng lao động trong Bộ luật Lao động 2019 để biết mình có hứng thú với phần pháp lý hay không.',
    ],
    note:
      'Phần thủ tục nhân sự dễ số hoá nhất. Người mới nên tích luỹ kinh nghiệm ở quan hệ lao động và đào tạo, những mảng cần thương lượng trực tiếp.',
    src: [],
  },
  {
    id: 'luat-su',
    name: 'Luật sư, chuyên viên pháp chế',
    field: 'taichinh',
    holland: 'EIS',
    demand: 3,
    conf: 'tb',
    summary:
      'Tư vấn pháp lý, soạn và rà soát hợp đồng, nghiên cứu luật, tranh tụng tại toà hoặc trọng tài, thương lượng; pháp chế doanh nghiệp tập trung vào tuân thủ và quản trị rủi ro pháp lý.',
    tasks: [
      ['Nghiên cứu luật, án lệ', 'cao'],
      ['Soạn, rà soát hợp đồng, văn bản', 'cao'],
      ['Tư vấn chiến lược pháp lý cho khách', 'thap'],
      ['Tranh tụng, đại diện tại toà', 'thap'],
      ['Thương lượng, hoà giải', 'thap'],
    ],
    aiText: 'Nghiên cứu luật, rà soát hợp đồng và soạn nháp chịu tác động cao, đặc biệt là phần việc của trợ lý pháp lý và luật sư mới. Tranh tụng, tư vấn chiến lược và trách nhiệm nghề nghiệp ít chịu tác động. Ở nước ngoài đã có trường hợp luật sư nộp án lệ không có thật do công cụ AI tạo ra; phần kiểm chứng nguồn vì vậy vẫn phải do người làm và người ký chịu trách nhiệm.',
    entry:
      'Cử nhân luật (4 năm), khoá đào tạo nghề luật sư 12 tháng, tập sự 12 tháng tại tổ chức hành nghề, kiểm tra kết quả tập sự, rồi mới được cấp chứng chỉ hành nghề và gia nhập Đoàn luật sư. Tổng thời gian thực tế khoảng 6–7 năm từ khi vào đại học. Pháp chế doanh nghiệp không bắt buộc chứng chỉ luật sư.',
    income: null,
    demandWhy:
      'BLS dự báo luật sư tại Mỹ tăng khoảng 5% giai đoạn 2025–2035; trợ lý pháp lý gần như không đổi giai đoạn 2024–2034. Chưa có số liệu Việt Nam.',
    risks: [
      'Con đường dài; giai đoạn tập sự thu nhập thấp.',
      'Cạnh tranh cao ở đô thị lớn; áp lực đạo đức nghề nghiệp.',
    ],
    fit: 'Thích lập luận, thuyết phục, đọc tài liệu dày và chịu trách nhiệm về lời khuyên.',
    test: [
      'Thực tập tại văn phòng luật một mùa hè để biết tỷ lệ việc soạn văn bản so với tranh tụng.',
      'Dự vài phiên toà công khai để quan sát công việc của luật sư tranh tụng.',
    ],
    note:
      'AI làm nhanh phần nghiên cứu và soạn thảo, vốn là việc của người mới vào nghề, nên giai đoạn học việc có thể khó hơn. Người theo nghề cần tính đủ 6–7 năm đào tạo và tập sự trước khi có thu nhập ổn định.',
    src: ['luat-ls', 'bls-2035', 'bls-2034'],
  },
];
