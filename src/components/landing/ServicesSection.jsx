import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, HardHat, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } })
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
      title: 'Nettoyage Post-Chantier',
      desc: 'Remise en état complète après travaux. Dépoussiérage, lessivage, polissage pour un résultat clé en main.',
      image: images.conference,
    },
    {
      icon: Sparkles,
      title: 'Nettoyage Spécialisé',
      desc: 'Vitrerie, moquettes, espaces médicaux… Des interventions techniques avec le savoir-faire d\'experts.',
      image: images.bathroom,
    },
    {
      icon: Building2,
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
    <section id="services" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span variants={fadeUp} custom={0} className="text-accent font-semibold text-sm tracking-widest uppercase font-body">
            Nos Services
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Le savoir-faire<br />
            <span className="text-primary">KleanZ.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}