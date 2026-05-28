import { useState } from 'react';
import { Filter, Users, Palette, Accessibility, Rainbow, MapPin, Building2, Database, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { HUBS, HUB_FILTERS, API_NOTE, CONTENT_DB_LABEL, type HubData } from '../constants/platform';
import { StatusBadge } from '../components/StatusBadge';

const ICON_MAP: Record<HubData['iconName'], LucideIcon> = {
  Users,
  Palette,
  Accessibility,
  Rainbow,
  MapPin,
  Building2,
};

const COLOR_MAP: Record<HubData['colorKey'], { text: string; bg: string; bgIcon: string }> = {
  purple: { text: 'text-cc-purple', bg: 'bg-cc-purple', bgIcon: 'bg-cc-purple/10' },
  pink: { text: 'text-cc-pink', bg: 'bg-cc-pink', bgIcon: 'bg-cc-pink/10' },
  teal: { text: 'text-cc-teal', bg: 'bg-cc-teal', bgIcon: 'bg-cc-teal/10' },
  indigo: { text: 'text-[#5B4CD9]', bg: 'bg-[#5B4CD9]', bgIcon: 'bg-[#5B4CD9]/10' },
  amber: { text: 'text-amber-500', bg: 'bg-amber-500', bgIcon: 'bg-amber-100' },
  dark: { text: 'text-[#331B74]', bg: 'bg-[#331B74]', bgIcon: 'bg-[#331B74]/10' },
};

const Hubs = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filtered = HUBS.filter(
    (h) => activeFilter === 'Todos' || h.type === activeFilter
  );

  return (
    <div className="max-w-7xl mx-auto pb-12 space-y-8">

      {/* CABEÇALHO DUPLO */}
      <header className="space-y-3">
        <p className="text-xs font-bold tracking-widest uppercase text-cc-teal">
          Conteúdo Dinâmico e API de Integração de Hubs
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-3xl font-black text-cc-purple">Acoplamento de Novos Hubs</h2>
          <span className="px-3 py-1 bg-cc-teal text-white text-xs font-bold rounded-full uppercase tracking-wider">
            Filtrável
          </span>
        </div>
        <p className="text-slate-500">Comunidades temáticas e grupos de trabalho integrados à rede.</p>
      </header>

      {/* INFO-STRIP: BANCO DE DADOS DE CONTEÚDO */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-cc-purple/5 border border-cc-purple/10 rounded-2xl px-6 py-4">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-cc-purple/10 flex items-center justify-center text-cc-purple">
            <Database size={20} />
          </div>
          <span className="font-semibold text-cc-purple text-sm">{CONTENT_DB_LABEL}</span>
        </div>
        <span className="hidden sm:block w-px h-5 bg-cc-purple/20 shrink-0" />
        <p className="text-slate-500 text-sm">{API_NOTE}</p>
      </div>

      {/* FILTROS */}
      <div
        className="flex items-center gap-3 overflow-x-auto pb-1"
        aria-label="Filtrar hubs por categoria"
      >
        <div className="p-2 border border-slate-200 rounded-lg text-slate-400 bg-white shadow-sm shrink-0">
          <Filter size={20} />
        </div>
        {HUB_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            aria-pressed={activeFilter === f}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeFilter === f
                ? 'bg-cc-purple text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID DE HUBS */}
      <section aria-label="Comunidades e Hubs">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((hub, i) => {
            const Icon = ICON_MAP[hub.iconName];
            const colors = COLOR_MAP[hub.colorKey];
            return (
              <motion.article
                key={hub.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group flex flex-col cursor-pointer"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} opacity-5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${colors.bgIcon} flex items-center justify-center ${colors.text}`}>
                    <Icon size={28} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`text-2xl font-black ${colors.text}`}>{hub.count}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {hub.suffix ?? 'Cientistas'}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 relative z-10">{hub.name}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1 relative z-10">{hub.desc}</p>

                <div className="flex justify-between items-center relative z-10 pt-4 border-t border-slate-100">
                  <StatusBadge status="Ativo" />
                  <span className={`font-semibold text-sm ${colors.text} group-hover:underline`}>
                    Explorar Hub →
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* BANNER INFERIOR API */}
      <div className="bg-gradient-to-r from-slate-900 to-cc-purple rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
            <Database size={32} className="text-cc-teal" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Integração via API</h3>
            <p className="text-slate-300 max-w-2xl text-sm leading-relaxed">
              {API_NOTE}. A plataforma disponibiliza endpoints GraphQL e REST para sincronização de contas e produções.
            </p>
          </div>
        </div>
        <button className="px-6 py-3 bg-cc-teal hover:bg-cc-teal/90 text-white font-bold rounded-xl whitespace-nowrap transition-colors">
          Documentação API
        </button>
      </div>
    </div>
  );
};

export default Hubs;
