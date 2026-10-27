# Thấu Hiểu & Phát Triển Bản Thân · by HUB

*Understand Yourself · Grow Yourself*

Một trang web tĩnh giúp người đọc hiểu mình hơn qua các thẻ chủ đề. Đã hoàn thiện thẻ **Thần số học** (giới thiệu, hai bộ tính, trang kết quả 5 thẻ thông điệp, trang tra cứu) và thẻ **Cung hoàng đạo & con giáp** (hai vòng trời, thẻ đôi Đông Tây, 12 cung, 12 con giáp, ngũ hành, bầu trời thật). Các thẻ khác đang ở trạng thái "Sắp ra mắt". Cấu trúc và thành phần dùng chung: xem `CLAUDE.md`.

- Không có bước build: chỉ có HTML, CSS và JavaScript (ES modules).
- Chạy được ở địa chỉ con như `username.github.io/ten-repo/` vì mọi đường dẫn đều là đường dẫn tương đối.
- Mọi phép tính chạy trên trình duyệt. Tên và ngày sinh không được lưu, không nằm trên URL và không được gửi đi đâu.

---

## Chạy trên máy

Cần một server tĩnh bất kỳ. ES modules không chạy được khi mở file trực tiếp bằng `file://`.

```bash
# Đứng ở thư mục CHA của repo để thử giống hệt địa chỉ con trên GitHub Pages
cd ..
python3 -m http.server 8000
# rồi mở http://localhost:8000/whoareyou/
```

**Kiểm thử phần tính toán:** mở `http://localhost:8000/whoareyou/assets/js/modules/numerology/calc.test.html` và `.../modules/zodiac/calc.test.html` (gồm âm lịch, Can Chi, nạp âm, cung, chòm sao IAU). Mọi dòng phải là "Đạt".

**Kiểm tra nội dung** (cần Node 18 trở lên):

```bash
node tools/check-copy.mjs       # quét văn phong: cụm từ cấm, dấu "!", "—", emoji, câu hỏi tu từ, chuẩn NFC
node tools/check-messages.mjs   # đủ mọi cặp chỉ số × con số, không mục nào thiếu trường
# hoặc gộp cả hai: npm run check
```

`check-copy` báo **lỗi** (phải sửa) và **cảnh báo** (cần đọc lại bằng mắt). Script chỉ bắt được dấu hiệu, nên bạn vẫn cần tự đọc lại.

## Deploy lên GitHub Pages

1. Đẩy code lên nhánh `main`.
2. Vào **Settings → Pages**, phần *Build and deployment* chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, rồi bấm **Save**.
3. Sau một hai phút, web có ở `https://huybao2206.github.io/whoareyou/`.

File `.nojekyll` giúp GitHub Pages phục vụ nguyên trạng các file. `404.html` tự tìm thư mục gốc của web nên nút "Về trang chủ" luôn đúng.

## Đổi tên web

1. Sửa `site.nameVi` và `site.nameEn` trong `assets/js/config.js`. Tiêu đề hero, chân trang và dòng tiếng Anh sẽ lấy theo đây.
2. Sửa thêm các thẻ `<title>`, `meta description`, `og:*`, `twitter:*` trong `index.html`. Mạng xã hội không chạy JavaScript nên các thẻ này phải viết sẵn.
3. Muốn đổi ảnh chia sẻ thì sửa `tools/og-template.html`, rồi chạy `node tools/render-images.cjs` (cần cài Playwright: `npm i -D playwright && npx playwright install chromium`).

## Đổi cách tính số chủ đạo

Trong `assets/js/config.js`:

```js
numerology: {
  lifePathMethod: 'vn',   // hoặc 'western'
  yIsVowel: true,
}
```

- `'vn'` (mặc định): cộng mọi chữ số của ngày, tháng, năm sinh; rút gọn tới khi kết quả ≤ 11; giữ 22 (hiện là 22/4) và 33 (hiện là 33/6). Kết quả nằm trong 2–11, 22/4, 33/6.
- `'western'`: rút gọn về 1–9, giữ 11, 22, 33 nếu gặp ở bất kỳ bước nào.

Phần giải thích "Cách tính" trong overlay tự đổi theo lựa chọn này. Trang tra cứu luôn có đủ các số 1–11, 22, 33.

## Sửa nội dung thông điệp

Toàn bộ thông điệp nằm trong `assets/js/modules/numerology/messages.js`, chia theo 5 chỉ số: `lifePath` (Số chủ đạo), `personalYear` (Năm cá nhân), `expression` (Số sứ mệnh), `soul` (Số linh hồn), `personality` (Số nhân cách).

Mỗi mục có `title`, `keywords` (3–5), `summary` (3–5 câu), `strengths` (3), `watchOut` (2–3), `advice` (2–3). Số chủ đạo và Số sứ mệnh có thêm `fields`. Năm cá nhân dùng `theme`, `doMore`, `doLess`, `byQuarter` (đúng 4 quý) thay cho ba trường điểm mạnh, cần để ý, gợi ý.

Phần giới thiệu, tên và mô tả của 5 chỉ số, chữ trên các bộ tính nằm trong `content.js`. Sửa xong, bạn chạy `node tools/check-copy.mjs && node tools/check-messages.mjs`.

## Thêm một thẻ chủ đề mới

1. Tạo thư mục `assets/js/modules/<ten-the>/` với file `view.js` export mặc định một object:

   ```js
   export default {
     mount(api, route, ctx) { /* vẽ nội dung vào api.body */ },
     update(route) { /* khi route con thay đổi, vd #/ten-the/ket-qua */ },
     unmount() {},
   };
   ```

   - `api` gồm `body`, `scroller`, `sheet`, `setToc([{ id, label }])` (mục lục trên thanh overlay), `setTitle()` và `jumpTo(id)`.
   - `ctx` gồm `navigate(path, { replace })`, `goHome()`, `toast(message)` và `config`.

2. Thêm CSS riêng (nếu cần) vào `assets/css/modules/<ten-the>.css` và gắn `<link>` trong `index.html`.
3. Trong `config.js`, tìm mục của thẻ đó, đổi `status: 'soon'` thành `'active'` và thêm `load: () => import('./modules/<ten-the>/view.js')`. Muốn glyph mới thì thêm vào `assets/js/core/glyphs.js`.
4. Thêm các file nội dung mới vào danh sách `FILES` trong `tools/check-copy.mjs`.

Router, overlay (Flip mở và đóng, vuốt xuống để đóng, nút Back, focus trap) và lưới thẻ sẽ tự xử lý phần còn lại, không cần sửa khung.

---

## Những quyết định tôi tự đưa ra

**Quy ước tính số (cần chủ web xem lại):**

- **Số chủ đạo, cách `vn`:** làm đúng như brief. Theo những gì tôi biết, các trang và sách thần số học ở Việt Nam không hoàn toàn giống nhau ở ba điểm. Tôi ghi lại để bạn quyết, chưa tự đổi gì:
  - Có nơi **không giữ 33** mà rút tiếp về 6. Trang hiện giữ 33/6 theo brief.
  - Có nơi viết **11 thành 11/2** và 10 thành 10/1. Trang hiện chỉ viết kèm số rút gọn cho 22/4 và 33/6. Số 11 và 10 hiện nguyên như vậy để khớp với dải "2–11" trong brief.
  - Có nơi **rút gọn riêng ngày, tháng, năm trước rồi mới cộng**. Với một số ngày sinh, cách này cho ra số khác. Trang cộng thẳng mọi chữ số. Mục "ⓘ Vì sao nơi khác có thể ra số khác?" trong overlay đã giải thích chuyện này cho người đọc.
- **Năm cá nhân:** tính theo năm dương lịch (đổi số vào 1/1), rút gọn về 1–9, không giữ 11/22/33. Có nơi tính theo ngày sinh nhật, tức đổi số vào đúng sinh nhật mỗi năm.
- **Ba số từ họ tên:** cộng giá trị cả tên rồi mới rút gọn. Có nơi rút gọn từng từ (họ, đệm, tên) trước rồi mới cộng. Hai cách đôi khi ra số khác nhau.
- **Chữ Y:** mặc định là nguyên âm, đúng với tên tiếng Việt. Ai cần thì đổi trong mục "Tuỳ chọn cho tên nước ngoài" ở phần Cách tính. Lựa chọn chỉ có tác dụng trong lần mở trang đó.
- Tên không có nguyên âm (hoặc không có phụ âm) sẽ không có Số linh hồn (hoặc Số nhân cách). Trang báo rõ điều này thay vì đưa ra một con số vô nghĩa.

**Giao diện và kỹ thuật:**

- Họ tên được chuyển sang **in hoa không dấu ở ô "Tên dùng để tính"** ngay dưới ô nhập, không ghi đè vào chính ô nhập. Nếu ghi đè trong lúc gõ, bộ gõ tiếng Việt (Telex, VNI) trên điện thoại sẽ bị vỡ dấu.
- **Tiêu đề hero hiện ra theo dòng bằng CSS** ngay từ lần vẽ đầu, không phải chờ JS hay font. Nhờ vậy điểm Lighthouse cao. **GSAP SplitText** được dùng cho tiêu đề các phần khi cuộn tới; chuỗi được chuẩn hoá NFC và chỉ tách dòng sau khi font đã tải, mỗi dòng có chừa khoảng trống để dấu tiếng Việt không bị cắt.
- **Không dùng Lenis.** Cuộn gốc của trình duyệt cần cho thao tác vuốt xuống để đóng overlay và cho trình đọc màn hình.
- Thư viện qua CDN jsDelivr, cố định **GSAP 3.13.0** (gồm ScrollTrigger, Flip, SplitText, tất cả đều miễn phí từ bản này). Nếu CDN lỗi, trang vẫn chạy đủ chức năng, chỉ mất chuyển động.
- Font: **Newsreader** (tiêu đề, chữ số lớn), **Be Vietnam Pro** (nội dung), **Cormorant Garamond** nghiêng (tên tiếng Anh), **Dancing Script** (chữ ký "— HUB", chỉ tải đúng 5 ký tự). Cả bốn đều có subset `vietnamese` và được tải không chặn render.
- **Trang kết quả trên mobile xếp dọc** thay vì carousel, vì đọc nội dung dài sẽ dễ hơn. Desktop dùng lưới so le hai cột.
- "Đọc đầy đủ" mở rộng bằng **Flip + clip-path**: các thẻ xung quanh dịch chỗ bằng transform, không animate chiều cao.
- **Con trỏ tuỳ biến** là một vòng mảnh đi kèm, vẫn giữ con trỏ gốc của hệ điều hành. Vòng này chỉ bật trên thiết bị có chuột.
- URL kết quả chỉ có 5 con số (`cd`, `nn`, `sm`, `lh`, `nc`), không có cả năm đang xem cho Năm cá nhân.
- Easter egg chỉ hiện khi tên sau chuẩn hoá đúng bằng `HUB` hoặc `BAO HUY`.
- Mở link sâu (vd gửi link kết quả cho bạn bè), trang tự chèn trang chủ vào lịch sử ngay bên dưới, nên nút Back đóng overlay chứ không thoát khỏi web.

## Quyền riêng tư

- Thứ duy nhất lưu trong trình duyệt là lựa chọn giao diện sáng/tối (`localStorage['hub-theme']`).
- Không cookie, không `sessionStorage`, không analytics, không script bên thứ ba đọc form. Tài nguyên bên ngoài chỉ có Google Fonts và GSAP từ jsDelivr, và cả hai đều tải trước khi người dùng nhập gì.
- Dữ liệu nhập chỉ nằm trong bộ nhớ của tab. Nút "Tính cho người khác" xoá sạch, tải lại trang cũng xoá sạch.

## Đã kiểm tra

- `calc.test.html`: 52/52 trường hợp đạt, gồm đủ các ca bắt buộc trong brief.
- `check-copy`: không lỗi. `check-messages`: đủ 58 mục (Số chủ đạo 13, Năm cá nhân 9, mỗi chỉ số theo tên 12).
- Lighthouse mobile (đo trên server local có gzip, GSAP phục vụ từ máy): Performance 100, Accessibility 100, Best Practices 100, SEO 100. Kết quả thật trên GitHub Pages có thể chênh một chút tuỳ mạng.
- axe-core (WCAG 2 A/AA): không lỗi ở trang chủ, overlay giới thiệu, kết quả, tra cứu và thẻ "Sắp ra mắt".
- Không tràn ngang ở 360, 390, 768, 1024, 1440, 1920 px, cả hai theme. `prefers-reduced-motion` tắt chuyển động lớn, giữ fade nhẹ.
- Theo dõi toàn bộ request mạng khi tính "Nguyễn Bảo Huy" sinh 22/06/2002: không request nào chứa tên hay ngày sinh. Storage và cookie trống.

## Việc chủ web cần làm tiếp (TODO)

- [ ] **Lời của HUB:** viết đoạn ngắn trong `index.html`, tìm `TODO: HUB tự viết`.
- [ ] **Bật GitHub Pages** (xem mục Deploy), rồi kiểm tra lại `config.site.url` và các URL tuyệt đối trong `index.html` (canonical, `og:url`, `og:image`, `twitter:image`). Hiện chúng đang để `https://huybao2206.github.io/whoareyou/`.
- [ ] Quyết định các điểm quy ước tính số ở trên (giữ 33 hay không, có viết 11/2 hay không).
- [ ] Đọc lại 58 thông điệp bằng giọng của mình và chỉnh những chỗ chưa giống cách HUB nói.
- [ ] Sau khi deploy, dán link vào Facebook hoặc Zalo để xem ảnh chia sẻ hiện đúng chưa.
- [ ] Viết dần các thẻ còn lại: Sở thích nghề nghiệp, Nghề nghiệp hôm nay & ngày mai, Kỹ năng nên đầu tư, Giá trị sống.

## Cấu trúc thư mục

```
/
├── index.html, 404.html, .nojekyll, package.json, README.md
├── assets/
│   ├── css/            tokens, base, components, overlay, modules/numerology
│   ├── js/
│   │   ├── config.js   tên web, liên kết, danh sách thẻ, cách tính số
│   │   ├── main.js     khởi động, điều phối route ↔ overlay
│   │   ├── core/       router, overlay, motion, theme, toast, glyphs, utils
│   │   └── modules/numerology/
│   │       ├── calc.js           logic tính toán (hàm thuần)
│   │       ├── calc.test.html    unit test chạy trên trình duyệt
│   │       ├── content.js        nội dung giới thiệu
│   │       ├── messages.js       58 thông điệp
│   │       ├── view.js           giới thiệu + hai bộ tính
│   │       ├── results.js        trang kết quả + tra cứu
│   │       └── anim.js           chuyển động phép tính rút gọn
│   └── images/         favicon, apple-touch-icon, og-image
└── tools/
    ├── check-copy.mjs, check-messages.mjs
    ├── og-template.html, render-images.cjs
```

Font từ Google Fonts (giấy phép SIL Open Font License). GSAP theo giấy phép của GreenSock.
