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
            <p className="text-xs text-slate-400 font-light max-w-xs leading-relaxed">
              {dict?.footer?.description || "Plataforma oficial de distribución de recursos visuales y fichas técnicas autorizadas para agencias afiliadas."}
            </p>
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