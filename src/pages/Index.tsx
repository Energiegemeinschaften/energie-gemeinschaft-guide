import React from 'react';
import HeroSection from '@/components/HeroSection';
import TimelineStep from '@/components/TimelineStep';
import { stepsData } from '@/data/stepsData';
import { Lightbulb, Users, FileText, ShieldCheck, Zap, Database, Settings, Trophy } from 'lucide-react';
const Index = () => {
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
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg">
              Kostenlose Erstberatung
            </button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;