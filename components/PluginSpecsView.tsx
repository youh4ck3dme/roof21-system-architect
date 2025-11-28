import React from 'react';
import { Database, ArrowRight, RefreshCw, FileCode, Settings, Server } from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';
import { getPluginSpecsData } from '../constants';

interface Props {
    language: Language;
}

const PluginSpecsView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language].plugin;
  const { syncSteps, mappingList, errorList } = getPluginSpecsData(language);

  return (
    <div className="p-8 h-full bg-slate-50 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
        <p className="text-slate-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* Sync Flow */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <RefreshCw className="text-blue-500" size={20}/>
                {t.sync_title}
            </h3>
            <div className="flex items-center justify-between bg-slate-50 p-6 rounded-lg border border-slate-100 relative">
                <div className="text-center z-10">
                    <div className="bg-white p-3 rounded-lg border border-emerald-200 shadow-sm mb-2">
                        <Server className="text-emerald-600 mx-auto" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{t.nodes.api}</span>
                    <span className="block text-[10px] text-slate-400">{syncSteps.api}</span>
                </div>

                <div className="flex-1 px-4 flex flex-col items-center">
                    <div className="h-0.5 w-full bg-slate-300 relative">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                            {syncSteps.cron}
                         </div>
                    </div>
                    <ArrowRight className="text-slate-300 mt-[-9px]" />
                </div>

                <div className="text-center z-10">
                     <div className="bg-slate-800 p-3 rounded-lg shadow-sm mb-2">
                        <Settings className="text-white mx-auto animate-spin-slow" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{t.nodes.core}</span>
                    <span className="block text-[10px] text-slate-400">{syncSteps.core}</span>
                </div>

                <div className="flex-1 px-4 flex flex-col items-center">
                     <div className="h-0.5 w-full bg-slate-300"></div>
                     <ArrowRight className="text-slate-300 mt-[-9px]" />
                </div>

                <div className="text-center z-10">
                    <div className="bg-white p-3 rounded-lg border border-blue-200 shadow-sm mb-2">
                        <Database className="text-blue-600 mx-auto" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{t.nodes.db}</span>
                    <span className="block text-[10px] text-slate-400">{syncSteps.db}</span>
                </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded text-sm">
                    <h4 className="font-semibold text-slate-700 mb-1">{t.mapping_title}</h4>
                    <ul className="list-disc ml-4 space-y-1 text-xs text-slate-500">
                        {mappingList.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{__html: item}}></li>
                        ))}
                    </ul>
                </div>
                <div className="bg-slate-50 p-3 rounded text-sm">
                     <h4 className="font-semibold text-slate-700 mb-1">{t.error_title}</h4>
                     <ul className="list-disc ml-4 space-y-1 text-xs text-slate-500">
                        {errorList.map((item, i) => (
                             <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* CPT Definition */}
        <div className="col-span-1 bg-slate-900 text-slate-300 p-6 rounded-xl shadow-sm font-mono text-xs overflow-hidden">
             <div className="flex items-center gap-2 mb-4 text-emerald-400">
                <FileCode size={16} />
                <span>{t.code_title}</span>
             </div>
             <pre className="whitespace-pre-wrap leading-relaxed opacity-80">
{`register_post_type('property', [
  'labels' => [
    'name' => 'Properties',
    'singular_name' => 'Property'
  ],
  'public' => true,
  'has_archive' => true,
  'supports' => [
    'title', 
    'editor', 
    'thumbnail', 
    'custom-fields'
  ],
  'rewrite' => ['slug' => 'property'],
  'show_in_rest' => true
]);`}
             </pre>
             <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 mb-2">// Key Meta Fields</p>
                <div className="space-y-1 text-orange-300">
                    <p>_price_thb</p>
                    <p>_bedrooms</p>
                    <p>_bathrooms</p>
                    <p>_area_sqm</p>
                    <p>_bitrix_id (Unique Key)</p>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default PluginSpecsView;