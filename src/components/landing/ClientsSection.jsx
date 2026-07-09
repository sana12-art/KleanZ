import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'BNP Paribas', logo: '/logos/bnp-paribas.svg' },
  { name: 'AXA', logo: '/logos/axa.svg' },
  { name: 'Coface', logo: '/logos/coface.svg' },
  { name: 'Century 21', logo: '/logos/century21.svg' },
  { name: 'France Langue', logo: '/logos/france-langue.svg' },
  { name: "Institut France", logo: '/logos/institut-france.svg' },
  { name: 'La Poste', logo: '/logos/la-poste.svg' },
  { name: 'Macif', logo: '/logos/macif.svg' },
  { name: 'OpenClassrooms', logo: '/logos/openclassrooms.svg' },
  { name: 'Orange', logo: '/logos/orange.svg' },
  { name: 'SNCF', logo: '/logos/sncf.svg' },
  { name: 'Société Générale', logo: '/logos/societe-generale.svg' },
];

// Duplicate for seamless loop
const track = [...clients, ...clients];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function ClientsSection() {
  return (
    <section id="clients" className="py-28 lg:py-36 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase font-body">Ils nous font confiance</span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Plus de <span className="text-primary">60 partenaires</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mt-4 font-body">
            Des institutions, entreprises et associations de renom nous confient leurs espaces en Île-de-France.
          </motion.p>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
              {track.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="mx-4 flex-shrink-0 bg-card rounded-2xl border border-border px-8 py-6 flex items-center justify-center hover:shadow-md hover:border-accent/30 transition-all duration-300 group"
                  style={{ minWidth: '180px', height: '96px' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-14 max-w-[160px] object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 flex-shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm font-body mt-10"
        >
          Et bien d'autres entreprises, associations et institutions en Île-de-France…
        </motion.p>
      </div>
    </section>
  );
}