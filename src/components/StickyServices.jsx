import { useRef } from "react";
import { useStickyProgress } from "../hooks/useStickyProgress";
import { SERVICES } from "../constants/content";

export default function StickyServices({ colors }) {
  const c = colors;
  const containerRef = useRef(null);
  const progress = useStickyProgress(containerRef);

  const n = SERVICES.length;
  const seg = 1 / n;
  const idx = Math.min(Math.floor(progress * n), n - 1);
  const local = (progress - idx * seg) / seg;

  const enter = Math.min(local / 0.25, 1);
  const exit = local > 0.75 ? (local - 0.75) / 0.25 : 0;
  const opacity = local <= 0.25 ? enter : local <= 0.75 ? 1 : 1 - exit;
  const y = local <= 0.25 ? 80 * (1 - enter) : local <= 0.75 ? 0 : -60 * exit;

  const service = SERVICES[idx];
  const lines = service.title.split("\n");

  return (
    <div ref={containerRef} style={{ height: `${n * 160}vh`, position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: "0 24px",
        }}
      >
        {/* Background number */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${0.9 + 0.1 * opacity})`,
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(200px, 40vw, 400px)",
            fontWeight: 400,
            color: c.fgDim,
            opacity: 0.07,
            pointerEvents: "none",
            transition: "none",
            lineHeight: 1,
          }}
        >
          {service.num}
        </div>

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
          }}
        >
          {SERVICES.map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: i === idx ? 24 : 8,
                  height: 3,
                  borderRadius: 2,
                  background: i === idx ? c.accent : c.fgDim,
                  opacity: i === idx ? 1 : 0.3,
                  transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            maxWidth: 800,
            width: "100%",
            opacity,
            transform: `translateY(${y}px)`,
            willChange: "transform, opacity",
          }}
        >
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
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
              fontSize: "clamp(40px, 9vw, 80px)",
              fontWeight: 400,
              lineHeight: 1.05,
              margin: "0 0 32px",
              letterSpacing: "-0.03em",
              color: c.fg,
            }}
          >
            {lines.map((line, i) => (
              <span key={`${idx}-${i}`} style={{ display: "block" }}>
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
              maxWidth: 480,
              margin: "0 0 36px",
            }}
          >
            {service.desc}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {service.tags.map((tag, i) => (
              <span
                key={`${idx}-tag-${i}`}
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

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: progress < 0.85 ? 0.15 : 0,
            transition: "opacity 0.4s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
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
