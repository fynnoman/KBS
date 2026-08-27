import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von KBS – KI-Beratung Saar. Informationen zum Umgang mit personenbezogenen Daten gemäß DSGVO.",
  alternates: { canonical: "https://ki-beratung-saar.com/datenschutz" },
  robots: { index: true, follow: true }
};

export default function DatenschutzPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-600">
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir
              verarbeiten Ihre Daten ausschließlich auf Grundlage der
              gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">
                Verantwortlich
              </h2>
              <p>
                KBS – KI-Beratung Saar<br />
                Musterstraße 1, 66111 Saarbrücken<br />
                info@ki-beratung-saar.com
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">
                Kontaktaufnahme
              </h2>
              <p>
                Nehmen Sie per E-Mail oder Telefon Kontakt mit uns auf, werden
                Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen gespeichert.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">Ihre Rechte</h2>
              <p>
                Ihnen stehen bezüglich Ihrer gespeicherten Daten das Recht auf
                Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und
                Datenübertragbarkeit zu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
