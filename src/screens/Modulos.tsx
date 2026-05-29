import { BookOpen, Presentation, Radio, UserCheck, Play, LineChart, ArrowRight, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  MODULOS,
  EXPERIENCE_STEPS,
  CENTRAL_CONCEPT,
  CENTRAL_CONCEPT_TAGS,
  type ModuloData,
  type ExperienceStep,
} from '../constants/platform';

const MODULE_ICON_MAP: Record<ModuloData['iconName'], LucideIcon> = { Radio, Presentation, BookOpen };
const STEP_ICON_MAP: Record<ExperienceStep['iconName'], LucideIcon>  = { BookOpen, UserCheck, Play, LineChart };

const MODULE_COLOR_MAP: Record<ModuloData['colorKey'], { stripe: string; iconBg: string; text: string }> = {
  purple: { stripe: 'bg-cc-purple', iconBg: 'bg-cc-purple', text: 'text-cc-purple' },
  pink:   { stripe: 'bg-cc-pink',   iconBg: 'bg-cc-pink',   text: 'text-cc-pink'   },
  teal:   { stripe: 'bg-cc-teal',   iconBg: 'bg-cc-teal',   text: 'text-cc-teal'   },
};

const Modulos = () => (
  <div className="max-w-6xl mx-auto pb-8 space-y-8 sm:space-y-12">

    {/* CABEÇALHO */}
    <header>
      <p className="text-xs font-bold tracking-widest uppercase text-cc-teal mb-2">Aprendizagem</p>
      <h2 className="font-display text-2xl sm:text-3xl font-black text-cc-ink">Módulos da Plataforma</h2>
    </header>

    {/* CONCEITO CENTRAL — editorial, sem gradiente */}
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 md:p-10"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-5 sm:gap-6">
        <div className="flex-1">
          <p className="text-xs font-bold tracking-widest uppercase text-cc-pink mb-2 sm:mb-3">Conceito Central</p>
          <h3 className="font-display text-xl sm:text-2xl font-black text-cc-ink leading-tight">
            {CENTRAL_CONCEPT}
          </h3>
        </div>
        <ul className="flex flex-wrap gap-2">
          {CENTRAL_CONCEPT_TAGS.map((tag) => (
            <li key={tag}>
              <span className="px-3 py-1.5 rounded-lg bg-cc-lavender text-cc-purple text-xs font-semibold">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

    {/* A EXPERIÊNCIA CENTRAL — 1 col mobile, 2 cols sm, 4 cols md */}
    <section aria-labelledby="experiencia-heading">
      <h3
        id="experiencia-heading"
        className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 sm:mb-6"
      >
        A Experiência Central
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {EXPERIENCE_STEPS.map((step, i) => {
          const Icon = STEP_ICON_MAP[step.iconName];
          return (
            <div
              key={step.num}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-100 flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-md bg-cc-purple text-white flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                    <Icon size={13} />
                  </div>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm leading-snug mb-1">{step.action}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.tool}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* TRILHAS DE APRENDIZAGEM — 1 col mobile, 2 cols sm, 3 cols lg */}
    <section aria-labelledby="trilhas-heading">
      <h3
        id="trilhas-heading"
        className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 sm:mb-6"
      >
        Trilhas de Aprendizagem
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {MODULOS.map((mod, i) => {
          const Icon = MODULE_ICON_MAP[mod.iconName];
          const colors = MODULE_COLOR_MAP[mod.colorKey];
          return (
            <motion.article
              key={mod.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all overflow-hidden flex flex-col"
            >
              <div className={`h-1 ${colors.stripe}`} />

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className={`w-10 sm:w-11 h-10 sm:h-11 rounded-xl ${colors.iconBg} text-white flex items-center justify-center mb-4 sm:mb-5`}>
                  <Icon size={20} />
                </div>
                <h4 className="font-display text-base sm:text-lg font-black text-slate-800 mb-2 leading-snug">
                  {mod.title}
                </h4>
                <p className="text-slate-500 text-sm mb-5 sm:mb-6 flex-1 leading-relaxed">{mod.description}</p>

                <div className="grid grid-cols-3 border-t border-slate-100 pt-4 mb-5">
                  <div className="text-center">
                    <p className="text-[10px] text-slate-400 font-medium mb-0.5">Módulos</p>
                    <p className="font-bold text-slate-700 text-sm">{mod.moduleCount}</p>
                  </div>
                  <div className="text-center border-l border-slate-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-0.5">Alunas</p>
                    <p className="font-bold text-slate-700 text-sm">{mod.students}</p>
                  </div>
                  <div className="text-center border-l border-slate-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-0.5">Certificados</p>
                    <p className="font-bold text-slate-700 text-sm">{mod.certs}</p>
                  </div>
                </div>

                <button
                  className={`w-full py-2.5 rounded-xl font-bold text-sm border-2 transition-colors ${colors.text} border-current hover:bg-current hover:text-white`}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    Acessar Trilha <ArrowRight size={14} />
                  </span>
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
