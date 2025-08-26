import React, { useLayoutEffect, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Users, AlertTriangle, CheckCircle, FileText, Phone } from 'lucide-react';
import { stepsData } from '@/data/stepsData';

const StepDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const step = stepsData.find(s => s.slug === slug);


  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!step) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Schritt nicht gefunden</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Übersicht
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getComplexityVariant = (complexity: string) => {
    switch (complexity) {
      case 'niedrig': return 'success' as const;
      case 'mittel': return 'accent' as const;
      case 'hoch': return 'destructive' as const;
      default: return 'secondary' as const;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Button>
            </Link>
            <div className="flex gap-2">
              <Badge variant="outline" className="gap-1">
                <Clock className="w-3 h-3" />
                {step.duration}
              </Badge>
              <Badge variant={getComplexityVariant(step.complexity)}>
                {step.complexity}
              </Badge>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {step.stepNumber}
              </div>
              <h1 className="text-4xl font-bold text-foreground">{step.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground">{step.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Überblick
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {step.detailContent.overview}
            </p>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-accent-foreground" />
              Voraussetzungen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {step.detailContent.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Steps to complete */}
        <Card>
          <CardHeader>
            <CardTitle>Durchführung</CardTitle>
            <CardDescription>So gehen Sie konkret vor</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {step.detailContent.steps.map((stepItem, index) => (
                <li key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">{stepItem.title}</h4>
                    <p className="text-sm text-muted-foreground">{stepItem.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Service partner offer */}
        <Card className="bg-gradient-to-r from-accent/20 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Professionelle Unterstützung
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">{step.serviceOffer.title}</h4>
              <p className="text-muted-foreground">{step.serviceOffer.description}</p>
            </div>
            
            <div className="bg-card/50 p-4 rounded-lg space-y-3">
              <h5 className="font-medium text-foreground">Vorteile der professionellen Betreuung:</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Zeitersparnis durch Expertise
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Minimierung von Haftungsrisiken
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Rechtssichere Durchführung
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Laufende Betreuung verfügbar
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href={`mailto:software@alber.contact?subject=Energiegemeinschaft - ${step.serviceOffer.ctaText}&body=Hallo,%0D%0A%0D%0AIch interessiere mich für die professionelle Unterstützung für: ${step.serviceOffer.ctaText}%0D%0A%0D%0ABitte kontaktieren Sie mich für weitere Informationen.%0D%0A%0D%0AVielen Dank!`}>
                  {step.serviceOffer.ctaText}
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="mailto:software@alber.contact?subject=Beratung zum Thema Energiegemeinschaft&body=Hallo,%0D%0A%0D%0AIch möchte zum Thema Energiegemeinschaft beraten werden.%0D%0A%0D%0AMeine Kontaktdaten:%0D%0ATelefon: [Bitte hier eintragen]%0D%0AE-Mail: [Bitte hier eintragen]%0D%0AAdresse: [Bitte hier eintragen]%0D%0A%0D%0ABevorzugter Kontakt: [ ] Telefon [ ] E-Mail [ ] Video-Call%0D%0ABevorzugte Zeit: [Bitte hier eintragen]%0D%0A%0D%0AKurze Beschreibung meines Projekts:%0D%0A[Bitte hier eintragen]%0D%0A%0D%0AVielen Dank für Ihre Unterstützung!%0D%0A%0D%0AMit freundlichen Grüßen">
                  <Phone className="w-4 h-4" />
                  Beratung anfordern
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between pt-8">
          {step.stepNumber > 1 && (
            <Link to={`/schritt/${stepsData.find(s => s.stepNumber === step.stepNumber - 1)?.slug}`}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Vorheriger Schritt
              </Button>
            </Link>
          )}
          
          <div className="flex-1"></div>
          
          {step.stepNumber < stepsData.length && (
            <Link to={`/schritt/${stepsData.find(s => s.stepNumber === step.stepNumber + 1)?.slug}`}>
              <Button className="gap-2">
                Nächster Schritt
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepDetail;