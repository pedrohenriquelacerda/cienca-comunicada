import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export const TopNav = () => (
  <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">

        <div className="flex items-center gap-2">
          <div className="bg-cc-purple text-white p-2 rounded-xl">
            <BookOpen size={24} />
          </div>
          <Link to="/" className="text-2xl font-bold tracking-tight text-cc-purple">
            Ciência Comunicada
          </Link>
        </div>

        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#sobre" className="hover:text-cc-pink transition-colors">Sobre o Projeto</a>
          <a href="#modulos" className="hover:text-cc-pink transition-colors">Módulos</a>
          <Link to="/app/hubs" className="hover:text-cc-pink transition-colors">Hubs</Link>
          <Link to="/app/infraestrutura" className="hover:text-cc-pink transition-colors">Infraestrutura</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/app"
            className="px-6 py-2.5 rounded-full bg-cc-purple text-white font-medium hover:bg-cc-purple/90 hover:shadow-lg transition-all"
          >
            Entrar na Plataforma
          </Link>
        </div>

      </div>
    </div>
  </header>
);
