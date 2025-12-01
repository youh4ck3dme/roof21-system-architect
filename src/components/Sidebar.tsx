import React from 'react';
import { getNavItems } from '../constants';
import { TRANSLATIONS } from '@/constants/translations';
import { ViewState, Language } from '@/types';
import { Building2, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, language, onLanguageChange }) => {
  const navItems = getNavItems(language);
  const t = TRANSLATIONS[language].sidebar;

  return (
    <div className="w-72 bg-slate-900/95 backdrop-blur-xl text-white h-screen flex flex-col shrink-0 border-r border-white/5 relative overflow-hidden shadow-2xl z-20">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-48 bg-emerald-500/10 blur-3xl pointer-events-none"></div>

      <div className="p-8 flex items-center justify-between border-b border-white/5 relative z-10">
        <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2.5 rounded-xl shadow-glow transition-transform duration-500 hover:scale-105 hover:rotate-3">
                <Building2 size={24} className="text-white" />
            </div>
            <div>
                <h1 className="font-display font-bold text-xl tracking-tight text-white leading-none">{t.title}</h1>
                <p className="text-[10px] font-medium text-emerald-400 uppercase tracking-widest mt-1">{t.subtitle}</p>
            </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 relative z-10 custom-scrollbar">
        <ul className="space-y-1 px-4">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl group relative overflow-hidden premium-transition ${
                    isActive
                      ? 'bg-white/10 text-white shadow-lg border border-white/5'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white hover:pl-5 hover:translate-x-1'
                  }`}
                >
                  {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-full animate-in fade-in slide-in-from-left-1 duration-300"></div>
                  )}
                  <item.icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`premium-transition relative z-10 ${isActive ? 'text-emerald-400 scale-105' : 'text-slate-500 group-hover:text-emerald-300'}`}
                  />
                  <div className="text-left relative z-10 premium-transition">
                    <span className={`block font-display text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                    <span className="block text-[10px] opacity-60 truncate max-w-[150px] font-light">
                      {item.description}
                    </span>
                  </div>
                  {isActive && <ChevronRight size={14} className="ml-auto text-emerald-500/50 animate-in fade-in slide-in-from-left-2 duration-300" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-white/5 bg-slate-900/50 relative z-10">
        {/* Language Switcher */}
        <div className="flex bg-black/20 rounded-lg p-1 mb-6 border border-white/5">
            <button 
                onClick={() => onLanguageChange('en')}
                className={`flex-1 text-xs font-bold py-2 rounded-md premium-transition ${language === 'en' ? 'bg-emerald-600 text-white shadow-lg scale-[1.02]' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
            >
                🇬🇧 EN
            </button>
            <button 
                onClick={() => onLanguageChange('sk')}
                className={`flex-1 text-xs font-bold py-2 rounded-md premium-transition ${language === 'sk' ? 'bg-emerald-600 text-white shadow-lg scale-[1.02]' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
            >
                🇸🇰 SK
            </button>
        </div>

        <div className="bg-white/5 rounded-xl p-4 border border-white/5 shadow-inner">
          <p className="font-display font-semibold text-xs text-slate-300 mb-3 uppercase tracking-wider opacity-70">System Status</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{t.status_bitrix}</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online
                </span>
            </div>
            <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{t.status_sync}</span>
                <span className="flex items-center gap-1.5 text-blue-400 font-medium bg-blue-500/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Ready
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;