import React, { useState } from 'react';
import { getPipelineStagesIntl, getPipelineStagesLocal } from '../constants';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';
import { PlayCircle, MessageCircle, AlertTriangle, FileText, Bot, Phone, Users, FileCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface Props {
    language: Language;
}

const dataIntl = [
  { name: 'New Lead', count: 45, fill: '#3b82f6' },
  { name: 'Qualify', count: 32, fill: '#6366f1' },
  { name: 'Viewing', count: 18, fill: '#8b5cf6' },
  { name: 'Offer', count: 8, fill: '#ec4899' },
  { name: 'Contract', count: 5, fill: '#10b981' },
];

const dataLocal = [
  { name: 'Inbound', count: 68, fill: '#f59e0b' },
  { name: 'Screening', count: 42, fill: '#d97706' },
  { name: 'Site Visit', count: 25, fill: '#b45309' },
  { name: 'Loan', count: 12, fill: '#78350f' },
  { name: 'Transfer', count: 10, fill: '#10b981' },
];

const PipelineView: React.FC<Props> = ({ language }) => {
  const [activePipeline, setActivePipeline] = useState<'intl' | 'local'>('intl');
  const t = TRANSLATIONS[language].pipeline;

  const currentStages = activePipeline === 'intl' ? getPipelineStagesIntl(language) : getPipelineStagesLocal(language);
  const currentData = activePipeline === 'intl' ? dataIntl : dataLocal;

  return (
    <div className="p-10 h-full overflow-y-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
           <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight">{t.title}</h2>
           <p className="text-slate-500 mt-2 text-lg">
             {t.subtitle_prefix} <strong className="text-slate-900 font-bold bg-white/50 px-2 rounded border border-slate-200">{activePipeline === 'intl' ? t.subtitle_intl : t.subtitle_local}</strong> pipeline.
           </p>
        </div>
        <div className="bg-white/80 backdrop-blur p-1.5 rounded-xl border border-slate-200 shadow-sm flex gap-1">
            <button 
              onClick={() => setActivePipeline('intl')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold premium-transition ${
                activePipeline === 'intl' ? 'bg-slate-900 text-white shadow-lg transform scale-105' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t.btn_intl}
            </button>
            <button 
              onClick={() => setActivePipeline('local')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold premium-transition ${
                activePipeline === 'local' ? 'bg-slate-900 text-white shadow-lg transform scale-105' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t.btn_local}
            </button>
        </div>
      </div>

      {/* Kanban Stages Visualization */}
      <div className="grid grid-cols-5 gap-6 mb-12">
        {currentStages.map((stage, idx) => (
          <div 
            key={stage.id} 
            className="flex flex-col h-full group animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="h-1.5 rounded-full mb-4 w-full opacity-50 premium-transition group-hover:opacity-100 group-hover:scale-x-105" style={{ backgroundColor: stage.color }}></div>
            <div className="glass-panel p-5 rounded-2xl shadow-card border border-white/60 flex-1 flex flex-col hover-lift premium-transition hover:shadow-glow-blue cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-display font-bold text-slate-800 leading-tight text-lg">{stage.name}</h4>
                <span className="text-[10px] px-2 py-1 bg-slate-100 rounded-md text-slate-600 font-bold font-mono border border-slate-200">
                  {stage.duration}
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed font-medium">{stage.description}</p>
              
              {/* Automation Rules Dynamic Rendering */}
              <div className="mt-auto space-y-2.5">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{t.triggers}</p>
                
                {activePipeline === 'intl' && (
                  <>
                    {stage.id === 'new' && (
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-blue-700 bg-blue-50/80 p-2.5 rounded-lg border border-blue-100 shadow-sm hover:scale-105 transition-transform">
                        <MessageCircle size={14} className="text-blue-500" />
                        <span>Auto-reply (EN)</span>
                      </div>
                    )}
                    {stage.id === 'qualify' && (
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-indigo-700 bg-indigo-50/80 p-2.5 rounded-lg border border-indigo-100 shadow-sm hover:scale-105 transition-transform">
                        <PlayCircle size={14} className="text-indigo-500" />
                        <span>Task: Needs Analysis</span>
                      </div>
                    )}
                    {stage.id === 'viewing' && (
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-purple-700 bg-purple-50/80 p-2.5 rounded-lg border border-purple-100 shadow-sm hover:scale-105 transition-transform">
                        <Bot size={14} className="text-purple-500" />
                        <span>AI: Visit Summary</span>
                      </div>
                    )}
                  </>
                )}

                {activePipeline === 'local' && (
                  <>
                     {stage.id === 'inbound' && (
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-orange-700 bg-orange-50/80 p-2.5 rounded-lg border border-orange-100 shadow-sm hover:scale-105 transition-transform">
                        <Phone size={14} className="text-orange-500" />
                        <span>Log Call Script (TH)</span>
                      </div>
                    )}
                    {stage.id === 'loan' && (
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-100 shadow-sm hover:scale-105 transition-transform">
                        <FileCheck size={14} className="text-emerald-500" />
                        <span>Req: Bank Docs</span>
                      </div>
                    )}
                  </>
                )}

                <div className="flex items-center gap-2.5 text-xs font-semibold text-amber-700 bg-amber-50/80 p-2.5 rounded-lg border border-amber-100 shadow-sm hover:scale-105 transition-transform">
                  <AlertTriangle size={14} className="text-amber-500" />
                  <span>Stagnation Alert</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-10">
        {/* Analytics Simulation */}
        <div className="glass-panel p-8 rounded-2xl shadow-card border border-white/60 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
           <h3 className="font-display font-bold text-slate-800 mb-6 flex justify-between items-center text-xl">
             {t.chart_title}
             <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full animate-pulse-slow">{t.chart_badge}</span>
           </h3>
           <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={currentData}>
                 <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} tick={{fill: '#64748b', fontWeight: 500}} />
                 <YAxis fontSize={12} tickLine={false} axisLine={false} tick={{fill: '#64748b'}} />
                 <Tooltip 
                    cursor={{fill: 'rgba(0,0,0,0.02)'}}
                    contentStyle={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.9)' }} 
                 />
                 <Bar dataKey="count" radius={[6, 6, 0, 0]} animationDuration={1500} animationEasing="ease-out">
                    {currentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} className="hover:opacity-80 transition-opacity" />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* AI Copilot Features */}
        <div className="glass-panel p-8 rounded-2xl shadow-card border border-white/60 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <h3 className="font-display font-bold text-slate-800 mb-6 flex items-center gap-3 text-xl">
                <Bot className="text-emerald-500" size={24} />
                {t.copilot_title}
            </h3>
            <ul className="space-y-4">
                <li className="flex gap-4 items-start p-4 hover:bg-white/60 rounded-xl transition-colors border border-transparent hover:border-white/50 hover:shadow-sm cursor-default">
                    <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 rounded-xl text-white shadow-glow shadow-emerald-500/30">
                        <FileText size={18} />
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-900">Property Description Gen</h5>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">Automatically generates SEO-friendly descriptions from checkbox features when a property is added.</p>
                    </div>
                </li>
                <li className="flex gap-4 items-start p-4 hover:bg-white/60 rounded-xl transition-colors border border-transparent hover:border-white/50 hover:shadow-sm cursor-default">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl text-white shadow-glow shadow-blue-500/30">
                        <MessageCircle size={18} />
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-900">WhatsApp Summary</h5>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">Summarizes client requirements from WhatsApp logs and updates the Deal fields automatically.</p>
                    </div>
                </li>
                {activePipeline === 'local' && (
                  <li className="flex gap-4 items-start p-4 hover:bg-white/60 rounded-xl transition-colors border border-transparent hover:border-white/50 hover:shadow-sm cursor-default">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl text-white shadow-glow shadow-purple-500/30">
                        <Users size={18} />
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-900">Voice-to-Text Logs</h5>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">Transcribes Thai phone calls and tags key investment criteria in Bitrix24.</p>
                    </div>
                </li>
                )}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default PipelineView;