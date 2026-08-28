"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "../Reveal";

type LogoBg = "light" | "dark";

type Reference = {
  name: string;
  tag: string;
  body: string;
  href: string;
  logo: string;
  logoBg?: LogoBg;
};

const REFERENCES: Reference[] = [
  {
    name: "Taskey",
    tag: "SaaS · Facility Management DACH",
    body:
      "Eigene SaaS-Plattform für Gebäudereinigungs- und Facility-Betriebe. iOS-App und Web-Client, NFC-Zeiterfassung, Auftragssteuerung, Rechnungslogik und DATEV-Export – produktiv im Kundeneinsatz.",
    href: "https://taskeyapp.com",
    logo: "/logos/taskey.jpg"
  },
  {
    name: "Pavan-Rent",
    tag: "Vermietung · Ferien- und Wohnimmobilien",
    body:
      "Digitale Vermietungs- und Verwaltungslösung für einen professionellen Vermieter. Buchungs- und Anfragestrecke, Belegverarbeitung sowie Objekt- und Gastverwaltung – alles KI-gestützt und ohne Portalkosten.",
    href: "https://pavan-rent.de",
    logo: "/logos/pavan.png",
    logoBg: "dark"
  },
  {
    name: "Fylu Marketing",
    tag: "Webdesign · Performance-Marketing",
    body:
      "Marketing- und Webdesign-Studio mit Fokus auf Conversion-Analysen und Neubau hochwertiger Firmen-Websites. Über vierzig produktive Deployments in Next.js für Kanzleien, Praxen, Handwerk und Dienstleister.",
    href: "https://fylumarketing.de",
    logo: "/logos/fylu.jpg"
  },
  {
    name: "Syncrony",
    tag: "Systemintegration · Enterprise-Software",
    body:
      "Systemintegrations- und Softwarehaus. Wir liefern die KI-Bausteine, die in die Enterprise-Landschaften der Syncrony-Kunden – ERP, CRM, DMS – produktiv eingebunden werden.",
    href: "https://syncrony-systems.com",
    logo: "/logos/syncrony.jpg"
  },
  {
    name: "Triathlon Saarbrücken",
    tag: "Gründungsprogramm · Universität des Saarlandes",
    body:
      "Teilnahme am Gründungs- und Innovationsprogramm der Universität des Saarlandes. Enge Verzahnung mit Forschung, universitären Partnern und dem regionalen Startup-Ökosystem.",
    href: "https://www.uni-saarland.de/",
    logo: "/logos/triathlon.jpg"
  }
];

function LogoTile({
  src,
  name,
  bg = "light"
}: {
  src: string;
  name: string;
  bg?: LogoBg;
}) {
  const [failed, setFailed] = useState(false);
  const tileBg = bg === "dark" ? "bg-ink-900 border-ink-900" : "bg-white border-ink-900/10";
  if (failed) {
    return (
      <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-ink-900/10 bg-ink-50 text-[15px] font-semibold text-ink-700">
        {name.charAt(0)}
      </div>
    );
  }
  return (
    <div
      className={`inline-flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${tileBg}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${name} Logo`}
        onError={() => setFailed(true)}
        className="h-full w-full object-contain p-1.5"
      />
    </div>
  );
}

export default function BusinessReferences() {
  return (
    <section id="referenzen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">Referenzen</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Unsere
                <br />
                <span className="display italic text-ink-500">
                  Referenzen.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Eigene Produkte, Partnerprojekte und universitäre Programme, aus
              denen wir tägliche Praxis in die Beratung mitbringen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REFERENCES.map((ref, i) => (
            <Reveal key={ref.name} delay={i * 0.04}>
              <a
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col p-6 md:p-7 transition-all hover:shadow-lift"
              >
                <div className="flex items-start gap-4">
                  <LogoTile src={ref.logo} name={ref.name} bg={ref.logoBg} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium tracking-tight text-ink-900 sm:text-xl">
                        {ref.name}
                      </h3>
                      <ExternalLink
                        size={13}
                        strokeWidth={2.2}
                        className="text-ink-400 transition-colors group-hover:text-ink-900"
                      />
                    </div>
                    <p className="mt-1 text-[11.5px] font-medium uppercase tracking-[0.15em] text-ink-400">
                      {ref.tag}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500">
                  {ref.body}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
