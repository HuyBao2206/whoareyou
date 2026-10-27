// 12 con giáp theo quan niệm dân gian Việt Nam. Thứ tự trùng với CHI trong core/lunar.js (Tý → Hợi).
// Đây là nét văn hoá để tham khảo, không phải lời phán. Văn phong: CLAUDE.md.
//
// Mỗi mục:
//   chi, name, han: địa chi, tên con vật người Việt dùng, chữ Hán của địa chi
//   hours: giờ ứng với chi trong ngày      element: hành của địa chi
//   keywords: 3 từ khoá    summary: 3–4 câu    strengths: 2–3 ý    watchOut: 2 ý
//   culture: 1–2 câu về con vật trong văn hoá Việt (chỉ ghi điều có thật)    note: lời nhắn 2–3 câu

export default [
  {
    chi: 'Tý',
    name: 'Chuột',
    han: '子',
    hours: '23 giờ đến 1 giờ',
    element: 'Thủy',
    keywords: ['Lanh lợi', 'Tháo vát', 'Chắt chiu'],
    summary:
      'Đứng đầu mười hai con giáp là Chuột, con vật nhỏ mà nhanh trí. Dân gian cho rằng người tuổi Tý lanh lợi, nhạy với cơ hội và biết lo xa. Tiền bạc qua tay người tuổi này hiếm khi bị phí. Ở chỗ đông người, họ quan sát nhiều trước khi lên tiếng.',
    strengths: [
      'Nhanh trí, gặp chuyện bất ngờ vẫn tìm được lối ra.',
      'Biết tích góp, có của ăn của để từ những khoản nhỏ.',
      'Khéo giao thiệp, quen được nhiều người.',
    ],
    watchOut: ['Lo xa quá thành tính toán chi li.', 'Hay giữ ý, ít khi nói hết điều mình nghĩ.'],
    culture: 'Tranh Đông Hồ có bức “Đám cưới chuột”, vẽ cảnh họ nhà chuột rước dâu phải dâng lễ cho mèo, một lối trào phúng quen thuộc của tranh dân gian.',
    note: 'Nhanh trí và biết lo xa là hai thứ giúp mình đứng vững. Thỉnh thoảng cứ rộng tay một chút, cái được về lâu dài thường lớn hơn cái mất.',
  },
  {
    chi: 'Sửu',
    name: 'Trâu',
    han: '丑',
    hours: '1 giờ đến 3 giờ',
    element: 'Thổ',
    keywords: ['Cần cù', 'Nhẫn nại', 'Chắc chắn'],
    summary:
      'Với một nước làm lúa nước như Việt Nam, Trâu là con vật gắn với ruộng đồng và sự cần cù. Người tuổi Sửu được cho là chăm chỉ, bền sức, nói ít làm nhiều. Họ không thích đi đường tắt, việc gì cũng làm từ gốc. Đã quyết điều gì thì khó ai lay chuyển.',
    strengths: [
      'Bền bỉ, làm việc nặng việc dài không kêu ca.',
      'Đáng tin, nhận lời là làm tới nơi.',
      'Thực tế, chân chất, không màu mè.',
    ],
    watchOut: ['Cứng đầu, khó đổi ý khi đã quyết.', 'Ít bày tỏ cảm xúc, người thân phải tự đoán.'],
    culture: 'Tục ngữ có câu “Con trâu là đầu cơ nghiệp”, cho thấy trâu từng là tài sản quý nhất của nhà nông.',
    note: 'Cái chăm chỉ của tuổi Sửu là nền cho mọi thứ khác. Nhớ nghỉ chân giữa vụ, vì sức bền cũng cần được nuôi.',
  },
  {
    chi: 'Dần',
    name: 'Hổ',
    han: '寅',
    hours: '3 giờ đến 5 giờ',
    element: 'Mộc',
    keywords: ['Gan dạ', 'Mạnh mẽ', 'Có uy'],
    summary:
      'Hổ là chúa sơn lâm, nên dân gian gắn tuổi Dần với sự gan dạ và khí thế. Người tuổi này được cho là dám làm, dám nhận, đứng ra bênh người yếu thế. Họ không thích bị ai sai bảo. Tính nóng là mặt trái đi kèm cái mạnh mẽ ấy.',
    strengths: [
      'Gan dạ, dám đứng ra khi việc khó.',
      'Có uy, nói ra người khác chịu nghe.',
      'Bảo vệ người thân và người yếu hơn mình.',
    ],
    watchOut: ['Nóng nảy, dễ to tiếng khi bị trái ý.', 'Thích làm chủ, khó chịu khi phải theo người khác.'],
    culture: 'Người xưa kiêng gọi thẳng tên hổ, nên dân gian quen gọi là “ông Ba Mươi”.',
    note: 'Sức mạnh của tuổi Dần đáng quý nhất khi đứng ra che chở người khác. Bình tĩnh thêm một nhịp trước khi nổi nóng là đủ.',
  },
  {
    chi: 'Mão',
    name: 'Mèo',
    han: '卯',
    hours: '5 giờ đến 7 giờ',
    element: 'Mộc',
    keywords: ['Khéo léo', 'Ôn hoà', 'Tinh ý'],
    summary:
      'Ở Trung Quốc, Hàn Quốc hay Nhật Bản, chi Mão ứng với con thỏ; riêng người Việt gọi là Mèo. Dân gian xem người tuổi Mão là nhẹ nhàng, khéo léo và tinh ý, ở đâu cũng giữ được không khí êm ả. Họ thích nhà cửa sạch sẽ, gọn gàng và quý sự yên ổn. Va chạm là điều họ ngại nhất.',
    strengths: [
      'Khéo ăn nói, biết cách làm người khác dễ chịu.',
      'Tinh ý, nhận ra điều không ổn từ rất sớm.',
      'Biết giữ mình, ít khi để rơi vào thế khó.',
    ],
    watchOut: ['Ngại va chạm nên có khi nhịn cả điều không nên nhịn.', 'Cẩn thận quá, bỏ lỡ cơ hội cần quyết nhanh.'],
    culture:
      'Chưa có tài liệu nào giải thích chắc chắn vì sao Mão thành Mèo. Hai cách giải thích hay được nhắc là chữ “Mão” đọc gần với “mèo”, và con mèo quen thuộc với đời sống nhà nông Việt hơn con thỏ.',
    note: 'Sự êm ả tuổi Mão mang lại không phải là yếu đuối. Có điều cần nói thì cứ nói, nói nhẹ nhàng thì người nghe vẫn hiểu.',
  },
  {
    chi: 'Thìn',
    name: 'Rồng',
    han: '辰',
    hours: '7 giờ đến 9 giờ',
    element: 'Thổ',
    keywords: ['Khí thế', 'Hoài bão', 'Tự tin'],
    summary:
      'Rồng là con giáp duy nhất không có thật, và cũng là con vật được tôn quý nhất. Dân gian gắn tuổi Thìn với hoài bão lớn, sự tự tin và sức cuốn hút. Người tuổi này thích làm việc lớn, ghét sự tầm thường. Đặt kỳ vọng cao cho mình là động lực, nhưng cũng là gánh nặng.',
    strengths: [
      'Nhiều hoài bão, dám nghĩ tới việc lớn.',
      'Tự tin, dễ làm người khác tin theo.',
      'Hào sảng, sẵn lòng giúp người.',
    ],
    watchOut: ['Kỳ vọng cao nên dễ thất vọng với chính mình.', 'Tự tin quá có lúc thành khó nghe góp ý.'],
    culture: 'Người Việt kể về nguồn gốc của mình qua truyền thuyết “con Rồng cháu Tiên”, và rồng đứng đầu bộ tứ linh: long, lân, quy, phụng.',
    note: 'Hoài bão lớn cần những bước đi nhỏ. Mỗi bước làm được đều đáng ghi nhận, kể cả khi đích còn xa.',
  },
  {
    chi: 'Tỵ',
    name: 'Rắn',
    han: '巳',
    hours: '9 giờ đến 11 giờ',
    element: 'Hỏa',
    keywords: ['Sâu sắc', 'Thận trọng', 'Kín đáo'],
    summary:
      'Rắn ít khi vội, và dân gian cũng thấy ở người tuổi Tỵ sự điềm tĩnh, sâu sắc. Họ suy nghĩ kỹ trước khi làm, nhìn người khá tinh. Ngoài mặt có vẻ lạnh, nhưng với người đã tin thì rất chung tình. Bí mật của người khác giao cho tuổi Tỵ thì yên tâm.',
    strengths: [
      'Suy tính kỹ, ít khi quyết định sai vì vội.',
      'Kín miệng, giữ được chuyện riêng của người khác.',
      'Nhìn người tinh, khó bị lừa.',
    ],
    watchOut: ['Hay nghi ngờ, mất lòng tin rồi khó lấy lại.', 'Giữ kín quá, người thân thấy xa cách.'],
    note: 'Sự cẩn trọng của tuổi Tỵ giúp tránh được nhiều chuyện đáng tiếc. Đôi khi tin người thêm một chút, mình sẽ nhẹ lòng hơn.',
  },
  {
    chi: 'Ngọ',
    name: 'Ngựa',
    han: '午',
    hours: '11 giờ đến 13 giờ',
    element: 'Hỏa',
    keywords: ['Nhanh nhẹn', 'Ưa tự do', 'Nhiệt tình'],
    summary:
      'Ngựa là con vật của đường xa, nên dân gian gắn tuổi Ngọ với sự nhanh nhẹn và lòng ưa tự do. Người tuổi này nhiệt tình, vui tính, thích đi đây đi đó. Họ làm việc nhanh nhưng không thích bị bó chân. Ở yên một chỗ quá lâu là bứt rứt.',
    strengths: [
      'Nhanh nhẹn, việc gì cũng xong sớm.',
      'Nhiệt tình, cởi mở, dễ làm bạn.',
      'Thích nghi tốt với nơi ở, nơi làm mới.',
    ],
    watchOut: ['Nóng vội, thiếu kiên nhẫn với việc chậm.', 'Ngại ràng buộc, dễ bỏ ngang khi thấy gò bó.'],
    culture: 'Trong truyền thuyết Thánh Gióng, chàng trai làng Phù Đổng cưỡi ngựa sắt ra trận đánh giặc Ân.',
    note: 'Đi nhanh là thế mạnh, nhưng đường xa cần hơi dài. Chọn vài chặng đáng đi và đi cho trọn.',
  },
  {
    chi: 'Mùi',
    name: 'Dê',
    han: '未',
    hours: '13 giờ đến 15 giờ',
    element: 'Thổ',
    keywords: ['Hiền hoà', 'Mềm mỏng', 'Có khiếu thẩm mỹ'],
    summary:
      'Người Việt gọi chi Mùi là Dê, trong khi ở vài nước khác con vật này được hiểu là cừu. Dân gian xem người tuổi Mùi là hiền lành, mềm mỏng, dễ mủi lòng. Họ có khiếu thẩm mỹ, thích những gì đẹp và yên bình. Trước chuyện lớn, họ hay do dự.',
    strengths: [
      'Hiền hoà, ai ở gần cũng thấy dễ chịu.',
      'Giàu tình cảm, biết thương người.',
      'Có khiếu nghệ thuật và gu thẩm mỹ.',
    ],
    watchOut: ['Thiếu quyết đoán, chuyện lớn hay chờ người khác chọn giúp.', 'Dễ lo lắng và dễ tủi thân.'],
    note: 'Sự hiền hoà của tuổi Mùi làm chỗ mình ở trở nên dễ thở. Tập tự quyết những chuyện nhỏ trước, chuyện lớn rồi cũng sẽ quen.',
  },
  {
    chi: 'Thân',
    name: 'Khỉ',
    han: '申',
    hours: '15 giờ đến 17 giờ',
    element: 'Kim',
    keywords: ['Thông minh', 'Hoạt bát', 'Hài hước'],
    summary:
      'Khỉ lanh lẹ và tò mò, nên dân gian tin người tuổi Thân thông minh, hoạt bát và nhiều mẹo. Họ học nhanh, giải quyết vấn đề theo cách không ai ngờ. Đi đâu cũng mang theo tiếng cười. Ngồi yên với một việc quá lâu thì khó.',
    strengths: [
      'Thông minh, xoay xở được trong nhiều hoàn cảnh.',
      'Hài hước, làm không khí vui lên.',
      'Học nhanh và thích cái mới.',
    ],
    watchOut: ['Thiếu kiên trì, dễ chuyển sang việc khác khi thấy chán.', 'Thích đùa, có lúc đùa quá trớn.'],
    note: 'Cái đầu nhanh nhạy của tuổi Thân là lợi thế lớn. Gắn nó với một việc đủ lâu, mình sẽ thấy kết quả khác hẳn.',
  },
  {
    chi: 'Dậu',
    name: 'Gà',
    han: '酉',
    hours: '17 giờ đến 19 giờ',
    element: 'Kim',
    keywords: ['Cần mẫn', 'Chỉn chu', 'Thẳng thắn'],
    summary:
      'Tiếng gà gáy từng là chiếc đồng hồ của làng quê, nên tuổi Dậu thường được gắn với sự cần mẫn, đúng giờ. Người tuổi này chỉn chu, chăm chút vẻ ngoài và làm việc có nề nếp. Thấy sai là nói, không thích vòng vo. Cái thẳng ấy có khi làm mất lòng người nghe.',
    strengths: [
      'Cần mẫn, dậy sớm làm việc từ sáng.',
      'Chỉn chu, gọn gàng, có kế hoạch.',
      'Thẳng thắn, trung thực.',
    ],
    watchOut: ['Hay soi chi tiết, dễ bị xem là khó tính.', 'Nói thẳng quá, người nghe chưa kịp thấy thiện ý.'],
    note: 'Sự chỉn chu của tuổi Dậu giúp mọi việc trơn tru. Lời góp ý thật lòng sẽ dễ nghe hơn nếu đi kèm một lời khen.',
  },
  {
    chi: 'Tuất',
    name: 'Chó',
    han: '戌',
    hours: '19 giờ đến 21 giờ',
    element: 'Thổ',
    keywords: ['Trung thành', 'Tận tuỵ', 'Công bằng'],
    summary:
      'Chó giữ nhà, nên dân gian xem người tuổi Tuất là trung thành và tận tuỵ hơn cả. Họ sống có trước có sau, ghét sự giả dối và bất công. Với bạn bè, họ là người có mặt khi cần. Nhưng phải mất thời gian thì người lạ mới được họ tin.',
    strengths: [
      'Trung thành, đã nhận ai là bạn thì giữ lâu.',
      'Công bằng, dám nói khi thấy chuyện sai.',
      'Tận tuỵ với việc được giao.',
    ],
    watchOut: ['Hay lo lắng, nghĩ tới chuyện xấu trước.', 'Khó tin người mới, có khi bỏ lỡ một người tốt.'],
    note: 'Lòng trung thành của tuổi Tuất là thứ người khác cảm nhận được. Bớt lo một chút, mình sẽ thấy đời cũng nhiều người tử tế.',
  },
  {
    chi: 'Hợi',
    name: 'Lợn',
    han: '亥',
    hours: '21 giờ đến 23 giờ',
    element: 'Thủy',
    keywords: ['Phúc hậu', 'Thật thà', 'Rộng rãi'],
    summary:
      'Khép lại mười hai con giáp là Lợn, con vật gắn với sự no đủ trong nhà nông. Dân gian tin người tuổi Hợi phúc hậu, thật thà, sống rộng rãi và biết hưởng niềm vui giản dị. Họ dễ tha thứ, ít để bụng. Tin người là đức tính, nhưng cũng dễ bị lợi dụng.',
    strengths: [
      'Thật thà, nghĩ sao nói vậy.',
      'Rộng rãi, sẵn lòng chia sẻ.',
      'Dễ tha thứ, giữ được hoà khí lâu dài.',
    ],
    watchOut: ['Cả tin, dễ bị người khác lợi dụng lòng tốt.', 'Thích an nhàn, ngại thay đổi khi cần đổi.'],
    culture: 'Tranh lợn là một đề tài quen thuộc của tranh Đông Hồ, thường gợi ý mong ước sung túc, đông con nhiều cháu.',
    note: 'Lòng tốt của tuổi Hợi là một kiểu phúc. Giữ thêm chút tỉnh táo, để lòng tốt ấy đến đúng người.',
  },
];
