# Tài Liệu Đọc Trước Cho Buổi 2: Kiến Thức ES6+ Cốt Lõi

Tài liệu tóm tắt các tính năng JavaScript ES6+ quan trọng nhất thường xuyên sử dụng trong React.

---

## 1. `let` và `const`

- **`var` (cũ):** Phạm vi hàm (function scope), bị hoisting, có thể khai báo đè gây lỗi khó kiểm soát.
- **`let`:** Phạm vi khối (block scope `{}`), có thể gán lại giá trị, không thể khai báo lại trong cùng scope.
- **`const`:** Phạm vi khối, **không thể gán lại giá trị** (hằng số). Đối với object/array khai báo bằng `const`, ta vẫn có thể sửa/thêm thuộc tính bên trong nhưng không thể gán bằng một đối tượng mới.

```javascript
// Dùng const cho biến không đổi hoặc hàm, component:
const PI = 3.14;
const user = { name: "Quang", age: 20 };
user.age = 21; // Hợp lệ!
// user = {}; // Lỗi: Assignment to constant variable

// Dùng let cho biến thay đổi giá trị (bộ đếm, cờ trạng thái):
let count = 0;
count += 1;
```

> **Quy tắc vàng:** Mặc định luôn ưu tiên dùng `const`, chỉ chuyển sang `let` khi chắc chắn biến cần gán lại giá trị. Không dùng `var`.

---

## 2. Arrow Function (Hàm Mũi Tên)

Cú pháp ngắn gọn hơn hàm truyền thống (`function`), không ràng buộc con trỏ `this` riêng (dùng lexical `this` từ phạm vi cha).

```javascript
// Hàm truyền thống:
function sum(a, b) {
  return a + b;
}

// Arrow function cơ bản:
const sum = (a, b) => {
  return a + b;
};

// Return ngầm định (implicit return) khi chỉ có một biểu thức:
const sum = (a, b) => a + b;
const square = x => x * x;

// Trả về một object literal ngầm định: bọc trong ngoặc tròn ()
const makeUser = (name, age) => ({ name, age });
```

---

## 3. Destructuring (Phân Rã / Phá Cấu Trúc)

Trích xuất trực tiếp giá trị từ mảng hoặc thuộc tính từ object vào các biến riêng biệt.

### 3.1. Destructuring Object (Rất phổ biến khi nhận Props trong React)
```javascript
const product = { id: 1, name: "Áo thun", price: 150000, stock: 10 };

// Thay vì: const name = product.name; const price = product.price;
const { name, price, stock = 0 } = product;

// Đổi tên biến:
const { name: productName } = product;

// Dùng trực tiếp trong tham số Component React:
function ProductCard({ product }) {
  const { name, price } = product;
  return <div>{name} - {price}</div>;
}
```

### 3.2. Destructuring Array (Phổ biến với `useState`)
```javascript
const colors = ["Đỏ", "Xanh", "Vàng"];
const [firstColor, secondColor] = colors; // firstColor = "Đỏ", secondColor = "Xanh"

// Ví dụ React:
// const [count, setCount] = useState(0);
```

---

## 4. Spread Operator (`...`)

Toán tử `...` dùng để trải các phần tử của mảng hoặc thuộc tính của object.

### 4.1. Spread với Mảng
```javascript
const listA = [1, 2, 3];
const listB = [4, 5, 6];

// Gộp mảng:
const combined = [...listA, ...listB]; // [1, 2, 3, 4, 5, 6]

// Tạo mảng danh mục duy nhất kết hợp với Set:
const categories = ["Tất cả", ...new Set(products.map(p => p.category))];
```

### 4.2. Spread với Object (Cực kỳ quan trọng để cập nhật State không làm đột biến dữ liệu gốc)
```javascript
const user = { name: "Quang", age: 20, city: "TP.HCM" };

// Sao chép và cập nhật thuộc tính:
const updatedUser = {
  ...user,
  age: 21 // ghi đè age cũ
};
```

---

## 5. Template String (Template Literals)

Sử dụng dấu backtick (`` ` ``) để định dạng chuỗi, cho phép chèn biến hoặc biểu thức bằng cú pháp `${expression}` và xuống dòng tự nhiên mà không cần `\n` hay dấu cộng `+`.

```javascript
const name = "ShopHIHI";
const discount = 20;

// Nối chuỗi cũ:
// const text = "Chào mừng bạn đến với " + name + "! Giảm giá " + discount + "%.";

// Template string mới:
const text = `Chào mừng bạn đến với ${name}! Giảm giá ${discount}%.`;

// Xuống dòng trực tiếp:
const html = `
  <div class="card">
    <h2>${name}</h2>
  </div>
`;
```

---

## 6. Các Hàm Mảng Cốt Lõi: `map`, `filter`, `reduce`

### 6.1. `map()`: Biến đổi từng phần tử thành một phần tử mới
- Trả về một mảng mới có cùng độ dài với mảng ban đầu.
- **Ứng dụng trong React:** Render danh sách JSX.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]

// Trong React:
{items.map(product => (
  <ProductCard key={product.id} product={product} />
))}
```

### 6.2. `filter()`: Lọc các phần tử thỏa mãn điều kiện
- Trả về một mảng mới chỉ gồm các phần tử trả về `true` từ hàm kiểm tra.
- **Ứng dụng trong React:** Lọc sản phẩm theo danh mục, tìm kiếm theo tên, xóa phần tử khỏi danh sách.

```javascript
const products = [
  { id: 1, name: "Áo", category: "Thời trang", stock: 5 },
  { id: 2, name: "Chuột", category: "Điện tử", stock: 0 }
];

// Lọc sản phẩm còn hàng:
const inStockProducts = products.filter(p => p.stock > 0);

// Lọc theo danh mục:
const electronicProducts = products.filter(p => p.category === "Điện tử");
```

### 6.3. `reduce()`: Tích lũy các phần tử về một giá trị duy nhất
- Duyệt qua từng phần tử và cộng dồn/tích lũy kết quả vào biến accumulator.
- **Ứng dụng trong React:** Tính tổng tiền giỏ hàng, tổng số lượng sản phẩm.

```javascript
const cart = [
  { name: "Áo thun", price: 150000, quantity: 2 },
  { name: "Balo", price: 550000, quantity: 1 }
];

// Cú pháp: array.reduce((accumulator, currentItem) => ..., initialValue)
const totalPrice = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log(totalPrice); // 850000
```
