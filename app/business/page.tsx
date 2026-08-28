import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessIndustries from "@/components/business/BusinessIndustries";
import BusinessProcess from "@/components/business/BusinessProcess";
import BusinessCurriculum from "@/components/business/BusinessCurriculum";
import BusinessModules from "@/components/business/BusinessModules";
import BusinessPreise from "@/components/business/BusinessPreise";
import BusinessReferences from "@/components/business/BusinessReferences";
import BusinessFAQ from "@/components/business/BusinessFAQ";
import BusinessCTA from "@/components/business/BusinessCTA";
import { SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/business`;
const DESCRIPTION =
  "KBS Business bringt KI in mittelständische Unternehmen und Konzerne – lokale KI auf Mac Mini und dedizierten Servern, Custom RAG-Assistenten, Prozess-Automation, Enterprise-Rollout, DSGVO- und EU-AI-Act-konform mit klaren Festpreisen pro Phase.";

export const metadata: Metadata = {
  title: "KBS Business · Enterprise-KI mit lokaler Datenhoheit",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS – KI-Beratung Saar",
    title: "KBS Business · Enterprise-KI mit lokaler Datenhoheit",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KBS Business – Enterprise-KI mit lokaler Datenhoheit"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KBS Business · Enterprise-KI",
    description: DESCRIPTION,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  keywords: [
    "Enterprise KI Beratung",
    "lokale KI Mac Mini",
    "on premise LLM Deutschland",
    "RAG Assistent Unternehmen",
    "KI Rollout Mittelstand",
    "DSGVO KI",
    "EU AI Act Beratung",
    "KI Automation Deutschland",
    "Custom KI Assistent",
    "KI für Kanzleien",
    "KI für Praxen",
    "on premise KI Server",
    "KI ohne Cloud",
    "KI Prozessautomation"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "KBS Business – Enterprise-KI-Beratung und Implementierung",
      serviceType: "Enterprise AI Consulting and Implementation",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "Country", name: "Deutschland" },
      description: DESCRIPTION,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Mittelständische Unternehmen und Konzerne mit 20 bis 500 Mitarbeitern"
      },
      offers: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lokale KI auf Mac Mini oder dedizierten Servern",
            description:
              "On-premise LLM-Installation mit Llama, Qwen oder Mistral. Volle Datenhoheit, keine Cloud-Übermittlung."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom KI-Assistenten (RAG)",
            description:
              "Maßgeschneiderte Assistenten für Firmenwissen, integriert in Outlook, Slack, Web-Interfaces oder CRM."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prozess-Automation mit KI",
            description:
              "Rechnungs-OCR, E-Mail-Klassifizierung, Angebotsvorbereitung, Ticket-Triage."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise-Rollout und Governance",
            description:
              "Ausrollen für 50 bis 500 Mitarbeiter mit Nutzungsrichtlinien, Schulung und Erfolgsmessung."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "KI-Audit für Bestandsnutzung",
            description:
              "Analyse aktueller offizieller und inoffizieller KI-Nutzung im Unternehmen, Compliance-Prüfung, Kostenoptimierung."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom KI-Entwicklung und Integrationen",
            description:
              "Individuelle KI-Tools mit Integration in SAP, DATEV, Salesforce, Microsoft 365 und eigene ERPs."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "KI-Voice-Agents und Callbots",
            description:
              "Automatisierte Telefonannahme, Terminvereinbarung und Anrufer-Triage in natürlichem Deutsch."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DSGVO- und EU-AI-Act-Compliance",
            description:
              "Klassifizierung nach EU AI Act Risikostufen, Dokumentation, Betriebsvereinbarungen, Schulung von KI-Verantwortlichen."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Start",
          item: SITE_URL
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Business",
          item: PAGE_URL
        }
      ]
    }
  ]
};

export default function BusinessPage() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <BusinessHero />
      <BusinessCTA />
      <BusinessCurriculum />
      <BusinessModules />
      <BusinessIndustries />
      <BusinessProcess />
      <BusinessReferences />
      <BusinessPreise />
      <BusinessFAQ />
      <Footer />
    </main>
  );
}
