import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="logo footer-logo">
            ALGÜL
            <span>KIRTASİYE</span>
          </Link>

          <p>
            Okul, ofis ve yaratıcılık için ihtiyacınız olan her şey.
          </p>
        </div>

        <div>
          <h4>Alışveriş</h4>
          <Link href="/products">Tüm Ürünler</Link>
          <Link href="/categories">Kategoriler</Link>
          <Link href="/cart">Sepetim</Link>
        </div>

        <div>
          <h4>Kurumsal</h4>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/contact">İletişim</Link>
        </div>

        <div>
          <h4>İletişim</h4>
          <p>Algül Kırtasiye</p>
          <p>Türkiye</p>
        </div>
      </div>

      <div className="container footer-bottom">
        © 2026 Algül Kırtasiye. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}