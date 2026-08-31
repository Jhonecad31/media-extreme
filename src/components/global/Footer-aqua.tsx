"use client";

interface FooterProps {
  dict: any;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-[#001a0a] text-slate-300 border-t border-slate-800 w-full shrink-0">
      <div className="max-w-5xl mx-auto px-6 py-6 text-center">
        <p className="text-[11px] text-slate-500 font-light">
          © {new Date().getFullYear()} Extreme Adventuring. {dict?.footer?.rights || "Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  );
}