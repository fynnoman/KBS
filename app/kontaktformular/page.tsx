import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import {
  SITE_URL,
  CALENDLY_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL
} from "@/lib/config";

const PAGE_URL = `${SITE_URL}/kontaktformular`;
const DESCRIPTION =
  "Anfrage an KBS – KI-Beratung Saar. Kurzes Formular für Ihre Frage oder direkt Termin buchen, Anruf oder E-Mail. Keine Datenspeicherung, keine externen Formularsysteme.";

export const metadata: Metadata = {
  title: "Anfrage · KBS – KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Anfrage · KBS",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "de_DE",
    siteName: "KBS – KI-Beratung Saar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function KontaktformularPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${PAGE_URL}#contact`,
    name: "Anfrage · KBS – KI-Beratung Saar",
    url: PAGE_URL,
    mainEntity: {
      "@type": "Organization",
      name: "KBS – KI-Beratung Saar",
      email: EMAIL,
      telephone: PHONE_TEL
    }
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "Anfrage", href: "/kontaktformular" }
        ]}
      />

      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <div>
                <span className="chip">Anfrage</span>
                <h1 className="mt-5 max-w-2xl text-[38px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-[56px]">
                  Sagen Sie kurz,
                  <br />
                  <span className="display italic text-ink-500">
                    worum es geht.
                  </span>
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500">
                  Ein Satz reicht. Wir melden uns per E-Mail zurück – meist am
                  gleichen oder nächsten Werktag. Wenn Sie lieber direkt
                  telefonieren oder einen Termin buchen möchten, ist das oben
                  ebenfalls möglich.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-700">
                      <Calendar size={17} strokeWidth={2.4} />
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-ink-900">
                        Direkt Termin buchen
                      </p>
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-[14px] text-ink-500 underline underline-offset-2 hover:text-ink-800"
                      >
                        Erstgespräch buchen
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-700">
                      <Phone size={17} strokeWidth={2.4} />
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-ink-900">
                        Direkt anrufen
                      </p>
                      <Link
                        href={`tel:${PHONE_TEL}`}
                        className="mt-1 inline-flex items-center gap-1 text-[14px] text-ink-500 underline underline-offset-2 hover:text-ink-800"
                      >
                        {PHONE_DISPLAY}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-ink-900/5 text-ink-700">
                      <Clock size={17} strokeWidth={2.4} />
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-ink-900">
                        Erreichbarkeit
                      </p>
                      <p className="mt-1 text-[14px] text-ink-500">
                        Mo – Fr, 09 – 18 Uhr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <LeadForm
                source="/kontaktformular"
                defaultSubject="Anfrage an KBS über das Kontaktformular"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
