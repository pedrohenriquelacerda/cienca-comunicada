import { Users, Network, FileText, Building2, ChevronRight, Activity, BookOpen, Presentation, Radio, UserCheck, Play, LineChart, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { MODULOS, EXPERIENCE_STEPS, type ModuloData, type ExperienceStep } from '../constants/platform';

const MODULE_ICON_MAP: Record<ModuloData['iconName'], LucideIcon> = { Radio, Presentation, BookOpen };
const STEP_ICON_MAP: Record<ExperienceStep['iconName'], LucideIcon> = { BookOpen, UserCheck, Play, LineChart };

const MODULE_THEME: Record<ModuloData['colorKey'], { bg: string; text: string }> = {
  purple: { bg: 'bg-cc-purple', text: 'text-cc-purple' },
  pink: { bg: 'bg-cc-pink', text: 'text-cc-pink' },
  teal: { bg: 'bg-cc-teal', text: 'text-cc-teal' },
};

const metrics = [
  { label: 'Cientistas Ativas', value: '1.240', icon: Users, color: 'text-cc-purple', bg: 'bg-cc-purple/10' },
  { label: 'Hubs Conectados', value: '6', icon: Network, color: 'text-cc-teal', bg: 'bg-cc-teal/10' },
  { label: 'Produções Publicadas', value: '347', icon: FileText, color: 'text-cc-pink', bg: 'bg-cc-pink/10' },
  { label: 'IFEs Parceiras', value: '18', icon: Building2, color: 'text-cc-purple', bg: 'bg-cc-purple/10' },
] as const;

const feed = [
  { action: 'Maria Aparecida concluiu o módulo de Jornalismo Científico.', time: 'Há 10 minutos' },
  { action: 'Novo artigo publicado pelo hub Cientistas Negras.', time: 'Há 45 minutos' },
  { action: 'IFRS ingressou como parceira institucional.', time: 'Há 2 horas' },
  { action: 'Podcast "As Cientistas" enviou um novo episódio.', time: 'Há 3 horas' },
  { action: 'Juliana conectou-se ao hub Mulheres na Tecnologia.', time: 'Há 5 horas' },
];

const Dashboard = () => (
  <div className="max-w-7xl mx-auto pb-12">

    {/* HEADER */}
    <header className="mb-8 p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
      <h2 className="font-display text-3xl font-black text-cc-purple mb-1">Olá, Maria!</h2>
      <p className="text-slate-500">Acompanhe seu progresso e o ecossistema da Ciência Comunicada.</p>
    </header>

    {/* MÉTRICAS */}
    <section aria-label="Métricas do Ecossistema" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((m, i) => {
        const Icon = m.icon;
        return (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4"
          >
            <div className={`p-4 rounded-2xl ${m.bg} ${m.color}`}>
              <Icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{m.label}</p>
              <p className="text-2xl font-bold text-slate-800">{m.value}</p>
            </div>
          </motion.div>
        );
      })}
    </section>

    {/* COMO FUNCIONA — 4 PASSOS */}
    <section aria-label="Como funciona a plataforma" className="mb-8">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Como funciona</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {EXPERIENCE_STEPS.map((step, i) => {
          const Icon = STEP_ICON_MAP[step.iconName];
          return (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-cc-purple text-white flex items-center justify-center font-black text-xs shrink-0">
                {i + 1}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon size={14} className="text-cc-pink shrink-0" />
                  <p className="text-xs font-bold text-slate-700 truncate">{step.action}</p>
                </div>
                <p className="text-xs text-slate-400 leading-tight line-clamp-2">{step.tool}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* MÓDULOS EM DESTAQUE */}
      <section aria-label="Módulos em Destaque" className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Módulos em Destaque</h3>
          <button className="text-sm font-medium text-cc-pink hover:text-cc-purple transition-colors">
            Ver todos
          </button>
        </div>
        <div className="grid gap-4">
          {MODULOS.map((mod) => {
            const Icon = MODULE_ICON_MAP[mod.iconName];
            const theme = MODULE_THEME[mod.colorKey];
            return (
              <div
                key={mod.id}
                className="group bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl text-white ${theme.bg}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-cc-purple transition-colors">
                      {mod.title}
                    </h4>
                    <p className="text-sm text-slate-500">{mod.students} alunas ativas</p>
                  </div>
                </div>
                <button
                  aria-label={`Acessar ${mod.title}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-cc-purple group-hover:text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ATIVIDADE RECENTE */}
      <section aria-label="Atividade Recente" className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="text-cc-teal" size={24} />
          <h3 className="text-lg font-bold text-slate-800">Atividade Recente</h3>
        </div>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {feed.map((f, i) => (
            <div key={i} className="relative flex items-start gap-4">
              <div className="w-5 h-5 rounded-full bg-white border-4 border-cc-lavender shadow-sm shrink-0 mt-1 relative z-10" />
              <div>
                <p className="text-sm text-slate-700 font-medium">{f.action}</p>
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
