"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "../Reveal";

type Reference = {
  name: string;
  tag: string;
  body: string;
  href: string;
  logo: string;
};

const REFERENCES: Reference[] = [
  {
    name: "Taskey",
    tag: "SaaS · Facility Management DACH",
    body:
      "Eigene SaaS-Plattform für Gebäudereinigungs- und Facility-Betriebe. iOS-App und Web-Client, NFC-Zeiterfassung, Auftragssteuerung, Rechnungslogik und DATEV-Export – produktiv im Kundeneinsatz.",
    href: "https://taskeyapp.com",
    logo: "/logos/taskey.png"
  },
  {
    name: "Immovation",
    tag: "Proptech · Immobilien",
    body:
      "Digitale Plattform für den professionellen Immobilienbereich. Automatisierte Objektaufbereitung, KI-gestützte Recherche und optimierte Verwaltungsprozesse für Makler und Verwalter.",
    href: "https://immovation.app",
    logo: "/logos/immovation.png"
  },
  {
    name: "Fylu Marketing",
    tag: "Webdesign · Performance-Marketing",
    body:
      "Marketing- und Webdesign-Studio mit Fokus auf Conversion-Analysen und Neubau hochwertiger Firmen-Websites. Über vierzig produktive Deployments in Next.js für Kanzleien, Praxen, Handwerk und Dienstleister.",
    href: "https://fylumarketing.de",
    logo: "/logos/fylu.png"
  },
  {
    name: "Triathlon Saarbrücken",
    tag: "Gründungsprogramm · Universität des Saarlandes",
    body:
      "Teilnahme am Gründungs- und Innovationsprogramm der Universität des Saarlandes. Enge Verzahnung mit Forschung, universitären Partnern und dem regionalen Startup-Ökosystem.",
    href: "https://www.uni-saarland.de/",
    logo: "/logos/triathlon.png"
  }
];

function LogoTile({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-ink-900/10 bg-ink-50 text-[15px] font-semibold text-ink-700">
        {name.charAt(0)}
      </div>
    );
  }
  return (
    <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-ink-900/10 bg-white">
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
              <span className="chip">Referenzen &amp; Portfolio</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Produkte, die wir
                <br />
                <span className="display italic text-ink-500">
                  selbst betreiben.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              KBS entsteht nicht aus PowerPoint-Theorie. Hinter der Beratung
              steht eine Gruppe aktiver Produkt- und Softwareentwickler mit
              eigenem SaaS, eigener Agentur und universitären Gründungsprojekten.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {REFERENCES.map((ref, i) => (
            <Reveal key={ref.name} delay={i * 0.04}>
              <a
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col p-6 md:p-7 transition-all hover:shadow-lift"
              >
                <div className="flex items-start gap-4">
                  <LogoTile src={ref.logo} name={ref.name} />
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
