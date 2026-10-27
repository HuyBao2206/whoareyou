// 50 câu IPIP Big-Five Factor Markers (Goldberg, 1992), theo thứ tự trong bảng hỏi 50 câu của IPIP.
// Nguồn: ipip.ori.org (phạm vi công cộng). Câu tiếng Anh giữ nguyên chữ của IPIP (không có "I" ở đầu).
// Đối chiếu bằng bộ dữ liệu `big5` của gói CRAN semanticfa 0.5.1 (bản 10/2026), lấy từ IPIP.
//
//   d:   chiều tính cách. O Cởi mở, C Tận tâm, E Hướng ngoại, A Dễ chịu, N Bất ổn cảm xúc.
//   key: +1 câu thuận, -1 câu nghịch (đảo điểm: 6 − câu trả lời), tính theo chiều d.
//        IPIP chấm chiều thứ tư theo hướng "Ổn định cảm xúc" (Emotional Stability), nên dấu ở trang IPIP
//        ngược với cột này cho 10 câu chiều N. Chiều O ứng với "Intellect/Imagination" của IPIP.
//   vi:  bản dịch của HUB, chưa chuẩn hoá trên người Việt.

export default [
  { n: 1, d: 'E', key: 1, en: 'Am the life of the party.', vi: 'Tôi là người khuấy động không khí ở các buổi tụ tập.' },
  { n: 2, d: 'A', key: -1, en: 'Feel little concern for others.', vi: 'Tôi ít bận tâm đến người khác.' },
  { n: 3, d: 'C', key: 1, en: 'Am always prepared.', vi: 'Việc gì tôi cũng chuẩn bị sẵn từ trước.' },
  { n: 4, d: 'N', key: 1, en: 'Get stressed out easily.', vi: 'Tôi dễ bị căng thẳng.' },
  { n: 5, d: 'O', key: 1, en: 'Have a rich vocabulary.', vi: 'Vốn từ của tôi phong phú.' },
  { n: 6, d: 'E', key: -1, en: "Don't talk a lot.", vi: 'Tôi không nói nhiều.' },
  { n: 7, d: 'A', key: 1, en: 'Am interested in people.', vi: 'Tôi quan tâm đến mọi người.' },
  { n: 8, d: 'C', key: -1, en: 'Leave my belongings around.', vi: 'Tôi để đồ đạc bừa bãi.' },
  { n: 9, d: 'N', key: -1, en: 'Am relaxed most of the time.', vi: 'Phần lớn thời gian, tôi thấy thư thả.' },
  { n: 10, d: 'O', key: -1, en: 'Have difficulty understanding abstract ideas.', vi: 'Tôi thấy khó hiểu những ý trừu tượng.' },
  { n: 11, d: 'E', key: 1, en: 'Feel comfortable around people.', vi: 'Ở giữa mọi người, tôi thấy thoải mái.' },
  { n: 12, d: 'A', key: -1, en: 'Insult people.', vi: 'Tôi buông lời xúc phạm người khác.' },
  { n: 13, d: 'C', key: 1, en: 'Pay attention to details.', vi: 'Tôi để ý đến từng chi tiết.' },
  { n: 14, d: 'N', key: 1, en: 'Worry about things.', vi: 'Tôi hay lo nghĩ đủ thứ chuyện.' },
  { n: 15, d: 'O', key: 1, en: 'Have a vivid imagination.', vi: 'Tôi giàu trí tưởng tượng.' },
  { n: 16, d: 'E', key: -1, en: 'Keep in the background.', vi: 'Tôi hay đứng phía sau, ít khi ra mặt.' },
  { n: 17, d: 'A', key: 1, en: "Sympathize with others' feelings.", vi: 'Tôi đồng cảm với cảm xúc của người khác.' },
  { n: 18, d: 'C', key: -1, en: 'Make a mess of things.', vi: 'Việc vào tay tôi hay bị làm rối tung lên.' },
  { n: 19, d: 'N', key: -1, en: 'Seldom feel blue.', vi: 'Tôi ít khi thấy buồn bã.' },
  { n: 20, d: 'O', key: -1, en: 'Am not interested in abstract ideas.', vi: 'Tôi không hứng thú với những ý trừu tượng.' },
  { n: 21, d: 'E', key: 1, en: 'Start conversations.', vi: 'Tôi là người mở lời bắt chuyện.' },
  { n: 22, d: 'A', key: -1, en: "Am not interested in other people's problems.", vi: 'Chuyện khó khăn của người khác không làm tôi bận tâm.' },
  { n: 23, d: 'C', key: 1, en: 'Get chores done right away.', vi: 'Việc vặt trong nhà, tôi làm xong ngay.' },
  { n: 24, d: 'N', key: 1, en: 'Am easily disturbed.', vi: 'Tôi dễ bị rối lòng.' },
  { n: 25, d: 'O', key: 1, en: 'Have excellent ideas.', vi: 'Tôi có những ý tưởng hay.' },
  { n: 26, d: 'E', key: -1, en: 'Have little to say.', vi: 'Tôi ít khi có gì để nói.' },
  { n: 27, d: 'A', key: 1, en: 'Have a soft heart.', vi: 'Tôi là người dễ mủi lòng.' },
  { n: 28, d: 'C', key: -1, en: 'Often forget to put things back in their proper place.', vi: 'Tôi hay quên cất đồ về đúng chỗ.' },
  { n: 29, d: 'N', key: 1, en: 'Get upset easily.', vi: 'Tôi dễ buồn bực.' },
  { n: 30, d: 'O', key: -1, en: 'Do not have a good imagination.', vi: 'Tôi không giỏi tưởng tượng.' },
  { n: 31, d: 'E', key: 1, en: 'Talk to a lot of different people at parties.', vi: 'Ở các buổi tiệc, tôi nói chuyện với nhiều người khác nhau.' },
  { n: 32, d: 'A', key: -1, en: 'Am not really interested in others.', vi: 'Tôi không thật sự quan tâm đến người khác.' },
  { n: 33, d: 'C', key: 1, en: 'Like order.', vi: 'Tôi thích mọi thứ ngăn nắp.' },
  { n: 34, d: 'N', key: 1, en: 'Change my mood a lot.', vi: 'Tâm trạng của tôi hay thay đổi.' },
  { n: 35, d: 'O', key: 1, en: 'Am quick to understand things.', vi: 'Tôi hiểu vấn đề nhanh.' },
  { n: 36, d: 'E', key: -1, en: "Don't like to draw attention to myself.", vi: 'Tôi không thích thu hút sự chú ý về mình.' },
  { n: 37, d: 'A', key: 1, en: 'Take time out for others.', vi: 'Tôi chịu bớt thời gian của mình cho người khác.' },
  { n: 38, d: 'C', key: -1, en: 'Shirk my duties.', vi: 'Tôi né tránh phần việc của mình.' },
  { n: 39, d: 'N', key: 1, en: 'Have frequent mood swings.', vi: 'Tôi hay vui buồn thất thường.' },
  { n: 40, d: 'O', key: 1, en: 'Use difficult words.', vi: 'Tôi dùng những từ ngữ khó.' },
  { n: 41, d: 'E', key: 1, en: "Don't mind being the center of attention.", vi: 'Tôi không ngại làm tâm điểm chú ý.' },
  { n: 42, d: 'A', key: 1, en: "Feel others' emotions.", vi: 'Tôi cảm nhận được cảm xúc của người khác.' },
  { n: 43, d: 'C', key: 1, en: 'Follow a schedule.', vi: 'Tôi làm theo lịch đã định.' },
  { n: 44, d: 'N', key: 1, en: 'Get irritated easily.', vi: 'Tôi dễ nổi cáu.' },
  { n: 45, d: 'O', key: 1, en: 'Spend time reflecting on things.', vi: 'Tôi dành thời gian ngẫm nghĩ về mọi chuyện.' },
  { n: 46, d: 'E', key: -1, en: 'Am quiet around strangers.', vi: 'Tôi ít nói khi ở cạnh người lạ.' },
  { n: 47, d: 'A', key: 1, en: 'Make people feel at ease.', vi: 'Ở cạnh tôi, người khác thấy dễ chịu.' },
  { n: 48, d: 'C', key: 1, en: 'Am exacting in my work.', vi: 'Tôi khắt khe với chất lượng công việc của mình.' },
  { n: 49, d: 'N', key: 1, en: 'Often feel blue.', vi: 'Tôi hay thấy buồn bã.' },
  { n: 50, d: 'O', key: 1, en: 'Am full of ideas.', vi: 'Đầu tôi lúc nào cũng có ý tưởng.' },
];
