import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar, Phone, MapPin, Clock, CheckCircle, XCircle, Loader2, Filter } from 'lucide-react';
import { toast } from 'sonner';

const STATUS_CONFIG = {
  pending:   { label: 'En attente',  color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  confirmed: { label: 'Confirmé',    color: 'bg-green-100  text-green-700  border-green-200'  },
  cancelled: { label: 'Annulé',      color: 'bg-red-100    text-red-700    border-red-200'    },
};

const TYPE_CONFIG = {
  visite: { label: 'Visite technique', icon: MapPin },
  appel:  { label: 'Appel découverte',  icon: Phone  },
};

export default function Admin() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState('all');

  const { data: reservations = [], isLoading } = useQuery({
    queryKey: ['reservations'],
    queryFn: () => base44.entities.Reservation.list('-date', 100),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.Reservation.update(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
      toast.success('Statut mis à jour.');
    },
  });

  const filtered = filter === 'all' ? reservations : reservations.filter(r => r.status === filter);

  const counts = {
    all: reservations.length,
    pending: reservations.filter(r => r.status === 'pending').length,
    confirmed: reservations.filter(r => r.status === 'confirmed').length,
    cancelled: reservations.filter(r => r.status === 'cancelled').length,
  };

  return (
    <div className="min-h-screen bg-secondary font-body">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 lg:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://media.base44.com/images/public/69e63cfe37163cac729de2ea/de9593a4c_WhatsAppImage2026-04-20at170302.jpeg"
            alt="KleanZ" className="h-9 w-auto rounded-md" />
          <div>
            <h1 className="font-heading font-extrabold text-xl">Back-office KleanZ</h1>
            <p className="text-primary-foreground/60 text-xs">Gestion des réservations</p>
          </div>
        </div>
        <a href="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">← Site public</a>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { key: 'all',       label: 'Total',      color: 'text-foreground' },
            { key: 'pending',   label: 'En attente', color: 'text-yellow-600' },
            { key: 'confirmed', label: 'Confirmés',  color: 'text-green-600'  },
            { key: 'cancelled', label: 'Annulés',    color: 'text-red-500'    },
          ].map(s => (
            <div key={s.key} className="bg-card rounded-2xl border border-border p-5">
              <div className={`font-heading font-extrabold text-3xl ${s.color}`}>{counts[s.key]}</div>
              <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {['all', 'pending', 'confirmed', 'cancelled'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === f ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:border-primary/40'
              }`}>
              {f === 'all' ? 'Tous' : STATUS_CONFIG[f].label}
            </button>
          ))}
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">Aucune réservation pour ce filtre.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map(r => {
              const TypeIcon = TYPE_CONFIG[r.meeting_type]?.icon || Calendar;
              const statusCfg = STATUS_CONFIG[r.status] || STATUS_CONFIG.pending;
              const dateFormatted = r.date ? format(new Date(r.date), 'EEE d MMM yyyy', { locale: fr }) : '—';
              return (
                <div key={r.id} className="bg-card border border-border rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TypeIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">{r.name}</p>
                      <p className="text-muted-foreground text-sm">{r.email} {r.phone && `· ${r.phone}`}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {dateFormatted}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {r.time_slot}</span>
                        <span>{TYPE_CONFIG[r.meeting_type]?.label}</span>
                      </div>
                      {r.message && <p className="text-xs text-muted-foreground mt-1 italic">"{r.message}"</p>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusCfg.color}`}>
                      {statusCfg.label}
                    </span>
                    {r.status !== 'confirmed' && (
                      <button onClick={() => updateMutation.mutate({ id: r.id, status: 'confirmed' })}
                        disabled={updateMutation.isPending}
                        className="p-2 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all" title="Confirmer">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    {r.status !== 'cancelled' && (
                      <button onClick={() => updateMutation.mutate({ id: r.id, status: 'cancelled' })}
                        disabled={updateMutation.isPending}
                        className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all" title="Annuler">
                        <XCircle className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}