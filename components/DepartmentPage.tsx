import Link from "next/link";
import {
  Phone,
  Calendar,
  ArrowUpRight,
  Sparkles,
  ShieldAlert,
  Check,
  Plus,
  Wrench,
  Timer,
  Flame
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import type { Department } from "@/lib/data/useCases";
import { DEPARTMENTS } from "@/lib/data/useCases";
import { COURSES } from "@/lib/data/courses";
import { CITIES } from "@/lib/data/cities";
import {
  SITE_URL,
  CALENDLY_URL,
  PHONE_TEL,
  PHONE_DISPLAY
} from "@/lib/config";

function effortLabel(effort: string) {
  return effort.charAt(0).toUpperCase() + effort.slice(1);
}

function priorityLabel(priority: string) {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
}

export default function DepartmentPage({ dept }: { dept: Department }) {
  const url = `${SITE_URL}${dept.routePath}`;
  const relatedCourses = dept.relatedCourseSlugs
    .map((s) => COURSES.find((c) => c.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: dept.name,
        description: dept.intro,
        author: {
          "@type": "Organization",
          name: "KBS – KI-Beratung Saar",
          "@id": `${SITE_URL}/#business`
        },
        publisher: {
          "@type": "Organization",
          name: "KBS – KI-Beratung Saar",
          "@id": `${SITE_URL}/#business`
        },
        inLanguage: "de-DE",
        mainEntityOfPage: url
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: dept.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "KI-Anwendungsfälle",
            item: `${SITE_URL}/ki-anwendungsfaelle`
          },
          { "@type": "ListItem", position: 3, name: dept.name, item: url }
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
          { label: "Anwendungsfälle", href: "/ki-anwendungsfaelle" },
          { label: dept.displayName, href: dept.routePath }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">{dept.tag}</span>
            <h1 className="mt-5 max-w-4xl text-[38px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-[56px]">
              {dept.headline}
              <br />
              <span className="display italic text-ink-500">
                {dept.headlineSecondary}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              {dept.intro}
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

      {/* Table of Contents */}
      <section className="relative py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="card p-6 md:p-7">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Fünf konkrete Anwendungen
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                {dept.cases.map((c, i) => (
                  <a
                    key={c.title}
                    href={`#case-${i + 1}`}
                    className="flex items-start gap-2.5 rounded-xl px-3 py-2 text-[13.5px] text-ink-700 transition-colors hover:bg-ink-50"
                  >
                    <span className="display mt-0.5 text-[13px] italic text-accent-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{c.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cases */}
      {dept.cases.map((c, i) => (
        <section
          key={c.title}
          id={`case-${i + 1}`}
          className="relative py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mb-8 max-w-3xl">
                <span className="display text-lg italic text-accent-700">
                  Anwendungsfall {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                  {c.title}
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Reveal>
                <div className="card h-full p-6">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                    Problem
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">
                    {c.problem}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="card h-full p-6">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                    Bisheriger Prozess
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">
                    {c.process}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="card h-full border-accent-500/30 bg-accent-500/5 p-6">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-accent-700">
                    Mit KI
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-800">
                    {c.aiSolution}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-6 rounded-3xl border border-ink-900/10 bg-white p-6 md:p-7">
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Beispiel aus der Praxis
                </p>
                <p className="mt-3 text-[15px] leading-relaxed italic text-ink-700">
                  {c.example}
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Reveal delay={0.2}>
                <div className="card h-full p-5">
                  <div className="flex items-center gap-2 text-ink-400">
                    <Wrench size={14} strokeWidth={2.2} />
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                      Werkzeuge
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {c.tools.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 text-[13.5px] leading-snug text-ink-700"
                      >
                        <Check
                          size={12}
                          strokeWidth={2.6}
                          className="mt-1 text-accent-700"
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="card h-full p-5">
                  <div className="flex items-center gap-2 text-ink-400">
                    <Timer size={14} strokeWidth={2.2} />
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                      Einführungsaufwand
                    </p>
                  </div>
                  <p className="mt-3 text-[16px] font-medium text-ink-900">
                    {effortLabel(c.effort)}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-ink-400">
                    <Flame size={14} strokeWidth={2.2} />
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                      Empfohlene Priorität
                    </p>
                  </div>
                  <p className="mt-3 text-[16px] font-medium text-ink-900">
                    {priorityLabel(c.priority)}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="card h-full p-5">
                  <div className="flex items-center gap-2 text-ink-400">
                    <ShieldAlert size={14} strokeWidth={2.2} />
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                      Risiko
                    </p>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-700">
                    {c.risk}
                  </p>
                  <div className="mt-5 border-t border-ink-900/10 pt-4">
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                      Datenschutz
                    </p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-700">
                      {c.privacy}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="relative py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mb-10 max-w-3xl">
                <span className="chip">Passende KBS-Schulungen</span>
                <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                  Team-Schulung
                  <br />
                  <span className="display italic text-ink-500">
                    für {dept.displayName}.
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
              <span className="chip">Häufige Fragen · {dept.displayName}</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Was Fachbereiche
                <br />
                <span className="display italic text-ink-500">
                  wirklich fragen.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto max-w-4xl">
            {dept.faqs.map((f, idx) => (
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

      {/* Cross-links */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Andere Anwendungsbereiche
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {DEPARTMENTS.filter((x) => x.slug !== dept.slug).map((x) => (
                  <Link
                    key={x.slug}
                    href={x.routePath}
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
                Beratung an Ihrem Standort
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {CITIES.slice(0, 8).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/standorte/${c.slug}`}
                    className="chip transition-colors hover:bg-ink-50"
                  >
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
              {dept.name} –
              <br />
              <span className="display italic text-ink-500">
                für Ihr Team konkret machen.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Im kostenlosen Erstgespräch besprechen wir, welche der fünf
              Anwendungen für Ihre Betriebsgröße und Ihr Software-Umfeld die
              richtige Reihenfolge ergibt.
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
