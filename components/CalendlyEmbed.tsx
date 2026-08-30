"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarClock } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

function ensureCalendlyAssets(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("not in browser"));
      return;
    }

    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    if (window.Calendly) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_JS}"]`
    );
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener(
          "error",
          () => reject(new Error("Calendly script failed to load")),
          { once: true }
        );
      }
      return;
    }
    const s = document.createElement("script");
    s.src = CALENDLY_JS;
    s.async = true;
    s.onload = () => {
      s.dataset.loaded = "true";
      resolve();
    };
    s.onerror = () => reject(new Error("Calendly script failed to load"));
    document.head.appendChild(s);
  });
}

export default function CalendlyEmbed({
  className = ""
}: {
  /** Deprecated, height is now handled by responsive Tailwind classes. */
  height?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    ensureCalendlyAssets()
      .then(() => {
        if (cancelled) return;
        if (!window.Calendly || !ref.current) {
          setState("error");
          return;
        }
        ref.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: ref.current
        });
        setState("ready");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className={`relative h-[540px] overflow-hidden rounded-3xl bg-ink-50 md:h-[680px] ${className}`}
      style={{ minWidth: "280px" }}
    >
      <div ref={ref} className="h-full w-full" />
      {state !== "ready" && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          {state === "loading" ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-ink-300 border-t-ink-700" />
              <p className="text-[13px] font-medium text-ink-400">
                Kalender lädt …
              </p>
            </>
          ) : (
            <>
              <p className="text-[13px] font-medium text-ink-700">
                Kalender konnte nicht geladen werden.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2 text-[13px] font-medium text-white"
              >
                <CalendarClock size={14} strokeWidth={2.2} />
                Termin in neuem Tab öffnen
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
