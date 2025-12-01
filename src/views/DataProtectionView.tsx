import React from 'react';
import { ShieldCheck, Lock, Cookie, Server, FileCheck } from 'lucide-react';
import { TRANSLATIONS } from '@/constants/translations';
import { Language } from '@/types';
import { getDataProtectionList } from '../constants';

interface Props {
    language: Language;
}

const DataProtectionView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language].data_protection;
  const securityChecklist = getDataProtectionList(language);

  return (
    <div className="p-8 h-full bg-slate-50 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
        <p className="text-slate-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        
        {/* Left Column: Key Principles */}
        <div className="col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-100 p-2 rounded-full">
                        <Server className="text-emerald-600" size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800">{t.minimization_title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {t.minimization_text}
                </p>
                <div className="bg-slate-50 p-3 rounded border border-slate-100 text-xs">
                    <strong>{t.minimization_rule}</strong>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                        <Cookie className="text-blue-600" size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800">{t.consent_title}</h3>
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-start gap-2">
                        <FileCheck size={16} className="text-emerald-500 mt-0.5" />
                        <span><strong>Granular Opt-in:</strong> Analytics vs. Marketing cookies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FileCheck size={16} className="text-emerald-500 mt-0.5" />
                        <span><strong>Bitrix24 CRM:</strong> "Marketing Allowed" boolean field in Contact entity.</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* Right Column: Comparison & Checklist */}
        <div className="col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
                    <h3 className="font-bold flex items-center gap-2">
                        <ShieldCheck size={18} />
                        {t.compliance_title}
                    </h3>
                </div>
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold text-xs">
                        <tr>
                            <th className="py-3 px-6">{t.table.feature}</th>
                            <th className="py-3 px-6">{t.table.gdpr}</th>
                            <th className="py-3 px-6">{t.table.pdpa}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr>
                            <td className="py-3 px-6 font-medium">Consent</td>
                            <td className="py-3 px-6">Explicit Opt-in (Strict)</td>
                            <td className="py-3 px-6">Explicit Opt-in (Similar to GDPR)</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-6 font-medium">Data Transfer</td>
                            <td className="py-3 px-6">Standard Contractual Clauses (SCC) for transfer to Thailand</td>
                            <td className="py-3 px-6">Cross-border transfer rules</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-6 font-medium">Right to Erasure</td>
                            <td className="py-3 px-6">"Right to be Forgotten" mandatory</td>
                            <td className="py-3 px-6">Subject to legal retention periods</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Lock size={18} className="text-slate-600" />
                    {t.security_title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                     {securityChecklist.map((item, i) => (
                         <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                             <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center">
                                 <div className="w-2 h-2 bg-transparent rounded-full hover:bg-emerald-500 transition-colors cursor-pointer"></div>
                             </div>
                             {item}
                         </div>
                     ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DataProtectionView;