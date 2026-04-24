import React from 'react';
import { motion } from 'framer-motion';

// Selected notable clients only
const clients = [
  'Institut de France',
  'OpenClassrooms',
  'Hôpital Saint-Maurice',
  'Fondation Entreprendre',
  'Century 21',
  'Opticien Afflelou',
  'Muslim Hands',
  'France Langue',
  'Dental Monitoring',
  'Fondation Simone et Cino Del Duca',
  'Club de Rugby de Vincennes',
  'RESAH',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } })
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
          <motion.span variants={fadeUp} custom={0} className="text-accent font-semibold text-sm tracking-widest uppercase font-body">
            Ils nous font confiance
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Plus de <span className="text-primary">60 partenaires</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mt-4 font-body">
            Des institutions, entreprises et associations de renom nous confient leurs espaces en Île-de-France.
          </motion.p>
        </motion.div>

        {/* Grid of selected clients */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {clients.map((name, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-2xl border border-border px-6 py-5 flex items-center justify-center text-center hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm font-semibold text-foreground font-body leading-snug">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm font-body mt-8"
        >
          Et bien d'autres entreprises, associations et institutions…
        </motion.p>
      </div>
    </section>
  );
}