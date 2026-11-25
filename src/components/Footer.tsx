const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="about" className="footer">
      <div className="container footer-inner">
        <p>© {CURRENT_YEAR} ShopHIHI · Bài tập môn Công nghệ lập trình hiện đại</p>
        <p>Hotline: 1900 0000 · Email: hotro@shophihi.vn</p>
      </div>
    </footer>
  );
}
