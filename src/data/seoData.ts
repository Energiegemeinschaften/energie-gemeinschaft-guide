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
  description: "Kompletter Leitfaden zur Gründung einer Energiegemeinschaft in Österreich. 8 strukturierte Schritte mit professioneller Unterstützung - von der Idee bis zum Betrieb.",
  keywords: "Energiegemeinschaft gründen, Österreich, nachhaltige Energie, Schritt für Schritt Anleitung, Vereinsgründung, Marktpartner, EDA",
  ogTitle: "Energiegemeinschaft gründen - Kompletter Leitfaden für Österreich",
  ogDescription: "8 strukturierte Schritte zur erfolgreichen Gründung einer Energiegemeinschaft. Mit professioneller Unterstützung von der Idee bis zum Betrieb.",
  canonical: "https://energie-gemeinschaft-guide.com/"
};

export const generateStepSEO = (step: StepData, baseUrl: string = "https://energie-gemeinschaft-guide.com"): SEOData => {
  return {
    title: `${step.title} - Schritt ${step.stepNumber} | Energiegemeinschaft gründen`,
    description: `${step.description}. Detaillierte Anleitung für ${step.title.toLowerCase()} bei der Gründung einer Energiegemeinschaft in Österreich. Dauer: ${step.duration}, Komplexität: ${step.complexity}.`,
    keywords: `${step.title}, Energiegemeinschaft, ${step.complexity} Komplexität, ${step.duration}, Österreich, Schritt ${step.stepNumber}`,
    ogTitle: `${step.title} - Energiegemeinschaft Schritt ${step.stepNumber}`,
    ogDescription: `${step.description}. Professionelle Unterstützung verfügbar. Dauer: ${step.duration}.`,
    canonical: `${baseUrl}/schritt/${step.slug}`
  };
};

export const generateStepStructuredData = (step: StepData, baseUrl: string = "https://energie-gemeinschaft-guide.com") => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": step.title,
    "description": step.description,
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/schritt/${step.slug}`
    }
  };
};

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Energiegemeinschaft gründen - Kompletter Leitfaden",
  "description": "8 strukturierte Schritte zur Gründung einer Energiegemeinschaft in Österreich",
  "totalTime": "P6M", // 6 months
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Erste Überlegungen & Konzept",
      "text": "Grundlagen schaffen und Machbarkeit prüfen"
    },
    {
      "@type": "HowToStep", 
      "position": 2,
      "name": "Vereinsgründung",
      "text": "Rechtliche Grundlage schaffen"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Interne Vereinbarungen", 
      "text": "Spielregeln und Strukturen definieren"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Registrierung als Marktpartner",
      "text": "Offizieller Marktzugang"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Vertrag mit dem Netzbetreiber",
      "text": "Netzanbindung und technische Integration"
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Registrierung in der EDA-Infrastruktur",
      "text": "Systemintegration und Datenanbindung"
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Laufender Betrieb",
      "text": "Operative Führung der Energiegemeinschaft"
    },
    {
      "@type": "HowToStep",
      "position": 8,
      "name": "Jahresabschluss & Erfolgskontrolle",
      "text": "Erfolg messen und optimieren"
    }
  ],
  "url": "https://energie-gemeinschaft-guide.com/",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://energie-gemeinschaft-guide.com/"
  },
  "author": {
    "@type": "Organization",
    "name": "Energiegemeinschaft Gründungsservice"
  }
};
