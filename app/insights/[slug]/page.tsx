import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { INSIGHTS, findInsight } from "@/lib/data/insights";
import { SITE_URL } from "@/lib/config";

export async function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = findInsight(slug);
  if (!a) return {};
  const url = `${SITE_URL}/insights/${a.slug}`;
  return {
    title: `${a.title} · KBS Insights`,
    description: a.description,
    alternates: { canonical: url },
    keywords: a.keywords,
    openGraph: {
      title: a.title,
      description: a.description,
      url,
      type: "article",
      locale: "de_DE",
      siteName: "KBS – KI-Beratung Saar",
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
      authors: ["KBS Redaktion"],
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    }
  };
}

export default async function InsightPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = findInsight(slug);
  if (!a) return notFound();

  const url = `${SITE_URL}/insights/${a.slug}`;
  const related = a.relatedSlugs
    .map((r) => findInsight(r))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: a.title,
        description: a.description,
        articleSection: a.category,
        keywords: a.keywords.join(", "),
        wordCount: a.sections.reduce(
          (n, s) => n + s.body.reduce((m, p) => m + p.split(/\s+/).length, 0),
          0
        ),
        datePublished: a.publishedAt,
        dateModified: a.updatedAt,
        inLanguage: "de-DE",
        mainEntityOfPage: url,
        image: `${SITE_URL}/opengraph-image`,
        author: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#business`,
          name: "KBS – KI-Beratung Saar",
          url: SITE_URL
        },
        publisher: { "@id": `${SITE_URL}/#business` }
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: a.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
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
          { label: "Insights", href: "/insights" },
          { label: a.title, href: `/insights/${a.slug}` }
        ]}
      />

      {/* Hero */}
      <article className="relative pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 text-[12px] text-ink-400">
              <span className="chip">{a.category}</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={12} strokeWidth={2} />
                {new Date(a.publishedAt).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} strokeWidth={2} />
                {a.readingMinutes} Min. Lesezeit
              </span>
            </div>
            <h1 className="mt-6 text-[38px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
              {a.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-500 sm:text-xl">
              {a.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Key facts */}
        <div className="mx-auto mt-14 max-w-3xl px-6">
          <Reveal>
            <div className="card p-6 sm:p-7">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Kernzahlen
              </p>
              <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {a.keyFacts.map((k) => (
                  <div key={k.label}>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-400">
                      {k.label}
                    </dt>
                    <dd className="mt-1 text-[16px] font-semibold tracking-tight text-ink-900">
                      {k.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Body */}
        <div className="mx-auto mt-16 max-w-3xl px-6">
          {a.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.03}>
              <section className="mt-12 first:mt-0">
                <h2 className="text-2xl leading-tight tracking-tight text-ink-900 sm:text-3xl">
                  {s.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {s.body.map((p, j) => (
                    <p
                      key={j}
                      className="text-[16.5px] leading-relaxed text-ink-600"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Author box */}
        <div className="mx-auto mt-20 max-w-3xl px-6">
          <Reveal>
            <div className="card p-6 sm:p-7">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Herausgeber
              </p>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-medium tracking-tight text-ink-900">
                    KBS Redaktion
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-500">
                    Praxisnahe Analysen und Anleitungen aus dem Beratungs- und
                    Entwicklungsalltag von KBS – KI-Beratung Saar.
                  </p>
                </div>
                <Link
                  href="/business"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 hover:text-ink-900"
                >
                  Über KBS
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-3xl px-6">
          <Reveal>
            <h2 className="text-2xl leading-tight tracking-tight text-ink-900 sm:text-3xl">
              Häufige Fragen
            </h2>
          </Reveal>
          <div className="mt-8">
            {a.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group border-b border-ink-900/8 py-5 last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <h3 className="text-[16px] leading-snug tracking-tight text-ink-900">
                      {f.q}
                    </h3>
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-500 transition-transform group-open:rotate-45">
                      <Plus size={14} strokeWidth={2} />
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-3xl px-6">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Passende Insights
              </p>
              <div className="mt-4 space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/insights/${r.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-ink-900/8 bg-white p-5 transition-all hover:shadow-lift"
                  >
                    <div>
                      <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                        {r.category} · {r.readingMinutes} Min.
                      </p>
                      <p className="mt-1 text-[15px] font-medium text-ink-900">
                        {r.title}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-300 transition-colors group-hover:text-ink-900"
                    />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
}
