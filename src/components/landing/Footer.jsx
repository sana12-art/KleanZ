import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background values text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <span className="font-heading font-extrabold text-[12vw] whitespace-nowrap tracking-widest">
          COURAGE · SOLIDARITÉ · EXCELLENCE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="https://media.base44.com/images/public/69e63cfe37163cac729de2ea/de9593a4c_WhatsAppImage2026-04-20at170302.jpeg"
              alt="kleanZ"
              className="h-12 w-auto rounded-lg"
            />
            <p className="text-primary-foreground/70 mt-4 leading-relaxed font-body text-sm max-w-xs">
              Entreprise familiale de nettoyage professionnel. Depuis 2018, nous prenons soin 
              de vos espaces avec professionnalisme et humanité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase mb-6 text-primary-foreground/60">
              Navigation
            </h4>
            <div className="space-y-3">
              {['Accueil', 'Notre Histoire', 'Nos Valeurs', 'Services', 'Nos Clients', 'Blog', 'Contact'].map(link => (
                <a
                  key={link}
                  href={link === 'Blog' ? '/blog' : link === 'Notre Histoire' ? '/notre-histoire' : link === 'Nos Valeurs' ? '/nos-valeurs' : `#${link === 'Accueil' ? 'hero' : link === 'Nos Clients' ? 'clients' : link.toLowerCase()}`}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase mb-6 text-primary-foreground/60">
              Nos Valeurs
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Courage', 'Travail', 'Solidarité', 'Proximité', 'Confiance', 'Exigence', 'Honnêteté'].map(v => (
                <span
                  key={v}
                  className="px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/70 text-xs font-medium font-body"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm font-body">
            © {new Date().getFullYear()} KleanZ. Tous droits réservés.
          </p>
          <p className="text-primary-foreground/40 text-xs font-body">
            Travail · Confiance · Famille
          </p>
        </div>
      </div>
    </footer>
  );
}