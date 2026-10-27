// Cấu hình chung của trang. Đổi tên web, liên kết hay danh sách thẻ ở đây.

export const config = {
  site: {
    nameVi: 'Thấu Hiểu & Phát Triển Bản Thân',
    nameEn: 'Understand Yourself · Grow Yourself',
    // TODO: kiểm tra lại khi deploy. Đây là địa chỉ GitHub Pages dự kiến của repo.
    url: 'https://huybao2206.github.io/whoareyou/',
    author: 'HUB',
  },

  links: {
    bio: 'https://huybao2206.github.io/hubcuteee/',
    facebook: 'https://www.facebook.com/cynical2206/',
    tiktok: 'https://www.tiktok.com/@hubmanifest',
    email: 'baohuy22062002@gmail.com',
  },

  numerology: {
    // "vn": cộng hết chữ số, rút gọn tới khi ≤ 11, giữ 22/4; tổng 33 rút về 6 (theo sách David A. Phillips,
    //       cách phổ biến ở Việt Nam, xem research/than-so-hoc-cach-tinh.md).
    // "western": cộng hết chữ số, rút gọn về 1–9, giữ 11, 22, 33 nếu gặp ở bất kỳ bước nào.
    lifePathMethod: 'vn',
    // Chữ Y: "position" = Y đứng sát nguyên âm khác là phụ âm (Huy, Nguyễn), còn lại là nguyên âm (Vy, My).
    //        "vowel" = Y luôn là nguyên âm. Người dùng đổi được trong phần Cách tính.
    yMode: 'position',
    minYear: 1900,
  },

  // Danh sách thẻ chủ đề. Thêm thẻ mới: tạo module trong assets/js/modules/<ten>/
  // rồi thêm một mục vào đây với status: 'active' và hàm load().
  topics: [
    {
      id: 'numerology',
      slug: 'than-so-hoc',
      nameVi: 'Thần số học',
      nameEn: 'Numerology',
      desc: 'Đọc ngày sinh và họ tên của bạn thành năm con số, mỗi số kèm một lời gợi ý để bạn ngẫm về mình.',
      status: 'active',
      glyph: 'numerology',
      size: 'wide',
      load: () => import('./modules/numerology/view.js'),
    },
    {
      id: 'zodiac',
      slug: 'cung-hoang-dao',
      nameVi: 'Cung hoàng đạo & Con giáp',
      nameEn: 'Zodiac',
      desc: 'Đặt cung hoàng đạo phương Tây cạnh con giáp phương Đông để xem hai cách nhìn nói gì về cùng một người.',
      status: 'active',
      glyph: 'zodiac',
      load: () => import('./modules/zodiac/view.js'),
      soon: [
        'Phần này sẽ đặt 12 cung hoàng đạo cạnh 12 con giáp, đọc theo ngày và năm sinh của bạn.',
        'Bạn sẽ thấy mỗi truyền thống mô tả tính khí, cách bạn nóng giận và cách bạn hợp tác với người khác ra sao. Cả hai đều là văn hoá để tham khảo, không phải lời phán.',
      ],
    },
    {
      id: 'personality',
      slug: 'ban-do-tinh-cach',
      nameVi: 'Bản đồ tính cách',
      nameEn: 'Personality Map',
      desc: 'Một bộ câu hỏi ngắn cho bạn thấy mình nạp năng lượng thế nào, ra quyết định ra sao và hợp kiểu làm việc nào.',
      status: 'soon',
      glyph: 'personality',
      soon: [
        'Phần này sẽ là một bộ câu hỏi ngắn về những tình huống rất thường ngày, như cách bạn nghỉ cuối tuần hay cách bạn chia việc trong nhóm.',
        'Kết quả là một tấm bản đồ đơn giản về thói quen của bạn, kèm vài gợi ý để làm việc và giao tiếp dễ chịu hơn.',
      ],
    },
    {
      id: 'career-interests',
      slug: 'so-thich-nghe-nghiep',
      nameVi: 'Sở thích nghề nghiệp',
      nameEn: 'Career Interests',
      desc: 'Giúp bạn gọi tên kiểu việc mình thấy vui khi làm, dù là với đồ vật, con số, con người hay ý tưởng.',
      status: 'soon',
      glyph: 'career',
      soon: [
        'Phần này sẽ dựa trên mô hình sở thích nghề nghiệp Holland, thường được gọi là RIASEC, chia sở thích thành sáu nhóm.',
        'Bạn trả lời vài câu về những việc mình thấy vui khi làm, rồi xem nhóm nào nổi bật và những ngành nghề thường gặp trong nhóm đó.',
      ],
    },
    {
      id: 'future-of-work',
      slug: 'nghe-nghiep-tuong-lai',
      nameVi: 'Nghề nghiệp hôm nay & ngày mai',
      nameEn: 'Future of Work',
      desc: 'Những nghề đang đổi cách làm vì công nghệ và những nghề mới đang thành hình, kể bằng ví dụ gần gũi.',
      status: 'soon',
      glyph: 'future',
      soon: [
        'Phần này sẽ kể về những công việc đang thay đổi cách làm khi công cụ số và trí tuệ nhân tạo đi vào văn phòng, cửa hàng và nhà máy.',
        'Mỗi nghề có ví dụ cụ thể về phần việc dễ được máy làm thay và phần việc vẫn cần con người.',
      ],
    },
    {
      id: 'skills',
      slug: 'ky-nang-nen-dau-tu',
      nameVi: 'Kỹ năng nên đầu tư',
      nameEn: 'Skills to Build',
      desc: 'Những kỹ năng dùng được ở nhiều nghề và cách luyện từng chút một mỗi tuần.',
      status: 'soon',
      glyph: 'skills',
      soon: [
        'Phần này sẽ gom những kỹ năng dùng được ở nhiều nghề, như viết rõ ý, trình bày trước người lạ hay tự quản lý thời gian.',
        'Mỗi kỹ năng có một bài tập nhỏ làm được trong tuần, để bạn thấy mình tiến bộ thật chứ không chỉ đọc cho biết.',
      ],
    },
    {
      id: 'core-values',
      slug: 'gia-tri-song',
      nameVi: 'Giá trị sống',
      nameEn: 'Core Values',
      desc: 'Chọn ra vài giá trị bạn thật sự sống theo, để những lúc phải đánh đổi bạn quyết định nhẹ nhàng hơn.',
      status: 'soon',
      glyph: 'values',
      soon: [
        'Phần này sẽ cho bạn một bộ thẻ giá trị như sự ổn định, tự do, gia đình hay sự công nhận, rồi mời bạn chọn và xếp hạng.',
        'Khi biết mình coi trọng điều gì nhất, bạn sẽ dễ trả lời những câu khó như có nên nhận việc lương cao nhưng xa nhà hay không.',
      ],
    },
  ],
};

export const SOON_NOTE = 'HUB đang hoàn thiện phần này, bạn ghé lại sau nhé.';
