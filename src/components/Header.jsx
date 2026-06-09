import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  {
    label: "Segments",
    path: "/segments",
    children: [
      { label: "Campus Wifi", path: "/segments/campus-wifi" },
      { label: "Residential", path: "/segments/residential" },
      { label: "Corporate", path: "/segments/corporate" },
      { label: "Hospitality", path: "/segments/hospitality" },
    ],
  },
  { label: "Blog", path: "/blog" },

  // { label: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="al-header">
        <div className="al-header-inner">
          <div className="al-logo">
            <Link to="/">
              <img
                src="https://www.activline.in/wp-content/uploads/2022/01/logo.jpg"
                alt="ActivLine"
                onError={(e) => {
                  e.target.outerHTML =
                    '<span style="font-family:Black Ops One,cursive;font-size:22px;color:#ff8000;">ActivLine</span>';
                }}
              />
            </Link>
          </div>
          <nav className="al-nav">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div className="al-nav-item" key={item.label}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "al-nav-link active" : "al-nav-link"
                    }
                    to={item.path}
                  >
                    {item.label} ▾
                  </NavLink>
                  <div className="al-dropdown">
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.path}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.external ? (
                <div className="al-nav-item" key={item.label}>
                  <a
                    className="al-nav-link"
                    href={item.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </div>
              ) : (
                <div className="al-nav-item" key={item.label}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "al-nav-link active" : "al-nav-link"
                    }
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                </div>
              ),
            )}
          </nav>

          <button
            className="al-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Offcanvas Mobile Menu */}
      <div
        className={`al-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`al-offcanvas${menuOpen ? " open" : ""}`}>
        <div className="al-offcanvas-close">
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <div className="al-offcanvas-btn">
          <a
            href="http://activline.speedtestcustom.com/"
            target="_blank"
            rel="noreferrer"
          >
            SPEED TEST
          </a>
        </div>
        <div className="al-offcanvas-social">
          {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
            <a key={s} href="#" aria-label={s}>
              {s === "facebook"
                ? "f"
                : s === "twitter"
                  ? "𝕏"
                  : s === "instagram"
                    ? "📷"
                    : "in"}
            </a>
          ))}
        </div>
        <nav className="al-offcanvas-nav">
          {NAV_LINKS.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>

      {/* Back to top */}
      <div className={`al-back-top${showBackTop ? " show" : ""}`}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      </div>
    </>
  );
}
