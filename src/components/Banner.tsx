export default function Banner() {
  return (
    <section className="banner">
      <div className="container banner-inner">
        <div className="banner-content">
          <span className="banner-badge">Khuyến mãi đặc biệt</span>
          <h1 className="banner-title">
            Chào mừng đến với <span className="highlight">ShopHIHI</span>
          </h1>
          <p className="banner-desc">
            Khám phá các sản phẩm hot nhất với giá siêu ưu đãi dành riêng cho bạn.
            Chất lượng đảm bảo, giao hàng nhanh chóng!
          </p>
          <a href="#products" className="btn btn-primary">
            Mua ngay
          </a>
        </div>
      </div>
    </section>
  );
}
