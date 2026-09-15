import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von KBS KI-Beratung Saar. Verantwortlich für den Inhalt und rechtliche Angaben gemäß § 5 TMG.",
  alternates: { canonical: "https://ki-beratung-saar.com/impressum" },
  robots: { index: true, follow: true }
};

const IMPRESSUM_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ki-beratung-saar.com/impressum#webpage",
      url: "https://ki-beratung-saar.com/impressum",
      name: "Impressum · KBS KI-Beratung Saar",
      description:
        "Impressum von KBS KI-Beratung Saar. Verantwortlich für den Inhalt und rechtliche Angaben gemäß § 5 TMG.",
      inLanguage: "de-DE",
      isPartOf: { "@id": "https://ki-beratung-saar.com/#website" },
      about: { "@id": "https://ki-beratung-saar.com/#business" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ki-beratung-saar.com/impressum#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Start",
          item: "https://ki-beratung-saar.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Impressum",
          item: "https://ki-beratung-saar.com/impressum"
        }
      ]
    }
  ]
};

export default function ImpressumPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(IMPRESSUM_JSONLD) }}
      />
      <Navigation />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Impressum
          </h1>
          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-600">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Schulz & Stosse GbR<br />
                In der Acht 44<br />
                66333 Völklingen
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">
                Vertretungsberechtigte Gesellschafter
              </h2>
              <p>
                Fynn-Luca Schulz<br />
                Julian Stosse
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">Kontakt</h2>
              <p>
                Telefon: 0151 · 68488999<br />
                E-Mail: info@ki-beratung-saar.com
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                DE458914838
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                Fynn-Luca Schulz<br />
                Julian Stosse<br />
                Anschrift wie oben
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
