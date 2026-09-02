import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InlineCTA from "@/components/InlineCTA";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessProcess from "@/components/business/BusinessProcess";
import BusinessReferences from "@/components/business/BusinessReferences";
import BusinessFAQ from "@/components/business/BusinessFAQ";
import BusinessCTA from "@/components/business/BusinessCTA";
import FoerderungHinweis from "@/components/business/FoerderungHinweis";
import FoerderungBadge from "@/components/business/FoerderungBadge";
import { SITE_URL, CALENDLY_URL } from "@/lib/config";

const DESCRIPTION =
  "KBS bringt KI in mittelständische Unternehmen und Konzerne, lokale KI auf Mac Mini und dedizierten Servern, Custom RAG-Assistenten, Prozess-Automation, Enterprise-Rollout, DSGVO- und EU-AI-Act-konform mit klaren Festpreisen pro Phase.";

export const metadata: Metadata = {
  title: "KBS KI-Beratung Saar | Enterprise-KI mit lokaler Datenhoheit",
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "KBS KI-Beratung Saar",
    title: "KBS KI-Beratung Saar | Enterprise-KI mit lokaler Datenhoheit",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KBS Enterprise-KI mit lokaler Datenhoheit"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KBS Enterprise-KI",
    description: DESCRIPTION,
    images: ["/opengraph-image"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "KBS Enterprise-KI-Beratung und Implementierung",
  serviceType: "Enterprise AI Consulting and Implementation",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "Country", name: "Deutschland" },
  description: DESCRIPTION,
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Mittelständische Unternehmen und Konzerne mit 20 bis 500 Mitarbeitern"
  }
};

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <BusinessHero />
      <FoerderungBadge />
      <BusinessCTA />
      <InlineCTA
        eyebrow="Unsere Softwarelösungen"
        title="Lokale KI, Custom-Assistenten und Prozess-Automation. Klare Bausteine mit Festpreisen."
        primaryLabel="Softwarelösungen ansehen"
        primaryHref="/softwareloesungen"
        secondaryLabel="Termin buchen"
        secondaryHref={CALENDLY_URL}
        secondaryExternal
      />
      <BusinessProcess />
      <FoerderungHinweis />
      <InlineCTA
        eyebrow="Kurse & Schulungen"
        title="Von Prompt Engineering bis EU AI Act. Live-Schulungen für Ihr Team, inhouse oder offen."
        primaryLabel="Kurse ansehen"
        primaryHref="/kurse"
        secondaryLabel="Termin buchen"
        secondaryHref={CALENDLY_URL}
        secondaryExternal
      />
      <BusinessReferences />
      <BusinessFAQ />
      <Footer />
    </main>
  );
}
