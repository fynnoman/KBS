import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Check,
  ArrowUpRight,
  Calendar,
  Phone,
  Users,
  Clock,
  Award,
  ShieldCheck,
  BookOpen
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import {
  COURSES,
  CATEGORY_LABEL,
  CATEGORY_INTRO,
  type Course
} from "@/lib/data/courses";
import { MODULES } from "@/lib/data/modules";
import {
  SITE_URL,
  CALENDLY_URL,
  PHONE_TEL,
  PHONE_DISPLAY
} from "@/lib/config";

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

function findCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) return {};
  const title = `${course.title} · KBS Schulungen`;
  const description = course.summary.slice(0, 158);
  const url = `${SITE_URL}/kurse/${course.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      course.title,
      CATEGORY_LABEL[course.category],
      course.audience,
      "KI Schulung",
      "KI Training",
      "KBS KI-Beratung Saar",
      "Inhouse KI Schulung",
      "KI Kurs Saarland",
      "KI Kurs Deutschland"
    ],
    openGraph: {
      title: `${course.title} · KBS`,
      description,
      url,
      type: "website",
      locale: "de_DE",
      siteName: "KBS KI-Beratung Saar",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} · KBS`,
      description,
      images: ["/opengraph-image"]
    }
  };
}

function formatEUR(v: number) {
  return new Intl.NumberFormat("de-DE").format(v);
}

export default async function CoursePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) return notFound();

  const url = `${SITE_URL}/kurse/${course.slug}`;
  const relatedModules = MODULES.filter(
    (m) => m.relatedCourse === course.slug
  ).slice(0, 5);
  const otherInCategory = COURSES.filter(
    (c) => c.category === course.category && c.slug !== course.slug
  ).slice(0, 5);

  const offers = [];
  if (course.pricing?.inhousePrice) {
    offers.push({
      "@type": "Offer",
      name: `Inhouse-Pauschale bis 12 Teilnehmende · ${course.title}`,
      price: course.pricing.inhousePrice,
      priceCurrency: "EUR",
      category: "Inhouse-Schulung",
      availability: "https://schema.org/InStock",
      url,
      eligibleRegion: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "State", name: "Saarland" }
      ]
    });
    offers.push({
      "@type": "Offer",
      name: `Zusatzteilnehmer ab dem 13. Teilnehmenden · ${course.title}`,
      price: 120,
      priceCurrency: "EUR",
      description:
        "Preis je zusätzlichen Teilnehmenden über die Inhouse-Pauschale hinaus.",
      availability: "https://schema.org/InStock",
      url
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${url}#course`,
        name: course.title,
        description: course.summary,
        provider: { "@id": `${SITE_URL}/#business` },
        educationalCredentialAwarded: course.certificate,
        inLanguage: "de-DE",
        courseCode: `KBS-${course.slug.toUpperCase()}`,
        audience: {
          "@type": "EducationalAudience",
          educationalRole: course.audience
        },
        teaches: course.learnings.map((l) => ({
          "@type": "DefinedTerm",
          name: l
        })),
        about: [
          "Generative KI im Unternehmen",
          "ChatGPT, Claude, Gemini, Copilot",
          "Prompt Engineering",
          "EU AI Act",
          "DSGVO-konforme KI-Nutzung"
        ],
        hasCourseInstance: course.formats.map((f) => ({
          "@type": "CourseInstance",
          courseMode: f === "Remote" ? "Online" : "Onsite",
          name: `${course.title} · ${f}`,
          location:
            f === "Remote"
              ? { "@type": "VirtualLocation", url: SITE_URL }
              : {
                  "@type": "Place",
                  name: "Saarland und deutschlandweit inhouse",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "Saarland",
                    addressCountry: "DE"
                  }
                },
          courseWorkload: course.duration
        })),
        offers: offers.length > 0 ? offers : undefined,
        url,
        image: `${SITE_URL}/opengraph-image`
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Kurse",
            item: `${SITE_URL}/kurse`
          },
          { "@type": "ListItem", position: 3, name: course.title, item: url }
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
          { label: "Kurse", href: "/kurse" },
          { label: course.title, href: `/kurse/${course.slug}` }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">
              <BookOpen size={12} strokeWidth={2.4} />
              {CATEGORY_LABEL[course.category]}
            </span>
            <h1 className="mt-5 max-w-4xl text-[38px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-[56px]">
              {course.title}
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-ink-500 sm:text-lg">
              {course.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-[15px] text-ink-700">
              <span className="inline-flex items-center gap-2">
                <Clock size={16} strokeWidth={2.2} />
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users size={16} strokeWidth={2.2} />
                {course.audience}
              </span>
              <span className="inline-flex items-center gap-2">
                <Award size={16} strokeWidth={2.2} />
                {course.certificate}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/kontakt" className="btn-primary">
                <Calendar size={16} strokeWidth={2.4} />
                Kurs anfragen
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <ArrowUpRight size={16} strokeWidth={2.2} />
                Termin online buchen
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-ghost">
                <Phone size={16} strokeWidth={2.2} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kategorie-Einordnung */}
      <section className="border-t border-ink-900/8 bg-white/60 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
              Einordnung
            </p>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-700">
              {CATEGORY_INTRO[course.category]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lerninhalte */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
              Lerninhalte
            </p>
            <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
              Was Ihr Team nach dem Kurs kann
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {course.learnings.map((l, i) => (
              <Reveal key={i} delay={i * 60}>
                <li className="card flex items-start gap-3 p-5">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <Check size={14} strokeWidth={2.6} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-700">
                    {l}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Formate & Preise */}
      <section className="border-t border-ink-900/8 bg-white/70 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
              Formate und Preise
            </p>
            <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
              Wie der Kurs durchgeführt wird
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-ink-500">
                  Verfügbare Formate
                </p>
                <ul className="mt-4 space-y-2 text-[15px] text-ink-700">
                  {course.formats.map((f, i) => (
                    <li key={i} className="inline-flex items-center gap-2">
                      <Check size={14} strokeWidth={2.6} className="text-accent-700" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[14px] leading-relaxed text-ink-500">
                  Inhouse bei Ihnen vor Ort, remote per Videocall oder in Präsenz
                  an einem gemeinsamen Ort. Sprache Deutsch, auf Anfrage auch Englisch.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="card p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-ink-500">
                  Investition
                </p>
                {course.pricing?.customLabel ? (
                  <p className="mt-3 text-lg leading-snug text-ink-900">
                    {course.pricing.customLabel}
                  </p>
                ) : null}
                {course.pricing?.inhousePrice ? (
                  <>
                    <p className="mt-3 text-2xl tracking-tight text-ink-900">
                      {formatEUR(course.pricing.inhousePrice)} € Inhouse-Pauschale
                    </p>
                    <p className="mt-1 text-[15px] text-ink-500">
                      Bis 12 Teilnehmende. Ab dem 13. Teilnehmenden zusätzlich 120 € pro Person.
                    </p>
                    <p className="mt-5 text-[14px] leading-relaxed text-ink-500">
                      Enthält Vorbereitung, Durchführung, Unterlagen und
                      individuelle Anpassung an Ihre Nutzungsrichtlinien.
                    </p>
                  </>
                ) : (
                  <p className="mt-3 text-[15px] text-ink-500">
                    Preis auf Anfrage, abhängig vom gewünschten Format.
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Zertifikat & Vertrauen */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="card p-7 md:p-10">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <Award size={16} strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink-900">
                      Zertifikat
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-500">
                      {course.certificate}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <ShieldCheck size={16} strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink-900">
                      DSGVO- und EU-AI-Act-konform
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-500">
                      Nutzungsregeln, Datenschutz und Betriebsrat werden von Anfang an mitgedacht.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <BookOpen size={16} strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink-900">
                      Übertragbar auf Ihre Praxis
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-500">
                      Übungen an echten Aufgaben Ihres Teams, keine allgemeinen Beispiele.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Passende Softwarelösungen */}
      {relatedModules.length > 0 && (
        <section className="border-t border-ink-900/8 bg-white/60 py-14">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
                Passende Softwarelösungen
              </p>
              <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                Nach dem Kurs direkt einsetzen
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedModules.map((m, i) => (
                <Reveal key={m.slug} delay={i * 60}>
                  <Link
                    href={`/softwareloesungen/${m.slug}`}
                    className="card block h-full p-6 transition-shadow hover:shadow-lift"
                  >
                    <p className="mt-1 text-lg tracking-tight text-ink-900">
                      {m.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                      {m.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent-700">
                      Details ansehen
                      <ArrowUpRight size={14} strokeWidth={2.2} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Weitere Kurse der Kategorie */}
      {otherInCategory.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
                Weitere Kurse · {CATEGORY_LABEL[course.category]}
              </p>
              <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                Sinnvoll ergänzend
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {otherInCategory.map((c, i) => (
                <Reveal key={c.slug} delay={i * 60}>
                  <Link
                    href={`/kurse/${c.slug}`}
                    className="card block h-full p-6 transition-shadow hover:shadow-lift"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-ink-500">
                      {c.duration}
                    </p>
                    <p className="mt-3 text-lg tracking-tight text-ink-900">
                      {c.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                      {c.audience}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent-700">
                      Zum Kurs
                      <ArrowUpRight size={14} strokeWidth={2.2} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-ink-900/8 bg-white/70 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
              {course.title} für Ihr Team buchen
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-500 sm:text-lg">
              30 Minuten Videocall zur Abstimmung: Format, Zielgruppe, gewünschte
              Vertiefungen und ein passender Termin.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/kontakt" className="btn-primary">
                <Calendar size={16} strokeWidth={2.4} />
                Kurs anfragen
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <ArrowUpRight size={16} strokeWidth={2.2} />
                Termin online buchen
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
