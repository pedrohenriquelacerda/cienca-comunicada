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
  BookOpen, UserCheck, Play, LineChart,
};

const MODULE_COLOR_MAP: Record<ModuloData['colorKey'], { bg: string; text: string; border: string }> = {
  purple: { bg: 'bg-cc-purple', text: 'text-cc-purple', border: 'border-cc-purple' },
  pink:   { bg: 'bg-cc-pink',   text: 'text-cc-pink',   border: 'border-cc-pink' },
  teal:   { bg: 'bg-cc-teal',   text: 'text-cc-teal',   border: 'border-cc-teal' },
};

const LandingPage = () => (
  <>
    {/* ── HERO — Dark Editorial ─────────────────────────────────── */}
    <section className="relative overflow-hidden bg-cc-ink min-h-[88vh] flex items-center py-20">
      {/* Atmospheric depth */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cc-purple/50 rounded-full blur-[140px] -translate-y-48 translate-x-48 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cc-teal/10 rounded-full blur-[120px] translate-y-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Eixos temáticos */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Eixos temáticos"
          className="flex flex-wrap gap-2 mb-12"
        >
          {TOPIC_TAGS.map((tag) => (
            <li key={tag}>
              <span className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-white/20 text-white/55 bg-white/5">
                {tag}
              </span>
            </li>
          ))}
        </motion.ul>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Headline + CTAs */}
          <div className="lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-7xl md:text-8xl font-black text-white leading-none tracking-tight mb-4"
            >
              Ciência<br />
              <span className="italic font-light text-cc-pink">Comunicada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs font-bold tracking-[0.2em] uppercase text-cc-teal mb-6"
            >
              Ecossistema Criativo de Comunicação da Ciência
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl"
            >
              Uma plataforma para capacitar, visibilizar e conectar{' '}
              <strong className="text-white font-semibold">mulheres cientistas</strong> no Brasil —
              transformando ciência em encontro e ecossistema em transformação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/app"
                className="px-8 py-4 bg-cc-pink text-white rounded-full font-bold text-base hover:bg-cc-pink/90 hover:scale-105 transition-all shadow-2xl shadow-cc-pink/25 flex items-center justify-center gap-2"
              >
                Acessar a Plataforma <ArrowRight size={18} />
              </Link>
              <a
                href="#sobre"
                className="px-8 py-4 text-white/75 border border-white/20 rounded-full font-medium text-base hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Conheça o Projeto
              </a>
            </motion.div>
          </div>

          {/* Manifesto / Taglines */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            aria-label="Propósito da plataforma"
            className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-12"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-6">
              Manifesto
            </p>
            <ul className="space-y-6">
              {TAGLINES.map(({ prefix, emphasis }) => (
                <li key={emphasis}>
                  <span className="font-display text-2xl md:text-[1.65rem] font-light text-white/40 leading-tight">
                    {prefix}
                  </span>
                  <strong className="font-display block text-2xl md:text-[1.65rem] font-black text-white leading-tight">
                    {emphasis}.
                  </strong>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 pt-6 border-t border-white/10"
        >
          <ul aria-label="Valores da plataforma" className="flex flex-wrap gap-x-8 gap-y-2">
            {VALUES.map((value, i) => (
              <li key={value} className="flex items-center gap-3 text-white/30 text-sm font-medium">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden />}
                {value}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* ── SOBRE O PROJETO ───────────────────────────────────────── */}
    <section id="sobre" className="py-24 bg-cc-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-gradient-to-br from-cc-purple to-cc-pink p-8 text-white shadow-2xl shadow-cc-purple/20">
              <p className="text-cc-lavender/80 text-xs font-bold tracking-widest uppercase mb-6">
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
                        <p className="text-xs text-cc-lavender/80 mt-0.5">{step.tool}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-widest text-cc-teal uppercase mb-3">Sobre o Projeto</p>
            <h2 className="font-display text-4xl font-black text-cc-ink mb-6 leading-tight">
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

    {/* ── TRILHAS ───────────────────────────────────────────────── */}
    <section id="modulos" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-cc-pink uppercase mb-3">
            Ecologia Sociotécnica da Comunicação da Ciência
          </p>
          <h2 className="font-display text-4xl font-black text-cc-ink">Trilhas de Aprendizagem</h2>
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
                whileHover={{ y: -6 }}
                className="bg-cc-cream border border-slate-200/70 rounded-3xl p-8 hover:shadow-xl hover:shadow-cc-purple/5 transition-all"
              >
                <div className={`w-11 h-11 rounded-2xl ${colors.bg} text-white flex items-center justify-center mb-6`}>
                  <BookOpen size={20} />
                </div>
                <h3 className={`font-display text-xl font-black mb-3 ${colors.text}`}>{mod.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{mod.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate-400 border-t border-slate-200/60 pt-4">
                  <span><strong className="text-slate-600">{mod.moduleCount}</strong> módulos</span>
                  <span><strong className="text-slate-600">{mod.students}</strong> alunas</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cc-purple text-white rounded-full font-bold hover:bg-cc-ink transition-colors shadow-lg shadow-cc-purple/20"
          >
            Entrar na Plataforma <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default LandingPage;
