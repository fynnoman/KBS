import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import About from "@/components/About";
import BusinessReferences from "@/components/business/BusinessReferences";
import BusinessProcess from "@/components/business/BusinessProcess";
import BusinessCTA from "@/components/business/BusinessCTA";
import { SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/ueber-uns`;
const DESCRIPTION =
  "Über KBS KI-Beratung Saar. Der lokale KI-Partner im Saarland für Unternehmen und Konzerne. Fester Ansprechpartner, klare Festpreise, produktiv umgesetzte Projekte in Next.js, TypeScript und SwiftUI.";

export const metadata: Metadata = {
  title: "Über uns · KBS KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS KI-Beratung Saar",
    title: "Über uns · KBS",
    description: DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function UeberUnsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${PAGE_URL}#aboutpage`,
        name: "Über KBS KI-Beratung Saar",
        description: DESCRIPTION,
        url: PAGE_URL,
        about: { "@id": `${SITE_URL}/#business` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
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
          { "@type": "ListItem", position: 2, name: "Über uns", item: PAGE_URL }
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
          { label: "Über uns", href: "/ueber-uns" }
        ]}
      />
      <About />
      <BusinessProcess />
      <BusinessReferences />
      <BusinessCTA />
      <Footer />
    </main>
  );
}
