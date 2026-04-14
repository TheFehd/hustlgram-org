import { useState, useEffect } from "react";
import { DARK, LIGHT } from "../constants/theme";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import StickyServices from "../components/StickyServices";
import Portfolio from "../components/Portfolio";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const colors = dark ? DARK : LIGHT;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        background: colors.bg,
        color: colors.fg,
        minHeight: "100vh",
        fontFamily: "'Syne', sans-serif",
        transition: "background 0.8s ease, color 0.5s ease",
        overflowX: "hidden",
        // CSS custom property for link underline color
        "--accent": colors.accent,
      }}
    >
      <Navbar
        colors={colors}
        scrollY={scrollY}
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
      />
      <Hero colors={colors} loaded={loaded} />
      <Marquee colors={colors} />
      <StickyServices colors={colors} />
      <Portfolio colors={colors} />
      <CallToAction colors={colors} dark={dark} />
      <Footer colors={colors} />
    </div>
  );
}
