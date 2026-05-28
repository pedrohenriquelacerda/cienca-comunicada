import { BookOpen, Presentation, Radio, UserCheck, Play, LineChart, ChevronRight, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  MODULOS,
  EXPERIENCE_STEPS,
  CENTRAL_CONCEPT,
  CENTRAL_CONCEPT_TAGS,
  type ModuloData,
  type ExperienceStep,
} from '../constants/platform';

const MODULE_ICON_MAP: Record<ModuloData['iconName'], LucideIcon> = {
  Radio,
  Presentation,
  BookOpen,
};

const STEP_ICON_MAP: Record<ExperienceStep['iconName'], LucideIcon> = {
  BookOpen,
  UserCheck,
  Play,
  LineChart,
};

const MODULE_COLOR_MAP: Record<ModuloData['colorKey'], { bg: string; text: string; border: string }> = {
  purple: { bg: 'bg-cc-purple', text: 'text-cc-purple', border: 'border-cc-purple' },
  pink: { bg: 'bg-cc-pink', text: 'text-cc-pink', border: 'border-cc-pink' },
  teal: { bg: 'bg-cc-teal', text: 'text-cc-teal', border: 'border-cc-teal' },
};

const Modulos = () => (
  <div className="max-w-7xl mx-auto pb-12 space-y-12">

    {/* CABEÇALHO DE PÁGINA */}
    <header>
      <p className="text-xs font-bold tracking-widest uppercase text-cc-teal mb-2">
        Conteúdo Dinâmico e API de Integração de Hubs
      </p>
      <h2 className="text-3xl font-bold text-cc-purple">Módulos da Plataforma</h2>
    </header>

    {/* BANNER: ECOLOGIA SOCIOTÉCNICA */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cc-purple to-cc-pink text-white p-10 md:p-12 text-center shadow-lg"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-cc-lavender">
          {CENTRAL_CONCEPT}
        </h3>
        <ul
          aria-label="Eixos do ecossistema"
          className="flex flex-wrap justify-center gap-3 text-sm md:text-base font-medium opacity-90"
        >
          {CENTRAL_CONCEPT_TAGS.map((tag) => (
            <li key={tag}>
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

    {/* A EXPERIÊNCIA CENTRAL */}
    <section aria-labelledby="experiencia-heading">
      <h3 id="experiencia-heading" className="text-xl font-bold text-cc-purple mb-6">
        A Experiência Central da Plataforma
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {EXPERIENCE_STEPS.map((step, i) => {
          const Icon = STEP_ICON_MAP[step.iconName];
          return (
            <div key={step.num} className="relative flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-cc-purple text-white flex items-center justify-center font-black text-sm mb-3 shrink-0">
                {step.num}
              </div>
              <div className="w-10 h-10 rounded-xl bg-cc-purple/5 text-cc-purple flex items-center justify-center mb-3">
                <Icon size={22} />
              </div>
              <h4 className="font-bold text-slate-800 mb-1 text-sm">{step.action}</h4>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider leading-relaxed">
                {step.tool}
              </p>
              {i < EXPERIENCE_STEPS.length - 1 && (
                <ChevronRight
                  size={18}
                  className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-slate-300 z-10"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>

    {/* TRILHAS DE APRENDIZAGEM */}
    <section aria-labelledby="trilhas-heading">
      <h3 id="trilhas-heading" className="text-xl font-bold text-cc-purple mb-6">
        Trilhas de Aprendizagem
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {MODULOS.map((mod, i) => {
          const Icon = MODULE_ICON_MAP[mod.iconName];
          const colors = MODULE_COLOR_MAP[mod.colorKey];
          return (
            <motion.article
              key={mod.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group"
            >
              <div className={`h-2 ${colors.bg}`} />
              <div className="p-6 flex-1 flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colors.bg} text-white`}>
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{mod.title}</h4>
                <p className="text-slate-600 text-sm mb-6 flex-1">{mod.description}</p>

                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 mb-6">
                  <div className="text-center">
                    <p className="text-xs text-slate-400 font-medium">Módulos</p>
                    <p className="font-bold text-slate-700">{mod.moduleCount}</p>
                  </div>
                  <div className="text-center border-l border-slate-100">
                    <p className="text-xs text-slate-400 font-medium">Alunas</p>
                    <p className="font-bold text-slate-700">{mod.students}</p>
                  </div>
                  <div className="text-center border-l border-slate-100">
                    <p className="text-xs text-slate-400 font-medium">Certificados</p>
                    <p className="font-bold text-slate-700">{mod.certs}</p>
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-bold border-2 transition-colors ${colors.text} ${colors.border} hover:${colors.bg} hover:text-white`}
                >
                  Acessar Trilha
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  </div>
);

export default Modulos;
