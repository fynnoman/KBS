import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessModules from "@/components/business/BusinessModules";
import BusinessCTA from "@/components/business/BusinessCTA";
import FoerderungHinweis from "@/components/business/FoerderungHinweis";
import FoerderungBadge from "@/components/business/FoerderungBadge";
import SoftwareIdeaHero from "@/components/business/SoftwareIdeaHero";
import { MODULES } from "@/lib/data/modules";
import { SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/softwareloesungen`;
const DESCRIPTION =
  "Alle Softwarelösungen von KBS im Überblick: lokale KI-Infrastruktur, Custom RAG-Assistenten, Prozess-Automation, Voice-Agents, Governance-Bausteine und Enterprise-Rollout.";

export const metadata: Metadata = {
  title: "Softwarelösungen · KBS KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS KI-Beratung Saar",
    title: "Softwarelösungen · KBS",
    description: DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function SoftwareloesungenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#collection`,
        name: "Softwarelösungen · KBS KI-Beratung Saar",
        description: DESCRIPTION,
        url: PAGE_URL,
        about: { "@id": `${SITE_URL}/#business` },
        hasPart: MODULES.map((m) => ({
          "@type": "Service",
          name: m.title,
          url: `${SITE_URL}/softwareloesungen/${m.slug}`,
          provider: { "@id": `${SITE_URL}/#business` }
        }))
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#itemlist`,
        name: "KBS Softwarelösungen",
        numberOfItems: MODULES.length,
        itemListElement: MODULES.map((m, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: m.title,
          url: `${SITE_URL}/softwareloesungen/${m.slug}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Softwarelösungen", item: PAGE_URL }
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
          { label: "Softwarelösungen", href: "/softwareloesungen" }
        ]}
      />
      <SoftwareIdeaHero />
      <FoerderungBadge />
      <BusinessModules />
      <FoerderungHinweis />
      <BusinessCTA />
      <Footer />
    </main>
  );
}
