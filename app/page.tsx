import Link from "next/link";

export default function Home() {
  return (
    <div className = "home-page">
      <div className = "main-content-container">
        <div className = "main-content-header">
          <h2 className = "main-content-header-title">
            Добро Пожаловать в <span className = "text-blue-500">Marketplace</span>
          </h2>
          <p className = "main-content-header-description">
            Давайте начнем вместе!
          </p>
        </div>
        <div className = "main-content-feature-grid">
          <Link href = '/' className = "main-content-feature-grid-item">
            <h3>
              Главная →
            </h3>
            <span>
              Здесь вы сможете найти все что вам нужно
            </span>
          </Link>
          <Link href = '/product-list' className = "main-content-feature-grid-item">
            <h3>
              Товары →
            </h3>
            <span>
              Здесь вы можете посмотреть/купить товары
            </span>
          </Link>
          <Link href = '/categories' className = "main-content-feature-grid-item">
            <h3>
              Категории →
            </h3>
            <span>
              Здесь вы можете посмотреть категории товаров
            </span>
          </Link>
          <Link href = '/reviews' className = "main-content-feature-grid-item">
            <h3>
              Оставить отзыв →
            </h3>
            <span>
              Здесь вы можете оставить отзывы
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
