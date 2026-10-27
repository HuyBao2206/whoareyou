// Mười giá trị cơ bản của Schwartz, dùng cho phần kiến thức và phần kết quả của thẻ Giá trị sống.
// Căn cứ: research/gia-tri-song.md mục 1.3 (định nghĩa), mục 7 (nghề nghiệp, tiền bạc, quan hệ).
// Mỗi ý ở ba lĩnh vực có nhãn ev: 'bc' = có nghiên cứu thực nghiệm (ghi nguồn trong src), 'gt' = bằng chứng gián tiếp
// (thang đo khác, hoặc chỉ đọc qua bài dẫn lại), 'kn' = suy ra từ định nghĩa
// khái niệm, chưa có nghiên cứu riêng; trên trang hai loại này được ghi khác nhau.

export const GROUPS = {
  open: { name: 'Cởi mở với thay đổi', short: 'Cởi mở', desc: 'Suy nghĩ, hành động độc lập và sẵn sàng đón cái mới.' },
  enhance: { name: 'Nâng cao bản thân', short: 'Nâng cao bản thân', desc: 'Theo đuổi thành công, địa vị và lợi ích của chính mình.' },
  conserve: { name: 'Bảo tồn', short: 'Bảo tồn', desc: 'Giữ trật tự, sự ổn định, nếp cũ và tránh làm xáo trộn.' },
  transcend: { name: 'Vượt lên bản thân', short: 'Vượt lên bản thân', desc: 'Quan tâm tới phúc lợi của người khác và của thiên nhiên.' },
};

export default {
  SD: {
    name: 'Tự chủ',
    en: 'Self-Direction',
    group: 'open',
    goal: 'Suy nghĩ và hành động độc lập: tự chọn, tự sáng tạo, tự tìm hiểu.',
    items: 'sáng tạo, tự do, tự chọn mục tiêu, ham hiểu biết, độc lập',
    career: { t: 'Người coi trọng tự chủ hay có sở thích nghề thuộc nhóm Nghệ thuật và Nghiên cứu (Sagiv, 2002); những nghề có môi trường nghiên cứu cũng là nơi điểm tự chủ cao (Knafo và Sagiv, 2004).', ev: 'bc', src: ['sagiv-2002', 'knafo-2004'] },
    money: { t: 'Theo định nghĩa, tiền có ý nghĩa như phương tiện để được tự quyết việc của mình; chưa có nghiên cứu riêng về hành vi tài chính.', ev: 'kn' },
    relation: { t: 'Theo định nghĩa, cần một khoảng riêng để tự quyết; dễ va chạm với người đặt nặng khuôn phép, vì hai giá trị nằm ở hai phía của cùng một trục.', ev: 'kn' },
  },
  ST: {
    name: 'Mới mẻ',
    en: 'Stimulation',
    group: 'open',
    goal: 'Tìm sự hứng khởi, cái mới và thử thách trong cuộc sống.',
    items: 'cuộc sống đa dạng, cuộc sống sôi nổi, dám làm',
    career: { t: 'Ngược chiều với sở thích nghề thuộc nhóm Quy củ (Sagiv, 2002). Cùng với Truyền thống, đây là giá trị liên hệ chặt nhất với hành vi tương ứng trong nghiên cứu của Bardi và Schwartz (2003); nghiên cứu này không đo riêng chuyện đổi việc.', ev: 'bc', src: ['sagiv-2002', 'bardi-2003'] },
    money: { t: 'Định nghĩa có ý “dám làm”, gợi ý chấp nhận rủi ro cao hơn; chưa có bằng chứng về hành vi tài chính.', ev: 'kn' },
    relation: { t: 'Theo định nghĩa, coi trọng trải nghiệm mới cùng nhau và dễ thấy chán khi mọi thứ lặp lại.', ev: 'kn' },
  },
  HE: {
    name: 'Tận hưởng',
    en: 'Hedonism',
    group: 'open',
    groups: ['open', 'enhance'],
    goal: 'Niềm vui và sự dễ chịu cho chính mình.',
    items: 'niềm vui, tận hưởng cuộc sống, chiều chuộng bản thân',
    career: { t: 'Chưa thấy nghiên cứu nối giá trị này với một nhóm sở thích nghề cụ thể. Theo định nghĩa, công việc có chỗ cho niềm vui riêng sẽ hợp với người đặt nặng giá trị này hơn.', ev: 'kn' },
    money: { t: 'Theo định nghĩa, chi cho trải nghiệm và thú vui của bản thân là cách biểu hiện tự nhiên của giá trị này.', ev: 'kn' },
    relation: { t: 'Theo định nghĩa, coi trọng thời gian vui chung, ít muốn để công việc lấn hết đời sống.', ev: 'kn' },
  },
  AC: {
    name: 'Thành tựu',
    en: 'Achievement',
    group: 'enhance',
    goal: 'Thành công của bản thân nhờ chứng tỏ năng lực theo chuẩn mực xã hội.',
    items: 'thành công, có năng lực, cầu tiến, có ảnh hưởng',
    career: { t: 'Đi cùng sở thích nghề thuộc nhóm Quản lý (Sagiv, 2002); sinh viên kinh tế coi trọng nhóm Nâng cao bản thân hơn sinh viên ngành khác ngay từ đầu năm nhất, gợi ý rằng giá trị góp phần vào việc chọn ngành (Gandal và cộng sự, 2005).', ev: 'bc', src: ['sagiv-2002', 'gandal-2005'] },
    money: { t: 'Theo định nghĩa, tiền thường được xem là một thước đo thành công được xã hội công nhận.', ev: 'kn' },
    relation: { t: 'Theo định nghĩa, dễ để công việc chiếm phần thời gian của người thân; chưa có nghiên cứu xác nhận.', ev: 'kn' },
  },
  PO: {
    name: 'Quyền lực',
    en: 'Power',
    group: 'enhance',
    goal: 'Địa vị, uy tín, quyền kiểm soát người và nguồn lực.',
    items: 'quyền lực xã hội, quyền quyết định, giàu có, giữ thể diện',
    career: { t: 'Đi cùng sở thích nghề thuộc nhóm Quản lý (Sagiv, 2002). Trong cùng nghiên cứu, sở thích Quản lý ngược chiều với giá trị Phổ quát, nằm ở phía đối diện Quyền lực trên vòng tròn.', ev: 'bc', src: ['sagiv-2002'] },
    money: { t: 'Giàu có là một mục đo của chính giá trị này. Ở thang đo khác (chủ nghĩa vật chất), coi nặng của cải và địa vị đi cùng mức hạnh phúc thấp hơn, ở mức nhỏ đến vừa (Dittmar và cộng sự, 2014); hai thang đo không hoàn toàn trùng nhau.', ev: 'gt', src: ['dittmar-2014', 'kasser-2016'] },
    relation: { t: 'Tổng quan của Kasser (2016) ghi nhận người coi nặng giá trị vật chất có chất lượng quan hệ kém hơn; đây là bằng chứng gián tiếp vì thang đo khác thang Schwartz.', ev: 'gt', src: ['kasser-2016'] },
  },
  SE: {
    name: 'An toàn',
    en: 'Security',
    group: 'conserve',
    goal: 'Sự an toàn, hài hoà và ổn định của xã hội, của các mối quan hệ và của bản thân.',
    items: 'trật tự xã hội, gia đình yên ổn, có qua có lại',
    career: { t: 'Đi cùng sở thích nghề thuộc nhóm Quy củ (Sagiv, 2002).', ev: 'bc', src: ['sagiv-2002'] },
    money: { t: 'Theo định nghĩa, ưu tiên thu nhập đều đặn, khoản dự phòng và tránh rủi ro.', ev: 'kn' },
    relation: { t: 'Theo định nghĩa, cần sự chắc chắn và sòng phẳng “có qua có lại” trong quan hệ.', ev: 'kn' },
  },
  CO: {
    name: 'Khuôn phép',
    en: 'Conformity',
    group: 'conserve',
    goal: 'Kiềm chế hành động và thôi thúc có thể làm phiền, làm hại người khác hay đi ngược chuẩn mực chung.',
    items: 'vâng lời, kỷ luật bản thân, lễ độ, kính trọng cha mẹ và người lớn tuổi',
    career: { t: 'Đi cùng sở thích nghề thuộc nhóm Quy củ (Sagiv, 2002).', ev: 'bc', src: ['sagiv-2002'] },
    money: { t: 'Theo định nghĩa, chi tiêu theo chuẩn mực của gia đình và cộng đồng, tránh điều bị cho là phô trương hay hoang phí.', ev: 'kn' },
    relation: { t: 'Định nghĩa nói thẳng ý tránh làm phật lòng người khác; trong gia đình, giá trị này thể hiện qua việc nghe lời người lớn.', ev: 'kn' },
  },
  TR: {
    name: 'Truyền thống',
    en: 'Tradition',
    group: 'conserve',
    goal: 'Tôn trọng, gắn bó và chấp nhận phong tục, tư tưởng mà văn hoá hay tôn giáo của mình truyền lại.',
    items: 'giữ truyền thống, khiêm tốn, sùng đạo, bằng lòng với phần mình',
    career: { t: 'Đi cùng sở thích nghề thuộc nhóm Quy củ (Sagiv, 2002); những nghề có môi trường nghiên cứu có điểm truyền thống thấp (Knafo và Sagiv, 2004).', ev: 'bc', src: ['sagiv-2002', 'knafo-2004'] },
    money: { t: 'Theo định nghĩa (mục “bằng lòng với phần mình”), coi trọng sự biết đủ hơn việc tích luỹ thêm.', ev: 'kn' },
    relation: { t: 'Theo định nghĩa, coi trọng lễ tết, nếp nhà và vai trò của mỗi người trong gia đình.', ev: 'kn' },
  },
  BE: {
    name: 'Nhân hậu',
    en: 'Benevolence',
    group: 'transcend',
    goal: 'Giữ gìn và vun đắp phúc lợi của những người mình thường xuyên gần gũi.',
    items: 'giúp đỡ, thật thà, tha thứ, có trách nhiệm, trung thành, tình bạn thật, tình yêu trưởng thành',
    career: { t: 'Đi cùng sở thích nghề thuộc nhóm Xã hội (Sagiv, 2002); những nghề có môi trường thuộc nhóm Xã hội có điểm nhân hậu cao (Knafo và Sagiv, 2004).', ev: 'bc', src: ['sagiv-2002', 'knafo-2004'] },
    money: { t: 'Theo định nghĩa, sẵn lòng chi cho người thân và bạn bè, coi tiền là cách chăm lo người gần mình.', ev: 'kn' },
    relation: { t: 'Đây chính là phần lõi của định nghĩa. Một nghiên cứu trên 291 cặp mới cưới (Luo và Klohnen, 2005, qua bài dẫn lại) thấy vợ chồng khá giống nhau về thái độ và giá trị nói chung, nhưng độ giống này không đi cùng mức hài lòng trong hôn nhân.', ev: 'gt', src: ['luo-2005'] },
  },
  UN: {
    name: 'Phổ quát',
    en: 'Universalism',
    group: 'transcend',
    goal: 'Hiểu, trân trọng, bao dung và bảo vệ phúc lợi của mọi người, kể cả người lạ, và của thiên nhiên.',
    items: 'rộng lượng với quan điểm khác, công bằng xã hội, bình đẳng, hoà bình, bảo vệ môi trường, hiểu đời',
    career: { t: 'Đi cùng sở thích nghề thuộc nhóm Nghệ thuật và Nghiên cứu, ngược chiều với nhóm Quản lý và Quy củ (Sagiv, 2002); sinh viên kinh tế có điểm phổ quát thấp hơn sinh viên ngành khác (Gandal và cộng sự, 2005).', ev: 'bc', src: ['sagiv-2002', 'gandal-2005'] },
    money: { t: 'Theo định nghĩa, cân nhắc tác động tới xã hội và môi trường khi tiêu dùng; chưa có nghiên cứu cụ thể.', ev: 'kn' },
    relation: { t: 'Theo định nghĩa, dễ chấp nhận người khác mình, nghĩ khác mình.', ev: 'kn' },
  },
};

/** Thứ tự quanh vòng tròn, dùng để vẽ la bàn. */
export const ORDER = ['SD', 'ST', 'HE', 'AC', 'PO', 'SE', 'CO', 'TR', 'BE', 'UN'];
