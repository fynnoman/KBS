import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KBS – KI-Beratung Saar",
    short_name: "KBS",
    description:
      "Lokaler KI-Ansprechpartner im Saarland. Für Privatpersonen, Selbstständige und kleine Unternehmen.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0E121A",
    lang: "de-DE",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
