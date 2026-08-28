import Reveal from "../Reveal";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Können KI-Modelle wirklich lokal auf einem Mac Mini laufen?",
    a: "Ja. Ein Mac Mini mit M4 Pro und 48 bis 64 GB Unified Memory führt problemlos Modelle bis rund 70 Milliarden Parametern aus (etwa Llama 3.3 70B in 4-Bit-Quantisierung). Für kleinere Modelle wie Mistral 7B oder Llama 8B reicht bereits ein Mac Mini M4 mit 16 GB. Für höhere parallele Last (mehrere hundert Nutzer gleichzeitig) empfehlen wir dedizierte Server mit NVIDIA-GPUs."
  },
  {
    q: "Wo liegen die Daten bei einer lokalen Installation?",
    a: "Ausschließlich auf Ihrem Gerät in Ihrem Netzwerk. Kein Cloud-Sync, kein API-Call zu OpenAI, Anthropic oder anderen Anbietern, keine Modell-Trainings-Zugriffe. Ihre Daten verlassen Ihre Infrastruktur nicht. Zugriff erfolgt via VPN oder lokales Netz, integriert in bestehende Auth-Systeme."
  },
  {
    q: "Wie viel kostet eine Enterprise-Umsetzung?",
    a: "Preise hängen vom Umfang ab, wir arbeiten mit klaren Festpreisen pro Phase. Ein KI-Audit beginnt im niedrigen fünfstelligen Bereich, ein produktiver Pilot bewegt sich häufig zwischen 15.000 und 40.000 Euro, komplette Rollouts sind projektspezifisch. Konkrete Zahlen erhalten Sie nach dem Discovery-Call."
  },
  {
    q: "Können Sie in bestehende Systeme (SAP, DATEV, Microsoft 365, Salesforce) integrieren?",
    a: "Ja. Wir arbeiten API-basiert und haben Erfahrung mit den gängigen Enterprise-Systemen und deren Authentifizierungs-Modellen. Wo eine offizielle API fehlt, bauen wir gezielte Adapter – etwa über RPA-Bridges, iPaaS-Konnektoren oder direkte Datenbank-Anbindungen mit Ihrer IT-Zustimmung."
  },
  {
    q: "Wie gehen Sie mit dem EU AI Act um?",
    a: "Wir klassifizieren Ihre geplanten und bestehenden Anwendungsfälle nach den Risikostufen des EU AI Act, dokumentieren die notwendigen Nachweise für Ihre Compliance-Abteilung und beraten bei Betriebsvereinbarungen mit Ihrem Betriebsrat. Der EU AI Act ist kein Blocker, sondern ein Rahmen, in dem sich seriöse KI-Nutzung ohnehin bewegen sollte."
  },
  {
    q: "Was passiert nach dem Go-Live?",
    a: "Sie erhalten einen festen Ansprechpartner, monatliche Reviews mit dokumentierten KPIs und garantierte Reaktionszeiten für Support-Anfragen im Rahmen einer separaten Wartungsvereinbarung. Kein Projektabbruch nach Go-Live, keine plötzlichen Zusatzrechnungen."
  },
  {
    q: "Ist KBS groß genug für ein Unternehmen mit 300 Mitarbeitern?",
    a: "Ja. Wir haben Erfahrung mit Konzern-Rollouts, dokumentieren jede Phase sauber und arbeiten für sehr große parallele Rollouts mit erfahrenen Umsetzungspartnern zusammen. Sie bekommen einen festen Ansprechpartner und die Umsetzungs-Kapazität eines vernetzten Teams."
  },
  {
    q: "Wie unterscheidet sich KBS Business vom öffentlichen KBS-Angebot?",
    a: "Das reguläre KBS-Angebot richtet sich an Privatpersonen, Selbstständige und kleine Betriebe im Saarland – meist kurze Termine, klare Einzelleistungen. KBS Business ist der Bereich für größere Unternehmen und Konzerne mit mehrstufigen Projekten, eigener Entwicklung, KI auf dem eigenen Server und laufender Betreuung."
  }
];

export default function BusinessFAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ki-beratung-saar.com/business#faq",
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
          <div className="mb-14 max-w-3xl">
            <span className="chip">Entscheider-FAQ</span>
            <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
              Was IT-Leitung und Geschäftsführung
              <br />
              <span className="display italic text-ink-500">
                zuerst wissen wollen.
              </span>
            </h2>
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
