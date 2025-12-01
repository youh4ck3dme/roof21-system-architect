import React from 'react';
import { Flag, CheckCircle2, Circle, Clock, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '@/constants/translations';
import { Language } from '@/types';
import { getImplementationPhases } from '../constants';

interface Props {
    language: Language;
}

const ImplementationView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language].impl;
  const phases = getImplementationPhases(language);

  return (
    <div className="p-8 h-full bg-slate-50 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
        <p className="text-slate-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200"></div>

        <div className="space-y-12">
          {phases.map((phase) => (
            <div key={phase.id} className="relative pl-24 group">
              {/* Timeline Node */}
              <div className={`absolute left-0 top-0 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl shadow-sm border-4 border-slate-50 z-10 transition-colors ${
                phase.status === 'completed' ? 'bg-emerald-500 text-white' :
                phase.status === 'in-progress' ? 'bg-blue-600 text-white' :
                'bg-white text-slate-300 border-slate-100'
              }`}>
                {phase.status === 'completed' ? <CheckCircle2 /> : phase.id}
              </div>

              {/* Content Card */}
              <div className={`bg-white p-6 rounded-xl border transition-all ${
                 phase.status === 'in-progress' ? 'border-blue-500 shadow-md ring-1 ring-blue-100' : 'border-slate-200 shadow-sm'
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`text-lg font-bold ${
                         phase.status === 'pending' ? 'text-slate-500' : 'text-slate-800'
                      }`}>{phase.title}</h3>
                      {phase.status === 'in-progress' && (
                        <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide animate-pulse">
                          {t.current}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Clock size={12} />
                      {phase.duration}
                    </div>
                  </div>
                  {phase.status === 'completed' ? (
                     <div className="text-emerald-500 text-xs font-bold flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full">
                        {t.status.completed} <CheckCircle2 size={12}/>
                     </div>
                  ) : phase.status === 'in-progress' ? (
                     <div className="text-blue-600 text-xs font-bold flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
                        {t.status.progress} <ArrowRight size={12}/>
                     </div>
                  ) : (
                     <div className="text-slate-300 text-xs font-bold flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full">
                        {t.status.pending} <Circle size={12}/>
                     </div>
                  )}
                </div>

                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                       <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                          phase.status === 'completed' ? 'bg-emerald-400' :
                          phase.status === 'in-progress' ? 'bg-blue-400' : 'bg-slate-300'
                       }`}></div>
                       <span className={phase.status === 'pending' ? 'text-slate-400' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">{t.ready_title}</h3>
                <p className="text-slate-400 text-sm max-w-lg">{t.ready_text}</p>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-emerald-500/20">
                <Flag size={18} />
                {t.btn_init}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ImplementationView;