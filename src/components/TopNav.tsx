import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export const TopNav = () => (
  <header className="bg-cc-cream border-b border-slate-200/70 sticky top-0 z-50">
    {/* Brand accent stripe */}
    <div className="h-[3px] bg-cc-pink w-full" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">

        <div className="flex items-center gap-2.5">
          <div className="bg-cc-ink text-white p-2 rounded-xl">
            <BookOpen size={20} />
          </div>
          <Link to="/" className="font-display text-xl font-black tracking-tight text-cc-ink">
            Ciência Comunicada
          </Link>
        </div>

        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#sobre" className="hover:text-cc-ink transition-colors">Sobre o Projeto</a>
          <a href="#modulos" className="hover:text-cc-ink transition-colors">Módulos</a>
          <Link to="/app/hubs" className="hover:text-cc-ink transition-colors">Hubs</Link>
          <Link to="/app/infraestrutura" className="hover:text-cc-ink transition-colors">Infraestrutura</Link>
        </nav>

        <Link
          to="/app"
          className="px-5 py-2 rounded-full bg-cc-purple text-white text-sm font-bold hover:bg-cc-ink transition-colors"
        >
          Entrar na Plataforma
        </Link>

      </div>
    </div>
  </header>
);
