import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://ki-beratung-saar.com";
const SITE_NAME = "KBS – KI-Beratung Saar";
const DESCRIPTION =
  "KBS ist der lokale KI-Ansprechpartner im Saarland. Wir zeigen Privatpersonen, Selbstständigen und kleinen Unternehmen, wie sie ChatGPT und andere KI-Tools verständlich und praktisch nutzen – vor Ort in Saarbrücken, Saarlouis, Neunkirchen, Homburg, Merzig und St. Wendel.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KBS – KI-Beratung Saar | KI verstehen. Einfach machen.",
    template: "%s · KBS – KI-Beratung Saar"
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "KI Beratung Saarland",
    "KI Beratung Saarbrücken",
    "KI Hilfe Saarland",
    "KI Hilfe Saarbrücken",
    "ChatGPT Hilfe Saarland",
    "ChatGPT Schulung Saarland",
    "ChatGPT für Anfänger",
    "KI Schulung Saarland",
    "KI Schulung Saarbrücken",
    "KI Workshop Saarbrücken",
    "KI für Unternehmen Saarland",
    "KI für Handwerker",
    "KI für Selbstständige",
    "KI für Senioren",
    "KI Beratung Saarlouis",
    "KI Beratung Neunkirchen",
    "KI Beratung Homburg",
    "künstliche Intelligenz Saarland"
  ],
  authors: [{ name: "Fynn Schulz", url: SITE_URL }],
  creator: "Fynn Schulz",
  publisher: SITE_NAME,
  category: "Business Consulting",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "de-DE": SITE_URL,
      "x-default": SITE_URL
    }
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "KBS – KI-Beratung Saar | KI verstehen. Einfach machen.",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KBS – KI-Beratung Saar. KI verstehen. Einfach machen."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KBS – KI-Beratung Saar",
    description:
      "Lokaler KI-Ansprechpartner im Saarland. Für Privatpersonen, Selbstständige und kleine Unternehmen.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  formatDetection: {
    email: true,
    telephone: true,
    address: true
  },
  other: {
    "geo.region": "DE-SL",
    "geo.placename": "Saarland, Saarbrücken",
    "geo.position": "49.2354;6.9969",
    ICBM: "49.2354, 6.9969"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0E121A" }
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light"
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: ["KBS", "KI-Beratung Saar", "KBS Saar"],
      url: SITE_URL,
      logo: `${SITE_URL}/kbs-logo.png`,
      image: `${SITE_URL}/opengraph-image`,
      description: DESCRIPTION,
      slogan: "KI verstehen. Einfach machen.",
      telephone: "+49-681-00000000",
      email: "info@ki-beratung-saar.com",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Überweisung, Rechnung",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Musterstraße 1",
        postalCode: "66111",
        addressLocality: "Saarbrücken",
        addressRegion: "Saarland",
        addressCountry: "DE"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.2354,
        longitude: 6.9969
      },
      areaServed: [
        { "@type": "State", name: "Saarland" },
        { "@type": "City", name: "Saarbrücken" },
        { "@type": "City", name: "Saarlouis" },
        { "@type": "City", name: "Neunkirchen" },
        { "@type": "City", name: "Homburg" },
        { "@type": "City", name: "Merzig" },
        { "@type": "City", name: "St. Wendel" },
        { "@type": "City", name: "Völklingen" },
        { "@type": "City", name: "Dillingen" }
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 49.2354,
          longitude: 6.9969
        },
        geoRadius: "60000"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          opens: "09:00",
          closes: "18:00"
        }
      ],
      founder: { "@id": `${SITE_URL}/#person` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "KI-Leistungen",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KBS KI-Hilfe für Privatpersonen",
              description:
                "Persönliche Unterstützung im Umgang mit ChatGPT und anderen KI-Tools. Ideal für Senioren, Berufstätige und Familien."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KBS KI-Check für Selbstständige und kleine Unternehmen",
              description:
                "Analyse konkreter KI-Anwendungsfälle im Unternehmen. Wir zeigen, wo KI Zeit spart und wo nicht."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KBS KI-Workshop für Teams",
              description:
                "Team-Workshop vor Ort. Wir arbeiten an echten Aufgaben – E-Mails, Angebote, Dokumentation, Vertrieb, Marketing."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KBS KI-Einrichtung",
              description:
                "Individuelle Einrichtung von ChatGPT, Team-Accounts, Prompts, Wissensbasis und KI-Assistenten."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KBS KI-Sprechstunde",
              description:
                "Laufende monatliche Betreuung mit festem KI-Ansprechpartner für Unternehmen."
            }
          }
        ]
      },
      knowsAbout: [
        "Künstliche Intelligenz",
        "ChatGPT",
        "Claude",
        "Google Gemini",
        "Microsoft Copilot",
        "Prompt Engineering",
        "KI im Handwerk",
        "KI im Büro",
        "KI-Sicherheit und Datenschutz",
        "KI-Workflows für kleine Unternehmen"
      ],
      sameAs: []
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Fynn Schulz",
      jobTitle: "Gründer und KI-Berater",
      worksFor: { "@id": `${SITE_URL}/#business` },
      knowsAbout: [
        "Künstliche Intelligenz",
        "Tägliche Nutzung von ChatGPT, Claude und Perplexity (10+ Stunden pro Tag)",
        "ChatGPT und Prompt Engineering",
        "OpenAI API",
        "Anthropic Claude API",
        "Google Gemini",
        "SwiftUI und iOS-Entwicklung",
        "Next.js und React",
        "TypeScript",
        "SaaS-Entwicklung",
        "Webdesign und SEO",
        "Google Ads",
        "On-Premise LLM (Llama, Qwen, Mistral)"
      ],
      sameAs: [
        "https://github.com/fynnoman",
        "https://fylumarketing.de",
        "https://taskeyapp.com"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#business` }
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/kbs-logo.png`,
        width: 1536,
        height: 1024
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+49-681-00000000",
        contactType: "customer service",
        areaServed: "DE",
        availableLanguage: ["de", "en"]
      }
    }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
