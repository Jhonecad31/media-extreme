"use client";

import Image from "next/image";

interface FooterProps {
  dict: any;
}

export default function Footer({ dict }: FooterProps) {
  return (
    // 1. Cambiamos 'mt-16' por 'pt-4' o lo eliminamos para evitar el desbordamiento (margin collapse)
    // 2. Nos aseguramos de que el fondo cubra todo el ancho sin dejar franjas muertas
    <footer className="bg-[#001a0a] text-slate-300 border-t border-slate-800 w-full shrink-0">
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        {/* RETÍCULA PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-white/5">
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="flex flex-col items-center gap-3 text-center">
            <Image
              src="/icon/logos/logo-ext-adventuring.svg"
              alt="Extreme Adventuring"
              width={220}
              height={55}
              className="w-auto h-11 opacity-90"
            />
            <p className="text-xs text-slate-400 font-light max-w-xs leading-relaxed">
              {dict?.footer?.description || "Plataforma oficial de distribución de recursos visuales y fichas técnicas autorizadas para agencias afiliadas."}
            </p>
          </div>
          {/* COLUMNA 2: CANALES INSTITUCIONALES */}
          <div className="flex flex-col gap-3 md:items-end">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#8ebf25] md:text-right w-full">
              {dict?.footer?.officialChannels || "Canales Oficiales"}
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/extremeadventuringcancun/"
                target="_blank"
                rel="noopener noreferrer"
                title={dict?.footer?.accessibility?.facebook || "Go to Facebook"}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8ebf25] hover:text-[#001a0a] text-white flex items-center justify-center text-base transition-all duration-300"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/extremeadventuringcancun/"
                target="_blank"
                rel="noopener noreferrer"
                title={dict?.footer?.accessibility?.instagram || "Go to Instagram"}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8ebf25] hover:text-[#001a0a] text-white flex items-center justify-center text-base transition-all duration-300"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@extremeadventuringcun"
                target="_blank"
                rel="noopener noreferrer"
                title={dict?.footer?.accessibility?.tiktok || "Go to TikTok"}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8ebf25] hover:text-[#001a0a] text-white flex items-center justify-center text-base transition-all duration-300"
              >
                <i className="bx bxl-tiktok"></i>
              </a>
              <a
                href="https://www.tripadvisor.com.mx/Attraction_Review-g240327-d3506512-Reviews-Extreme_Adventuring_Cancun-Puerto_Morelos_Yucatan_Peninsula.html"
                target="_blank"
                rel="noopener noreferrer"
                title={dict?.footer?.accessibility?.tripadvisor || "Go to TripAdvisor"}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8ebf25] hover:text-[#001a0a] text-white flex items-center justify-center text-base transition-all duration-300"
              >
                <i className="bx bxl-trip-advisor"></i>
              </a>
              <a
                href="https://www.youtube.com/@extremeadventuringcancun/videos"
                target="_blank"
                rel="noopener noreferrer"
                title={dict?.footer?.accessibility?.youtube || "Go to YouTube"}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8ebf25] hover:text-[#001a0a] text-white flex items-center justify-center text-base transition-all duration-300"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 text-center">
          <p className="text-[11px] text-slate-500 font-light">
            © {new Date().getFullYear()} Extreme Adventuring. {dict?.footer?.rights || "Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}