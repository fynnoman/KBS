import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessModules from "@/components/business/BusinessModules";
import BusinessCTA from "@/components/business/BusinessCTA";
import FoerderungHinweis from "@/components/business/FoerderungHinweis";
import { SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/softwareloesungen`;
const DESCRIPTION =
  "Alle Softwarelösungen von KBS im Überblick: lokale KI-Infrastruktur, Custom RAG-Assistenten, Prozess-Automation, Voice-Agents, Governance-Bausteine und Enterprise-Rollout. Klare Festpreise pro Baustein.";

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
  return (
    <main className="relative">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "Softwarelösungen", href: "/softwareloesungen" }
        ]}
      />
      <BusinessModules />
      <FoerderungHinweis />
      <BusinessCTA />
      <Footer />
    </main>
  );
}
