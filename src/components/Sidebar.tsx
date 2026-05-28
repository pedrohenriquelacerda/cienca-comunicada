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
    <aside className="w-64 bg-cc-ink text-white flex flex-col h-screen sticky top-0">
      <div className="px-6 pt-7 pb-5">
        <div className="w-7 h-[3px] bg-cc-pink mb-4 rounded-full" />
        <h1 className="font-display text-xl font-black tracking-tight leading-tight">
          Ciência<br />Comunicada
        </h1>
        <p className="text-xs text-cc-lavender mt-2 opacity-50 font-medium tracking-wide">
          Painel do Ecossistema
        </p>
      </div>

      <nav aria-label="Navegação da plataforma" className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive ? 'page' : undefined}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all border-l-2',
                isActive
                  ? 'bg-white/10 text-white font-semibold border-cc-pink'
                  : 'text-cc-lavender/70 hover:bg-white/5 hover:text-white border-transparent'
              )}
            >
              <Icon
                size={18}
                className={clsx(isActive ? 'text-cc-pink' : 'opacity-60')}
              />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-5 border-t border-white/8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-cc-teal/20 border border-cc-teal/30 flex items-center justify-center text-cc-teal font-bold text-sm">
            M
          </div>
          <div>
            <p className="font-semibold text-sm text-white">Maria Aparecida</p>
            <p className="text-xs text-cc-lavender opacity-50">Aluna</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
