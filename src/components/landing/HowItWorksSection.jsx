import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, FileText, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Décrivez votre besoin',
    desc: 'Remplissez notre formulaire en ligne ou contactez-nous directement. Que ce soit pour un bureau, un appartement ou un chantier, notre équipe est à votre écoute.',
    color: 'bg-primary/10 text-primary',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Recevez un devis gratuit',
    desc: 'Nos experts examinent vos besoins et vous transmettent un devis transparent, précis et sans engagement, entièrement adapté à votre projet sous 24h.',
    color: 'bg-accent/10 text-accent',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Nos équipes interviennent',
    desc: 'Une fois le devis validé, nous planifions l\'intervention. Nos professionnels respectent les délais et les plus hauts standards de qualité.',
    color: 'bg-primary/10 text-primary',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } }),
};

export default function HowItWorksSection() {
  return (
    <section id="comment-ca-marche" className="py-28 lg:py-36 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase font-body">Comment ça marche ?</span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
            Trois étapes simples<br />
            <span className="text-primary">pour un espace impeccable.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mt-4 font-body">
            Un processus clair, sans surprise, pour vous garantir la meilleure expérience possible.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              custom={i}
              className="relative z-10 flex flex-col items-center text-center bg-card rounded-3xl p-10 border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
            >
              {/* Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground font-heading font-extrabold text-sm px-4 py-1.5 rounded-full shadow-lg shadow-primary/20">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 mt-4`}>
                <step.icon className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 font-body"
          >
            Demander un devis gratuit <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}