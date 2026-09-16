import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Check, Globe } from 'lucide-react';

export default function TopUtilityBar() {
  const [lang, setLang] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'EN', label: 'English (US/UK)', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'FR', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'DE', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
    { code: 'ES', label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'ZH', label: '中文 (Chinese)', flag: 'https://flagcdn.com/w40/cn.png' },
    { code: 'JA', label: '日本語 (Japanese)', flag: 'https://flagcdn.com/w40/jp.png' },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  // Click outside listener to close language menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white border-b border-slate-200/70 text-xs py-2 px-4 text-slate-700 select-none relative z-[100]">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-end items-center gap-y-1.5 gap-x-4 sm:space-x-6">
        <a
          href="tel:+14187670111"
          className="flex items-center space-x-1.5 hover:text-[#005288] transition-colors font-medium text-slate-600 hover:text-slate-900"
        >
          <Phone className="w-3.5 h-3.5 text-[#005288]" />
          <span>+1-418-767-0111</span>
        </a>

        <a
          href="mailto:info@ruggedmonitoring.com"
          className="flex items-center space-x-1.5 hover:text-[#005288] transition-colors font-medium text-slate-600 hover:text-slate-900"
        >
          <Mail className="w-3.5 h-3.5 text-[#005288]" />
          <span className="truncate max-w-[180px] sm:max-w-none">info@ruggedmonitoring.com</span>
        </a>

        {/* High-Z Language Dropdown Pill */}
        <div className="relative z-[100]" ref={dropdownRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 text-[11px] font-semibold transition-all duration-200 flex items-center space-x-2 shadow-2xs focus:outline-none cursor-pointer group"
          >
            <img
              src={currentLangObj.flag}
              alt={currentLangObj.code}
              className="w-4 h-3 rounded-2xs object-cover shadow-3xs"
            />
            <span className="font-mono font-bold text-slate-900 group-hover:text-[#005288]">
              {currentLangObj.code}
            </span>
            <ChevronDown
              className={`w-3 h-3 text-slate-500 transition-transform duration-300 ${
                isLangOpen ? 'rotate-180 text-[#005288]' : ''
              }`}
            />
          </button>

          {/* High-Z Floating Dropdown Panel on top of Navbar */}
          {isLangOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-52 bg-white rounded-xl shadow-2xl border border-slate-200/90 p-1.5 z-[100] animate-fadeIn">
              <div className="px-2.5 py-1.5 text-[10px] font-mono text-slate-400 font-bold uppercase border-b border-slate-100 mb-1 flex items-center justify-between">
                <span>Select Region / Language</span>
                <Globe className="w-3 h-3 text-[#005288]" />
              </div>

              <div className="space-y-0.5">
                {languages.map((l) => {
                  const isSelected = l.code === lang;
                  return (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-sky-50 text-[#005288] font-bold'
                          : 'hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <img
                          src={l.flag}
                          alt={l.code}
                          className="w-4.5 h-3 rounded-2xs object-cover shadow-3xs flex-shrink-0"
                        />
                        <span className="text-[11px]">{l.label}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#005288] flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
