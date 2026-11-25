# ShopHIHI - Bài tập môn Công nghệ Lập trình Hiện đại

Ứng dụng web bán hàng trực tuyến xây dựng bằng React 19, TypeScript và Vite.

---

## 1. Bài thực hành trên lớp
- **Khởi tạo dự án & không lỗi Console:** Vite + React 19 + TypeScript.
- **Tách đủ 4 component trong `src/components/`:**
  - `Header.tsx`: Logo, thanh điều hướng, nút giỏ hàng.
  - `Footer.tsx`: Thông tin bản quyền và liên hệ.
  - `ProductList.tsx`: Danh sách sản phẩm, hiển thị số lượng và kiểm tra danh mục rỗng.
  - `ProductCard.tsx`: Thẻ hiển thị sản phẩm (ảnh, danh mục, tên, giá, nút mua).
- **Dữ liệu từ `products.ts` & hiển thị bằng `map()` có `key`:**
  - Lấy dữ liệu mẫu từ `src/data/products.ts`.
  - Duyệt qua `map()` với `key={product.id}` duy nhất.
- **Giao diện tự co giãn (Responsive CSS Grid):**
  - Tự động thích ứng trên mọi kích thước màn hình từ điện thoại, tablet đến máy tính.

---

## 2. Bài tập về nhà

### Bài 1: Component Banner
- Tạo component `Banner.tsx` hiển thị khối khuyến mãi (tiêu đề, mô tả ngắn, nút "Mua ngay", hình ảnh hero).
- Đặt phía trên `ProductList` trong `App.tsx`.

### Bài 2: Component CategoryList
- Tạo component `CategoryList.tsx` hiển thị các danh mục lấy từ mảng products.
- Sử dụng cú pháp gợi ý: `new Set(products.map((p) => p.category))`.
- Cho phép bấm vào từng danh mục để lọc sản phẩm hiển thị theo thời gian thực.

### Bài 3: Nhãn "Hết hàng" trong ProductCard
- Kiểm tra sản phẩm có `stock === 0` (sản phẩm *Tai nghe Bluetooth*).
- Hiển thị nhãn đỏ **HẾT HÀNG** ở góc trên ảnh.
- Khóa nút mua bằng `disabled={product.stock === 0}` và đổi nội dung nút thành "Hết hàng".

### Bài 4: Đọc trước kiến thức cho Buổi 2
- Đã tổng hợp đầy đủ nội dung đọc trước trong file [DOCS_BUOI2.md](./DOCS_BUOI2.md):
  - `let` và `const`
  - `arrow function`
  - `destructuring`
  - `spread operator`
  - `template string`
  - Các hàm mảng: `map`, `filter`, `reduce` kèm ví dụ ứng dụng trong React.

---

## Hướng dẫn cài đặt & chạy dự án

### Cài đặt dependencies
```bash
npm install
```

### Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```
Mở trình duyệt tại [http://localhost:5173](http://localhost:5173).

### Kiểm tra linter
```bash
npm run lint
```

### Build dự án (Production)
```bash
npm run build
```

---

## Đẩy code lên GitHub

Nếu bạn muốn liên kết với repo GitHub mới:
```bash
git remote add origin https://github.com/<TEN_GITHUB_CUA_BAN>/shop-hihi-client.git
git push -u origin main
```
