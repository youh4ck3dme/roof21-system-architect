import React from 'react';
import { Globe, ArrowUpRight, Check, AlertCircle, FileJson } from 'lucide-react';
import { TRANSLATIONS } from '@/constants/translations';
import { Language } from '@/types';
import { getExportData } from '../constants';

interface Props {
    language: Language;
}

const ExportEngineView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language].export;
  const { mapping, validation } = getExportData(language);

  return (
    <div className="p-8 h-full bg-slate-50 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
        <p className="text-slate-500 mt-2">{t.subtitle}</p>
      </div>

      {/* Status Dashboard */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
            { name: 'DDProperty', format: 'XML', status: t.status.active, count: 124, last: language === 'en' ? '10 mins ago' : 'pred 10 min', color: 'emerald' },
            { name: 'FazWaz', format: 'JSON', status: t.status.active, count: 120, last: language === 'en' ? '1 hour ago' : 'pred 1 hod', color: 'blue' },
            { name: 'Hipflat', format: 'XML', status: t.status.warning, count: 98, last: language === 'en' ? '4 hours ago' : 'pred 4 hod', color: 'amber' },
            { name: 'DotProperty', format: 'XML', status: t.status.inactive, count: 0, last: language === 'en' ? 'Never' : 'Nikdy', color: 'slate' },
        ].map((portal) => (
            <div key={portal.name} className={`bg-white p-5 rounded-xl border-l-4 shadow-sm ${
                portal.color === 'emerald' ? 'border-emerald-500' : 
                portal.color === 'blue' ? 'border-blue-500' :
                portal.color === 'amber' ? 'border-amber-500' : 'border-slate-300'
            }`}>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-800">{portal.name}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                         portal.status === t.status.active ? 'bg-emerald-100 text-emerald-700' :
                         portal.status === t.status.warning ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                    }`}>{portal.status}</span>
                </div>
                <div className="flex items-end gap-2 mb-2">
                    <span className="text-2xl font-bold text-slate-700">{portal.count}</span>
                    <span className="text-xs text-slate-400 mb-1">{t.listings}</span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2">
                    <span>{portal.format} {t.feed}</span>
                    <span>{t.sync}: {portal.last}</span>
                </div>
            </div>
        ))}
      </div>

      {/* Mapping Configuration */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">{t.mapping_title}</h3>
            <button className="flex items-center gap-2 text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100 transition-colors">
                <FileJson size={14} />
                {t.view_source}
            </button>
        </div>
        <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold text-xs">
                <tr>
                    <th className="py-3 px-6">{t.table.int}</th>
                    <th className="py-3 px-6">{t.table.dd}</th>
                    <th className="py-3 px-6">{t.table.fw}</th>
                    <th className="py-3 px-6">{t.table.rule}</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {mapping.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                        <td className="py-3 px-6 font-medium text-slate-700">{row.int}</td>
                        <td className="py-3 px-6 font-mono text-xs text-purple-600 bg-purple-50/50">{row.dd}</td>
                        <td className="py-3 px-6 font-mono text-xs text-indigo-600 bg-indigo-50/50">{row.fw}</td>
                        <td className="py-3 px-6 text-xs text-slate-500 flex items-center gap-1">
                            <ArrowUpRight size={12} className="text-slate-400" />
                            {row.rule}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      {/* Validation Logic */}
      <div className="mt-8 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h4 className="font-bold text-sm text-slate-700 mb-3 flex items-center gap-2">
              <Check className="text-emerald-500" size={16} />
              {t.validation_title}
          </h4>
          <div className="grid grid-cols-2 gap-4">
              {validation.map((rule, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check size={12} className="text-emerald-500 mt-0.5" />
                      <span>{rule}</span>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ExportEngineView;