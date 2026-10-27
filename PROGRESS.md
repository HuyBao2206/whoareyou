# Tiến độ theo BRIEF v3

File này để phiên làm việc sau đọc là làm tiếp được. Brief gốc: `docs/BRIEF-v3.md`.

## Đang ở đâu

**Phase 0: xong, đang dừng chờ HUB duyệt** (điểm dừng bắt buộc ở mục 5.2 của brief).

HUB cần đọc `review/hieu-chinh.md`: 11 đoạn mẫu và danh sách câu mang giọng riêng của HUB. Góp ý của HUB sẽ được ghi thành quy tắc bổ sung ở cuối mục 3 của `docs/BRIEF-v3.md`, rồi mới sang Phase 1.

## Đã xong

### Phase 0
- [x] Đọc brief và mã nguồn hiện có.
- [x] Kiểm kê toàn bộ chữ người dùng nhìn thấy: `review/kiem-ke.md`.
- [x] Nghiên cứu thần số học (3 subagent chạy song song), gộp vào `research/than-so-hoc.md`.
- [x] Kiểm chứng quy ước tính số chủ đạo ở Việt Nam (mục “Cách tính” trong `research/than-so-hoc.md`).
- [x] 11 đoạn mẫu kèm bản cũ, bản mới và nguồn: `review/hieu-chinh.md`.
- [x] Danh sách câu mang giọng riêng của HUB cần hỏi: cuối `review/hieu-chinh.md`.
- [x] Biên tập độc lập cho 11 đoạn mẫu: `review/bien-tap-mau.md` (lượt 1), sửa theo góp ý, chấm lại ở `review/bien-tap-mau-lan-2.md`.

## Việc còn lại

| Phase | Việc | Trạng thái |
|---|---|---|
| 0 | Chờ HUB duyệt mẫu | **Đang chờ** |
| 1 | Viết mới toàn bộ Thần số học và chữ của web; nâng cấp `check-copy`; biên tập độc lập | Chưa làm |
| 2 | Thành phần dùng chung, thư viện âm lịch | Xong (xem `CLAUDE.md`) |
| 3 | Cung hoàng đạo & con giáp | Xong |
| 4 | Bản đồ tính cách | Chưa làm |
| 5 | Sở thích nghề nghiệp | Xong (bộ 48 hoạt động tự soạn; xem `CLAUDE.md`) |
| 6 | Nghề nghiệp hôm nay & ngày mai | Chưa làm |
| 7 | Kỹ năng nên đầu tư | Chưa làm |
| 8 | Giá trị sống | Chưa làm |
| 9 | Hồ sơ của bạn, trang chủ, quyền riêng tư | Chưa làm |
| 10 | Rà soát cuối | Chưa làm |

## Quyết định đã đưa ra

- Brief được chép vào `docs/BRIEF-v3.md` để sau này ghi góp ý của HUB vào cuối mục 3.
- Nghiên cứu thần số học tách làm 3 file con (ý nghĩa số, cách tính, các chỉ số) và một file đầu mối `research/than-so-hoc.md`, vì làm song song bằng 3 subagent.
- Chưa sửa bất kỳ chữ nào trên web. Mọi đề xuất nằm trong `review/`.
- Các câu do chính HUB sửa trên GitHub (xác định qua lịch sử git) được đưa vào danh sách hỏi, không tự sửa.
- Mẫu đã qua hai lượt biên tập độc lập (`review/bien-tap-mau.md`, `review/bien-tap-mau-lan-2.md`). Lượt 2 chỉ còn trường `origin` số 4 dưới 4 điểm; đã thay bằng đúng bản biên tập viên đề xuất và sửa thêm các lỗi nhỏ lượt 2 nêu.

## Ghi chú cho Phase 1

- **Mạng bị chặn:** môi trường hiện chặn worldnumerology.com, britannica.com, plato.stanford.edu, archive.org, gutenberg.org, vnexpress.net, wikipedia.org. Nghiên cứu Phase 0 chỉ dựa trên đoạn trích tìm kiếm. Nên mở mạng rồi kiểm lại nguồn trước khi viết hàng loạt.
- **Hạn mức tìm kiếm:** mỗi lượt làm việc có khoảng 200 lượt WebSearch dùng chung cho mọi subagent; 3 subagent nghiên cứu đã dùng hết. Chia việc nghiên cứu ra nhiều lượt.
- **Chống lặp khuôn:** trước khi viết từng nhóm (13 số chủ đạo, 9 năm cá nhân, 12 số sứ mệnh, 12 linh hồn, 12 nhân cách), lập bảng phân bổ kiểu câu mở (nét nổi bật, tên gọi, bối cảnh) và kiểu câu kết (mặt trái, nét mạnh, chỗ các nguồn khác nhau) để không quá 2 đoạn cùng khuôn.
- **Hạn chế liệt kê và từ rào đón** (“thường”, “có thể”, “đôi khi”): biên tập viên bắt được ở hầu hết mẫu lượt đầu.
- **Quyết định đang chờ HUB:** B1–B7 ở cuối `review/hieu-chinh.md` (số 33, mô tả số 3 và 8, chữ Y, tháng cá nhân thay cho quý, quy tắc đọc kết hợp, tên gọi, chế độ `western`).
