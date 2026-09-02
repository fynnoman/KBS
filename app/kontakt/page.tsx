import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessCTA from "@/components/business/BusinessCTA";
import FoerderungHinweis from "@/components/business/FoerderungHinweis";
import FoerderungBadge from "@/components/business/FoerderungBadge";
import { SITE_URL } from "@/lib/config";

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
  return (
    <main className="relative">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "Kontakt", href: "/kontakt" }
        ]}
      />
      <FoerderungBadge />
      <BusinessCTA />
      <FoerderungHinweis />
      <Footer />
    </main>
  );
}
