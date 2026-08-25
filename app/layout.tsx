import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KBS – KI-Beratung Saar | KI verstehen. Einfach machen.",
  description:
    "KBS ist Ihr lokaler Ansprechpartner für KI im Saarland. Wir helfen Privatpersonen, Selbstständigen und Unternehmen, KI verständlich und praktisch zu nutzen.",
  keywords: [
    "KI Beratung Saarland",
    "KI Beratung Saarbrücken",
    "KI Hilfe Saarland",
    "ChatGPT Hilfe Saarland",
    "KI Schulung Saarland",
    "KI für Unternehmen Saarland",
    "KI für Handwerker",
    "KI für Selbstständige",
    "KI für Senioren"
  ],
  metadataBase: new URL("https://kbs-saar.de"),
  openGraph: {
    title: "KBS – KI-Beratung Saar",
    description:
      "Eine Frage zu KI? Ruf uns an. KBS ist Ihr lokaler KI-Ansprechpartner im Saarland.",
    type: "website",
    locale: "de_DE"
  }
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
      </head>
      <body>{children}</body>
    </html>
  );
}
