import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { CITIES } from "@/lib/data/cities";
import { SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/standorte`;
const DESCRIPTION =
  "KBS ist an acht Standorten im Saarland vor Ort tätig: Saarbrücken, Saarlouis, Neunkirchen, Homburg, Merzig, St. Wendel, Völklingen und Dillingen. Kostenloses Erstgespräch, Termin binnen weniger Werktage.";

export const metadata: Metadata = {
  title: "Standorte im Saarland · KBS KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KBS Standorte im Saarland",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "de_DE",
    siteName: "KBS KI-Beratung Saar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function StandortePage() {
  return (
    <main className="relative">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "Standorte", href: "/standorte" }
        ]}
      />

      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">
              <MapPin size={12} strokeWidth={2.2} />
              Acht Städte im Saarland
            </span>
            <h1 className="mt-5 max-w-4xl text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[64px]">
              KBS vor Ort.
              <br />
              <span className="display italic text-ink-500">
                Im gesamten Saarland.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Von Saarbrücken bis St. Wendel, von Merzig bis Homburg: KBS ist
              wöchentlich in acht saarländischen Städten und ihrem Umland
              unterwegs. Anfahrt inklusive, Termine meist binnen 48 Stunden.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/standorte/${c.slug}`}
                  className="group card block h-full p-6 transition-all hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                      <MapPin
                        size={16}
                        strokeWidth={1.9}
                        className="text-accent-700"
                      />
                    </div>
                    <ArrowUpRight
                      size={15}
                      className="text-ink-300 transition-colors group-hover:text-ink-900"
                    />
                  </div>
                  <h2 className="mt-6 text-lg font-medium tracking-tight text-ink-900">
                    KI-Beratung {c.name}
                  </h2>
                  <p className="mt-1 text-[12.5px] font-medium uppercase tracking-[0.14em] text-ink-400">
                    {c.postalCodes[0]} · ca.{" "}
                    {c.populationApprox.toLocaleString("de-DE")} Einw.
                  </p>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-ink-500">
                    {c.economy.split(".")[0]}.
                  </p>
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
