import { useState, useEffect, useRef } from "react";

/**
 * Detects when an element enters the viewport.
 * @param {number} threshold - IntersectionObserver threshold (0–1)
 * @returns {[React.RefObject, boolean]} - ref to attach, visibility flag
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
