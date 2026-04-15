import { motion } from "framer-motion";
import { SITE, HERO } from "../constants/content";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease, delay } },
});

const wordReveal = (delay) => ({
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease, delay } },
});

export default function Hero({ colors }) {
  const c = colors;
  const words = HERO.headline.split(" ");

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
          background: `radial-gradient(circle, ${c.accent}06 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Tagline */}
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: 28, opacity: 0.35 }}
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
      </motion.div>

      {/* Headline — staggered word reveal */}
      <h1
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(36px, 9vw, 80px)",
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          margin: 0,
          maxWidth: 800,
          display: "flex",
          flexWrap: "wrap",
          gap: "0 0.3em",
        }}
      >
        {words.map((word, i) => (
          <span key={i} style={{ overflow: "hidden", display: "inline-flex" }}>
            <motion.span
              variants={wordReveal(0.3 + i * 0.06)}
              initial="hidden"
              animate="visible"
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp(0.8)}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: "'Syne'",
          fontSize: "clamp(14px, 2.5vw, 17px)",
          lineHeight: 1.75,
          color: c.fgMuted,
          maxWidth: 520,
          margin: "36px 0 0",
        }}
      >
        {HERO.subtitle}
        <br />
        {HERO.subtitleLine2}
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "clamp(20px, 5vw, 64px)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          style={{ display: "flex", alignItems: "center", gap: 12 }}
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
        </motion.div>
      </motion.div>
    </section>
  );
}
