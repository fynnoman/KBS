import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Globe,
  Zap,
  Github,
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import KIStamp from "@/components/KIStamp";
import { SITE_URL } from "@/lib/config";
import { INSIGHTS } from "@/lib/data/insights";

const PAGE_URL = `${SITE_URL}/ueber/fynn-schulz`;
const DESCRIPTION =
  "Fynn Schulz ist Gründer von KBS – KI-Beratung Saar. Er führt Fylu Marketing (Webdesign & SEO, Saarlouis), entwickelt die SaaS-Plattform Taskey für Gebäudereinigungsbetriebe und arbeitet täglich mehr als zehn Stunden aktiv mit KI-Werkzeugen.";

export const metadata: Metadata = {
  title: "Fynn Schulz · Gründer KBS – KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Fynn Schulz – Gründer KBS",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "profile",
    locale: "de_DE",
    siteName: "KBS – KI-Beratung Saar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function AuthorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": PAGE_URL,
        url: PAGE_URL,
        mainEntity: { "@id": `${SITE_URL}/#person` },
        about: { "@id": `${SITE_URL}/#person` }
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Fynn Schulz",
        givenName: "Fynn",
        familyName: "Schulz",
        jobTitle: "Gründer und KI-Berater",
        description: DESCRIPTION,
        image: `${SITE_URL}/fynn-portrait.jpg`,
        url: PAGE_URL,
        worksFor: { "@id": `${SITE_URL}/#business` },
        knowsAbout: [
          "Künstliche Intelligenz",
          "ChatGPT und OpenAI-Modelle",
          "Anthropic Claude",
          "Google Gemini",
          "Microsoft Copilot",
          "Prompt Engineering",
          "Retrieval-Augmented Generation (RAG)",
          "SwiftUI und iOS-Entwicklung",
          "Next.js und React",
          "TypeScript",
          "Vercel-Deployment",
          "SaaS-Entwicklung",
          "Webdesign und SEO",
          "Google Ads",
          "DSGVO und EU AI Act",
          "On-Premise LLM (Llama, Qwen, Mistral)"
        ],
        knowsLanguage: ["Deutsch", "Englisch"],
        alumniOf: {
          "@type": "Place",
          name: "Saarland, Deutschland"
        },
        sameAs: [
          "https://github.com/fynnoman",
          "https://fylumarketing.de",
          "https://taskeyapp.com"
        ]
      }
    ]
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
          { label: "Über", href: "/ueber/fynn-schulz" },
          { label: "Fynn Schulz", href: "/ueber/fynn-schulz" }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl border border-ink-900/8 bg-ink-100 shadow-lift">
                <KIStamp />
                <Image
                  src="/fynn-portrait.jpg"
                  alt="Fynn Schulz – Gründer von KBS"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[68%_center]"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,14,20,0) 55%, rgba(10,14,20,0.5) 100%)"
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-white/75">
                    Gründer · Aktiver KI-Anwender
                  </p>
                  <p className="mt-1 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    Fynn Schulz
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="chip">Über KBS</span>
                <h1 className="mt-5 text-[42px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                  Ein Berater,
                  <br />
                  <span className="display italic text-ink-500">
                    der KI täglich selbst einsetzt.
                  </span>
                </h1>
                <div className="mt-8 space-y-5 text-[16.5px] leading-relaxed text-ink-600">
                  <p>
                    Ich bin Fynn Schulz, Gründer von KBS. Meine Aufgabe: KI im
                    Saarland verständlich machen und praktisch einsetzen – für
                    Privatpersonen, Selbstständige, kleine Unternehmen und den
                    Mittelstand.
                  </p>
                  <p>
                    Der Unterschied zu klassischen Beratern: Ich nutze KI
                    täglich – im Durchschnitt mehr als zehn Stunden pro Tag.
                    Für Code, für Content, für Recherche, für Automatisierung.
                    Wer bei KBS anruft, spricht mit jemandem, der die Werkzeuge
                    nicht nur erklärt, sondern jeden Tag mit ihnen arbeitet.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <a
                    href="https://fylumarketing.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip transition-colors hover:bg-ink-50"
                  >
                    <ExternalLink size={11} strokeWidth={2} />
                    fylumarketing.de
                  </a>
                  <a
                    href="https://taskeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip transition-colors hover:bg-ink-50"
                  >
                    <ExternalLink size={11} strokeWidth={2} />
                    taskeyapp.com
                  </a>
                  <a
                    href="https://github.com/fynnoman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip transition-colors hover:bg-ink-50"
                  >
                    <Github size={12} strokeWidth={2} />
                    github.com/fynnoman
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <span className="chip">Eigene Projekte</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Was ich baue,
                <br />
                <span className="display italic text-ink-500">
                  wenn ich nicht berate.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="card h-full p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/10">
                  <Globe size={17} strokeWidth={1.9} className="text-accent-700" />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-ink-900">
                  Fylu Marketing
                </h3>
                <p className="mt-1 text-[11.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                  Webdesign · SEO · Google Ads · Saarlouis
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                  Mein Marketing-Studio in Saarlouis, gegründet 2024. Wir
                  bauen konversionsstarke Websites für Handwerk, Gastronomie,
                  Kanzleien und Praxen im Saarland und darüber hinaus – inklusive
                  SEO, Google Ads und individueller Software.
                </p>
                <a
                  href="https://fylumarketing.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 hover:text-ink-900"
                >
                  fylumarketing.de
                  <ExternalLink size={13} strokeWidth={2.2} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="card h-full p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/10">
                  <Layers size={17} strokeWidth={1.9} className="text-accent-700" />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-ink-900">
                  Taskey
                </h3>
                <p className="mt-1 text-[11.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                  SaaS für Gebäudereiniger · iOS + Web
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                  SaaS-Plattform für Gebäudereinigungsbetriebe im DACH-Raum.
                  NFC-Zeiterfassung, Auftragskoordination, Kundenkommunikation
                  und DATEV-Export – ein System statt fünf, damit die Chefs
                  das Telefon wieder weglegen können. iOS-App und Web-Dashboard.
                </p>
                <a
                  href="https://taskeyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 hover:text-ink-900"
                >
                  taskeyapp.com
                  <ExternalLink size={13} strokeWidth={2.2} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card h-full p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/10">
                  <Zap size={17} strokeWidth={1.9} className="text-accent-700" />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-ink-900">
                  40+ Live-Websites
                </h3>
                <p className="mt-1 text-[11.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                  Next.js · TypeScript · Vercel
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                  Über 40 produktive Deployments für Handwerksbetriebe,
                  Kanzleien, Praxen, Agenturen und Beratungsunternehmen in
                  Deutschland. Alle DSGVO-konform, mehrsprachig wo nötig,
                  performance- und SEO-optimiert.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KI-Nutzung Callout */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-4xl border border-ink-900/10 bg-ink-900 p-8 text-white sm:p-12 md:p-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                Meine tatsächliche KI-Nutzung
              </p>
              <h2 className="mt-4 text-3xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Mehr als
                <br />
                <span className="display italic text-accent-400">
                  zehn Stunden pro Tag.
                </span>
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                    Modelle
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                    GPT-5, Claude Opus, Gemini, Perplexity, lokale
                    Llama-/Qwen-Modelle – alle im Vergleich und produktiv.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                    Einsatzbereiche
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                    Code, Content, Recherche, Automatisierung, SEO-Analyse,
                    Kundenkommunikation und Prompt-Engineering.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                    Konsequenz für Sie
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                    Sie bekommen keine Buch-Weisheiten, sondern erprobte
                    Praxis – was tatsächlich funktioniert, was nicht, und warum.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <span className="chip">Womit ich täglich arbeite</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                Werkzeuge, Sprachen, Modelle.
              </h2>
            </div>
          </Reveal>
          <div className="card p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  KI und LLMs
                </p>
                <ul className="mt-4 space-y-2 text-[14px] text-ink-700">
                  <li>OpenAI (GPT-4o, GPT-5-Familie)</li>
                  <li>Anthropic (Claude 3.7, Claude Opus)</li>
                  <li>Google Gemini · Microsoft Copilot</li>
                  <li>Perplexity für Recherche</li>
                  <li>Llama · Qwen · Mistral (lokal)</li>
                  <li>Prompt Engineering und RAG</li>
                </ul>
              </div>
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Sprachen und Frameworks
                </p>
                <ul className="mt-4 space-y-2 text-[14px] text-ink-700">
                  <li>TypeScript · Next.js · React</li>
                  <li>Swift · SwiftUI</li>
                  <li>Node.js · Prisma ORM</li>
                  <li>HTML/CSS · Tailwind</li>
                  <li>Python für Automation</li>
                </ul>
              </div>
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Infrastruktur und Marketing
                </p>
                <ul className="mt-4 space-y-2 text-[14px] text-ink-700">
                  <li>Vercel · Cloudflare</li>
                  <li>Mac Mini als lokaler KI-Host</li>
                  <li>SQLite · Postgres</li>
                  <li>Google Ads · SEO</li>
                  <li>DSGVO- und EU-AI-Act-konform</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <span className="chip">Artikel von mir</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Was ich aufschreibe,
                <br />
                <span className="display italic text-ink-500">
                  bevor ich es empfehle.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {INSIGHTS.map((i, idx) => (
              <Reveal key={i.slug} delay={idx * 0.05}>
                <Link
                  href={`/insights/${i.slug}`}
                  className="group card block h-full p-6 transition-all hover:shadow-lift"
                >
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                    {i.category} · {i.readingMinutes} Min.
                  </p>
                  <h3 className="mt-3 text-lg font-medium leading-snug tracking-tight text-ink-900">
                    {i.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-500">
                    {i.subtitle}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                    Lesen
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-white md:flex-row md:items-center md:p-10">
              <div className="max-w-xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                  Direkt sprechen
                </p>
                <p className="mt-3 text-2xl leading-tight tracking-tight sm:text-3xl">
                  Fragen zu KI, zu meinen Projekten oder zu einer möglichen
                  Zusammenarbeit?
                </p>
              </div>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-transform hover:-translate-y-0.5"
              >
                <Sparkles size={15} strokeWidth={2.2} />
                Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
