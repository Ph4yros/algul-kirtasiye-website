"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Premium Spiralli Defter",
    category: "Defter & Ajanda",
    price: 149.9,
    image: "/images/products/premium-spiralli-defter.jpg",
  },
  {
    id: 2,
    name: "Faber-Castell Grip Kalem",
    category: "Kırtasiye",
    price: 89.9,
    image: "/images/products/faber-castell-grip-kalem.jpg",
  },
  {
    id: 3,
    name: "Pastel Fosforlu Kalem Seti",
    category: "Kırtasiye",
    price: 119.9,
    image: "/images/products/pastel-fosforlu-kalem-seti.jpg",
  },
  {
    id: 4,
    name: "12'li Profesyonel Boya Seti",
    category: "Sanat & Hobi",
    price: 229.9,
    image: "/images/products/profesyonel-boya-seti.jpg",
  },
];

const categories = [
  "Tümü",
  "Kırtasiye",
  "Okul",
  "Ofis",
  "Defter & Ajanda",
  "Kitap",
  "Sanat & Hobi",
  "Oyun & Oyuncak",
  "Aksesuarlar",
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result =
      selectedCategory === "Tümü"
        ? [...products]
        : products.filter(
            (product) => product.category === selectedCategory
          );

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name, "tr")
      );
    }

    return result;
  }, [selectedCategory, sort]);

  return (
    <main>
      {/* Page Header */}
      <section className="products-page-header">
        <div className="container">
          <span className="eyebrow">ALGÜL KIRTASİYE</span>

          <h1>Tüm Ürünler</h1>

          <p>
            Okul, ofis, kırtasiye, kitap ve daha fazlasını keşfedin.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="products-page-section">
        <div className="container">

          {/* Toolbar */}
          <div className="products-toolbar">
            <div>
              <strong>{filteredProducts.length}</strong> ürün
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Ürünleri sırala"
            >
              <option value="default">Önerilen</option>
              <option value="price-low">
                Fiyat: Düşükten Yükseğe
              </option>
              <option value="price-high">
                Fiyat: Yüksekten Düşüğe
              </option>
              <option value="name">
                İsme Göre
              </option>
            </select>
          </div>

          <div className="products-layout">

            {/* Filters */}
            <aside className="filters">
              <h2>Filtrele</h2>

              <div className="filter-group">
                <h3>Kategori</h3>

                {categories.map((category) => (
                  <button
                    key={category}
                    className={
                      selectedCategory === category
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="product-grid products-page-grid">

              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <article
                    className="product-card"
                    key={product.id}
                  >
                    <a href={`/products/${product.id}`}>
                      <div className="product-image">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={250}
                          height={250}
                        />
                      </div>
                    </a>

                    <div className="product-info">
                      <small>{product.category}</small>

                      <h3>{product.name}</h3>

                      <div className="price">
                        <strong>
                          {product.price.toLocaleString(
                            "tr-TR",
                            {
                              style: "currency",
                              currency: "TRY",
                            }
                          )}
                        </strong>
                      </div>

                      <button>
                        Sepete Ekle
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="no-products">
                  <h2>Ürün bulunamadı</h2>
                  <p>
                    Bu kategoride henüz ürün bulunmuyor.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}