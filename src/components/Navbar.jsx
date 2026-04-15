import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE } from "../constants/content";

const NAV_ITEMS = [
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
];

export default function Navbar({ colors, dark, onToggleTheme }) {
  const c = colors;
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 50));

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px clamp(16px, 4vw, 40px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? dark
            ? "rgba(5,31,32,0.85)"
            : "rgba(242,248,243,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? `1px solid ${c.border}`
          : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne'",
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: "-0.02em",
            color: c.fg,
          }}
        >
          {SITE.name}
        </span>
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: c.accent,
          }}
        />
      </Link>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div className="nav-links" style={{ display: "flex", gap: 20 }}>
          {NAV_ITEMS.map(({ label, path }) => {
            const active = pathname === path;
            return (
              <Link
                key={label}
                to={path}
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  opacity: active ? 1 : 0.5,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontFamily: "'Syne'",
                  color: c.fg,
                  textDecoration: "none",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.opacity = "0.8";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.opacity = "0.5";
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Theme toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={onToggleTheme}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: `1px solid ${c.border}`,
            background: "transparent",
            color: c.fgMuted,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
          }}
        >
          {dark ? "☀" : "☾"}
        </motion.button>

        {/* CTA button */}
        <Link to="/about" style={{ textDecoration: "none" }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "'Syne'",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              padding: "9px 20px",
              borderRadius: 100,
              border: "none",
              background: c.accent,
              color: dark ? "#051F20" : "#ffffff",
              cursor: "pointer",
            }}
          >
            Let's talk
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
