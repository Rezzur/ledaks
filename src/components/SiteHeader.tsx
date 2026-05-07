import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { brand, contactInfo, navItems } from "../data/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ledaks">
        <span className="brand-mark">
          <img src={brand.logo} alt="" />
        </span>
        <span>
          <strong>{brand.name}</strong>
          <small>{brand.descriptor}</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-phone" href={contactInfo.phoneHref}>
        <Phone size={18} />
        {contactInfo.phoneDisplay}
      </a>
    </header>
  );
}
