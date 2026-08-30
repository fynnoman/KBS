export type UseCaseEffort = "niedrig" | "mittel" | "hoch";
export type UseCasePriority = "hoch" | "mittel" | "niedrig";

export type UseCaseItem = {
  title: string;
  problem: string;
  process: string;
  aiSolution: string;
  example: string;
  tools: string[];
  effort: UseCaseEffort;
  risk: string;
  privacy: string;
  priority: UseCasePriority;
};

export type DepartmentFaq = { q: string; a: string };

export type Department = {
  slug: string;
  routePath: string;
  displayName: string;
  name: string;
  tag: string;
  headline: string;
  headlineSecondary: string;
  intro: string;
  longIntro?: string[];
  cases: UseCaseItem[];
  relatedCourseSlugs: string[];
  faqs: DepartmentFaq[];
  keywords: string[];
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "vertrieb",
    routePath: "/ki-anwendungsfaelle/vertrieb",
    displayName: "Vertrieb",
    name: "KI im Vertrieb",
    tag: "KI im Vertrieb",
    headline: "KI im Vertrieb.",
    headlineSecondary:
      "Recherche, Angebote und Follow-ups schneller. Der Kunde bleibt Mensch.",
    intro:
      "Vertriebsteams verbringen einen Großteil des Tages nicht mit Kundengesprächen, sondern mit deren Vor- und Nachbereitung. Recherche, Notizen, Angebote, CRM-Pflege, Follow-ups, all das ist textlastige Arbeit. Genau hier setzt generative KI an. Sie ersetzt keinen guten Vertriebler, aber sie hebt einen erheblichen Teil der Formalitäten vom Tisch. Fünf konkrete Anwendungen mit klarer Priorisierung.",
    longIntro: [
      "Wer die Zeitverwendung eines erfahrenen Vertrieblers ehrlich misst, kommt selten unter fünfzig Prozent Non-Selling-Time. Recherche vor dem Termin, Notizen danach, Angebotserstellung, CRM-Pflege, Follow-up-Sequenzen. All das ist notwendige Arbeit, aber nichts davon ist der Job, für den der Vertriebler eingestellt wurde. Genau in diesen Zwischenschritten entfaltet generative KI ihren realen Nutzen im Mittelstand.",
      "Der Reiz ist nicht die Automatisierung der Kundenbeziehung, sondern die Beschleunigung der Formalitäten drumherum. Eine gute Lead-Recherche vor dem Erstgespräch kostet dreißig Minuten Handarbeit und fünf Minuten mit KI-Unterstützung. Ein individuell formuliertes Follow-up braucht zwanzig Minuten oder zwei. Ein sauber strukturierter CRM-Eintrag nach dem Termin wird aus einer Sprachnotiz statt aus einem freien Nachmittag. Der Kunde bemerkt davon nichts, außer, dass der Vertriebler vorbereiteter erscheint und schneller reagiert.",
      "Wichtig ist die Reihenfolge. Wer mit CRM-Automatisierung startet, scheitert. Wer mit Lead-Research beginnt, hat nach zwei Wochen ein Team, das den Nutzen unmittelbar spürt und selbst nach weiteren Anwendungen fragt. In den folgenden fünf Anwendungsfällen zeigen wir die Reihenfolge, die wir bei mittelständischen Vertriebseinheiten im Saarland und deutschlandweit erprobt haben, inklusive der Punkte, an denen KI nicht helfen sollte."
    ],
    cases: [
      {
        title: "Lead-Research vor dem Erstgespräch",
        problem:
          "Vor einem Erstgespräch will der Vertriebler wissen, wer ihm gegenübersitzt: Unternehmen, Rolle, aktuelle Themen, letzte Presse. Das kostet leicht zwanzig bis dreißig Minuten pro Termin und wird deshalb oft weggelassen.",
        process:
          "Klassisch: Google-Suche nach Firma, LinkedIn-Profil sichten, Website überfliegen, Notizen ins CRM tippen. Bei zehn Terminen pro Woche summiert sich das auf fünf bis sechs Stunden reiner Recherchezeit.",
        aiSolution:
          "KI erhält Firmenname und Ansprechpartner und liefert eine strukturierte Vor-Info: was das Unternehmen macht, worin es sich vom Wettbewerb unterscheidet, wo möglicherweise ein Anknüpfungspunkt liegt. Der Vertriebler prüft und ergänzt, bevor er ins Gespräch geht.",
        example:
          "Vor einem Termin mit einem mittelständischen Fertigungsbetrieb liefert die KI eine Ein-Seiten-Zusammenfassung: Marktposition, letzte öffentliche Meldungen, mögliche Digitalisierungs-Themen.",
        tools: [
          "Text-KI in Business-Variante",
          "Optional: Anbindung an CRM zur automatischen Ablage",
          "Öffentliche Quellen (Website, Presse, LinkedIn)"
        ],
        effort: "niedrig",
        risk:
          "Halluzinationen: die KI kann Zahlen oder Fakten erfinden, die plausibel klingen. Deshalb Regel: alle konkreten Aussagen vor dem Termin gegenprüfen. Kein blinder Vortrag.",
        privacy:
          "Nur öffentlich zugängliche Informationen verwenden. CRM-Notizen und Kundendaten gehören nicht in Consumer-Chatbots ohne geprüfte Datenverarbeitungsvereinbarung.",
        priority: "hoch"
      },
      {
        title: "Personalisierte Outbound-E-Mails",
        problem:
          "Vollständig personalisierte Kalt-Ansprache wirkt, kostet aber Zeit. Standard-Textbausteine wirken oberflächlich. Beides ist ein Kompromiss, den viele Vertriebler ungern eingehen.",
        process:
          "Klassisch: Vorlagen aus dem Sales-Playbook, individuelle Anpassung von Anrede und Einleitung. Der Rest bleibt Textbaustein, meist erkennbar.",
        aiSolution:
          "KI nimmt die Vorlage, die Lead-Recherche und ergänzt zwei bis drei individuelle Sätze mit Bezug zum Zielunternehmen. Der Vertriebler prüft, verfeinert, versendet. Die Personalisierungs-Tiefe steigt spürbar bei gleicher Zeit.",
        example:
          "Ein Vertriebler schickt an zwanzig neue Leads eine Ansprache. Jede Mail enthält eine echte Beobachtung zum jeweiligen Unternehmen, keine Copy-Paste-Anrede.",
        tools: [
          "Text-KI in Business-Variante",
          "CRM oder Sales-Engagement-Tool",
          "E-Mail-Client mit Vorlagen-Funktion"
        ],
        effort: "niedrig",
        risk:
          "Über-Personalisierung wirkt schnell aufdringlich. Wichtig: ein Bezug pro Mail, nicht drei. Und keine Aussagen, die nach Recherche in Privat-Accounts riechen.",
        privacy:
          "E-Mail-Adressen sind personenbezogene Daten. Klare Regelung nach DSGVO nötig: berechtigtes Interesse, Opt-out-Möglichkeit, keine Weitergabe an unklare Tools.",
        priority: "hoch"
      },
      {
        title: "CRM-Notizen aus Sprachnotiz",
        problem:
          "Nach einem Termin fehlt oft die Zeit, saubere Notizen ins CRM zu tippen. Die Konsequenz: unvollständige Historien, verlorene Detail-Infos, das nächste Gespräch beginnt bei null.",
        process:
          "Klassisch: schnell handschriftlich notieren, später ins CRM übertragen (wenn überhaupt). Vieles bleibt im Kopf des Vertrieblers und verschwindet mit ihm bei Urlaub, Wechsel oder Krankheit.",
        aiSolution:
          "Der Vertriebler diktiert die Kernpunkte des Gesprächs direkt nach dem Termin ins Handy. KI strukturiert die Notiz in Ihrem CRM-Format: Themen, Vereinbarungen, nächste Schritte, offene Punkte.",
        example:
          "Nach einem einstündigen Termin diktiert der Vertriebler drei Minuten. Das Ergebnis: ein sauberer CRM-Eintrag mit klarer Struktur, sofort für die Kollegen nutzbar.",
        tools: [
          "Sprach-zu-Text-Anwendung (DSGVO-konform)",
          "Text-KI in Business-Variante zur Strukturierung",
          "CRM mit API oder Import-Möglichkeit"
        ],
        effort: "mittel",
        risk:
          "Sprachaufnahmen in Kundengegenwart oder mit Kundennennungen brauchen besondere Sorgfalt. Aufnahme immer erst nach dem Termin, ausschließlich als eigene Notiz.",
        privacy:
          "Kundennamen und personenbezogene Daten dürfen nur in geprüfte Systeme mit Datenverarbeitungsvereinbarung. Consumer-Sprach-Apps sind hier meist ungeeignet.",
        priority: "hoch"
      },
      {
        title: "Angebotsvorbereitung mit Textbausteinen",
        problem:
          "Angebote enthalten wiederkehrende Textelemente: Leistungsbeschreibung, Preis-Kontext, allgemeine Bedingungen. Jedes Angebot einzeln zu schreiben, kostet Vertriebszeit ohne echten Mehrwert.",
        process:
          "Klassisch: aus einer Vorlage kopieren, kundenspezifisch anpassen, Formatierung prüfen, freigeben. Der individuelle Teil (worauf reagiert das Angebot?) geht in der Textarbeit oft unter.",
        aiSolution:
          "KI erhält Anforderung des Kunden, Standard-Bausteine und generiert ein Angebot mit klar formuliertem Bezug auf das Kunden-Problem. Der Vertriebler prüft Preis-Kalkulation und rechtliche Passagen, gibt frei.",
        example:
          "Ein Kunde beschreibt in der Anfrage vier Anforderungen. Das KI-generierte Angebot geht in jedem Absatz auf eine davon ein, statt allgemein zu beschreiben.",
        tools: [
          "Text-KI in Business-Variante",
          "Vorlagen-Management-System oder Word/Docs-Standardvorlage",
          "Kalkulations-Tool bleibt separat"
        ],
        effort: "mittel",
        risk:
          "Verbindliche Preise, Fristen und rechtliche Klauseln nie ungeprüft aus KI übernehmen. KI ist Formulierungshelfer, nicht Vertragsgestalter.",
        privacy:
          "Angebotsinhalte enthalten oft vertrauliche Kunden-Informationen. Business-Umgebung mit DVV Pflicht.",
        priority: "mittel"
      },
      {
        title: "Follow-up-Sequenzen ohne Formeltext",
        problem:
          "Nach einem Angebot folgt selten sofort die Zusage. Follow-ups sind entscheidend, aber Standard-Nachfass-Mails („Ich melde mich noch einmal zu Ihrem Angebot vom ...\") wirken hohl und werden ignoriert.",
        process:
          "Klassisch: nach zwei Wochen die Standard-Nachfrage, dann Funkstille. Wer mehrere Angebote gleichzeitig verfolgt, verliert schnell den Überblick über sinnvolle Nachfass-Zeitpunkte.",
        aiSolution:
          "KI schlägt basierend auf der Historie (letztes Gespräch, Angebot, Reaktion) einen individuellen Follow-up vor: was war offen, welche Frage lohnt sich, welcher Neu-Impuls passt. Der Vertriebler entscheidet, wann und was.",
        example:
          "Zwei Wochen nach dem Angebot schlägt die KI vor, konkret auf einen im Erstgespräch erwähnten Zeitplan Bezug zu nehmen, nicht auf das Angebot selbst.",
        tools: [
          "Text-KI in Business-Variante",
          "CRM mit Vorgangs-Historie",
          "E-Mail-Sequenz-Tool (optional)"
        ],
        effort: "mittel",
        risk:
          "Zu häufige Follow-ups werden als Druck wahrgenommen. KI-Vorschlag bedeutet nicht: automatisch versenden. Menschliche Freigabe pro Nachricht bleibt Pflicht.",
        privacy:
          "Historische CRM-Daten müssen in einer geprüften Umgebung bleiben. Automatisierungen ohne menschliche Freigabe brauchen zusätzliche DSGVO-Prüfung.",
        priority: "mittel"
      }
    ],
    relatedCourseSlugs: ["vertrieb", "prompt-engineering", "ki-anwender"],
    faqs: [
      {
        q: "Ersetzt KI den Außendienstmitarbeiter?",
        a: "Nein. KI ersetzt keinen guten Vertriebler, sondern hebt die Formalitäten weg, die ihn vom eigentlichen Vertriebsjob abhalten. Was sich verändert: der Anteil der Zeit im Kundenkontakt steigt, der Anteil im CRM sinkt. Der Kunde bleibt Mensch, der Vertriebler auch."
      },
      {
        q: "Woher weiß die KI, wie unser Vertrieb tickt?",
        a: "Sie weiß es zunächst nicht. Der Nutzen entsteht, wenn Sie Standard-Vorlagen, Playbooks und Beispiele einmal aufsetzen. Danach nutzt die KI diese Grundlage. Ohne diese Vorarbeit bleibt der Output generisch."
      },
      {
        q: "Wo fange ich an, wenn ich noch nichts habe?",
        a: "Bei der Lead-Research vor Erstgesprächen. Niedriges Risiko, hoher spürbarer Zeitgewinn, keine Vertragsthemen. Danach schrittweise Follow-ups und Angebotsvorbereitung. CRM-Automation kommt zuletzt, weil sie am meisten Struktur voraussetzt."
      }
    ],
    keywords: [
      "KI im Vertrieb",
      "KI Vertriebsautomatisierung",
      "KI Sales",
      "ChatGPT Vertrieb",
      "KI Angebotserstellung"
    ]
  },
  {
    slug: "marketing",
    routePath: "/ki-anwendungsfaelle/marketing",
    displayName: "Marketing",
    name: "KI im Marketing",
    tag: "KI im Marketing",
    headline: "KI im Marketing.",
    headlineSecondary:
      "Content-Produktion, SEO und Analyse. Die Kernidee bleibt bei Ihnen.",
    intro:
      "Marketing-Teams sind traditionell Vorreiter beim Einsatz generativer KI. Die Werkzeuge sind reif, die Use Cases zahlreich, aber der reale Nutzen entsteht nur, wenn die Marke, die Zielgruppe und die Prozesse sauber definiert sind. KI beschleunigt Content-Produktion, aber sie erfindet keine Markenstrategie. Fünf Anwendungen, die im deutschen Mittelstand funktionieren.",
    longIntro: [
      "Marketing ist der Bereich, in dem KI zuerst produktiv angekommen ist, und zugleich der, in dem am meisten Zeit auf schlechte Ergebnisse verschwendet wird. Der Unterschied liegt selten am Werkzeug. Er liegt daran, ob eine Marke ihre Tonalität, ihre Zielgruppe und ihren Redaktionsprozess klar beschreiben kann. Wo diese Grundlagen fehlen, produziert KI zuverlässig austauschbaren Content. Wo sie vorhanden sind, verdreifacht sich die Ausspielfrequenz bei gleicher Qualität.",
      "Für mittelständische Marketing-Teams ergibt sich daraus eine klare Reihenfolge. Zuerst kommt die Redaktionsplanung: KI hilft, aus Themenfeldern einen Wochen- und Monatsplan mit Formaten und Kanälen abzuleiten. Dann folgen Blog-Rohfassungen, SEO-Cluster-Recherche und Newsletter-Produktion. Erst dann lohnt sich der Blick auf tiefere Anwendungen wie Analytics-Auswertungen in verständlicher Sprache. Wer diese Reihenfolge umdreht, kämpft mit generischen Texten und verpasstem Suchvolumen.",
      "Ein Punkt, den wir im Gespräch mit Marketing-Verantwortlichen früh klären: Google straft KI-generierten Content nicht per se ab. Was Google und die neuen AI-Overviews abstrafen, ist Beliebigkeit. Ein KI-Text ohne redaktionelle Nacharbeit, ohne konkrete Beispiele, ohne echten Standpunkt rangiert schlecht. Ein KI-Text, der einen Erstentwurf liefert und den Redakteur um Faktenprüfung, Beispiele und Meinung ergänzt, gewinnt an Reichweite. KI ist Beschleuniger, nicht Redakteur, diese Trennung ist die wichtigste."
    ],
    cases: [
      {
        title: "Redaktionsplan aus Themenpool",
        problem:
          "Wer wöchentlich Content ausspielt, kämpft mit der Ideenfrage: welche Themen, wann, in welchem Format. Ohne Struktur wird der Redaktionsplan schnell zu einer Zufallsauswahl.",
        process:
          "Klassisch: manuelles Brainstorming, Excel-Sheet, wöchentliche Redaktions-Meetings. Themen entstehen aus dem Bauch, nicht aus der Suchdaten-Realität.",
        aiSolution:
          "KI erhält Ihre Themenfelder, Zielgruppe und Kanal-Mix und schlägt einen Redaktionsplan vor: welches Thema wann, welches Format, welche Kanäle. Der Redakteur prüft, priorisiert, ergänzt eigene Ideen.",
        example:
          "Für ein Fachmagazin generiert die KI einen Vier-Wochen-Plan mit Themen, die zur Saison und zu bekannten Suchtrends passen. Die Redaktion streicht zwei, tauscht drei, veröffentlicht den Rest.",
        tools: [
          "Text-KI in Business-Variante",
          "Optional: SEO-Tool für Suchvolumen-Daten",
          "Redaktions-Kalender (Notion, Airtable, ähnlich)"
        ],
        effort: "niedrig",
        risk:
          "KI kennt tagesaktuelle Trends nicht immer verlässlich. Wichtig: eigenes Wissen zu Marke und Zielgruppe bleibt führend. KI ist Ideenlieferant, nicht Redakteur.",
        privacy:
          "Für reine Themen-Ideen reichen öffentliche Informationen. Sobald konkrete Kunden-Daten ins Spiel kommen, ist Business-Umgebung Pflicht.",
        priority: "hoch"
      },
      {
        title: "Blog-Rohfassungen in Marken-Tonalität",
        problem:
          "Ein Blog-Artikel dauert in der Regel drei bis fünf Stunden. Für kleine Marketing-Teams ist das der limitierende Faktor: entweder Regelmäßigkeit oder Qualität.",
        process:
          "Klassisch: Recherche, Gliederung, Schreiben, Redigieren, SEO-Optimierung, Veröffentlichung. Die Textarbeit macht den Löwenanteil aus.",
        aiSolution:
          "KI erhält Thema, Zielgruppe, Kernbotschaft und Marken-Tonalität und liefert eine strukturierte Rohfassung. Der Redakteur überarbeitet, kürzt, verfeinert, ergänzt Marken-Beispiele. Faktenprüfung ist Pflicht.",
        example:
          "Ein Artikel zu einem Fachthema liegt nach zwanzig Minuten als Rohfassung vor. Die Redaktion verbringt eine Stunde mit inhaltlicher Prüfung und Feinschliff statt fünf Stunden mit Grundlagen-Schreibarbeit.",
        tools: [
          "Text-KI in Business-Variante",
          "Marken-Tonalitäts-Dokument oder Style Guide",
          "CMS oder Blog-System"
        ],
        effort: "mittel",
        risk:
          "Halluzinationen sind das Kernrisiko: Zahlen, Zitate, Studien können erfunden sein. Regel: keine Zahlen ohne verifizierte Quelle, keine Zitate ohne Original.",
        privacy:
          "Öffentliche Themen sind unproblematisch. Wenn Kunden-Cases oder interne Daten einfließen, Business-Umgebung mit DVV nutzen."
        , priority: "hoch"
      },
      {
        title: "SEO-Cluster-Recherche und Struktur",
        problem:
          "Für eine SEO-Strategie braucht man Themen-Cluster, semantisch verwandte Begriffe, sinnvolle interne Verlinkung. Manuelle Recherche dauert Tage, professionelle Tools kosten monatlich.",
        process:
          "Klassisch: SEO-Tool anwerfen, Keywords sichten, in Cluster gruppieren, interne Link-Struktur definieren. Erfordert Übung und ist textlastige Aufgabe.",
        aiSolution:
          "KI erhält Hauptthema und Zielgruppe und schlägt Cluster-Struktur vor: welche Kern-Themen, welche Nebenthemen, welche Suchintentionen. Der SEO-Verantwortliche prüft und ergänzt mit realen Volumen-Daten.",
        example:
          "Für eine Handwerker-Website liefert die KI eine Cluster-Übersicht mit acht Kern-Themen, jeweils drei bis fünf Unter-Themen und Vorschlägen für interne Verlinkung.",
        tools: [
          "Text-KI in Business-Variante",
          "SEO-Tool für tatsächliche Volumen (SEMrush, Sistrix, Ahrefs oder Alternativen)",
          "Redaktions-Planung"
        ],
        effort: "mittel",
        risk:
          "KI-generierte Cluster brauchen Volumen-Prüfung. Ein perfekt strukturiertes Cluster zu einem Thema ohne Suchanfragen bringt keinen Traffic.",
        privacy:
          "Reine Themen-Recherche ist datenschutzunkritisch. Bei Kunden-spezifischen SEO-Projekten Business-Umgebung nutzen.",
        priority: "hoch"
      },
      {
        title: "Newsletter-Produktion mit Wiederverwertung",
        problem:
          "Regelmäßige Newsletter kosten Zeit, obwohl viele Inhalte aus bereits vorhandenem Content stammen. Die Zusammenstellung ist der eigentliche Aufwand.",
        process:
          "Klassisch: Content-Ideen sichten, Reihenfolge festlegen, Text formulieren, Bilder wählen, versenden. Für einen wöchentlichen Newsletter meist ein halber Tag.",
        aiSolution:
          "KI erhält aktuelle Blog-Artikel, Social-Media-Posts und Themen der Woche und liefert einen Newsletter-Entwurf mit Einleitung, Sektionen und Call-to-Action-Vorschlägen. Die Redaktion prüft, wählt Bilder, versendet.",
        example:
          "Ein Wochennewsletter mit fünf Sektionen wird in einer Stunde produziert. Redaktions-Konsistenz steigt, weil das Format über Wochen einheitlich bleibt.",
        tools: [
          "Text-KI in Business-Variante",
          "Newsletter-Tool (MailChimp, Brevo, CleverReach oder Alternativen)",
          "CMS oder Blog-System als Content-Quelle"
        ],
        effort: "mittel",
        risk:
          "Angaben zu Terminen, Preisen und Aktionen müssen faktisch geprüft werden. KI kann veraltete Details übernehmen.",
        privacy:
          "Empfänger-Adressen unterliegen der DSGVO. Newsletter-Versand nur mit dokumentierter Einwilligung oder klarem berechtigten Interesse.",
        priority: "mittel"
      },
      {
        title: "Analytics-Auswertung in verständlicher Sprache",
        problem:
          "Marketing-Reports sind entweder zu technisch (Zahlen, KPIs) oder zu allgemein („alles läuft gut\"). Was fehlt: eine narrative Erklärung, die auch für Geschäftsleitung verständlich ist.",
        process:
          "Klassisch: Google Analytics oder Marketing-Tool auswerten, Zahlen kopieren, Kommentare tippen. Kommunikation an Nicht-Marketing-Kollegen dauert oft länger als die Auswertung selbst.",
        aiSolution:
          "KI erhält Zahlen und Kontext und formuliert eine Auswertung in klarer Sprache: was ist passiert, was heißt das, was ist zu tun. Der Marketing-Verantwortliche prüft Datenkorrektheit und Empfehlungen, gibt frei.",
        example:
          "Ein monatlicher Report für die Geschäftsleitung liegt statt in einer Excel-Wüste als verständlicher Zwei-Seiten-Text vor, ergänzt durch Zahlen. Verständnis auf Führungsebene steigt sichtbar.",
        tools: [
          "Text-KI in Business-Variante",
          "Analytics-Werkzeuge (GA4, Matomo, o.ä.)",
          "Präsentations-Tool"
        ],
        effort: "mittel",
        risk:
          "KI kann Zahlen falsch interpretieren oder Korrelation als Kausalität darstellen. Marketing-Verantwortliche prüft immer die Aussagen, bevor sie an die Führung gehen.",
        privacy:
          "Aggregierte Web-Analytics-Daten sind meist unkritisch. Bei personenbezogenen Analytics (CRM-Auswertungen, Kohorten) Business-Umgebung mit DVV nutzen.",
        priority: "mittel"
      }
    ],
    relatedCourseSlugs: ["marketing", "prompt-engineering", "ki-anwender"],
    faqs: [
      {
        q: "Erkennt Google KI-generierte Texte und straft sie ab?",
        a: "Google straft nach eigener Auskunft nicht KI-generierte Texte per se ab, sondern minderwertige, nicht-hilfreiche Inhalte, unabhängig davon, ob Mensch oder Maschine sie geschrieben hat. Der Fokus muss auf Nützlichkeit, Fachlichkeit und Originalität liegen. Rohe KI-Ausgaben ohne Redaktion sind meist zu generisch und rangieren schlecht."
      },
      {
        q: "Können wir das Corporate Design auf KI-generierte Bilder übertragen?",
        a: "Teilweise. Über Systemprompts und Style-Referenzen lässt sich ein bestimmter Look reproduzieren, aber die Konsistenz bleibt eine Herausforderung. Für zentrale Markenassets bleibt die klassische Bildproduktion überlegen. KI ist stärker bei Nebenschauplätzen (Blog-Illustrationen, Social-Posts)."
      },
      {
        q: "Was ist der schnellste Einstieg?",
        a: "Blog-Rohfassungen und Newsletter-Produktion. Beide haben klaren, wiederkehrenden Nutzen und ein überschaubares Risiko. Nach zwei bis drei Wochen konsistenter Nutzung entsteht ein Gefühl dafür, wo KI im eigenen Marketing wirklich hilft und wo nicht."
      }
    ],
    keywords: [
      "KI im Marketing",
      "KI Content Marketing",
      "KI SEO",
      "ChatGPT Marketing",
      "Content-KI Unternehmen"
    ]
  },
  {
    slug: "buchhaltung",
    routePath: "/ki-anwendungsfaelle/buchhaltung",
    displayName: "Buchhaltung",
    name: "KI in der Buchhaltung",
    tag: "KI in der Buchhaltung",
    headline: "KI in der Buchhaltung.",
    headlineSecondary:
      "Belege, Reports und Recherche. Die Freigabe bleibt beim Menschen.",
    intro:
      "Buchhaltung ist ein reguliertes, prüfungspflichtiges Feld. Genau deshalb ist der KI-Einsatz hier nicht revolutionär, sondern schrittweise: Belegverarbeitung, Standard-Reports, Recherche in Fachfragen. Was bleibt: die Verantwortung des Berufsträgers oder der internen Fachkraft. Was fällt weg: ein erheblicher Teil der wiederkehrenden Text- und Sortierarbeit.",
    longIntro: [
      "Buchhaltung ist eine der letzten Bastionen im Mittelstand, in denen Handarbeit als Qualitätsmerkmal gilt. Belege werden gesichtet, Kontierungen manuell gesetzt, Reports einzeln geschrieben. Genau das ist der Grund, warum KI hier nicht mit einem Paukenschlag ankommt, sondern schrittweise, dort, wo die Arbeit textlastig und die Datenlage stabil ist. Die Verantwortung des Berufsträgers oder der internen Fachkraft bleibt erhalten. Was sich verändert, ist die Verteilung der Arbeitszeit.",
      "Der Einstieg gelingt am zuverlässigsten über die Belegvorerfassung. KI-gestützte OCR erkennt Absender, Positionen und Beträge und schlägt eine Kontierung vor. Die Fachkraft prüft, korrigiert bei Bedarf und bucht. Was früher zwanzig Minuten pro Beleg gekostet hat, dauert fünf. Die Zeit wird nicht wegrationalisiert, sondern in die Prüfung ungewöhnlicher Vorgänge investiert, dort, wo Fachkompetenz wirklich zählt.",
      "Zwei Bereiche verdienen besondere Sorgfalt: Standard-Reports und steuerliche Recherche. Bei Reports beschleunigt KI die Kommentierung von BWA und Monatsberichten, ohne die Zahlen selbst zu berechnen. Bei Recherchefragen liefert sie eine strukturierte Vor-Einschätzung, die die Fachkraft mit einer verifizierten Quelle abgleicht. In beiden Fällen bleibt die Verantwortung menschlich, aber die Zeit bis zur ersten belastbaren Antwort verkürzt sich spürbar. Wer diese drei Bereiche systematisch einführt, hat innerhalb weniger Monate ein Buchhaltungsteam, das mehr Fälle bewältigt, ohne wachsen zu müssen."
    ],
    cases: [
      {
        title: "Belegvorerfassung mit KI-OCR",
        problem:
          "Papierbelege und PDF-Rechnungen müssen manuell erfasst werden. Lieferant, Datum, Betrag, Steuersatz, bei zwanzig Rechnungen am Tag summiert sich das auf mehrere Stunden pro Woche.",
        process:
          "Klassisch: Beleg scannen, Daten manuell ins Buchhaltungssystem tippen, Konto zuordnen. Oder externes Ablage-System, das nur einen Teil der Daten erkennt.",
        aiSolution:
          "KI-gestützte OCR erkennt strukturierte Daten aus dem Beleg (Absender, Positionen, Beträge, Steuersätze) und schlägt eine Kontierung vor. Die Buchhaltungskraft prüft und bucht.",
        example:
          "Eine Eingangsrechnung wird per E-Mail empfangen, automatisch analysiert und liegt vorerfasst im Buchhaltungssystem, bevor die Sachbearbeiterin sie sieht. Nur Prüfung und Freigabe bleiben Handarbeit.",
        tools: [
          "DATEV Unternehmen online oder vergleichbare Systeme mit OCR",
          "Externe OCR-Anbieter (Candis, GetMyInvoices, sevDesk-Integration)",
          "Text-KI in Business-Variante für nicht standardisierte Belege"
        ],
        effort: "mittel",
        risk:
          "OCR-Fehler bei ungewöhnlichen Belegen sind real. Sichtprüfung vor der Buchung bleibt Pflicht. Automatische Freigabe nur bei sauber definierten Standardfällen.",
        privacy:
          "Belege enthalten personenbezogene Daten (Empfänger, Absender). Verarbeitung in geprüften Systemen mit klarer Datenverarbeitungsvereinbarung.",
        priority: "hoch"
      },
      {
        title: "Standard-Reports automatisieren",
        problem:
          "Monatliche BWA-Kommentierung, Umsatzsteuervoranmeldung, Standardberichte für die Geschäftsführung, all das ist Textarbeit, die auf immer denselben Grundzahlen aufsetzt.",
        process:
          "Klassisch: Zahlen aus dem Buchhaltungssystem ziehen, in Excel oder Word übertragen, kommentieren, verschicken. Der Formulierungsteil dauert oft länger als die Zahlen selbst.",
        aiSolution:
          "KI erhält die Zahlen (aggregiert, keine Einzelbuchungen) und erstellt einen Report-Text: Entwicklung, Auffälligkeiten, mögliche Ursachen, Hinweise für die Führung. Der Buchhalter prüft und gibt frei.",
        example:
          "Die monatliche BWA-Kommentierung liegt statt nach zwei Stunden in fünfzehn Minuten vor. Die Buchhaltungskraft prüft, ergänzt Kontextwissen, verschickt.",
        tools: [
          "Text-KI in Business-Variante",
          "Buchhaltungssystem-Export (DATEV, Lexware, sevDesk, etc.)",
          "Excel oder Berichts-Vorlage"
        ],
        effort: "niedrig",
        risk:
          "KI-Kommentierung kann Zusammenhänge falsch deuten (Korrelation als Kausalität). Fachkraft prüft immer, bevor der Report versandt wird.",
        privacy:
          "Aggregierte Zahlen sind meist unkritisch. Personenbezogene Details (Löhne einzelner Mitarbeiter) gehören nicht in generische Chatbots.",
        priority: "hoch"
      },
      {
        title: "Recherche zu Steuer- und Rechnungslegungsfragen",
        problem:
          "Zu einer konkreten Frage (Vorsteuerabzug bei Bewirtung, Behandlung von Gutscheinen, umsatzsteuerliche Grenzen) sucht die Buchhaltungskraft Fachtexte. Das dauert und produziert oft mehrere Meinungen, ohne klare Antwort.",
        process:
          "Klassisch: Fachdatenbank, Kollegen fragen, Steuerberater kontaktieren. Der letzte Schritt kostet Geld, der zweite kostet Zeit, der erste braucht Fachroutine.",
        aiSolution:
          "KI liefert eine erste Einordnung mit Stichworten, möglichen Fundstellen und Argumentationsstrukturen. Die Buchhaltungskraft prüft an der Quelle nach oder legt strukturiert dem Steuerberater vor.",
        example:
          "Frage zur umsatzsteuerlichen Behandlung eines innergemeinschaftlichen Vorgangs. KI liefert eine strukturierte Vor-Einschätzung, die Fachkraft prüft die genannten Normen selbst.",
        tools: [
          "Text-KI in Business-Variante",
          "Fachliteratur/Datenbank für Verifikation (NWB, Haufe, IWW)",
          "Direkte Rücksprache mit Steuerberater bei Zweifelsfällen"
        ],
        effort: "niedrig",
        risk:
          "Halluzinationen bei Rechtsfragen sind das Kernrisiko. Zitate und Normverweise immer verifizieren. KI ist Vor-Recherche, nicht Rechtsauskunft.",
        privacy:
          "Abstrakte Rechtsfragen sind unkritisch. Konkrete Mandanten-/Firmenbezüge nicht in Consumer-Chatbots.",
        priority: "mittel"
      },
      {
        title: "Reisekostenabrechnung strukturieren",
        problem:
          "Mitarbeitende reichen Belege in unterschiedlicher Form ein: Papier, PDF, Foto, mal mit, mal ohne Kontext. Die Sortierung, Kategorisierung und Prüfung ist zeitraubend.",
        process:
          "Klassisch: Beleg-Sichtung, manuelle Kategorisierung, Eingabe ins Reisekostentool, Prüfung, Buchung. Bei komplexeren Reisen (Bewirtung, Auslandsreisen) mehrfacher Rückfrage-Loop.",
        aiSolution:
          "KI erkennt Belege, klassifiziert nach Kategorie (Übernachtung, Verpflegung, Fahrt) und schlägt Kontierung vor. Bei unklaren Fällen wird eine Rückfrage an den Mitarbeitenden generiert.",
        example:
          "Ein Mitarbeiter reicht zehn Belege von einer Dienstreise ein. Neun sind eindeutig klassifiziert, ein Beleg löst eine automatische Rückfrage aus („War das ein Kundentermin?\"). Handarbeit reduziert sich deutlich.",
        tools: [
          "Reisekosten-Software mit KI-Modul oder Standalone-OCR",
          "Text-KI in Business-Variante für Rückfrage-Generierung",
          "Buchhaltungssystem für Endverarbeitung"
        ],
        effort: "mittel",
        risk:
          "Fehlklassifikation bei Bewirtungskosten (Vorsteuerabzug!) ist rechtlich relevant. Menschliche Kontrolle bleibt Pflicht.",
        privacy:
          "Reisekostenabrechnungen enthalten personenbezogene Daten von Mitarbeitenden. Verarbeitung in geprüften Systemen.",
        priority: "mittel"
      },
      {
        title: "Interne Prozessdokumentation aktuell halten",
        problem:
          "Buchhaltungsprozesse werden dokumentiert, veralten aber schnell. Neue Mitarbeitende arbeiten mit ungenauen Anleitungen oder fragen mündlich beim Team.",
        process:
          "Klassisch: einmalig aufgeschrieben, dann jahrelang nicht aktualisiert. Bei Personalwechsel wird das Fehlen der Aktualisierung akut sichtbar.",
        aiSolution:
          "KI erstellt aus Stichpunkten oder Video-/Sprachnotizen strukturierte Prozessdokumentation. Bei Änderungen wird das Update schnell möglich, weil die Textarbeit weitgehend wegfällt.",
        example:
          "Die Fachkraft beschreibt in zehn Minuten mündlich einen neuen Prozess, die KI erstellt daraus eine saubere Anleitung mit Screenshots-Verweisen. Aktualisierung: keine Ausrede mehr.",
        tools: [
          "Text-KI in Business-Variante",
          "Sprach-zu-Text-Tool",
          "Wissens-Management-System (Notion, Confluence, o.ä.)"
        ],
        effort: "niedrig",
        risk:
          "KI kann Prozesse verallgemeinern und wichtige Details weglassen. Prüfung durch die Fachkraft bleibt notwendig.",
        privacy:
          "Interne Prozessbeschreibungen sind meist unkritisch, sollten aber nicht Systempasswörter oder Zugangsdaten enthalten.",
        priority: "niedrig"
      }
    ],
    relatedCourseSlugs: ["finanzen", "ai-act", "ki-anwender"],
    faqs: [
      {
        q: "Ersetzt KI unseren Steuerberater?",
        a: "Nein, ganz sicher nicht. KI kann die Vorarbeit erleichtern (Belege sortieren, Fragen strukturieren, Berichte vorformulieren), aber die Verantwortung für steuerrechtliche Entscheidungen bleibt beim Berufsträger. Die Zeit mit dem Steuerberater wird eher wertvoller, weil Sie besser vorbereitet ins Gespräch gehen."
      },
      {
        q: "Ist KI-OCR heute schon revisionssicher?",
        a: "Etablierte Anbieter (DATEV, Lexware und andere Systeme mit KI-Funktion) erfüllen die Anforderungen an revisionssichere Archivierung. Wichtig ist die Auswahl eines geprüften Anbieters, nicht eine selbstgebaute Lösung. Bei Zweifel: mit dem Steuerberater die konkrete Software abstimmen."
      },
      {
        q: "Wo sollten wir zuerst starten?",
        a: "Bei der Belegvorerfassung. Der Zeitgewinn ist unmittelbar spürbar, das Risiko überschaubar. Danach Standard-Reports und Recherche-Vorbereitung. Komplexere Automation kommt später, wenn die Prozesse sauber laufen."
      }
    ],
    keywords: [
      "KI Buchhaltung",
      "KI Rechnungsverarbeitung",
      "OCR Buchhaltung",
      "DATEV KI",
      "KI Finance"
    ]
  },
  {
    slug: "kundenservice",
    routePath: "/ki-anwendungsfaelle/kundenservice",
    displayName: "Kundenservice",
    name: "KI im Kundenservice",
    tag: "KI im Kundenservice",
    headline: "KI im Kundenservice.",
    headlineSecondary:
      "Schneller antworten, konsistenter helfen. Ohne den Menschen zu ersetzen.",
    intro:
      "Kundenservice-Teams stehen unter Dauerdruck: hohe Anzahl von Anfragen, unterschiedliche Kanäle, Erwartung an schnelle Antworten. Generative KI kann dabei helfen, Anfragen zu klassifizieren, Antworten vorzubereiten und Wissen konsistent verfügbar zu halten. Was bleibt: die menschliche Beziehung zum Kunden, gerade bei Beschwerden und Sonderfällen.",
    longIntro: [
      "Kundenservice ist der Bereich, in dem die Erwartung an KI am höchsten und die Enttäuschung am größten ist, wenn er falsch aufgesetzt wird. Der Impuls, alles automatisieren zu wollen, führt zu Bots, die Kunden verärgern, statt sie zu entlasten. Der bessere Zugang ist die Frage: An welchen Stellen im Service-Prozess ist der Mensch heute mit reiner Formulierungs- oder Klassifizierungsarbeit beschäftigt? Dort hat KI ihren Platz. Alles andere bleibt menschlich, gerade bei Beschwerden und Sonderfällen.",
      "Der schnellste Effekt entsteht bei zwei Anwendungen. Erstens: Anfragen-Triage über alle Kanäle. Die KI liest eingehende Nachrichten, klassifiziert nach Dringlichkeit und Kategorie und leitet sie in die passende Warteschlange. Beschwerden landen sofort beim Teamleiter, Standardfragen bei der zuständigen Rolle. Zweitens: Antwortentwürfe für wiederkehrende Fragen. Der Agent bekommt einen sauberen Entwurf, prüft die konkreten Angaben, ergänzt eine persönliche Note und versendet. Reine Formulierungszeit sinkt drastisch, die Antwortqualität steigt.",
      "Anspruchsvoller, aber lohnend: die interne Wissensdatenbank KI-fähig aufbereiten. Wer heute Antworten mühsam in SharePoint oder Ordnern sucht, bekommt mit einem gut gebauten Retrieval-System sofortige Antworten mit Quellenverweis. Voice-Agents für Terminvereinbarung und Standardauskünfte sind der nächste, größere Sprung, sinnvoll, wenn die Anrufmenge das rechtfertigt, mit klarer Ansage an den Anrufer und einem sauberen Übergabepunkt zum Menschen bei komplexeren Themen."
    ],
    cases: [
      {
        title: "Anfragen-Triage über alle Kanäle",
        problem:
          "Anfragen kommen per E-Mail, Kontaktformular, Chat, Social Media. Jeder Kanal wird oft von einer anderen Person betreut, konsistente Priorisierung fehlt.",
        process:
          "Klassisch: jeder Kanal wird sequentiell abgearbeitet, Priorisierung geschieht nach Gefühl. Beschwerden landen manchmal am Ende der Warteschlange.",
        aiSolution:
          "KI liest eingehende Anfragen (kanalunabhängig) und klassifiziert nach Dringlichkeit, Kategorie und passendem Team. Ein Beschwerde-Fall wird sofort erkennbar, eine Standardfrage geht in die passende Warteschlange.",
        example:
          "Eine wütende Beschwerde über Social Media wird innerhalb von Minuten dem Teamleiter zur direkten Bearbeitung zugewiesen, statt in der allgemeinen DM-Liste unterzugehen.",
        tools: [
          "Text-KI in Business-Variante",
          "Ticketsystem mit API (Zendesk, Freshdesk, HubSpot Service oder Alternativen)",
          "Social-Media-Management-Tool"
        ],
        effort: "mittel",
        risk:
          "Fehlklassifikationen können unglückliche Konsequenzen haben (Beschwerde als Standardfrage einsortiert). Regelmäßiges Review der Klassifikation ist wichtig.",
        privacy:
          "Anfragen enthalten personenbezogene Daten. Verarbeitung nur in Business-Umgebung mit klarer Datenverarbeitungsvereinbarung.",
        priority: "hoch"
      },
      {
        title: "Antwortentwürfe für wiederkehrende Fragen",
        problem:
          "Ein Großteil der Anfragen betrifft dieselben Themen: Öffnungszeiten, Rechnungsfragen, Statusabfragen, allgemeine Produktfragen. Jede Antwort neu zu tippen bindet Zeit, ohne Wertschöpfung.",
        process:
          "Klassisch: Textbausteine im Ticketsystem, individuelle Anpassung durch den Agent. Baustein-Pflege wird oft vernachlässigt, Formulierungen wirken hölzern.",
        aiSolution:
          "KI erstellt basierend auf der konkreten Anfrage und Ihrer Wissensdatenbank einen Antwortentwurf im Stil Ihres Unternehmens. Der Agent prüft die konkreten Angaben (Bestellnummer, Datum, Status), passt an, gibt frei.",
        example:
          "Eine Frage zum Lieferstatus wird vom System entworfen mit Bezug auf die konkrete Bestellung, der Agent ergänzt eine persönliche Note und versendet. Reine Formulierungszeit sinkt drastisch.",
        tools: [
          "Text-KI in Business-Variante",
          "Ticketsystem-Integration",
          "Interne Wissensdatenbank (auch als PDF-Sammlung möglich)"
        ],
        effort: "mittel",
        risk:
          "Automatisch versendete Antworten ohne menschliche Prüfung sind riskant. Regel: KI schlägt vor, Mensch prüft und gibt frei. Erst bei sehr stabilen Standardfällen ohne kritische Inhalte kann teilweise automatisiert werden.",
        privacy:
          "Kundendaten (Name, Bestellnummer, E-Mail) gehören ausschließlich in geprüfte Business-Systeme. Consumer-Chatbots sind ungeeignet.",
        priority: "hoch"
      },
      {
        title: "Interne Wissensdatenbank KI-fähig aufbereiten",
        problem:
          "Viele Kundenservice-Teams haben ihr Wissen in Ordnern, Dokumenten und Köpfen verteilt. Bei einer konkreten Frage sucht der Agent oft minutenlang oder fragt Kollegen.",
        process:
          "Klassisch: manuelle Suche in SharePoint, Confluence oder gemeinsamen Ordnern. Neuere Anfragen führen oft zu doppelter Recherche, weil frühere Antworten nicht auffindbar sind.",
        aiSolution:
          "Aus Ihrer bestehenden Dokumentation entsteht ein durchsuchbares RAG-System. Der Agent stellt eine Frage in natürlicher Sprache, die KI antwortet mit Quellenangabe. Bei fehlender Information wird die Wissenslücke sichtbar.",
        example:
          "Ein neuer Agent kann ab dem ersten Tag komplexe Fragen beantworten, weil die interne Wissensdatenbank sofort durchsuchbar ist. Einarbeitungszeit verkürzt sich messbar.",
        tools: [
          "RAG-System auf eigener Wissensdatenbank",
          "Bestehende Dokumenten-Sammlung als Grundlage",
          "Text-KI in Business-Variante oder lokale Lösung je nach Sensibilität"
        ],
        effort: "hoch",
        risk:
          "Antworten aus KI-Wissensdatenbanken müssen mit Quellenverweis versehen sein, damit der Agent nachprüfen kann. Ohne Quellenverweis ist die Antwort nicht zuverlässig einsetzbar.",
        privacy:
          "Interne Dokumentation gehört in eine geprüfte Umgebung. Sensible Unterlagen sollten in einer lokalen KI-Lösung verarbeitet werden, wenn keine ausreichende DVV verfügbar ist.",
        priority: "hoch"
      },
      {
        title: "Voice-Agent für Erstannahme und Terminvereinbarung",
        problem:
          "Standardanfragen per Telefon (Termine, allgemeine Auskünfte, Öffnungszeiten) blockieren Support-Kapazität, obwohl sie einfach zu beantworten wären.",
        process:
          "Klassisch: Telefon-Warteschlange, Mitarbeiter beantworten alle Anfragen. Bei Spitzenzeiten Wartezeiten oder verpasste Anrufe.",
        aiSolution:
          "Ein KI-Voice-Agent nimmt Anrufe entgegen, klärt Standardfälle direkt (Termin, Öffnungszeit, allgemeine Auskunft) und leitet komplexe Fälle an das Team weiter. Der Kunde spricht in natürlicher Sprache.",
        example:
          "Ein Anrufer möchte einen Termin verschieben. Der Voice-Agent klärt den neuen Wunschtermin, prüft Verfügbarkeit im Kalender, bestätigt. Bei komplexen Fragen wird zum Menschen durchgestellt.",
        tools: [
          "Voice-KI-Plattformen (Vapi, Retell, ElevenLabs Conversational)",
          "Terminplanungs-System mit API",
          "Ticketsystem für komplexere Fälle"
        ],
        effort: "hoch",
        risk:
          "Voice-Agents sind noch nicht überall reif für sensible Gespräche. Beschwerden, medizinische oder rechtliche Themen gehören immer zum Menschen. Fehlleitungen sind ärgerlich.",
        privacy:
          "Sprachaufnahmen enthalten personenbezogene Daten. Klare Ansage am Gesprächsanfang („Sie sprechen mit einem digitalen Assistenten\") und DSGVO-konforme Verarbeitung sind Pflicht.",
        priority: "mittel"
      },
      {
        title: "Konsistenz-Prüfung der ausgehenden Antworten",
        problem:
          "Verschiedene Agents beantworten dieselbe Frage unterschiedlich. Manche freundlicher, manche kürzer, manche mit anderen Details. Kunden vergleichen Antworten und werden verwirrt.",
        process:
          "Klassisch: kein systematisches Feedback zur Antwort-Konsistenz. Qualitätsmanagement erfolgt stichprobenartig.",
        aiSolution:
          "KI prüft ausgehende Antworten (nach Versand, zur Qualitätsarbeit) auf Konsistenz mit dem definierten Tonfall und dem Wissensstand. Auffällige Abweichungen werden dem Teamleiter zur Prüfung vorgelegt.",
        example:
          "Eine Antwort auf eine Reklamation weicht deutlich vom definierten Beschwerde-Prozess ab. Der Teamleiter sieht das im wöchentlichen Report und kann coachen.",
        tools: [
          "Text-KI in Business-Variante mit Zugriff auf Ihre Standards",
          "Ticketsystem-Export",
          "Qualitätsmanagement-Prozess"
        ],
        effort: "mittel",
        risk:
          "KI-Prüfung ist ein Hilfsmittel, kein Ersatz für menschliche Qualitätsarbeit. Bei Personalthemen (Bewertung von Agents) ist Mitbestimmung zu prüfen.",
        privacy:
          "Bewertung von Mitarbeitenden ist mitbestimmungspflichtig. Der Betriebsrat gehört früh eingebunden. Anonymisierte Konsistenz-Prüfung ist meist unkritischer.",
        priority: "niedrig"
      }
    ],
    relatedCourseSlugs: ["kundenservice", "prompt-engineering", "ai-act"],
    faqs: [
      {
        q: "Ersetzt KI unser Servicecenter?",
        a: "Nein. Was sich verändert: Standardfragen werden schneller beantwortet, komplexe Fälle bekommen mehr Aufmerksamkeit vom Menschen. Kundenservice bleibt eine menschliche Disziplin, gerade bei Beschwerden. KI ist Werkzeug, nicht Ersatz."
      },
      {
        q: "Werden Kunden auf KI-Nutzung hingewiesen?",
        a: "Bei Chatbots und Voice-Agents ja, das ist rechtlich und ethisch geboten. Bei internen Werkzeugen (Agent nutzt KI zur Antwortvorbereitung, Mensch versendet) ist eine Kennzeichnung nicht zwingend, wenn die Verantwortung klar beim Mitarbeitenden liegt."
      },
      {
        q: "Wo fange ich an?",
        a: "Bei der Anfragen-Triage und der Antwortentwurf-Erstellung. Beide Bereiche entlasten unmittelbar, ohne die Kundenbeziehung zu verändern. Voice-Agents und Wissensdatenbank-Aufbau sind größere Vorhaben, die planvoll angegangen werden sollten."
      }
    ],
    keywords: [
      "KI im Kundenservice",
      "KI Customer Service",
      "KI Ticket-System",
      "Voice Agent Kundenservice",
      "ChatGPT Support"
    ]
  },
  {
    slug: "hr",
    routePath: "/ki-anwendungsfaelle/hr",
    displayName: "HR",
    name: "KI im HR",
    tag: "KI im HR",
    headline: "KI in HR und Personalabteilung.",
    headlineSecondary:
      "Textarbeit entlasten, Compliance einhalten. Hochrisiko-Themen ausklammern.",
    intro:
      "HR ist einer der sensibelsten Bereiche für KI-Einsatz: Bewerberauswahl, Personalbewertung und Zugang zu Arbeitsverhältnissen fallen unter die Hochrisiko-Kategorie des EU AI Act. Umso wichtiger ist die klare Trennung zwischen unkritischen Text-Aufgaben (Stellenanzeigen, Onboarding-Materialien) und regulierten Bereichen (Vorauswahl, Bewertung). Fünf Use Cases, die klar auf der ersten Seite liegen.",
    longIntro: [
      "HR-Abteilungen erleben derzeit zwei gegensätzliche Impulse gleichzeitig. Der eine kommt aus dem Alltag: Textarbeit für Stellenanzeigen, Onboarding, interne Richtlinien und Personalkommunikation kostet Zeit, die für strategische Personalentwicklung fehlt. Der andere kommt aus dem Rechtsrahmen: Der EU AI Act stuft Personalauswahl und Personalbewertung ausdrücklich als Hochrisiko-Anwendung ein. Beide Impulse lassen sich nur bedienen, wenn man die Bereiche sauber trennt.",
      "In der Praxis heißt das: Alles, was reine Textarbeit ohne Bezug zu einer konkreten Person ist, Stellenanzeigen, Onboarding-Unterlagen, Betriebsvereinbarungs-Entwürfe, Personal-Newsletter, ist ein sicheres Einstiegsfeld für generative KI. Der Effekt ist unmittelbar spürbar, das rechtliche Risiko überschaubar, und das Team gewinnt Zeit für Aufgaben, die tatsächlich Personalarbeit sind. Skill-Gap-Analysen und Weiterbildungsplanung folgen als nächster Schritt, sobald der Betriebsrat eingebunden ist.",
      "Was wir mittelständischen Unternehmen konsequent nicht empfehlen: KI-gestützte Vorauswahl von Bewerbenden, automatisierte Bewertungen oder Überwachungsanwendungen. Nicht weil sie technisch nicht möglich wären, sondern weil sie einen Dokumentations-, Risikoprüfungs- und Transparenzaufwand mit sich bringen, den kleine und mittlere Unternehmen selten stemmen können, und weil das Signal an Bewerbende und Mitarbeitende oft mehr Schaden anrichtet als der Zeitgewinn wert ist. Der richtige HR-Einstieg ist der textzentrierte Einstieg."
    ],
    cases: [
      {
        title: "Stellenanzeigen in Marken-Tonalität",
        problem:
          "Stellenanzeigen wirken oft austauschbar: Anforderungsliste, Aufgabenliste, Textbaustein zum Unternehmen. In einem angespannten Arbeitsmarkt ist das der falsche Anfang.",
        process:
          "Klassisch: aus Vorlagen zusammenkopieren, HR-Verantwortlicher ergänzt. Der Fachbereich bekommt selten Zeit für inhaltliche Feedback-Runden.",
        aiSolution:
          "KI erhält Anforderungen, Unternehmenswerte und Zielgruppe und liefert eine Stellenanzeige mit klarer Tonalität, konkreten Formulierungen und passenden Benefits-Formulierungen. HR prüft rechtlich (AGG-Konformität), Fachbereich prüft inhaltlich.",
        example:
          "Eine Stelle für einen Backend-Entwickler wird nicht als generische Anforderungsliste ausgeschrieben, sondern mit konkretem Bezug zum aktuellen Team, Techstack und Herausforderungen.",
        tools: [
          "Text-KI in Business-Variante",
          "Unternehmensspezifisches Style-Guide oder Employer-Branding-Dokument",
          "Bewerbermanagement-System (ATS)"
        ],
        effort: "niedrig",
        risk:
          "AGG-Konformität ist Pflicht (keine diskriminierenden Formulierungen). KI kann versehentlich problematische Wortwahl produzieren, rechtliche Prüfung durch HR bleibt erforderlich.",
        privacy:
          "Bei rein textlichem Aufsetzen (keine Bewerberdaten) ist der Datenschutz unkritisch. Business-Umgebung empfohlen, auch für nicht-personenbezogene Aufgaben.",
        priority: "hoch"
      },
      {
        title: "Onboarding-Materialien konsistent halten",
        problem:
          "Onboarding-Unterlagen veralten schnell. Neue Mitarbeitende bekommen unterschiedliche Materialien, je nachdem wer sie einführt. Das erschwert einen konsistenten ersten Eindruck.",
        process:
          "Klassisch: einmal erstellt, dann jahrelang nicht aktualisiert. Bei jedem neuen System oder Prozess wächst die Diskrepanz zwischen Dokumentation und Realität.",
        aiSolution:
          "KI hilft dabei, Onboarding-Materialien aus Stichpunkten oder mündlichen Beschreibungen zu formulieren und regelmäßig zu aktualisieren. Feedback von neuen Mitarbeitenden fließt strukturiert ein.",
        example:
          "Nach jedem Onboarding gibt die neue Mitarbeiterin kurzes Feedback („Was fehlte, was war unklar?\"). Die KI schlägt Aktualisierungen vor, HR entscheidet.",
        tools: [
          "Text-KI in Business-Variante",
          "Wissensmanagement-System (Notion, Confluence, ähnlich)",
          "Kurze Feedback-Formulare für neue Mitarbeitende"
        ],
        effort: "niedrig",
        risk:
          "Feedback von neuen Mitarbeitenden anonymisieren, wenn möglich. Direktes personenbezogenes Feedback erfordert klaren Umgang mit den Rückmeldungen.",
        privacy:
          "Onboarding-Dokumente sind intern und meist unkritisch. Persönliche Rückmeldungen brauchen sensiblen Umgang, kein automatisches Speichern in offenen Systemen.",
        priority: "mittel"
      },
      {
        title: "Skill-Gap-Analyse und Weiterbildungspläne",
        problem:
          "Weiterbildungsplanung ist ein Dauerthema, das oft ad hoc entschieden wird. Ein systematischer Überblick über tatsächliche Kompetenzen und Bedarfe fehlt in vielen mittelständischen Unternehmen.",
        process:
          "Klassisch: Mitarbeitergespräche mit ungestrukturiertem Weiterbildungsteil. Ergebnisse landen in Excel-Tabellen, die selten aktualisiert werden.",
        aiSolution:
          "KI hilft, aus Rollenprofilen und Ist-Kompetenzen (via Selbsteinschätzung oder Beobachtung) strukturierte Weiterbildungsvorschläge zu erstellen. HR prüft, priorisiert und stimmt mit den Vorgesetzten ab.",
        example:
          "Für ein Vertriebsteam von zehn Personen liegt eine Skill-Übersicht vor mit klaren Vorschlägen, wer welche Weiterbildung als nächstes machen sollte. Priorisierung erfolgt gemeinsam mit dem Teamleiter.",
        tools: [
          "Text-KI in Business-Variante",
          "Kompetenz-Modell (Rollenprofile mit Anforderungen)",
          "HR-System für Historie"
        ],
        effort: "mittel",
        risk:
          "Bewertung von Mitarbeitenden ist mitbestimmungspflichtig und fällt teilweise unter die Hochrisiko-Kategorie des EU AI Act. Klare Regelung mit Betriebsrat vor Einsatz.",
        privacy:
          "Personenbezogene Kompetenzdaten gehören in geprüfte Systeme. Selbsteinschätzung ist rechtlich einfacher als externe Bewertung durch KI.",
        priority: "mittel"
      },
      {
        title: "Betriebsvereinbarungs- und Richtlinien-Texte",
        problem:
          "Neue Themen (KI-Nutzung, Homeoffice-Regeln, Datenschutz) brauchen interne Richtlinien. Diese sauber zu formulieren, dauert Wochen und bindet HR-Kapazität.",
        process:
          "Klassisch: Vorlagen anpassen, Rechtsanwalt gegenprüfen, Betriebsrat einbinden, mehrfach überarbeiten. Der Prozess dauert Monate.",
        aiSolution:
          "KI erstellt erste Textentwürfe für interne Richtlinien basierend auf Ihren Rahmenbedingungen. HR prüft, ergänzt, gibt an Rechtsberatung und Betriebsrat weiter. Der Startpunkt ist deutlich schneller erreicht.",
        example:
          "Eine KI-Nutzungsrichtlinie liegt statt in vier Wochen in vier Tagen als erste Fassung vor. Rechtliche Prüfung und Betriebsrats-Abstimmung bleiben, aber die Grundlage steht schneller.",
        tools: [
          "Text-KI in Business-Variante",
          "Vorlagen und Musterklauseln aus vertrauenswürdigen Quellen",
          "Rechtsberatung für finale Prüfung"
        ],
        effort: "niedrig",
        risk:
          "Rechtliche Formulierungen dürfen nie ohne juristische Prüfung übernommen werden. KI ist Formulierungshelfer, nicht Rechtsberatung. Verbindliche Klauseln immer prüfen lassen.",
        privacy:
          "Textliches Aufsetzen ist unkritisch. Sobald reale Daten (Betriebsvereinbarungs-Anhänge, Mitarbeiterlisten) einfließen, Business-Umgebung Pflicht.",
        priority: "hoch"
      },
      {
        title: "Personal-Newsletter und interne Kommunikation",
        problem:
          "Interne Kommunikation ist häufig unregelmäßig. Ein interner Newsletter oder eine Team-Update-Kadenz wird immer wieder verschoben, weil die Textarbeit im Alltag untergeht.",
        process:
          "Klassisch: sporadische Mails, meist von der Geschäftsführung, ohne feste Struktur. Wichtige Themen erreichen nicht alle Mitarbeitenden.",
        aiSolution:
          "KI hilft, aus Stichpunkten regelmäßig strukturierte Team- oder Unternehmenskommunikation zu erstellen. HR redigiert und veröffentlicht. Konsistenz und Regelmäßigkeit steigen.",
        example:
          "Ein monatlicher Personal-Newsletter mit fünf Sektionen (Neuigkeiten, Team-Erfolge, Termine, HR-Info, offene Stellen) wird in unter einer Stunde produziert.",
        tools: [
          "Text-KI in Business-Variante",
          "Newsletter- oder Intranet-System",
          "Ideen-Sammlung im Team"
        ],
        effort: "niedrig",
        risk:
          "Aussagen über einzelne Mitarbeitende oder Teams brauchen Freigabe der Betroffenen (Persönlichkeitsrecht). Erfolge namentlich zu erwähnen erfordert Einverständnis.",
        privacy:
          "Interne Kommunikation über Mitarbeitende gehört zum sensiblen Bereich. Klare Regeln, was namentlich erwähnt wird und was nicht.",
        priority: "niedrig"
      }
    ],
    relatedCourseSlugs: ["hr", "ai-act", "betriebsvereinbarung"],
    faqs: [
      {
        q: "Darf KI Bewerber vorauswählen?",
        a: "Nur unter sehr strengen Voraussetzungen. Personalauswahl durch KI fällt nach EU AI Act unter Hochrisiko und erfordert klare Dokumentation, Risikoprüfung, menschliche Aufsicht und Transparenz gegenüber Bewerbenden. In der Praxis empfehlen wir mittelständischen Unternehmen ausdrücklich, KI nicht für Vorauswahl-Entscheidungen einzusetzen, sondern nur für vorbereitende Aufgaben ohne Selektionswirkung."
      },
      {
        q: "Ist KI im HR mitbestimmungspflichtig?",
        a: "In den meisten Fällen ja, sobald Mitarbeitende betroffen sind. Das umfasst schon die Nutzung von KI-gestützten Werkzeugen zur Bewertung, Auswahl oder Überwachung. Reine Textarbeit ohne Bezug zu einzelnen Personen ist meist unkritischer. Wir empfehlen frühe Einbindung des Betriebsrats, unabhängig von der genauen Rechtslage im Einzelfall."
      },
      {
        q: "Wo starte ich sicher?",
        a: "Bei Stellenanzeigen, Onboarding-Materialien, internen Richtlinien und Newsletter. Diese Bereiche sind textzentriert, ohne dass einzelne Mitarbeiter bewertet oder ausgewählt werden. Skill-Analyse und Weiterbildung sind der nächste Schritt, immer mit klarer Rolle für Mitarbeiter und Betriebsrat. Vorauswahl von Bewerbern durch KI empfehlen wir nicht."
      }
    ],
    keywords: [
      "KI im HR",
      "KI Personalabteilung",
      "KI Recruiting",
      "KI Stellenanzeige",
      "AI Act HR"
    ]
  }
];

export function findDepartment(slug: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.slug === slug);
}

export function findDepartmentByRoute(routePath: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.routePath === routePath);
}
