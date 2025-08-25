import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Clock, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineStepProps {
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
  isLast?: boolean;
  slug: string;
  icon: LucideIcon;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  stepNumber,
  title,
  description,
  duration,
  complexity,
  serviceOffer,
  isLast = false,
  slug,
  icon: Icon
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'niedrig': return 'bg-success text-success-foreground';
      case 'mittel': return 'bg-accent text-accent-foreground';
      case 'hoch': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div 
      ref={stepRef}
      className={`relative flex gap-8 pb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      {/* Timeline line and indicator */}
      <div className="flex flex-col items-center">
        <div 
          className={`w-12 h-12 rounded-full border-4 border-primary bg-background flex items-center justify-center font-bold text-primary transition-all duration-500 ${
            isVisible ? 'animate-scale-in' : ''
          }`}
        >
          {stepNumber}
        </div>
        <div className="w-1 h-32 bg-timeline-line mt-4"></div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6">
        <Card className="bg-gradient-to-r from-card to-card/50 border-border/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl text-foreground">{title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {description}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="gap-1">
                  <Clock className="w-3 h-3" />
                  {duration}
                </Badge>
                <Badge className={getComplexityColor(complexity)}>
                  {complexity}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link to={`/schritt/${slug}`}>
              <Button variant="outline" className="group">
                Mehr Details
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Service offer callout */}
        <Card className="bg-gradient-to-r from-accent/20 to-primary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">{serviceOffer.title}</h4>
                <p className="text-sm text-muted-foreground">{serviceOffer.description}</p>
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                  {serviceOffer.ctaText}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TimelineStep;