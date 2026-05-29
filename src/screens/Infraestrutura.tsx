import { Database, Wrench, Globe, Archive, MessagesSquare, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PILLARS, type PillarData } from '../constants/platform';
import { StatusBadge } from '../components/StatusBadge';

const ICON_MAP: Record<PillarData['iconName'], LucideIcon> = {
  Database, Wrench, Globe, Archive, MessagesSquare,
};

const COLOR_MAP: Record<PillarData['colorKey'], { icon: string; bg: string; stripe: string }> = {
  purple: { icon: 'text-cc-purple', bg: 'bg-cc-purple/8',  stripe: 'bg-cc-purple' },
  pink:   { icon: 'text-cc-pink',   bg: 'bg-cc-pink/8',    stripe: 'bg-cc-pink'   },
  teal:   { icon: 'text-cc-teal',   bg: 'bg-cc-teal/8',    stripe: 'bg-cc-teal'   },
  dark:   { icon: 'text-cc-ink',    bg: 'bg-cc-ink/6',     stripe: 'bg-cc-ink'    },
  grape:  { icon: 'text-[#5B4CD9]', bg: 'bg-[#5B4CD9]/8',  stripe: 'bg-[#5B4CD9]' },
};

const Infraestrutura = () => (
  <div className="max-w-6xl mx-auto pb-12">

    <header className="mb-10">
      <p className="text-xs font-bold tracking-widest uppercase text-cc-teal mb-2">
        Serviços Estruturantes
      </p>
      <h2 className="font-display text-2xl sm:text-3xl font-black text-cc-ink">
        Infraestruturas Transversais
      </h2>
      <p className="text-slate-400 text-sm mt-2">
        Serviços que apoiam todas as camadas do ecossistema.
      </p>
    </header>

    <section aria-label="Pilares de Infraestrutura">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {PILLARS.map((pillar, i) => {
          const Icon = ICON_MAP[pillar.iconName];
          const colors = COLOR_MAP[pillar.colorKey];
          return (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Thin color stripe */}
              <div className={`h-0.5 ${colors.stripe}`} />

              <div className="p-5 flex flex-col gap-4 flex-1">
                <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.icon} flex items-center justify-center`}>
                  <Icon size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-800 mb-1">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="flex items-center justify-between">
                  <StatusBadge status={pillar.status} />
                  <ArrowUpRight
                    size={14}
                    className={`text-slate-300 group-hover:${colors.icon} transition-colors`}
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  </div>
);

export default Infraestrutura;
