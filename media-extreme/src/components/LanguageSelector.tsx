'use client';

import { usePathname } from 'next/navigation';

interface LanguageSelectorProps {
  currentLang: string;
}

const languages = [
  { code: 'en', flag: '🇺🇸' },
  { code: 'es', flag: '🇪🇸' },
  { code: 'pt', flag: '🇧🇷' }
];

export default function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const pathname = usePathname();
  
  // Función para cambiar de idioma manteniendo la URL actual
  const getTranslatedPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const pathWithoutLang = pathname.replace(new RegExp(`^/${currentLang}`), '');
    return `/${targetLang}${pathWithoutLang}`;
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <button
          type="button"
          className="cursor-pointer flex items-center justify-between gap-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-300 min-w-[80px]"
          aria-expanded="true"
          aria-haspopup="true"
          aria-label="Change Language"
        >
          <div className="flex items-center gap-1.5">
            <i className='bx bx-globe text-base md:text-lg text-gray-600'></i>
            <span className="uppercase text-xs md:text-sm font-bold text-gray-800">{currentLanguage.code}</span>
          </div>
          <i className='bx bx-chevron-down text-gray-400 group-hover:rotate-180 transition-transform duration-300'></i>
        </button>
        <ul className="absolute right-0 sm:left-1/2 sm:-translate-x-1/2 hidden group-hover:block w-fit bg-white rounded-lg shadow-lg border border-gray-100 mt-1 py-1 z-50">
          {languages.map((lang) => (
            <li key={lang.code} className="py-1 px-2">
              <a
                className={`flex items-center p-2 text-sm hover:bg-gray-100 rounded-lg uppercase transition-colors ${
                  currentLang === lang.code ? "font-semibold text-primary" : "text-gray-700"
                }`}
                href={getTranslatedPath(lang.code)}
              >
                <span className="size-5 mr-2 inline-flex items-center justify-center text-lg">{lang.flag}</span> 
                {lang.code}
                {currentLang === lang.code && (
                  <span className="ml-2 inline-flex size-2 rounded-full bg-emerald-400"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
