import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  Check,
  X,
  ArrowUpRight,
  Plus,
  Sparkles,
  MapPin
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { SERVICES, findService } from "@/lib/data/services";
import { CITIES } from "@/lib/data/cities";
import { SITE_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/config";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = findService(slug);
  if (!s) return {};
  const title = `${s.name} · ${s.tag} · KBS – KI-Beratung Saar`;
  const description = s.intro.slice(0, 158);
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/leistungen/${s.slug}` },
    keywords: s.keywords,
    openGraph: {
      title: `${s.name} · KBS – KI-Beratung Saar`,
      description,
      url: `${SITE_URL}/leistungen/${s.slug}`,
      type: "website",
      locale: "de_DE",
      siteName: "KBS – KI-Beratung Saar",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    }
  };
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = findService(slug);
  if (!s) return notFound();

  const pageUrl = `${SITE_URL}/leistungen/${s.slug}`;
  const related = s.relatedSlugs
    .map((r) => findService(r))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: s.name,
        provider: { "@id": `${SITE_URL}/#business` },
        serviceType: s.name,
        description: s.intro,
        areaServed: { "@type": "State", name: "Saarland" },
        audience: {
          "@type": "Audience",
          audienceType: s.audience
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          eligibleRegion: { "@type": "Country", name: "Deutschland" }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: s.faqs.map((f) => ({
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
          { label: "Leistungen", href: "/leistungen" },
          { label: s.name, href: `/leistungen/${s.slug}` }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">{s.tag}</span>
            <h1 className="mt-5 max-w-4xl text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[64px]">
              {s.headline}
              <br />
              <span className="display italic text-ink-500">
                {s.headlineSecondary}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              {s.intro}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 rounded-3xl border border-ink-900/10 bg-white p-5 sm:grid-cols-2 sm:p-6">
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Dauer
                </p>
                <p className="mt-1 text-[15px] font-medium text-ink-900">
                  {s.duration}
                </p>
              </div>
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Passend für
                </p>
                <p className="mt-1 text-[15px] font-medium text-ink-900">
                  {s.audience}
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href={`tel:${PHONE_TEL}`} className="btn-primary">
                <Phone size={16} strokeWidth={2.4} />
                Jetzt anrufen · {PHONE_DISPLAY}
              </Link>
              <Link href="/#kontakt" className="btn-ghost">
                Kostenloses Erstgespräch
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Includes */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="chip">Was enthalten ist</span>
                <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                  Konkret. Alles hier drin.
                </h2>
                <ul className="mt-8 space-y-4">
                  {s.includes.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-700"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/10">
                        <Check
                          size={12}
                          strokeWidth={2.6}
                          className="text-accent-700"
                        />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card p-7 md:p-8">
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Was Sie nach dem Termin haben
                </p>
                <ul className="mt-5 space-y-3">
                  {s.outcomes.map((o, i) => (
                    <li
                      key={o}
                      className="flex items-start gap-3 text-[14.5px] leading-snug text-ink-700"
                    >
                      <span className="display mt-1 text-sm italic text-accent-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl border border-ink-900/10 bg-ink-50 p-5">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    Was es nicht ist
                  </p>
                  <ul className="mt-3 space-y-2">
                    {s.whatItIsnt.map((n) => (
                      <li
                        key={n}
                        className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink-500"
                      >
                        <X
                          size={13}
                          strokeWidth={2.4}
                          className="mt-1 text-ink-400"
                        />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <span className="chip">So läuft es ab</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Vom Anruf
                <br />
                <span className="display italic text-ink-500">
                  zum ersten Ergebnis.
                </span>
              </h2>
            </div>
          </Reveal>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {s.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <li className="card h-full p-7">
                  <span className="display text-3xl italic text-ink-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl leading-snug tracking-tight text-ink-900">
                    {p.step}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {p.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <span className="chip">Häufige Fragen zu {s.name}</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Was Sie sich
                <br />
                <span className="display italic text-ink-500">
                  vermutlich schon fragen.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto max-w-4xl">
            {s.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
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

      {/* Related services + cities */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                Passende Leistungen
              </p>
              <div className="mt-5 space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/leistungen/${r.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-ink-900/8 bg-white p-5 transition-all hover:shadow-lift"
                  >
                    <div>
                      <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                        {r.tag}
                      </p>
                      <p className="mt-1 text-[15px] font-medium text-ink-900">
                        {r.name}
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
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                {s.name} an Ihrem Standort
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

      <Footer />
    </main>
  );
}
