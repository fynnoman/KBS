import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessCurriculum from "@/components/business/BusinessCurriculum";
import BusinessCTA from "@/components/business/BusinessCTA";
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
  return (
    <main className="relative">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "Kurse", href: "/kurse" }
        ]}
      />
      <BusinessCurriculum />
      <BusinessCTA />
      <Footer />
    </main>
  );
}
