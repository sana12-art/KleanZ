import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'Pretto FINSPOT', 'ATLAND', 'Liberkeys', 'KBRW', 'Shadow', 'Markentive',
  'Le 38 RIV JAZZ CLUB', 'Popchef', 'Groupe François 1er', 'Ubicast',
  'Institut de France', 'ECGE CONSEIL', 'Adyoulike', 'DIGIDOM',
  'MON COACH ACADEMY', 'Tropique FM', 'DVNA STUDIO', 'K EVENTS',
  'Advalo', 'Wanda production', 'Tomcat factory', 'Century 21',
  'Optodis', 'Oleo recycling SAS', 'Opticien Afflelou', 'France Langue',
  'HTL', 'Bellanopolis', 'WKDA FRANCE', 'Sauvegarde de l\'adolescence',
  'Yumana', 'Fondation Entreprendre', 'Muslim Hands', 'Agence La Forêt',
  'HALISOL', 'Lemon Learning', 'Innovorder', 'Dental Monitoring',
  'CREADS', 'Club de Rugby de Vincennes', 'Autorisation IDF',
  'Pythagore Avocat', 'Cabinet Maître GALY', 'RESAH',
  'Wizard Technologie', 'Diplomeo', 'OpenClassrooms',
  'La Brûlerie de Belleville', 'Kiss The Bride', 'Iktos',
  'Studio AZAP', 'Cendry', 'TOOFRUIT', 'Fondation Simone et Cino Del Duca',
  'Restaurant 129 Cergy', 'Hackajoo', 'Event Maker', 'Hôpital Saint-Maurice',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } })
};

export default function ClientsSection() {
  // Split clients into two rows for the marquee
  const half = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, half);
  const row2 = clients.slice(half);

  return (
    <section id="clients" className="py-28 lg:py-36 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} custom={0} className="text-accent font-semibold text-sm tracking-widest uppercase font-body">
            Ils nous font confiance
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Plus de <span className="text-primary">60 partenaires</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mt-4 font-body">
            De l'Institut de France à OpenClassrooms, des entreprises de toutes tailles nous confient leurs espaces.
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10" />
        <div className="flex animate-scroll-left">
          {[...row1, ...row1].map((name, i) => (
            <ClientBadge key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10" />
        <div className="flex animate-scroll-left" style={{ animationDirection: 'reverse', animationDuration: '50s' }}>
          {[...row2, ...row2].map((name, i) => (
            <ClientBadge key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientBadge({ name }) {
  return (
    <div className="flex-shrink-0 mx-2 px-6 py-3 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors duration-300">
      <span className="text-sm font-medium text-foreground whitespace-nowrap font-body">{name}</span>
    </div>
  );
}