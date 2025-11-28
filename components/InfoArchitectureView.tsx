import React from 'react';
import { Layout, FileText, FolderTree, BookOpen, PenTool, Magnet } from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';
import { getInfoArchData } from '../constants';

interface Props {
    language: Language;
}

const InfoArchitectureView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language].info_arch;
  const { slovakArticles, contentPlanLabel } = getInfoArchData(language);

  return (
    <div className="p-8 h-full bg-slate-50 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
        <p className="text-slate-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-12">
        {/* Site 1: Slovak Investment */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center gap-3">
                <div className="bg-blue-200 p-2 rounded text-blue-700">
                    <BookOpen size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">thajsko-nehnutelnosti.sk</h3>
                    <p className="text-xs text-blue-600">Educational & Investment Focus (SK)</p>
                </div>
            </div>
            
            <div className="p-6 flex-1">
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">{t.sitemap}</h4>
                <ul className="space-y-2 text-sm text-slate-700 ml-4 border-l-2 border-slate-100 pl-4 mb-8">
                    <li className="font-semibold">Home (Landing Page: "Investujte v Thajsku")</li>
                    <li>
                        <span className="font-semibold">Investičný Blog (Categories)</span>
                        <ul className="ml-4 mt-1 space-y-1 text-xs text-slate-500">
                            <li>Návratnosť (ROI)</li>
                            <li>Lokality (Phuket, Samui)</li>
                            <li>Právne rady</li>
                        </ul>
                    </li>
                    <li className="font-semibold">Top Projekty (Curated List)</li>
                    <li>O Nás (Our Team)</li>
                    <li>Kontakt (Bitrix Form)</li>
                </ul>

                <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider flex items-center gap-2">
                        <PenTool size={12} />
                        {contentPlanLabel}
                    </h4>
                    <div className="space-y-2 h-64 overflow-y-auto pr-2 custom-scrollbar">
                        {slovakArticles.map((article, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-100 text-xs hover:bg-white hover:shadow-sm transition-all">
                                <span className="font-medium text-slate-700 truncate max-w-[200px]" title={article.title}>{article.title}</span>
                                <span className={`px-2 py-0.5 rounded text-[10px] border ${
                                    article.type === 'Legal' ? 'bg-red-50 text-red-600 border-red-100' :
                                    article.type === 'Finance' ? 'bg-green-50 text-green-600 border-green-100' :
                                    'bg-slate-100 text-slate-500 border-slate-200'
                                }`}>{article.type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Site 2: International Catalog */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
             <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center gap-3">
                <div className="bg-indigo-200 p-2 rounded text-indigo-700">
                    <Layout size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">roof21.co.th</h3>
                    <p className="text-xs text-indigo-600">Full Catalog & Search (EN)</p>
                </div>
            </div>

            <div className="p-6 flex-1">
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">{t.sitemap}</h4>
                <ul className="space-y-2 text-sm text-slate-700 ml-4 border-l-2 border-slate-100 pl-4 mb-8">
                    <li className="font-semibold">Home (Search Hero)</li>
                    <li>
                        <span className="font-semibold">Properties (CPT Archive)</span>
                        <ul className="ml-4 mt-1 space-y-1 text-xs text-slate-500">
                            <li>Taxonomy: Location (Phuket, Bangkok...)</li>
                            <li>Taxonomy: Type (Villa, Condo...)</li>
                            <li>Taxonomy: Status (For Sale, Rent)</li>
                        </ul>
                    </li>
                    <li className="font-semibold">Guides (Area, Tax, Buying)</li>
                    <li>Services (Property Management)</li>
                    <li>List Your Property (Vendor Form)</li>
                </ul>

                 <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider flex items-center gap-2">
                        <FolderTree size={12} />
                        {t.dynamic}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-indigo-50/50 p-3 rounded border border-indigo-100">
                            <span className="block text-xs font-bold text-indigo-700 mb-1">Properties</span>
                            <p className="text-[10px] text-slate-600">Synced from Bitrix24. Includes Gallery, Price, Map, Features.</p>
                        </div>
                        <div className="bg-indigo-50/50 p-3 rounded border border-indigo-100">
                            <span className="block text-xs font-bold text-indigo-700 mb-1">Developments</span>
                            <p className="text-[10px] text-slate-600">Parent entity for multiple units. Master plan images.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider flex items-center gap-2">
                        <Magnet size={12} />
                        {t.lead_magnet}
                    </h4>
                    <div className="bg-orange-50 p-3 rounded border border-orange-100 flex items-center gap-3">
                         <FileText size={24} className="text-orange-400"/>
                         <div>
                            <span className="block text-xs font-bold text-orange-800">Thailand Property Investment Guide 2024.pdf</span>
                            <span className="text-[10px] text-orange-600">Trigger: Exit Intent Popup -{'>'} Bitrix CRM Form</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfoArchitectureView;