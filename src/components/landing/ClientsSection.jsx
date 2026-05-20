import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'BNP Paribas', logo: 'https://www.bnpparibas.com/assets/images/logos/bnpparibas-logo.svg' },
  { name: 'AXA', logo: 'https://www.axa.com/content/dam/axa/brandidentity/AXA_logo_RGB.png' },
  { name: 'TotalEnergies', logo: 'https://totalenergies.com/sites/g/files/wompnd471/files/styles/scale_1200/public/atoms/images/totalenergies_logo.png' },
  { name: 'Carrefour', logo: 'https://logodownload.org/wp-content/uploads/2014/04/carrefour-logo-1.png' },
  { name: "L'Oréal", logo: 'https://www.loreal.com/media/filer_public/2018/12/06/loreal-logo.png' },
  { name: 'Orange', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png' },
  { name: 'Sanofi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Sanofi.svg/200px-Sanofi.svg.png' },
  { name: 'Danone', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Danone.svg/200px-Danone.svg.png' },
  { name: 'Renault', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Text.svg/200px-Renault_2021_Text.svg.png' },
  { name: 'Air France', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/200px-Air_France_Logo.svg.png' },
  { name: 'LVMH', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LVMH_Logo.svg/200px-LVMH_Logo.svg.png' },
  { name: 'Bouygues', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bouygues_logo.svg/200px-Bouygues_logo.svg.png' },
  { name: 'Veolia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Veolia_logo.svg/200px-Veolia_logo.svg.png' },
  { name: 'Sodexo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sodexo_logo.svg/200px-Sodexo_logo.svg.png' },
  { name: 'Accor', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Accor_Hotels_logo.svg/200px-Accor_Hotels_logo.svg.png' },
  { name: 'Société Générale', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale.svg/200px-Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale.svg.png' },
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
                  className="mx-4 flex-shrink-0 bg-card rounded-2xl border border-border px-7 py-5 flex items-center gap-3 hover:shadow-md hover:border-accent/30 transition-all duration-300 group"
                  style={{ minWidth: '200px' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 w-20 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 flex-shrink-0"
                  />
                  <span className="text-sm font-semibold text-foreground font-body whitespace-nowrap leading-tight">{client.name}</span>
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