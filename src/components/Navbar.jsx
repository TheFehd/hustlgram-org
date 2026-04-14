import { SITE, NAV_LINKS } from "../constants/content";

export default function Navbar({ colors, scrollY, dark, onToggleTheme }) {
  const c = colors;
  const scrolled = scrollY > 50;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px clamp(16px, 4vw, 40px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? dark
            ? "rgba(5,31,32,0.85)"
            : "rgba(243,249,244,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? `1px solid ${c.border}`
          : "1px solid transparent",
        transition: "all 0.5s",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span
          style={{
            fontFamily: "'Syne'",
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: "-0.02em",
            color: c.fg,
          }}
        >
          {SITE.name}
        </span>
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: c.accent,
          }}
        />
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div className="nav-links" style={{ display: "flex", gap: 20 }}>
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              className="hg-link"
              style={{
                fontSize: 12,
                letterSpacing: 1,
                opacity: 0.5,
                cursor: "pointer",
                textTransform: "uppercase",
                fontFamily: "'Syne'",
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: `1px solid ${c.border}`,
            background: "transparent",
            color: c.fgMuted,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            transition: "all 0.3s",
          }}
        >
          {dark ? "☀" : "☾"}
        </button>

        {/* CTA button */}
        <button
          style={{
            fontFamily: "'Syne'",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            padding: "9px 20px",
            borderRadius: 100,
            border: "none",
            background: c.accent,
            color: dark ? "#051F20" : "#ffffff",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
        >
          Let's talk
        </button>
      </div>
    </nav>
  );
}
