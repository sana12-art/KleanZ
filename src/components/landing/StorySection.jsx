import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15 } })
};

const milestones = [
  { year: '2018', title: 'La naissance', text: 'Suite à la perte d\'emploi des deux parents, une décision courageuse s\'impose : ne pas baisser les bras. Avec un capital nul mais une volonté immense, KleanZ voit le jour.', color: 'from-primary/20 to-primary/5' },
  { year: '2019', title: 'Les premiers pas', text: 'Du porte-à-porte, un seau, un balai… et surtout une volonté immense de s\'en sortir par le travail. Les premiers clients font confiance à cette famille déterminée.', color: 'from-accent/20 to-accent/5' },
  { year: '2021', title: 'La croissance', text: 'Jour après jour, client après client, la confiance s\'installe. L\'entreprise grandit naturellement, l\'équipe s\'agrandit, les contrats B2B se multiplient.', color: 'from-primary/20 to-primary/5' },
  { year: 'Aujourd\'hui', title: 'L\'excellence', text: 'Plus de 60 clients B2B nous font confiance. Nous restons fidèles à nos débuts : proximité, qualité et famille. KleanZ est devenu une référence en Île-de-France.', color: 'from-accent/20 to-accent/5' },
];

export default function StorySection() {
  return (
    <section id="histoire" className="py-28 lg:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mb-24"
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase font-body">Notre Histoire</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
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
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-primary/10 md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={i}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-2 md:-translate-x-2 ring-8 ring-background z-10 shadow-lg shadow-accent/30" />

                {/* Year badge (center) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-7 z-20">
                  <span className="bg-primary text-primary-foreground font-heading font-extrabold text-sm px-4 py-1.5 rounded-full shadow-lg shadow-primary/20">
                    {m.year}
                  </span>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className={`bg-gradient-to-br ${m.color} rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow duration-500`}>
                    <span className="md:hidden text-accent font-heading font-extrabold text-2xl block mb-2">{m.year}</span>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3">{m.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-body text-sm">{m.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 relative"
        >
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <span className="font-heading font-extrabold text-[20vw] text-white whitespace-nowrap absolute -top-4 left-0">FAMILLE</span>
            </div>
            <span className="text-accent/60 font-heading text-8xl leading-none absolute top-4 left-8">"</span>
            <p className="relative z-10 text-xl md:text-2xl font-heading font-bold text-primary-foreground leading-snug max-w-3xl mx-auto">
              Les enfants ont vu leurs parents se battre, construire et transmettre des valeurs fortes : 
              le respect, l'effort et l'importance du travail bien fait.
            </p>
            <div className="mt-6 w-12 h-0.5 bg-accent mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}