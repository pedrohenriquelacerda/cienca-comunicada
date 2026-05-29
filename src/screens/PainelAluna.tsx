import { Award, CheckCircle2, Lock, PlayCircle, Calendar } from 'lucide-react';

const currentPathModules = [
  { name: 'Introdução à Comunicação da Ciência', status: 'concluido',  progress: 100 },
  { name: 'Identidade e Interseccionalidade',    status: 'concluido',  progress: 100 },
  { name: 'Redes Sociais: Práticas e Limites',   status: 'andamento',  progress: 65  },
  { name: 'Mídia e Relações Públicas',           status: 'bloqueado',  progress: 0   },
  { name: 'Escrita Criativa para Cientistas',    status: 'bloqueado',  progress: 0   },
];

const PainelAluna = () => (
  <div className="max-w-6xl mx-auto pb-12">

    {/* HEADER ALUNA — clean, sem gradiente */}
    <header className="mb-8 bg-white border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-cc-teal/15 border border-cc-teal/25 flex items-center justify-center text-base font-bold text-cc-teal shrink-0">
          MA
        </div>
        <div>
          <h2 className="font-display text-2xl font-black text-cc-ink">Maria Aparecida</h2>
          <p className="text-sm text-slate-400 mt-0.5">
            Trilha: Formação de Cientistas Comunicadoras
          </p>
        </div>
      </div>

      <div className="w-full sm:w-56">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-slate-400">Progresso Geral</span>
          <span className="text-lg font-bold text-cc-teal">68%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1.5">
          <div
            className="bg-cc-teal h-1.5 rounded-full transition-all"
            style={{ width: '68%' }}
          />
        </div>
      </div>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* COLUNA PRINCIPAL */}
      <div className="lg:col-span-2 space-y-6">

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-100 flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-2.5 bg-cc-teal/8 text-cc-teal rounded-xl shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Módulos</p>
              <p className="text-xl sm:text-2xl font-bold text-slate-800">
                10<span className="text-sm sm:text-base text-slate-400 font-medium">/15</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-100 flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-2.5 bg-cc-purple/8 text-cc-purple rounded-xl shrink-0">
              <Award size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Certificados</p>
              <p className="text-xl sm:text-2xl font-bold text-slate-800">3</p>
            </div>
          </div>
        </div>

        {/* Lista de módulos */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-semibold text-slate-800 text-sm">Módulos da Trilha Atual</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {currentPathModules.map((modulo, i) => (
              <div
                key={i}
                className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  {modulo.status === 'concluido'  && <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />}
                  {modulo.status === 'andamento'  && <PlayCircle   size={18} className="text-cc-pink shrink-0"     />}
                  {modulo.status === 'bloqueado'  && <Lock         size={18} className="text-slate-300 shrink-0"   />}

                  <div className="min-w-0">
                    <h4 className={`text-sm font-semibold truncate ${
                      modulo.status === 'bloqueado' ? 'text-slate-300' : 'text-slate-800'
                    }`}>
                      {modulo.name}
                    </h4>
                    {modulo.status === 'andamento' && (
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="w-28 bg-slate-100 rounded-full h-1">
                          <div
                            className="bg-cc-pink h-1 rounded-full"
                            style={{ width: `${modulo.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-cc-pink">{modulo.progress}%</span>
                      </div>
                    )}
                  </div>
                </div>

                {modulo.status !== 'bloqueado' && (
                  <button className="ml-4 shrink-0 px-3 py-1.5 text-xs font-bold text-cc-purple bg-cc-purple/6 rounded-lg hover:bg-cc-purple/10 transition-colors">
                    {modulo.status === 'concluido' ? 'Revisar' : 'Continuar'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COLUNA LATERAL */}
      <div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-2 mb-6">
            <Calendar size={16} className="text-cc-purple" />
            <h3 className="font-semibold text-slate-800 text-sm">Próximas Atividades</h3>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-100 border-l-2 border-l-cc-purple bg-cc-lavender/30">
              <p className="text-[10px] font-bold tracking-widest text-cc-purple uppercase mb-1">
                Hoje, 19:00
              </p>
              <h4 className="font-semibold text-slate-800 text-sm mb-2">
                Mentoria Coletiva: Relações com a Mídia
              </h4>
              <p className="text-xs text-slate-400">Com Dra. Luciana Silva</p>
            </div>

            <div className="p-4 rounded-xl border border-slate-100 border-l-2 border-l-cc-pink bg-cc-pink/5">
              <p className="text-[10px] font-bold tracking-widest text-cc-pink uppercase mb-1">
                Amanhã, 14:00
              </p>
              <h4 className="font-semibold text-slate-800 text-sm mb-2">
                Webinar: Publicação Científica em Rede
              </h4>
              <p className="text-xs text-slate-400">Hub Cientistas Negras</p>
            </div>
          </div>

          <button className="w-full mt-5 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 border border-slate-200 transition-colors">
            Ver Calendário Completo
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PainelAluna;
