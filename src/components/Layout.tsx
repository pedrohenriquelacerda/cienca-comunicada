import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { LgpdBanner } from './LgpdBanner';

export const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Backdrop mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar — drawer no mobile, estático no desktop */}
      <div
        className={clsx(
          'fixed inset-y-0 left-0 z-30 transition-transform duration-200 ease-in-out',
          'md:relative md:inset-auto md:z-auto md:translate-x-0 md:shrink-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Coluna de conteúdo */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Barra de topo — só no mobile */}
        <div className="sticky top-0 z-10 flex items-center h-14 px-4 gap-3 bg-white border-b border-slate-100 md:hidden shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-cc-ink rounded-lg hover:bg-slate-50 transition-colors"
            aria-label="Abrir menu"
          >
            <Menu size={18} />
          </button>
          <span className="font-display text-sm font-black text-cc-ink flex-1 truncate">
            Ciência Comunicada
          </span>
          <div className="w-8 h-8 rounded-full bg-cc-teal/20 flex items-center justify-center text-cc-teal text-xs font-bold shrink-0">
            MA
          </div>
        </div>

        <main className="flex-1 h-screen overflow-y-auto p-4 sm:p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-cc-cream flex flex-col">
    <TopNav />
    <main className="flex-1">
      {children}
    </main>
    <LgpdBanner />

    <footer className="bg-cc-ink text-white py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 rounded-md bg-cc-pink flex items-center justify-center shrink-0">
                <span className="text-white text-[9px] font-black leading-none">CC</span>
              </div>
              <h2 className="font-display text-lg font-black text-white tracking-tight">
                Ciência Comunicada
              </h2>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Ecossistema criativo de comunicação da ciência voltado para mulheres cientistas no Brasil.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap gap-5 text-sm text-white/30">
              <a href="#sobre"   className="hover:text-white/60 transition-colors">Sobre</a>
              <a href="#pilares" className="hover:text-white/60 transition-colors">Pilares</a>
              <a href="#modulos" className="hover:text-white/60 transition-colors">Módulos</a>
            </div>
            <p className="text-xs text-white/15">
              © {new Date().getFullYear()} BioCode Jr. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
