export interface FAQItem {
  question: string;
  answer: string;
  detailedAnswer?: {
    intro?: string;
    sections?: Array<{
      title: string;
      items: string[];
    }>;
    conclusion?: string;
  };
}

// FAQ content for the dedicated FAQ page - foundational questions about EGs
export const faqPageQuestions: FAQItem[] = [
  {
    question: "Was ist eine EG?",
    answer: "Eine Energiegemeinschaft (EG) ist eine Organisation, die gemeinschaftlich Energie produziert, verbraucht und verteilt, um ökologische, wirtschaftliche und soziale Vorteile zu erzielen.",
    detailedAnswer: {
      intro: "Eine Energiegemeinschaft (EG) ist eine Organisation, die gemeinschaftlich Energie produziert, verbraucht und verteilt, um ökologische, wirtschaftliche und soziale Vorteile zu erzielen.",
      sections: [
        {
          title: "Ziele von EGs:",
          items: [
            "Förderung erneuerbarer Energien und Reduktion des CO2-Fußabdrucks",
            "Wirtschaftliche Vorteile wie günstigere Strompreise und reduzierte Netzkosten",
            "Stärkung des Gemeinschaftssinns und Bewusstseinsbildung",
            "Dezentralisierung und aktives Energiemanagement",
            "Gemeinschaftliche Investitionen in verschiedene Energieträger"
          ]
        },
        {
          title: "Rollen in einer EG:",
          items: [
            "Verbraucher: Beziehen Strom aus der Gemeinschaft",
            "Einspeiser: Stellen Strom zur Verfügung",
            "Prosumer: Kombinieren Verbrauch und Einspeisung",
            "Organisatorische Rollen: Übernehmen Aufgaben wie Gründung, Abrechnung und Monitoring"
          ]
        }
      ],
      conclusion: "Teilnahmeberechtigt sind natürliche Personen, Gemeinden, Vereine, Klein- und Mittelunternehmen sowie bestimmte Privatunternehmen unter bestimmten Bedingungen."
    }
  },
  {
    question: "Wie funktioniert eine EG und wie wird die Energie aufgeteilt?",
    answer: "Energiegemeinschaften ermöglichen die gemeinschaftliche Produktion, den Verbrauch und die Verteilung von Energie. Die Energieaufteilung erfolgt nach einem festgelegten Verteilungsschlüssel über das bestehende Stromnetz, wobei Smart-Meter-Daten für die Abrechnung genutzt werden.",
    detailedAnswer: {
      intro: "Energiegemeinschaften (EGs) ermöglichen die gemeinschaftliche Produktion, den Verbrauch und die Verteilung von Energie. Die Energieaufteilung erfolgt nach einem festgelegten Verteilungsschlüssel.",
      sections: [
        {
          title: "Funktionsweise:",
          items: [
            "Ziele: Förderung erneuerbarer Energien, wirtschaftliche Vorteile, soziale Aspekte und Stärkung der Dezentralisierung",
            "Rollen: Teilnehmer können Verbraucher, Einspeiser oder Prosumer (gleichzeitige Verbraucher und Einspeiser) sein",
            "Netzwerk: Die Energie wird über das bestehende Stromnetz verteilt, wobei Smart-Meter-Daten für die Abrechnung genutzt werden",
            "Verteilungsschlüssel: Die Energie wird anhand eines dynamischen oder statischen Modells aufgeteilt. Es gibt jedoch keine Garantie für bestimmte Energiemengen, weshalb Teilnehmer weiterhin auf einen Energieversorger angewiesen sind",
            "Tarifgestaltung: Innerhalb der EG können die Preise frei gewählt werden, dürfen aber nicht primär auf finanziellen Gewinn ausgerichtet sein"
          ]
        }
      ]
    }
  },
  {
    question: "Für wen ist eine EG?",
    answer: "Eine Energiegemeinschaft steht natürlichen Personen, Gemeinden, Vereinen, Klein- und Mittelunternehmen sowie bestimmten Privatunternehmen offen. Es gibt verschiedene Modelle wie EEG, BEG und GEA für unterschiedliche Zielgruppen.",
    detailedAnswer: {
      intro: "Eine Energiegemeinschaft (EG) steht verschiedenen Teilnehmergruppen offen, die gemeinsam von den Vorteilen profitieren können.",
      sections: [
        {
          title: "Teilnahmeberechtigte:",
          items: [
            "Natürliche Personen: Privatpersonen können als Verbraucher, Einspeiser oder Prosumer teilnehmen",
            "Gemeinden und öffentliche Einrichtungen: Lokale Behörden oder Dienststellen können sich beteiligen",
            "Juristische Personen: Dazu gehören Vereine, Genossenschaften und Klein- und Mittelbetriebe (KMU). Großunternehmen können in bestimmten Modellen wie der Bürgerenergiegemeinschaft (BEG) teilnehmen",
            "Einschränkungen für Unternehmen: Die Teilnahme darf nicht die gewerbliche Haupttätigkeit betreffen, es sei denn, es handelt sich um lokale oder regionale Elektrizitätserzeuger, die unabhängig von großen Versorgern sind"
          ]
        },
        {
          title: "Modelle und Zielgruppen:",
          items: [
            "Erneuerbare-Energie-Gemeinschaft (EEG): Ideal für Gemeinden, KMU, Nachbarschaftsverbände und Privatinitiativen",
            "Bürgerenergiegemeinschaft (BEG): Geeignet für große Multi-Standort-Unternehmen, nachhaltige Geschäftsmodelle und Privatinitiativen",
            "Gemeinschaftliche Erzeugungsanlagen (GEA): Für Genossenschaften, Bauträger, Hausverwalter und ähnliche Gruppen, die Strom direkt im hauseigenen Netz nutzen möchten"
          ]
        }
      ]
    }
  },
  {
    question: "Welche Voraussetzungen gibt es?",
    answer: "Die Gründung einer EG erfordert eine eigene Rechtspersönlichkeit (z.B. Verein), mindestens zwei Rechtspersonen, Smart-Meter, Registrierung als Marktpartner, Vertrag mit dem Netzbetreiber und Registrierung in der EDA-Infrastruktur.",
    detailedAnswer: {
      intro: "Die Gründung und Teilnahme an einer Energiegemeinschaft (EG) erfordert die Erfüllung bestimmter rechtlicher, organisatorischer und technischer Voraussetzungen.",
      sections: [
        {
          title: "Voraussetzungen für die Gründung:",
          items: [
            "Rechtsform: Eine EG benötigt eine eigene Rechtspersönlichkeit, z. B. als Verein oder Genossenschaft (außer bei Gemeinschaftlichen Erzeugungsanlagen, wo ein Vertrag ausreicht)",
            "Statuten: Die Statuten müssen den Vereinszweck und die innere Ordnung klar definieren und dürfen nicht primär auf finanziellen Gewinn ausgerichtet sein",
            "Teilnehmer: Mindestens zwei Rechtspersonen sind erforderlich",
            "Teilnehmerberechtigung: Teilnehmer können natürliche Personen, Gemeinden, Vereine, KMU und in bestimmten Fällen auch Großunternehmen sein",
            "Smart-Meter: Smart-Meter sind erforderlich, um die Messwerte für die Abrechnung zu erfassen. Falls keine vorhanden sind, müssen diese eingebaut werden",
            "Netzbereich: Die Teilnehmer müssen sich im gleichen Netzbereich befinden (lokal oder regional), was durch eine Nahbereichsabfrage beim Netzbetreiber geprüft wird",
            "Marktpartner-Registrierung: Die EG muss sich als Marktpartner registrieren und eine Marktpartner-ID erhalten",
            "Netzbetreiber-Vertrag: Ein Vertrag mit dem Netzbetreiber ist notwendig, der u. a. die Marktpartner-ID und den Aufteilungsschlüssel enthält",
            "EDA-Infrastruktur: Die Registrierung in der EDA-Plattform ist erforderlich, um Energiedaten zu verwalten. Dies umfasst das Hochladen von Unterlagen und die Verifizierung durch den Netzbetreiber"
          ]
        },
        {
          title: "Voraussetzungen für Teilnehmer:",
          items: [
            "Verbraucher und Einspeiser: Müssen sich im Netzbetreiber-Kundenportal registrieren und eine Zusatzvereinbarung bestätigen, damit Messwerte übermittelt werden können",
            "Unternehmen: Dürfen nur teilnehmen, wenn die EG nicht ihre gewerbliche Haupttätigkeit betrifft, außer bei lokalen/regionalen Elektrizitätserzeugern"
          ]
        }
      ]
    }
  },
  {
    question: "Ich muss Photovoltaik besitzen, um bei einer EG Mitglied werden zu können, richtig?",
    answer: "Nein, das ist ein häufiges Missverständnis. Sie müssen keine Photovoltaikanlage besitzen, um Mitglied einer Energiegemeinschaft zu werden. Auch reine Verbraucher können teilnehmen.",
    detailedAnswer: {
      intro: "Nein, das ist ein häufiges Missverständnis. Sie müssen keine Photovoltaikanlage besitzen, um Mitglied einer Energiegemeinschaft (EG) zu werden. Auch reine Verbraucher können teilnehmen.",
      sections: [
        {
          title: "Details:",
          items: [
            "Teilnahme ohne PV-Anlage: Es ist möglich, als reiner Verbraucher Mitglied einer EG zu sein. Jede Gemeinschaft lebt von der Zusammenarbeit zwischen Produzenten und Verbrauchern, sodass auch Personen ohne eigene Erzeugungsanlagen willkommen sind",
            "Rollen in einer EG: Neben Prosumern (gleichzeitige Verbraucher und Einspeiser) gibt es auch reine Verbraucher, die Strom aus der Gemeinschaft beziehen, und reine Einspeiser, die Strom in die Gemeinschaft einspeisen"
          ]
        }
      ]
    }
  },
  {
    question: "Welche Arten von EGs gibt es?",
    answer: "Es gibt drei Haupttypen: Lokale EEGs (innerhalb einer Trafostation, -57% Netzkosten), Regionale EEGs (innerhalb eines Umspannwerks, -28% Netzkosten) und Bürgerenergiegemeinschaften (österreichweit, flexible Teilnahme).",
    detailedAnswer: {
      sections: [
        {
          title: "Lokale EEGs:",
          items: [
            "Gebietsumfang: Innerhalb einer Trafostation",
            "Teilnahmeberechtigte: Natürliche Personen, Gemeinden, Vereine, Klein- und Mittelunternehmen",
            "Vorteile: -57% Netzkosten und -100% Abgaben"
          ]
        },
        {
          title: "Regionale EEGs:",
          items: [
            "Gebietsumfang: Innerhalb eines Umspannwerks und Netzbetreibers",
            "Teilnahmeberechtigte: Wie bei lokalen EEGs",
            "Vorteile: -28% Netzkosten und -100% Abgaben"
          ]
        },
        {
          title: "Bürgerenergiegemeinschaften (BEG):",
          items: [
            "Gebietsumfang: Österreichweit, auch über Konzessionsgebiete mehrerer Netzbetreiber hinweg",
            "Teilnahmeberechtigte: Natürliche und juristische Personen, einschließlich Großunternehmen",
            "Vorteile: Flexibilität bei der Teilnahme und Förderung nachhaltiger Energieprojekte"
          ]
        }
      ]
    }
  }
];

// FAQ content for homepage - focused on the founding process
export const homepageFAQQuestions: FAQItem[] = [
  {
    question: "Wie lange dauert es, eine Energiegemeinschaft zu gründen?",
    answer: "Die Gründung einer Energiegemeinschaft dauert in der Regel 6-8 Monate und umfasst 8 strukturierte Schritte von der ersten Konzeption bis zum laufenden Betrieb."
  },
  {
    question: "Welche Kosten entstehen bei der Gründung einer Energiegemeinschaft?",
    answer: "Die Gründungskosten variieren je nach Größe und Komplexität, liegen aber typischerweise zwischen 5.000 und 15.000 Euro für die gesamte Abwicklung inklusive professioneller Unterstützung."
  },
  {
    question: "Brauche ich eine Vereinsgründung für eine Energiegemeinschaft?",
    answer: "Ja, in Österreich ist die Gründung eines Vereins die rechtliche Grundlage für eine Energiegemeinschaft. Dies ist in Schritt 2 des offiziellen Leitfadens vorgesehen."
  },
  {
    question: "Was ist die EDA-Infrastruktur und warum ist sie wichtig?",
    answer: "Die EDA (Energiedaten Austria) Infrastruktur ermöglicht den automatisierten Datenaustausch mit allen relevanten Marktpartnern und ist essentiell für den operativen Betrieb der Energiegemeinschaft."
  },
  {
    question: "Kann ich professionelle Hilfe bei der Gründung bekommen?",
    answer: "Ja, für jeden der 8 Schritte bieten zertifizierte Partner professionelle Unterstützung an - von der Machbarkeitsstudie bis zur technischen Implementation."
  }
];

// Generate structured data for FAQ pages
export const generateFAQStructuredData = (faqQuestions: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqQuestions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
