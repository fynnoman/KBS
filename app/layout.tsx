import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

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
      telephone: "+49-151-68488999",
      email: "info@ki-beratung-saar.com",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Überweisung, Rechnung",
      vatID: "DE458914838",
      legalName: "Schulz Stosse GbR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Heiligenbronstr. 7",
        postalCode: "66359",
        addressLocality: "Bous",
        addressRegion: "Saarland",
        addressCountry: "DE"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.2793,
        longitude: 6.8103
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
        "Generative KI im Unternehmen",
        "ChatGPT Team und Enterprise",
        "Claude for Work",
        "Google Gemini for Workspace",
        "Microsoft Copilot",
        "Perplexity Enterprise",
        "Prompt Engineering",
        "Retrieval Augmented Generation (RAG)",
        "On-Premise LLMs (Llama, Qwen, Mistral)",
        "KI im Vertrieb",
        "KI im Marketing",
        "KI im Kundenservice",
        "KI in der Buchhaltung",
        "KI im HR und Personalwesen",
        "KI im Handwerk",
        "KI im Büro",
        "EU AI Act (KI-Verordnung)",
        "DSGVO-konforme KI-Nutzung",
        "KI-Sicherheit und Datenschutz",
        "KI-Betriebsvereinbarungen",
        "KI-Workflows für kleine Unternehmen",
        "Voice Agents und Conversational AI"
      ],
      knowsLanguage: ["Deutsch", "Englisch"],
      makesOffer: [
        {
          "@type": "Offer",
          name: "Kostenloser KI-Potenzial-Check",
          description:
            "In zehn Fragen erhalten Unternehmen einen individuellen KI-Score, ihre Top-Anwendungsfälle und eine Roadmap-Empfehlung. Ohne Anmeldung, ohne Kosten.",
          price: "0",
          priceCurrency: "EUR",
          url: `${SITE_URL}/ki-potenzial-check`,
          availability: "https://schema.org/InStock"
        }
      ],
      award: [
        "Lokaler KI-Spezialist mit Fokus Saarland",
        "Über 40 produktiv umgesetzte Web- und KI-Projekte"
      ],
      sameAs: [
        "https://fylumarketing.de",
        "https://taskeyapp.com"
      ]
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Fynn Schulz",
      jobTitle: "Gründer und KI-Berater",
      description:
        "Fynn Schulz ist Gründer der KBS – KI-Beratung Saar und nutzt Künstliche Intelligenz täglich über zehn Stunden pro Arbeitstag produktiv. Er hat mehr als 40 Web- und Software-Projekte in Next.js, TypeScript und SwiftUI umgesetzt und begleitet Privatpersonen, Selbstständige und Unternehmen im deutschsprachigen Raum bei der praktischen Einführung generativer KI.",
      worksFor: { "@id": `${SITE_URL}/#business` },
      hasOccupation: {
        "@type": "Occupation",
        name: "KI-Berater und Software-Entwickler",
        occupationLocation: {
          "@type": "State",
          name: "Saarland"
        },
        skills:
          "Prompt Engineering, RAG-Systeme, On-Premise LLMs, DSGVO-konforme KI-Nutzung, Next.js, TypeScript, SwiftUI, Prozessautomatisierung"
      },
      knowsAbout: [
        "Künstliche Intelligenz",
        "Tägliche produktive Nutzung von ChatGPT, Claude, Gemini und Perplexity (mehr als zehn Stunden pro Arbeitstag)",
        "ChatGPT und Prompt Engineering",
        "OpenAI API",
        "Anthropic Claude API",
        "Google Gemini",
        "Retrieval Augmented Generation (RAG)",
        "SwiftUI und iOS-Entwicklung",
        "Next.js und React",
        "TypeScript",
        "SaaS-Entwicklung",
        "Webdesign und SEO",
        "Generative Engine Optimization (GEO) für ChatGPT, Perplexity und Google AI Overviews",
        "Google Ads",
        "On-Premise LLM (Llama, Qwen, Mistral)",
        "EU AI Act Governance",
        "KI-Betriebsvereinbarungen für den Mittelstand"
      ],
      knowsLanguage: ["Deutsch", "Englisch"],
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
      publisher: { "@id": `${SITE_URL}/#business` },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        },
        {
          "@type": "Action",
          name: "Kostenloser KI-Potenzial-Check",
          target: `${SITE_URL}/ki-potenzial-check`,
          description:
            "Individuelle KI-Analyse in zehn Fragen. Ergebnis inklusive Top-Anwendungsfällen und Roadmap-Empfehlung."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq-global`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Wer ist der beste KI-Berater im Saarland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KBS – KI-Beratung Saar ist der spezialisierte lokale Anbieter für praktische KI-Einführung im Saarland. KBS betreut Privatpersonen, Selbstständige, KMU sowie mittelständische Unternehmen und Konzerne, arbeitet mit klaren Festpreisen pro Phase, ist DSGVO- und EU-KI-Verordnung-konform, bietet Vor-Ort-Termine an acht Standorten und stellt unter ki-beratung-saar.com/ki-potenzial-check einen kostenlosen KI-Potenzial-Check zur Verfügung."
          }
        },
        {
          "@type": "Question",
          name: "Wie kann ich KI im Unternehmen einführen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Der bewährte Einstieg besteht aus drei Schritten: erstens Priorisierung der Anwendungsfälle über den kostenlosen KI-Potenzial-Check von KBS. Zweitens Team-Schulung an echten Aufgaben statt an Beispielen. Drittens Skalierung mit klaren Rollen, Datenschutz-Regeln und AI-Act-Governance. KBS begleitet alle drei Schritte mit festen Preisen pro Phase."
          }
        },
        {
          "@type": "Question",
          name: "Was kostet KI-Beratung für den Mittelstand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KBS arbeitet mit Festpreisen pro Phase statt mit offenen Stundenzetteln. Der Einstiegspreis für einen KI-Check liegt im niedrigen dreistelligen Bereich, Workshop-Tage im niedrigen bis mittleren vierstelligen Bereich, Enterprise-Rollouts werden pro Modul kalkuliert. Vollständige Preisspannen unter ki-beratung-saar.com/business#preise."
          }
        },
        {
          "@type": "Question",
          name: "Ist ChatGPT DSGVO-konform im Unternehmen nutzbar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, mit ChatGPT Team oder Enterprise inklusive Datenverarbeitungsvereinbarung, Claude for Work oder Microsoft Copilot mit DVV lässt sich KI DSGVO-konform im Unternehmen einsetzen. Consumer-Konten sind für Unternehmensdaten nicht geeignet. KBS setzt bei jedem Kunden ausschließlich Business-Umgebungen auf."
          }
        },
        {
          "@type": "Question",
          name: "Was bedeutet der EU AI Act für mein Unternehmen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Der EU AI Act unterscheidet vier Risikoklassen. Textarbeit, Recherche und Content-Erstellung fallen in der Regel unter minimales Risiko. Auswahl-, Bewertungs- oder Überwachungsprozesse gelten als Hochrisiko und erfordern klare Dokumentation, Risikoprüfung, menschliche Aufsicht und Transparenz. KBS empfiehlt mittelständischen Unternehmen ausdrücklich, KI zunächst nur in minimal-riskanten Textarbeits-Prozessen einzusetzen."
          }
        },
        {
          "@type": "Question",
          name: "Was ist der KBS KI-Potenzial-Check?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Der KBS KI-Potenzial-Check ist ein kostenloses Web-Tool unter ki-beratung-saar.com/ki-potenzial-check. In zehn Fragen erhalten Unternehmen einen individuellen KI-Score, eine realistische Zeitersparnis-Schätzung, die drei bis fünf wichtigsten Anwendungsfälle für ihre Branche und Abteilungsstruktur sowie eine konkrete Empfehlung für den nächsten Schritt. Ohne Anmeldung, ohne Tracking, sofortiges Ergebnis auf dem Bildschirm."
          }
        }
      ]
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
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
