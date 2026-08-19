import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const categories = [
  { name: "Kırtasiye", icon: "✏️" },
  { name: "Okul", icon: "🎒" },
  { name: "Ofis", icon: "🖊️" },
  { name: "Defter & Ajanda", icon: "📓" },
  { name: "Kitap", icon: "📚" },
  { name: "Sanat & Hobi", icon: "🎨" },
  { name: "Oyun & Oyuncak", icon: "🎲" },
  { name: "Aksesuarlar", icon: "🎧" },
];

const featuredProducts = [
  {
    name: "Premium Spiralli Defter",
    category: "Defter & Ajanda",
    price: "149,90 TL",
    oldPrice: "179,90 TL",
    image: "/images/products/premium-spiralli-defter.jpg",
  },
  {
    name: "Faber-Castell Grip Kalem",
    category: "Kırtasiye",
    price: "89,90 TL",
    oldPrice: "",
    image: "/images/products/faber-castell-grip-kalem.jpg",
  },
  {
    name: "Pastel Fosforlu Kalem Seti",
    category: "Kırtasiye",
    price: "119,90 TL",
    oldPrice: "139,90 TL",
    image: "/images/products/pastel-fosforlu-kalem-seti.jpg",
  },
  {
    name: "12'li Profesyonel Boya Seti",
    category: "Sanat & Hobi",
    price: "229,90 TL",
    oldPrice: "",
    image: "/images/products/profesyonel-boya-seti.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* Header */}
     

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow">ALGÜL KIRTASİYE</span>

            <h1>
              Okul, ofis ve
              <br />
              <span>yaratıcılık</span> için
              <br />
              ihtiyacın olan her şey.
            </h1>

            <p>
              Kaliteli kırtasiye ürünlerini keşfedin. Okuldan ofise,
              sanattan hobiye ihtiyacınız olan her şey burada.
            </p>

            <div className="hero-buttons">
              <a href="/products" className="primary-button">
                Ürünleri Keşfet
              </a>

              <a href="/categories" className="secondary-button">
                Kategorilere Göz At
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <span>✏️</span>
              <strong>Yaratıcılığını</strong>
              <small>Keşfet.</small>
            </div>

            <div className="floating-card card-one">
              📓
            </div>

            <div className="floating-card card-two">
              🎨
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">KEŞFET</span>
              <h2>Kategoriler</h2>
            </div>

            <a href="/categories">Tümünü Gör →</a>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <a href="/categories" className="category-card" key={category.name}>
                <span className="category-icon">{category.icon}</span>
                <span>{category.name}</span>
                <small>Keşfet →</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section products-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ÖNE ÇIKANLAR</span>
              <h2>Popüler Ürünler</h2>
            </div>

            <a href="/products">Tüm ürünler →</a>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article className="product-card" key={product.name}>
              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                />
              </div>

                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>

                  <div className="price">
                    <strong>{product.price}</strong>
                    {product.oldPrice && <del>{product.oldPrice}</del>}
                  </div>

                  <button>Sepete Ekle</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="promo-section">
        <div className="container promo">
          <div>
            <span className="eyebrow">ALGÜL KIRTASİYE</span>
            <h2>İhtiyacınız olan her şey, tek yerde.</h2>
            <p>
              Günlük kırtasiye ihtiyaçlarından okul ve ofis ürünlerine kadar
              geniş ürün yelpazemizi keşfedin.
            </p>
          </div>

          <a href="/products" className="primary-button">
            Alışverişe Başla
          </a>
        </div>
      </section>

    
    </main>
  );
}