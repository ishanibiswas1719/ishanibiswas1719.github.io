import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigation } from "./portfolio";

const pageTitles: Record<string, string> = {
  "/": "Ishani Biswas — Sports Portfolio",
  "/about": "About — Ishani Biswas",
  "/experience": "Experience — Ishani Biswas",
  "/work": "Selected Work — Ishani Biswas",
  "/playbook": "Playbook — Ishani Biswas",
  "/resume": "Résumé — Ishani Biswas",
  "/contact": "Contact — Ishani Biswas",
};

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = pageTitles[location.pathname] ?? "Work — Ishani Biswas";
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <Link className="brand-mark" to="/" aria-label="Ishani Biswas home">
          <span>IB</span>
          <b>Ishani Biswas</b>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>

        <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : undefined)}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="nav-contact" to="/contact">Say hello ↗</NavLink>
        </nav>
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="footer-stamp">Open to work</div>
        <div>
          <p className="footer-name">Ishani Biswas</p>
          <p>Sports operations · Venue branding · Live experiences</p>
        </div>
        <div className="footer-links">
          <a href="mailto:ishani.biswas017@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ishani-biswas-6a5760292" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/documents/Ishani-Biswas-CV.pdf" target="_blank" rel="noreferrer">Résumé</a>
        </div>
        <p className="footer-year">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, note }: { eyebrow: string; title: ReactNode; note: string }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro-note">{note}</p>
    </header>
  );
}

export function ScribbleLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link className="scribble-link" to={to}>{children}<span>↗</span></Link>;
}
