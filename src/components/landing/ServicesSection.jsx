import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, HardHat, Sparkles, Users, ArrowRight, CheckCircle } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } })
};

export default function ServicesSection({ images }) {
  const [active, setActive] = useState(0);

  const services = [
    {
      icon: Building2,
      title: 'Nettoyage de Bureaux',
      desc: 'Entretien régulier ou ponctuel de vos espaces professionnels. Des locaux impeccables pour une productivité maximale et une image soignée.',
      image: images.desk,
      points: ['Entretien quotidien ou hebdomadaire', 'Bureaux, open-spaces, salles de réunion', 'Discrétion garantie pendant les horaires de travail'],
    },
    {
      icon: Home,
      title: 'Nettoyage Résidentiel',
      desc: 'Prenez soin de votre intérieur avec un service sur mesure. Nous traitons chaque espace comme si c\'était le nôtre.',
      image: images.living,
      points: ['Appartements, maisons, villas', 'Produits certifiés écologiques', 'Personnel de confiance & assuré'],
    },
    {
      icon: HardHat,
      title: 'Post-Chantier',
      desc: 'Remise en état complète après travaux. Dépoussiérage, lessivage, polissage pour un résultat clé en main prêt à habiter.',
      image: images.conference,
      points: ['Évacuation des déchets de chantier', 'Nettoyage des vitres & menuiseries', 'Résultat garanti avant remise des clés'],
    },
    {
      icon: Sparkles,
      title: 'Nettoyage Spécialisé',
      desc: 'Vitrerie, moquettes, espaces médicaux… Des interventions techniques pointues avec le savoir-faire d\'experts certifiés.',
      image: images.bathroom,
      points: ['Vitrerie en hauteur', 'Espaces médicaux & pharmaceutiques', 'Moquettes & revêtements techniques'],
    },
    {
      icon: Users,
      title: 'Équipe Professionnelle',
      desc: 'Une équipe formée, équipée et engagée. Nous intervenons avec rigueur et discrétion dans tous vos espaces.',
      image: images.team,
      points: ['Formation continue de l\'équipe', 'Uniformes & matériel fournis', 'Suivi qualité après chaque prestation'],
    },
    {
      icon: Sparkles,
      title: 'Équipements de Pointe',
      desc: 'Machines professionnelles, produits certifiés et techniques avancées pour un résultat impeccable garanti.',
      image: images.equipment,
      points: ['Matériel industriel haute performance', 'Produits éco-certifiés', 'Technologies de nettoyage vapeur'],
    },
  ];

  return (
    <section id="services" className="py-28 lg:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16"
        >
          <div>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest uppercase font-body">Nos Services</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
              Le savoir-faire<br />
              <span className="text-primary">KleanZ.</span>
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            custom={2}
            href="#contact"
            className="flex items-center gap-2 text-accent font-semibold font-body hover:gap-3 transition-all duration-300"
          >
            Demander un devis <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-10">
          {services.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-body ${
                active === i
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-secondary text-muted-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <s.icon className="w-3.5 h-3.5" />
              {s.title}
            </button>
          ))}
        </div>

        {/* Active service display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
              <img
                src={services[active].image}
                alt={services[active].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                  {React.createElement(services[active].icon, { className: 'w-5 h-5 text-accent' })}
                  <span className="text-white font-heading font-bold text-sm">{services[active].title}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-card p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4">{services[active].title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body mb-8">{services[active].desc}</p>
              <div className="space-y-3 mb-10">
                {services[active].points.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm font-body">{p}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 self-start"
              >
                Demander ce service <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        <PriceCalculator />
      </div>
    </section>
  );
}