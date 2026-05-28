import React from 'react';
import { Award, CheckCircle2, Lock, PlayCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PainelAluna = () => {
    const currentPathModules = [
        { name: 'Introdução à Comunicação da Ciência', status: 'concluido', progress: 100 },
        { name: 'Identidade e Interseccionalidade', status: 'concluido', progress: 100 },
        { name: 'Redes Sociais: Práticas e Limites', status: 'andamento', progress: 65 },
        { name: 'Mídia e Relações Públicas', status: 'bloqueado', progress: 0 },
        { name: 'Escrita Criativa para Cientistas', status: 'bloqueado', progress: 0 },
    ];

    return (
        <div className="max-w-7xl mx-auto pb-12">
            {/* HEADER ALUNA */}
            <div className="mb-8 p-8 bg-gradient-to-r from-[#331B74] to-[#45279b] text-white rounded-3xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-cc-teal/20 border-2 border-cc-teal/50 rounded-full flex items-center justify-center text-2xl font-bold text-cc-teal">
                        MA
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-1">Maria Aparecida</h2>
                        <p className="text-cc-lavender font-medium">Trilha: Formação de Cientistas Comunicadoras</p>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl w-full md:w-64">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-medium opacity-80">Progresso Geral</span>
                        <span className="text-2xl font-bold text-cc-teal">68%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-cc-teal h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* COLUNA ESQUERDA - Módulos e Progresso */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-cc-teal/10 text-cc-teal rounded-xl">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Módulos</p>
                                <p className="text-2xl font-bold text-slate-800">10<span className="text-lg text-slate-400">/15</span></p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-[#331B74]/10 text-[#331B74] rounded-xl">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Certificados</p>
                                <p className="text-2xl font-bold text-slate-800">3</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="text-xl font-bold text-slate-800">Módulos da Trilha Atual</h3>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {currentPathModules.map((modulo, i) => (
                                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        {modulo.status === 'concluido' && <CheckCircle2 className="text-green-500" size={24} />}
                                        {modulo.status === 'andamento' && <PlayCircle className="text-cc-pink" size={24} />}
                                        {modulo.status === 'bloqueado' && <Lock className="text-slate-300" size={24} />}

                                        <div>
                                            <h4 className={`font-bold ${modulo.status === 'bloqueado' ? 'text-slate-400' : 'text-slate-800'}`}>
                                                {modulo.name}
                                            </h4>
                                            {modulo.status === 'andamento' && (
                                                <div className="mt-2 flex items-center gap-3">
                                                    <div className="w-48 bg-slate-100 rounded-full h-1.5">
                                                        <div className="bg-cc-pink h-1.5 rounded-full" style={{ width: `${modulo.progress}%` }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-cc-pink">{modulo.progress}%</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {modulo.status !== 'bloqueado' && (
                                        <button className="px-4 py-2 text-sm font-bold text-[#331B74] bg-[#331B74]/5 rounded-lg hover:bg-[#331B74]/10 transition-colors">
                                            {modulo.status === 'concluido' ? 'Revisar' : 'Continuar'}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* COLUNA DIREITA - Calendário e Próximas Atividades */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <Calendar className="text-cc-purple" /> Próximas Atividades
                        </h3>

                        <div className="space-y-4">
                            <div className="p-4 rounded-2xl bg-cc-purple/5 border border-cc-purple/10 border-l-4 border-l-cc-purple">
                                <p className="text-xs font-bold tracking-widest text-[#331B74] uppercase mb-1">Hoje, 19:00</p>
                                <h4 className="font-bold text-slate-800 mb-2">Mentoria Coletiva: Relações com a Mídia</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-200 border border-white shrink-0"></div>
                                    <span className="text-sm text-slate-600">Com Dra. Luciana Silva</span>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-cc-pink/5 border border-cc-pink/10 border-l-4 border-l-cc-pink">
                                <p className="text-xs font-bold tracking-widest text-cc-pink uppercase mb-1">Amanhã, 14:00</p>
                                <h4 className="font-bold text-slate-800 mb-2">Webinar: Publicação Científica em Rede</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-200 border border-white shrink-0"></div>
                                    <div className="w-6 h-6 rounded-full bg-slate-300 border border-white -ml-3 shrink-0"></div>
                                    <span className="text-sm text-slate-600">Hub Cientistas Negras</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-3 px-4 rounded-xl font-bold text-slate-600 hover:bg-slate-50 border border-slate-200 transition-colors">
                            Ver Calendário Completo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PainelAluna;
