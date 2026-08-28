"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cookie, ShieldCheck, X } from "lucide-react";

const STORAGE_KEY = "kbs-cookie-consent";
type ConsentValue = "all" | "essential";

function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "all" || v === "essential") return v;
  } catch {
    // ignore
  }
  return null;
}

function writeConsent(v: ConsentValue) {
  try {
    window.localStorage.setItem(STORAGE_KEY, v);
    window.localStorage.setItem(`${STORAGE_KEY}-at`, new Date().toISOString());
  } catch {
    // ignore
  }
}

export default function CookieBanner() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (readConsent() === null) setVisible(true);
    }, 350);
    return () => clearTimeout(t);
  }, []);

  const handle = (v: ConsentValue) => {
    writeConsent(v);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-Hinweis"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4 md:px-6 md:pb-6"
        >
          <div className="pointer-events-auto flex w-full max-w-3xl flex-col gap-5 rounded-3xl border border-ink-900/10 bg-white p-5 shadow-lift md:flex-row md:items-center md:gap-6 md:p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-accent-500/25 bg-accent-500/10">
                <Cookie
                  size={18}
                  strokeWidth={1.9}
                  className="text-accent-700"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-semibold text-ink-900">
                    Cookies & Datenschutz
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full border border-accent-500/25 bg-accent-500/10 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-accent-800">
                    <ShieldCheck size={10} strokeWidth={2.4} />
                    DSGVO
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500">
                  Wir nutzen nur technisch notwendige Cookies für den Betrieb
                  dieser Website. Für optionale Analyse können Sie Ihre
                  Zustimmung jederzeit widerrufen.{" "}
                  <Link
                    href="/datenschutz"
                    className="font-medium text-ink-700 underline decoration-ink-300 underline-offset-2 hover:text-ink-900"
                  >
                    Datenschutz­erklärung
                  </Link>
                </p>
              </div>
              <button
                type="button"
                onClick={() => handle("essential")}
                aria-label="Schließen und nur essenzielle Cookies erlauben"
                className="hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-400 transition-colors hover:text-ink-900 md:inline-flex"
              >
                <X size={14} strokeWidth={2.2} />
              </button>
            </div>

            <div className="flex flex-col gap-2 md:flex-shrink-0 md:flex-row md:items-center">
              <button
                type="button"
                onClick={() => handle("essential")}
                className="inline-flex items-center justify-center rounded-full border border-ink-900/10 bg-white px-4 py-2.5 text-[13px] font-medium text-ink-700 transition-all hover:border-ink-900/25 hover:text-ink-900"
              >
                Nur essenzielle
              </button>
              <button
                type="button"
                onClick={() => handle("all")}
                className="inline-flex items-center justify-center rounded-full bg-ink-900 px-4 py-2.5 text-[13px] font-medium text-white transition-all hover:-translate-y-0.5"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
