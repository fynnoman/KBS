import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  Check,
  ArrowUpRight,
  Calendar,
  Clock,
  Users,
  Award,
  MapPin,
  Sparkles
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import {
  COURSES,
  CATEGORY_LABEL,
  type Course
} from "@/lib/data/courses";
import { CITIES } from "@/lib/data/cities";
import {
  SITE_URL,
  CALENDLY_URL,
  PHONE_TEL,
  PHONE_DISPLAY
} from "@/lib/config";

function findCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = findCourse(slug);
  if (!c) return {};
  const title = `${c.title} · KI-Schulung · KBS – KI-Beratung Saar`;
  const description = c.summary.slice(0, 158);
  const url = `${SITE_URL}/ki-schulung/${c.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.title} · KBS`,
      description,
      url,
      type: "website",
      locale: "de_DE",
      siteName: "KBS – KI-Beratung Saar",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    }
  };
}

function formatPrice(c: Course): { label: string; value: string } | null {
  if (!c.pricing) return null;
  if (c.pricing.customLabel && !c.pricing.inhousePrice) {
    return { label: "Format", value: c.pricing.customLabel };
  }
  if (c.pricing.inhousePrice) {
    const formatted = new Intl.NumberFormat("de-DE").format(
      c.pricing.inhousePrice
    );
    return {
      label: c.pricing.customLabel ?? "Inhouse-Pauschale (netto, bis 12 TN)",
      value: `${formatted} €`
    };
  }
  return null;
}

export default async function CoursePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = findCourse(slug);
  if (!c) return notFound();

  const url = `${SITE_URL}/ki-schulung/${c.slug}`;
  const price = formatPrice(c);
  const related = COURSES.filter(
    (x) => x.category === c.category && x.slug !== c.slug
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${url}#course`,
        name: c.title,
        description: c.summary,
        provider: {
          "@type": "Organization",
          name: "KBS – KI-Beratung Saar",
          url: SITE_URL,
          "@id": `${SITE_URL}/#business`
        },
        educationalCredentialAwarded: c.certificate,
        audience: {
          "@type": "Audience",
          audienceType: c.audience
        },
        hasCourseInstance: c.formats.map((f) => ({
          "@type": "CourseInstance",
          courseMode: f === "Remote" ? "Online" : "Onsite",
          name: `${c.title} · ${f}`
        })),
        url
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "KI-Schulungen",
            item: `${SITE_URL}/ki-schulung`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: c.title,
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
          { label: "KI-Schulungen", href: "/ki-schulung" },
          { label: c.title, href: `/ki-schulung/${c.slug}` }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">{CATEGORY_LABEL[c.category]}</span>
            <h1 className="mt-5 max-w-4xl text-[38px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-[56px]">
              {c.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              {c.summary}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 rounded-3xl border border-ink-900/10 bg-white p-5 sm:grid-cols-4 sm:p-6">
              <div>
                <p className="flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  <Clock size={11} strokeWidth={2.4} />
                  Dauer
                </p>
                <p className="mt-1 text-[15px] font-medium text-ink-900">
                  {c.duration}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  <Users size={11} strokeWidth={2.4} />
                  Für wen
                </p>
                <p className="mt-1 text-[15px] font-medium text-ink-900">
                  {c.audience}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  <MapPin size={11} strokeWidth={2.4} />
                  Formate
                </p>
                <p className="mt-1 text-[15px] font-medium text-ink-900">
                  {c.formats.join(" · ")}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  <Award size={11} strokeWidth={2.4} />
                  Zertifikat
                </p>
                <p className="mt-1 text-[15px] font-medium text-ink-900">
                  {c.certificate}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} strokeWidth={2.4} />
                Schulung anfragen
              </a>
              <Link href={`tel:${PHONE_TEL}`} className="btn-ghost">
                <Phone size={16} strokeWidth={2.2} />
                {PHONE_DISPLAY}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Learnings + Price */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="chip">Inhalte</span>
                <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                  Was Teilnehmende
                  <br />
                  <span className="display italic text-ink-500">
                    am Ende können.
                  </span>
                </h2>
                <ul className="mt-8 space-y-4">
                  {c.learnings.map((l) => (
                    <li
                      key={l}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-700"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/10">
                        <Check
                          size={12}
                          strokeWidth={2.6}
                          className="text-accent-700"
                        />
                      </span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card p-7 md:p-8">
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Zertifikat
                </p>
                <p className="mt-2 text-[16px] font-medium text-ink-900">
                  {c.certificate}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-500">
                  Teilnahmezertifikat von KBS – KI-Beratung Saar. Kein
                  staatlich anerkannter Berufsabschluss; als Nachweis
                  fachlicher Weiterbildung im Rahmen betrieblicher
                  Qualifizierung nutzbar.
                </p>

                <div className="mt-6 h-px bg-ink-900/10" />

                <p className="mt-6 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Formate
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.formats.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-[12.5px] font-medium text-ink-700"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {price ? (
                  <>
                    <div className="mt-6 h-px bg-ink-900/10" />
                    <p className="mt-6 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                      {price.label}
                    </p>
                    <p className="mt-2 text-2xl font-medium text-ink-900">
                      {price.value}
                    </p>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
                      Alle Preise netto zzgl. USt. Reisekosten außerhalb des
                      Saarlands nach Absprache. Ab dem 13. Teilnehmenden 120 €
                      pro Person.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mt-6 h-px bg-ink-900/10" />
                    <p className="mt-6 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                      Preis
                    </p>
                    <p className="mt-2 text-[15px] text-ink-700">
                      Auf Anfrage – jedes Curriculum wird individuell
                      abgestimmt.
                    </p>
                  </>
                )}

                <div className="mt-8">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    <Calendar size={16} strokeWidth={2.4} />
                    Kurs anfragen
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related + Standorte */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {related.length > 0 && (
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Passt zusammen mit
                </p>
                <div className="mt-5 space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/ki-schulung/${r.slug}`}
                      className="group flex items-center justify-between rounded-2xl border border-ink-900/8 bg-white p-5 transition-all hover:shadow-lift"
                    >
                      <div>
                        <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                          {r.duration}
                        </p>
                        <p className="mt-1 text-[15px] font-medium text-ink-900">
                          {r.title}
                        </p>
                      </div>
                      <Sparkles
                        size={16}
                        className="text-ink-300 transition-colors group-hover:text-accent-700"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Inhouse-Schulung an Ihrem Standort
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {CITIES.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/standorte/${city.slug}`}
                    className="chip transition-colors hover:bg-ink-50"
                  >
                    <MapPin size={11} strokeWidth={2} />
                    {city.name}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-ink-500">
                Alle Kurse sind auch als reine Remote-Variante buchbar, wenn
                Ihre Teams standortübergreifend arbeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full CTA */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="chip">Nächster Schritt</span>
            <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
              {c.title}
              <br />
              <span className="display italic text-ink-500">
                für Ihr Team anfragen.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Im kostenlosen Erstgespräch stimmen wir Termin, Format, Ort und
              die konkreten Beispiele auf Ihr Unternehmen ab. Kein
              Verkaufsdruck.
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
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
