import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';
import { generateArchitecturalInsight } from '../services/geminiService';
import { ViewState, ChatMessage, Language } from '../types';

interface AIChatProps {
  currentView: ViewState;
  language: Language;
}

const AIChat: React.FC<AIChatProps> = ({ currentView, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
     let text = '';
     if (language === 'en') {
        text = `Hello! I am the Roof21 System Architect AI. I see you are looking at the **${currentView.replace(/_/g, ' ')}**. Ask me anything about the implementation details!`;
     } else {
        text = `Ahoj! Som AI Architekt pre systém Roof21. Vidím, že si prezeráš **${currentView.replace(/_/g, ' ')}**. Opýtaj sa ma čokoľvek na detaily implementácie!`;
     }
     
     if (messages.length === 0 || messages[0].role === 'model') {
        setMessages([{
            id: `welcome-${Date.now()}`,
            role: 'model',
            text: text,
            timestamp: new Date()
        }]);
     }
  }, [currentView, language]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateArchitecturalInsight(input, currentView, language);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window with Spring Animation */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-slate-200 flex flex-col mb-4 overflow-hidden origin-bottom-right animate-in slide-in-from-bottom-5 zoom-in-95 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-emerald-400 animate-pulse-slow" />
              <span className="font-bold text-sm">Architect AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-slate-300 transition-colors">
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[85%] text-xs p-3 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                  msg.role === 'user'
                    ? 'bg-slate-800 text-white ml-auto rounded-br-none shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 mr-auto rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                 <div className="bg-white border border-slate-200 p-3 rounded-xl rounded-bl-none shadow-sm flex gap-2 items-center">
                    <div className="sleek-loader"></div>
                    <span className="text-xs text-slate-400 italic">Thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={language === 'en' ? "Ask about this view..." : "Opýtaj sa na tento pohľad..."}
              className="flex-1 text-xs bg-slate-100 border-none rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-300 text-white p-2 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-glow"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-glow group relative active:scale-95"
        >
          <Bot size={24} />
          <span className="absolute right-0 top-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChat;