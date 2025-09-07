import React from 'react';
import HeroSection from '@/components/HeroSection';
import TimelineStep from '@/components/TimelineStep';
import { stepsData } from '@/data/stepsData';
import { homeSEO, homeStructuredData } from '@/data/seoData';
import { faqPageQuestions, homepageFAQQuestions, generateFAQStructuredData } from '@/data/faqData';
import { useSEO } from '@/hooks/useSeo';
import { Lightbulb, Users, FileText, ShieldCheck, Zap, Database, Settings, Trophy } from 'lucide-react';
const Index = () => {
  // Apply SEO for home page with enhanced 2025 schema markup
  const allFAQs = [...faqPageQuestions, ...homepageFAQQuestions];
  const combinedStructuredData = generateFAQStructuredData(allFAQs);
  useSEO({
    title: homeSEO.title,
    description: homeSEO.description,
    keywords: homeSEO.keywords,
    ogTitle: homeSEO.ogTitle,
    ogDescription: homeSEO.ogDescription,
    canonical: homeSEO.canonical,
    structuredData: [...homeStructuredData, combinedStructuredData]
  });

  const stepIcons = [Lightbulb,
  // Erste Überlegungen & Konzept
  Users,
  // Vereinsgründung
  FileText,
  // Interne Vereinbarungen
  ShieldCheck,
  // Registrierung als Marktpartner
  Zap,
  // Vertrag mit dem Netzbetreiber
  Database,
  // Registrierung in der EDA-Infrastruktur
  Settings,
  // Laufender Betrieb
  Trophy // Gratulation & Erfolgskontrolle
  ];
  return <div className="bg-background">
      <HeroSection />
      
      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Der Weg zur Energiegemeinschaft
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              8 strukturierte Schritte mit professioneller Unterstützung - 
              von der ersten Idee bis zum erfolgreichen Betrieb
            </p>
          </div>
          
          <div className="space-y-0">
            {stepsData.map((step, index) => <TimelineStep key={step.stepNumber} stepNumber={step.stepNumber} title={step.title} description={step.description} duration={step.duration} complexity={step.complexity} serviceOffer={step.serviceOffer} isLast={index === stepsData.length - 1} slug={step.slug} icon={stepIcons[index]} />)}
          </div>
        </div>
      </section>
      
      {/* Official Guide Reference
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/10 dark:to-blue-900/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Offizieller Leitfaden der Bundesregierung
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Zusätzliche Informationen und behördliche Details finden Sie im offiziellen 
                Online-Guide des Klima- und Energiefonds.
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://energiegemeinschaften.gv.at/online-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Zum offiziellen Leitfaden
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">
            Bereit für Ihre Energiegemeinschaft?
          </h3>
          <p className="text-xl text-muted-foreground">Unsere zertifizierten Partner unterstützen Sie bei jedem Schritt</p>
          <div className="flex justify-center">
            <a 
              href="mailto:info@energiegemeinschaft-gruenden.at?subject=Kostenlose Erstberatung - Energiegemeinschaft&body=Hallo,%0D%0A%0D%0AIch interessiere mich für eine kostenlose Erstberatung zum Thema Energiegemeinschaft.%0D%0A%0D%0AMeine Kontaktdaten:%0D%0ATelefon: [Bitte hier eintragen]%0D%0AE-Mail: [Bitte hier eintragen]%0D%0AAdresse: [Bitte hier eintragen]%0D%0A%0D%0ABevorzugter Kontakt: [ ] Telefon [ ] E-Mail [ ] Video-Call%0D%0ABevorzugte Zeit: [Bitte hier eintragen]%0D%0A%0D%0AKurze Beschreibung meines Projekts:%0D%0A[Bitte hier eintragen]%0D%0A%0D%0AVielen Dank für Ihre Unterstützung!%0D%0A%0D%0AMit freundlichen Grüßen"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg inline-block"
            >
              Kostenlose Erstberatung
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;