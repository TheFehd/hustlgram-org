import { motion } from "framer-motion";
import { PROCESS } from "../constants/content";

const ease = [0.22, 1, 0.36, 1];

export default function HowItWorks({ colors }) {
  const c = colors;

  return (
    <section
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 64px)",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease }}
        style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}
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
          How it works
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
          Three steps to{" "}
          <em style={{ fontStyle: "italic", color: c.accent }}>growth.</em>
        </h2>
      </motion.div>

      {/* Steps */}
      <div
        className="process-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "clamp(32px, 4vw, 48px)",
          position: "relative",
        }}
      >
        {/* Connecting line — desktop only */}
        <div
          className="desktop-only"
          style={{
            position: "absolute",
            top: 28,
            left: "16.67%",
            right: "16.67%",
            height: 1,
            background: c.border,
            zIndex: 0,
          }}
        />

        {PROCESS.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease, delay: i * 0.15 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 12,
                letterSpacing: 3,
                color: c.accent,
                marginBottom: 16,
              }}
            >
              {step.num}
            </div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(28px, 5vw, 36px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                margin: "0 0 12px",
                color: c.fg,
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(13px, 2vw, 15px)",
                lineHeight: 1.7,
                color: c.fgMuted,
                maxWidth: 280,
              }}
            >
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
