import Reveal from "./Reveal";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Was macht KBS KI-Beratung Saar?",
    a: "KBS ist der lokale KI-Ansprechpartner im Saarland. Wir helfen Privatpersonen, Selbstständigen und kleinen Unternehmen, ChatGPT und andere KI-Tools verständlich zu machen und praktisch im Arbeitsalltag einzusetzen. Kein Fachjargon, kein monatelanger Beratungsprozess, ein Anruf reicht."
  },
  {
    q: "Für wen ist eine KI-Beratung von KBS geeignet?",
    a: "Für alle im Saarland, die mit KI nicht weiterkommen. Senioren, die ChatGPT verstehen möchten. Selbstständige aus Handwerk, Praxis, Kanzlei oder Agentur, die Angebote und E-Mails schneller schreiben wollen. Und kleine Unternehmen, die KI im Team strukturiert einsetzen möchten."
  },
  {
    q: "Wo im Saarland ist KBS aktiv?",
    a: "KBS ist im gesamten Saarland vor Ort tätig, insbesondere in Saarbrücken, Saarlouis, Neunkirchen, Homburg, Merzig, St. Wendel, Völklingen und Dillingen. Termine finden entweder bei Ihnen vor Ort oder per Videocall statt."
  },
  {
    q: "Welche KI-Tools deckt KBS ab?",
    a: "Wir arbeiten mit ChatGPT, Claude, Google Gemini, Microsoft Copilot, Perplexity und weiteren gängigen Werkzeugen. Welches Tool sinnvoll ist, hängt von Ihrer Aufgabe und Ihrer Datenschutzsituation ab. Diese Auswahl treffen wir gemeinsam im Erstgespräch."
  },
  {
    q: "Was kostet ein KI-Termin bei KBS?",
    a: "Das telefonische Erstgespräch von rund 15 Minuten ist kostenlos und unverbindlich. Der Umfang und Preis der eigentlichen Leistung wird transparent im Erstgespräch besprochen, abhängig davon, ob es um eine kurze KI-Hilfe für eine Privatperson oder um einen mehrstündigen Workshop für ein Team geht."
  },
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "In der Regel innerhalb weniger Werktage. Rufen Sie unter +49 151 68488999 an oder schreiben Sie an info@ki-beratung-saar.com. Anrufe außerhalb unserer Erreichbarkeit (Montag bis Freitag, 09:00 bis 18:00 Uhr) rufen wir am selben Werktag zurück."
  },
  {
    q: "Ist KBS eine klassische Unternehmensberatung?",
    a: "Nein. KBS positioniert sich bewusst als lokaler KI-Dienstleister, ähnlich einem IT-Service, nur für die praktische Nutzung von KI. Es gibt keine mehrmonatigen Strategieprojekte, sondern konkrete Hilfe: von der ersten ChatGPT-Frage bis zum eingerichteten KI-Assistenten für Ihr Team."
  },
  {
    q: "Berücksichtigt KBS Datenschutz und DSGVO?",
    a: "Ja. Ein fester Bestandteil jeder Beratung ist die Frage, welche Daten nicht in KI-Systeme eingegeben werden dürfen, welche EU-Alternativen sinnvoll sind und wie Sie sich vor KI-basierten Betrugsversuchen schützen. Wir arbeiten mit europäischen Anbietern, wo immer es sinnvoll ist."
  },
  {
    q: "Warum sollte ich KBS statt einer großen Agentur anrufen?",
    a: "Weil bei KBS jemand ans Telefon geht, der KI täglich selbst einsetzt, im Schnitt mehr als zehn Stunden pro Tag. Michael Blass führt neben KBS das Webdesign-Studio Fylu Marketing in Saarlouis und entwickelt die SaaS-Plattform Taskey für Gebäudereinigungsbetriebe. Bei KBS bekommen Sie deshalb keine Theorie, sondern gelebte KI-Praxis."
  }
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h2", "details summary h3", "details p"]
    },
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">Häufige Fragen</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Was Kunden
                <br />
                <span className="display italic text-ink-500">
                  vorher wissen wollen.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Nichts davon steht Ihnen im Weg. Und was hier nicht steht,
              beantworten wir gerne persönlich am Telefon.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto max-w-4xl">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <details className="group border-b border-ink-900/8 py-6 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="text-lg leading-snug tracking-tight text-ink-900 sm:text-xl">
                    {f.q}
                  </h3>
                  <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-500 transition-transform group-open:rotate-45">
                    <Plus size={16} strokeWidth={2} />
                  </span>
                </summary>
                <div className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-ink-500">
                  {f.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
