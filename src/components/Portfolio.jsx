import { motion } from "framer-motion";
import { PORTFOLIO } from "../constants/content";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease } },
};

const rowVariant = (i) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease, delay: 0.1 + i * 0.1 },
  },
});

export default function Portfolio({ colors }) {
  const c = colors;

  return (
    <motion.section
      id="work"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(20px, 5vw, 64px)",
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <motion.div variants={fadeUp} style={{ marginBottom: 56 }}>
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
          Results, not just{" "}
          <em style={{ fontStyle: "italic", color: c.accent }}>screenshots.</em>
        </h2>
      </motion.div>

      {/* Project list */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {PORTFOLIO.map((item, i) => (
          <motion.div
            key={i}
            className="p-row"
            variants={rowVariant(i)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "28px 0",
              borderBottom: `1px solid ${c.border}`,
              cursor: "pointer",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "clamp(12px, 3vw, 28px)",
                flex: 1,
                minWidth: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 11,
                  color: c.fgDim,
                  letterSpacing: 1,
                  minWidth: 28,
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ minWidth: 0 }}>
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
              {/* Result tag */}
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 10,
                  letterSpacing: 0.5,
                  padding: "5px 12px",
                  borderRadius: 100,
                  background: c.accent,
                  color: c.bg,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                }}
              >
                {item.result}
              </span>
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
                style={{ color: c.accent, flexShrink: 0 }}
              >
                <path
                  d="M5 15L15 5M15 5H8M15 5V12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all button */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
        }}
        style={{ marginTop: 40 }}
      >
        <motion.button
          whileHover={{ scale: 1.04, borderColor: c.accent }}
          whileTap={{ scale: 0.97 }}
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
          }}
        >
          View all work
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
