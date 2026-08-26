"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarClock, Phone, Mail, ExternalLink } from "lucide-react";
import { CALENDLY_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/config";
import Reveal from "../Reveal";

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

    // Stylesheet (once)
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    // Script (once). If already loaded, resolve immediately.
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

export default function BusinessCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    ensureCalendlyAssets()
      .then(() => {
        if (cancelled) return;
        if (!window.Calendly || !containerRef.current) {
          setState("error");
          return;
        }
        // Clear any previous mount, then inject
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current
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
    <section id="termin" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left column */}
          <Reveal>
            <div>
              <span className="chip">Kostenloses Kennenlerngespräch</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                30 Minuten,
                <br />
                <span className="display italic text-ink-500">
                  ehrliche Einschätzung.
                </span>
              </h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-500">
                Sie schildern Ihre Situation, wir bewerten Machbarkeit,
                Potenzial und ROI. Ohne Verkaufsdruck – und ohne dass Ihre IT
                oder Ihr Betriebsrat vorher zustimmen muss.
              </p>

              <div className="mt-8">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <CalendarClock size={16} strokeWidth={2.4} />
                  Termin in neuem Tab öffnen
                  <ExternalLink size={13} strokeWidth={2.2} />
                </a>
              </div>

              <div className="mt-10 space-y-3">
                <div className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5">
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500/10">
                    <CalendarClock size={16} strokeWidth={2} className="text-accent-700" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-medium text-ink-900">
                      Videocall, 30 Minuten
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                      Kein Vorwissen erforderlich, keine Präsentation zu erdulden.
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all hover:shadow-lift"
                >
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-900/10 bg-ink-50">
                    <Phone size={16} strokeWidth={2} className="text-ink-700" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-medium text-ink-900">
                      Lieber telefonisch?
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                      {PHONE_DISPLAY} · Mo – Fr, 09 – 18 Uhr
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=KBS%20Business%20Anfrage`}
                  className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all hover:shadow-lift"
                >
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-900/10 bg-ink-50">
                    <Mail size={16} strokeWidth={2} className="text-ink-700" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-medium text-ink-900">
                      Oder per E-Mail
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                      {EMAIL}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right column: Calendly widget (manually initialized) */}
          <div className="card-lift overflow-hidden p-3 sm:p-4">
            <div
              ref={containerRef}
              className="relative overflow-hidden rounded-3xl bg-ink-50"
              style={{ minWidth: "280px", height: "680px" }}
            >
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
          </div>
        </div>
      </div>
    </section>
  );
}
