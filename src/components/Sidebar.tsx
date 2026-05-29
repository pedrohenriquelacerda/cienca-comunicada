import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, User, Users, Server, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'Início',         path: '/app',                icon: Home        },
  { label: 'Módulos',        path: '/app/modulos',        icon: LayoutGrid  },
  { label: 'Meu Painel',     path: '/app/painel',         icon: User        },
  { label: 'Hubs',           path: '/app/hubs',           icon: Users       },
  { label: 'Infraestrutura', path: '/app/infraestrutura', icon: Server      },
];

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside className="w-60 bg-cc-ink text-white flex flex-col h-full md:h-screen md:sticky md:top-0">
      {/* Logo */}
      <div className="px-5 pt-6 pb-5 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-cc-pink flex items-center justify-center shrink-0">
              <span className="text-white text-[9px] font-black leading-none">CC</span>
            </div>
            <h1 className="font-display text-sm font-black tracking-tight text-white leading-none">
              Ciência Comunicada
            </h1>
          </div>
          <p className="text-[11px] text-white/25 font-medium mt-3 tracking-wide">
            Painel do Ecossistema
          </p>
        </div>

        {/* Botão fechar — só aparece no drawer mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden w-7 h-7 flex items-center justify-center text-white/30 hover:text-white rounded-md hover:bg-white/10 transition-colors shrink-0 -mr-1 mt-0.5"
            aria-label="Fechar menu"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav aria-label="Navegação da plataforma" className="flex-1 px-3 space-y-0.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              aria-current={isActive ? 'page' : undefined}
              className={clsx(
                'flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-all text-sm',
                isActive
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-white/40 hover:bg-white/5 hover:text-white/70 font-medium'
              )}
            >
              <Icon
                size={15}
                className={clsx(isActive ? 'text-cc-pink' : 'text-white/30')}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-5 py-5 border-t border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-cc-teal/20 flex items-center justify-center text-cc-teal font-bold text-xs shrink-0">
            MA
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white leading-tight truncate">Maria Aparecida</p>
            <p className="text-xs text-white/30 mt-0.5">Aluna</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
