import React from 'react';
import { Presentation, Clock, Play, MessageSquare, PieChart, ExternalLink, CheckCircle } from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';

interface Props {
    language: Language;
}

const DemoScriptView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language].demo;

  return (
    <div className="p-8 h-full bg-slate-50 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
        <p className="text-slate-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 pl-8 pb-12">
        
        {/* Intro */}
        <div className="relative">
             <div className="absolute -left-[43px] top-0 w-8 h-8 bg-slate-900 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-lg">00</div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg text-slate-800">{t.intro_title}</h3>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock size={12} />
                        <span>2 mins</span>
                    </div>
                </div>
                <p className="text-sm text-slate-600 italic mb-4">{t.intro_text}</p>
                <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-500 font-medium">Concept</span>
                    <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-500 font-medium">Big Picture</span>
                </div>
             </div>
        </div>

        {/* Scene 1: The Customer */}
        <div className="relative">
             <div className="absolute -left-[43px] top-0 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-lg">01</div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg text-slate-800">{t.customer_title}</h3>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock size={12} />
                        <span>4 mins</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-sm text-slate-700 mb-2 flex items-center gap-2">
                            <ExternalLink size={14} /> Show: roof21.co.th
                        </h4>
                        <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                            <li>Open Homepage. Search "Phuket Villa".</li>
                            <li>Show fast loading & premium design.</li>
                            <li><strong>Action:</strong> Fill out the "Inquire" form as 'John Doe'.</li>
                        </ul>
                    </div>
                     <div className="bg-blue-50 p-3 rounded text-xs text-blue-800">
                        <strong>Talking Point:</strong> "Look how easy it is for a client. But more importantly, watch what happens next instantly."
                    </div>
                </div>
             </div>
        </div>

        {/* Scene 2: The Agent (Bitrix) */}
        <div className="relative">
             <div className="absolute -left-[43px] top-0 w-8 h-8 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-lg">02</div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg text-slate-800">{t.control_title}</h3>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock size={12} />
                        <span>5 mins</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-sm text-slate-700 mb-2 flex items-center gap-2">
                            <MessageSquare size={14} /> Show: CRM Kanban
                        </h4>
                        <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                            <li>See 'John Doe' appear in "New Lead" stage.</li>
                            <li>Show the <strong>automatic email</strong> sent to John.</li>
                            <li>Show the <strong>Task</strong> created for the Sales Manager.</li>
                            <li>Open "Properties" tab -{'>'} Show "Villa Azure".</li>
                        </ul>
                    </div>
                     <div className="bg-emerald-50 p-3 rounded text-xs text-emerald-800">
                        <strong>Talking Point:</strong> "No leads are lost. The system notifies us. We see exactly what they looked at. The property data lives here, not on the website."
                    </div>
                </div>
             </div>
        </div>

         {/* Scene 3: The Syndication */}
        <div className="relative">
             <div className="absolute -left-[43px] top-0 w-8 h-8 bg-orange-500 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-lg">03</div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg text-slate-800">{t.auto_title}</h3>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock size={12} />
                        <span>3 mins</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-sm text-slate-700 mb-2 flex items-center gap-2">
                            <PieChart size={14} /> Show: Export Dashboard
                        </h4>
                        <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                            <li>Toggle "Export to DDProperty" on the Villa.</li>
                            <li>Explain this pushes data to 5 portals automatically.</li>
                            <li>Briefly show Analytics Report (Sales Funnel).</li>
                        </ul>
                    </div>
                     <div className="bg-orange-50 p-3 rounded text-xs text-orange-800">
                        <strong>Talking Point:</strong> "We enter data once. It updates the websites and the portals. We save hours of admin work every week."
                    </div>
                </div>
             </div>
        </div>

      </div>

      {/* Slide Visual */}
      <div className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20"></div>
        
        <div className="relative z-10 text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{t.impact_title}</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-8">
             <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">{t.impact_1.t}</h4>
                <p className="text-xs text-slate-300">{t.impact_1.d}</p>
             </div>

             <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
                    <Clock size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">{t.impact_2.t}</h4>
                <p className="text-xs text-slate-300">{t.impact_2.d}</p>
             </div>

             <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center mb-4">
                    <PieChart size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">{t.impact_3.t}</h4>
                <p className="text-xs text-slate-300">{t.impact_3.d}</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default DemoScriptView;