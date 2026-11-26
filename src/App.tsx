import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const cheapProducts = filterProducts(products, { maxPrice: 300000, sort: "asc" });
  const electronics = filterProducts(products, { category: "Điện tử" });
  const lowStockProducts = products.filter((product) => product.stock >= 1 && product.stock <= 5);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <ProductList title="Sản phẩm nổi bật" items={products} />
        <ProductList title="Sản phẩm sắp hết hàng" items={lowStockProducts} />
        <ProductList title="Giá dưới 300.000 đ" items={cheapProducts} />
        <ProductList title="Đồ điện tử" items={electronics} />
      </main>
      <Footer />
    </>
  );
}

export default App;
