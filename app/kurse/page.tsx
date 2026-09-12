import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessCurriculum from "@/components/business/BusinessCurriculum";
import BusinessCTA from "@/components/business/BusinessCTA";
import FoerderungHinweis from "@/components/business/FoerderungHinweis";
import FoerderungBadge from "@/components/business/FoerderungBadge";
import { COURSES } from "@/lib/data/courses";
import { SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/kurse`;
const DESCRIPTION =
  "Kurse und Schulungen von KBS für Ihr Team: Grundlagen, Prompt Engineering, Rollen-Kurse für Vertrieb, Marketing, HR und Kundenservice, EU AI Act, RAG und mehrmonatige Curricula. Inhouse oder als offene Kurse.";

export const metadata: Metadata = {
  title: "Kurse & Schulungen · KBS KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS KI-Beratung Saar",
    title: "Kurse & Schulungen · KBS",
    description: DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function KursePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#collection`,
        name: "Kurse und Schulungen · KBS KI-Beratung Saar",
        description: DESCRIPTION,
        url: PAGE_URL,
        about: { "@id": `${SITE_URL}/#business` },
        hasPart: COURSES.map((c) => ({
          "@type": "Course",
          name: c.title,
          url: `${SITE_URL}/kurse/${c.slug}`,
          provider: { "@id": `${SITE_URL}/#business` }
        }))
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#itemlist`,
        name: "KBS Kurskatalog",
        numberOfItems: COURSES.length,
        itemListElement: COURSES.map((c, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: c.title,
          url: `${SITE_URL}/kurse/${c.slug}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kurse", item: PAGE_URL }
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
          { label: "Kurse", href: "/kurse" }
        ]}
      />
      <FoerderungBadge />
      <BusinessCurriculum />
      <FoerderungHinweis />
      <BusinessCTA />
      <Footer />
    </main>
  );
}
