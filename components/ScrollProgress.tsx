"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const ratio = max > 0 ? h.scrollTop / max : 0;
      setP(Math.max(0, Math.min(1, ratio)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-accent-400 via-accent-500 to-accent-700 shadow-[0_0_14px_rgba(88,192,56,0.65)]"
        style={{
          transform: `scaleX(${p})`,
          transition: "transform 80ms linear"
        }}
      />
    </div>
  );
}
