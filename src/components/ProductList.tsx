import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

type Props = {
  title: string;
  items: Product[];
};

export default function ProductList({ title, items }: Props) {
  return (
    <section id="products" className="container product-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="product-count">{items.length} sản phẩm</span>
      </div>
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
