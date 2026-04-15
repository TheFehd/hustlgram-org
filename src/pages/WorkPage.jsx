import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio";
import SocialProof from "../components/SocialProof";
import CallToAction from "../components/CallToAction";

const ease = [0.22, 1, 0.36, 1];

export default function WorkPage({ colors, dark }) {
  const c = colors;

  return (
    <>
      {/* Page header */}
      <section
        style={{
          padding: "clamp(140px, 16vw, 200px) clamp(20px, 5vw, 64px) clamp(40px, 6vw, 80px)",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
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
            Our work
          </span>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(40px, 10vw, 80px)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              margin: "16px 0 0",
              lineHeight: 1.05,
            }}
          >
            Results, not just{" "}
            <em style={{ fontStyle: "italic", color: c.accent }}>screenshots.</em>
          </h1>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(14px, 2.5vw, 17px)",
              lineHeight: 1.75,
              color: c.fgMuted,
              maxWidth: 480,
              marginTop: 28,
            }}
          >
            Every project starts with a problem and ends with a measurable
            outcome. Here's what we've built.
          </p>
        </motion.div>
      </section>

      <SocialProof colors={colors} />
      <Portfolio colors={colors} />
      <CallToAction colors={colors} dark={dark} />
    </>
  );
}
