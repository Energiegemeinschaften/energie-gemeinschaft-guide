import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useSEO } from '@/hooks/useSeo';
import { faqPageQuestions, homepageFAQQuestions, generateFAQStructuredData } from '@/data/faqData';

const FAQ = () => {
  // Combine both FAQ sets for comprehensive page
  const allFAQs = [...faqPageQuestions, ...homepageFAQQuestions];
  const combinedStructuredData = generateFAQStructuredData(allFAQs);

  // SEO for FAQ page
  useSEO({
    title: 'FAQ - Häufig gestellte Fragen | Energiegemeinschaft Gründen',
    description: 'Umfassende FAQ zu Energiegemeinschaften: Grundlagen, Funktionsweise, Teilnahme, Voraussetzungen, Gründungskosten, Dauer und professionelle Unterstützung.',
    keywords: 'FAQ, Energiegemeinschaft, EG, häufige Fragen, Antworten, Photovoltaik, Teilnahme, Voraussetzungen, Gründung, Kosten, Dauer',
    structuredData: [combinedStructuredData]
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 gap-2">
                <ArrowLeft className="w-4 h-4" />
                <Home className="w-4 h-4" />
                <span>Zur Startseite</span>
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Häufig gestellte Fragen
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alle wichtigen Antworten rund um Energiegemeinschaften - von den Grundlagen bis zur Gründung
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Section 1: What is an EG? - Foundational Questions */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Was ist eine Energiegemeinschaft?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Grundlegende Fragen zu Energiegemeinschaften
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqPageQuestions.map((faq, index) => {
                const isPhotovoltaikQuestion = faq.question.includes("Photovoltaik");
                
                return (
                  <AccordionItem key={`foundational-${index}`} value={`foundational-${index + 1}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      {/* Special styling for PV misconception */}
                      {isPhotovoltaikQuestion && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                          <p className="font-semibold text-green-800">
                            {faq.detailedAnswer?.intro}
                          </p>
                        </div>
                      )}
                      
                      {/* Regular intro for other questions */}
                      {!isPhotovoltaikQuestion && faq.detailedAnswer?.intro && (
                        <p>{faq.detailedAnswer.intro}</p>
                      )}
                      
                      {/* Render sections */}
                      {faq.detailedAnswer?.sections?.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="font-semibold text-foreground mb-2">{section.title}</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            {section.items.map((item, itemIndex) => {
                              // Check if item has bold formatting (contains : after bold text)
                              const parts = item.split(':');
                              if (parts.length > 1) {
                                return (
                                  <li key={itemIndex}>
                                    <strong>{parts[0]}:</strong> {parts.slice(1).join(':')}
                                  </li>
                                );
                              }
                              return <li key={itemIndex}>{item}</li>;
                            })}
                          </ul>
                        </div>
                      ))}
                      
                      {/* Conclusion */}
                      {faq.detailedAnswer?.conclusion && (
                        <p>{faq.detailedAnswer.conclusion}</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Section 2: Founding Process Questions */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Gründung einer Energiegemeinschaft
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Praktische Fragen zum Gründungsprozess
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {homepageFAQQuestions.map((faq, index) => (
                <AccordionItem key={`founding-${index}`} value={`founding-${index + 1}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">
            Weitere Fragen?
          </h3>
          <p className="text-xl text-muted-foreground">Kontaktieren Sie uns für eine persönliche Beratung</p>
          <div className="flex justify-center">
            <a 
              href="mailto:info@energiegemeinschaft-gruenden.at?subject=Frage zu Energiegemeinschaften&body=Hallo,%0D%0A%0D%0AIch habe eine Frage zu Energiegemeinschaften:%0D%0A%0D%0A[Bitte hier Ihre Frage eintragen]%0D%0A%0D%0AVielen Dank für Ihre Unterstützung!%0D%0A%0D%0AMit freundlichen Grüßen"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg inline-block"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
