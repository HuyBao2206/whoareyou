// 36 thẻ giá trị của thẻ Giá trị sống, HUB tự soạn theo 10 giá trị của Schwartz.
// Chỉ mượn cách làm của Personal Values Card Sort (Miller và cộng sự, 2001: chia nhóm rồi xếp hạng nhóm đầu); không chép
// tên hay định nghĩa thẻ của bộ đó. Căn cứ từng thẻ (mục đo SVS tương ứng): research/gia-tri-song.md mục 6.
// value: mã giá trị Schwartz (values.js). Thẻ “Thể diện” và “Khiêm tốn” lấy từ bản 19 giá trị (2012), tính vào Quyền lực
// và Truyền thống khi quy về khung 10 giá trị.

export default [
  { id: 'tu-do', name: 'Tự do', def: 'Được tự quyết việc của mình mà không phải chờ ai cho phép.', value: 'SD' },
  { id: 'sang-tao', name: 'Sáng tạo', def: 'Nghĩ ra cách làm của riêng mình, không chỉ làm theo mẫu có sẵn.', value: 'SD' },
  { id: 'ham-hieu', name: 'Ham hiểu biết', def: 'Gặp điều lạ là muốn tìm hiểu cho ra lẽ.', value: 'SD' },
  { id: 'tu-lap', name: 'Tự lập', def: 'Tự đặt mục tiêu và tự lo được cho mình.', value: 'SD' },
  { id: 'doi-thay', name: 'Đổi thay', def: 'Cuộc sống có nhiều đổi khác, không ngày nào giống ngày nào.', value: 'ST' },
  { id: 'dam-thu', name: 'Dám thử', def: 'Sẵn lòng làm điều mạo hiểm, chưa biết trước kết quả, vì thấy thú vị.', value: 'ST' },
  { id: 'hung-khoi', name: 'Hứng khởi', def: 'Có những việc khiến mình háo hức, mong tới lượt được làm.', value: 'ST' },
  { id: 'niem-vui', name: 'Niềm vui', def: 'Thấy vui với những ngày bình thường.', value: 'HE' },
  { id: 'huong-thu', name: 'Hưởng thụ', def: 'Cho mình ăn ngon, mặc đẹp, nghỉ ngơi dễ chịu.', value: 'HE' },
  { id: 'vui-choi', name: 'Vui chơi', def: 'Có thời gian chơi với bạn bè, làm điều mình thích mà không cần lý do.', value: 'HE' },
  { id: 'thanh-cong', name: 'Thành công', def: 'Làm ra kết quả mà người khác nhìn vào cũng công nhận.', value: 'AC' },
  { id: 'gioi-viec', name: 'Giỏi việc', def: 'Được coi là người làm được việc, có năng lực thật.', value: 'AC' },
  { id: 'cau-tien', name: 'Cầu tiến', def: 'Muốn tiến xa hơn chỗ mình đang đứng.', value: 'AC' },
  { id: 'anh-huong', name: 'Có ảnh hưởng', def: 'Nhờ năng lực của mình mà lời nói, việc làm có trọng lượng với người khác.', value: 'AC' },
  { id: 'giau-co', name: 'Giàu có', def: 'Có nhiều tiền và tài sản.', value: 'PO' },
  { id: 'quyen-quyet', name: 'Quyền quyết định', def: 'Được nắm việc, người khác làm theo quyết định của mình.', value: 'PO' },
  { id: 'the-dien', name: 'Thể diện', def: 'Giữ được hình ảnh tốt, không bị mất mặt trước người khác.', value: 'PO' },
  { id: 'suc-khoe', name: 'An toàn bản thân', def: 'Bản thân tránh được nguy hiểm, bệnh tật và rủi ro.', value: 'SE' },
  { id: 'gia-dinh-yen', name: 'Gia đình yên ổn', def: 'Người nhà được an toàn, không phải lo chuyện bất trắc.', value: 'SE' },
  { id: 'on-dinh', name: 'Ổn định', def: 'Công việc, thu nhập, chỗ ở đều đặn, tính trước được.', value: 'SE' },
  { id: 'co-qua-co-lai', name: 'Có qua có lại', def: 'Ai giúp mình thì mình trả, không để mắc nợ ân tình.', value: 'SE' },
  { id: 'ky-luat', name: 'Kỷ luật', def: 'Kiềm chế được ý thích nhất thời, không làm điều mình biết là không nên.', value: 'CO' },
  { id: 'le-do', name: 'Lễ độ', def: 'Ăn nói, cư xử đúng mực với mọi người.', value: 'CO' },
  { id: 'hieu-thao', name: 'Kính trên', def: 'Kính trọng và nghe lời cha mẹ, ông bà, người lớn tuổi.', value: 'CO' },
  { id: 'nep-nha', name: 'Nếp nhà', def: 'Giữ phong tục, lễ tết và nếp sống từ đời trước.', value: 'TR' },
  { id: 'khiem-ton', name: 'Khiêm tốn', def: 'Không phô trương, không tự đặt mình lên trên người khác.', value: 'TR' },
  { id: 'biet-du', name: 'Biết đủ', def: 'Bằng lòng với phần mình có, không so bì.', value: 'TR' },
  { id: 'duc-tin', name: 'Đức tin', def: 'Sống theo một niềm tin tôn giáo hay tâm linh.', value: 'TR' },
  { id: 'giup-do', name: 'Giúp đỡ', def: 'Sẵn lòng đỡ đần người thân, bạn bè khi họ cần.', value: 'BE' },
  { id: 'that-tha', name: 'Thật thà', def: 'Nói thật, sống thật với những người quanh mình.', value: 'BE' },
  { id: 'dang-tin', name: 'Đáng tin cậy', def: 'Đã hứa thì làm, người nhà và bạn bè có thể trông vào.', value: 'BE' },
  { id: 'gan-bo', name: 'Gắn bó', def: 'Có tình bạn thân và tình yêu sâu đậm, lâu dài.', value: 'BE' },
  { id: 'cong-bang', name: 'Công bằng', def: 'Ai cũng được đối xử như nhau, kẻ yếu không bị chèn ép.', value: 'UN' },
  { id: 'bao-dung', name: 'Tôn trọng khác biệt', def: 'Chấp nhận người sống khác, nghĩ khác mình, kể cả người không quen.', value: 'UN' },
  { id: 'thien-nhien', name: 'Thiên nhiên', def: 'Giữ gìn môi trường, sống hoà hợp với thiên nhiên.', value: 'UN' },
  { id: 'hieu-doi', name: 'Hiểu đời', def: 'Hiểu người, hiểu chuyện nên ít vội phán xét ai.', value: 'UN' },
];
