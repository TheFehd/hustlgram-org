import { SITE, SOCIAL_LINKS } from "../constants/content";

export default function Footer({ colors }) {
  const c = colors;

  return (
    <footer
      style={{
        padding: "32px clamp(20px, 5vw, 64px)",
        borderTop: `1px solid ${c.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 10,
          color: c.fgDim,
          letterSpacing: 1,
        }}
      >
        {SITE.copyright}
      </span>
      <div style={{ display: "flex", gap: 20 }}>
        {SOCIAL_LINKS.map((label) => (
          <a
            key={label}
            className="hg-link"
            style={{
              fontFamily: "'Syne'",
              fontSize: 11,
              letterSpacing: 1,
              color: c.fgMuted,
              opacity: 0.5,
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
