import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link to="/" onClick={close} className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-cc-purple flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] font-black leading-none">CC</span>
            </div>
            <span className="font-display text-lg font-black tracking-tight text-cc-ink">
              Ciência Comunicada
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <a href="#sobre"   className="hover:text-cc-ink transition-colors">Sobre</a>
            <a href="#pilares" className="hover:text-cc-ink transition-colors">Pilares</a>
            <a href="#modulos" className="hover:text-cc-ink transition-colors">Módulos</a>
            <Link to="/app/hubs" className="hover:text-cc-ink transition-colors">Hubs</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/app"
              className="px-4 sm:px-5 py-2 rounded-xl bg-cc-purple text-white text-sm font-bold hover:bg-cc-ink transition-colors"
            >
              Entrar
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              className="md:hidden w-9 h-9 flex items-center justify-center text-slate-500 hover:text-cc-ink rounded-lg hover:bg-slate-50 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          aria-label="Navegação mobile"
          className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-0.5"
        >
          <a href="#sobre"   onClick={close} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-cc-ink transition-colors">Sobre</a>
          <a href="#pilares" onClick={close} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-cc-ink transition-colors">Pilares</a>
          <a href="#modulos" onClick={close} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-cc-ink transition-colors">Módulos</a>
          <Link to="/app/hubs" onClick={close} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-cc-ink transition-colors">Hubs</Link>
        </nav>
      )}
    </header>
  );
};
