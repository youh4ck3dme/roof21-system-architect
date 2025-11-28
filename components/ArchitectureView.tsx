import React from 'react';
import { ArrowRight, ArrowLeftRight, Server, Globe, Database, Share2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface Props {
    language: Language;
}

const ArchitectureView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language].architecture;

  return (
    <div className="p-10 h-full overflow-y-auto">
      <div className="mb-10 animate-in slide-in-from-bottom-4 duration-500">
        <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight">{t.title}</h2>
        <p className="text-slate-500 mt-2 text-lg font-light max-w-2xl">{t.subtitle}</p>
      </div>

      {/* Main Diagram Container */}
      <div className="relative glass-panel rounded-3xl p-16 shadow-card min-h-[600px] flex flex-col items-center justify-center animate-in fade-in duration-700">
        
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none rounded-3xl"></div>

        {/* Core Layer */}
        <div className="relative z-10 w-full max-w-lg mb-20 group">
          <div className="absolute -inset-4 bg-emerald-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
          <div className="relative bg-white/90 backdrop-blur-xl border border-white/50 ring-1 ring-emerald-100 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-5 rounded-2xl mb-5 shadow-glow shadow-emerald-500/30">
              <Database size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900">{t.nodes.bitrix.title}</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mt-1 bg-emerald-50 px-3 py-1 rounded-full">{t.nodes.bitrix.subtitle}</span>
            <p className="text-slate-500 text-sm mt-4 px-4 leading-relaxed font-medium">
              {t.nodes.bitrix.desc}
            </p>
          </div>
          
          {/* Vertical Connectors with Gradient */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 h-20 w-0.5 bg-gradient-to-b from-emerald-500/50 to-slate-300"></div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-16 w-0.5 bg-gradient-to-t from-emerald-500/50 to-transparent"></div>
        </div>

        {/* Frontend Layer */}
        <div className="grid grid-cols-2 gap-32 w-full max-w-6xl relative z-10">
          
          {/* Slovak Site */}
          <div className="flex flex-col items-center group">
             {/* Connection Line to Core */}
             <div className="absolute top-[-80px] right-[-64px] w-[55%] h-[80px] border-b-2 border-l-2 border-slate-300/50 rounded-bl-[3rem] -z-10"></div>

            <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-xl w-full relative hover:border-blue-400/50 hover:shadow-blue-500/10 transition-all duration-300 group-hover:-translate-y-1">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/30">{t.nodes.sk_site.badge}</div>
              <div className="flex items-center gap-5 mb-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <Globe size={28} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-lg text-slate-800">{t.nodes.sk_site.title}</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{t.nodes.sk_site.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                <ArrowLeftRight size={14} className="text-blue-500" />
                <span>{t.nodes.sk_site.sub}</span>
              </div>
            </div>
          </div>

          {/* International Site */}
          <div className="flex flex-col items-center group">
             {/* Connection Line to Core */}
             <div className="absolute top-[-80px] left-[-64px] w-[55%] h-[80px] border-b-2 border-r-2 border-slate-300/50 rounded-br-[3rem] -z-10"></div>

            <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-xl w-full relative hover:border-indigo-400/50 hover:shadow-indigo-500/10 transition-all duration-300 group-hover:-translate-y-1">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-indigo-500/30">{t.nodes.intl_site.badge}</div>
              <div className="flex items-center gap-5 mb-4">
                 <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                    <Globe size={28} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-lg text-slate-800">{t.nodes.intl_site.title}</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{t.nodes.intl_site.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                <ArrowLeftRight size={14} className="text-indigo-500" />
                <span>{t.nodes.intl_site.sub}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Export Layer */}
        <div className="mt-24 w-full max-w-5xl relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-[10px] font-mono text-slate-400 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-slate-200 mb-2">XML / JSON Feeds</span>
            <div className="h-12 w-0.5 bg-gradient-to-b from-slate-300 to-slate-900"></div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 flex items-center justify-between shadow-2xl shadow-slate-900/20 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="flex items-center gap-5 relative z-10">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-4 rounded-xl shadow-lg">
                <Share2 className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl">{t.nodes.export.title}</h4>
                <p className="text-sm text-slate-400 font-light">{t.nodes.export.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 relative z-10">
              <ArrowRight className="text-slate-600" />
            </div>

            <div className="flex gap-3 relative z-10">
              {['DDProperty', 'FazWaz', 'Hipflat', 'DotProperty'].map((portal) => (
                <div key={portal} className="bg-slate-800/50 backdrop-blur px-5 py-2.5 rounded-lg border border-slate-700 text-sm font-medium hover:bg-slate-700 hover:border-orange-500/50 hover:text-orange-400 transition-all cursor-default">
                  {portal}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Tech Stack Legend */}
      <div className="mt-10 grid grid-cols-3 gap-8">
         <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-display font-bold text-sm text-slate-800 mb-3 flex items-center gap-2.5">
                <Server size={18} className="text-emerald-500"/> {t.legend.backend.title}
            </h4>
            <ul className="text-sm text-slate-600 space-y-2 ml-7 list-disc marker:text-emerald-300">
                {t.legend.backend.items.map((item, i) => <li key={i} className="pl-1">{item}</li>)}
            </ul>
         </div>
         <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-display font-bold text-sm text-slate-800 mb-3 flex items-center gap-2.5">
                <Globe size={18} className="text-blue-500"/> {t.legend.frontend.title}
            </h4>
            <ul className="text-sm text-slate-600 space-y-2 ml-7 list-disc marker:text-blue-300">
                {t.legend.frontend.items.map((item, i) => <li key={i} className="pl-1">{item}</li>)}
            </ul>
         </div>
         <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-display font-bold text-sm text-slate-800 mb-3 flex items-center gap-2.5">
                <Share2 size={18} className="text-orange-500"/> {t.legend.integration.title}
            </h4>
            <ul className="text-sm text-slate-600 space-y-2 ml-7 list-disc marker:text-orange-300">
                 {t.legend.integration.items.map((item, i) => <li key={i} className="pl-1">{item}</li>)}
            </ul>
         </div>
      </div>
    </div>
  );
};

export default ArchitectureView;