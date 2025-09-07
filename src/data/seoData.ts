import { StepData } from './stepsData';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  canonical: string;
}

export const homeSEO: SEOData = {
  title: "Energiegemeinschaft gründen - Schritt für Schritt Anleitung | Österreich",
  description: "Kompletter Leitfaden zur Gründung einer Energiegemeinschaft in Österreich. 8 strukturierte Schritte mit professioneller Unterstützung - von der Idee bis zum Betrieb. Basierend auf dem offiziellen Leitfaden des Klima- und Energiefonds.",
  keywords: "Energiegemeinschaft gründen, Österreich, nachhaltige Energie, Schritt für Schritt Anleitung, Vereinsgründung, Marktpartner, EDA, Klima- und Energiefonds, offizieller Leitfaden, Bundesregierung",
  ogTitle: "Energiegemeinschaft gründen - Kompletter Leitfaden für Österreich",
  ogDescription: "8 strukturierte Schritte zur erfolgreichen Gründung einer Energiegemeinschaft. Mit professioneller Unterstützung und offiziellen Quellen von der Idee bis zum Betrieb.",
  canonical: "https://energie-gemeinschaft-guide.com/"
};

export const generateStepSEO = (step: StepData, baseUrl: string = "https://energie-gemeinschaft-guide.com"): SEOData => {
  return {
    title: `${step.title} - Schritt ${step.stepNumber} | Energiegemeinschaft gründen`,
    description: `${step.description}. Detaillierte Anleitung für ${step.title.toLowerCase()} bei der Gründung einer Energiegemeinschaft in Österreich. Dauer: ${step.duration}, Komplexität: ${step.complexity}. Mit Verweis auf den offiziellen Leitfaden des Klima- und Energiefonds.`,
    keywords: `${step.title}, Energiegemeinschaft, ${step.complexity} Komplexität, ${step.duration}, Österreich, Schritt ${step.stepNumber}, Klima- und Energiefonds, offizieller Leitfaden`,
    ogTitle: `${step.title} - Energiegemeinschaft Schritt ${step.stepNumber}`,
    ogDescription: `${step.description}. Professionelle Unterstützung verfügbar. Dauer: ${step.duration}. Basierend auf offiziellen Quellen.`,
    canonical: `${baseUrl}/schritt/${step.slug}`
  };
};

export const generateStepStructuredData = (step: StepData, baseUrl: string = "https://energie-gemeinschaft-guide.com") => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": step.title,
    "description": step.description + " - Basierend auf dem offiziellen Leitfaden des Klima- und Energiefonds Österreich",
    "totalTime": step.duration,
    "step": step.detailContent.steps.map((stepItem, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": stepItem.title,
      "text": stepItem.description
    })),
    "supply": step.detailContent.requirements.map(req => ({
      "@type": "HowToSupply",
      "name": req
    })),
    "url": `${baseUrl}/schritt/${step.slug}`,
    "sameAs": step.officialGuideUrl,
    "citation": {
      "@type": "WebPage",
      "name": "Offizieller Leitfaden Energiegemeinschaften",
      "url": step.officialGuideUrl,
      "publisher": {
        "@type": "Organization",
        "name": "Klima- und Energiefonds Österreich"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/schritt/${step.slug}`
    }
  };
};

// Enhanced Schema Markup for 2025 AI Search Optimization
export const homeStructuredData = [
  // Primary HowTo Schema
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Energiegemeinschaft gründen - Kompletter Leitfaden",
    "description": "8 strukturierte Schritte zur Gründung einer Energiegemeinschaft in Österreich - Basierend auf dem offiziellen Leitfaden des Klima- und Energiefonds",
    "totalTime": "P6M", // 6 months
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "5000-15000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Erste Überlegungen & Konzept",
        "text": "Grundlagen schaffen und Machbarkeit prüfen",
        "url": "https://energie-gemeinschaft-guide.com/schritt/erste-ueberlegungen-konzept"
      },
      {
        "@type": "HowToStep", 
        "position": 2,
        "name": "Vereinsgründung",
        "text": "Rechtliche Grundlage schaffen",
        "url": "https://energie-gemeinschaft-guide.com/schritt/vereinsgruendung"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Interne Vereinbarungen", 
        "text": "Spielregeln und Strukturen definieren",
        "url": "https://energie-gemeinschaft-guide.com/schritt/interne-vereinbarungen"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Registrierung als Marktpartner",
        "text": "Offizieller Marktzugang",
        "url": "https://energie-gemeinschaft-guide.com/schritt/registrierung-marktpartner"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Vertrag mit dem Netzbetreiber",
        "text": "Netzanbindung und technische Integration",
        "url": "https://energie-gemeinschaft-guide.com/schritt/vertrag-netzbetreiber"
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Registrierung in der EDA-Infrastruktur",
        "text": "Systemintegration und Datenanbindung",
        "url": "https://energie-gemeinschaft-guide.com/schritt/registrierung-eda-infrastruktur"
      },
      {
        "@type": "HowToStep",
        "position": 7,
        "name": "Laufender Betrieb",
        "text": "Operative Führung der Energiegemeinschaft",
        "url": "https://energie-gemeinschaft-guide.com/schritt/laufender-betrieb"
      },
      {
        "@type": "HowToStep",
        "position": 8,
        "name": "Jahresabschluss & Erfolgskontrolle",
        "text": "Erfolg messen und optimieren",
        "url": "https://energie-gemeinschaft-guide.com/schritt/gratulation-erfolgskontrolle"
      }
    ],
    "url": "https://energie-gemeinschaft-guide.com/",
    "sameAs": "https://energiegemeinschaften.gv.at/online-guide/",
    "citation": {
      "@type": "WebPage",
      "name": "EEG Online-Guide - Klima- und Energiefonds",
      "url": "https://energiegemeinschaften.gv.at/online-guide/",
      "publisher": {
        "@type": "Organization",
        "name": "Klima- und Energiefonds Österreich"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://energie-gemeinschaft-guide.com/"
    },
    "author": {
      "@type": "Organization",
      "name": "Energiegemeinschaft Gründungsservice"
    }
  },
  
  // Organization Schema for Brand Authority
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Energiegemeinschaft Gründungsservice",
    "url": "https://energie-gemeinschaft-guide.com",
    "logo": "https://energie-gemeinschaft-guide.com/favicon.ico",
    "description": "Professioneller Service für die Gründung von Energiegemeinschaften in Österreich. Basierend auf offiziellen Leitfäden des Klima- und Energiefonds.",
    "areaServed": {
      "@type": "Country",
      "name": "Austria"
    },
    "serviceType": [
      "Energiegemeinschaft Beratung",
      "Vereinsgründung",
      "Marktpartner Registration",
      "EDA Integration"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@energiegemeinschaft-gruenden.at",
      "contactType": "customer service",
      "availableLanguage": "German"
    },
    "sameAs": [
      "https://energiegemeinschaften.gv.at/online-guide/"
    ]
  },

  // WebSite Schema with Search Action
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Energiegemeinschaft Guide",
    "url": "https://energie-gemeinschaft-guide.com",
    "description": "Kompletter Leitfaden zur Gründung einer Energiegemeinschaft in Österreich",
    "inLanguage": "de-AT",
    "copyrightYear": "2025",
    "author": {
      "@type": "Organization",
      "name": "Energiegemeinschaft Gründungsservice"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://energie-gemeinschaft-guide.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },

  // Service Schema for Professional Services
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Energiegemeinschaft Gründungsberatung",
    "description": "Professionelle Unterstützung bei der Gründung von Energiegemeinschaften in Österreich",
    "provider": {
      "@type": "Organization",
      "name": "Energiegemeinschaft Gründungsservice"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Austria"
    },
    "serviceType": "Business Consulting",
    "category": "Sustainable Energy Consulting",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Energiegemeinschaft Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machbarkeitsstudie",
            "description": "Umfassende Analyse des Potenzials Ihrer geplanten Energiegemeinschaft"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rechtssichere Vereinsgründung",
            "description": "Unterstützung durch Experten für eine fehlerfreie Gründung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marktpartner-Service",
            "description": "Übernahme der Marktpartner-Verantwortung zur Risikominimierung"
          }
        }
      ]
    }
  }
];

// FAQ Schema for Common Questions
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie lange dauert es, eine Energiegemeinschaft zu gründen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Gründung einer Energiegemeinschaft dauert in der Regel 6-8 Monate und umfasst 8 strukturierte Schritte von der ersten Konzeption bis zum laufenden Betrieb."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Kosten entstehen bei der Gründung einer Energiegemeinschaft?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Gründungskosten variieren je nach Größe und Komplexität, liegen aber typischerweise zwischen 5.000 und 15.000 Euro für die gesamte Abwicklung inklusive professioneller Unterstützung."
      }
    },
    {
      "@type": "Question",
      "name": "Brauche ich eine Vereinsgründung für eine Energiegemeinschaft?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, in Österreich ist die Gründung eines Vereins die rechtliche Grundlage für eine Energiegemeinschaft. Dies ist in Schritt 2 des offiziellen Leitfadens vorgesehen."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist die EDA-Infrastruktur und warum ist sie wichtig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die EDA (Energiedaten Austria) Infrastruktur ermöglicht den automatisierten Datenaustausch mit allen relevanten Marktpartnern und ist essentiell für den operativen Betrieb der Energiegemeinschaft."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich professionelle Hilfe bei der Gründung bekommen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, für jeden der 8 Schritte bieten zertifizierte Partner professionelle Unterstützung an - von der Machbarkeitsstudie bis zur technischen Implementation."
      }
    }
  ]
};
