import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "../constants/content";

export default function Marquee({ colors }) {
  const c = colors;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "48px 0",
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "marquee 30s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[0, 1].map((r) => (
          <div key={r} style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {MARQUEE_ITEMS.map((text, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(20px, 4vw, 32px)",
                  fontWeight: 400,
                  fontStyle: i % 2 === 0 ? "normal" : "italic",
                  color: i % 2 === 0 ? c.fg : c.fgMuted,
                  padding: "0 clamp(16px, 3vw, 40px)",
                }}
              >
                {text}
                <span
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: c.accent,
                    marginLeft: "clamp(16px, 3vw, 40px)",
                    verticalAlign: "middle",
                    opacity: 0.4,
                  }}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
