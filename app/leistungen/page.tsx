import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/data/services";
import { SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/leistungen`;
const DESCRIPTION =
  "Fünf klare Leistungen von KBS – KI-Beratung Saar: KI-Hilfe für Privatpersonen, KI-Check, KI-Workshop, KI-Einrichtung und KI-Sprechstunde. Kostenloses Erstgespräch, Anfahrt im Saarland inklusive.";

export const metadata: Metadata = {
  title: "Leistungen · KBS – KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KBS Leistungen",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "de_DE",
    siteName: "KBS – KI-Beratung Saar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function LeistungenPage() {
  return (
    <main className="relative">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "Leistungen", href: "/leistungen" }
        ]}
      />

      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">Alle Leistungen im Überblick</span>
            <h1 className="mt-5 max-w-4xl text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[64px]">
              Fünf klare Wege,
              <br />
              <span className="display italic text-ink-500">
                mit KBS zu starten.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Von der ein-Termin-Hilfe für Privatpersonen bis zur laufenden
              Sprechstunde für Unternehmen. Jede Leistung ist einzeln buchbar,
              alle lassen sich kombinieren – Sie entscheiden im Erstgespräch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/leistungen/${s.slug}`}
                  className="group card block h-full p-7 transition-all hover:shadow-lift"
                >
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                    {s.tag}
                  </p>
                  <h2 className="mt-4 text-2xl leading-tight tracking-tight text-ink-900">
                    {s.name}
                  </h2>
                  <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500">
                    {s.intro.slice(0, 160)}…
                  </p>
                  <p className="mt-5 text-[12.5px] font-medium text-ink-400">
                    {s.duration}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                    Details
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
