'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';

interface HomeContentProps {
  lang: string;
  dict: any;
}

export default function HomeContent({ lang, dict }: HomeContentProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-7xl">
          <div className="flex items-center">
            <a href="#" onClick={(e) => scrollTo(e, 'highlights')}>
              <Image src="/icon/logo-ext-adventuring.svg" alt="Extreme Adventuring" width={250} height={60} className="w-auto h-10 md:h-12 hover:scale-105 transition-transform duration-300" priority />
            </a>
          </div>

          <nav className="hidden md:flex gap-8 items-center bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-gray-200/50 shadow-sm">
            <a href="#highlights" onClick={(e) => scrollTo(e, 'highlights')} className="text-sm font-semibold text-gray-700 hover:text-[#2c6748] transition-colors">{dict.nav.highlights}</a>
            <a href="#products" onClick={(e) => scrollTo(e, 'products')} className="text-sm font-semibold text-gray-700 hover:text-[#2c6748] transition-colors">{dict.nav.products}</a>
            <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="text-sm font-semibold text-gray-700 hover:text-[#2c6748] transition-colors">{dict.nav.faq}</a>
          </nav>
          
          <div className="flex items-center">
            <LanguageSelector currentLang={lang} />
          </div>
        </div>
      </header>

      {/* 2. HIGHLIGHTS (Hero + Cards) */}
      <section id="highlights" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(at 0% 0%, rgba(142, 191, 37, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(44, 103, 72, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 144, 0, 0.1) 0px, transparent 50%)' }}></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {dict.highlights.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            {dict.highlights.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/80 backdrop-blur border border-gray-200 p-8 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#8ebf25]/20 flex items-center justify-center text-[#2c6748] text-2xl mb-4">
                <i className='bx bx-image-alt'></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dict.highlights.cards.photos.title}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.highlights.cards.photos.desc}</p>
            </div>

            <div className="bg-white/80 backdrop-blur border border-gray-200 p-8 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#8ebf25]/20 flex items-center justify-center text-[#2c6748] text-2xl mb-4">
                <i className='bx bx-video'></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dict.highlights.cards.videos.title}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.highlights.cards.videos.desc}</p>
            </div>

            <div className="bg-white/80 backdrop-blur border border-gray-200 p-8 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#8ebf25]/20 flex items-center justify-center text-[#2c6748] text-2xl mb-4">
                <i className='bx bxs-file-pdf'></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dict.highlights.cards.factsheets.title}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.highlights.cards.factsheets.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTOS */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{dict.products.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden relative">
                <img src="/img/atv_adventure.png" alt={dict.products.atv} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#2c6748]">TOUR</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{dict.products.atv}</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-[#8ebf25]/20 flex items-center justify-center text-[#2c6748] mr-4"><i className='bx bxs-file-pdf text-xl'></i></div>
                    <span className="font-semibold text-gray-800 group-hover:text-[#2c6748] transition-colors">{dict.products.btn_pdf}</span>
                  </a>
                  <a href="#" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4"><i className='bx bxl-dropbox text-xl'></i></div>
                    <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{dict.products.btn_photos}</span>
                  </a>
                  <a href="#" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4"><i className='bx bx-video text-xl'></i></div>
                    <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{dict.products.btn_videos}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt={dict.products.puerto_morelos} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#2c6748]">EXPERIENCE</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{dict.products.puerto_morelos}</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-[#8ebf25]/20 flex items-center justify-center text-[#2c6748] mr-4"><i className='bx bxs-file-pdf text-xl'></i></div>
                    <span className="font-semibold text-gray-800 group-hover:text-[#2c6748] transition-colors">{dict.products.btn_pdf}</span>
                  </a>
                  <a href="#" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4"><i className='bx bxl-dropbox text-xl'></i></div>
                    <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{dict.products.btn_photos}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREGUNTAS (FAQ) */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{dict.faq.title}</h2>
          
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-2xl shadow-sm open:shadow-md transition-all">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-800 list-none outline-none">
                {dict.faq.q1.q}
                <span className="transition group-open:rotate-180">
                  <i className='bx bx-chevron-down text-2xl text-gray-400'></i>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {dict.faq.q1.a}
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-2xl shadow-sm open:shadow-md transition-all">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-800 list-none outline-none">
                {dict.faq.q2.q}
                <span className="transition group-open:rotate-180">
                  <i className='bx bx-chevron-down text-2xl text-gray-400'></i>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {dict.faq.q2.a}
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-2xl shadow-sm open:shadow-md transition-all">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-800 list-none outline-none">
                {dict.faq.q3.q}
                <span className="transition group-open:rotate-180">
                  <i className='bx bx-chevron-down text-2xl text-gray-400'></i>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {dict.faq.q3.a}
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/icon/logo-ext-adventuring.svg" alt="Logo Footer" width={180} height={40} className="w-auto h-10 grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex justify-center gap-6 mb-8 text-gray-400">
            <a href="#" className="hover:text-[#2c6748] transition-colors"><i className='bx bxl-facebook-circle text-3xl'></i></a>
            <a href="#" className="hover:text-[#2c6748] transition-colors"><i className='bx bxl-instagram text-3xl'></i></a>
          </div>
          <p className="text-gray-500 font-medium">{dict.footer.copyright}</p>
          <p className="text-sm text-gray-400 mt-2 hover:text-[#ff9000] cursor-pointer transition-colors">{dict.footer.support}</p>
        </div>
      </footer>
    </>
  );
}
