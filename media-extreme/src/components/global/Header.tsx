'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSelector from "@/src/components/global/LanguageSelector";

interface HeaderProps {
  lang: string;
  dict?: any;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const homeText = dict?.header?.links?.home || 'Home';
  const galleryText = dict?.header?.links?.gallery || 'Gallery';
  const videosText = dict?.header?.links?.videos || 'Videos';
  const pressKitText = dict?.header?.links?.pressKit || 'Press Kit';
  const agenciesText = dict?.header?.links?.agencies || 'Agencies';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#002b11]/90 backdrop-blur-md transition-all duration-300 shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* LOGO */}
        <Link 
          href={`/${lang}`} 
          className="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
          onClick={() => setIsOpen(false)}
        >
          <Image 
            src="/icon/logos/logo-ext-adventuring.svg" 
            alt="Extreme Adventuring" 
            width={180} 
            height={50}  
            className="h-10 w-auto object-contain" 
            priority 
          />
        </Link>

        {/* NAVEGACIÓN ESCRITORIO (Centrada) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href={`/${lang}`} 
            className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8ebf25] after:transition-all hover:after:w-full"
          >
            {homeText}
          </Link>
          <Link 
            href={`/${lang}/agencies`} 
            className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8ebf25] after:transition-all hover:after:w-full"
          >
            {agenciesText}
          </Link>
          <Link 
            href={`/${lang}/gallery`} 
            className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8ebf25] after:transition-all hover:after:w-full"
          >
            {galleryText}
          </Link>
          <Link 
            href={`/${lang}/videos`} 
            className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8ebf25] after:transition-all hover:after:w-full"
          >
            {videosText}
          </Link>
          <Link 
            href={`/${lang}/press-kit`} 
            className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8ebf25] after:transition-all hover:after:w-full"
          >
            {pressKitText}
          </Link>
        </nav>

        {/* ACCIONES (Derecha) */}
        <div className="flex items-center space-x-4">
          <LanguageSelector currentLang={lang} />
          
          {/* BOTÓN MENÚ MÓVIL */}
          <button 
            className="flex h-10 w-10 items-center justify-center text-white md:hidden focus:outline-none rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'} text-3xl`}></i>
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div 
        className={`md:hidden border-t border-white/5 bg-[#002b11]/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-6">
          <Link 
            href={`/${lang}`} 
            className="text-base font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-between" 
            onClick={() => setIsOpen(false)}
          >
            <span>{homeText}</span>
            <i className="bx bx-chevron-right text-lg text-neutral-500"></i>
          </Link>
          <Link 
            href={`/${lang}/agencies`} 
            className="text-base font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-between" 
            onClick={() => setIsOpen(false)}
          >
            <span>{agenciesText}</span>
            <i className="bx bx-chevron-right text-lg text-neutral-500"></i>
          </Link>
          <Link 
            href={`/${lang}/gallery`} 
            className="text-base font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-between" 
            onClick={() => setIsOpen(false)}
          >
            <span>{galleryText}</span>
            <i className="bx bx-chevron-right text-lg text-neutral-500"></i>
          </Link>
          <Link 
            href={`/${lang}/videos`} 
            className="text-base font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-between" 
            onClick={() => setIsOpen(false)}
          >
            <span>{videosText}</span>
            <i className="bx bx-chevron-right text-lg text-neutral-500"></i>
          </Link>
          <Link 
            href={`/${lang}/press-kit`} 
            className="text-base font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-between" 
            onClick={() => setIsOpen(false)}
          >
            <span>{pressKitText}</span>
            <i className="bx bx-chevron-right text-lg text-neutral-500"></i>
          </Link>
        </nav>
      </div>
    </header>
  );
}
