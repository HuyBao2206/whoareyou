# Hướng dẫn viết lại Thần số học (Phase 1)

Dùng cho mọi người viết (kể cả subagent). Đọc kèm: `docs/BRIEF-v3.md` mục 3 (nhất là 3.9) và mục 4; 11 mẫu đã duyệt trong `review/hieu-chinh.md`; ghi chú nghiên cứu trong `research/than-so-hoc*.md`.

## 1. Cấu trúc dữ liệu mới (`assets/js/modules/numerology/messages.js`)

```js
// Số chủ đạo, Số sứ mệnh, Số linh hồn, Số nhân cách: mỗi số một mục
{
  title: 'Trật tự và thực tế',      // 2–4 chữ, chùm từ khoá có nguồn, không đặt “Người…”, “Muốn…”, “Dáng vẻ…”
  keywords: ['…', '…', '…'],        // 3–5 từ khoá ngắn, có nguồn
  summary: '…',                     // 3–5 câu, giọng phân tích cá nhân
  strengths: ['…', '…'],            // 2–3 ý, mỗi ý tối đa 2 câu
  watchOut: ['…', '…'],             // 2–3 ý, mỗi ý tối đa 2 câu
  advice: ['…', '…'],               // 2–3 ý, mỗi ý tối đa 2 câu, làm được trong tuần
  fields: ['…'],                    // chỉ Số chủ đạo và Số sứ mệnh: 3–6 lĩnh vực có nguồn
  note: '…',                        // 2–3 câu, giọng lời nhắn
}

// Năm cá nhân
{ title, keywords, summary, doMore: [2–3], doLess: [2–3], note }

// Tháng cá nhân (dùng chung cho mọi năm): PERSONAL_MONTH[1..9]
{ title: '2–4 chữ', text: '1–2 câu' }

// Nguồn gốc biểu tượng (dùng chung cho mọi chỉ số): ORIGINS[1..9, 10, 11, 22, 33]
'1–2 câu, nói rõ phần nào là nghĩa cổ, phần nào do thần số học hiện đại gán'
```

Số lượng mục:
- Số chủ đạo: 1–11, 22, 33 (13 mục). Cách tính mặc định chỉ ra 2–11 và 22; số 1 và 33 dùng cho trang tra cứu và cho cách tính phương Tây.
- Năm cá nhân: 1–9. Tháng cá nhân: 1–9.
- Số sứ mệnh, Số linh hồn, Số nhân cách: 1–9, 11, 22, 33 (mỗi chỉ số 12 mục).

## 2. Quy tắc nội dung

1. **Chỉ viết điều có trong ghi chú nghiên cứu.** Mỗi nét, mỗi lời khuyên dẫn được về một mã nguồn. Ưu tiên nét có từ 2 nguồn độc lập. Nét 1 nguồn: viết ở mức chắc thấp hơn hoặc nêu tên tác giả.
2. **Lời khuyên** suy ra từ nét đã nêu, hợp lẽ thường, làm được trong tuần, có cách tự kiểm chứng khi được. Không mẹo vặt tự nghĩ cho đủ số lượng. Thà 2 ý tốt còn hơn 3 ý gượng.
3. **Ví dụ đời thường:** tối đa 1 ví dụ mỗi mục, bối cảnh đa dạng, chỉ để minh hoạ một nét đã có nguồn. Không tin nhắn, đồng nghiệp, buổi họp, giỏ hàng, bàn ăn.
4. **Chỗ Phillips khác Decoz** (số chủ đạo 3, 8, 10…): thêm một câu “Sách của David A. Phillips…” hoặc “Theo sách của David A. Phillips…”.
5. **Không khẳng định số mệnh.** “Theo thần số học” nói ở chỗ dự báo (Năm cá nhân) và ở phần giới thiệu chỉ số; không chen giữa chủ ngữ và vị ngữ.
6. **Lời nhắn `note`:** bám đúng ý nghĩa của mục đó; hình ảnh đời thường của người Việt; không trùng hình ảnh với `ORIGINS` của cùng số; hai lời nhắn có thể hiện cùng trang (5 chỉ số của một người) nên không dùng chung một khuôn câu. Ca dao, thành ngữ phải đúng nguyên văn.
7. **Nghề `fields`:** chỉ lấy từ ghi chú, Việt hoá cho gần thị trường Việt Nam (ví dụ “kế toán, kiểm toán”, “kỹ thuật xây dựng”).

## 3. Chống lặp khuôn (mục 3.3, 3.9)

Trước khi viết một nhóm, chọn trước kiểu câu mở và kiểu câu kết cho từng mục, ghi vào bảng ở đầu file nguồn của nhóm. Trong một nhóm:
- Không quá 2 đoạn `summary` mở bằng cùng 3 chữ. Không quá 2 đoạn kết bằng cùng một kiểu câu (“Mặt trái là…”, “Đi kèm là…”, “Cái giá…”, “Nhưng…”, câu nêu tên Phillips…).
- Các kiểu mở gợi ý: nét nổi bật nhất làm chủ ngữ (“Thích phân tích và muốn hiểu tới gốc rễ là nét…”); hai chữ khoá (“Trật tự và tính thực tế là hai nét…”); bối cảnh (“Trong một nhóm, …”, “Khi có việc khó, …”); đối chiếu (“Ít ai để ý rằng…”); “Ai có số…”, “Người có số…”, “Theo thần số học,…” (mỗi kiểu tối đa 2 lần).
- Các kiểu kết gợi ý: mặt trái; nét mạnh nổi bật; chỗ các nguồn nói khác nhau; nhận xét về cách nét đó lộ ra trong đời thường.
- Trong `strengths`, `watchOut`, `advice` của cả nhóm: không để quá 1/4 số ý mở bằng cùng 2 chữ. Không ý nào mở bằng “Bạn + động từ”.
- Liệt kê từ 3 vế: tối đa 1 lần mỗi đoạn. “Thường”, “có thể”, “đôi khi”: tối đa 1 lần mỗi đoạn.

## 4. Quy trình mỗi lô

1. Viết vào `messages.js` (giữ tên trường như trên).
2. Ghi bảng nguồn từng mục vào `review/nguon-than-so-hoc-<lo>.md`: mỗi nét → mã nguồn; đánh dấu [1 nguồn].
3. Chạy `node tools/check-copy.mjs` và `node tools/check-messages.mjs`. Phải sạch lỗi.
4. Biên tập độc lập (subagent chưa thấy quá trình viết) chấm theo mục 5.5, lưu `review/bien-tap-<lo>.md`. Mục nào dưới 4 thì viết lại, chấm lại.
