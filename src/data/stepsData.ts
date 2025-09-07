export interface StepData {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  complexity: 'niedrig' | 'mittel' | 'hoch';
  serviceOffer: {
    title: string;
    description: string;
    ctaText: string;
  };
  slug: string;
  officialGuideUrl: string;
  detailContent: {
    overview: string;
    requirements: string[];
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const stepsData: StepData[] = [
  {
    stepNumber: 1,
    title: "Erste Überlegungen & Konzept",
    description: "Grundlagen schaffen und Machbarkeit prüfen",
    duration: "2-4 Wochen",
    complexity: "niedrig",
    slug: "erste-ueberlegungen-konzept",
    officialGuideUrl: "https://energiegemeinschaften.gv.at/1-erste-ueberlegungen-konzept/",
    serviceOffer: {
      title: "Professionelle Machbarkeitsstudie",
      description: "Unsere zertifizierten Partner erstellen eine umfassende Analyse Ihres Vorhabens und bewerten das Potenzial Ihrer geplanten Energiegemeinschaft.",
      ctaText: "Machbarkeitsstudie anfordern"
    },
    detailContent: {
      overview: "Der erste Schritt zur Gründung einer Energiegemeinschaft beginnt mit der Entwicklung eines soliden Konzepts. Hier werden die Grundlagen gelegt und die Machbarkeit des Vorhabens geprüft. Es ist wichtig, sich über die rechtlichen, technischen und wirtschaftlichen Aspekte im Klaren zu sein.",
      requirements: [
        "Grundkenntnisse über Energiegemeinschaften",
        "Identifikation potenzieller Teilnehmer",
        "Überblick über verfügbare Energiequellen",
        "Grundlegende Finanzplanung",
        "Kontakt zu lokalen Behörden"
      ],
      steps: [
        {
          title: "Recherche und Information",
          description: "Informieren Sie sich über die rechtlichen Grundlagen und Voraussetzungen für Energiegemeinschaften in Österreich."
        },
        {
          title: "Potenzialanalyse",
          description: "Bewerten Sie das Potenzial in Ihrer Region: Verfügbare Energiequellen, interessierte Teilnehmer und Infrastruktur."
        },
        {
          title: "Erste Gespräche",
          description: "Führen Sie informelle Gespräche mit potenziellen Mitgliedern und lokalen Stakeholdern."
        },
        {
          title: "Grobkonzept erstellen",
          description: "Entwickeln Sie ein erstes Konzept mit Zielen, Struktur und groben Kosten-Nutzen-Überlegungen."
        }
      ]
    }
  },
  {
    stepNumber: 2,
    title: "Vereinsgründung",
    description: "Rechtliche Grundlage schaffen",
    duration: "4-6 Wochen",
    complexity: "mittel",
    slug: "vereinsgruendung",
    officialGuideUrl: "https://energiegemeinschaften.gv.at/2-vereinsgruendung/",
    serviceOffer: {
      title: "Rechtssichere Vereinsgründung",
      description: "Mit zunehmender Komplexität der rechtlichen Anforderungen empfehlen wir die Unterstützung durch Experten für eine fehlerfreie Gründung.",
      ctaText: "Vereinsgründung beauftragen"
    },
    detailContent: {
      overview: "Die Vereinsgründung bildet das rechtliche Fundament Ihrer Energiegemeinschaft. Dabei müssen verschiedene rechtliche Vorschriften beachtet und entsprechende Dokumente erstellt werden. Eine sorgfältige Vorbereitung ist entscheidend für den späteren Erfolg.",
      requirements: [
        "Mindestens 2 Gründungsmitglieder",
        "Vereinsstatuten",
        "Protokoll der Gründungsversammlung",
        "Nachweis der Geschäftsfähigkeit aller Gründer",
        "Anmeldung bei der Vereinsbehörde"
      ],
      steps: [
        {
          title: "Statuten ausarbeiten",
          description: "Erstellen Sie die Vereinsstatuten entsprechend den gesetzlichen Vorgaben und den spezifischen Bedürfnissen Ihrer Energiegemeinschaft."
        },
        {
          title: "Gründungsversammlung einberufen",
          description: "Organisieren Sie die offizielle Gründungsversammlung mit allen Gründungsmitgliedern."
        },
        {
          title: "Vorstand wählen",
          description: "Wählen Sie den Vorstand und definieren Sie die Aufgabenverteilung und Verantwortlichkeiten."
        },
        {
          title: "Anmeldung bei Behörden",
          description: "Melden Sie den Verein bei der zuständigen Vereinsbehörde an und beantragen Sie die Vereinsregistrierung."
        }
      ]
    }
  },
  {
    stepNumber: 3,
    title: "Interne Vereinbarungen",
    description: "Spielregeln und Strukturen definieren",
    duration: "3-5 Wochen",
    complexity: "mittel",
    slug: "interne-vereinbarungen",
    officialGuideUrl: "https://energiegemeinschaften.gv.at/3-interne-vereinbarungen/",
    serviceOffer: {
      title: "Rechtskonforme Vertragsgestaltung",
      description: "Damit das Ehrenamt nicht zum Vollzeitjob wird: Unsere Rechtsexperten erstellen alle notwendigen internen Vereinbarungen rechtssicher und praxistauglich.",
      ctaText: "Vertragspaket erstellen lassen"
    },
    detailContent: {
      overview: "Nach der Vereinsgründung müssen die internen Spielregeln definiert werden. Diese Vereinbarungen regeln das Zusammenleben in der Energiegemeinschaft und sind essentiell für einen reibungslosen Betrieb. Sie umfassen technische, wirtschaftliche und organisatorische Aspekte.",
      requirements: [
        "Gründungsprotokoll des Vereins",
        "Liste aller Mitglieder",
        "Technische Spezifikationen der Anlagen",
        "Kostenaufstellung",
        "Rechtliche Beratung empfohlen"
      ],
      steps: [
        {
          title: "Mitgliedervereinbarung",
          description: "Definieren Sie Rechte und Pflichten der Mitglieder, Aufnahme- und Austrittsbedingungen."
        },
        {
          title: "Energieaufteilung regeln",
          description: "Legen Sie fest, wie die erzeugte Energie auf die Mitglieder aufgeteilt wird."
        },
        {
          title: "Kostenverteilung",
          description: "Bestimmen Sie, wie Kosten für Betrieb, Wartung und Verwaltung auf die Mitglieder umgelegt werden."
        },
        {
          title: "Entscheidungsprozesse",
          description: "Definieren Sie, wie Entscheidungen getroffen werden und welche Mehrheiten erforderlich sind."
        }
      ]
    }
  },
  {
    stepNumber: 4,
    title: "Registrierung als Marktpartner",
    description: "Offizieller Marktzugang",
    duration: "6-8 Wochen",
    complexity: "hoch",
    slug: "registrierung-marktpartner",
    officialGuideUrl: "https://energiegemeinschaften.gv.at/4-registrierung-als-marktpartner/",
    serviceOffer: {
      title: "Als Obmann Haftungsrisiken minimieren",
      description: "Die Registrierung als Marktpartner bringt umfangreiche Pflichten mit sich. Unsere zertifizierten Partner übernehmen diese Verantwortung und minimieren Ihr persönliches Risiko.",
      ctaText: "Marktpartner-Service nutzen"
    },
    detailContent: {
      overview: "Die Registrierung als Marktpartner ist ein kritischer Schritt, der Ihre Energiegemeinschaft berechtigt, am Energiemarkt teilzunehmen. Dieser Prozess erfordert umfangreiche Dokumentation und die Erfüllung strenger regulatorischer Anforderungen.",
      requirements: [
        "Vollständige Vereinsdokumentation",
        "Technische Anlagendokumentation",
        "Nachweis der technischen Kompetenz",
        "Finanzielle Sicherheiten",
        "Haftpflichtversicherung"
      ],
      steps: [
        {
          title: "Antragsstellung",
          description: "Stellen Sie den Antrag auf Registrierung als Marktpartner bei der E-Control Austria."
        },
        {
          title: "Dokumentation einreichen",
          description: "Reichen Sie alle erforderlichen Unterlagen und Nachweise ein."
        },
        {
          title: "Prüfungsverfahren",
          description: "Durchlaufen Sie das Prüfungsverfahren der Regulierungsbehörde."
        },
        {
          title: "Registrierung erhalten",
          description: "Nach erfolgreicher Prüfung erhalten Sie die offizielle Marktpartner-Registrierung."
        }
      ]
    }
  },
  {
    stepNumber: 5,
    title: "Vertrag mit dem Netzbetreiber",
    description: "Netzanbindung und technische Integration",
    duration: "4-6 Wochen",
    complexity: "hoch",
    slug: "vertrag-netzbetreiber",
    officialGuideUrl: "https://energiegemeinschaften.gv.at/5-vertrag-mit-dem-netzbetreiber/",
    serviceOffer: {
      title: "Nutzen Sie eine automatisierte Plattform",
      description: "Moderne IT-Lösungen automatisieren die komplexe Kommunikation mit Netzbetreibern und reduzieren den administrativen Aufwand erheblich.",
      ctaText: "Automatisierung aktivieren"
    },
    detailContent: {
      overview: "Der Vertrag mit dem Netzbetreiber regelt die technischen und kommerziellen Bedingungen für die Einspeisung und den Bezug von Energie. Diese Verträge sind komplex und erfordern technisches Verständnis der Energiewirtschaft.",
      requirements: [
        "Marktpartner-Registrierung",
        "Technische Anlagenspezifikationen",
        "Netzanschlusspläne",
        "Messkonzept",
        "Versicherungsnachweis"
      ],
      steps: [
        {
          title: "Vertragsverhandlungen",
          description: "Führen Sie Verhandlungen mit dem zuständigen Netzbetreiber über die Vertragsbedingungen."
        },
        {
          title: "Technische Spezifikationen",
          description: "Definieren Sie die technischen Parameter für Einspeisung und Bezug."
        },
        {
          title: "Messkonzept erstellen",
          description: "Entwickeln Sie ein Konzept für die Energiemessung und -abrechnung."
        },
        {
          title: "Vertragsabschluss",
          description: "Schließen Sie den Vertrag mit dem Netzbetreiber ab."
        }
      ]
    }
  },
  {
    stepNumber: 6,
    title: "Registrierung in der EDA-Infrastruktur",
    description: "Systemintegration und Datenanbindung",
    duration: "3-4 Wochen",
    complexity: "hoch",
    slug: "registrierung-eda-infrastruktur",
    officialGuideUrl: "https://energiegemeinschaften.gv.at/6-registrierung-in-der-eda-infrastruktur/",
    serviceOffer: {
      title: "Unser zertifizierter Partner kann das alles für Sie übernehmen",
      description: "Die EDA-Registrierung erfordert tiefgreifende IT-Kenntnisse. Lassen Sie Experten diese komplexe Systemintegration durchführen.",
      ctaText: "EDA-Integration beauftragen"
    },
    detailContent: {
      overview: "Die Registrierung in der EDA (Energiedaten Austria) Infrastruktur ermöglicht den automatisierten Datenaustausch mit allen relevanten Marktpartnern. Diese technische Integration ist essentiell für den operativen Betrieb der Energiegemeinschaft.",
      requirements: [
        "Aktive Marktpartner-Registrierung",
        "IT-Infrastruktur",
        "Datenschutzkonzept",
        "Technische Kompetenz",
        "Backup-Systeme"
      ],
      steps: [
        {
          title: "EDA-Zugang beantragen",
          description: "Beantragen Sie den Zugang zur EDA-Infrastruktur bei Energiedaten Austria."
        },
        {
          title: "Systemintegration",
          description: "Integrieren Sie Ihre IT-Systeme in die EDA-Infrastruktur."
        },
        {
          title: "Testphase",
          description: "Durchlaufen Sie die Testphase und validieren Sie die Datenübertragung."
        },
        {
          title: "Produktivschaltung",
          description: "Aktivieren Sie den produktiven Betrieb der EDA-Anbindung."
        }
      ]
    }
  },
  {
    stepNumber: 7,
    title: "Laufender Betrieb",
    description: "Operative Führung der Energiegemeinschaft",
    duration: "Kontinuierlich",
    complexity: "mittel",
    slug: "laufender-betrieb",
    officialGuideUrl: "https://energiegemeinschaften.gv.at/7-laufender-betrieb/",
    serviceOffer: {
      title: "Mit zunehmender Anzahl an Mitgliedern steigt der Aufwand",
      description: "Professionelle Verwaltungssoftware automatisiert Abrechnungen, Monitoring und Mitgliederverwaltung. Behalten Sie die Kontrolle über Ihre Gemeinschaft mit den richtigen digitalen Tools.",
      ctaText: "Software-Lösung anfragen"
    },
    detailContent: {
      overview: "Der laufende Betrieb einer Energiegemeinschaft umfasst zahlreiche administrative, technische und kaufmännische Aufgaben. Eine strukturierte Herangehensweise und klare Prozesse sind entscheidend für den langfristigen Erfolg.",
      requirements: [
        "Vollständige Systemintegration",
        "Geschultes Personal",
        "Monitoring-Systeme",
        "Buchhaltungssystem",
        "Kommunikationskanäle"
      ],
      steps: [
        {
          title: "Monitoring und Überwachung",
          description: "Überwachen Sie kontinuierlich die Energieproduktion und -verteilung."
        },
        {
          title: "Abrechnung und Buchhaltung",
          description: "Führen Sie regelmäßige Abrechnungen durch und verwalten Sie die Finanzen."
        },
        {
          title: "Mitgliederverwaltung",
          description: "Betreuen Sie die Mitglieder und bearbeiten Sie Anfragen und Beschwerden."
        },
        {
          title: "Wartung und Instandhaltung",
          description: "Organisieren Sie die regelmäßige Wartung der Energieanlagen."
        }
      ]
    }
  },
  {
    stepNumber: 8,
    title: "Jahresabschluss & Erfolgskontrolle",
    description: "Erfolg messen und optimieren",
    duration: "Jährlich",
    complexity: "niedrig",
    slug: "gratulation-erfolgskontrolle",
    officialGuideUrl: "https://energiegemeinschaften.gv.at/8-gratulation/",
    serviceOffer: {
      title: "Kontinuierliche Optimierung",
      description: "Regelmäßige Erfolgsanalysen und Optimierungsvorschläge halten Ihre Energiegemeinschaft auf Erfolgskurs und maximieren den Nutzen für alle Beteiligten.",
      ctaText: "Erfolgsanalyse anfordern"
    },
    detailContent: {
      overview: "Herzlichen Glückwunsch! Ihre Energiegemeinschaft ist erfolgreich am Laufen. Jetzt geht es darum, den Erfolg zu messen, zu optimieren und das volle Potenzial auszuschöpfen. Regelmäßige Evaluierungen helfen dabei, die Gemeinschaft kontinuierlich zu verbessern.",
      requirements: [
        "Funktionsfähige Energiegemeinschaft",
        "Vollständige Betriebsdaten",
        "Mitgliederfeedback",
        "Finanzberichte",
        "Technische Leistungsdaten"
      ],
      steps: [
        {
          title: "Leistungsanalyse",
          description: "Analysieren Sie die technische und wirtschaftliche Leistung Ihrer Energiegemeinschaft."
        },
        {
          title: "Mitgliederzufriedenheit",
          description: "Erheben Sie die Zufriedenheit der Mitglieder und identifizieren Sie Verbesserungspotenziale."
        },
        {
          title: "Optimierungsmaßnahmen",
          description: "Implementieren Sie Verbesserungen basierend auf den Analyseergebnissen."
        },
        {
          title: "Zukunftsplanung",
          description: "Planen Sie die weitere Entwicklung und mögliche Erweiterungen der Energiegemeinschaft."
        }
      ]
    }
  }
];