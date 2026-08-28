import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  Check,
  ArrowUpRight,
  Calendar,
  Sparkles,
  ShieldAlert,
  ListChecks,
  Wrench,
  MapPin,
  Plus
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { INDUSTRIES, findIndustry } from "@/lib/data/industries";
import { COURSES } from "@/lib/data/courses";
import { CITIES } from "@/lib/data/cities";
import {
  SITE_URL,
  CALENDLY_URL,
  PHONE_TEL,
  PHONE_DISPLAY
} from "@/lib/config";

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = findIndustry(slug);
  if (!ind) return {};
  const title = `${ind.tag} · KBS – KI-Beratung Saar`;
  const description = ind.intro.slice(0, 158);
  const url = `${SITE_URL}/branchen/${ind.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: ind.keywords,
    openGraph: {
      title: `${ind.tag} · KBS`,
      description,
      url,
      type: "website",
      locale: "de_DE",
      siteName: "KBS – KI-Beratung Saar",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    }
  };
}

export default async function IndustryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = findIndustry(slug);
  if (!ind) return notFound();

  const url = `${SITE_URL}/branchen/${ind.slug}`;
  const relatedCourses = ind.relatedCourseSlugs
    .map((s) => COURSES.find((c) => c.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: ind.tag,
        provider: { "@id": `${SITE_URL}/#business` },
        serviceType: "KI-Beratung nach Branche",
        description: ind.intro,
        areaServed: { "@type": "State", name: "Saarland" },
        audience: { "@type": "Audience", audienceType: ind.name },
        url
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: ind.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Start",
            item: `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Branchen",
            item: `${SITE_URL}/branchen`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: ind.name,
            item: url
          }
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
          { label: "Branchen", href: "/branchen" },
          { label: ind.name, href: `/branchen/${ind.slug}` }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">{ind.tag}</span>
            <h1 className="mt-5 max-w-4xl text-[38px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-[56px]">
              {ind.headline}
              <br />
              <span className="display italic text-ink-500">
                {ind.headlineSecondary}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              {ind.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} strokeWidth={2.4} />
                Erstgespräch buchen
              </a>
              <Link href={`tel:${PHONE_TEL}`} className="btn-ghost">
                <Phone size={16} strokeWidth={2.2} />
                {PHONE_DISPLAY}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prozesse */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="chip">Typische Prozesse</span>
                <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                  Wo im Alltag von
                  <br />
                  <span className="display italic text-ink-500">
                    {ind.displayName} KI ansetzt.
                  </span>
                </h2>
                <ul className="mt-8 space-y-4">
                  {ind.processes.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-700"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/10">
                        <Check
                          size={12}
                          strokeWidth={2.6}
                          className="text-accent-700"
                        />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card p-7 md:p-8">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/10 text-accent-700">
                  <Wrench size={16} strokeWidth={2.2} />
                </span>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Werkzeug-Kategorien
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                  Diese Werkzeug-Klassen sind für Ihre Branche relevant. Die
                  konkrete Auswahl hängt vom bestehenden Software-Umfeld ab und
                  wird im Erstgespräch abgestimmt.
                </p>
                <ul className="mt-5 space-y-3">
                  {ind.tools.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-ink-700"
                    >
                      <span className="display mt-0.5 text-[13px] italic text-accent-700">
                        ›
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <span className="chip">Konkrete Use Cases</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Drei Anwendungen,
                <br />
                <span className="display italic text-ink-500">
                  die morgen laufen können.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {ind.useCases.map((u, idx) => (
              <Reveal key={u.title} delay={idx * 0.05}>
                <div className="card h-full p-7">
                  <span className="display text-3xl italic text-ink-300">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl leading-snug tracking-tight text-ink-900">
                    {u.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {u.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Priorität + Risiken */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="card p-7 md:p-8">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/10 text-accent-700">
                  <ListChecks size={16} strokeWidth={2.2} />
                </span>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Wo zuerst anfangen
                </p>
                <h3 className="mt-2 text-2xl leading-tight tracking-tight text-ink-900">
                  Priorisierung
                </h3>
                <ol className="mt-5 space-y-4">
                  {ind.priorities.map((p, idx) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-700"
                    >
                      <span className="display mt-0.5 text-[13px] italic text-accent-700">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {p}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card p-7 md:p-8">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/10 text-accent-700">
                  <ShieldAlert size={16} strokeWidth={2.2} />
                </span>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Datenschutz und Risiken
                </p>
                <h3 className="mt-2 text-2xl leading-tight tracking-tight text-ink-900">
                  Worauf zu achten ist
                </h3>
                <ul className="mt-5 space-y-3">
                  {ind.risks.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-ink-700"
                    >
                      <span className="display mt-0.5 text-[13px] italic text-accent-700">
                        !
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[12.5px] leading-relaxed text-ink-500">
                  Hinweis: allgemeine Informationen, keine Rechtsberatung.
                  Verbindliche Prüfung im konkreten Einzelfall bleibt Aufgabe
                  Ihres Datenschutzbeauftragten und ggf. Ihrer Rechtsberatung.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="relative py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mb-10 max-w-3xl">
                <span className="chip">Passende KBS-Kurse</span>
                <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                  Schulung für
                  <br />
                  <span className="display italic text-ink-500">
                    {ind.displayName}.
                  </span>
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {relatedCourses.map((c, idx) => (
                <Reveal key={c.slug} delay={idx * 0.05}>
                  <Link
                    href="/business#kurskatalog"
                    className="group card block h-full p-7 transition-all hover:shadow-lift"
                  >
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                      {c.duration}
                    </p>
                    <h3 className="mt-3 text-xl leading-tight tracking-tight text-ink-900">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-relaxed text-ink-500">
                      {c.summary.slice(0, 140)}…
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                      Kurs ansehen
                      <ArrowUpRight size={14} strokeWidth={2.2} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <span className="chip">Häufige Fragen · {ind.displayName}</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Was sich Betriebe
                <br />
                <span className="display italic text-ink-500">
                  wirklich fragen.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto max-w-4xl">
            {ind.faqs.map((f, idx) => (
              <Reveal key={f.q} delay={idx * 0.04}>
                <details className="group border-b border-ink-900/8 py-6 last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <h3 className="text-lg leading-snug tracking-tight text-ink-900 sm:text-xl">
                      {f.q}
                    </h3>
                    <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-500 transition-transform group-open:rotate-45">
                      <Plus size={16} strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-ink-500">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links: andere Branchen + Standorte */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Andere Branchen
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {INDUSTRIES.filter((x) => x.slug !== ind.slug).map((x) => (
                  <Link
                    key={x.slug}
                    href={`/branchen/${x.slug}`}
                    className="chip transition-colors hover:bg-ink-50"
                  >
                    <Sparkles size={11} strokeWidth={2} />
                    {x.displayName}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                {ind.displayName} an Ihrem Standort
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/standorte/${c.slug}`}
                    className="chip transition-colors hover:bg-ink-50"
                  >
                    <MapPin size={11} strokeWidth={2} />
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="chip">Nächster Schritt</span>
            <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
              KI-Einsatz für
              <br />
              <span className="display italic text-ink-500">
                Ihren Betrieb konkret klären.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Im kostenlosen Erstgespräch schauen wir gemeinsam, welche der
              genannten Ansätze für Ihre Betriebsgröße und Ihr Software-Umfeld
              realistisch sind – und wo Sie zuerst anfangen sollten.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} strokeWidth={2.4} />
                Termin buchen
              </a>
              <Link href={`tel:${PHONE_TEL}`} className="btn-ghost">
                <Phone size={16} strokeWidth={2.2} />
                {PHONE_DISPLAY}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
