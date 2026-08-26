import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von KBS – KI-Beratung Saar. Verantwortlich für den Inhalt und rechtliche Angaben gemäß § 5 TMG.",
  alternates: { canonical: "https://ki-beratung-saar.com/impressum" },
  robots: { index: true, follow: true }
};

export default function ImpressumPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Impressum
          </h1>
          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-600">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                KBS – KI-Beratung Saar<br />
                Musterstraße 1<br />
                66111 Saarbrücken
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">Kontakt</h2>
              <p>
                Telefon: 0681 · 000 000 00<br />
                E-Mail: hallo@ki-beratung-saar.com
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">
                Verantwortlich für den Inhalt
              </h2>
              <p>Fynn Schulz</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-ink-900">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
