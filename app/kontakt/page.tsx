import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessCTA from "@/components/business/BusinessCTA";
import ContactForm from "@/components/business/ContactForm";
import FoerderungHinweis from "@/components/business/FoerderungHinweis";
import FoerderungBadge from "@/components/business/FoerderungBadge";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/kontakt`;
const DESCRIPTION =
  "Kontakt zu KBS KI-Beratung Saar. Kostenloses 30-minütiges Kennenlerngespräch per Videocall. Ehrliche Einschätzung von Machbarkeit, Potenzial und ROI. Ohne Verkaufsdruck.";

export const metadata: Metadata = {
  title: "Kontakt · KBS KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS KI-Beratung Saar",
    title: "Kontakt · KBS",
    description: DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function KontaktPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${PAGE_URL}#contactpage`,
        name: "Kontakt · KBS KI-Beratung Saar",
        description: DESCRIPTION,
        url: PAGE_URL,
        about: { "@id": `${SITE_URL}/#business` },
        mainEntity: { "@id": `${SITE_URL}/#business` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "p"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kontakt", item: PAGE_URL }
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
          { label: "Kontakt", href: "/kontakt" }
        ]}
      />
      <FoerderungBadge />

      <section className="pt-28 md:pt-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              <span className="chip">Kontakt</span>
              <h1 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Direkt an das KBS-Team.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
                Nachricht über das Formular, Anruf oder E-Mail. Antwort in der
                Regel innerhalb eines Werktags, Montag bis Freitag zwischen 09
                und 18 Uhr.
              </p>

              <div className="mt-8 grid gap-3 text-[14px]">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 rounded-2xl border border-ink-900/10 bg-white px-5 py-4 text-ink-900 transition-colors hover:border-accent-300"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
                    Telefon
                  </span>
                  <span className="font-medium">{PHONE_DISPLAY}</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 rounded-2xl border border-ink-900/10 bg-white px-5 py-4 text-ink-900 transition-colors hover:border-accent-300"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
                    E-Mail
                  </span>
                  <span className="font-medium">{EMAIL}</span>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <BusinessCTA />
      <FoerderungHinweis />
      <Footer />
    </main>
  );
}
