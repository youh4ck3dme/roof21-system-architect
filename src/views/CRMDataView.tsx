import React, { useState } from 'react';
import { getCRMEntities } from '../constants';
import { TRANSLATIONS } from '@/constants/translations';
import { Language } from '@/types';
import { Tag, Search, Filter, CheckCircle2, Globe, Database } from 'lucide-react';

interface Props {
    language: Language;
}

const CRMDataView: React.FC<Props> = ({ language }) => {
  const [activeEntityIndex, setActiveEntityIndex] = useState(0);
  const entities = getCRMEntities(language);
  const t = TRANSLATIONS[language].crm;

  return (
    <div className="p-10 h-full overflow-y-auto">
      <div className="mb-10 animate-in slide-in-from-bottom-4 duration-500">
        <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight">{t.title}</h2>
        <p className="text-slate-500 mt-2 text-lg font-light max-w-2xl">{t.subtitle}</p>
      </div>

      <div className="flex gap-10 animate-in fade-in duration-700">
        {/* Entity Navigation */}
        <div className="w-1/4">
          <div className="glass-panel rounded-2xl shadow-card overflow-hidden">
            <div className="p-4 bg-slate-50/50 border-b border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Entities</h3>
            </div>
            {entities.map((entity, idx) => (
              <button
                key={entity.name}
                onClick={() => setActiveEntityIndex(idx)}
                className={`w-full text-left px-6 py-5 border-b border-slate-100/50 last:border-0 hover:bg-white transition-all duration-200 flex items-center justify-between group ${
                  activeEntityIndex === idx ? 'bg-white border-l-4 border-l-blue-500 shadow-sm' : 'border-l-4 border-l-transparent bg-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${activeEntityIndex === idx ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'}`}>
                        <Database size={16} />
                    </div>
                    <span className={`font-display font-semibold text-sm ${activeEntityIndex === idx ? 'text-slate-800' : 'text-slate-600'}`}>
                        {entity.name}
                    </span>
                </div>
                {activeEntityIndex === idx && <CheckCircle2 size={18} className="text-blue-500" />}
              </button>
            ))}
          </div>
          
          <div className="mt-6 bg-amber-50/80 backdrop-blur border border-amber-200/60 rounded-xl p-5 shadow-sm">
             <h4 className="text-amber-800 font-display font-bold text-sm mb-2">{t.note_title}</h4>
             <p className="text-amber-900/80 text-xs leading-relaxed font-medium" dangerouslySetInnerHTML={{__html: t.note_desc}}>
             </p>
          </div>
        </div>

        {/* Fields Table */}
        <div className="w-3/4">
          <div className="glass-panel rounded-2xl shadow-card p-8 min-h-[600px] relative">
            <div className="mb-8 pb-6 border-b border-slate-200/60 flex justify-between items-start">
                <div>
                    <h3 className="text-3xl font-display font-bold text-slate-800 mb-2">{entities[activeEntityIndex].name}</h3>
                    <p className="text-slate-500 text-sm font-medium">{entities[activeEntityIndex].description}</p>
                </div>
                <span className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200">
                    ID: {activeEntityIndex + 10}
                </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50/80 text-slate-500 uppercase tracking-wider font-bold text-xs">
                  <tr>
                    <th className="py-4 px-6">{t.table.name}</th>
                    <th className="py-4 px-6">{t.table.type}</th>
                    <th className="py-4 px-6">{t.table.example}</th>
                    <th className="py-4 px-6">{t.table.attrs}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {entities[activeEntityIndex].fields.map((field, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-mono text-xs text-slate-700 font-medium">{field.name}</td>
                      <td className="py-4 px-6">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">
                          {field.type}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-500 italic font-light">{field.example}</td>
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-2">
                          {field.flags.map((flag) => (
                            <div key={flag} className={`flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full border font-bold uppercase tracking-wide transition-transform hover:scale-105 ${
                              flag.includes('export') ? 'bg-orange-50 text-orange-600 border-orange-200' :
                              flag.includes('filter') ? 'bg-purple-50 text-purple-600 border-purple-200' :
                              'bg-blue-50 text-blue-600 border-blue-200'
                            }`}>
                              {flag.includes('export') ? <Globe size={10} /> : 
                               flag.includes('filter') ? <Filter size={10} /> : <Tag size={10} />}
                              {flag.replace(/_/g, ' ')}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 flex justify-between items-center text-xs text-slate-400 font-medium">
               <div className="flex items-center gap-2">
                 <Search size={14} />
                 <span>{t.searchable}</span>
               </div>
               <div>
                 {entities[activeEntityIndex].fields.length} {t.fields_defined}
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMDataView;