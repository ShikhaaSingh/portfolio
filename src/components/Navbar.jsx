import { useState } from "react";
import { links, navigation } from "../data/portfolio.js";

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="/" className="wordmark" onClick={closeMenu}>
          <img
            className="wordmark-avatar"
            src={links.photo}
            alt=""
            aria-hidden="true"
            width="36"
            height="36"
          />
          <span>Shikha</span>
        </a>
        <div
          id="nav-links"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
        >
          {navigation.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              aria-current={currentPath === href ? "page" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="header-controls">
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "light"}
            onClick={onToggleTheme}
          >
            <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
            <span className="theme-toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
