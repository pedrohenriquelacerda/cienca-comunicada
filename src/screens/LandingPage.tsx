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

// ── SAIU NAS REDES — visual editorial escuro ──────────────────────────────
const SOCIAL_ACCENT: Record<SocialVideo['platform'], {
  border: string; badge: string; label: string; hoverGlow: string;
}> = {
  youtube:   { border: 'border-l-red-500',  badge: 'bg-red-500/10 text-red-400 border border-red-500/20',   label: 'YouTube',   hoverGlow: 'hover:shadow-red-500/10'  },
  tiktok:    { border: 'border-l-white/20', badge: 'bg-white/8 text-white/50 border border-white/10',        label: 'TikTok',    hoverGlow: 'hover:shadow-white/5'     },
  instagram: { border: 'border-l-cc-pink',  badge: 'bg-cc-pink/10 text-cc-pink border border-cc-pink/20',   label: 'Instagram', hoverGlow: 'hover:shadow-cc-pink/10' },
};

const getEmbedUrl = (v: SocialVideo) => {
  if (v.platform === 'youtube')   return `https://www.youtube.com/embed/${v.videoId}?rel=0&autoplay=1`;
  if (v.platform === 'tiktok')    return `https://www.tiktok.com/embed/v2/${v.videoId}`;
  return `https://www.instagram.com/reel/${v.videoId}/embed/`;
};

const SocialCard = ({ video, index }: { video: SocialVideo; index: number }) => {
  const [playing, setPlaying] = useState(false);
  const thumbUrl = video.platform === 'youtube'
    ? `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
    : null;
  const accent = SOCIAL_ACCENT[video.platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative border-l-2 ${accent.border} rounded-r-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accent.hoverGlow}`}
    >
      {/* Thumbnail / player */}
      <div className="relative aspect-video bg-white/[0.04] overflow-hidden">
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
                className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-85 transition-all duration-500 scale-[1.04] group-hover:scale-100"
              />
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-cc-ink/90 via-cc-ink/20 to-transparent" />
            {/* Índice decorativo */}
            <span className="absolute top-3 left-3 font-display text-[11px] font-black text-white/15 leading-none select-none tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            {/* Botão play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full bg-white/12 backdrop-blur-sm border border-white/25 flex items-center justify-center transition-all duration-200 group-hover:scale-115 group-hover:bg-white/20 group-hover:border-white/45">
                <Play size={16} className="text-white ml-0.5" fill="white" />
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Rodapé do card */}
      <div className="bg-white/[0.04] border-t border-white/[0.06] px-4 py-3.5">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${accent.badge}`}>
            {accent.label}
          </span>
          <span className="text-[10px] text-white/20 font-medium tabular-nums">{video.date}</span>
        </div>
        <h4 className="font-display text-sm font-black text-white/75 leading-snug group-hover:text-white transition-colors duration-200 line-clamp-2">
          {video.title}
        </h4>
        <p className="text-[11px] text-white/25 font-medium mt-1 truncate">{video.channel}</p>
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
    <section className="py-16 sm:py-20 md:py-24 bg-cc-ink relative overflow-hidden">
      {/* Dot grid — textura sutil */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden
      />
      {/* Acento de cor no canto superior direito */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cc-pink/8 to-transparent pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header editorial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cc-teal">
              Nas Redes Sociais
            </span>
            <div className="h-px w-12 bg-cc-teal/30" />
          </div>

          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-white leading-[0.92] tracking-tight">
                Saiu<br />
                <span className="italic font-light text-cc-pink">nas Redes</span>
              </h2>
              <p className="text-white/30 text-sm mt-4 max-w-xs leading-relaxed">
                Produções recentes da UFCSPA no YouTube, TikTok e Instagram.
              </p>
            </div>

            {/* Links das plataformas */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'YouTube',   href: 'https://www.youtube.com/@NúcleoCulturaldaUFCSPA' },
                { label: 'Instagram', href: 'https://www.instagram.com/ufcspaoficial/' },
                { label: 'TikTok',    href: 'https://www.tiktok.com/@ufcspaoficial' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-bold text-white/25 hover:text-white/60 hover:border-white/20 transition-all duration-200"
                >
                  {label} <ExternalLink size={10} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grade de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SOCIAL_VIDEOS.map((video, i) => (
            <SocialCard key={video.id} video={video} index={i} />
          ))}
        </div>

      </div>
    </section>
  </>
);

export default LandingPage;
