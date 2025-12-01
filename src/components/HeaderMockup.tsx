import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Menu, User, Search, X, Smartphone, Monitor } from 'lucide-react';
import { TRANSLATIONS } from '@/constants/translations';
import { Language } from '@/types';

interface Props {
    language: Language;
}

const HeaderMockup: React.FC<Props> = ({ language }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language].ux;

  // Simulate scroll effect for the mockup
  useEffect(() => {
    const timer = setInterval(() => {
      setScrolled(s => !s);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-10 h-full overflow-y-auto">
        <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight">{t.title}</h2>
                <p className="text-slate-500 mt-2 text-lg font-light">{t.subtitle}</p>
            </div>
            <div className="bg-white p-1.5 rounded-xl border border-slate-200 flex gap-1 shadow-sm">
                <button 
                    onClick={() => { setIsMobile(false); setMobileMenuOpen(false); }}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold premium-transition ${!isMobile ? 'bg-slate-900 text-white shadow-md transform scale-105' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    <Monitor size={16} /> {t.desktop}
                </button>
                <button 
                    onClick={() => setIsMobile(true)}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold premium-transition ${isMobile ? 'bg-slate-900 text-white shadow-md transform scale-105' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    <Smartphone size={16} /> {t.mobile}
                </button>
            </div>
        </div>

        <div className="flex justify-center py-4">
            <div className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl ring-8 ring-slate-900 border-4 border-slate-800 ${
                isMobile ? 'w-[390px] h-[750px]' : 'w-full max-w-5xl h-[600px]'
            }`}>
                {/* Screen Glare Reflection */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-50"></div>

                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[10s] hover:scale-105">
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                {/* Simulation Controls */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-4 py-2 rounded-full z-50 pointer-events-none font-mono">
                    <span className="opacity-70">STATUS:</span> {scrolled ? t.scrolled : t.top}
                </div>

                {/* The Header Component */}
                <header 
                    className={`absolute top-0 left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 ${
                        scrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'
                    }`}
                >
                    {/* Top Bar (Desktop Only) */}
                    {!isMobile && !scrolled && (
                        <div className="container mx-auto px-8 border-b border-white/20 pb-3 mb-3 flex justify-between text-xs text-white/90 tracking-wide animate-in fade-in slide-in-from-top-2 duration-500">
                            <div className="flex gap-6 font-medium">
                                <span className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={12} /> +66 81 234 5678</span>
                                <span className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={12} /> info@roof21.co.th</span>
                            </div>
                            <div className="flex gap-6 font-bold">
                                <span className="cursor-pointer text-emerald-400">EN</span>
                                <span className="cursor-pointer hover:text-white opacity-70 hover:opacity-100">THB</span>
                            </div>
                        </div>
                    )}

                    {/* Main Navbar */}
                    <div className={`container mx-auto ${isMobile ? 'px-5' : 'px-8'} flex justify-between items-center transition-all duration-500`}>
                        {/* Logo */}
                        <div className="text-xl md:text-2xl font-bold tracking-widest uppercase flex items-center gap-3 relative z-50">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif shadow-lg transition-colors duration-500 ${scrolled || (isMobile && mobileMenuOpen) ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-900'}`}>R</div>
                            <span className={`font-display tracking-[0.2em] transition-colors duration-500 ${scrolled || (isMobile && mobileMenuOpen) ? 'text-slate-900' : 'text-white'}`}>Roof21</span>
                        </div>

                        {/* Desktop Menu */}
                        {!isMobile && (
                            <nav className={`flex gap-8 text-sm font-semibold tracking-wide ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                                {['Properties', 'Buy', 'Rent', 'New Devs', 'Guide'].map((item) => (
                                    <a 
                                        key={item} 
                                        href="#" 
                                        className={`relative group py-2 hover:text-emerald-500 transition-colors`}
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                                    </a>
                                ))}
                            </nav>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-5 relative z-50">
                            {!isMobile && (
                                <button className={`${scrolled ? 'text-slate-800' : 'text-white'} hover:text-emerald-500 transition-colors hover:scale-110 active:scale-95 duration-200`}>
                                    <Search size={20} strokeWidth={2.5} />
                                </button>
                            )}
                            
                            {!isMobile && (
                                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-glow shadow-emerald-500/40">
                                    List With Us
                                </button>
                            )}

                            {isMobile && (
                                <button 
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className={`${scrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'} transition-colors p-2 hover:scale-110 active:scale-90 duration-200`}
                                >
                                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            )}
                        </div>
                    </div>
                </header>

                {/* Mobile Menu Overlay */}
                {isMobile && (
                    <div className={`absolute inset-0 bg-white/95 backdrop-blur-xl z-30 pt-32 px-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                        <nav className="flex flex-col gap-6 text-2xl font-display font-bold text-slate-900">
                            {['Properties', 'Buy', 'Rent', 'New Developments', 'Guides', 'List With Us'].map((item, idx) => (
                                <div key={item} className="border-b border-slate-100 pb-4 flex justify-between items-center group cursor-pointer" style={{transitionDelay: `${idx * 50}ms`, opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.4s ease-out'}}>
                                    <span className="group-hover:text-emerald-600 transition-colors group-hover:translate-x-2 duration-300">{item}</span>
                                    <ChevronDown size={20} className="text-slate-300 -rotate-90" />
                                </div>
                            ))}
                        </nav>
                        <div className="mt-10 flex flex-col gap-4" style={{ opacity: mobileMenuOpen ? 1 : 0, transition: 'opacity 0.5s ease-out 0.3s' }}>
                            <button className="w-full bg-emerald-600 text-white py-4 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/30 uppercase tracking-widest active:scale-[0.98] transition-transform">Contact Us</button>
                            <button className="w-full bg-slate-50 text-slate-800 py-4 rounded-xl text-sm font-bold border border-slate-200 uppercase tracking-widest hover:bg-slate-100 active:scale-[0.98] transition-transform">Login</button>
                        </div>
                    </div>
                )}

                {/* Hero Text */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
                    <h1 className={`${isMobile ? 'text-4xl' : 'text-7xl'} font-display font-bold mb-6 drop-shadow-xl whitespace-pre-line leading-tight`}>
                        {t.hero_title}
                    </h1>
                    <p className={`${isMobile ? 'text-base' : 'text-xl'} font-light opacity-90 mb-10 drop-shadow-md max-w-2xl mx-auto`}>
                        {t.hero_sub}
                    </p>
                    
                    {/* Search Bar */}
                    <div className="bg-white/10 backdrop-blur-xl p-2 rounded-full inline-flex w-full max-w-lg border border-white/30 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                        <input 
                            type="text" 
                            placeholder={isMobile ? "Search..." : "Search location, project or lifestyle..."}
                            className="bg-transparent border-none text-white placeholder-white/70 outline-none px-6 py-3 w-full text-sm font-medium" 
                        />
                        <button className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 transition-all shadow-lg hover:rotate-90">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="glass-panel p-8 rounded-2xl shadow-sm border border-white/60 hover-lift">
                <h3 className="font-display font-bold text-slate-800 mb-4 text-lg">{t.behavior.title}</h3>
                <ul className="text-sm text-slate-600 list-disc ml-5 space-y-3 marker:text-emerald-500">
                    {t.behavior.items.map((item, i) => (
                        <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{__html: item}}></li>
                    ))}
                </ul>
            </div>
            <div className="glass-panel p-8 rounded-2xl shadow-sm border border-white/60 hover-lift">
                <h3 className="font-display font-bold text-slate-800 mb-4 text-lg">{t.micro.title}</h3>
                <div className="flex gap-6 mb-6 items-center">
                   <div className="bg-white border border-slate-200 px-6 py-3 rounded-full relative group cursor-pointer overflow-hidden shadow-sm active:scale-95 transition-transform">
                       <span className="relative z-10 text-xs font-bold text-slate-700 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">Hover Me</span>
                       <div className="absolute inset-0 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                   </div>
                   <span className="text-xs text-slate-500 font-mono">← {t.micro.btn_effect}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-xs text-slate-500 font-mono">
                    font-family: 'Outfit', sans-serif; <br/>
                    backdrop-filter: blur(16px);
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeaderMockup;