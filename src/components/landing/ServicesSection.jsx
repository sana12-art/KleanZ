import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, HardHat, Sparkles, Users } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } })
};

export default function ServicesSection({ images }) {
  const services = [
    {
      icon: Building2,
      title: 'Nettoyage de Bureaux',
      desc: 'Entretien régulier ou ponctuel de vos espaces professionnels. Des locaux impeccables pour une productivité maximale.',
      image: images.desk,
    },
    {
      icon: Home,
      title: 'Nettoyage Résidentiel',
      desc: 'Prenez soin de votre intérieur avec un service sur mesure. Nous traitons chaque espace comme si c\'était le nôtre.',
      image: images.living,
    },
    {
      icon: HardHat,
      title: 'Post-Chantier',
      desc: 'Remise en état complète après travaux. Dépoussiérage, lessivage et polissage pour un résultat clé en main.',
      image: images.conference,
    },
    {
      icon: Sparkles,
      title: 'Nettoyage Spécialisé',
      desc: 'Vitrerie, moquettes, espaces médicaux… Des interventions techniques pointues avec le savoir-faire d\'experts certifiés.',
      image: images.bathroom,
    },
    {
      icon: Users,
      title: 'Équipe Professionnelle',
      desc: 'Une équipe formée, équipée et engagée. Nous intervenons avec rigueur et discrétion dans tous vos espaces.',
      image: images.team,
    },
    {
      icon: Sparkles,
      title: 'Équipements de Pointe',
      desc: 'Machines professionnelles, produits certifiés et techniques avancées pour un résultat impeccable garanti.',
      image: images.equipment,
    },
  ];

  return (
    <section id="services" className="py-28 lg:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase font-body">
              Nos Services
            </span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight whitespace-nowrap"
          >
            Nous simplifions <span className="text-primary">le nettoyage.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-lg mt-4 font-body"
          >
            Des prestations sur mesure pour chaque espace, réalisées par une équipe de confiance.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-5">
                  {s.desc}
                </p>

                <div className="flex gap-3">
                  <a
                    href="#booking"
                    className="flex-1 text-center py-2.5 px-4 rounded-xl border border-border text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200 font-body"
                  >
                    En savoir plus
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-all duration-200 font-body"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-primary rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
        >
          <div>
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-foreground mb-2">
              Vous ne savez pas quel service choisir ?
            </h3>
            <p className="text-primary-foreground/70 font-body">
              Notre équipe est prête à écouter vos besoins et à vous proposer une solution sur mesure.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-xl font-body whitespace-nowrap"
          >
            Soumettre ma demande →
          </a>
        </motion.div>

        <PriceCalculator />
      </div>
    </section>
  );
}