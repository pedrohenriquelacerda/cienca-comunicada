import { Users, Network, FileText, Building2, ChevronRight, Activity, BookOpen, Presentation, Radio, UserCheck, Play, LineChart, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { MODULOS, EXPERIENCE_STEPS, type ModuloData, type ExperienceStep } from '../constants/platform';

const MODULE_ICON_MAP: Record<ModuloData['iconName'], LucideIcon> = { Radio, Presentation, BookOpen };
const STEP_ICON_MAP: Record<ExperienceStep['iconName'], LucideIcon>  = { BookOpen, UserCheck, Play, LineChart };

const MODULE_THEME: Record<ModuloData['colorKey'], { bg: string }> = {
  purple: { bg: 'bg-cc-purple' },
  pink:   { bg: 'bg-cc-pink'   },
  teal:   { bg: 'bg-cc-teal'   },
};

const metrics = [
  { label: 'Cientistas Ativas',    value: '1.240', icon: Users,     color: 'text-cc-purple', bg: 'bg-cc-purple/10' },
  { label: 'Hubs Conectados',      value: '6',     icon: Network,   color: 'text-cc-teal',   bg: 'bg-cc-teal/10'   },
  { label: 'Produções Publicadas', value: '347',   icon: FileText,  color: 'text-cc-pink',   bg: 'bg-cc-pink/10'   },
  { label: 'IFEs Parceiras',       value: '18',    icon: Building2, color: 'text-cc-purple', bg: 'bg-cc-purple/10' },
] as const;

const feed = [
  { action: 'Maria Aparecida concluiu o módulo de Jornalismo Científico.', time: 'Há 10 min' },
  { action: 'Novo artigo publicado pelo hub Cientistas Negras.',            time: 'Há 45 min' },
  { action: 'IFRS ingressou como parceira institucional.',                  time: 'Há 2 h'    },
  { action: 'Podcast "As Cientistas" enviou um novo episódio.',             time: 'Há 3 h'    },
  { action: 'Juliana conectou-se ao hub Mulheres na Tecnologia.',           time: 'Há 5 h'    },
];

const Dashboard = () => (
  <div className="max-w-6xl mx-auto pb-8">

    {/* HEADER */}
    <header className="mb-8 sm:mb-10">
      <h2 className="font-display text-2xl sm:text-3xl font-black text-cc-ink">Olá, Maria!</h2>
      <p className="text-slate-400 mt-1 text-sm">
        Acompanhe seu progresso e o ecossistema da Ciência Comunicada.
      </p>
    </header>

    {/* MÉTRICAS — 2 colunas mobile, 4 no desktop */}
    <section aria-label="Métricas do Ecossistema" className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {metrics.map((m, i) => {
        const Icon = m.icon;
        return (
          <div
            key={i}
            className="bg-white border border-slate-100 rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-3.5"
          >
            <div className={`w-8 sm:w-9 h-8 sm:h-9 rounded-lg ${m.bg} ${m.color} flex items-center justify-center shrink-0`}>
              <Icon size={16} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-medium text-slate-400 mb-0.5 leading-tight">{m.label}</p>
              <p className="text-lg sm:text-xl font-bold text-slate-800">{m.value}</p>
            </div>
          </div>
        );
      })}
    </section>

    {/* COMO FUNCIONA — 1 col mobile, 2 no sm, 4 no md */}
    <section aria-label="Como funciona a plataforma" className="mb-6 sm:mb-8">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">Como funciona</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {EXPERIENCE_STEPS.map((step, i) => {
          const Icon = STEP_ICON_MAP[step.iconName];
          return (
            <div
              key={step.num}
              className="bg-white rounded-xl p-4 border border-slate-100 flex items-start gap-3"
            >
              <span className="w-5 h-5 rounded-md bg-cc-purple text-white flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon size={13} className="text-slate-300 shrink-0" />
                  <p className="text-xs font-bold text-slate-700 leading-snug">{step.action}</p>
                </div>
                <p className="text-xs text-slate-400 leading-snug">{step.tool}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">

      {/* MÓDULOS EM DESTAQUE */}
      <section aria-label="Módulos em Destaque" className="lg:col-span-2">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Módulos em Destaque</h3>
          <button className="text-xs font-bold text-cc-pink hover:text-cc-purple transition-colors">
            Ver todos
          </button>
        </div>
        <div className="space-y-2">
          {MODULOS.map((mod) => {
            const Icon = MODULE_ICON_MAP[mod.iconName];
            const theme = MODULE_THEME[mod.colorKey];
            return (
              <motion.div
                key={mod.id}
                whileHover={{ x: 2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="group flex items-center gap-3 sm:gap-4 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer"
              >
                <div className={`p-2 sm:p-2.5 rounded-lg text-white ${theme.bg} shrink-0`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-800 text-sm group-hover:text-cc-purple transition-colors truncate">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{mod.students} alunas ativas</p>
                </div>
                <ChevronRight size={15} className="text-slate-300 group-hover:text-cc-purple transition-colors shrink-0" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ATIVIDADE RECENTE */}
      <section aria-label="Atividade Recente" className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100">
        <div className="flex items-center gap-2 mb-5 sm:mb-6">
          <Activity size={15} className="text-cc-teal" />
          <h3 className="text-sm font-bold text-slate-800">Atividade Recente</h3>
        </div>
        <div className="space-y-4 sm:space-y-5">
          {feed.map((f, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cc-teal/50 mt-1.5 shrink-0" />
              <div>
                <p className="text-xs text-slate-600 leading-relaxed">{f.action}</p>
                <p className="text-xs text-slate-400 mt-1">{f.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Dashboard;
