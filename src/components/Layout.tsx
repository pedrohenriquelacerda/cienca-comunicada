import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { LgpdBanner } from './LgpdBanner';

export const PlatformLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-cc-cream flex">
    <Sidebar />
    <main className="flex-1 h-screen overflow-y-auto p-6 sm:p-8">
      {children}
    </main>
  </div>
);

export const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-cc-cream flex flex-col">
    <TopNav />
    <main className="flex-1">
      {children}
    </main>
    <LgpdBanner />

    <footer className="bg-cc-ink text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="w-7 h-[3px] bg-cc-pink rounded-full mb-4" />
            <h2 className="font-display text-2xl font-black mb-2">Ciência Comunicada</h2>
            <p className="text-cc-lavender/50 text-sm max-w-sm leading-relaxed">
              Ecossistema criativo de comunicação da ciência voltado para mulheres cientistas no Brasil.
            </p>
          </div>
          <p className="text-sm text-white/25 shrink-0">
            © {new Date().getFullYear()} BioCode Jr.
          </p>
        </div>
      </div>
    </footer>
  </div>
);
