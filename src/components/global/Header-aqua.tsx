'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSelector from "@/src/components/global/LanguageSelector";

interface HeaderProps {
  lang: string;
  dict?: any;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const homeText = dict?.header?.links?.home || 'Home';
  const agenciesText = dict?.header?.links?.agencies || 'Agencies';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#002b11]/90 backdrop-blur-md transition-all duration-300 shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* ESPACIO VACÍO O LOGO ALTERNATIVO (Se removió el logo de Extreme) */}
        <div></div>

        <nav className="hidden md:flex items-center space-x-8">
        </nav>
        
        <div className="flex items-center space-x-4">
          <LanguageSelector currentLang={lang} />
        </div>
      </div>
    </header>
  );
}