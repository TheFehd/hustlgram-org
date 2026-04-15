import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { SERVICES } from "../constants/content";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];
const N = SERVICES.length;
const CONTAINER_VH = 150 * N;

export default function StickyServices({ colors }) {
  const c = colors;
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const setCardRef = useCallback((el, i) => {
    cardRefs.current[i] = el;
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cards = cardRefs.current.filter(Boolean);
    if (cards.length !== N) return;

    const ctx = gsap.context(() => {
      gsap.set(cards[0], { opacity: 1, y: 0 });
      for (let i = 1; i < N; i++) {
        gsap.set(cards[i], { opacity: 0, y: 80 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: () => {
            let best = 0;
            let bestO = 0;
            cards.forEach((card, i) => {
              const o = Number(gsap.getProperty(card, "opacity"));
              if (o > bestO) {
                bestO = o;
                best = i;
              }
            });
            setActiveIdx(best);
          },
        },
      });

      // Hold first service
      tl.to({}, { duration: 1.2 });

      for (let i = 0; i < N - 1; i++) {
        tl.to(cards[i], {
          opacity: 0,
          y: -60,
          duration: 0.5,
          ease: "power2.inOut",
        });
        tl.fromTo(
          cards[i + 1],
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "<0.2"
        );
        // Hold
        tl.to({}, { duration: 1.2 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  if (isMobile) {
    return <MobileFallback colors={c} />;
  }

  return (
    <div
      id="services"
      ref={containerRef}
      style={{ height: `${CONTAINER_VH}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Progress dots */}
        <div
          style={{
            position: "absolute",
            right: "clamp(16px, 4vw, 48px)",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            zIndex: 2,
          }}
        >
          {SERVICES.map((_, i) => (
            <div key={i}>
              <div
                style={{
                  width: i === activeIdx ? 24 : 8,
                  height: 3,
                  borderRadius: 2,
                  background: i === activeIdx ? c.accent : c.fgDim,
                  opacity: i === activeIdx ? 1 : 0.3,
                  transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Service cards stacked */}
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={i}
            index={i}
            service={service}
            colors={c}
            setRef={setCardRef}
          />
        ))}

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: activeIdx < N - 1 ? 0.15 : 0,
            transition: "opacity 0.4s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: 1,
              height: 32,
              background: `linear-gradient(${c.fg}00, ${c.fg})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ index, service, colors, setRef }) {
  const c = colors;
  const lines = service.title.split("\n");

  return (
    <div
      ref={(el) => setRef(el, index)}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      {/* Background number */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(200px, 40vw, 400px)",
          fontWeight: 400,
          color: c.fgDim,
          opacity: 0.07,
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        {service.num}
      </div>

      <div style={{ maxWidth: 800, width: "100%" }}>
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
              fontSize: 11,
              letterSpacing: 3,
              color: c.accent,
              textTransform: "uppercase",
            }}
          >
            {service.num}
          </span>
          <div style={{ width: 32, height: 1, background: c.accent, opacity: 0.4 }} />
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 11,
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
            color: c.fg,
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
            lineHeight: 1.75,
            color: c.fgMuted,
            maxWidth: 520,
            margin: "0 0 36px",
          }}
        >
          {service.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {service.tags.map((tag, ti) => (
            <span
              key={ti}
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 10,
                letterSpacing: 1,
                padding: "7px 16px",
                borderRadius: 100,
                border: `1px solid ${c.border}`,
                color: c.fgMuted,
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileFallback({ colors }) {
  const c = colors;

  return (
    <div id="services">
      {SERVICES.map((service, i) => {
        const lines = service.title.split("\n");
        return (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px 20px",
              position: "relative",
              borderBottom:
                i < N - 1 ? `1px solid ${c.border}` : "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(150px, 35vw, 300px)",
                fontWeight: 400,
                color: c.fgDim,
                opacity: 0.07,
                pointerEvents: "none",
                lineHeight: 1,
              }}
            >
              {service.num}
            </div>

            <div style={{ maxWidth: 600, width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 11,
                    letterSpacing: 3,
                    color: c.accent,
                    textTransform: "uppercase",
                  }}
                >
                  {service.num}
                </span>
                <div
                  style={{ width: 32, height: 1, background: c.accent, opacity: 0.4 }}
                />
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 11,
                    letterSpacing: 2,
                    color: c.fgMuted,
                    textTransform: "uppercase",
                  }}
                >
                  {service.label}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(40px, 10vw, 72px)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  margin: "0 0 24px",
                  letterSpacing: "-0.03em",
                  color: c.fg,
                }}
              >
                {lines.map((line, li) => (
                  <span key={li} style={{ display: "block" }}>{line}</span>
                ))}
              </h2>

              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: c.fgMuted,
                  margin: "0 0 28px",
                }}
              >
                {service.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {service.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 10,
                      letterSpacing: 1,
                      padding: "7px 14px",
                      borderRadius: 100,
                      border: `1px solid ${c.border}`,
                      color: c.fgMuted,
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
