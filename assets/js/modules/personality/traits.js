// Nội dung 5 chiều tính cách, mỗi chiều 3 mức (thấp, trung bình, cao).
// Phần `about` là kiến thức (giọng sách báo); phần `levels` là kết quả (giọng gần gũi). Văn phong: CLAUDE.md.
// Hai đầu thang đều có mặt mạnh: không viết như thể điểm cao là tốt, điểm thấp là kém.
//
// Mỗi mức: title (tên gọi ngắn), summary (biểu hiện thường ngày), strengths, watchOut (điểm dễ vấp),
//          study, work, conflict (gợi ý khi học, khi làm việc, khi có mâu thuẫn), note (lời nhắn 2–3 câu).

export default {
  O: {
    name: 'Cởi mở',
    en: 'Openness',
    ipip: 'Intellect/Imagination',
    poles: ['Thực tế, quen nếp', 'Tò mò, giàu ý tưởng'],
    about:
      'Chiều này đo mức hứng thú với ý tưởng mới, với nghệ thuật, với những câu hỏi trừu tượng và với cách làm chưa ai thử. Bộ câu của IPIP đặt tên cho nó là “trí tuệ và trí tưởng tượng”, nên các câu hỏi xoay quanh vốn từ, óc tưởng tượng và độ nhanh khi nắm một vấn đề. Điểm cao đi cùng sự tò mò và ưa đổi mới; điểm thấp đi cùng óc thực tế và sự gắn bó với cái đã được kiểm chứng.',
    levels: {
      low: {
        title: 'Chắc chân với cái đã biết',
        summary:
          'Quán quen, món quen, cách làm quen: thứ gì đã chạy tốt thì giữ, chẳng cần nghĩ lại. Những cuộc bàn chuyện trừu tượng kéo dài dễ làm bạn sốt ruột, vì trong đầu cứ bật lên câu hỏi: rốt cuộc làm được gì với nó? Cái mới phải chứng minh được ích lợi thì mới đáng thử.',
        strengths: [
          'Thực tế, nhìn ra ngay ý nào làm được và ý nào chỉ hay trên giấy.',
          'Bền với cách làm đã chọn, ít bị cuốn theo trào lưu.',
        ],
        watchOut: [
          'Dễ gạt một ý mới đi trước khi kịp nghe hết.',
          'Khi hoàn cảnh đổi, bỏ thói quen cũ tốn sức hơn người khác.',
        ],
        study:
          'Dễ hiểu bài nhất khi có ví dụ cụ thể và bài tập áp dụng ngay. Gặp phần lý thuyết khô, thử tự hỏi nó dùng vào việc gì rồi mới đọc tiếp.',
        work:
          'Hợp với việc có quy trình rõ và kết quả đo được. Trong nhóm, vai người hỏi “cái này chạy thế nào?” rất đáng giá, cứ giữ lấy.',
        conflict:
          'Khi người khác đưa ra cách làm lạ, nên hỏi thêm một câu trước khi nói không. Nhiều khi chỗ khác nhau chỉ nằm ở cách gọi tên.',
        note:
          'Thích cái quen không có nghĩa là hẹp hòi. Những gì bạn giữ lại đều đã qua thử thách, và nhóm nào cũng cần một người nhớ vì sao cách cũ từng chạy được.',
      },
      mid: {
        title: 'Mở cửa có chọn lọc',
        summary:
          'Sẵn lòng thử cái mới, miễn là thấy nó có ích. Có mảng bạn tò mò thật sự, có mảng thì cứ theo nếp cũ cho nhẹ đầu. Đọc một bài phân tích dài cũng được, xem một bộ phim giải trí cho thư giãn cũng vui.',
        strengths: [
          'Biết lúc nào nên đổi mới và lúc nào nên giữ cái đang chạy tốt.',
          'Nói chuyện được với cả người mê ý tưởng lẫn người chuộng thực tế.',
        ],
        watchOut: [
          'Đôi lúc chọn cách an toàn chỉ vì ngại nghĩ thêm, rồi về sau lại tiếc.',
          'Ít khi đào tới cùng một mảng nếu không có lý do rõ ràng.',
        ],
        study:
          'Chọn một chủ đề thật sự tò mò trong kỳ này và cho nó thêm giờ. Phần còn lại cứ học theo cách quen là đủ.',
        work:
          'Hợp làm cầu nối giữa người đề xuất ý mới và người phải thực hiện. Thử tóm ý tưởng của bên này bằng lời lẽ của bên kia.',
        conflict:
          'Khi hai bên giằng co giữa cách cũ và cách mới, nên đề nghị làm thử ở quy mô nhỏ trong một tuần rồi cùng xem kết quả.',
        note:
          'Đứng giữa thang đo không phải là nhạt. Cả hai cánh cửa đều trong tầm tay bạn, chỉ cần thỉnh thoảng bước qua cánh cửa mình ít mở hơn.',
      },
      high: {
        title: 'Đầu óc nhiều ngả',
        summary:
          'Một câu hỏi bâng quơ đủ kéo bạn đi rất xa: từ một bài hát sang lịch sử của nó, rồi sang chuyện vì sao người ta thích nghe nhạc buồn. Sách lạ, cách nhìn khác, ý tưởng chưa ai thử đều làm bạn hứng thú. Trong đầu lúc nào cũng có vài dự định đang dở dang.',
        strengths: [
          'Nhìn ra mối liên hệ giữa những thứ tưởng chẳng dính gì đến nhau.',
          'Học nhanh, không ngại bắt đầu ở chỗ mình còn mù tịt.',
        ],
        watchOut: [
          'Dễ chán khi phần thú vị qua đi và chỉ còn phần làm cho xong.',
          'Ý tưởng nhiều hơn thời gian, nên lắm việc bỏ dở giữa chừng.',
        ],
        study:
          'Trước khi rẽ sang chủ đề mới, ghi ra một câu về điều mình đã hiểu ở chủ đề cũ. Nhờ vậy những gì đã đọc không trôi mất.',
        work:
          'Hợp với việc cần nghĩ ra hướng đi mới, nhưng nên ghép cặp với người giỏi chốt hạn. Mỗi tuần, chọn một ý để làm đến nơi thay vì mở thêm ba ý.',
        conflict:
          'Khi tranh luận, nhớ rằng người kia chưa đi cùng mạch nghĩ với mình. Nói kết luận trước, lý lẽ sau, đừng kể từ đầu.',
        note:
          'Tò mò giúp bạn đi xa, còn kiên nhẫn giúp bạn đi tới nơi. Cứ để đầu óc rong ruổi, rồi chọn lấy một điều để làm cho xong.',
      },
    },
  },

  C: {
    name: 'Tận tâm',
    en: 'Conscientiousness',
    ipip: 'Conscientiousness',
    poles: ['Linh hoạt, tuỳ hứng', 'Ngăn nắp, kỷ luật'],
    about:
      'Chiều này đo mức ngăn nắp, chu đáo và kiên trì theo đuổi mục tiêu. Người điểm cao thích kế hoạch, giữ lời hứa và làm việc tới nơi tới chốn; người điểm thấp ứng biến nhanh, thoải mái với sự bừa bộn và không thích bị gò vào lịch. Trong các nghiên cứu tổng hợp, đây là chiều liên quan rõ nhất tới kết quả học tập.',
    levels: {
      low: {
        title: 'Tuỳ hứng mà xoay xở giỏi',
        summary:
          'Lịch trình chi li làm bạn thấy bị bó. Việc hay được làm khi có hứng, hoặc khi hạn chót đã sát nút. Bàn làm việc bừa một chút, nhưng món nào nằm ở đâu thì bạn vẫn biết.',
        strengths: [
          'Xoay xở nhanh khi kế hoạch đổ bể, không cuống.',
          'Thoải mái, không bắt người xung quanh phải theo khuôn.',
        ],
        watchOut: [
          'Việc nhỏ dồn lại thành việc lớn vì cứ để mai tính.',
          'Hứa thì dễ trễ hẹn, dù lúc hứa rất thật lòng.',
        ],
        study:
          'Chia bài thành từng phần nhỏ, mỗi phần làm trong 25 phút rồi nghỉ. Hạn tự đặt nên sớm hơn hạn thật vài ngày.',
        work:
          'Hợp với việc cần ứng biến và thay đổi liên tục. Với việc lặp đi lặp lại, nhờ ứng dụng nhắc việc hoặc một đồng nghiệp chu đáo giữ nhịp giùm.',
        conflict:
          'Khi bị trách trễ hẹn, nhận phần của mình trước rồi hẵng giải thích. Sau đó hứa một mốc nhỏ mà mình giữ được.',
        note:
          'Sự thoải mái của bạn giúp người khác bớt căng, điều đó là thật. Chỉ cần vài thói quen nhỏ làm chỗ bám, việc quan trọng sẽ không lọt mất.',
      },
      mid: {
        title: 'Chu đáo đúng chỗ',
        summary:
          'Việc quan trọng thì lên kế hoạch đàng hoàng, việc vặt thì để đó tính sau. Có lúc gọn gàng ngăn nắp, có lúc bừa một chút cũng chẳng sao. Bạn biết siết lại khi cần và thả lỏng khi được.',
        strengths: [
          'Dồn sức cho việc đáng làm kỹ, không cầu toàn ở chỗ không cần.',
          'Đủ linh hoạt để đổi kế hoạch mà không thấy mất phương hướng.',
        ],
        watchOut: [
          'Có khi đánh giá thấp một việc, đến lúc gấp mới thấy nó không hề vặt.',
          'Mục tiêu dài hơi dễ chững lại giữa chừng khi không ai theo dõi.',
        ],
        study: 'Với môn khó, giữ một lịch học cố định mỗi tuần. Môn dễ thì linh động cũng không sao.',
        work: 'Đầu tuần dành mười phút chọn ra ba việc nhất định phải xong. Còn lại cứ xử lý theo nhịp quen.',
        conflict:
          'Nếu ai đó kỹ tính hơn mình thấy khó chịu, hỏi xem phần nào là quan trọng với họ. Phần lớn chỉ cần kỹ hơn ở đúng phần ấy là xong.',
        note:
          'Không cần lúc nào cũng hoàn hảo. Biết việc nào đáng làm kỹ đã là một nửa của sự chu đáo, và nửa ấy bạn đang có.',
      },
      high: {
        title: 'Kế hoạch luôn trong túi',
        summary:
          'Danh sách việc cần làm, lịch hẹn ghi sẵn, đồ đạc về đúng chỗ. Đã nhận việc là làm tới nơi, đã hứa là giữ. Việc chưa xong cứ lởn vởn trong đầu, khó mà thảnh thơi đi chơi.',
        strengths: [
          'Đáng tin: giao việc cho bạn thì người khác yên tâm.',
          'Bền bỉ với mục tiêu dài, chịu làm cả phần nhàm chán.',
        ],
        watchOut: [
          'Dễ ôm việc và cầu toàn tới mức kiệt sức.',
          'Khó chịu khi kế hoạch bị đảo lộn hay người khác làm ẩu.',
        ],
        study:
          'Kế hoạch học của bạn đã tốt, giờ chỉ cần chừa trong đó những buổi nghỉ thật. Đầu óc được nghỉ thì mới nhớ lâu.',
        work:
          'Tập nói “thế là đủ tốt” với những việc không cần hoàn hảo. Giao bớt việc và chấp nhận người khác làm theo cách của họ.',
        conflict:
          'Khi người khác làm chưa đúng ý, nói rõ tiêu chuẩn mình cần thay vì lặng lẽ làm lại. Góp ý vào việc, đừng nhắm vào người.',
        note:
          'Nhiều người yên tâm vì có bạn. Thử dành cho chính mình một phần sự chu đáo ấy: nghỉ ngơi đâu phải phần thưởng chỉ dành cho lúc đã xong hết việc.',
      },
    },
  },

  E: {
    name: 'Hướng ngoại',
    en: 'Extraversion',
    ipip: 'Extraversion',
    poles: ['Hướng nội, trầm', 'Hướng ngoại, sôi nổi'],
    about:
      'Chiều này đo mức sôi nổi, thích giao tiếp và thích được ở giữa đám đông. Người điểm cao hào hứng khi gặp gỡ, dễ mở lời và thích nói ra suy nghĩ; người điểm thấp, thường gọi là hướng nội, chuộng nhóm nhỏ, ít lời và cần thời gian yên tĩnh để lấy lại sức sau những buổi đông người. Hướng nội là một sở thích về cách sống, không phải sự nhút nhát.',
    levels: {
      low: {
        title: 'Ấm trong vòng nhỏ',
        summary:
          'Một buổi tối yên tĩnh với sách, với phim hay với một người bạn thân dễ chịu hơn bữa tiệc đông người. Ở chỗ lạ, bạn quan sát trước rồi mới nói. Sau một ngày gặp gỡ liên tục, cần chút thời gian một mình để lại sức.',
        strengths: ['Lắng nghe kỹ, nói ít mà trúng.', 'Tập trung được lâu vào những việc cần làm một mình.'],
        watchOut: [
          'Dễ bị nghĩ là lạnh lùng hay khó gần, dù thật ra không phải.',
          'Ý hay thường bị giữ lại trong đầu vì ngại lên tiếng giữa đám đông.',
        ],
        study:
          'Tự học và học nhóm nhỏ hợp hơn lớp đông ồn ào. Trước buổi thảo luận, ghi sẵn một hai ý để đến lúc cần là nói được ngay.',
        work:
          'Hợp với việc cần chiều sâu và sự tập trung. Phải họp nhiều thì xin tài liệu trước để chuẩn bị, và gửi thêm ý kiến bằng văn bản sau buổi họp.',
        conflict:
          'Không cần trả lời ngay khi đang căng. Nói rõ “cho mình nghĩ một chút, tối nay mình nhắn lại” rồi giữ lời.',
        note:
          'Ít nói không có nghĩa là ít điều để nói. Những gì bạn chọn nói ra đều đã được nghĩ kỹ, nên cứ giành cho chúng một chỗ trong cuộc trò chuyện.',
      },
      mid: {
        title: 'Khi đông, khi lặng',
        summary:
          'Đi chơi đông người cũng vui, ở nhà một mình cũng thích. Tuỳ hôm, tuỳ người đi cùng mà bạn là người bắt chuyện hay người ngồi nghe. Kiểu nằm giữa này rất phổ biến, có người gọi là hướng trung.',
        strengths: ['Hợp với nhiều kiểu người và nhiều kiểu việc.', 'Biết khi nào cần lên tiếng, khi nào nên nhường lời.'],
        watchOut: [
          'Dễ nhận lời quá nhiều cuộc hẹn rồi mới thấy mệt.',
          'Có lúc chính mình cũng không rõ hôm nay cần chỗ ồn hay cần chỗ yên.',
        ],
        study:
          'Xen kẽ học một mình và học với bạn. Phần cần hiểu sâu thì tự đọc, phần cần ôn thì rủ người hỏi bài nhau.',
        work:
          'Làm được cả việc gặp gỡ lẫn việc ngồi một chỗ. Để ý xem sau những ngày nào mình mệt nhất, rồi xếp lịch cho hợp.',
        conflict:
          'Khi một người cần nói cho ra lẽ ngay còn người kia cần thời gian, bạn đứng giữa được. Thử đề nghị nghỉ một lát rồi cùng quay lại bàn tiếp.',
        note:
          'Không cần chọn phe. Chỉ cần nhận ra hôm nay mình cần có người hay cần được yên, rồi chiều mình một chút.',
      },
      high: {
        title: 'Đông vui mới đủ',
        summary:
          'Vào chỗ đông, bạn dễ làm quen và dễ làm không khí rôm rả. Nghĩ ra điều gì là muốn kể ngay. Ở một mình quá lâu thì bứt rứt, phải ra ngoài gặp bạn bè một chút mới thấy người khoẻ lại.',
        strengths: ['Mở lời dễ, giúp người lạ bớt ngại.', 'Kéo mọi người vào việc chung, giữ cho cả nhóm có hứng.'],
        watchOut: [
          'Dễ nói át người khác, nhất là người trầm tính.',
          'Nhận lời nhanh, rồi lịch dày tới mức không kịp thở.',
        ],
        study:
          'Học nhóm và giảng lại bài cho bạn bè giúp bạn nhớ lâu. Với phần phải tự đọc, hẹn một người bạn cùng ngồi học cho có không khí.',
        work:
          'Hợp với việc gặp gỡ, thuyết phục, dẫn dắt. Trong cuộc họp, thử để ý xem mình đã nói bao lâu, và hỏi ý người im lặng nhất.',
        conflict:
          'Khi đang nóng, nghe hết câu của người kia và nhắc lại ý họ trước khi đáp. Gặp người hướng nội, đừng ép họ trả lời ngay.',
        note:
          'Có bạn, căn phòng ấm lên, và điều đó quý thật. Đôi khi việc tốt nhất lại là chừa một khoảng lặng để người khác lên tiếng.',
      },
    },
  },

  A: {
    name: 'Dễ chịu',
    en: 'Agreeableness',
    ipip: 'Agreeableness',
    poles: ['Thẳng thắn, cạnh tranh', 'Ôn hoà, dễ cảm thông'],
    about:
      'Chiều này đo cách một người đối xử với người khác: mức tin người, sự cảm thông, lòng sẵn sàng giúp đỡ và xu hướng nhường nhịn để giữ hoà khí. Người điểm cao ấm áp, dễ hợp tác; người điểm thấp thẳng tính, hoài nghi và không ngại cạnh tranh. Một số tài liệu tiếng Việt gọi chiều này là “dễ đồng thuận” hay “hoà đồng”.',
    levels: {
      low: {
        title: 'Thẳng và tỉnh',
        summary:
          'Nghĩ sao nói vậy, không vòng vo cho êm chuyện. Lời khen dễ dãi hay những lời hứa suông khó qua được mắt bạn. Cần giành lẽ phải hay đòi quyền lợi thì không ngại va chạm.',
        strengths: ['Dám nói điều khó nghe khi cả nhóm đang né.', 'Tỉnh táo, khó bị lợi dụng hay dắt mũi.'],
        watchOut: [
          'Lời thẳng dễ thành gắt, người nghe chỉ nhớ giọng mà quên ý.',
          'Nghi ngờ quá mức khiến cả người tốt cũng dần rời xa.',
        ],
        study:
          'Tranh luận giúp bạn hiểu bài kỹ hơn. Học nhóm thì nên chia việc rõ ngay từ đầu để đỡ va chạm về sau.',
        work:
          'Hợp với vai phản biện, đàm phán, kiểm tra chất lượng. Khi góp ý, thử mở bằng một điều người kia đã làm được rồi mới nói chỗ cần sửa.',
        conflict:
          'Thắng lý mà mất người thì vẫn thiệt. Trước khi đáp trả, tự hỏi sau trận cãi này mình muốn giữ lại điều gì.',
        note:
          'Nhờ sự thẳng thắn của bạn mà cả nhóm khỏi tự dối mình. Nói thật bằng giọng mềm hơn một chút vẫn là nói thật, mà người ta lại nghe được nhiều hơn.',
      },
      mid: {
        title: 'Mềm mà có gai',
        summary:
          'Sẵn lòng giúp người, nhưng không để bị dắt mũi. Với người thân thì nhường nhịn, với chuyện mình thấy sai thì vẫn lên tiếng. Bạn tin người ở mức vừa phải, chờ xem việc làm rồi mới tin thêm.',
        strengths: ['Giữ được hoà khí mà vẫn bảo vệ được ý mình.', 'Biết lúc nào nên nhường, lúc nào phải giữ.'],
        watchOut: [
          'Có lúc nhường cho xong chuyện rồi về nhà lại ấm ức.',
          'Lúc mềm lúc rắn mà không nói rõ vì sao, người khác khó đoán.',
        ],
        study: 'Trong nhóm học, bạn hợp làm người điều phối: nghe đủ các bên rồi chốt cách làm.',
        work:
          'Làm với người dễ tính hay khó tính đều ổn. Nên nói trước những điều mình không nhượng bộ để khỏi giằng co về sau.',
        conflict:
          'Đã nhường thì nhường cho thật lòng, chưa muốn nhường thì nói ra từ đầu. Ấm ức để lâu còn mệt hơn cãi một lần cho rõ.',
        note:
          'Cả sự mềm mỏng lẫn sự cứng rắn đều nằm trong tay bạn. Điều cần luyện chỉ là chọn đúng lúc dùng cái nào, và nói ra lựa chọn ấy.',
      },
      high: {
        title: 'Người giữ hoà khí',
        summary:
          'Thấy ai buồn là muốn hỏi han, thấy ai cần là muốn giúp. Trong nhóm, bạn hay là người xoa dịu khi không khí căng thẳng. Tin người dễ, tha thứ cũng dễ.',
        strengths: ['Làm người khác thấy yên tâm và được lắng nghe.', 'Giỏi hợp tác, biết đặt mình vào chỗ người khác.'],
        watchOut: [
          'Khó nói không, nên dễ ôm cả việc của người khác vào mình.',
          'Ngại va chạm nên để vấn đề âm ỉ lâu hơn cần thiết.',
        ],
        study:
          'Giúp bạn bè học là việc tốt, nhưng giữ lại giờ cho bài của chính mình. Lập nhóm học thì nhớ chia phần rõ ràng.',
        work:
          'Hợp với việc chăm sóc, hỗ trợ, làm việc nhóm. Tập nói “để mình xem lịch đã” thay vì nhận lời ngay.',
        conflict:
          'Giữ hoà khí không có nghĩa là im lặng. Nói ra điều mình cần bằng giọng nhẹ nhàng vẫn là tử tế, với người kia và với cả mình.',
        note:
          'Lòng tốt của bạn là thật, và chính bạn cũng xứng đáng được hưởng nó. Một lời từ chối đúng lúc không làm bạn bớt dễ mến đi chút nào.',
      },
    },
  },

  N: {
    name: 'Bất ổn cảm xúc',
    en: 'Neuroticism',
    ipip: 'Emotional Stability (chấm ngược)',
    poles: ['Điềm tĩnh, vững', 'Nhạy cảm, dễ lo'],
    about:
      'Chiều này đo mức dễ trải qua cảm xúc tiêu cực như lo âu, buồn bã, cáu giận, và mức thất thường của tâm trạng. IPIP chấm chiều này theo hướng ngược lại và gọi là “ổn định cảm xúc”; thẻ này đảo lại để cả năm chiều cùng đọc theo một kiểu. Điểm cao không phải là bệnh, cũng không phải chẩn đoán: đó là độ nhạy của một người trước áp lực và rủi ro.',
    levels: {
      low: {
        title: 'Khó bị lung lay',
        summary:
          'Chuyện trục trặc ít khi làm bạn mất ngủ. Bị góp ý thì nghe, nghĩ một lúc rồi thôi. Người xung quanh hay thấy bạn điềm tĩnh, nhất là vào lúc mọi thứ đang rối.',
        strengths: ['Giữ được đầu óc tỉnh táo khi có sự cố.', 'Ít bị cảm xúc kéo đi, nên quyết định khá nhất quán.'],
        watchOut: [
          'Dễ xem nhẹ dấu hiệu rắc rối cho đến khi nó thành chuyện thật.',
          'Người khác đang lo mà nghe “có gì đâu” thì dễ thấy mình không được hiểu.',
        ],
        study:
          'Ít áp lực mùa thi là một lợi thế, chỉ đừng để bình tĩnh thành chủ quan. Làm thử một đề có bấm giờ để biết mình đang ở đâu.',
        work:
          'Hợp với việc cần giữ bình tĩnh dưới áp lực. Khi đồng nghiệp lo lắng, nghe họ nói hết rồi mới trấn an.',
        conflict:
          'Sự điềm tĩnh của bạn giúp cuộc tranh cãi hạ nhiệt. Nhớ hỏi người kia đang thấy thế nào, vì không phải ai cũng nguôi nhanh như mình.',
        note:
          'Sự vững vàng của bạn là chỗ dựa, cho mình và cho người bên cạnh. Giữ lấy nó, và thỉnh thoảng nhìn kỹ hơn nỗi lo của người khác, vì với họ nỗi lo ấy là thật.',
      },
      mid: {
        title: 'Lo vừa đủ để chuẩn bị',
        summary:
          'Có những ngày nhẹ tênh, có những tuần lo chuyện này chuyện kia. Áp lực lớn thì căng thẳng, qua rồi thì lấy lại thăng bằng. Cảm xúc đến và đi, bạn để ý tới chúng nhưng không để chúng cầm lái.',
        strengths: ['Lo đủ để chuẩn bị, bình tĩnh đủ để làm.', 'Hiểu được cả người hay lo lẫn người vô tư.'],
        watchOut: [
          'Khi mệt hay thiếu ngủ, chuyện nhỏ dễ bị phóng to.',
          'Có giai đoạn căng kéo dài mà không nhận ra mình đang quá tải.',
        ],
        study:
          'Trước kỳ thi, rải việc ôn ra nhiều ngày để nỗi lo có việc mà làm, thay vì dồn hết vào đêm cuối.',
        work:
          'Để ý những tuần dồn việc. Ngủ đủ giấc và đi bộ một vòng sau giờ làm giúp nhiều hơn mình tưởng.',
        conflict:
          'Thấy mình bắt đầu nóng thì xin tạm dừng mười phút. Quay lại khi đã bình tĩnh, câu chữ sẽ khác hẳn.',
        note:
          'Nỗi lo của bạn biết lúc nào nên đến và lúc nào nên đi. Cứ giữ những thói quen giúp mình lấy lại thăng bằng, nhất là vào những tuần bận nhất.',
      },
      high: {
        title: 'Nhạy với từng gợn sóng',
        summary:
          'Chuyện nhỏ cũng để lại dư âm khá lâu. Bạn dễ lo trước những điều chưa xảy ra, dễ chạnh lòng khi bị chê, và tâm trạng có hôm đổi mấy lần. Cũng nhờ nhạy như vậy mà bạn nhận ra những điều người khác bỏ qua.',
        strengths: ['Nhạy với rủi ro, thấy trước chỗ có thể hỏng.', 'Hiểu nỗi buồn của người khác vì chính mình từng trải qua.'],
        watchOut: [
          'Dễ nghĩ quẩn, xoay mãi một chuyện trong đầu.',
          'Căng thẳng kéo dài dễ ảnh hưởng tới giấc ngủ và sức khoẻ.',
        ],
        study:
          'Ôn sớm, chia nhỏ, làm thử đề để nỗi lo biến thành việc cụ thể. Trước khi ngủ, viết ra giấy điều đang lo cho đầu óc nhẹ bớt.',
        work:
          'Biến sự cẩn thận thành lợi thế bằng cách nhận phần kiểm tra, rà soát rủi ro. Khi lo quá, tách ra điều làm được ngay và điều nằm ngoài tầm tay.',
        conflict:
          'Đang buồn bực thì đợi qua một đêm rồi hẵng nhắn tin. Nói về cảm giác của mình (“mình thấy bị bỏ rơi”) thay vì kết tội người kia.',
        note:
          'Cảm xúc mạnh không phải khuyết điểm, đó là cách bạn cảm nhận mọi thứ rõ hơn người khác. Nếu những ngày nặng nề cứ kéo dài, tìm một người đáng tin hay một chuyên gia tâm lý để nói chuyện là việc nên làm.',
      },
    },
  },
};
