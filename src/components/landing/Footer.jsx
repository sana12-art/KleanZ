import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Accueil', href: '#hero', isAnchor: true },
  { label: 'Notre Histoire', href: '/notre-histoire', isAnchor: false },
  { label: 'Nos Valeurs', href: '/nos-valeurs', isAnchor: false },
  { label: 'Services', href: '#services', isAnchor: true },
  { label: 'Nos Clients', href: '#clients', isAnchor: true },
  { label: 'Rendez-vous', href: '#booking', isAnchor: true },
  { label: 'Blog', href: '/blog', isAnchor: false },
  { label: 'Contact', href: '#contact', isAnchor: true },
];

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
              src="https://media.base44.com/images/public/69e63cfe37163cac729de2ea/99044bf05_Capture_d_cran_2026-05-18_104616-removebg-preview.png"
              alt="KleanZ"
              className="h-16 w-auto"
            />
            <p className="text-primary-foreground/70 mt-4 leading-relaxed font-body text-sm max-w-xs">
              Entreprise familiale de nettoyage professionnel. Depuis 2018, nous prenons soin 
              de vos espaces avec professionnalisme et humanité.
            </p>
          </div>

          {/* Navigation — same links as navbar */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase mb-6 text-primary-foreground/60">
              Navigation
            </h4>
            <div className="space-y-3">
              {footerLinks.map(link => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                )
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