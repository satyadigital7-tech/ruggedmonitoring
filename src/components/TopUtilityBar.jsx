import React, { useState } from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';

export default function TopUtilityBar() {
  const [lang, setLang] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'EN', label: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
    { code: 'FR', label: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
    { code: 'DE', label: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' },
    { code: 'ES', label: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
  ];

  const currentFlag = languages.find((l) => l.code === lang)?.flag || 'https://flagcdn.com/w20/gb.png';

  return (
    <div className="bg-white border-b border-slate-100 text-xs py-2 px-4 text-slate-700 select-none relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-end items-center gap-y-1 gap-x-4 sm:space-x-6">
        <a
          href="tel:+14187670111"
          className="flex items-center space-x-1.5 hover:text-[#005288] transition-colors font-medium"
        >
          <Phone className="w-3.5 h-3.5 text-slate-600" />
          <span>+1-418-767-0111</span>
        </a>
        <a
          href="mailto:info@ruggedmonitoring.com"
          className="flex items-center space-x-1.5 hover:text-[#005288] transition-colors font-medium"
        >
          <Mail className="w-3.5 h-3.5 text-slate-600" />
          <span className="truncate max-w-[180px] sm:max-w-none">info@ruggedmonitoring.com</span>
        </a>

        {/* Language dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center space-x-1.5 hover:text-[#005288] font-semibold pl-1 sm:pl-2 focus:outline-none"
          >
            <img
              src={currentFlag}
              width="16"
              height="12"
              alt={lang}
              className="rounded-xs shadow-2xs inline-block"
            />
            <span className="text-[11px] font-bold">{lang}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {isLangOpen && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsLangOpen(false);
                  }}
                  className="w-full flex items-center space-x-2 px-3 py-1.5 text-left text-xs hover:bg-slate-50 transition-colors"
                >
                  <img src={l.flag} width="16" height="12" alt={l.label} className="rounded-xs" />
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
