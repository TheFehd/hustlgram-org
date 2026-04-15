import { motion } from "framer-motion";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";

const ease = [0.22, 1, 0.36, 1];

export default function AboutPage({ colors, dark }) {
  const c = colors;

  return (
    <>
      {/* Page header */}
      <section
        style={{
          padding: "clamp(140px, 16vw, 200px) clamp(20px, 5vw, 64px) clamp(60px, 8vw, 100px)",
          maxWidth: 800,
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
            About us
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
            We help businesses{" "}
            <em style={{ fontStyle: "italic", color: c.accent }}>grow.</em>
          </h1>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(14px, 2.5vw, 17px)",
              lineHeight: 1.8,
              color: c.fgMuted,
              maxWidth: 540,
              marginTop: 28,
            }}
          >
            Hustlgram is a digital growth agency. We build the website that
            converts, run the ads that bring clients, and automate the work
            that eats your time. No fluff. No long contracts. Just measurable
            results.
          </p>
        </motion.div>
      </section>

      {/* Values / approach */}
      <section
        style={{
          padding: "0 clamp(20px, 5vw, 64px) clamp(60px, 8vw, 100px)",
          maxWidth: 800,
          margin: "0 auto",
          borderTop: `1px solid ${c.border}`,
          paddingTop: "clamp(60px, 8vw, 100px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(32px, 5vw, 56px)",
          }}
        >
          {[
            {
              title: "Results first.",
              text: "We don't sell hours or decks. We sell outcomes — more traffic, more clients, more time back in your day.",
            },
            {
              title: "Radical transparency.",
              text: "You see every dollar spent, every metric tracked, every decision made. No black boxes, no surprises.",
            },
            {
              title: "Built to compound.",
              text: "Every system we build gets smarter over time. Better targeting, better conversion, better automation — month over month.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(22px, 4vw, 28px)",
                  fontWeight: 400,
                  margin: "0 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(13px, 2vw, 15px)",
                  lineHeight: 1.7,
                  color: c.fgMuted,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      <HowItWorks colors={colors} />
      <FAQ colors={colors} />
      <CallToAction colors={colors} dark={dark} />
    </>
  );
}
