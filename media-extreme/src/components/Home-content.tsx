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

  return (
    <div className="bg-[#f4f7f5] min-h-screen text-[#1c2a4b] font-sans selection:bg-[#8ebf25]/40">
      {/* HEADER NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#002b11]/95 backdrop-blur-md shadow-lg py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center max-w-[1400px]">
          <div className="flex items-center">
            <a href="#">
              <div className="flex items-center gap-3">
                <Image src="/img/logo-extreme-adventuring.png" alt="Extreme Adventuring" width={220} height={55} className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-14 brightness-0 invert filter drop-shadow-lg'}`} priority />
              </div>
            </a>
          </div>
          
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20">
            <LanguageSelector currentLang={lang} />
          </div>
        </div>
      </header>

      {/* IMMERSIVE HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax effect */}
        <div className="absolute inset-0 z-0">
          <img src="/img/cenotes-adventuring.jpg" alt="Background" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002b11]/90 via-[#1c2a4b]/80 to-[#2c6748]/60"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl mt-20">
          <span className="inline-block py-1 px-3 rounded-full bg-[#ff9000] text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-lg shadow-[#ff9000]/30 animate-pulse">
            Media Dashboard
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl leading-tight">
            {dict.header.title.split(' ').map((word: string, i: number) => (
              <span key={i} className={i === 0 ? "text-[#8ebf25]" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-xl md:text-3xl font-light text-slate-200 max-w-3xl mx-auto opacity-90 drop-shadow-md">
            {dict.header.subtitle}
          </p>
        </div>
      </section>

      {/* FEATURES BAND (Reimagined Our Experiences) */}
      <section className="relative z-20 -mt-16 mb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-[1400px]">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-100">
            <h2 className="text-sm font-black tracking-widest uppercase text-slate-400 mb-8 text-center">{dict.experiences.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
              {dict.experiences.items.map((item: any, idx: number) => (
                <div key={idx} className={`flex flex-col items-center text-center px-4 ${idx === 0 ? '' : 'pl-8'}`}>
                  <div className="w-14 h-14 rounded-full bg-[#8ebf25]/10 flex items-center justify-center text-[#2c6748] text-2xl mb-4 group-hover:bg-[#8ebf25] transition-colors">
                    <i className={`bx ${item.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#1c2a4b] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{item.desc}</p>
                  {item.badge && (
                    <span className="mt-auto text-[10px] font-bold uppercase tracking-wider text-[#ff9000] bg-[#ff9000]/10 px-2 py-1 rounded-md">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE MEDIA GRID (Completely new Products layout) */}
      <section className="py-12 bg-[#f4f7f5] relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1c2a4b] tracking-tight">Media Kits</h2>
              <p className="text-slate-500 mt-2 text-lg">Hover over any experience to download its assets.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[350px]">
            {dict.products.items.map((prod: any, idx: number) => (
              <div key={idx} className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-black cursor-crosshair ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                
                {/* Background Image */}
                <img src={`/${prod.img}`} alt={prod.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-out" />
                
                {/* Default Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Title (Always visible at bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className={`font-black text-white leading-tight ${idx === 0 ? 'text-4xl' : 'text-2xl'}`}>{prod.title}</h3>
                  <div className="w-12 h-1 bg-[#8ebf25] mt-4 rounded-full transform origin-left transition-all duration-500 group-hover:w-full group-hover:bg-[#ff9000]"></div>
                </div>

                {/* HOVER OVERLAY: The Download Buttons */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-[#002b11]/40 p-6 z-20">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col gap-3 w-full max-w-[240px]">
                    
                    {/* PDF Button */}
                    <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group/btn bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-xl p-3 flex items-center transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-[#ea3323] flex items-center justify-center text-white text-xl shadow-lg z-10">
                        <i className='bx bxs-file-pdf'></i>
                      </div>
                      <span className="ml-4 font-bold text-white group-hover/btn:text-[#1c2a4b] z-10 transition-colors">{dict.products.btn_pdf}</span>
                    </a>

                    {/* Photos Button */}
                    <a href={prod.photos} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group/btn bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-xl p-3 flex items-center transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-[#006daf] flex items-center justify-center text-white text-xl shadow-lg z-10">
                        <i className='bx bxl-dropbox'></i>
                      </div>
                      <span className="ml-4 font-bold text-white group-hover/btn:text-[#1c2a4b] z-10 transition-colors">{dict.products.btn_photos}</span>
                    </a>

                    {/* Video Button */}
                    <a href={prod.video} download className="relative overflow-hidden group/btn bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-xl p-3 flex items-center transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-[#8ebf25] flex items-center justify-center text-white text-xl shadow-lg z-10">
                        <i className='bx bx-video'></i>
                      </div>
                      <span className="ml-4 font-bold text-white group-hover/btn:text-[#1c2a4b] z-10 transition-colors">{dict.products.btn_videos}</span>
                    </a>

                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY FAQS (Clean, grid-based instead of accordion) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#1c2a4b] tracking-tight">{dict.faq.title}</h2>
            <p className="text-slate-500 mt-4 md:mt-0 max-w-md text-right">Todo lo que necesitas saber antes de la aventura.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {dict.faq.items.map((item: any, idx: number) => (
              <div key={idx} className="group flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ff9000]/10 flex items-center justify-center text-[#ff9000] font-bold text-sm mt-1">
                  Q
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2c6748] mb-2 leading-snug group-hover:text-[#ff9000] transition-colors">{item.q}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN FOOTER */}
      <footer className="bg-[#002b11] pt-20 pb-10 border-t-8 border-[#8ebf25]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="mb-8 md:mb-0">
              <Image src="/img/logo-extreme-adventuring.png" alt="Extreme Adventuring" width={250} height={60} className="brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">{dict.footer.title}</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="https://www.facebook.com/extremeadventurecancun" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#ff9000] hover:-translate-y-1 text-white flex items-center justify-center text-xl transition-all duration-300">
                  <i className='bx bxl-facebook'></i>
                </a>
                <a href="https://www.instagram.com/extremeadventurecancun" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#ff9000] hover:-translate-y-1 text-white flex items-center justify-center text-xl transition-all duration-300">
                  <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://www.youtube.com/channel/UCsGN9p32DuH9BoDiciT5RTQ/videos" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#ff9000] hover:-translate-y-1 text-white flex items-center justify-center text-xl transition-all duration-300">
                  <i className='bx bxl-youtube'></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#ff9000] hover:-translate-y-1 text-white flex items-center justify-center text-xl transition-all duration-300">
                  <i className='bx bxl-trip-advisor'></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
          <div className="text-center text-white/40 text-sm font-medium tracking-wider">
            {dict.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
