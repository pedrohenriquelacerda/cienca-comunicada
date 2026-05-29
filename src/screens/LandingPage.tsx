import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Play, LineChart, UserCheck, GraduationCap, Radio, Network, ExternalLink, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  TAGLINES,
  VALUES,
  EXPERIENCE_STEPS,
  MODULOS,
  MAIN_PILLARS,
  SOCIAL_VIDEOS,
  PLATFORM_SLOGAN,
  type ExperienceStep,
  type ModuloData,
  type MainPillar,
  type SocialVideo,
} from '../constants/platform';

const STEP_ICON_MAP: Record<ExperienceStep['iconName'], LucideIcon> = {
  BookOpen, UserCheck, Play, LineChart,
};

const MODULE_COLOR_MAP: Record<ModuloData['colorKey'], { dot: string; text: string }> = {
  purple: { dot: 'bg-cc-purple', text: 'text-cc-purple' },
  pink:   { dot: 'bg-cc-pink',   text: 'text-cc-pink'   },
  teal:   { dot: 'bg-cc-teal',   text: 'text-cc-teal'   },
};

const PILLAR_ICON_MAP: Record<MainPillar['iconName'], LucideIcon> = {
  GraduationCap, Radio, Network,
};

// ── SAIU NAS REDES — card individual ──────────────────────────────────────
const PLATFORM_CHIP: Record<SocialVideo['platform'], string> = {
  youtube:   'bg-red-50 text-red-600',
  tiktok:    'bg-slate-900 text-white',
  instagram: 'bg-pink-50 text-pink-600',
};
const PLATFORM_LABEL: Record<SocialVideo['platform'], string> = {
  youtube: 'YouTube', tiktok: 'TikTok', instagram: 'Instagram',
};

const getEmbedUrl = (v: SocialVideo) => {
  if (v.platform === 'youtube')   return `https://www.youtube.com/embed/${v.videoId}?rel=0&autoplay=1`;
  if (v.platform === 'tiktok')    return `https://www.tiktok.com/embed/v2/${v.videoId}`;
  return `https://www.instagram.com/reel/${v.videoId}/embed/`;
};

const SocialCard = ({ video }: { video: SocialVideo }) => {
  const [playing, setPlaying] = useState(false);
  const thumbUrl = video.platform === 'youtube'
    ? `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all"
    >
      {/* Área do vídeo — 16:9 fixo para visual uniforme */}
      <div className="relative aspect-video bg-cc-ink overflow-hidden">
        {playing ? (
          <iframe
            src={getEmbedUrl(video)}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full"
            aria-label={`Reproduzir: ${video.title}`}
          >
            {thumbUrl && (
              <img
                src={thumbUrl}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-cc-ink/40 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform group-hover:scale-110">
                <Play size={22} className="text-white ml-1" fill="white" />
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${PLATFORM_CHIP[video.platform]}`}>
            {PLATFORM_LABEL[video.platform]}
          </span>
          <span className="text-xs text-slate-400">{video.date}</span>
        </div>
        <h4 className="font-semibold text-slate-800 text-sm leading-snug">{video.title}</h4>
        <p className="text-xs text-slate-400 mt-1">{video.channel}</p>
      </div>
    </motion.div>
  );
};

const LandingPage = () => (
  <>
    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section className="bg-cc-ink flex items-center py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Acento sutil no canto — não são orbs flutuantes */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-bl from-cc-purple/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cc-teal/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Headline + CTAs */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cc-teal mb-6 sm:mb-8"
            >
              Ecossistema Criativo de Comunicação da Ciência
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-none tracking-tight mb-5 sm:mb-6"
            >
              Ciência<br />
              <span className="italic font-light text-cc-pink">Comunicada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-white/50 mb-8 sm:mb-10 leading-relaxed max-w-md"
            >
              {PLATFORM_SLOGAN}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/app"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-cc-pink text-white rounded-xl font-bold text-sm hover:bg-cc-pink/90 transition-colors shadow-lg shadow-cc-pink/20"
              >
                Explorar Plataforma <ArrowRight size={16} />
              </Link>
              <a
                href="#pilares"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 text-white/55 border border-white/12 rounded-xl font-medium text-sm hover:bg-white/5 hover:text-white/75 transition-colors"
              >
                Conhecer Projetos
              </a>
            </motion.div>
          </div>

          {/* Manifesto — visível em todas as telas, abaixo do headline */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            aria-label="Manifesto da plataforma"
            className="lg:col-span-2 pt-6 border-t border-white/[0.07] lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0"
          >
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/20 mb-6 sm:mb-8">
              Manifesto
            </p>
            <ul className="space-y-5 sm:space-y-7">
              {TAGLINES.map(({ prefix, emphasis }) => (
                <li key={emphasis}>
                  <p className="font-display text-lg sm:text-xl font-light text-white/25 leading-snug">
                    {prefix}
                  </p>
                  <p className="font-display text-lg sm:text-xl font-black text-white leading-snug">
                    {emphasis}.
                  </p>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>

        {/* Values strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-14 sm:mt-20 pt-5 sm:pt-6 border-t border-white/[0.07]"
        >
          <ul aria-label="Valores da plataforma" className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2">
            {VALUES.map((value, i) => (
              <li key={value} className="flex items-center gap-2 sm:gap-2.5 text-white/20 text-xs sm:text-sm font-medium">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-white/12" aria-hidden />}
                {value}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* ── 3 PILARES ─────────────────────────────────────────────── */}
    <section id="pilares" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12 sm:mb-16">
          <p className="text-xs font-bold tracking-widest text-cc-teal uppercase mb-3">
            Como funciona
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-cc-ink leading-tight">
            Três pilares,<br />um ecossistema.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {MAIN_PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICON_MAP[pillar.iconName];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="group p-6 sm:p-8 border border-slate-100 rounded-2xl bg-cc-cream hover:border-slate-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-5 sm:mb-7">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-slate-200 transition-colors">
                    <Icon size={19} />
                  </div>
                  <span className="font-display text-4xl sm:text-5xl font-black text-slate-100 leading-none select-none">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-black text-cc-ink mb-2 sm:mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── SOBRE O PROJETO ───────────────────────────────────────── */}
    <section id="sobre" className="py-16 sm:py-20 md:py-24 bg-cc-cream border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-widest text-cc-pink uppercase mb-3">
              A Experiência Central
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-cc-ink mb-8 sm:mb-10 leading-tight">
              Formação, divulgação<br />e impacto social.
            </h2>

            <ol className="space-y-5 sm:space-y-6">
              {EXPERIENCE_STEPS.map((step) => {
                const Icon = STEP_ICON_MAP[step.iconName];
                return (
                  <li key={step.num} className="flex items-start gap-4 sm:gap-5">
                    <div className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-cc-purple shrink-0 mt-0.5">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="font-semibold text-cc-ink text-sm sm:text-base">{step.action}</p>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{step.tool}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pt-0 md:pt-2"
          >
            <p className="text-xs font-bold tracking-widest text-cc-teal uppercase mb-3">
              Sobre o Projeto
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-cc-ink mb-5 sm:mb-7 leading-tight">
              Democratizando a ciência com voz e identidade.
            </h2>
            <p className="text-slate-600 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
              A <strong className="text-cc-ink font-bold">Ciência Comunicada</strong> atua na
              interseção do jornalismo, relações públicas e formação acadêmica para amplificar a
              produção de cientistas mulheres em diversos territórios e identidades.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              O ecossistema integra ensino, pesquisa e extensão por meio de práticas relacionais
              únicas, conectando hubs temáticos e infraestrutura aberta para novas comunidades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── TRILHAS DE APRENDIZAGEM ───────────────────────────────── */}
    <section id="modulos" className="py-16 sm:py-20 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-xs font-bold tracking-widest text-cc-pink uppercase mb-3">
              Trilhas de Aprendizagem
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-cc-ink">
              Módulos da Plataforma
            </h2>
          </div>
          <Link
            to="/app"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-cc-purple hover:text-cc-ink transition-colors"
          >
            Ver todos <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {MODULOS.map((mod, i) => {
            const colors = MODULE_COLOR_MAP[mod.colorKey];
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-cc-cream border border-slate-100 rounded-2xl p-6 sm:p-7 hover:shadow-md hover:border-slate-200 transition-all"
              >
                <div className={`w-2 h-2 rounded-full ${colors.dot} mb-5 sm:mb-6`} />
                <h3 className={`font-display text-base sm:text-lg font-black mb-2 sm:mb-3 leading-snug ${colors.text}`}>
                  {mod.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 sm:mb-7 leading-relaxed">{mod.description}</p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-sm border-t border-slate-200/70 pt-4 sm:pt-5">
                  <span className="text-slate-400">
                    <strong className="text-slate-600 font-bold">{mod.moduleCount}</strong> módulos
                  </span>
                  <span className="text-slate-400">
                    <strong className="text-slate-600 font-bold">{mod.students}</strong> alunas
                  </span>
                  <span className="text-slate-400">
                    <strong className="text-slate-600 font-bold">{mod.certs}</strong> certs.
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-cc-purple text-white rounded-xl font-bold text-sm sm:text-base hover:bg-cc-ink transition-colors shadow-lg shadow-cc-purple/15"
          >
            Entrar na Plataforma <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>

    {/* ── SAIU NAS REDES ────────────────────────────────────────────── */}
    <section className="py-16 sm:py-20 md:py-24 bg-cc-cream border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-xs font-bold tracking-widest text-cc-teal uppercase mb-3">
              Nas Redes Sociais
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-cc-ink">
              Saiu nas Redes
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Últimas produções da Ciência Comunicada no YouTube, TikTok e Instagram.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://youtube.com/@cienciacomunicada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-cc-purple hover:text-cc-ink transition-colors"
            >
              Ver canal <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SOCIAL_VIDEOS.map((video) => (
            <SocialCard key={video.id} video={video} />
          ))}
        </div>

      </div>
    </section>
  </>
);

export default LandingPage;
