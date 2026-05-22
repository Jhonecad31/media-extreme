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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/5">
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="flex flex-col gap-3">
            <Image
              src="/icon/logo-ext-adventuring.svg"
              alt="Extreme Adventuring"
              width={150}
              height={38}
              className="w-auto h-7 opacity-90"
            />
            <p className="text-xs text-slate-400 font-light max-w-xs leading-relaxed">
              Plataforma oficial de distribución de recursos visuales y fichas
              técnicas autorizadas para agencias afiliadas.
            </p>
          </div>

          {/* COLUMNA 2: ACCESOS DE SOPORTE */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#8ebf25]">
              Soporte Comercial
            </h4>
            <ul className="text-xs text-slate-400 font-light flex flex-col gap-2">
              <li>
                <a
                  href="mailto:info@extremeadventure.com"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <i className="bx bx-envelope text-sm text-[#8ebf25]"></i>{" "}
                  info@extremeadventure.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5">
                  <i className="bx bx-phone text-sm text-[#8ebf25]"></i> +52
                  (998) 123-4567
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: CANALES INSTITUCIONALES */}
          <div className="flex flex-col gap-3 md:items-end">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#8ebf25] md:text-right w-full">
              Canales Oficiales
            </h4>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/extremeadventurecancun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8ebf25] hover:text-[#001a0a] text-white flex items-center justify-center text-base transition-all duration-300"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/extremeadventurecancun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8ebf25] hover:text-[#001a0a] text-white flex items-center justify-center text-base transition-all duration-300"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCsGN9p32DuH9BoDiciT5RTQ/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8ebf25] hover:text-[#001a0a] text-white flex items-center justify-center text-base transition-all duration-300"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* BARRA DE CRÉDITOS INFRA */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-medium tracking-wider uppercase">
          <div>{dict.footer.copyright}</div>
          <div className="flex gap-4 text-slate-400 normal-case font-light">
            <a href="#" className="hover:underline">
              Términos de Uso
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:underline">
              Políticas de Marca
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}