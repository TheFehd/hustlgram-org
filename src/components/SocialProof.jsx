import { motion } from "framer-motion";
import { SOCIAL_PROOF } from "../constants/content";

const ease = [0.22, 1, 0.36, 1];

export default function SocialProof({ colors }) {
  const c = colors;

  return (
    <section
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 64px)",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <div
        className="social-proof-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          textAlign: "center",
        }}
      >
        {SOCIAL_PROOF.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease, delay: i * 0.15 }}
          >
            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(48px, 10vw, 72px)",
                fontWeight: 400,
                color: c.accent,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {item.stat}
            </div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(13px, 2vw, 15px)",
                color: c.fgMuted,
                lineHeight: 1.5,
                marginTop: 12,
                whiteSpace: "pre-line",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 10,
                letterSpacing: 2,
                color: c.fgDim,
                textTransform: "uppercase",
                marginTop: 16,
              }}
            >
              {item.client}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
