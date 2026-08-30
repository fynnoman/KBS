"use client";

import Reveal from "../Reveal";
import {
  Server,
  Brain,
  Workflow,
  Users,
  ClipboardCheck,
  Code2,
  Phone,
  Scale
} from "lucide-react";

const USE_CASES = [
  {
    icon: Server,
    label: "Lokale KI auf Ihrer Hardware",
    body:
      "Ein Mac Mini M4 Pro oder ein dedizierter Linux-Server läuft bei Ihnen im Haus. Modelle wie Llama 3.3 70B oder Qwen 2.5 antworten in unter zwei Sekunden, ohne dass ein einziges Byte Ihre Infrastruktur verlässt.",
    tag: "Datenhoheit"
  },
  {
    icon: Brain,
    label: "Custom KI-Assistenten (RAG)",
    body:
      "Ein Assistent, der Ihre Handbücher, Verträge, Angebote, Wikis und CRM-Daten kennt. Trainiert auf Ihrem Wissen, verfügbar für Ihr Team, in Outlook, Slack oder als eigenes Webinterface eingebunden.",
    tag: "Firmenwissen"
  },
  {
    icon: Workflow,
    label: "Prozess-Automation mit KI",
    body:
      "Rechnungs-OCR, E-Mail-Klassifizierung, Angebotsvorbereitung, Ticket-Triage. Wir bauen die Automation, die spürbar Personalkosten spart, und dokumentieren jeden Schritt für Ihre Revision.",
    tag: "Effizienz"
  },
  {
    icon: Users,
    label: "Enterprise-Rollout & Governance",
    body:
      "50 bis 500 Mitarbeiter systematisch mit KI ausstatten. Nutzungsrichtlinien, Schulungspfade, Multiplikatoren-Programm und Erfolgsmessung. Kein Wildwuchs, keine Shadow-AI mehr im Betrieb.",
    tag: "Rollout"
  },
  {
    icon: ClipboardCheck,
    label: "KI-Audit für Bestandsnutzung",
    body:
      "Wir analysieren, wo Ihre Mitarbeiter heute schon KI nutzen (offiziell und inoffiziell), welche Compliance-Risiken schlummern, welche Lizenzen doppelt bezahlt werden und wo echte Automatisierungspotentiale liegen.",
    tag: "Audit"
  },
  {
    icon: Code2,
    label: "Custom SaaS & Integrationen",
    body:
      "Wir bauen individuelle KI-Tools, die in Ihre Systemlandschaft passen, SAP, DATEV, Salesforce, Microsoft 365, HubSpot oder Ihr eigenes ERP. Kein Off-the-Shelf-Kompromiss, sondern präzise auf Ihre Prozesse zugeschnitten.",
    tag: "Entwicklung"
  },
  {
    icon: Phone,
    label: "KI-Voice-Agents & Callbots",
    body:
      "Automatisierte Telefonannahme, Terminvereinbarung, Anrufer-Triage und Weiterleitung. Reduziert die Last auf Ihrer Zentrale und entlastet Assistenz-Teams messbar, auf Deutsch und mit natürlicher Stimme.",
    tag: "Voice"
  },
  {
    icon: Scale,
    label: "DSGVO & EU AI Act Compliance",
    body:
      "Wir prüfen Ihre KI-Nutzung gegen DSGVO und den EU AI Act, klassifizieren Ihre Anwendungsfälle nach Risikostufen, formulieren Betriebsvereinbarungen und schulen Ihre KI-Verantwortlichen.",
    tag: "Compliance"
  }
];

export default function BusinessUseCases() {
  return (
    <section id="use-cases" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">Was wir für Unternehmen bauen</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Acht Enterprise-
                <br />
                <span className="display italic text-ink-500">
                  Anwendungsfälle.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Alle Bausteine funktionieren einzeln oder kombiniert, abhängig
              davon, wo Sie heute stehen und wohin Sie wollen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {USE_CASES.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <Reveal key={uc.label} delay={i * 0.04}>
                <div className="card h-full p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                      <Icon size={18} strokeWidth={1.9} className="text-accent-700" />
                    </div>
                    <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                      {uc.tag}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl leading-snug tracking-tight text-ink-900 sm:text-2xl">
                    {uc.label}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                    {uc.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
