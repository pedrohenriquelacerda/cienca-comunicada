import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const LgpdBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('lgpd-consent');
        if (!consent) setIsVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('lgpd-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom duration-500">
            <div className="flex-1">
                <p className="text-sm text-slate-600">
                    Utilizamos cookies e tecnologias similares de acordo com nossa Política de Privacidade. Ao continuar navegando, você concorda com estas condições. Estamos em conformidade com a <strong>LGPD</strong>.
                </p>
            </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={handleAccept}
                    className="px-6 py-2 bg-cc-teal text-white rounded-lg font-medium hover:bg-teal-600 transition-colors whitespace-nowrap"
                >
                    Aceitar Cookies
                </button>
                <button onClick={() => setIsVisible(false)} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};
