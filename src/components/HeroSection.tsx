import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap, Users, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-energy-community.jpg';

const HeroSection: React.FC = () => {
  const scrollToTimeline = () => {
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Energiegemeinschaft - Nachhaltige Energiezukunft" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Energiegemeinschaft
            <span className="block text-primary">gründen</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-dark max-w-3xl mx-auto leading-relaxed">
            Schritt-für-Schritt zur eigenen Energiegemeinschaft. 
            Wir zeigen Ihnen den Weg und vermitteln zertifizierte Partner für jeden Bereich.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 py-8">
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Nachhaltige Energie</span>
          </div>
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Gemeinschaftlich</span>
          </div>
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Umweltfreundlich</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Button 
            onClick={scrollToTimeline}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group animate-glow-pulse"
          >
            Jetzt loslegen
            <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
          <p className="text-sm text-foreground">
            8 übersichtliche Schritte mit professioneller Unterstützung
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;