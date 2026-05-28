import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Play, LineChart, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  TAGLINES,
  TOPIC_TAGS,
  VALUES,
  EXPERIENCE_STEPS,
  MODULOS,
  type ExperienceStep,
  type ModuloData,
} from '../constants/platform';
import { type LucideIcon } from 'lucide-react';

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

const LandingPage = () => (
  <>
    {/* HERO */}
    <section className="relative overflow-hidden bg-white pt-20 pb-16">
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cc-pink/10 rounded-full blur-3xl" />
        <div className="absolute top-32 -left-24 w-72 h-72 bg-cc-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* PILLS TEMÁTICAS */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Eixos temáticos"
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {TOPIC_TAGS.map((tag, i) => (
            <li key={tag}>
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${
                i === 0 ? 'bg-cc-purple/10 text-cc-purple border-cc-purple/20' :
                i === 1 ? 'bg-cc-pink/10 text-cc-pink border-cc-pink/20' :
                i === 2 ? 'bg-cc-teal/10 text-cc-teal border-cc-teal/20' :
                'bg-slate-100 text-slate-600 border-slate-200'
              }`}>
                {tag}
              </span>
            </li>
          ))}
        </motion.ul>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXTO PRINCIPAL */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-extrabold text-cc-purple tracking-tight mb-4"
            >
              Ciência Comunicada
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-sm font-bold tracking-widest uppercase text-cc-teal mb-6"
            >
              Ecossistema Criativo de Comunicação da Ciência
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              Uma plataforma voltada para capacitar, visibilizar e conectar{' '}
              <strong>mulheres cientistas</strong> no Brasil — transformando ciência em encontro
              e ecossistema em transformação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/app"
                className="px-8 py-4 bg-cc-purple text-white rounded-full font-bold text-lg hover:bg-cc-purple/90 hover:scale-105 transition-all shadow-xl shadow-cc-purple/20 flex items-center justify-center gap-2"
              >
                Acessar a Plataforma <ArrowRight size={20} />
              </Link>
              <a
                href="#sobre"
                className="px-8 py-4 bg-white text-cc-purple border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Conheça o Projeto
              </a>
            </motion.div>
          </div>

          {/* TAGLINES */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            aria-label="Propósito da plataforma"
            className="bg-gradient-to-br from-cc-purple/5 to-cc-pink/5 border border-cc-purple/10 rounded-3xl p-8"
          >
            <ul className="space-y-5">
              {TAGLINES.map(({ prefix, emphasis }) => (
                <li key={emphasis} className="text-2xl md:text-3xl font-light text-slate-700 leading-tight">
                  {prefix}<strong className="font-extrabold text-cc-purple">{emphasis}</strong>.
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>

        {/* VALORES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-slate-100"
        >
          <ul
            aria-label="Valores da plataforma"
            className="flex flex-wrap justify-center gap-x-8 gap-y-2"
          >
            {VALUES.map((value, i) => (
              <li key={value} className="flex items-center gap-2 text-slate-500 font-medium">
                {i > 0 && <span className="text-slate-300" aria-hidden>•</span>}
                {value}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* SOBRE O PROJETO */}
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* CARD VISUAL — EXPERIÊNCIA CENTRAL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-gradient-to-br from-cc-purple to-cc-pink p-8 text-white shadow-2xl">
              <p className="text-cc-lavender text-xs font-bold tracking-widest uppercase mb-6 opacity-80">
                A Experiência Central
              </p>
              <ul className="space-y-5">
                {EXPERIENCE_STEPS.map((step) => {
                  const Icon = STEP_ICON_MAP[step.iconName];
                  return (
                    <li key={step.num} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white">{step.action}</p>
                        <p className="text-xs text-cc-lavender opacity-80 mt-0.5">{step.tool}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-widest text-cc-teal uppercase mb-3">Sobre o Projeto</p>
            <h2 className="text-4xl font-extrabold text-cc-purple mb-6">
              Democratizando a ciência com voz e identidade.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A <strong>Ciência Comunicada</strong> atua na interseção do jornalismo, relações
              públicas e formação acadêmica para dar destaque à produção de cientistas mulheres
              em diversos territórios e identidades.
            </p>
            <p className="text-slate-500 leading-relaxed">
              O ecossistema integra ensino, pesquisa e extensão por meio de práticas relacionais
              únicas, conectando hubs temáticos e infraestrutura aberta para novas comunidades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* TRILHAS — VISÃO GERAL */}
    <section id="modulos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-cc-pink uppercase mb-3">
            Ecologia Sociotécnica da Comunicação da Ciência
          </p>
          <h2 className="text-4xl font-extrabold text-cc-purple">Trilhas de Aprendizagem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MODULOS.map((mod, i) => {
            const colors = MODULE_COLOR_MAP[mod.colorKey];
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} text-white flex items-center justify-center mb-6`}>
                  <BookOpen size={24} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${colors.text}`}>{mod.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{mod.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span><strong className="text-slate-700">{mod.moduleCount}</strong> módulos</span>
                  <span><strong className="text-slate-700">{mod.students}</strong> alunas</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cc-purple text-white rounded-full font-bold hover:bg-cc-purple/90 transition-all shadow-lg shadow-cc-purple/20"
          >
            Entrar na Plataforma <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default LandingPage;
