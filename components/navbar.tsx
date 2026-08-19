import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          ALGÜL
          <span>KIRTASİYE</span>
        </Link>

        <nav className="desktop-nav">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/products">Ürünler</Link>
          <Link href="/categories">Kategoriler</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/contact">İletişim</Link>
        </nav>

        <div className="header-actions">
          <button aria-label="Ara">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button aria-label="Hesabım">
            <FontAwesomeIcon icon={faUser} />
          </button>

          <button aria-label="Sepet">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </header>
  );
}