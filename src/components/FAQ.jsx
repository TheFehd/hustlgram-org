import { useState } from "react";
import { motion } from "framer-motion";
import { FAQ_ITEMS } from "../constants/content";

const ease = [0.22, 1, 0.36, 1];

export default function FAQ({ colors }) {
  const c = colors;
  const [openIdx, setOpenIdx] = useState(-1);

  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  return (
    <motion.section
      
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease }}
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 64px)",
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 56 }}>
        <span
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: c.fgDim,
          }}
        >
          Common questions
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
          Everything you need to{" "}
          <em style={{ fontStyle: "italic", color: c.accent }}>know.</em>
        </h2>
      </div>

      {/* Accordion */}
      <div>
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              style={{
                borderBottom: `1px solid ${c.border}`,
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "24px 0",
                  minHeight: 48,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  color: c.fg,
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(15px, 2.5vw, 18px)",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                <span>{item.q}</span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 300,
                    color: c.accent,
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(13px, 2vw, 15px)",
                      lineHeight: 1.75,
                      color: c.fgMuted,
                      padding: "0 0 24px",
                      maxWidth: 560,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
