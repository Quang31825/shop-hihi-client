import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  // Lấy các danh mục duy nhất từ mảng products theo gợi ý: new Set(products.map((p) => p.category))
  const categories = [
    "Tất cả",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Header />
      <Banner />
      <main>
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductList
          title={
            selectedCategory === "Tất cả"
              ? "Sản phẩm nổi bật"
              : `Danh mục: ${selectedCategory}`
          }
          items={filteredProducts}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
