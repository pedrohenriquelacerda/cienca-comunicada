import { Database, Wrench, Globe, Archive, MessagesSquare, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PILLARS, type PillarData } from '../constants/platform';
import { StatusBadge } from '../components/StatusBadge';
import { SectionHeader } from '../components/SectionHeader';

const ICON_MAP: Record<PillarData['iconName'], LucideIcon> = {
  Database,
  Wrench,
  Globe,
  Archive,
  MessagesSquare,
};

const COLOR_MAP: Record<PillarData['colorKey'], { icon: string; bg: string }> = {
  purple: { icon: 'text-cc-purple', bg: 'bg-cc-purple/10' },
  pink: { icon: 'text-cc-pink', bg: 'bg-cc-pink/10' },
  teal: { icon: 'text-cc-teal', bg: 'bg-cc-teal/10' },
  dark: { icon: 'text-[#331B74]', bg: 'bg-[#331B74]/10' },
  grape: { icon: 'text-[#5B4CD9]', bg: 'bg-[#5B4CD9]/10' },
};

const Infraestrutura = () => (
  <div className="max-w-7xl mx-auto pb-12">
    <header className="mb-10">
      <SectionHeader
        eyebrow="Serviços Estruturantes"
        title="Infraestruturas Transversais"
        eyebrowColor="teal"
      />
      <p className="text-slate-500 mt-2">
        Serviços que apoiam todas as camadas do ecossistema.
      </p>
    </header>

    <section aria-label="Pilares de Infraestrutura">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {PILLARS.map((pillar, i) => {
          const Icon = ICON_MAP[pillar.iconName];
          const colors = COLOR_MAP[pillar.colorKey];
          return (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4 group cursor-pointer h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.icon} flex items-center justify-center shrink-0`}>
                <Icon size={28} />
              </div>

              <div className="flex-1">
                <h3 className={`text-base font-bold text-slate-800 group-hover:${colors.icon} transition-colors mb-1`}>
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium">{pillar.desc}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <StatusBadge status={pillar.status} />
                <ArrowUpRight
                  size={18}
                  className={`text-slate-300 group-hover:${colors.icon} transition-colors`}
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  </div>
);

export default Infraestrutura;
