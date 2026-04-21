import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15 } })
};

const milestones = [
  { year: '2018', title: 'La naissance', text: 'Suite à la perte d\'emploi des deux parents, une décision courageuse s\'impose : ne pas baisser les bras.' },
  { year: '2019', title: 'Les premiers pas', text: 'Du porte-à-porte, un seau, un balai… et surtout une volonté immense de s\'en sortir par le travail.' },
  { year: '2021', title: 'La croissance', text: 'Jour après jour, client après client, la confiance s\'installe. L\'entreprise grandit naturellement.' },
  { year: 'Aujourd\'hui', title: 'L\'excellence', text: 'Plus de 60 clients B2B nous font confiance. Nous restons fidèles à nos débuts : proximité, qualité et famille.' },
];

export default function StorySection() {
  return (
    <section id="histoire" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mb-20"
        >
          <motion.span variants={fadeUp} custom={0} className="text-accent font-semibold text-sm tracking-widest uppercase font-body">
            Notre Histoire
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Une histoire de famille,<br />
            <span className="text-primary">de courage et de travail.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed mt-6 font-body">
            Notre entreprise est avant tout une histoire de famille. En 2018, avec des enfants encore à charge 
            et une détermination sans faille, deux parents ont choisi de transformer une épreuve en opportunité.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                custom={i}
                className={`relative flex items-start gap-8 md:gap-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-2 ring-4 ring-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-accent font-heading font-extrabold text-3xl">{m.year}</span>
                  <h3 className="font-heading font-bold text-xl text-foreground mt-2">{m.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed font-body">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-snug italic">
            « Les enfants ont vu leurs parents se battre, construire et transmettre des valeurs fortes : 
            le respect, l'effort et l'importance du travail bien fait. »
          </p>
        </motion.div>
      </div>
    </section>
  );
}