'use client';

import { useState, useEffect, useRef } from 'react';

interface LanguageSelectorProps {
  currentLang: string;
}

const languages = [
  { code: 'en', flagCode: 'us' },
  { code: 'es', flagCode: 'mx' },
  { code: 'pt', flagCode: 'pt' }
];

export default function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (targetLang: string) => {
    document.cookie = `NEXT_LOCALE=${targetLang}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div 
      ref={dropdownRef}
      className="relative inline-block text-left"
    >
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center justify-between gap-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-300 min-w-[80px]"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Change Language"
        >
          <div className="flex items-center gap-1.5">
            <img 
              src={`https://flagcdn.com/w40/${currentLanguage.flagCode}.png`} 
              alt={currentLanguage.code}
              className="w-[20px] h-[14px] object-cover rounded-sm shadow-sm border border-slate-200/80"
            />
            <span className="uppercase text-xs md:text-sm font-bold text-gray-800">{currentLanguage.code}</span>
          </div>
          <i className={`bx bx-chevron-down text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
        </button>
        {isOpen && (
          <ul className="absolute right-0 sm:left-1/2 sm:-translate-x-1/2 block w-fit bg-white rounded-lg shadow-lg border border-gray-100 mt-1 py-1 z-50">
            {languages.map((lang) => (
              <li key={lang.code} className="py-1 px-2">
                <button
                  type="button"
                  className={`w-full flex items-center p-2 text-sm hover:bg-gray-100 rounded-lg uppercase cursor-pointer text-left transition-colors ${
                    currentLang === lang.code ? "font-semibold text-emerald-600" : "text-gray-700"
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  <img 
                    src={`https://flagcdn.com/w40/${lang.flagCode}.png`} 
                    alt={lang.code}
                    className="w-[20px] h-[14px] object-cover rounded-sm shadow-sm border border-slate-200/80 mr-2"
                  />
                  {lang.code}
                  {currentLang === lang.code && (
                    <span className="ml-2 inline-flex size-2 rounded-full bg-emerald-400"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
