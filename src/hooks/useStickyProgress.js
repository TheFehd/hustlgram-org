import { useState, useEffect } from "react";

/**
 * Tracks scroll progress through a tall sticky-scroll container.
 * Returns a value from 0 to 1 representing how far through the container the user has scrolled.
 * @param {React.RefObject} ref - Ref to the tall container element
 * @returns {number} progress (0–1)
 */
export function useStickyProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return setProgress(0);
      setProgress(Math.max(0, Math.min(1, -rect.top / total)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return progress;
}
