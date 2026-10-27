# Thẩm định nội dung thẻ “Giá trị sống”

Ngày: 27/10/2026. Phạm vi: `assets/js/modules/values/values.js`, `cards.js`, `content.js`, `calc.js`, đối chiếu với `research/gia-tri-song.md`. Không sửa file nguồn. Chưa có `view.js` nên một số điểm (mục 30–33) là việc view phải làm đúng.

Cách chạy `check-copy`: `tools/check-copy.mjs` **chưa có** file của thẻ này trong `MODULES`. Đã chạy một bản sao (thư mục tạm) với `MODULES = [values.js, cards.js, content.js]`: 4 lỗi, 8 cảnh báo, đã gộp vào dưới (mục 34). Không có dấu “—” giữa câu, không có từ cấm.

Mức: **cao** = sai dữ kiện, nhãn bằng chứng sai, hoặc phán đoán nhân quả về người dùng không có căn cứ; phải sửa trước khi bật thẻ. **vừa** = nên sửa trong lô này. **thấp** = sửa khi tiện.

---

## A. Dữ kiện, nhãn bằng chứng

1. **values.js `ST.career`** (cao)
   Trích: “Đây cũng là giá trị có liên hệ mạnh nhất với hành vi tương ứng trong nghiên cứu của Bardi và Schwartz (2003): người coi trọng cái mới thật sự hay tìm việc mới, chỗ mới.”
   Vấn đề: abstract (research 3.2) nói Mới mẻ **và Truyền thống** liên hệ mạnh, không nói Mới mẻ “mạnh nhất”. Vế “hay tìm việc mới, chỗ mới” là suy diễn: nghiên cứu đo hành vi chung, không đo đổi việc. Câu nằm ở mục Nghề nghiệp, gắn nhãn `bc`, nên người đọc hiểu là có nghiên cứu về đổi việc.
   Sửa: “Ngược chiều với sở thích nghề thuộc nhóm Quy củ (Sagiv, 2002). Cùng với Truyền thống, đây là giá trị liên hệ chặt nhất với hành vi tương ứng trong nghiên cứu của Bardi và Schwartz (2003); nghiên cứu này không đo riêng chuyện đổi việc.”

2. **values.js `PO.career`** (vừa)
   Trích: “Đi cùng sở thích nghề thuộc nhóm Quản lý và ngược chiều với giá trị Phổ quát (Sagiv, 2002).”
   Vấn đề: Sagiv (2002) thấy **sở thích Quản lý** ngược chiều với giá trị Bao quát/Phổ quát, không phải giá trị Quyền lực ngược chiều Phổ quát (điều đó là cấu trúc vòng tròn, không phải phát hiện của Sagiv). Câu hiện tại gán nhầm kết quả.
   Sửa: “Đi cùng sở thích nghề thuộc nhóm Quản lý (Sagiv, 2002). Trong cùng nghiên cứu, sở thích Quản lý ngược chiều với giá trị Phổ quát, nằm ở phía đối diện Quyền lực trên vòng tròn.”

3. **values.js `PO.money`, `PO.relation`** (cao)
   Trích: `ev: 'bc'` cho “Giàu có là một mục đo của chính giá trị này. Ở thang đo khác (chủ nghĩa vật chất)… ở mức nhỏ (Dittmar và cộng sự, 2014)” và “Tổng quan của Kasser (2016) ghi nhận… bằng chứng gián tiếp”.
   Vấn đề: research mục 7 ghi **[KN] + [BC gián tiếp]**, không phải [BC]. Trên trang nhãn `bc` hiện chữ “Có nghiên cứu”, trái với câu “bằng chứng gián tiếp” ngay trong đoạn. Ngoài ra r ≈ −0,19 được gọi “mức nhỏ” ở đây nhưng “nhỏ đến vừa” ở `EFFECT.paragraphs[2]`.
   Sửa: thêm nhãn thứ ba `ev: 'gt'` (RESULT: `gt: 'Bằng chứng gián tiếp'`), dùng cho hai ô này. Đổi “ở mức nhỏ” thành “ở mức nhỏ đến vừa”.

4. **values.js `BE.relation`** (vừa)
   Trích: “Vợ chồng thường giống nhau về giá trị, nhưng độ giống giá trị không dự đoán chắc chắn mức hài lòng trong hôn nhân (Luo và Klohnen, 2005).” `ev: 'bc'`.
   Vấn đề: Luo & Klohnen trong research là **[qua trích dẫn: thứ cấp]**; nghiên cứu nói về giá trị và thái độ nói chung, không riêng Nhân hậu. Nhãn `bc` đặt ở ô Nhân hậu làm người đọc hiểu đây là bằng chứng về Nhân hậu.
   Sửa: `ev: 'gt'`; “Đây chính là phần lõi của định nghĩa. Một nghiên cứu trên 291 cặp mới cưới (Luo và Klohnen, 2005, qua bài dẫn lại) thấy vợ chồng khá giống nhau về thái độ và giá trị nói chung, nhưng độ giống này không đi cùng mức hài lòng trong hôn nhân.”

5. **values.js `AC.career`; content.js `EFFECT.paragraphs[1]`** (vừa)
   Trích: “…ngay từ đầu năm nhất, tức phần lớn là tự chọn ngành theo giá trị”; “tức người ta chọn ngành theo giá trị nhiều hơn là bị ngành học thay đổi giá trị.”
   Vấn đề: research ghi đây là **gợi ý** của tác giả, chỉ ở một ngành (kinh tế). “tức” biến gợi ý thành kết luận chung cho mọi ngành.
   Sửa (values.js): “…ngay từ đầu năm nhất, gợi ý rằng giá trị góp phần vào việc chọn ngành (Gandal và cộng sự, 2005).” (content.js): “…có ngay từ đầu năm nhất; các tác giả cho rằng, ít nhất ở ngành kinh tế, người học mang sẵn giá trị khi chọn ngành chứ không chỉ do ngành học tạo ra.”

6. **content.js `INTRO.lead`** (vừa)
   Trích: “một trong những lý thuyết được kiểm chứng ở nhiều nền văn hoá nhất của tâm lý học xã hội.”
   Vấn đề: so sánh bậc nhất không có trong research. Research chỉ có “dữ liệu từ 82 nước” (Schwartz 2012, abstract).
   Sửa: “Bộ thẻ dựa trên lý thuyết giá trị cơ bản của Shalom Schwartz, đã được kiểm định trên dữ liệu từ 82 nước.”

7. **content.js `WHAT.takeaway`** (cao)
   Trích: “Một lựa chọn nghề bền vững thường cần cả ba khớp tương đối với nhau.”
   Vấn đề: research không có nghiên cứu nào về việc khớp cả ba dự đoán độ bền của lựa chọn nghề; Knafo & Sagiv (2004) abstract **không** nói về độ phù hợp hay sự hài lòng. Thêm nữa check-copy cảnh báo “thường” ×2.
   Sửa: “Ba thẻ Bản đồ tính cách, Sở thích nghề nghiệp và Giá trị sống đo ba thứ khác nhau: mình hay cư xử thế nào, mình thích làm việc gì, và mình muốn đời mình hướng tới điều gì. Ba kết quả nên được đọc cạnh nhau, vì mỗi thứ chỉ cho thấy một phần.”

8. **content.js `EFFECT.paragraphs[2]`** (vừa)
   Trích: “Luo và Klohnen (2005) thấy các cặp vợ chồng mới cưới rất giống nhau về giá trị, nhưng chính độ giống về tính cách, không phải về giá trị, mới liên quan tới mức hài lòng”.
   Vấn đề: nguồn [thứ cấp] viết như đã đọc; bản dẫn lại nói “thái độ”, không nói riêng “giá trị”. Thiếu cỡ mẫu.
   Sửa: “Về quan hệ, theo các bài dẫn lại nghiên cứu của Luo và Klohnen (2005) trên 291 cặp mới cưới, vợ chồng rất giống nhau về thái độ và giá trị, nhưng chính độ giống về tính cách, không phải về thái độ, mới liên quan tới mức hài lòng trong hôn nhân.”

9. **content.js `CIRCLE.paragraphs[2]`** (thấp)
   Trích: “Ở mẫu đại diện của 13 nước”.
   Vấn đề: abstract ghi “mẫu đại diện hoặc gần đại diện”. Có thể thêm con số làm rõ “khá ổn định”.
   Sửa: “Ở mẫu đại diện hoặc gần đại diện của 13 nước… thấy một thứ bậc chung khá ổn định (thứ bậc của 83% số mẫu tương quan từ 0,80 trở lên với thứ bậc chung)…”

10. **content.js `CIRCLE.paragraphs[1]`** (thấp)
    Trích: “có hai giá trị mới gần với đời sống Việt Nam là Thể diện và Khiêm nhường”.
    Vấn đề: “gần với đời sống Việt Nam” là nhận định của người soạn (research 1.5 ghi là “gợi ý cho thẻ”), không có số liệu. Danh sách 19 giá trị là [thứ cấp].
    Sửa: “…tách mười giá trị thành mười chín và thêm hai giá trị mới là Thể diện và Khiêm nhường.” Bỏ vế “gần với đời sống Việt Nam”, hoặc ghi “theo nhận định của người biên soạn”. Thêm `schwartz-2012` vào `src` (định nghĩa Nhân hậu, Phổ quát).

11. **content.js `EFFECT.paragraphs[1]`** (thấp)
    Trích: “Knafo và Sagiv (2004) khảo sát 652 người lao động ở 32 nghề”.
    Vấn đề: thiếu phạm vi (Israel).
    Sửa: “…652 người lao động ở Israel thuộc 32 nghề…”

12. **content.js `EFFECT.lead`** (thấp)
    Trích: “Giá trị tự báo cáo dự đoán được nhiều thái độ và hành vi”.
    Vấn đề: câu đến từ Sagiv và cộng sự (2017) nhưng `SOURCES` không có nguồn này.
    Sửa: thêm `sagiv-2017` (Personal values in human life, Nature Human Behaviour 1(9), DOI 10.1038/s41562-017-0185-3) và dẫn trong lead.

13. **values.js `HE.career`** (thấp)
    Trích: “Các nghiên cứu đã tra cứu không thấy liên hệ rõ…” `ev: 'kn'`.
    Vấn đề: nhãn `kn` hiện “Suy ra từ định nghĩa”, nhưng câu không suy ra từ định nghĩa mà nói về sự vắng bằng chứng.
    Sửa: “Chưa thấy nghiên cứu nối giá trị này với một nhóm sở thích nghề cụ thể. Theo định nghĩa, công việc có chỗ cho niềm vui riêng sẽ hợp với người đặt nặng giá trị này hơn.”

14. **values.js `CO.career`, `ST.career`** (thấp)
    Vấn đề: ý Bardi & Schwartz (2003) về hành vi chung (lễ phép, tìm cái mới) đặt trong ô Nghề nghiệp. Ý đúng nhưng sai chỗ.
    Sửa: chuyển vế Bardi & Schwartz sang `EFFECT` (đã có sẵn) và để ô Nghề nghiệp chỉ còn Sagiv (2002).

15. **values.js `BE.career`** (thấp)
    Trích: “những nghề có môi trường xã hội (giáo dục, chăm sóc)”.
    Vấn đề: ví dụ nghề không có trong abstract Knafo & Sagiv.
    Sửa: bỏ ngoặc, hoặc “(theo phân loại Holland, nhóm này gồm các nghề như dạy học, chăm sóc)”.

16. **content.js `HOLLAND_LINK.C`** (thấp)
    Trích: “ngược chiều với Tự chủ và Mới mẻ”.
    Vấn đề: research 2.2 ghi thêm Bao quát/Phổ quát.
    Sửa: “…ngược chiều với Tự chủ, Mới mẻ và Phổ quát (Sagiv, 2002).”

## B. Thẻ giá trị (cards.js, values.js `items`)

17. **cards.js `bao-dung`; values.js `UN.items`** (vừa)
    Trích: “Bao dung: Chấp nhận người khác mình, nghĩ khác mình.”; items “cởi mở, …”.
    Vấn đề: trong tiếng Việt “bao dung” nghiêng về tha thứ, mà “forgiving” là mục của **Nhân hậu**. Đây là chỗ dễ lẫn Nhân hậu/Phổ quát nhất. Còn “cởi mở” trong `items` trùng chữ với nhóm “Cởi mở với thay đổi”.
    Sửa: tên thẻ “Tôn trọng khác biệt”, định nghĩa “Chấp nhận người sống khác, nghĩ khác mình, kể cả người không quen.” Trong `items`: “rộng lượng với quan điểm khác” thay cho “cởi mở”.

18. **cards.js `suc-khoe` (“Bình an”)** (vừa)
    Trích: “Bình an: Bản thân tránh được nguy hiểm, bệnh tật và rủi ro.”
    Vấn đề: “bình an” thường hiểu là yên lòng, thanh thản (gần “inner harmony”), lệch khỏi an toàn thân thể. Research đã ghi căn cứ thẻ này yếu (“healthy/clean” cần đối chiếu).
    Sửa: tên “An toàn bản thân” hoặc “Sức khoẻ, an toàn”; giữ định nghĩa.

19. **cards.js `ky-luat`** (vừa)
    Trích: “Tự giữ mình theo nếp, việc gì ra việc nấy.”
    Vấn đề: “self-discipline” của SVS là tự kiềm chế, cưỡng lại cám dỗ. “Việc gì ra việc nấy” là ngăn nắp (gần nét Tận tâm). “Theo nếp” trùng thẻ “Nếp nhà” (Truyền thống).
    Sửa: “Kiềm chế được ý thích nhất thời, không làm điều mình biết là không nên.”

20. **cards.js `anh-huong`** (vừa)
    Trích: “Việc mình làm tác động được tới người khác và tới kết quả chung.”
    Vấn đề: dễ được hiểu là “làm điều có ích cho xã hội” (Phổ quát) hoặc “điều khiển người khác” (Quyền lực). Research ghi thẻ này phải neo vào năng lực.
    Sửa: “Nhờ năng lực của mình mà lời nói, việc làm có trọng lượng với người khác.”

21. **cards.js `dam-thu`** (thấp)
    Trích: “…để xem mình làm được tới đâu.”
    Vấn đề: vế cuối là thử năng lực (Thành tựu), không phải tìm cảm giác mới (Mới mẻ).
    Sửa: “Sẵn lòng làm điều mạo hiểm, chưa biết trước kết quả, vì thấy thú vị.”

22. **cards.js `hieu-doi` / `ham-hieu`; `niem-vui` / `vui-choi`** (thấp)
    Vấn đề: “Hiểu đời” (Phổ quát, căn cứ yếu) và “Ham hiểu biết” (Tự chủ) gần chữ, gần nghĩa; “Niềm vui” và “Vui chơi” cũng vậy. “Hiểu đời” không có ý quan tâm tới người khác nên khó thấy vì sao thuộc Phổ quát.
    Sửa: research đã đề xuất bớt thẻ căn cứ yếu trước. Nếu giữ: “Hiểu đời: Hiểu người, hiểu chuyện nên ít vội phán xét ai.” “Niềm vui: Thấy vui với những ngày bình thường.” (bỏ “Sống vui” trùng ý “Vui chơi”).

23. **Phân bố thẻ** (thấp, ghi chú)
    Bảo tồn có 11 thẻ dồn trên cung 200°–240° (TR và CO cùng góc), Vượt lên bản thân 8, mỗi nhóm còn lại 7 (+3 Tận hưởng dùng chung). Kim dễ lệch về phía Bảo tồn hơn khi chọn ngẫu nhiên. Nên ghi một dòng trong `LIMITS` hoặc chia trọng số mỗi thẻ theo số thẻ của giá trị đó.

## C. Giọng văn, khuôn câu

24. **content.js `CONCLUSION` (5 đoạn)** (cao)
    Trích: open/enhance/conserve/transcend đều mở bằng “Bạn coi trọng…”, rồi cùng khuôn “Câu khẳng định. Lợi ích; chỗ cần để ý.”
    Vấn đề: trái quy tắc 1 và 2 của CLAUDE.md (lặp khuôn, câu mở bằng “Bạn”). Kèm phán đoán nhân quả về người dùng không có căn cứ: “Môi trường quá nhiều quy định sẽ làm hao năng lực của bạn nhanh hơn khối lượng việc” (open); “Điều đó giúp bạn đi xa trong môi trường có thước đo rõ” (enhance); “Công việc có ý nghĩa với người khác sẽ giữ bạn lâu hơn công việc chỉ trả lương cao” (transcend). Research 3.3–3.4 không có bằng chứng về độ gắn bó hay độ phù hợp. `mixed` có cụm dịch “chạm tới” (lỗi check-copy).
    Sửa:
    - open: “Năm thẻ đứng đầu nghiêng về chuyện được tự quyết và được thử cái mới. Khi so các chỗ làm, mức tự chủ trong công việc đáng được hỏi kỹ như hỏi lương; một nơi quản từng bước có thể làm việc dễ thành nặng nề.”
    - enhance: “Kết quả và vị trí của mình là điều được xếp trên cùng. Nên biết rõ thước đo thành công mình muốn là gì, và để ý xem những gì đang được trả cho thành tích ấy, trong đó có thời gian dành cho người thân.”
    - conserve: “Sự ổn định, nếp quen và những ràng buộc giữ mọi việc yên ổn chiếm phần lớn năm thẻ. Trước một thay đổi lớn, thử tách cái thật sự rủi ro khỏi cái chỉ là chưa quen; phần chưa quen thường thử được ở quy mô nhỏ.”
    - transcend: “Phần lớn ưu tiên hướng về người khác, người thân hoặc cả người không quen. Khi chọn việc, nên hỏi xem công việc ấy ảnh hưởng tới ai và theo cách nào; cũng nên tự đặt giới hạn, vì lo cho người khác dễ thành việc không có điểm dừng.”
    - mixed: “Năm ưu tiên trải ra nhiều phía, nên lựa chọn lớn nào cũng động tới ít nhất một điều mình coi trọng. Như vậy không phải là thiếu định hướng; khi phải chọn, thứ hạng vừa xếp là chỗ dựa chắc hơn hướng kim.”

25. **content.js `RECONCILE['enhance-transcend'][2]`** (vừa)
    Trích: “Tìm việc mà thành công của mình đo bằng kết quả cho người khác, như dạy học, chăm sóc…”
    Vấn đề: `reconcileIntro` nói theo Schwartz (2012) giá trị đối nghịch được theo đuổi **không trong cùng một hành động**; mục này lại gợi ý theo đuổi cả hai trong cùng một việc, và gợi ý nghề cụ thể (mang tính khuyên chọn).
    Sửa: “Tách bằng việc làm khác nhau: giữ mục tiêu thành tích ở công việc chính, và nhận một việc cố định cho người khác (kèm cặp người mới, việc thiện nguyện hằng tháng) để phần này không bị lấn mất.”

26. **content.js `CIRCLE.takeaway`** (vừa)
    Trích: “khi theo đuổi mạnh một giá trị, giá trị nằm ở phía đối diện thường phải lùi lại.”
    Vấn đề: mâu thuẫn với câu Schwartz ở `reconcileIntro` (vẫn theo đuổi được cả hai, ở việc khác, lúc khác). Câu hiện tại nghe như luật bù trừ toàn phần.
    Sửa: “Không có giá trị tốt hay xấu. Vòng tròn chỉ cho biết trong cùng một hành động, hai giá trị ở hai phía đối diện khó được thoả cùng lúc.”

27. **content.js `QUESTIONS.SE`, `QUESTIONS.CO`** (vừa, mục 4: ngầm đánh giá)
    Trích: SE “…đủ để bạn thôi lo và dám thử một việc mới?”; CO “…bạn chọn vì sợ làm phật lòng người khác hơn là vì thấy đúng?”
    Vấn đề: hai câu coi giá trị Bảo tồn là thứ cần vượt qua (lo, sợ) và đẩy về phía Cởi mở. Người coi trọng An toàn, Khuôn phép đọc sẽ thấy bị chê.
    Sửa: SE “Mức dự phòng nào (tiền, việc làm, sức khoẻ) thì bạn thấy đủ yên tâm, và hiện mình đang cách mức đó bao xa?” CO “Trong gia đình hay chỗ làm, quy tắc nào bạn giữ vì thấy đúng, và quy tắc nào chỉ giữ cho êm chuyện?”

28. **content.js `QUESTIONS.HE`, `DECIDE.questions[2]`** (thấp, câu dịch)
    Trích: “bạn có đang bảo vệ số giờ đó không?” (protect your time); “Một năm sau, bạn dễ tiếc vì đã chọn hay vì đã không chọn phương án nào hơn?” (rối).
    Sửa: HE “Trong một tuần bình thường, bao nhiêu giờ thật sự là của bạn, và số giờ ấy có hay bị việc khác lấn mất không?” DECIDE: “Một năm sau, nếu thấy tiếc, bạn đoán mình sẽ tiếc vì đã chọn A hay vì đã bỏ B?”

29. **content.js `RESULT.sameValue`** (vừa, có thể sai sự thật)
    Trích: “${n} thẻ trong năm thẻ cùng thuộc giá trị ${name}, nên giá trị này kéo kim mạnh nhất.”
    Vấn đề: hai thẻ ở hạng 4–5 (2 + 1 = 3 điểm) vẫn nhẹ hơn một thẻ hạng 1 (5 điểm). Câu sai khi giá trị đó không có trọng số lớn nhất.
    Sửa: chỉ hiện khi giá trị ấy có trọng số cao nhất trong `valueWeights`, hoặc đổi thành “${n} thẻ trong năm thẻ cùng thuộc giá trị ${name}, nên giá trị này được cộng nhiều lần vào kim.”

## D. calc.js

30. **calc.js `needle()` — `nearest`** (vừa)
    Vấn đề: `nearest` chọn theo góc trên cả 10 giá trị, kể cả giá trị có trọng số 0. Ví dụ năm thẻ chỉ thuộc Tự chủ (0°) và Tận hưởng (80°) với trọng số gần bằng nhau, kim ở khoảng 40° và `RESULT.pointsTo` sẽ nói “gần nhất với giá trị Mới mẻ”, một giá trị người dùng không chọn thẻ nào.
    Sửa: chỉ xét `v` có `weights[v] > 0`; thêm ca kiểm thử này vào `calc.test.html`.

31. **calc.js — thiếu hàm quy kim về nhóm bậc cao** (vừa)
    Vấn đề: `CONCLUSION` và `RESULT.pointsTo(g, v)` cần nhóm của hướng kim, nhưng `calc.js` không có hàm nào làm việc này. Tận hưởng (80°) thuộc hai nhóm, nên kim ở gần 80° cần quy tắc rõ (vd chia theo cung: Cởi mở 340°–80°, Nâng cao 80°–180°, …) và phải có kiểm thử, không để view tự làm.
    Sửa: thêm `groupOf(angle)` thuần, trả `'open' | 'enhance' | 'conserve' | 'transcend'`, ghi rõ ranh giới; ở đúng ranh giới Tận hưởng nên trả về nhóm có tổng trọng số lớn hơn, hoặc `mixed`.

32. **calc.js `conflicts()` với Tận hưởng; vị trí TR/CO** (thấp)
    Kiểm: logic khớp với trang. Tận hưởng nằm trong `open` và `enhance` nên xung khắc với cả Bảo tồn và Vượt lên bản thân; mọi cặp xung khắc cách nhau ≥ 120° theo `ANGLE`, không có cặp cùng nhóm bị báo nhầm. TR và CO chung nan 240° đúng hình vẽ của Schwartz (Truyền thống vòng ngoài).
    Lưu ý: cặp Tận hưởng–Phổ quát (120°) hơi gượng, vì research 1.4 xếp cả hai vào nhóm “tăng trưởng, không vướng lo âu”. Trang cũng chưa giải thích việc TR/CO chung nan. Nên thêm một câu vào `CIRCLE.paragraphs[0]`: “Truyền thống và Khuôn phép chung một nan quạt, Truyền thống ở vòng ngoài, vì hai giá trị cùng hướng tới việc gác mong muốn riêng để theo kỳ vọng bên ngoài.” Đồng thời `conflictPairs` nên trả về trục (`'open-conserve'` hoặc `'enhance-transcend'`) để view chọn đúng `RECONCILE`. Chú thích trong `calc.js` gọi CO là “Tuân thủ”, HE là “Hưởng thụ” (trùng tên thẻ `huong-thu`); đổi cho khớp tên trên trang: “Khuôn phép”, “Tận hưởng”.

33. **calc.js `valueWeights`, `compareOptions`; content.js `TOOL`, `RESULT.lead`** (thấp)
    - `RESULT.lead` nói kim “cộng thêm một phần nhỏ của các thẻ khác trong chồng ‘Rất quan trọng’”, nhưng bước 2 bắt giữ **đúng năm thẻ** ở chồng này, nên `alsoImportant` có thể luôn rỗng. View cần làm rõ (giữ lại danh sách trước khi lọc) hoặc bỏ vế này.
    - `TOOL.tooFew` cho phép xếp hạng với 3 thẻ, trong khi bước 2 đòi đủ năm. Hai quy tắc nên thống nhất.
    - `compareOptions`: `Number.isFinite('3')` là `false`, nên nếu view truyền chuỗi từ ô nhập thì điểm bị bỏ qua. Nên ép `Number()` trong `clamp`. Trọng số âm hoặc `NaN` chưa được chặn.
    - `DECIDE.lead`, `DECIDE.needRank` gọi là “năm giá trị”, nhưng tiêu chí thực là năm **thẻ**; hai thẻ có thể cùng một giá trị Schwartz. Sửa: “năm điều bạn coi trọng nhất”.

## E. Kiểm văn phong tự động và thủ tục

34. **check-copy** (vừa)
    - Lỗi “Cụm dịch ‘chạm tới’” ở `CONCLUSION.mixed`: đã có bản sửa ở mục 24.
    - Lỗi “Từ hạn chế ‘giá trị’ ×75 / ×12”: chủ đề của thẻ, không sửa chữ được. Cần thêm quy tắc miễn (như `TERMS` của “năng lượng tái tạo”) cho file của thẻ này.
    - Lỗi “Mở đoạn bằng câu hỏi” ở `DECIDE.questions[1]`: đây là danh sách câu hỏi, báo nhầm; nên miễn khoá `questions`.
    - Cảnh báo “thường” ×2 ở `WHAT.takeaway`: đã có bản sửa ở mục 7.
    - Thêm `values/values.js`, `cards.js`, `content.js` vào `MODULES` và `values/view.js` vào `FILES` khi có view.
    - `INTRO.privacy` nói thẻ lưu cách chia thẻ trong sessionStorage: cần cập nhật bảng `core/session.js` trong CLAUDE.md (khoá mới).
    - Research dùng “Bao quát”, trang dùng “Phổ quát”: sửa research cho khớp.

## Không phát hiện vấn đề

- `DECIDE`: không có câu khuyên chọn bên nào; `tradeLine`, `noTradeoff`, `note` trung tính. `DECIDE.why` dùng Cochrane đúng giới hạn (quyết định y tế, chưa có bằng chứng cho nghề nghiệp).
- `LIMITS`, `SOURCE_NOTE`, `HOLLAND_NOTE`, `reconcileIntro`: đúng research mục 8.
- `CIRCLE.paragraphs[3]` (Việt Nam): đúng phạm vi, không khẳng định thứ bậc của người Việt.
- Ánh xạ 36 thẻ sang 10 giá trị khớp research mục 6 (số thẻ mỗi giá trị đúng); không có thẻ nào vượt ranh giới Nhân hậu/Phổ quát ngoài mục 17.

---

## Tóm tắt

Có 34 mục: 4 mức cao, 16 vừa, 14 thấp. Nên sửa trước khi bật thẻ: (1) `CONCLUSION` lặp khuôn “Bạn coi trọng…” và có ba câu nhân quả về người dùng không có căn cứ; (2) nhãn `bc` gắn cho bằng chứng gián tiếp hoặc thứ cấp (`PO.money`, `PO.relation`, `BE.relation`), nên thêm nhãn “Bằng chứng gián tiếp”; (3) `ST.career` phóng đại Bardi & Schwartz (2003); (4) `WHAT.takeaway` khẳng định “lựa chọn nghề bền vững cần cả ba khớp” không có nguồn; (5) `PO.career` gán nhầm kết quả của Sagiv (2002). Về thẻ: “Bao dung” lấn sang Nhân hậu; “Bình an”, “Kỷ luật”, “Có ảnh hưởng” lệch mục SVS. Trong `calc.js`, logic xung khắc khớp lý thuyết, nhưng `nearest` có thể trả về giá trị người dùng không chọn, và còn thiếu hàm quy kim về nhóm (Tận hưởng thuộc hai nhóm).
