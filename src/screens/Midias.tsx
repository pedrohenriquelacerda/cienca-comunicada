import { useState } from 'react';
import { Plus, X, ExternalLink, Link2, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Platform = 'youtube' | 'tiktok' | 'instagram' | 'vimeo';

interface EmbedItem {
  id: string;
  originalUrl: string;
  platform: Platform;
  embedUrl: string;
  thumbUrl: string | null;
  title: string;
}

const PLATFORM_CHIP: Record<Platform, string> = {
  youtube:   'bg-red-50 text-red-600 border border-red-100',
  tiktok:    'bg-slate-900 text-white border border-slate-700',
  instagram: 'bg-pink-50 text-pink-600 border border-pink-100',
  vimeo:     'bg-sky-50 text-sky-600 border border-sky-100',
};

const PLATFORM_LABEL: Record<Platform, string> = {
  youtube:   'YouTube',
  tiktok:    'TikTok',
  instagram: 'Instagram',
  vimeo:     'Vimeo',
};

const ASPECT: Record<Platform, string> = {
  youtube:   'aspect-video',
  vimeo:     'aspect-video',
  tiktok:    'aspect-[9/16]',
  instagram: 'aspect-[4/5]',
};

let _seq = 0;
const uid = () => String(++_seq);

function parseUrl(raw: string): Omit<EmbedItem, 'id'> | null {
  const url = raw.trim();
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^(www\.|m\.)/, '');

    // YouTube
    if (host === 'youtube.com' || host === 'youtu.be') {
      let vid = '';
      if (host === 'youtu.be') {
        vid = u.pathname.slice(1).split('?')[0];
      } else if (u.pathname.startsWith('/shorts/')) {
        vid = u.pathname.replace('/shorts/', '').split('?')[0];
      } else {
        vid = u.searchParams.get('v') ?? '';
      }
      if (!vid) return null;
      return {
        originalUrl: url,
        platform: 'youtube',
        embedUrl: `https://www.youtube.com/embed/${vid}?rel=0&autoplay=1`,
        thumbUrl: `https://img.youtube.com/vi/${vid}/hqdefault.jpg`,
        title: 'YouTube',
      };
    }

    // TikTok
    if (host === 'tiktok.com' || host === 'vm.tiktok.com') {
      const m = u.pathname.match(/\/video\/(\d+)/);
      if (!m) return null;
      return {
        originalUrl: url,
        platform: 'tiktok',
        embedUrl: `https://www.tiktok.com/embed/v2/${m[1]}`,
        thumbUrl: null,
        title: 'TikTok',
      };
    }

    // Instagram
    if (host === 'instagram.com') {
      const m = u.pathname.match(/\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
      if (!m) return null;
      return {
        originalUrl: url,
        platform: 'instagram',
        embedUrl: `https://www.instagram.com/${m[1]}/${m[2]}/embed/`,
        thumbUrl: null,
        title: 'Instagram',
      };
    }

    // Vimeo
    if (host === 'vimeo.com') {
      const vid = u.pathname.slice(1).split('/')[0];
      if (!vid || isNaN(Number(vid))) return null;
      return {
        originalUrl: url,
        platform: 'vimeo',
        embedUrl: `https://player.vimeo.com/video/${vid}?autoplay=1`,
        thumbUrl: null,
        title: 'Vimeo',
      };
    }

    return null;
  } catch {
    return null;
  }
}

// Card individual com estado de play
const EmbedCard = ({ item, onRemove }: { item: EmbedItem; onRemove: () => void }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl border border-slate-100 overflow-hidden ${
        item.platform === 'tiktok' ? 'max-w-[340px] w-full mx-auto' : ''
      }`}
    >
      {/* Área do vídeo */}
      <div className={`relative ${ASPECT[item.platform]} bg-cc-ink overflow-hidden`}>
        {playing ? (
          <iframe
            src={item.embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            title={item.title}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group/play"
            aria-label="Reproduzir vídeo"
          >
            {item.thumbUrl && (
              <img
                src={item.thumbUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-cc-ink/50 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform group-hover/play:scale-110">
                <Play size={22} className="text-white ml-1" fill="white" />
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Rodapé do card */}
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${PLATFORM_CHIP[item.platform]}`}>
          {PLATFORM_LABEL[item.platform]}
        </span>
        <div className="flex items-center gap-1">
          <a
            href={item.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir no site original"
            className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-cc-purple rounded-lg hover:bg-slate-50 transition-colors"
          >
            <ExternalLink size={13} />
          </a>
          <button
            onClick={onRemove}
            title="Remover"
            className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            <X size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Midias = () => {
  const [items, setItems] = useState<EmbedItem[]>([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;
    const parsed = parseUrl(input);
    if (!parsed) {
      setError('URL não reconhecida. Cole um link do YouTube, TikTok, Instagram ou Vimeo.');
      return;
    }
    setItems((prev) => [{ id: uid(), ...parsed }, ...prev]);
    setInput('');
    setError('');
  };

  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-6 sm:space-y-8">

      {/* Cabeçalho */}
      <header>
        <p className="text-xs font-bold tracking-widest uppercase text-cc-teal mb-2">
          Conteúdo Multimídia
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-cc-ink">
          Mídias & Vídeos
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Cole o link de um vídeo para incorporá-lo aqui. Suporta YouTube, TikTok, Instagram e Vimeo.
        </p>
      </header>

      {/* Input de URL */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6">
        <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">
          Adicionar vídeo
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Link2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
            <input
              type="url"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(''); }}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              placeholder="https://www.youtube.com/watch?v=... ou tiktok.com/..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-cc-purple focus:ring-2 focus:ring-cc-purple/10 transition-all"
            />
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-cc-purple text-white rounded-xl text-sm font-bold hover:bg-cc-ink transition-colors shrink-0"
          >
            <Plus size={15} /> Adicionar
          </button>
        </div>

        {error && (
          <p className="text-xs text-red-500 mt-3 flex items-center gap-1.5">
            ⚠ {error}
          </p>
        )}

        {/* Badges das plataformas suportadas */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
          <span className="text-[10px] text-slate-400 font-medium self-center mr-1">Suporta:</span>
          {(['youtube', 'tiktok', 'instagram', 'vimeo'] as Platform[]).map((p) => (
            <span key={p} className={`text-[10px] font-bold px-2 py-1 rounded-md ${PLATFORM_CHIP[p]}`}>
              {PLATFORM_LABEL[p]}
            </span>
          ))}
        </div>
      </div>

      {/* Estado vazio */}
      {items.length === 0 && (
        <div className="text-center py-20 text-slate-300">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <Play size={28} className="text-slate-300" />
          </div>
          <p className="text-sm font-medium text-slate-400">Nenhum vídeo adicionado.</p>
          <p className="text-xs text-slate-300 mt-1">Cole um link acima para começar.</p>
        </div>
      )}

      {/* Grade de embeds */}
      {items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-start">
          <AnimatePresence>
            {items.map((item) => (
              <EmbedCard
                key={item.id}
                item={item}
                onRemove={() => setItems((prev) => prev.filter((v) => v.id !== item.id))}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Midias;
