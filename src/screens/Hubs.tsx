import { useState } from 'react';
import { Users, Palette, Accessibility, Rainbow, MapPin, Building2, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { HUBS, HUB_FILTERS, type HubData } from '../constants/platform';
import { StatusBadge } from '../components/StatusBadge';

const ICON_MAP: Record<HubData['iconName'], LucideIcon> = {
  Users, Palette, Accessibility, Rainbow, MapPin, Building2,
};

const COLOR_MAP: Record<HubData['colorKey'], { stripe: string; text: string; iconBg: string; iconText: string }> = {
  purple: { stripe: 'bg-cc-purple',  text: 'text-cc-purple',  iconBg: 'bg-cc-purple/10',  iconText: 'text-cc-purple'  },
  pink:   { stripe: 'bg-cc-pink',    text: 'text-cc-pink',    iconBg: 'bg-cc-pink/10',    iconText: 'text-cc-pink'    },
  teal:   { stripe: 'bg-cc-teal',    text: 'text-cc-teal',    iconBg: 'bg-cc-teal/10',    iconText: 'text-cc-teal'    },
  indigo: { stripe: 'bg-[#5B4CD9]',  text: 'text-[#5B4CD9]',  iconBg: 'bg-[#5B4CD9]/10',  iconText: 'text-[#5B4CD9]'  },
  amber:  { stripe: 'bg-amber-400',  text: 'text-amber-600',  iconBg: 'bg-amber-50',      iconText: 'text-amber-500'  },
  dark:   { stripe: 'bg-cc-ink',     text: 'text-cc-ink',     iconBg: 'bg-cc-ink/10',     iconText: 'text-cc-ink'     },
};

const Hubs = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const filtered = HUBS.filter((h) => activeFilter === 'Todos' || h.type === activeFilter);

  return (
    <div className="max-w-6xl mx-auto pb-8 space-y-6 sm:space-y-8">

      {/* CABEÇALHO */}
      <header>
        <p className="text-xs font-bold tracking-widest uppercase text-cc-teal mb-2">
          Comunidades Temáticas
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-cc-ink">Hubs da Plataforma</h2>
        <p className="text-slate-400 text-sm mt-2">
          Grupos de trabalho e comunidades integradas à rede da Ciência Comunicada.
        </p>
      </header>

      {/* FILTROS — scroll horizontal no mobile */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        aria-label="Filtrar hubs por categoria"
      >
        {HUB_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            aria-pressed={activeFilter === f}
            className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
              activeFilter === f
                ? 'bg-cc-purple text-white'
                : 'bg-white border border-slate-100 text-slate-500 hover:border-slate-200 hover:text-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID DE HUBS — 1 col mobile, 2 cols sm, 3 cols xl */}
      <section aria-label="Comunidades e Hubs">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((hub, i) => {
            const Icon = ICON_MAP[hub.iconName];
            const colors = COLOR_MAP[hub.colorKey];
            return (
              <motion.article
                key={hub.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all overflow-hidden flex flex-col cursor-pointer"
              >
                <div className={`h-1 ${colors.stripe}`} />

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className={`w-10 sm:w-11 h-10 sm:h-11 rounded-xl ${colors.iconBg} ${colors.iconText} flex items-center justify-center`}>
                      <Icon size={20} />
                    </div>
                    <div className="text-right">
                      <span className={`text-xl sm:text-2xl font-black ${colors.text}`}>{hub.count}</span>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">
                        {hub.suffix ?? 'Cientistas'}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-black text-slate-800 mb-2">{hub.name}</h3>
                  <p className="text-slate-500 text-sm flex-1 leading-relaxed mb-4 sm:mb-5">{hub.desc}</p>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-100">
                    <StatusBadge status="Ativo" />
                    <span className={`text-xs font-bold ${colors.text} group-hover:underline`}>
                      Explorar Hub →
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Hubs;
