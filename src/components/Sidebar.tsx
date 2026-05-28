import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, User, Users, Server } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'Início', path: '/app', icon: Home },
  { label: 'Módulos', path: '/app/modulos', icon: LayoutGrid },
  { label: 'Painel da Aluna', path: '/app/painel', icon: User },
  { label: 'Hubs', path: '/app/hubs', icon: Users },
  { label: 'Infraestrutura', path: '/app/infraestrutura', icon: Server },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-cc-purple text-white flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight">Ciência Comunicada</h1>
        <p className="text-sm text-cc-lavender mt-2 opacity-80">Painel do Ecossistema</p>
      </div>

      <nav aria-label="Navegação da plataforma" className="flex-1 px-4 mt-6 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive ? 'page' : undefined}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-white/10 text-white font-medium shadow-sm'
                  : 'text-cc-lavender hover:bg-white/5 hover:text-white'
              )}
            >
              <Icon
                size={20}
                className={clsx(isActive ? 'text-cc-pink' : 'text-current opacity-70')}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cc-teal/20 border border-cc-teal/30 flex items-center justify-center text-cc-teal font-bold">
            M
          </div>
          <div>
            <p className="font-medium text-sm">Maria Aparecida</p>
            <p className="text-xs text-cc-lavender opacity-80">Aluna</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
