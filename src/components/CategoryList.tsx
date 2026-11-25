type Props = {
  categories: string[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
};

export default function CategoryList({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <section id="categories" className="container category-section">
      <h2 className="section-title">Danh mục sản phẩm</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-item ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => onSelectCategory?.(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
