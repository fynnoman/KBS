// Saarland city landing pages - each city gets genuinely unique content
// (economy, industries, use cases, FAQ) so the pages hold real local
// relevance for both Google and AI Overviews.

export type City = {
  slug: string;
  name: string;
  intro: string;
  economy: string;
  latitude: number;
  longitude: number;
  postalCodes: string[];
  populationApprox: number;
  keyIndustries: string[];
  useCases: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  travelNote: string;
};

export const CITIES: City[] = [
  {
    slug: "saarbruecken",
    name: "Saarbrücken",
    intro:
      "Saarbrücken ist als Landeshauptstadt der wirtschaftliche und administrative Kern des Saarlands. Kanzleien, Steuerberater, Kreativagenturen, Verwaltung und ein wachsendes IT- und Startup-Umfeld prägen die Innenstadt. KBS ist wöchentlich vor Ort und ist innerhalb von 30 Minuten aus dem Umland erreichbar.",
    economy:
      "Verwaltungssitz, Universität des Saarlandes, htw saar, DFKI-Standort, Sitz zahlreicher Kanzleien und Beratungshäuser sowie eines wachsenden IT- und Kreativsektors.",
    latitude: 49.2354,
    longitude: 6.9969,
    postalCodes: ["66111", "66113", "66115", "66117", "66119", "66121", "66123", "66125", "66127", "66129", "66130", "66131", "66132", "66133"],
    populationApprox: 181000,
    keyIndustries: [
      "Verwaltung und öffentlicher Sektor",
      "Kanzleien, Steuerberatung, Wirtschaftsprüfung",
      "IT und Softwareentwicklung (DFKI-Umfeld)",
      "Kreativ- und Kommunikationsagenturen",
      "Handel und Gastronomie in der Innenstadt"
    ],
    useCases: [
      {
        title: "KI für Anwaltskanzleien im Saarbrücker Zentrum",
        body:
          "Vertragsanalyse, Schriftsatz-Entwürfe und interne Wissenssuche mit Modellen, die den Kanzleiakten nicht schaden. Wir zeigen, welche Tools DSGVO-konform sind und wie eine lokale Installation aussehen kann."
      },
      {
        title: "KI in Steuer- und Wirtschaftsprüfer-Kanzleien",
        body:
          "Automatisierte Belegvorprüfung, Mandanten-E-Mail-Entwürfe, Recherche im Steuerrecht und interne Wissensdatenbanken. Wir setzen die Werkzeuge um, ohne Ihre DATEV- oder Addison-Infrastruktur zu gefährden."
      },
      {
        title: "KI-Workshops für Agenturen im Kreativquartier",
        body:
          "Content-Produktion, Kampagnen-Ideation, Kundenpräsentationen. Ein Team-Workshop im Nauwieser Viertel oder in der St. Johanner Straße direkt vor Ort."
      }
    ],
    faqs: [
      {
        q: "Wo im Saarbrücker Stadtgebiet ist KBS aktiv?",
        a: "KBS kommt zu Ihnen in alle Stadtteile: St. Johann, Alt-Saarbrücken, Malstatt, Burbach, Dudweiler, St. Arnual, Rodenhof, Rußhütte und die anderen Bezirke. Anfahrt inklusive."
      },
      {
        q: "Wie schnell ist KBS in Saarbrücken vor Ort?",
        a: "Kurzfristige Termine in der Regel innerhalb von 48 Stunden. Für Kanzleien und Agenturen in Kernbezirken oft am selben Werktag möglich."
      }
    ],
    travelNote:
      "Anfahrt aus Saarbrücken-Zentrum, Dudweiler, St. Arnual, Malstatt, Burbach und den umliegenden Stadtteilen inklusive."
  },
  {
    slug: "saarlouis",
    name: "Saarlouis",
    intro:
      "Saarlouis ist geprägt vom Ford-Werk und einer dichten Zuliefererlandschaft, dazu kommt ein starker Mittelstand und Einzelhandel in der Kreisstadt. Der wirtschaftliche Umbruch macht KI-Kompetenz aktuell besonders wertvoll, für Prozessoptimierung ebenso wie für neue Geschäftsmodelle.",
    economy:
      "Automobilzulieferer, Metallverarbeitung, Logistik, klassischer Mittelstand und Einzelhandel. Der Ford-Standortumbruch treibt viele Betriebe zur Suche nach neuen Effizienzhebeln.",
    latitude: 49.3134,
    longitude: 6.7523,
    postalCodes: ["66740"],
    populationApprox: 34500,
    keyIndustries: [
      "Automobilindustrie und Zulieferer",
      "Metallverarbeitung",
      "Logistik und Spedition",
      "Handwerk und produzierendes Gewerbe",
      "Einzelhandel und Gastronomie"
    ],
    useCases: [
      {
        title: "KI in Zulieferbetrieben nach dem Ford-Umbruch",
        body:
          "Angebotserstellung für neue Auftraggeber, mehrsprachige Ausschreibungen, Recherche zu Fördermitteln und Diversifizierungsoptionen. Wir helfen konkret bei der Umstellung."
      },
      {
        title: "KI für Metallverarbeitung und Handwerk",
        body:
          "Leistungsverzeichnisse aus Kundenanfragen, Baustellendokumentation per Sprachnotiz, Materialrecherche. Praktisch, im Betrieb ausprobiert."
      },
      {
        title: "KI-Hilfe für Einzelhandel in der Innenstadt",
        body:
          "Social-Media-Content, Newsletter, Antworten auf Google-Bewertungen, mehrsprachige Produkttexte für den grenznahen Kundenverkehr."
      }
    ],
    faqs: [
      {
        q: "Ist KBS auch für kleine Zulieferbetriebe interessant?",
        a: "Gerade für die. Ein Vormittag KI-Check kann zeigen, welche wiederkehrenden Angebots- und Kalkulationsarbeiten sich automatisieren lassen, ohne Investition in neue Software."
      },
      {
        q: "Kommt KBS auch in die Industriegebiete rund um Saarlouis?",
        a: "Ja. Anfahrt in die Industrieparks Lisdorfer Berg, Röderberg und die Zulieferer im Umland (Dillingen, Wallerfangen, Rehlingen-Siersburg) ist inklusive."
      }
    ],
    travelNote:
      "Anfahrt aus Saarlouis-Zentrum, Roden, Fraulautern, Lisdorf und den Industrieparks Lisdorfer Berg und Röderberg inklusive."
  },
  {
    slug: "neunkirchen",
    name: "Neunkirchen",
    intro:
      "Neunkirchen hat den Wandel von der Stahlstadt zur modernen Dienstleistungs- und Handelsstadt weitgehend vollzogen. Handel, Handwerk, Gesundheitswesen und ein starker Mittelstand prägen heute die Kreisstadt. KI-Werkzeuge helfen genau dort, wo Personal knapp ist, im Büro und in der Kundenkommunikation.",
    economy:
      "Handel (Saarpark-Center und Innenstadt), Handwerk, Gesundheitswesen, Logistik und mittelständische Dienstleister.",
    latitude: 49.3466,
    longitude: 7.1793,
    postalCodes: ["66538", "66539", "66540"],
    populationApprox: 46000,
    keyIndustries: [
      "Handel und Gastronomie",
      "Handwerk und Bau",
      "Gesundheitswesen und Praxen",
      "Logistik",
      "Mittelständische Dienstleister"
    ],
    useCases: [
      {
        title: "KI für Handwerksbetriebe in und um Neunkirchen",
        body:
          "Angebote aus Kundenanfragen erzeugen, Baustellendokumentation per Sprachnotiz strukturieren, Materiallisten aus Fotos. Direkt im Betrieb umgesetzt."
      },
      {
        title: "KI in Arztpraxen und Physiotherapie",
        body:
          "Terminanfragen, Antwortvorlagen, mehrsprachige Patientenkommunikation, Recall-Kampagnen. Datenschutzkonform mit dem Anspruch, den Praxisdaten nichts zuzumuten."
      },
      {
        title: "KI für Einzelhandel und Gastronomie",
        body:
          "Produkttexte, Menükarten, Antworten auf Bewertungen, Social Media. Ein Nachmittag KI-Workshop, danach läuft die tägliche Routine spürbar leichter."
      }
    ],
    faqs: [
      {
        q: "Deckt KBS auch den Landkreis Neunkirchen ab?",
        a: "Ja. Neben Neunkirchen selbst sind wir in Illingen, Ottweiler, Merchweiler, Schiffweiler, Spiesen-Elversberg und Eppelborn vor Ort tätig."
      },
      {
        q: "Wie sieht ein KI-Termin in einer Neunkircher Praxis aus?",
        a: "Wir kommen zu Ihnen, sehen uns Ihre tatsächlichen Kommunikationsprozesse an und richten die passenden Werkzeuge direkt auf Ihren Geräten ein. Kein Präsentationstermin, sondern gearbeitet."
      }
    ],
    travelNote:
      "Anfahrt aus Neunkirchen-Innenstadt, Wiebelskirchen, Furpach und den Umlandgemeinden Illingen, Ottweiler, Merchweiler, Spiesen-Elversberg inklusive."
  },
  {
    slug: "homburg",
    name: "Homburg",
    intro:
      "Homburg ist mit dem Bosch-Werk, dem Universitätsklinikum des Saarlandes und mehreren Pharma- und Medizintechnik-Standorten ein wissenschaftlich und industriell dichtes Umfeld. Genau hier zahlt sich KI-Kompetenz besonders schnell aus, wenn sie datenschutz-souverän eingesetzt wird.",
    economy:
      "Universitätsklinikum, medizinische Fakultät, Bosch-Werk (Kraftstoffeinspritzsysteme), Pharma- und Medizintechnik, Verwaltung.",
    latitude: 49.3227,
    longitude: 7.3395,
    postalCodes: ["66424"],
    populationApprox: 42000,
    keyIndustries: [
      "Medizin, Klinik, Pharma",
      "Industrie (Bosch, Zulieferer)",
      "Wissenschaft und Universität",
      "Mittelständische Dienstleister",
      "Handwerk und Bau"
    ],
    useCases: [
      {
        title: "KI in Arztpraxen und niedergelassenen Fachärzten",
        body:
          "Anamnese-Vorbereitung, Antwortvorlagen für wiederkehrende Fragen, mehrsprachige Patienten-E-Mails, Recall. Alles so eingerichtet, dass Patientendaten nicht in fremde Clouds wandern."
      },
      {
        title: "KI für Zulieferer und Industriebetriebe",
        body:
          "Technische Dokumentation, mehrsprachige Angebote, interne Wissensdatenbank aus Handbüchern und Prozessbeschreibungen."
      },
      {
        title: "Lokale KI für Kliniken und Pharma",
        body:
          "Für sensible Bereiche installieren wir Modelle direkt auf Ihrer Hardware. Anfragen und Antworten verlassen Ihre Infrastruktur nicht, ideal bei Patientendaten oder Forschungsdaten."
      }
    ],
    faqs: [
      {
        q: "Kann KI im Umfeld einer Universitätsklinik überhaupt eingesetzt werden?",
        a: "Ja, wenn sie richtig konfiguriert ist. Für sensible Bereiche empfehlen wir lokale Modelle (on-premise), die Ihre Daten nicht an externe Anbieter senden. Für unkritische Verwaltungsprozesse reichen oft Standard-Werkzeuge mit klaren Nutzungsregeln."
      },
      {
        q: "Deckt KBS auch das Umland und den Saarpfalz-Kreis ab?",
        a: "Ja. Neben Homburg selbst arbeiten wir in Blieskastel, Bexbach, Kirkel und St. Ingbert vor Ort."
      }
    ],
    travelNote:
      "Anfahrt aus Homburg-Innenstadt, Erbach, Bruchhof-Sanddorf sowie den Nachbarn Bexbach, Kirkel, Blieskastel und St. Ingbert inklusive."
  },
  {
    slug: "merzig",
    name: "Merzig",
    intro:
      "Merzig ist Kreisstadt mit einer starken Kombination aus Klinikum, Kreisverwaltung, Handwerk und einem gesunden Mittelstand im Grenzgebiet zu Luxemburg und Frankreich. Genau diese Grenznähe macht mehrsprachige KI-Werkzeuge zu einem echten Wettbewerbsvorteil.",
    economy:
      "SHG-Kliniken Merzig, Kreisverwaltung, Handwerk und Bau, Tourismus im Saarschleifen-Gebiet, Mittelstand im Grenzverkehr zu Luxemburg und Frankreich.",
    latitude: 49.4444,
    longitude: 6.6386,
    postalCodes: ["66663"],
    populationApprox: 30000,
    keyIndustries: [
      "Gesundheitswesen (SHG-Klinikum)",
      "Handwerk und Bau",
      "Verwaltung und öffentlicher Dienst",
      "Tourismus (Saarschleife)",
      "Grenzhandel und Dienstleistungen"
    ],
    useCases: [
      {
        title: "Mehrsprachige KI für Betriebe im Dreiländer-Grenzgebiet",
        body:
          "Angebote und Rechnungen in Deutsch, Französisch und Englisch. Antworten auf Anfragen aus Luxemburg, Metz oder Trier, ohne Wartezeit auf Übersetzer."
      },
      {
        title: "KI für Handwerksbetriebe in Merzig und Umland",
        body:
          "Baustellendokumentation, Angebotserstellung, Materialrecherche. Alles im gewohnten Arbeitsalltag, ohne dass jemand Programmierer werden muss."
      },
      {
        title: "KI-Hilfe für Tourismusbetriebe an der Saarschleife",
        body:
          "Mehrsprachige Beschreibungen, Antworten auf Bewertungen, Newsletter, Social Media. Ein Nachmittag Setup, danach spart es jede Woche Stunden."
      }
    ],
    faqs: [
      {
        q: "Ist die Grenzlage für KI-Nutzung ein Problem?",
        a: "Im Gegenteil. Moderne KI-Werkzeuge sind mehrsprachig und übersetzen zuverlässig zwischen Deutsch, Französisch, Luxemburgisch und Englisch. Das ist im Kreis Merzig-Wadern ein echter Standortvorteil."
      },
      {
        q: "Wie weit fährt KBS aus Merzig?",
        a: "Wir sind im gesamten Landkreis Merzig-Wadern aktiv: Merzig selbst, Perl, Mettlach, Losheim am See, Beckingen, Wadern und die grenznahen Gebiete."
      }
    ],
    travelNote:
      "Anfahrt aus Merzig-Zentrum, Brotdorf, Hilbringen sowie den Umlandgemeinden Perl, Mettlach, Losheim am See, Beckingen und Wadern inklusive."
  },
  {
    slug: "st-wendel",
    name: "St. Wendel",
    intro:
      "St. Wendel ist Kreisstadt im nördlichen Saarland mit einer starken Mischung aus Handwerk, Industrie (Bosch-Standort), Handel und einem lebendigen Tourismus rund um den Bostalsee. Für Handwerksbetriebe und den Mittelstand im Nordkreis ist KBS der praktische Anlaufpunkt für KI-Fragen.",
    economy:
      "Handwerk, Bosch-Standort St. Wendel, Handel, Tourismus (Bostalsee, Naturpark Saar-Hunsrück), Verwaltung, Landwirtschaft.",
    latitude: 49.4661,
    longitude: 7.1673,
    postalCodes: ["66606"],
    populationApprox: 25500,
    keyIndustries: [
      "Handwerk und Bau",
      "Industrie (Bosch)",
      "Handel und Gastronomie",
      "Tourismus (Bostalsee, Cusanus-Weg)",
      "Landwirtschaft und Winzer"
    ],
    useCases: [
      {
        title: "KI für Handwerksbetriebe im Nordsaarland",
        body:
          "Angebotsvorbereitung, Baustellendokumentation, mehrsprachige Kundenkommunikation. Ein Vormittag KI-Check, danach läuft die Büroarbeit spürbar schneller."
      },
      {
        title: "KI in Tourismusbetrieben rund um den Bostalsee",
        body:
          "Mehrsprachige Website-Texte, Antworten auf Buchungsanfragen, Newsletter und Social Media für die Saison. Direkt im Betrieb eingerichtet."
      },
      {
        title: "KI für den lokalen Einzelhandel und Gastronomie",
        body:
          "Wochenkarten, Sonderaktionen, Beantwortung von Bewertungen. Wir bringen die Werkzeuge in Ihre Sprache, nicht in die eines Software-Handbuchs."
      }
    ],
    faqs: [
      {
        q: "Ist KBS auch in kleineren Gemeinden im St. Wendeler Land aktiv?",
        a: "Ja. Wir kommen nach Nohfelden, Marpingen, Freisen, Namborn, Nonnweiler, Oberthal und Tholey. Anfahrt inklusive."
      },
      {
        q: "Lohnt sich KI für einen kleinen Handwerksbetrieb?",
        a: "Meistens ja. Wenn regelmäßig Angebote und E-Mails geschrieben werden, spart eine gute Einrichtung schnell mehrere Stunden pro Woche. Ein KI-Check klärt das in unter zwei Stunden."
      }
    ],
    travelNote:
      "Anfahrt aus St. Wendel-Innenstadt sowie den Umlandgemeinden Nohfelden, Marpingen, Freisen, Namborn, Nonnweiler, Oberthal und Tholey inklusive."
  },
  {
    slug: "voelklingen",
    name: "Völklingen",
    intro:
      "Völklingen befindet sich mitten im Wandel vom Industriestandort zum Kreativ- und Dienstleistungsstandort, prominent sichtbar am UNESCO-Weltkulturerbe Völklinger Hütte. Für Handel, Gastronomie, Kreative und Handwerk in der Stadt zahlen sich schlanke KI-Werkzeuge sofort aus.",
    economy:
      "Stadtbild geprägt vom Weltkulturerbe Völklinger Hütte. Handel, Gastronomie, Handwerk, produzierendes Gewerbe, kreative und kulturelle Institutionen.",
    latitude: 49.2506,
    longitude: 6.8583,
    postalCodes: ["66333"],
    populationApprox: 39000,
    keyIndustries: [
      "Handel und Gastronomie",
      "Handwerk und Bau",
      "Kreativ- und Kulturbranche",
      "Produzierendes Gewerbe",
      "Dienstleistungen"
    ],
    useCases: [
      {
        title: "KI für Handel und Gastronomie in der Innenstadt",
        body:
          "Menükarten, Angebote, Antworten auf Google-Bewertungen, mehrsprachige Website-Texte für Kunden aus dem grenznahen Raum."
      },
      {
        title: "KI-Werkzeuge für Kreativ- und Kulturbetriebe",
        body:
          "Content-Produktion, Pressetexte, Konzeptentwürfe, Fördermittelrecherche. Ein Team-Workshop, danach entlastet KI die tägliche Textarbeit."
      },
      {
        title: "KI für Handwerk und Zulieferbetriebe",
        body:
          "Angebotserstellung, Baustellendokumentation, technische Dokumentation. Direkt im Betrieb, mit Werkzeugen die man auch nach dem Termin selbst weiter nutzt."
      }
    ],
    faqs: [
      {
        q: "Ist KBS auch in den Stadtteilen und im Warndt aktiv?",
        a: "Ja. Neben der Völklinger Innenstadt sind wir in Wehrden, Fenne, Ludweiler, Lauterbach und den umliegenden Warndt-Gemeinden vor Ort."
      },
      {
        q: "Welche KI-Werkzeuge lohnen sich für einen kleinen Betrieb in Völklingen?",
        a: "Meist genügen zwei bis drei gut eingerichtete Werkzeuge, etwa ChatGPT oder Claude für Text, ein Bildgenerator und ein Assistent für E-Mails. Ein KI-Check klärt in unter zwei Stunden, was zu Ihnen passt."
      }
    ],
    travelNote:
      "Anfahrt aus Völklingen-Zentrum, Wehrden, Fenne, Ludweiler und den umliegenden Warndt-Gemeinden inklusive."
  },
  {
    slug: "dillingen",
    name: "Dillingen",
    intro:
      "Dillingen ist geprägt von der Dillinger Hütte und einer starken industriellen Zuliefererbasis. Neben Grobblech und Stahl finden sich Logistik, Handwerk, Gastronomie und ein aktiver Einzelhandel. Für Verwaltungsprozesse in Industriebetrieben und für den Mittelstand liefert KI spürbare Entlastung.",
    economy:
      "Dillinger Hütte (Grobblech, Stahl), industrielle Zulieferer, Logistik, Handwerk, Handel und Gastronomie.",
    latitude: 49.3563,
    longitude: 6.7278,
    postalCodes: ["66763"],
    populationApprox: 21000,
    keyIndustries: [
      "Stahl- und Metallindustrie (Dillinger Hütte)",
      "Industrielle Zulieferer",
      "Logistik und Transport",
      "Handwerk und Bau",
      "Handel und Gastronomie"
    ],
    useCases: [
      {
        title: "KI in industriellen Zulieferbetrieben",
        body:
          "Technische Angebotserstellung, mehrsprachige Ausschreibungen, interne Wissensdatenbank für Prozessdokumentation und QM-Vorgaben."
      },
      {
        title: "KI im Handwerk und Bau",
        body:
          "Angebotserstellung, Baustellendokumentation per Sprachnotiz, Materialrecherche, Kundenkommunikation. Vor Ort im Betrieb umgesetzt."
      },
      {
        title: "KI-Hilfe für Einzelhandel und Gastronomie",
        body:
          "Wochenkarten, Sonderaktionen, Social Media, Antworten auf Bewertungen. Werkzeuge, die auch die Aushilfe nach einer kurzen Einführung nutzen kann."
      }
    ],
    faqs: [
      {
        q: "Kommt KBS auch nach Saarwellingen und in die Umland-Gemeinden?",
        a: "Ja. Neben Dillingen selbst sind wir in Saarwellingen, Nalbach, Rehlingen-Siersburg, Wallerfangen und den weiteren Umland-Gemeinden vor Ort."
      },
      {
        q: "Wie unterscheidet sich KI-Beratung in einem Industriebetrieb von der in einer Kanzlei?",
        a: "Im Industriebetrieb geht es meist um technische Dokumentation, Angebote und interne Wissenssuche. In einer Kanzlei um Vertragsanalyse und Mandantenkommunikation. Die Werkzeuge sind ähnlich, die Anwendungsfälle sind sehr unterschiedlich."
      }
    ],
    travelNote:
      "Anfahrt aus Dillingen-Zentrum, Diefflen, Pachten sowie den Nachbargemeinden Saarwellingen, Nalbach, Rehlingen-Siersburg und Wallerfangen inklusive."
  }
];

export function findCity(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}
