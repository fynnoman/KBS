"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the viewport is below the given breakpoint.
 * Default: 768px (Tailwind's md).
 *
 * Server render returns false so SSR HTML matches desktop. The correct
 * value is applied on hydration.
 */
export default function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [breakpoint]);

  return isMobile;
}
