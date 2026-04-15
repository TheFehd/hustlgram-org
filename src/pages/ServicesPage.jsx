import { motion } from "framer-motion";
import { SERVICES } from "../constants/content";
import CallToAction from "../components/CallToAction";

const ease = [0.22, 1, 0.36, 1];

export default function ServicesPage({ colors, dark }) {
  const c = colors;

  return (
    <>
      {/* Page header */}
      <section
        style={{
          padding: "clamp(140px, 16vw, 200px) clamp(20px, 5vw, 64px) clamp(60px, 8vw, 100px)",
          maxWidth: 900,
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
            What we do
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
            We build systems that{" "}
            <em style={{ fontStyle: "italic", color: c.accent }}>grow businesses.</em>
          </h1>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(14px, 2.5vw, 17px)",
              lineHeight: 1.75,
              color: c.fgMuted,
              maxWidth: 520,
              marginTop: 28,
            }}
          >
            The website, the ads, the automation — those are just how. The real
            goal is revenue, clients, and time back in your day.
          </p>
        </motion.div>
      </section>

      {/* Individual service sections */}
      {SERVICES.map((service, i) => {
        const lines = service.title.split("\n");
        return (
          <section
            key={i}
            style={{
              padding: "clamp(80px, 10vw, 140px) clamp(20px, 5vw, 64px)",
              maxWidth: 900,
              margin: "0 auto",
              borderTop: `1px solid ${c.border}`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease }}
            >
              {/* Label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 12,
                    letterSpacing: 3,
                    color: c.accent,
                    textTransform: "uppercase",
                  }}
                >
                  {service.num}
                </span>
                <div
                  style={{
                    width: 32,
                    height: 1,
                    background: c.accent,
                    opacity: 0.4,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 12,
                    letterSpacing: 2,
                    color: c.fgMuted,
                    textTransform: "uppercase",
                  }}
                >
                  {service.label}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(48px, 12vw, 96px)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  margin: "0 0 32px",
                  letterSpacing: "-0.03em",
                }}
              >
                {lines.map((line, li) => (
                  <span key={li} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(14px, 2.2vw, 17px)",
                  lineHeight: 1.8,
                  color: c.fgMuted,
                  maxWidth: 560,
                  margin: "0 0 40px",
                }}
              >
                {service.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {service.tags.map((tag, ti) => (
                  <motion.span
                    key={ti}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease, delay: 0.1 + ti * 0.05 }}
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 10,
                      letterSpacing: 1,
                      padding: "8px 18px",
                      borderRadius: 100,
                      border: `1px solid ${c.border}`,
                      color: c.fgMuted,
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </section>
        );
      })}

      <CallToAction colors={colors} dark={dark} />
    </>
  );
}
