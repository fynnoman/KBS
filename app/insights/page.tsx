import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { INSIGHTS } from "@/lib/data/insights";
import { SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/insights`;
const DESCRIPTION =
  "Praktische, ehrliche Artikel rund um KI im Saarland und im Mittelstand. Von ChatGPT-Grundlagen bis zu lokaler KI und EU AI Act – geschrieben von jemandem, der KI selbst baut.";

export const metadata: Metadata = {
  title: "Insights · KBS – KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KBS Insights",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "de_DE",
    siteName: "KBS – KI-Beratung Saar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function InsightsIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${PAGE_URL}#blog`,
    name: "KBS Insights",
    description: DESCRIPTION,
    url: PAGE_URL,
    publisher: { "@id": `${SITE_URL}/#business` },
    blogPost: INSIGHTS.map((i) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/insights/${i.slug}#article`,
      headline: i.title,
      datePublished: i.publishedAt,
      url: `${SITE_URL}/insights/${i.slug}`
    }))
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "Insights", href: "/insights" }
        ]}
      />

      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">Praxisartikel & Grundlagen</span>
            <h1 className="mt-5 max-w-4xl text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[64px]">
              KBS Insights.
              <br />
              <span className="display italic text-ink-500">
                Was wirklich funktioniert.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Keine Buzzword-Artikel. Nur Themen, zu denen wir konkret Position
              beziehen können – aus eigener Umsetzung.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {INSIGHTS.map((i, idx) => (
              <Reveal key={i.slug} delay={idx * 0.05}>
                <Link
                  href={`/insights/${i.slug}`}
                  className="group card block h-full p-7 transition-all hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                      {i.category}
                    </p>
                    <p className="inline-flex items-center gap-1.5 text-[11.5px] text-ink-400">
                      <Clock size={11} strokeWidth={2} />
                      {i.readingMinutes} Min.
                    </p>
                  </div>
                  <h2 className="mt-4 text-2xl leading-tight tracking-tight text-ink-900">
                    {i.title}
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {i.subtitle}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                    Lesen
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
