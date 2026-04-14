import { useInView } from "../hooks/useInView";
import { PORTFOLIO } from "../constants/content";

export default function Portfolio({ colors }) {
  const c = colors;
  const [ref, visible] = useInView(0.1);

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(20px, 5vw, 64px)",
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div
        style={{
          marginBottom: 56,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <span
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: c.fgDim,
          }}
        >
          Selected work
        </span>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(36px, 8vw, 64px)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            margin: "12px 0 0",
            lineHeight: 1.05,
          }}
        >
          Recent <em style={{ fontStyle: "italic", color: c.accent }}>projects.</em>
        </h2>
      </div>

      {/* Project list */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {PORTFOLIO.map((item, i) => (
          <div
            key={i}
            className="p-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "28px 0",
              borderBottom: `1px solid ${c.border}`,
              cursor: "pointer",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "clamp(12px, 3vw, 28px)",
                flex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 11,
                  color: c.fgDim,
                  letterSpacing: 1,
                  minWidth: 28,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(22px, 5vw, 36px)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {item.name}
                </h3>
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 11,
                    color: c.fgDim,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {item.type}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span
                className="desktop-only"
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 11,
                  color: c.fgDim,
                }}
              >
                {item.year}
              </span>
              <svg
                className="p-arr"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{ color: c.accent }}
              >
                <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* View all button */}
      <div
        style={{
          marginTop: 40,
          opacity: visible ? 1 : 0,
          transition: "all 0.6s ease 0.5s",
        }}
      >
        <button
          style={{
            fontFamily: "'Syne'",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            padding: "12px 28px",
            borderRadius: 100,
            border: `1px solid ${c.border}`,
            background: "transparent",
            color: c.fg,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = c.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = c.border)}
        >
          View all work
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>
    </section>
  );
}
