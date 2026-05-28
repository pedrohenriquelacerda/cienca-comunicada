import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { LgpdBanner } from './LgpdBanner';

export const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            <Sidebar />
            <main className="flex-1 h-screen overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <TopNav />
            <main className="flex-1">
                {children}
            </main>
            <LgpdBanner />

            {/* Simple Footer */}
            <footer className="bg-[#331B74] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Ciência Comunicada</h2>
                            <p className="text-cc-lavender opacity-80 max-w-md">
                                Ecossistema criativo de comunicação da ciência voltado para mulheres cientistas no Brasil.
                            </p>
                        </div>
                        <div className="text-sm opacity-60">
                            © {new Date().getFullYear()} BioCode Jr. Todos os direitos reservados.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
