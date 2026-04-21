import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } })
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Votre demande a été envoyée ! Nous vous recontactons rapidement.');
    setForm({ name: '', email: '', phone: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span variants={fadeUp} custom={0} className="text-accent font-semibold text-sm tracking-widest uppercase font-body">
              Contact
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mt-4 leading-tight">
              Demandez votre<br />
              <span className="text-primary">devis gratuit.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed mt-6 font-body max-w-md">
              Vous n'êtes pas qu'un contrat. Vous êtes une relation de confiance qui commence ici. 
              Décrivez-nous votre besoin et nous vous répondrons sous 24h.
            </motion.p>

            {/* Value reminder */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10"
            >
              <p className="text-foreground font-heading font-semibold text-sm leading-relaxed italic">
                « Vous ne réservez pas seulement un service, vous soutenez l'héritage d'une famille bâti sur le travail. »
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground font-body">01 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground font-body">contact@kleanz.fr</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground font-body">Île-de-France</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.form
              variants={fadeUp}
              custom={1}
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block font-body">Nom complet</label>
                  <Input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Jean Dupont"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block font-body">Téléphone</label>
                  <Input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="06 XX XX XX XX"
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block font-body">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="jean@exemple.fr"
                  required
                  className="h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block font-body">Décrivez votre besoin</label>
                <Textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Type d'espace, fréquence souhaitée, surface approximative…"
                  required
                  className="min-h-[140px] rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Envoyer ma Demande
                  </span>
                )}
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}