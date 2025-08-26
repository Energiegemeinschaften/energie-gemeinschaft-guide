import React from 'react';
import HeroSection from '@/components/HeroSection';
import TimelineStep from '@/components/TimelineStep';
import { stepsData } from '@/data/stepsData';
import { homeSEO, homeStructuredData } from '@/data/seoData';
import { useSEO } from '@/hooks/useSeo';
import { Lightbulb, Users, FileText, ShieldCheck, Zap, Database, Settings, Trophy } from 'lucide-react';
const Index = () => {
  // Apply SEO for home page
  useSEO({
    title: homeSEO.title,
    description: homeSEO.description,
    keywords: homeSEO.keywords,
    ogTitle: homeSEO.ogTitle,
    ogDescription: homeSEO.ogDescription,
    canonical: homeSEO.canonical,
    structuredData: homeStructuredData
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
  return <div className="min-h-screen bg-background">
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
      
      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">
            Bereit für Ihre Energiegemeinschaft?
          </h3>
          <p className="text-xl text-muted-foreground">Unsere zertifizierten Partner unterstützen Sie bei jedem Schritt</p>
          <div className="flex justify-center">
            <a 
              href="mailto:software@alber.contact?subject=Kostenlose Erstberatung - Energiegemeinschaft&body=Hallo,%0D%0A%0D%0AIch interessiere mich für eine kostenlose Erstberatung zum Thema Energiegemeinschaft.%0D%0A%0D%0AMeine Kontaktdaten:%0D%0ATelefon: [Bitte hier eintragen]%0D%0AE-Mail: [Bitte hier eintragen]%0D%0AAdresse: [Bitte hier eintragen]%0D%0A%0D%0ABevorzugter Kontakt: [ ] Telefon [ ] E-Mail [ ] Video-Call%0D%0ABevorzugte Zeit: [Bitte hier eintragen]%0D%0A%0D%0AKurze Beschreibung meines Projekts:%0D%0A[Bitte hier eintragen]%0D%0A%0D%0AVielen Dank für Ihre Unterstützung!%0D%0A%0D%0AMit freundlichen Grüßen"
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