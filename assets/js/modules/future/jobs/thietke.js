// Hồ sơ nghề nhóm Thiết kế, nội dung, ngôn ngữ. Căn cứ: research/nghe-nghiep-ho-so.md mục 2.7–2.9, 2.21, 2.24, 2.42.

export default [
  {
    id: 'ui-ux',
    name: 'Nhà thiết kế UI/UX',
    field: 'thietke',
    holland: 'AIE',
    demand: 3,
    conf: 'yeu',
    summary:
      'Thiết kế cách người dùng tương tác với ứng dụng và trang web: nghiên cứu người dùng, vẽ luồng và khung sườn, thiết kế giao diện, làm bản mẫu và kiểm tra khả dụng.',
    tasks: [
      ['Nghiên cứu người dùng: phỏng vấn, quan sát', 'thap'],
      ['Vẽ luồng, khung sườn', 'vua'],
      ['Thiết kế giao diện, biến thể', 'cao'],
      ['Làm bản mẫu tương tác', 'cao'],
      ['Kiểm tra khả dụng, đề xuất sửa', 'vua'],
      ['Thống nhất với lập trình và kinh doanh', 'thap'],
    ],
    aiText: 'Công cụ sinh giao diện tạo nhanh bản mẫu, biến thể và nội dung giả lập, nên khâu dựng màn hình chịu tác động cao. Phần nghiên cứu người dùng, quyết định thiết kế dựa trên hành vi thật và thương lượng giữa các bên khó giao cho máy.',
    entry:
      'Đại học thiết kế, công nghệ thông tin, tâm lý, hoặc ngành khác kèm khoá UI/UX 3–6 tháng. Bộ hồ sơ sản phẩm là điều kiện quyết định: 3–5 dự án trình bày rõ quy trình, không chỉ ảnh đẹp. Không có giấy phép hành nghề.',
    income: null,
    demandWhy:
      'Chưa có số liệu Việt Nam đủ tin cậy. Một số bản tóm tắt WEF 2025 xếp thiết kế UI/UX trong nhóm tăng nhanh, nhưng chưa đối chiếu được với bảng gốc. Mức 3 phản ánh tình trạng thiếu dữ liệu.',
    risks: [
      'Nhiều người vào nghề qua khoá ngắn, cạnh tranh mạnh ở cấp mới vào nghề.',
      'Ở doanh nghiệp nhỏ, UX bị gộp với thiết kế đồ hoạ, ít được đầu tư nghiên cứu người dùng.',
    ],
    fit:
      'Kết hợp óc thẩm mỹ với tò mò về hành vi con người, chịu được việc sửa thiết kế nhiều vòng theo phản hồi.',
    test: [
      'Thiết kế lại một màn hình của ứng dụng quen thuộc, phỏng vấn 5 người dùng trước và sau khi sửa.',
      'Nhờ một nhà thiết kế đang đi làm nhận xét bộ hồ sơ đầu tiên.',
    ],
    note:
      'Phần dựng màn hình đang được công cụ làm nhanh; phần hiểu người dùng thì không. Bộ hồ sơ cần chứng minh được năng lực nghiên cứu và lập luận, vì đó là phần nhà tuyển dụng không mua được bằng phần mềm.',
    src: ['wef-2025'],
  },
  {
    id: 'do-hoa',
    name: 'Nhà thiết kế đồ hoạ',
    field: 'thietke',
    holland: 'AER',
    demand: 3,
    conf: 'yeu',
    summary:
      'Thiết kế ấn phẩm in và số, bao bì, nhận diện thương hiệu theo yêu cầu của khách hàng; chuẩn bị file đúng kỹ thuật để in hoặc xuất bản.',
    tasks: [
      ['Tìm hiểu thương hiệu, nhận yêu cầu', 'thap'],
      ['Phác ý tưởng, phương án', 'vua'],
      ['Thiết kế ảnh minh hoạ, biến thể', 'cao'],
      ['Chỉnh sửa theo phản hồi', 'cao'],
      ['Chuẩn bị file in, kiểm soát chất lượng in', 'vua'],
    ],
    aiText: 'Đây là nghề chịu tác động trực tiếp của mô hình sinh ảnh: phác thảo, biến thể, ảnh minh hoạ và chỉnh ảnh đều làm được nhanh hơn nhiều so với làm tay. Hiểu thương hiệu, chọn ý tưởng, làm việc với khách, kiểm soát chất lượng in và chịu trách nhiệm bản quyền vẫn cần người.',
    entry:
      'Đại học, cao đẳng mỹ thuật ứng dụng hoặc thiết kế đồ hoạ; hoặc trung cấp, khoá nghề kèm bộ hồ sơ. Không có giấy phép. Bộ hồ sơ quan trọng hơn bằng cấp.',
    income: null,
    demandWhy:
      'BLS dự báo số việc làm của nhà thiết kế đồ hoạ tại Mỹ giảm khoảng 2% giai đoạn 2025–2035. Một số bản tóm tắt WEF 2025 xếp nghề này trong nhóm giảm nhưng chưa đối chiếu được với bảng gốc. Chưa có số liệu Việt Nam, nên theo quy tắc của bản đồ, nghề được đặt ở mức trung tính; tín hiệu quốc tế nghiêng về giảm.',
    risks: [
      'Giá dịch vụ bị kéo xuống bởi công cụ tự thiết kế và AI.',
      'Nhiều người làm tự do, không hợp đồng, không bảo hiểm xã hội.',
      'Tranh chấp bản quyền với ảnh do AI tạo chưa có khung pháp lý rõ.',
    ],
    fit:
      'Có mắt thẩm mỹ, thích làm ra sản phẩm thị giác cụ thể, chịu được việc sửa theo ý khách.',
    test: [
      'Nhận làm thử một bộ nhận diện nhỏ cho cửa hàng quen với mức phí thật, theo dõi số vòng sửa và thời gian bỏ ra.',
      'So sánh sản phẩm của mình với kết quả của công cụ sinh ảnh cho cùng yêu cầu, xác định phần việc mình làm tốt hơn.',
    ],
    note:
      'Theo cơ chế trên, phần thiết kế thuần kỹ thuật chịu sức ép giá lớn nhất; chưa có số liệu Việt Nam về mức giá. Hướng đi bền hơn là nắm chiến lược thương hiệu, kỹ thuật in ấn và bao bì, hoặc kết hợp với UI/UX, những chỗ cần trách nhiệm và hiểu khách hàng.',
    src: ['bls-2035', 'wef-2025'],
  },
  {
    id: 'noi-dung-so',
    name: 'Người sáng tạo nội dung, biên tập video',
    field: 'thietke',
    holland: 'AES',
    demand: 3,
    conf: 'yeu',
    summary:
      'Lên ý tưởng, quay, dựng và phân phối nội dung trên nền tảng số; làm cho kênh riêng, cho nhãn hàng hoặc cho bộ phận truyền thông của doanh nghiệp.',
    tasks: [
      ['Lên ý tưởng, viết kịch bản', 'vua'],
      ['Quay, thu âm', 'thap'],
      ['Dựng, cắt ghép, phụ đề, lồng tiếng', 'cao'],
      ['Đăng bài, tối ưu theo nền tảng', 'cao'],
      ['Đọc số liệu kênh, điều chỉnh', 'vua'],
      ['Làm việc với nhãn hàng, hợp đồng', 'thap'],
    ],
    aiText: 'Dựng thô, phụ đề, lồng tiếng và sinh ảnh, video ngắn đã được công cụ AI làm phần lớn. Ý tưởng gắn với con người thật, uy tín cá nhân và quan hệ với cộng đồng người xem ít chịu tác động, nhưng lượng nội dung do AI tạo cũng làm cạnh tranh trên nền tảng gay gắt hơn.',
    entry:
      'Không yêu cầu bằng; có thể học báo chí, truyền thông đa phương tiện, điện ảnh hoặc tự học. Kênh và sản phẩm đã làm là thước đo duy nhất. Nội dung chịu quy định về an ninh mạng, quảng cáo và quản lý thông tin trên mạng.',
    income: null,
    demandWhy:
      'Chưa có số liệu đủ tin cậy về nghề này như một nghề, ở Việt Nam hay quốc tế. Mức 3 phản ánh tình trạng thiếu dữ liệu.',
    risks: [
      'Thu nhập phân bố rất lệch: số ít kênh lớn kiếm nhiều, đa số thấp và không đều.',
      'Phụ thuộc thuật toán của nền tảng; phần lớn làm phi chính thức.',
      'Áp lực đăng liên tục; rủi ro pháp lý khi quảng cáo sai sự thật.',
    ],
    fit:
      'Thích kể chuyện, trình diễn trước đám đông, sẵn sàng thử nghiệm và chấp nhận thu nhập không đều.',
    test: [
      'Đăng đều 2 video một tuần trong 3 tháng về một chủ đề mình hiểu, ghi lại thời gian làm và số liệu kênh.',
      'Nhận một dự án dựng video có trả phí cho doanh nghiệp nhỏ để biết yêu cầu của khách thật.',
    ],
    note:
      'Rào cản vào nghề gần như bằng không, nên cạnh tranh rất lớn và thu nhập phân hoá mạnh. Kỹ năng dựng đang được công cụ làm thay; điều khó sao chép là chuyên môn riêng và uy tín với một nhóm người xem cụ thể.',
    src: [],
  },
  {
    id: 'nha-bao',
    name: 'Nhà báo, biên tập viên',
    field: 'thietke',
    holland: 'AEI',
    demand: 3,
    conf: 'yeu',
    summary:
      'Phát hiện đề tài, tác nghiệp, kiểm chứng thông tin, viết và dựng sản phẩm báo chí; biên tập viên duyệt và hoàn thiện bài trước khi xuất bản.',
    tasks: [
      ['Phát hiện đề tài, giữ quan hệ nguồn tin', 'thap'],
      ['Phỏng vấn, tác nghiệp hiện trường', 'thap'],
      ['Kiểm chứng thông tin trên mạng', 'vua'],
      ['Viết tin ngắn theo mẫu, tóm tắt, dịch', 'cao'],
      ['Biên tập, đặt tít, duyệt bài', 'vua'],
      ['Phân phối trên nền tảng số', 'cao'],
    ],
    aiText: 'Tin ngắn theo mẫu (kết quả kinh doanh, thời tiết), tóm tắt và dịch chịu tác động cao. Điều tra, phỏng vấn, kiểm chứng tại chỗ và chịu trách nhiệm pháp lý về nội dung ít chịu tác động. ILO xếp thông tin và truyền thông trong các ngành có tỷ lệ việc làm tiếp xúc cao ở Việt Nam.',
    entry:
      'Đại học báo chí, truyền thông hoặc ngành chuyên môn khác. Thẻ nhà báo theo Luật Báo chí cấp cho người làm việc tại cơ quan báo chí, đủ điều kiện và thời gian công tác.',
    income: null,
    demandWhy:
      'Chưa có số liệu Việt Nam đủ tin cậy. Tín hiệu định tính là doanh thu quảng cáo chuyển dần sang các nền tảng số; việc sắp xếp lại cơ quan báo chí năm 2025 chưa có số liệu về số người làm nghề.',
    risks: [
      'Doanh thu quảng cáo giảm, thu nhập phụ thuộc nhuận bút.',
      'Áp lực tốc độ; rủi ro an toàn và pháp lý khi tác nghiệp.',
    ],
    fit:
      'Thích viết, tò mò, chịu được áp lực hạn chót và tiếp xúc với người lạ.',
    test: [
      'Viết 5 bài phản ánh có phỏng vấn nhân vật thật, gửi cộng tác cho một tờ báo hoặc trang tin địa phương.',
      'Thực tập ngắn tại toà soạn để biết tỷ lệ việc tác nghiệp so với việc biên tập lại thông cáo.',
    ],
    note:
      'Tin theo mẫu, tóm tắt và dịch đang chuyển cho máy; điều tra, phỏng vấn và kiểm chứng tại chỗ vẫn cần người. Lợi thế thuộc về người có chuyên môn sâu một lĩnh vực.',
    src: ['ilo-vn'],
  },
  {
    id: 'bien-phien-dich',
    name: 'Biên dịch, phiên dịch viên',
    field: 'thietke',
    holland: 'ASC',
    demand: 3,
    conf: 'yeu',
    summary:
      'Chuyển văn bản (biên dịch) hoặc lời nói (phiên dịch) giữa hai ngôn ngữ, bảo đảm đúng nghĩa, đúng thuật ngữ và đúng văn phong; ngày càng nhiều việc là hiệu đính bản dịch máy.',
    tasks: [
      ['Dịch văn bản thông dụng', 'cao'],
      ['Tra cứu thuật ngữ chuyên ngành', 'cao'],
      ['Dịch phụ đề, bản địa hoá phần mềm', 'cao'],
      ['Hiệu đính bản dịch máy', 'vua'],
      ['Phiên dịch trực tiếp trong đàm phán, hội nghị', 'thap'],
      ['Dịch văn bản pháp lý, y tế có chịu trách nhiệm', 'vua'],
    ],
    aiText: 'Biên dịch chịu tác động sớm, vì dịch máy thần kinh đã phổ biến trước khi có mô hình ngôn ngữ lớn, và mô hình ngôn ngữ lớn làm tốt thêm phần lớn văn bản thông dụng. Phiên dịch trực tiếp trong đàm phán, toà án, y tế vẫn cần người vì đòi hỏi sắc thái, sự hiện diện và trách nhiệm.',
    entry:
      'Đại học ngoại ngữ. Muốn được chứng thực chữ ký người dịch tại phòng tư pháp hoặc tổ chức công chứng phải là cộng tác viên dịch thuật, có bằng cử nhân ngoại ngữ trở lên hoặc tốt nghiệp đại học ở nước dùng thứ tiếng đó. Phiên dịch cabin cần luyện nhiều năm.',
    income: null,
    demandWhy:
      'BLS dự báo phiên dịch, biên dịch tại Mỹ chỉ tăng khoảng 1,7% giai đoạn 2024–2034. Chưa có số liệu Việt Nam; sức ép từ dịch máy được phản ánh ở chỉ số tiếp xúc, không ở trục nhu cầu.',
    risks: [
      'Giá dịch giảm, việc chuyển dần thành hiệu đính bản dịch máy.',
      'Phần lớn làm tự do, thu nhập không đều.',
      'Phiên dịch cabin căng thẳng cao.',
    ],
    fit:
      'Nhạy với ngôn ngữ, cẩn thận với từng chữ, thích làm việc với người thuộc nền văn hoá khác.',
    test: [
      'Dịch một bài báo chuyên ngành, so với bản dịch máy và nhờ người có chuyên môn chấm cả hai.',
      'Làm phiên dịch tình nguyện ở một hội thảo nhỏ để biết sức chịu áp lực khi dịch nói.',
    ],
    note:
      'Biên dịch văn bản thông dụng là phần chịu sức ép lớn nhất của nghề. Người giỏi ngoại ngữ có lợi thế hơn khi kết hợp với một chuyên môn khác (luật, y, kỹ thuật) hoặc theo phiên dịch trực tiếp.',
    src: ['bls-2034'],
  },
  {
    id: 'kien-truc-su',
    name: 'Kiến trúc sư',
    field: 'thietke',
    holland: 'AIR',
    demand: 3,
    conf: 'tb',
    summary:
      'Thiết kế công trình từ ý tưởng đến hồ sơ thi công: tìm hiểu nhu cầu, phác phương án, triển khai bản vẽ kỹ thuật, phối hợp kết cấu và điện nước, xin phép xây dựng, giám sát tác giả.',
    tasks: [
      ['Tìm hiểu nhu cầu, khảo sát hiện trạng', 'thap'],
      ['Phác ý tưởng, phối cảnh, ảnh dựng', 'cao'],
      ['Triển khai hồ sơ kỹ thuật, bản vẽ thi công', 'vua'],
      ['Phối hợp kết cấu, điện nước', 'vua'],
      ['Xin phép xây dựng, làm việc với cơ quan quản lý', 'thap'],
      ['Giám sát tác giả tại công trình', 'thap'],
    ],
    aiText: 'Sinh phương án hình khối, phối cảnh và ảnh dựng đang được AI làm nhanh, tương tự thiết kế đồ hoạ. Hiểu quy chuẩn, làm việc với chủ đầu tư và cơ quan cấp phép, chịu trách nhiệm hồ sơ ít chịu tác động.',
    entry:
      'Đại học kiến trúc (thường 5 năm). Chứng chỉ hành nghề theo Luật Kiến trúc 2019 yêu cầu tốt nghiệp đại học kiến trúc, ít nhất 3 năm tham gia dịch vụ kiến trúc tại tổ chức hành nghề và đạt sát hạch; chứng chỉ có thời hạn 10 năm. Bộ đồ án là yếu tố tuyển dụng chính.',
    income: null,
    demandWhy:
      'Chưa có số liệu Việt Nam riêng. Nhu cầu gắn với chu kỳ bất động sản và xây dựng. BLS dự báo nhóm kiến trúc và kỹ thuật tại Mỹ tăng khoảng 6,8% giai đoạn 2025–2035.',
    risks: [
      'Ngành chu kỳ theo bất động sản.',
      'Làm đêm theo hạn nộp; thời gian đào tạo dài so với lương khởi điểm.',
      'Việc vẽ phối cảnh thuê, vốn là nguồn thu nhập của người mới, bị AI thay dần.',
    ],
    fit:
      'Có óc thẩm mỹ, tư duy không gian, chịu được khối lượng hồ sơ kỹ thuật lớn.',
    test: [
      'Vẽ lại phương án cải tạo một căn phòng thật, trình bày cho chủ nhà và ghi nhận phản hồi.',
      'Theo một kiến trúc sư đi công trình vài buổi để thấy phần việc ngoài bàn vẽ.',
    ],
    note:
      'Con đường lấy chứng chỉ hành nghề mất ít nhất 8 năm tính từ khi vào đại học, trong khi nhu cầu phụ thuộc chu kỳ bất động sản. Chỉ nên chọn khi chấp nhận được khoảng thời gian đó và hiểu rõ phần việc ngoài sáng tác.',
    src: ['luat-kientruc', 'bls-2035'],
  },
];
