import React from 'react';
import { User, Search, MessageSquare, Phone, FileSignature, Coins, Plane } from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';
import { getCustomerJourneySteps } from '../constants';

interface Props {
    language: Language;
}

const CustomerJourneyView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language].journey;
  const { investor, buyer } = getCustomerJourneySteps(language);

  return (
    <div className="p-8 h-full bg-slate-50 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
        <p className="text-slate-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Persona 1: Slovak Investor */}
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                    <Coins className="text-blue-600" size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-xl text-slate-800">{t.investor_title}</h3>
                    <p className="text-xs text-slate-500">{t.investor_goal}</p>
                </div>
            </div>

            <div className="relative border-l-2 border-blue-200 ml-6 space-y-8 pl-8 pb-4">
                {investor.map((step, i) => (
                    <div key={i} className="relative">
                        <div className="absolute -left-[41px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">
                            {i + 1}
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-1 block">{step.stage}</span>
                            <h4 className="font-bold text-slate-800 text-sm mb-2">{step.action}</h4>
                            <div className="flex flex-col gap-1 text-xs text-slate-500">
                                <span className="flex items-center gap-1"><Search size={10} /> {step.touch}</span>
                                <span className="flex items-center gap-1 font-semibold text-slate-400">{t.system}: {step.sys}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Persona 2: International Buyer */}
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                    <Plane className="text-indigo-600" size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-xl text-slate-800">{t.buyer_title}</h3>
                    <p className="text-xs text-slate-500">{t.buyer_goal}</p>
                </div>
            </div>

            <div className="relative border-l-2 border-indigo-200 ml-6 space-y-8 pl-8 pb-4">
                {buyer.map((step, i) => (
                    <div key={i} className="relative">
                        <div className="absolute -left-[41px] top-0 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">
                            {i + 1}
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 mb-1 block">{step.stage}</span>
                            <h4 className="font-bold text-slate-800 text-sm mb-2">{step.action}</h4>
                            <div className="flex flex-col gap-1 text-xs text-slate-500">
                                <span className="flex items-center gap-1"><MessageSquare size={10} /> {step.touch}</span>
                                <span className="flex items-center gap-1 font-semibold text-slate-400">{t.system}: {step.sys}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerJourneyView;