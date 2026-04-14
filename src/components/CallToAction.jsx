import { useInView } from "../hooks/useInView";

export default function CallToAction({ colors, dark }) {
  const c = colors;
  const [ref, visible] = useInView(0.2);

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 64px)",
        borderTop: `1px solid ${c.border}`,
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50vw",
          height: "50vw",
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${c.accent}06 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(48px)",
          transition: "all 1s cubic-bezier(0.22,1,0.36,1)",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: c.fgDim,
            display: "block",
            marginBottom: 20,
          }}
        >
          Start a project
        </span>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(36px, 9vw, 72px)",
            fontWeight: 400,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            margin: "0 0 16px",
          }}
        >
          Let's build
          <br />
          something <em style={{ fontStyle: "italic", color: c.accent }}>great.</em>
        </h2>
        <p
          style={{
            fontFamily: "'Syne'",
            fontSize: 16,
            color: c.fgMuted,
            margin: "0 0 44px",
            lineHeight: 1.7,
          }}
        >
          Book a free strategy call. No pressure, just ideas.
        </p>
        <button
          style={{
            fontFamily: "'Syne'",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            padding: "16px 44px",
            borderRadius: 100,
            border: "none",
            background: c.accent,
            color: dark ? "#051F20" : "#ffffff",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow = `0 0 48px ${c.accent}44`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Book a free call
        </button>
      </div>
    </section>
  );
}
