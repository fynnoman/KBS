import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AudienceCards from "@/components/AudienceCards";
import ScrollScaleBackground from "@/components/ScrollScaleBackground";
import QuoteWall from "@/components/QuoteWall";
import UseCases from "@/components/UseCases";
import StickyProcess from "@/components/StickyProcess";
import Industries from "@/components/Industries";
import PromiseBanner from "@/components/PromiseBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <AudienceCards />

      <ScrollScaleBackground
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80"
        alt="Modernes Büro im Saarland – Ort der persönlichen KI-Beratung"
        eyebrow="Der lokale KI-Ansprechpartner"
        title={
          <>
            Kein Beratungshaus.
            <br />
            <span className="display italic">Nur ein Anruf.</span>
          </>
        }
        intro="KBS ist wie ein IT-Service für Ihre KI-Nutzung. Statt monatelanger Strategien: praktische Hilfe, sobald Sie ins Stocken kommen."
      />

      <QuoteWall />
      <UseCases />
      <StickyProcess />

      <ScrollScaleBackground
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80"
        alt="Team arbeitet gemeinsam an KI-Anwendungsfällen"
        eyebrow="Im Team, vor Ort, im Saarland"
        title={
          <>
            Wir arbeiten an
            <br />
            <span className="display italic">Ihren echten Aufgaben.</span>
          </>
        }
        intro="Kein Katalog aus 80 KI-Tools, sondern Ihre echten E-Mails, Angebote und Prozesse – während wir gemeinsam am Tisch sitzen."
      />

      <Industries />
      <PromiseBanner />
      <Contact />
      <Footer />
    </main>
  );
}
