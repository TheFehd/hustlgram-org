import { SITE, HERO } from "../constants/content";

export default function Hero({ colors, loaded }) {
  const c = colors;

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px clamp(20px, 5vw, 64px) 60px",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${c.accent}08 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          opacity: loaded ? 0.35 : 0,
          transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s",
          marginBottom: 28,
        }}
      >
        <span
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: c.fgMuted,
          }}
        >
          {SITE.tagline}
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(48px, 12vw, 110px)",
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          margin: 0,
          maxWidth: 900,
        }}
      >
        <span style={{ display: "block", overflow: "hidden" }}>
          <span
            style={{
              display: "block",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(100%)",
              transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.3s",
            }}
          >
            {HERO.headlineTop}
          </span>
        </span>
        <span style={{ display: "block", overflow: "hidden" }}>
          <span
            style={{
              display: "inline-block",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(100%)",
              transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.45s",
            }}
          >
            {HERO.headlineBottom}{" "}
          </span>
          <em
            style={{
              fontStyle: "italic",
              display: "inline-block",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(100%)",
              transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.55s",
              color: c.accent,
            }}
          >
            {HERO.headlineAccent}
          </em>
        </span>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "'Syne'",
          fontSize: "clamp(14px, 2.5vw, 17px)",
          lineHeight: 1.75,
          color: c.fgMuted,
          maxWidth: 400,
          margin: "36px 0 0",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.7s",
        }}
      >
        {HERO.subtitle}
        <br />
        {HERO.subtitleLine2}
      </p>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "clamp(20px, 5vw, 64px)",
          display: "flex",
          alignItems: "center",
          gap: 12,
          opacity: loaded ? 0.25 : 0,
          transition: "all 0.8s ease 1.2s",
          animation: loaded ? "float 3s ease-in-out infinite 2s" : "none",
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: `linear-gradient(to bottom, ${c.fg}, transparent)`,
          }}
        />
        <span
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 9,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: c.fgMuted,
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
