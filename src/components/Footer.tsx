import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-muted/30 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © 2025 Energiegemeinschaft Gründen
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="mailto:info@energiegemeinschaft-gruenden.at?subject=Kontakt - Energiegemeinschaft&body=Hallo,%0D%0A%0D%0AIch möchte Sie kontaktieren.%0D%0A%0D%0AVielen Dank!"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
