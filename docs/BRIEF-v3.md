# BRIEF v3 — Hoàn thiện web "Thấu Hiểu & Phát Triển Bản Thân" (whoareyou)

## 0. Bối cảnh

Web đang chạy tại `https://huybao2206.github.io/whoareyou/`. Mã nguồn chính là repo bạn đang mở.

**Hiện trạng:**
- Phần **Thần số học**: chỉ có **thiết kế** là đạt (giao diện, bố cục, chuyển động). **Giữ nguyên ngôn ngữ thiết kế này** và dùng nó làm chuẩn cho các thẻ mới.
- **Toàn bộ nội dung chữ không đạt**, trong đó có **toàn bộ nội dung Thần số học**: nhiều chỗ tự bịa, diễn đạt máy móc, câu cứng và trang trọng không đúng chỗ, dùng từ sai nghĩa hoặc sai ngữ cảnh. Coi tất cả chữ hiện có là bản nháp hỏng. Mục 2 chẩn đoán cụ thể.
- 6 thẻ còn lại đang ở trạng thái "Sắp ra mắt".

**Mục tiêu đợt này:**
- **(A)** Nghiên cứu lại và **viết mới hoàn toàn** mọi chữ trên web, kể cả toàn bộ nội dung Thần số học, theo chuẩn ở mục 3 và mục 4. Không sửa vá từng câu.
- **(B)** Hoàn thiện 6 thẻ còn lại, cả nội dung lẫn thiết kế.
- **(C)** Thêm trang "Hồ sơ của bạn" tổng hợp kết quả các thẻ.

**Thứ tự ưu tiên khi phải đánh đổi:** nội dung đúng và hữu ích > văn phong tự nhiên > thiết kế ấn tượng > hiệu ứng.

Các chủ đề này đã tràn lan trên mạng, nên web chỉ có giá trị khi hơn chỗ khác ở 5 điểm:
1. Chính xác, có nguồn.
2. Cập nhật.
3. Đọc xong làm được việc gì đó ngay.
4. Đọc như người Việt viết.
5. Trình bày đẹp và dễ dùng.

---

## 1. Cách làm việc

1. **Đọc hết brief này**, rồi đọc mã nguồn hiện có (cấu trúc thư mục, router, overlay, module numerology, `tools/check-copy.mjs`). Giữ kiến trúc code hiện tại, mở rộng chứ không viết lại code từ đầu. (Riêng nội dung chữ thì viết mới hoàn toàn, xem mục 2.)
2. **Theo dõi tiến độ:** tạo `PROGRESS.md` ghi phase đang làm, việc đã xong, việc còn lại, quyết định đã đưa ra. Commit sau mỗi bước có ý nghĩa. Việc này rất lớn, có thể phải làm qua nhiều phiên; phiên sau đọc `PROGRESS.md` là làm tiếp được.
3. **Nghiên cứu trước khi viết.** Dùng công cụ tìm kiếm và đọc web cho mọi thứ có thể kiểm chứng. Không viết từ trí nhớ những gì có số liệu, mốc thời gian, tên người, tên tổ chức hay quy tắc tính. Quy trình ở mục 4.
4. **Dùng subagent** khi có thể:
   - Mỗi thẻ một subagent nghiên cứu, trả về ghi chú có nguồn.
   - Một subagent **biên tập độc lập**, chưa từng thấy quá trình viết, để chấm và bắt lỗi văn (mục 5.5).
5. **Điểm dừng bắt buộc:** cuối Phase 0 phải **dừng lại chờ HUB duyệt** các đoạn mẫu rồi mới viết mới hàng loạt. Ngoài điểm này, cứ làm tiếp; mẫu nội dung của từng thẻ thì ghi vào `review/` để HUB xem sau.
6. **Không tự ý sửa giọng riêng của HUB:**
   - Giữ nguyên mục "Lời của HUB".
   - Những câu mang giọng riêng của HUB (từ lóng như "ace", biểu cảm như ":))))", câu đùa) thì **liệt kê ra hỏi** trước khi sửa.

---

## 2. Chẩn đoán nội dung hiện tại

Toàn bộ chữ trên web, trong đó có toàn bộ phần Thần số học (`messages.js`, `content.js` và chữ trên giao diện), đang mắc các lỗi dưới đây. Nội dung này đã qua được bộ quét từ cấm mà vẫn đọc ra giọng máy, vì lỗi nằm ở **cách nghĩ ra nội dung, cách dùng từ và cấu trúc câu**, không chỉ ở vài từ sáo rỗng.

**Hai lỗi nặng nhất:**

A. **Tự bịa.**
   - Nhiều nét tính cách, tình huống minh hoạ và lời khuyên được viết ra cho đủ chỗ trống, không dựa trên tài liệu nào.
   - Người từng tìm hiểu thần số học đọc vào sẽ thấy ngay chỗ không khớp với những gì bộ môn này vẫn nói.
   - Câu "Ở cách tính phổ biến tại Việt Nam, tổng bằng 10 được giữ lại" là nhận định chưa kiểm chứng.

B. **Dùng từ sai nghĩa, sai ngữ cảnh; giọng cứng, trang trọng không đúng chỗ.**
   - Có chỗ nói như văn bản hành chính trong khi đang nói chuyện đời thường.
   - Có chỗ ghép từ không ai dùng, hoặc dịch nguyên cụm từ tiếng Anh (ví dụ ở mục 4 trong danh sách bên dưới).

**Các lỗi khác:**

1. **Lặp khuôn mở bài và kết bài.**
   - Gần như mọi đoạn tóm tắt mở đầu bằng "Người mang số chủ đạo X thường…", "Số sứ mệnh X cho thấy…", "Số linh hồn X cho thấy…", "Số nhân cách X cho thấy người khác thường thấy…".
   - Rồi kết bằng "Bài học của số X là…", "Thử thách của bạn là…", "Có điều,…".
   - Đọc 3 thẻ liên tiếp là thấy ngay khuôn.
2. **Câu nào cũng bắt đầu bằng "Bạn".** Ví dụ: "Bạn dám bắt đầu.", "Bạn chịu trách nhiệm…", "Bạn làm việc độc lập tốt."
3. **Câu khuyên viết theo kiểu dịch.** "Tuần này, bạn chọn một việc mình hay tự làm và nhờ một người làm cùng." Tiếng Việt không ra lời khuyên bằng "bạn + động từ" như câu kể. Người Việt nói: "Thử nhờ…", "Lần tới, cứ…", "Nên…".
4. **Cụm từ dịch từ tiếng Anh hoặc kết hợp từ sai:**
   - "rộng rãi thời gian và công sức" (rộng rãi không đi với tân ngữ như vậy)
   - "chạm được tới người khác", "đặt chân xuống đất", "cho phép mình vui"
   - "có đời sống bên trong phong phú", "nỗi lo sẽ có hình dạng rõ hơn"
   - "lên lịch nghỉ ngơi giống như lên lịch họp", "mang lại năng lượng"
5. **Ví dụ minh hoạ rập khuôn và giả.** Câu nào cũng kèm một tình huống nhỏ (tin nhắn, đồng nghiệp, bàn ăn, giỏ hàng). Tình huống na ná nhau, nghe như bịa cho có, và nhiều khi còn tạo ra nét tính cách mà tài liệu không hề nói.
6. **Tên gọi tự đặt, đồng loạt một khuôn:** "Người…" cho chủ đạo, "Muốn…" cho linh hồn, "Dáng vẻ…" cho nhân cách. Không theo cách gọi có trong tài liệu.
7. **Nông về nội dung:**
   - Chưa nói 5 con số liên quan với nhau thế nào.
   - Chưa giải thích nguồn gốc ý nghĩa của từng số.
   - Năm cá nhân chia theo quý còn chung chung.
   - Câu "Ở cách tính phổ biến tại Việt Nam, tổng bằng 10 được giữ lại" là nhận định **chưa được kiểm chứng**.
8. **Thiếu một lời nhắn được trau chuốt.** Mỗi thẻ chỉ có phân tích, chưa có câu gửi gắm đọng lại.

**Kết luận:** không sửa vá từng câu. Nghiên cứu lại từ đầu và viết mới hoàn toàn. File cũ chỉ dùng để biết cấu trúc dữ liệu mà giao diện đang đọc.

---

## 3. Chuẩn tiếng Việt — áp dụng cho mọi chữ trên web

Nguyên tắc chung: viết như người Việt viết, theo lối hành văn người Việt quen đọc. Mỗi loại nội dung có một giọng phù hợp; đúng giọng quan trọng hơn cố tỏ ra gần gũi hay cố tỏ ra sang.

### 3.1 Ba giọng văn, mỗi giọng một chỗ

**1. Giọng kiến thức**
Dùng cho: giới thiệu một bộ môn, cách tính, kiến thức thiên văn, thị trường lao động, định nghĩa thuật ngữ.
- Viết theo chuẩn của sách phổ thông và báo chí tiếng Việt uy tín: rõ ràng, chính xác, trung tính.
- Văn trang trọng được phép, nếu đó là cách các nguồn tiếng Việt đáng tin vẫn viết về chủ đề đó.
- Khi tham khảo nguồn, có hai cách:
  - Giữ lối diễn đạt chuẩn mực như nguồn, nhưng bằng lời của mình (không chép nguyên văn).
  - Diễn đạt lại cho dễ hiểu và hay hơn, miễn vẫn đúng lối người Việt nói và viết.
- Thuật ngữ dùng đúng tên gọi đã phổ biến trong tài liệu tiếng Việt (số chủ đạo, số linh hồn, tuế sai, nạp âm…). Không tự đặt thuật ngữ mới.

**2. Giọng phân tích cá nhân**
Dùng cho: kết quả của từng người (tính cách, điểm mạnh, điều cần để ý, lời khuyên).
- Gần gũi, tự nhiên, như một người hiểu chuyện ngồi nói với mình.
- Không khách sáo, không hành chính, nhưng cũng không suồng sã hay cố tỏ ra trẻ trung.
- Nói đúng điều tài liệu nói, bằng lời dễ hiểu. Câu vừa phải, đủ chủ ngữ vị ngữ, mỗi câu một ý, không nói vòng.

**3. Giọng lời nhắn**
Dùng cho: trường `note`, 2–3 câu, cuối mỗi kết quả.
- Viết chu đáo, chọn chữ kỹ, câu có nhịp.
- Được dùng hình ảnh, nhưng hình ảnh phải quen thuộc với người Việt (thành ngữ, cách nói dân gian, hình ảnh đời thường), không dịch ẩn dụ tiếng Anh.
- Đọc lên như lời một người tử tế viết tay gửi riêng mình. Không khẩu hiệu, không sến, không "vũ trụ".
- Lời nhắn của mỗi kết quả phải bám vào đúng ý nghĩa của kết quả đó, không viết chung chung để con số nào cũng dùng được.

### 3.1b Dùng từ đúng nghĩa, đúng ngữ cảnh

- Mỗi từ phải đúng nghĩa và đúng sắc thái trong câu. Phân vân giữa hai từ gần nghĩa thì chọn từ người Việt dùng phổ biến hơn trong ngữ cảnh đó.
- **Cách kiểm tra cụm từ lạ:** tìm nguyên cụm (đặt trong ngoặc kép) trên các trang tiếng Việt đáng tin như báo lớn, sách, trang của cơ quan nhà nước, trường đại học.
  - Có nhiều người viết như vậy: dùng được.
  - Gần như không ai viết như vậy: đó là cụm tự chế hoặc dịch, đổi sang cách nói phổ biến.
- Thành ngữ, tục ngữ chỉ dùng khi chắc chắn đúng nguyên văn và đúng nghĩa.
- **Không trộn giọng trong cùng một đoạn:**
  - Đang trang trọng thì không chen từ lóng.
  - Đang gần gũi thì không chen cụm hành chính như "nhằm mục đích", "trên cơ sở", "tiến hành", "đối với việc".

### 3.2 Ngữ pháp và dùng từ

- **Lời khuyên** dùng cấu trúc tự nhiên: "Thử…", "Nên…", "Lần tới khi…, cứ…", "Trước khi…, hỏi mình…", hoặc câu điều kiện. Không viết "Bạn + động từ" như câu kể để ra lệnh. "Hãy…" dùng tiết chế.
- **Chủ ngữ:** không quá 2 câu liền nhau bắt đầu bằng "Bạn". Thay đổi bằng cách đưa trạng ngữ lên đầu, dùng chủ ngữ khác, hoặc lược chủ ngữ khi ngữ cảnh đã rõ.
- **Kết hợp từ phải đúng tiếng Việt.** Nghi ngờ thì đổi sang cách nói phổ thông hơn. Danh sách sửa thường gặp:

  | ✗ Không dùng | ✓ Thay bằng |
  |---|---|
  | rộng rãi thời gian | dành thời gian, chịu bỏ công |
  | chạm tới người khác | khiến người ta để tâm, nói trúng lòng người nghe |
  | cho phép bản thân | cứ, không ngại, tự nhủ được phép |
  | kết nối với ai (nghĩa làm quen) | quen, làm thân, giữ liên lạc |
  | mang lại năng lượng | làm không khí vui lên, khiến ai đó hăng hái |
  | đời sống nội tâm phong phú | hay nghĩ ngợi, có nhiều suy nghĩ riêng |
  | không gian an toàn | chỗ để nói thật mà không sợ bị chê |
  | phiên bản tốt hơn của chính mình | (bỏ) |
  | đóng vai trò quan trọng | (nói thẳng vai trò đó là gì) |
  | điều này cho thấy | (lược, hoặc "nghĩa là") |
  | việc + động từ ở đầu câu, dùng liên tục | đổi cấu trúc câu |

- **Từ Hán Việt và từ "kêu"**: chỉ dùng khi không có từ thuần Việt tương đương mà vẫn đủ nghĩa.
- **Mức độ chắc chắn:**
  - "có thể", "thường", "đôi khi" dùng đúng chỗ, không rải đều câu nào cũng có.
  - Không khẳng định tuyệt đối về số mệnh.

### 3.3 Cấu trúc và nhịp

- **Không có khuôn mở bài hay kết bài chung.** Trong cùng một nhóm nội dung (ví dụ 13 đoạn tóm tắt Số chủ đạo), không quá 2 đoạn mở đầu bằng cùng 3 chữ, không quá 2 đoạn kết bằng cùng một kiểu câu.
- **Độ dài câu xen kẽ:** có câu ngắn, có câu dài vừa. Không viết câu cụt kiểu ghi chú ("Sáng tạo. Tự do. Bứt phá.").
- **Không liệt kê bộ ba tính từ** thành thói quen.
- **Không mở đoạn bằng câu hỏi tu từ.** Không kết đoạn bằng câu triết lý chung chung.
- **Danh sách gạch đầu dòng:** mỗi ý tối đa 2 câu, không gắn nhãn in đậm kiểu "**Sáng tạo:** …" ở mọi dòng.

### 3.4 Ví dụ minh hoạ

- **Tối đa 1 ví dụ đời thường mỗi khối** (không phải mỗi câu).
- Ví dụ phải đa dạng bối cảnh: gia đình, học hành, tiền bạc, đi lại, làm ăn, bạn bè, sức khoẻ; không chỉ văn phòng và tin nhắn.
- Ví dụ phải thật, không ngô nghê.
- Không dựng chuyện có tên người hay số liệu giả.
- **Ví dụ chỉ để minh hoạ một nét đã có trong tài liệu.** Không dùng ví dụ để tạo ra nét tính cách mới.
- Đoạn nào nói đủ rõ mà không cần ví dụ thì bỏ ví dụ.

### 3.5 Từ cấm và từ hạn chế

**Cấm trong nội dung:**
- hành trình, khám phá bản thân, bí ẩn, vũ trụ gửi gắm
- năng lượng (theo nghĩa tâm linh), rung động, tần số, thăng hoa, bứt phá
- lan toả, đánh thức, khai mở, nội tại, bản thể
- phiên bản tốt nhất, tiềm năng vô hạn, toả sáng, rực rỡ, kỳ diệu, tuyệt vời
- "trong thế giới hiện đại ngày nay", "hãy cùng", "đừng bỏ lỡ"
- "không chỉ… mà còn…" (tối đa 1 lần mỗi thẻ)
- "Tóm lại", "Nói cách khác", "Hãy nhớ rằng"

**Hạn chế** (mỗi thẻ tối đa 2 lần): sâu sắc, tinh tế, trọn vẹn, chữa lành, giá trị, trải nghiệm, kết nối, chạm, thấu hiểu.

### 3.6 Quy ước trình bày

- **Tiêu đề viết hoa chữ cái đầu**, trừ tên riêng: "Bản đồ tính cách", không phải "Bản Đồ Tính Cách". Riêng tên thương hiệu web giữ nguyên.
- **Dấu câu:**
  - Ngoặc kép “ ” dùng nhất quán.
  - Không dùng dấu gạch dài "—" trong câu văn (dùng dấu phẩy hoặc tách câu). Riêng chữ ký "— HUB" giữ nguyên.
  - Dấu "–" chỉ cho khoảng: 2020–2025.
- **Số và ngày:** 1.000.000 đồng; 3,5%; ngày 22/6/2002; tháng 10/2026.
- **Thuật ngữ nước ngoài:** lần đầu ghi tiếng Việt kèm gốc, ví dụ "tính tận tâm (Conscientiousness)". Sau đó dùng tiếng Việt.
- **Hạn chế:** không emoji trong nội dung, chấm than tối đa 1 lần mỗi thẻ, in đậm chỉ cho điều thật sự cần nhấn.
- **Tên gọi Việt Nam:**
  - Con giáp: Tý (Chuột), Sửu (Trâu), Dần (Hổ), **Mão (Mèo)**, Thìn (Rồng), Tỵ (Rắn), Ngọ (Ngựa), Mùi (Dê), Thân (Khỉ), Dậu (Gà), Tuất (Chó), Hợi (Lợn).
  - Cung hoàng đạo: Bạch Dương, Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Bọ Cạp (Thiên Yết), Nhân Mã, Ma Kết, Bảo Bình, Song Ngư.

### 3.7 Mẫu trước và sau (lấy từ chính web hiện tại)

Các mẫu "Sau" dưới đây chỉ để minh hoạ **giọng văn**. Khi viết thật, nội dung phải lấy từ ghi chú nghiên cứu.

**Giới thiệu bộ môn** (giọng kiến thức)

✗ Không đạt:
> Thần số học là chiếc chìa khoá giúp bạn giải mã những bí ẩn của vũ trụ ẩn sau các con số!

✓ Đạt:
> Thần số học là hệ thống quan niệm cho rằng các con số rút ra từ ngày sinh và họ tên phản ánh tính cách cũng như xu hướng của mỗi người. Hệ thống này thường được gắn với tên nhà toán học Hy Lạp Pythagoras, dù mối liên hệ ấy phần lớn đến từ truyền thuyết. Thần số học không phải là khoa học, nên xem nó như một góc nhìn để tự soi lại mình.

**Tóm tắt Số chủ đạo 1** (giọng phân tích cá nhân)

✗ Trước:
> Người mang số chủ đạo 1 thường thấy dễ chịu nhất khi được tự quyết việc của mình. Từ nhỏ bạn có thể đã thích làm theo cách riêng… Bài học lớn của số 1 là đứng vững trên đôi chân của mình mà không đẩy người khác ra xa.

✓ Sau:
> Theo thần số học, số 1 gắn với sự độc lập và tinh thần tiên phong. Người có số chủ đạo 1 thường muốn tự quyết chuyện của mình, thích đi trước hơn là đi theo, và không ngại đứng mũi chịu sào khi có việc khó. Mặt trái là cái tôi khá lớn: dễ nóng vội, khó nghe góp ý và hay ôm việc một mình.

Mọi nét nêu ra trong đoạn trên đều phải có trong tài liệu thần số học. Không thêm nét tự nghĩ.

**Lời khuyên**

✗ Trước:
> Tuần này, bạn chọn một việc mình hay tự làm và nhờ một người làm cùng. Để ý xem kết quả có tệ như bạn lo không.

✓ Sau:
> Thử nhờ người khác làm cùng một việc mà trước giờ bạn vẫn tự làm. Xong việc, xem lại kết quả có tệ như mình lo không.

**Điểm mạnh**

✗ Trước:
> Bạn rộng rãi thời gian và công sức cho những việc có ích cho người khác.

✓ Sau:
> Gặp việc có ích cho người khác, bạn sẵn lòng bỏ công bỏ sức, kể cả khi chẳng ai biết đến.

**Lời nhắn** (trường mới `note`)

✗ Không đạt:
> Hãy buông bỏ để đón nhận những điều tuyệt vời mà vũ trụ đang chuẩn bị cho bạn ✨

✓ Năm cá nhân 9:
> Có những người, những việc chỉ đi cùng mình một đoạn đường. Đến lúc thì nhẹ nhàng khép lại, để lòng còn chỗ cho điều mới.

✓ Số chủ đạo 7:
> Đâu phải chuyện gì cũng phải hiểu tường tận rồi mới làm. Có những điều phải đi rồi mới biết, vấp rồi mới hiểu.

**Giọng kiến thức cho thẻ nghề nghiệp** (chỉ minh hoạ văn phong; số liệu thật phải có nguồn)

✗ Không đạt:
> Data Analyst đang là ngành HOT nhất hiện nay với mức lương vô cùng hấp dẫn và cơ hội phát triển không giới hạn!

✓ Đạt:
> Phân tích dữ liệu vẫn có nhiều tin tuyển dụng, nhưng phần việc dễ như viết truy vấn đơn giản hay vẽ biểu đồ đã được công cụ AI làm thay khá nhiều. Người mới vào nghề bây giờ cần hiểu sâu thêm một lĩnh vực, chẳng hạn bán lẻ hay tài chính, để biết nên đặt câu hỏi gì cho dữ liệu.

### 3.8 Bài kiểm tra cho mỗi đoạn trước khi chốt

1. Đọc thành tiếng có giống người Việt nói hoặc viết không? Đúng giọng của loại nội dung này chưa (mục 3.1)?
2. Có câu nào dịch ngược sang tiếng Anh thì trơn tru hơn tiếng Việt không? Nếu có, đó là câu dịch, viết lại.
3. Có từ nào dùng sai nghĩa, sai sắc thái, hoặc cụm nào tra không ra người Việt dùng không (mục 3.1b)?
4. Mỗi nét tính cách, mỗi nhận định có nằm trong ghi chú nghiên cứu không? Nếu không, đó là bịa, bỏ.
5. Bỏ đoạn này đi người đọc có mất thông tin gì không? Nếu không, cắt.
6. Có thông tin nào chưa có nguồn mà lại khẳng định chắc chắn không?
7. Đoạn này có giống đoạn bên cạnh về khuôn câu không?

### 3.9 Quy tắc bổ sung sau khi HUB duyệt mẫu (26/10/2026)

HUB duyệt toàn bộ theo đề xuất trong `review/hieu-chinh.md`. Các quy tắc dưới đây áp dụng từ Phase 1.

**Giọng văn**
- 11 đoạn mẫu trong `review/hieu-chinh.md` là chuẩn giọng cho từng loại nội dung.
- Không mở đoạn tóm tắt theo đúng khung ví dụ ở mục 3.7 (“Theo thần số học, số X gắn với… / Người có số… thường… / Mặt trái là…”). Trước khi viết mỗi nhóm, lập bảng phân bổ kiểu câu mở và kiểu câu kết.
- Liệt kê từ 3 vế trở lên: tối đa 1 lần mỗi đoạn. “Thường”, “có thể”, “đôi khi”: tối đa 1 lần mỗi đoạn.
- “Theo thần số học” nói ở phần giới thiệu của từng chỉ số và ở chỗ dự báo; không chen giữa chủ ngữ và vị ngữ.
- Ý chỉ có 1 nguồn: viết ở mức chắc chắn thấp hơn, hoặc nêu tên tác giả (“Sách của David A. Phillips cho rằng…”).
- Lời nhắn không dùng lại hình ảnh của trường `origin` cùng số. Hai lời nhắn liền nhau trong cùng một trang kết quả không dùng chung khuôn câu.
- Ca dao, thành ngữ chỉ dùng khi đúng nguyên văn và đúng nghĩa.

**Thần số học**
- Tên gọi `title`: chùm 2–3 từ khoá có nguồn, ví dụ “Trật tự và thực tế”. Không đặt tên kiểu “Người…”, “Muốn…”, “Dáng vẻ…”.
- Mô tả: dùng nét có từ 2 nguồn trở lên. Chỗ sách Phillips nói khác (số 3, số 8, số 10…) thì thêm một câu “Theo sách của David A. Phillips, …”.
- Số chủ đạo, cách tính mặc định: theo Phillips, cộng mọi chữ số, dừng khi kết quả từ 11 trở xuống, giữ 22/4; tổng 33 rút về 6. Trang tra cứu vẫn có số 33, kèm ghi chú “Một số trang giữ 33/6”.
- Chế độ `western`: giữ cách tính, sửa mô tả cho đúng (không gọi là cách của Decoz).
- Chữ Y: mặc định theo vị trí (Y đứng cạnh nguyên âm khác là phụ âm, như Huy, Duy, Nguyễn; đứng một mình hoặc sau phụ âm là nguyên âm, như Vy, My). Cho chọn “Y luôn là nguyên âm”.
- Năm cá nhân: bỏ `byQuarter`, thay bằng tháng cá nhân (năm cá nhân + tháng dương lịch, rút về 1–9).
- “Đọc 5 số cùng nhau”: chỉ dùng quy tắc có nguồn (số bậc thầy, “cầu nối” của Decoz, số trùng nhau giữa các chỉ số ở mức gợi ý). Quy tắc thiếu nguồn thì ghi rõ là nhận xét của trang.

**Giọng riêng của HUB**
- H1 (lời dẫn “Các thẻ chủ đề” có “ace”): giữ đến Phase 9, khi các thẻ mở thì viết lại theo nội dung mới.
- H2 (tiêu đề “Khám phá bản thân qua những thông điệp từ vũ trụ :))))”): giữ nguyên như câu đùa có chủ ý của HUB, chỉ bỏ dấu chấm thừa. Đây là ngoại lệ duy nhất với danh sách từ cấm; `check-copy` bỏ qua dòng này.
- H3 (lời mở đầu ở hero): thay bằng mẫu số 11 ở Phase 9. Trong lúc chờ, chỉ sửa “giá trị với bạn” thành “có giá trị với bạn”.
- H4, H5: giữ nguyên.
- H6 (easter egg): bỏ emoji, giữ câu.
- H7 (trang 404): giữ phép cộng 4 + 0 + 4 = 8, bỏ phần “con số của người cầm lái”.

---

## 4. Chuẩn nội dung và nghiên cứu

### 4.1 Quy trình cho mỗi thẻ

1. **Nghiên cứu** (subagent): tìm, đọc, đối chiếu nguồn. Ghi chú vào `research/<the>.md`. Mỗi ý quan trọng ghi:
   - Nguồn: tên, đơn vị, URL, ngày xuất bản, ngày truy cập.
   - Mức tin cậy.
2. **Dàn ý:** xây dàn ý dựa trên ghi chú, xác định người đọc cần làm được gì sau khi đọc.
3. **Mẫu:** viết 2–3 mục mẫu, ghi vào `review/<the>-mau.md`.
4. **Viết đầy đủ**, chạy kiểm tra văn phong (mục 5.4) và biên tập độc lập (mục 5.5).
5. **Kiểm chứng:** mọi câu chứa số liệu, năm, tên tổ chức hoặc kết luận nghiên cứu phải dẫn được về một nguồn trong `research/`. Không dẫn được thì bỏ.

### 4.2 Thứ bậc nguồn

Ưu tiên theo thứ tự:
1. Nguồn gốc: tổ chức quốc tế, cơ quan nhà nước, bài báo khoa học, trang chính thức của bộ công cụ.
2. Sách và tài liệu chuyên môn uy tín.
3. Báo chí lớn có dẫn nguồn.

Diễn đàn, blog, trang SEO, video mạng xã hội chỉ dùng để biết người Việt đang quan tâm gì, **không dùng làm căn cứ**.

### 4.3 Cập nhật

- Với nội dung thay đổi theo thời gian (thị trường lao động, kỹ năng, AI), **tìm báo cáo mới nhất tính tới thời điểm làm** và ghi rõ năm.
- Mỗi thẻ hiển thị dòng "Cập nhật lần cuối: tháng MM/YYYY" và một ngăn "Nguồn tham khảo" (thu gọn, mở được).

### 4.4 Không sao chép, không bịa

- Diễn đạt lại hoàn toàn bằng lời của mình. Không chép câu chữ từ web khác, kể cả các trang thần số học, chiêm tinh tiếng Việt.
- Không bịa số liệu, trích dẫn, nghiên cứu, tên chuyên gia.
- **Ý nghĩa của từng con số, từng cung, từng con giáp, từng nhóm tính cách** phải lấy từ tài liệu và đối chiếu ít nhất 2 nguồn độc lập.
  - Nét nào chỉ một nguồn nói thì ghi chú lại trong `research/`, cân nhắc trước khi dùng.
  - Không tự thêm nét tính cách, tình huống hay lời khuyên mà tài liệu không nói, hoặc nói ngược lại.
- Với các bộ môn mang tính quan niệm, viết theo dạng "theo thần số học…", "theo quan niệm dân gian…" ở những chỗ cần nói rõ đây là quan niệm, không phải sự thật đã được chứng minh.
- **Lời khuyên** phải xuất phát từ nét tính cách đã nêu và hợp lẽ thường. Không đưa lời khuyên kiểu mẹo vặt tự nghĩ ra cho đủ số lượng.
- Không chắc thì không viết. Thà ngắn mà đúng còn hơn dài mà bịa.

### 4.5 Phải hữu ích

Mỗi phần kết quả phải trả lời được câu "đọc xong, mình làm gì khác đi?". Ưu tiên:
- Gợi ý hành động cụ thể, làm được trong tuần.
- Cách tự kiểm chứng ("để ý xem…").
- Những hiểu lầm phổ biến được giải thích lại.

### 4.6 Trung thực về độ tin cậy

- **Thần số học, chiêm tinh, con giáp:** là góc nhìn văn hoá để chiêm nghiệm, không có cơ sở khoa học. Nói một lần, rõ ràng, không giảng giải lặp lại.
- **Big Five và Holland:** có cơ sở nghiên cứu, nhưng bản dịch trên web chưa được chuẩn hoá cho người Việt. Kết quả để tham khảo, không phải chẩn đoán.
- **Không chẩn đoán tâm lý hay sức khoẻ.** Khi chạm tới căng thẳng kéo dài, gợi ý tìm người có chuyên môn.

---

## 5. Phase 0–1: Viết mới nội dung hàng loạt

### 5.1 Kiểm kê

Quét toàn bộ chữ người dùng nhìn thấy, ghi vào `review/kiem-ke.md` (file, vị trí, loại, lỗi phát hiện):
- HTML, các file nội dung JS
- `aria-label`, `alt`, `title`, meta, og
- Nút, thông báo lỗi, toast, trang 404

### 5.2 Hiệu chỉnh — dừng chờ duyệt

Trước tiên, làm phần nghiên cứu Thần số học ở mục 5.3 cho đủ để viết mẫu. Các đoạn mẫu phải viết từ ghi chú nghiên cứu, không viết từ trí nhớ.

Viết mới **11 đoạn đại diện** vào `review/hieu-chinh.md`, mỗi đoạn có bản cũ, bản mới, và nguồn của các ý trong bản mới:
- 1 đoạn giới thiệu thần số học (giọng kiến thức)
- 2 tóm tắt Số chủ đạo
- 1 Năm cá nhân
- 1 Linh hồn
- 1 Nhân cách
- 2 lời khuyên
- 2 lời nhắn `note`
- 1 đoạn giới thiệu trang chủ

Kèm danh sách các câu mang giọng riêng của HUB cần hỏi (mục 1.6). **Dừng lại, chờ HUB duyệt và góp ý.** Ghi các góp ý thành quy tắc bổ sung vào cuối mục 3 của file brief này trước khi làm tiếp.

### 5.3 Viết mới toàn bộ Thần số học

**Bỏ toàn bộ chữ cũ.** Không sửa vá câu nào trong `messages.js`, `content.js` hay chữ trên giao diện thần số học. Chỉ giữ tên các trường dữ liệu để giao diện chạy được.

**Nghiên cứu trước khi viết:**
- Với mỗi chỉ số (Số chủ đạo, Năm cá nhân, Số sứ mệnh, Số linh hồn, Số nhân cách) và mỗi con số, tổng hợp từ nhiều nguồn tiếng Việt và tiếng Anh vào `research/than-so-hoc.md`:
  - Ý nghĩa chính và cách gọi tên phổ biến
  - Điểm mạnh, điểm yếu
  - Lời khuyên mà tài liệu đưa ra
  - Chỗ các nguồn nói khác nhau
- Ghi rõ cách các nguồn tiếng Việt uy tín diễn đạt các khái niệm, để dùng đúng thuật ngữ và lối nói quen thuộc với người đọc Việt.
- **Chỉ viết những gì có trong ghi chú này.**

**Mở rộng dữ liệu** (giữ tương thích với giao diện hiện tại):
- Thêm `note` (lời nhắn, giọng lời nhắn ở mục 3.1) cho mọi mục.
- Thêm `origin`: 1–2 câu giải thích vì sao con số này mang ý nghĩa đó theo truyền thống (ví dụ: số 4 gắn với hình vuông, bốn góc, sự vững chãi). Chỉ viết những gì nguồn nghiên cứu xác nhận.
- Tên gọi `title` dùng cách gọi phổ biến trong tài liệu, ngắn và đúng nghĩa. Không tự đặt tên hoa mỹ, không đặt tên theo một khuôn chung.
- Năm cá nhân: `byQuarter` viết cụ thể hơn; thêm `months` (tháng cá nhân) nếu nguồn đủ chắc chắn.

**Phần mới "Đọc 5 số cùng nhau"** trên trang kết quả, dựa trên quy tắc có trong nguồn:
- Số lặp lại nhiều lần.
- Số chủ đạo so với số linh hồn: con đường so với mong muốn.
- Số linh hồn so với số nhân cách: bên trong so với bên ngoài.
- Có số bậc thầy (11, 22, 33).
- Năm cá nhân trùng hoặc lệch với số chủ đạo.

Mỗi quy tắc có câu giải thích riêng. Không ghép câu máy móc.

**Kiểm chứng cách tính:**
- Nghiên cứu lại quy ước số chủ đạo phổ biến ở Việt Nam (có giữ 10 không, có giữ 33 không, rút gọn theo tổng hay theo từng phần).
- Ghi kết quả vào `research/than-so-hoc.md`.
- Sửa câu giải thích trên web cho đúng với điều đã kiểm chứng. Nếu các nguồn mâu thuẫn, trình bày đúng là có nhiều cách.

**Viết mới theo lô** (mỗi lô một chỉ số). Sau mỗi lô chạy 5.4 và 5.5.

### 5.4 Nâng cấp `tools/check-copy.mjs`

Bộ kiểm tra phải bắt được:
- Từ cấm và vượt hạn mức từ hạn chế (mục 3.5).
- Cụm dịch ở bảng mục 3.2.
- **Lặp khuôn:** đếm 3 chữ đầu và kiểu câu cuối của các đoạn cùng nhóm; báo khi vượt ngưỡng 3.3.
- Hơn 2 câu liền nhau bắt đầu bằng "Bạn".
- Câu khuyên (trong `advice`, `doMore`, `doLess`) bắt đầu bằng "Bạn ".
- Dấu "—" trong câu văn, chấm than vượt mức, emoji trong nội dung.
- Tiêu đề viết hoa mọi chữ.
- Mật độ "có thể" cao bất thường.

Xuất báo cáo dạng bảng. **Phải sạch lỗi** trước khi coi một lô là xong.

### 5.5 Biên tập độc lập

Gọi một subagent chưa thấy quá trình viết, đưa cho nó mục 3 và nội dung cần chấm. Nó chấm từng mục theo 5 tiêu chí, thang 1–5:
- Tự nhiên như người Việt viết, đúng giọng của loại nội dung (mục 3.1), dùng từ đúng nghĩa
- Không bịa: mọi ý đều có trong ghi chú nghiên cứu (đưa kèm `research/` cho subagent đối chiếu)
- Chính xác
- Hữu ích
- Trau chuốt (riêng `note`)

Mục nào dưới 4 phải viết lại và chấm lại. Lưu kết quả vào `review/bien-tap-<lo>.md`.

---

## 6. Hệ thiết kế cho 6 thẻ mới

**Giữ từ phần Thần số học:**
- Nền ngà và mực, 2 theme, typography.
- Overlay phóng ra từ thẻ (GSAP Flip), vuốt xuống để đóng, nút Back hoạt động.
- Rút gọn chuyển động khi bật reduced-motion.

**Mỗi thẻ phải có đủ 4 dấu ấn riêng.** Không thẻ nào chỉ là chữ cộng một form:
1. **Hình tượng chủ đạo** ở phần đầu overlay (minh hoạ SVG hoặc canvas có chuyển động).
2. **Cách nhập độc đáo**, hợp với chủ đề.
3. **Hình ảnh hoá kết quả** riêng.
4. **Thẻ kết quả để lưu ảnh** (PNG tạo ngay trên trình duyệt, có dấu HUB, không chứa tên hay ngày sinh).

**Chữ ký thiết kế từng thẻ:**

| Thẻ | Hình tượng | Cách nhập | Kết quả | Chất liệu, màu nhấn |
|---|---|---|---|---|
| Cung hoàng đạo & Con giáp | "Hai bầu trời": bàn xoay sao phương Tây và ổ khoá Can Chi phương Đông | Nhập ngày sinh, hai vòng quay rồi khớp lại | Thẻ đôi Đông – Tây và "bầu trời thật hôm bạn sinh" | Xanh đêm, vàng kim; đỏ son, đen sơn mài |
| Bản đồ tính cách | "Chòm sao tính cách" | Mỗi màn một câu, 5 chấm sáng để chọn, phím 1–5 | Chòm sao 5 ngôi sao có vị trí theo điểm, dải điểm, các khía cạnh con | Xanh khói, bạc |
| Sở thích nghề nghiệp | "Tổ ong RIASEC" | Vuốt thẻ hoạt động: Thích / Phân vân / Không thích | Lục giác đổ đầy như mật theo điểm, mã 3 chữ | Vàng mật, than |
| Nghề nghiệp hôm nay & ngày mai | "Bản tin dự báo nghề nghiệp" | Lọc, tìm, so sánh 2 nghề | Bản đồ phân tán các nghề và hồ sơ nghề kiểu bản tin thời tiết | Xanh ngọc, cam tín hiệu, lưới kỹ thuật |
| Kỹ năng nên đầu tư | "Cây kỹ năng" kiểu trò chơi nhập vai | Tự đánh giá bằng thanh 5 nấc | Cây sáng dần các nhánh, bảng nhiệm vụ 30/90 ngày | Xanh rêu, đồng |
| Giá trị sống | "Bàn xếp bài giá trị" | Kéo thả trên máy tính, vuốt trên điện thoại | La bàn giá trị trên vòng Schwartz, công cụ soi một quyết định | Đỏ đất, kem giấy |

**Thành phần dùng chung** (viết một lần, các thẻ cùng dùng):
- Bộ máy câu hỏi (quiz engine): tiến độ, quay lại, phím tắt, lưu tạm trong bộ nhớ.
- Bộ xuất thẻ kết quả ra ảnh.
- Ngăn "Nguồn tham khảo" và dòng "Cập nhật lần cuối".
- Chú giải thuật ngữ: chạm vào thuật ngữ để xem giải thích ngắn.
- Chế độ đọc "Đọc nhanh / Đọc kỹ".
- Kho kết quả trong phiên (mục 13).

**Hiệu năng:** nội dung mỗi thẻ tải theo nhu cầu bằng `import()` động, chỉ khi mở thẻ.

**Trên điện thoại:** mọi hình tượng và kết quả phải đẹp ở 390px. Không cuộn ngang, chữ không nhỏ hơn 15px.

---

## 7. Thẻ: Cung hoàng đạo & Con giáp

**Đầu vào:** ngày sinh, dùng lại ô nhập 3 phần của thần số học.

**Tính toán** (hàm thuần, có test):
- **Cung hoàng đạo** theo bảng ngày phổ biến ở Việt Nam. Ghi rõ ngày giao cung có thể lệch 1 ngày tuỳ năm. Sinh trong khoảng ±1 ngày ở ranh giới thì hiện ghi chú "bạn sinh ở ranh giới giữa hai cung" kèm mô tả cả hai.
- **Đổi sang âm lịch Việt Nam** bằng thuật toán âm lịch dùng múi giờ UTC+7 (thuật toán của Hồ Ngọc Đức được dùng rộng rãi; nghiên cứu và trích nguồn). Con giáp tính theo **năm âm lịch** (sinh trước Tết thì thuộc năm trước).
- **Can Chi** của năm sinh; **mệnh ngũ hành nạp âm** theo bảng 60 hoa giáp.
- **"Bầu trời thật":** chòm sao mà Mặt Trời thực sự nằm trong vào ngày sinh, theo ranh giới chòm sao của Hiệp hội Thiên văn Quốc tế (IAU). Giải thích ngắn hiện tượng tuế sai và vì sao cung chiêm tinh lệch với chòm sao thật, kể cả chòm Xà Phu.

**Test bắt buộc:**
- 22/06/2002 → Cự Giải; năm âm Nhâm Ngọ; con Ngựa; Dương Liễu Mộc.
- 10/02/2002 (trước Tết Nhâm Ngọ ngày 12/02/2002) → năm âm Tân Tỵ, con Rắn.
- Một ngày năm 1999 sau Tết → Kỷ Mão, con **Mèo**, Thành Đầu Thổ.
- Tự thêm test đối chiếu ngày âm với lịch vạn niên chính thống cho ít nhất 10 ngày ngẫu nhiên từ 1950 đến 2025.

**Nội dung:**
- **12 cung**, mỗi cung gồm:
  - Nguyên tố (Lửa, Đất, Khí, Nước), tính chất (Khởi xướng, Kiên định, Linh hoạt), hành tinh chủ quản, biểu tượng
  - Nét tính cách theo truyền thống chiêm tinh, điểm mạnh, điều cần để ý
  - Cách làm việc và học tập, chuyện tình cảm (nhẹ nhàng, không phán)
  - Lời nhắn `note`
- **12 con giáp** (gọi theo tên Việt Nam): nét tính cách theo quan niệm dân gian; tam hợp, tứ hành xung trình bày như kiến thức văn hoá, không phán hợp khắc tuyệt đối.
- **Ngũ hành:** sơ đồ tương sinh tương khắc tương tác được; giải thích nạp âm là gì và tên mệnh của người dùng nghĩa là gì.
- **Một mục ngắn "Chiêm tinh và thiên văn khác nhau thế nào"**: viết dễ hiểu, có nguồn.

---

## 8. Thẻ: Bản đồ tính cách (Big Five)

**Bộ câu hỏi:** dùng các bộ thuộc phạm vi công cộng trong kho **IPIP** (ipip.ori.org). Hai chế độ:
- **Nhanh:** 50 câu, IPIP Big-Five Factor Markers.
- **Sâu:** 120 câu, IPIP-NEO-120, có 30 khía cạnh con.

Kiểm tra điều khoản sử dụng và ghi nguồn đầy đủ.

**Dịch:** dịch cẩn thận sang tiếng Việt tự nhiên, giữ đúng nghĩa và chiều câu (câu thuận, câu nghịch). Mỗi câu có nút nhỏ "Xem câu gốc tiếng Anh".

**Chấm điểm:**
- Đúng khoá chấm gốc (đảo điểm câu nghịch).
- Hiển thị điểm trung bình 1–5 và 3 mức: thấp, trung bình, cao.
- **Nói rõ:** đây là vị trí trên thang điểm, không phải so với người Việt khác, vì chưa có chuẩn dân số Việt Nam.

**Nội dung**, cho mỗi chiều × mỗi mức:
- Biểu hiện thường ngày
- Điểm mạnh, điểm dễ vấp
- Gợi ý khi học, khi làm việc, khi có mâu thuẫn, khi căng thẳng
- Lời nhắn `note`

Chế độ sâu có thêm mô tả 30 khía cạnh con.

**Mục "Hiểu lầm thường gặp":**
- Hướng nội không có nghĩa là nhút nhát.
- Điểm thấp không phải điểm xấu.
- Tính cách thay đổi dần theo tuổi.

Viết dựa trên nghiên cứu, có nguồn.

---

## 9. Thẻ: Sở thích nghề nghiệp (Holland – RIASEC)

**Bộ câu hỏi:**
- Ưu tiên **O*NET Interest Profiler** bản ngắn (onetcenter.org). Kiểm tra điều khoản sử dụng và ghi nguồn.
- Nếu điều khoản không cho phép dùng trên web này: dùng bộ RIASEC thuộc phạm vi công cộng (tìm trong IPIP), hoặc tự soạn danh sách hoạt động theo định nghĩa 6 nhóm và ghi rõ là bộ tự soạn, chưa chuẩn hoá.
- Hoạt động phải **Việt hoá** cho gần đời sống (ví dụ "sửa xe máy", "bán hàng online", "dạy kèm"), không giữ nguyên những việc xa lạ với người Việt.

**Kết quả:**
- Điểm 6 nhóm và mã Holland 3 chữ.
- Lục giác đổ đầy theo điểm.
- Giải thích ngắn về **tính nhất quán**: các nhóm cạnh nhau trên lục giác dễ đi cùng nhau.

**Nội dung:**
- Mô tả 6 nhóm: thích làm gì, môi trường hợp, môi trường dễ ngột ngạt.
- Ý nghĩa của các tổ hợp phổ biến.
- Mỗi nhóm kèm nghề ví dụ gần với thị trường Việt Nam.
- Nút "Xem các nghề hợp với mã của bạn" dẫn sang thẻ Nghề nghiệp, đã lọc sẵn.

---

## 10. Thẻ: Nghề nghiệp hôm nay & ngày mai

Đây là thẻ cần nghiên cứu nhiều nhất và dễ lỗi thời nhất.

### Nghiên cứu bắt buộc
Tìm **bản mới nhất** của các nguồn sau và ghi năm:
- Báo cáo Future of Jobs của Diễn đàn Kinh tế Thế giới (WEF)
- Các báo cáo của Tổ chức Lao động Quốc tế (ILO) về mức độ nghề nghiệp chịu tác động của AI tạo sinh
- Báo cáo lao động – việc làm của Cục Thống kê Việt Nam (trước đây là Tổng cục Thống kê)
- Mô tả nghề trên O*NET
- Báo cáo thị trường tuyển dụng Việt Nam của các đơn vị uy tín

### Phần 1 — "Bức tranh chung"
Ngắn gọn, dữ kiện rõ ràng:
- Nhóm nghề đang tăng, đang giảm.
- Kỹ năng được nhà tuyển dụng nhắc nhiều.
- AI đang thay đổi công việc ra sao: việc nào bị làm thay, việc nào tăng giá trị.

Mỗi ý một nguồn.

### Phần 2 — "Bản đồ nghề"
- 40–60 nghề hoặc nhóm nghề phổ biến với người trẻ Việt Nam.
- Bản đồ phân tán tương tác: trục ngang là **triển vọng nhu cầu**, trục dọc là **mức độ chịu tác động của AI và tự động hoá**.
- Mỗi chấm là một nghề; lọc được theo lĩnh vực, mã Holland, mức đầu tư học.
- Chỉ đặt vị trí khi có cơ sở từ nguồn. Nếu là nhận định tổng hợp, ghi rõ "nhận định của trang, dựa trên…".

### Phần 3 — "Hồ sơ nghề"
Mỗi nghề trình bày như một bản tin dự báo thời tiết, gồm:
- Một ngày làm việc thật trông thế nào
- Cần gì để vào nghề ở Việt Nam: bằng cấp, chứng chỉ, sản phẩm mẫu (portfolio)
- **Thu nhập tham khảo:** chỉ đưa khi có nguồn công khai đáng tin, ghi rõ năm, khu vực, nguồn, dạng khoảng. Không có thì ghi "Chưa có số liệu đủ tin cậy".
- Xu hướng và mức chịu tác động của AI: cụ thể phần việc nào
- **Mặt trái của nghề:** áp lực, giờ giấc, cạnh tranh, mức bão hoà, rủi ro khi AI làm thay
- Ai dễ hợp, ai dễ vất vả: nối với Holland và Big Five
- **Cách thử nghề trong 30 ngày** với chi phí thấp nhất
- Nguồn và ngày cập nhật

### Phần 4 — "So sánh 2 nghề"
Đặt 2 hồ sơ cạnh nhau.

**Không hứa hẹn lương, không xếp hạng "nghề hot".** Mọi nhận định về tương lai dùng giọng thận trọng, có căn cứ.

---

## 11. Thẻ: Kỹ năng nên đầu tư

**Nghiên cứu:** các kỹ năng cốt lõi và kỹ năng tăng nhanh nhất theo báo cáo mới nhất (WEF, O*NET và các nguồn uy tín khác).

**Danh sách** (chốt lại sau khi nghiên cứu): khoảng 16 kỹ năng, chia nhánh:
- **Nền tảng:** đọc hiểu và tóm tắt, viết rõ ràng, tư duy phân tích, giải quyết vấn đề
- **Số:** dùng AI trong công việc, bảng tính và dữ liệu, kỹ năng số cơ bản
- **Con người:** giao tiếp và thuyết trình, thuyết phục và đàm phán, làm việc nhóm
- **Tự quản lý:** học cách học, quản lý thời gian và sự tập trung, tài chính cá nhân, sức bền tinh thần
- **Ngoại ngữ**

**Tương tác:**
1. Người dùng tự đánh giá mức hiện tại và mức quan tâm cho từng kỹ năng.
2. Chọn mục tiêu (lấy từ thẻ Nghề nghiệp hoặc tự chọn).

**Kết quả:**
- "3 kỹ năng nên đầu tư trước", tính theo: mức cần cho mục tiêu, khoảng cách với hiện tại, công sức để học.
- Giải thích lý do cho từng kỹ năng.

**Mỗi kỹ năng có:**
- Vì sao quan trọng (có nguồn)
- Biểu hiện ở 5 mức
- Lộ trình 30 ngày và 90 ngày dạng nhiệm vụ cụ thể
- Cách chứng minh mình có kỹ năng đó
- Sai lầm hay gặp khi tự học
- **Tài nguyên miễn phí** dùng được ở Việt Nam: kiểm tra từng link còn sống, ghi ngôn ngữ của tài nguyên

---

## 12. Thẻ: Giá trị sống

**Cơ sở:**
- Lý thuyết các giá trị cơ bản của Shalom Schwartz (10 giá trị xếp trên một vòng tròn, giá trị đối diện thường xung đột).
- Phương pháp xếp thẻ giá trị: tham khảo Personal Values Card Sort của Miller và cộng sự. Kiểm tra trạng thái bản quyền trước khi dùng.

Soạn danh sách thẻ bằng tiếng Việt tự nhiên, khoảng 30–40 thẻ, mỗi thẻ gắn với một giá trị trong vòng Schwartz.

**Tương tác:**
1. Xếp tất cả thẻ vào 3 chồng: Rất quan trọng / Quan trọng / Ít quan trọng.
2. Chọn 10 rồi chọn 5.
3. Xếp hạng 5 giá trị cuối.

Thẻ bay vào chồng có quán tính, cảm giác như xếp bài thật.

**Kết quả:**
- "La bàn giá trị": 5 giá trị của bạn đặt trên vòng Schwartz.
- Chỉ ra những cặp có thể kéo nhau (ví dụ an toàn và phiêu lưu).
- Giá trị thể hiện thế nào trong chọn việc, tiêu tiền, chọn bạn đời.
- Câu hỏi gợi suy ngẫm.
- Lời nhắn `note`.

**Công cụ "Soi một quyết định":**
- Nhập 2 phương án (chữ chỉ nằm trên máy, không lưu).
- Chấm mỗi phương án theo 5 giá trị.
- Xem biểu đồ so sánh và vài câu hỏi giúp nghĩ tiếp.

---

## 13. Hồ sơ của bạn, trang chủ, quyền riêng tư

### Trang "Hồ sơ của bạn"
- Gom kết quả các thẻ đã làm trong phiên thành một trang tóm tắt đẹp.
- Có phần **gợi ý liên kết** khi có dữ liệu (ví dụ mã Holland và 3 kỹ năng nên đầu tư).
- Nút xuất ảnh hoặc PDF.

### Lưu kết quả (tuỳ chọn)
- Có công tắc **"Lưu kết quả trên máy này"**, mặc định **tắt**.
- Chỉ lưu điểm số và kết quả, không lưu tên hay ngày sinh.
- Có nút "Xoá toàn bộ" rõ ràng.

### Cập nhật trang chủ
- Đổi trạng thái 6 thẻ thành hoạt động.
- Mỗi thẻ có hình tượng thu nhỏ chuyển động khi hover.
- Viết mới toàn bộ lời giới thiệu theo mục 3.
- Cập nhật mục "Dữ liệu của bạn" cho đúng với tính năng lưu tuỳ chọn.

**Mọi lời hứa về quyền riêng tư phải đúng với code.** Kiểm tra tab Network: không có request nào chứa dữ liệu người dùng.

---

## 14. Yêu cầu kỹ thuật chung

- Giữ các ràng buộc đang có: static, không build step, đường dẫn tương đối, chạy ở subpath, hash routing, GitHub Pages.
- Logic tính toán và chấm điểm là hàm thuần, mỗi thẻ có trang test riêng.
- **Accessibility:**
  - Mọi tương tác kéo thả và vuốt đều có cách làm tương đương bằng bàn phím và nút bấm.
  - Biểu đồ có bản mô tả bằng chữ.
  - Tương phản AA ở cả 2 theme.
- Lighthouse mobile: Performance ≥ 90, các mục khác ≥ 95.
- **Kiểm tra link:** script quét mọi link ngoài trong nội dung, báo link chết.

---

## 15. Các phase

| Phase | Việc | Ghi chú |
|---|---|---|
| 0 | Kiểm kê, nghiên cứu thần số học, 11 đoạn mẫu, danh sách câu cần hỏi HUB | **Dừng chờ duyệt** |
| 1 | Viết mới toàn bộ Thần số học và toàn bộ chữ của web, nâng cấp `check-copy`, biên tập độc lập | Không đổi thiết kế |
| 2 | Thành phần dùng chung (mục 6), thư viện âm lịch | Có test |
| 3 | Cung hoàng đạo & Con giáp | |
| 4 | Bản đồ tính cách | |
| 5 | Sở thích nghề nghiệp | |
| 6 | Nghề nghiệp hôm nay & ngày mai | Nghiên cứu nặng nhất |
| 7 | Kỹ năng nên đầu tư | |
| 8 | Giá trị sống | |
| 9 | Hồ sơ của bạn, cập nhật trang chủ và quyền riêng tư | |
| 10 | Rà soát cuối | Lint, biên tập, kiểm chứng, link, a11y, hiệu năng |

**Mỗi thẻ (Phase 3–8)** đi theo thứ tự:
nghiên cứu → dàn ý → mẫu vào `review/` → viết đủ → kiểm tra văn phong → biên tập độc lập → kiểm chứng → dựng giao diện → test → commit.

---

## 16. Definition of Done

- [ ] `check-copy` sạch lỗi trên toàn bộ nội dung; mọi mục đạt điểm biên tập ≥ 4
- [ ] Mọi câu có số liệu, năm, tên tổ chức đều truy được về `research/`; mỗi thẻ có ngăn nguồn và ngày cập nhật
- [ ] Không còn đoạn nào chép từ web khác
- [ ] Toàn bộ test tính toán pass (thần số, âm lịch, can chi, chấm điểm Big Five, Holland)
- [ ] Mỗi thẻ có đủ 4 dấu ấn thiết kế ở mục 6, đẹp ở 390px và 1440px, cả 2 theme
- [ ] Nút Back, vuốt đóng, bàn phím hoạt động ở mọi thẻ
- [ ] Không dữ liệu người dùng nào rời khỏi máy; lưu trữ chỉ bật khi người dùng chọn
- [ ] Không link chết; Lighthouse đạt mục tiêu
- [ ] `PROGRESS.md` cập nhật; `README.md` hướng dẫn sửa nội dung, cập nhật số liệu hằng năm và thêm thẻ mới

Khi xong mỗi phase, báo ngắn gọn: đã làm gì, quyết định nào tự đưa ra, điểm nào HUB cần xem.
