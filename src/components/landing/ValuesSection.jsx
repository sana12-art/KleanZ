import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Hammer, Users, HandshakeIcon, Shield, Award, Eye } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Courage', desc: 'Transformer une épreuve en opportunité' },
  { icon: Hammer, title: 'Travail & Persévérance', desc: 'Commencer avec un simple seau et un balai' },
  { icon: Users, title: 'Solidarité Familiale', desc: 'Une entreprise construite ensemble' },
  { icon: HandshakeIcon, title: 'Proximité', desc: 'Une relation simple et humaine avec les clients' },
  { icon: Shield, title: 'Confiance', desc: 'Intervenir dans les espaces privés avec respect' },
  { icon: Award, title: 'Exigence & Qualité', desc: 'Professionnalisme rime avec détermination' },
  { icon: Eye, title: 'Honnêteté', desc: 'Des prestations claires et justes' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 }
  })
};

export default function ValuesSection() {
  return (
    <section id="valeurs" className="py-28 lg:py-36 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-accent font-semibold text-sm tracking-widest uppercase font-body"
          >
            Nos Valeurs
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mt-4 leading-tight"
          >
            Les piliers qui <span className="text-primary">nous guident.</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              custom={i}
              className={`group bg-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-accent/20 w-full max-w-sm
                ${i === values.length - 1 ? "lg:col-start-2" : ""}
              `}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-500">
                <v.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>

              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {v.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}