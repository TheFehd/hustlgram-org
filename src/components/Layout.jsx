import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DARK, LIGHT } from "../constants/theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [dark, setDark] = useState(true);
  const rootRef = useRef(null);
  const colors = dark ? DARK : LIGHT;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = useCallback(() => {
    const root = rootRef.current;
    if (root) {
      root.classList.add("theme-transitioning");
      setTimeout(() => root.classList.remove("theme-transitioning"), 1000);
    }
    setDark((d) => !d);
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        background: colors.bg,
        color: colors.fg,
        minHeight: "100vh",
        fontFamily: "'Syne', sans-serif",
        overflowX: "hidden",
        "--accent": colors.accent,
      }}
    >
      <Navbar colors={colors} dark={dark} onToggleTheme={toggleTheme} />
      {typeof children === "function"
        ? children({ colors, dark })
        : children}
      <Footer colors={colors} />
    </div>
  );
}
