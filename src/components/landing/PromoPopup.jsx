import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 1.5s on first visit
    const dismissed = sessionStorage.getItem('kleanz_promo_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem('kleanz_promo_dismissed', '1');
  };

  const handleCTA = () => {
    handleClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="fixed inset-0 z-[91] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full">
              {/* Top banner */}
              <div className="bg-primary px-8 py-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
                  <span className="font-heading font-extrabold text-9xl text-white">%</span>
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 font-body">
                    <Gift className="w-3.5 h-3.5" />
                    Offre de bienvenue
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl text-white leading-tight">
                    -15% sur votre<br />première prestation
                  </h2>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-6 text-center">
                <p className="text-muted-foreground font-body text-sm mb-1">
                  Profitez de <strong className="text-foreground">15 % de réduction</strong> pour découvrir la qualité KleanZ.
                </p>
                <p className="text-muted-foreground font-body text-xs mb-6">
                  Offre valable pour tout nouveau client, sur présentation de ce message lors de votre premier rendez-vous.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl py-3 px-6 mb-6">
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-1">Code promo</p>
                  <p className="font-heading font-extrabold text-2xl text-primary tracking-widest">BIENVENUE15</p>
                </div>

                <button
                  onClick={handleCTA}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 font-body"
                >
                  Obtenir mon devis gratuit <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="mt-3 text-muted-foreground text-xs font-body hover:text-foreground transition-colors"
                >
                  Non merci, je refuse cette offre
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}