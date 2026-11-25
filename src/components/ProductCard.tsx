import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className={`product-card ${isOutOfStock ? "is-out-of-stock" : ""}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {isOutOfStock && (
          <span className="badge badge-out-of-stock">Hết hàng</span>
        )}
      </div>
      <div className="product-body">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className={`stock-status ${isOutOfStock ? "out" : "in"}`}>
            {isOutOfStock ? "Hết hàng" : `Còn ${product.stock} sp`}
          </span>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <button
          type="button"
          className={`btn ${isOutOfStock ? "btn-disabled" : "btn-buy"}`}
          disabled={product.stock === 0}
        >
          {isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}
