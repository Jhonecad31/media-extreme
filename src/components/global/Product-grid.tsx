import Image from 'next/image';
import { imageKitLoader } from '@/src/lib/imagekit';

interface ProductGridProps {
  products: any[];
  dict: any;
  isWildPass?: boolean;
}

export default function ProductGrid({ products, dict, isWildPass = false }: ProductGridProps) {
  // Solo mantenemos mystic_waters y 5_elements ocultos
  const HIDDEN_MEDIA_IDS = ['mystic_waters', '5_elements'];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {products.map((prod: any, idx: number) => {
        // Evaluamos si debemos ocultar fotos y videos para este ID
        const hideMedia = HIDDEN_MEDIA_IDS.includes(prod.id);

        // Evaluamos si debemos mostrar la mica
        const showMica = prod.mica && !isWildPass;

        // Evaluamos si el producto mostrará fotos y video
        const showPhotos = prod.photos && !hideMedia;
        const showVideo = prod.video && !hideMedia;

        // Calculamos cuántos botones se renderizan en este producto
        const visibleButtonsCount = [true, showMica, showPhotos, showVideo].filter(Boolean).length;

        // Mapeo seguro para Tailwind que conserva tus tamaños exactos
        const gridColsClass = 
          visibleButtonsCount === 2 ? 'grid-cols-2' :
          visibleButtonsCount === 4 ? 'grid-cols-4' : 'grid-cols-3';

        return (
          <div key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300">
            
            {/* Imagen del Producto */}
            <div className="relative h-44 w-full bg-slate-50 overflow-hidden">
              <Image
                loader={imageKitLoader}
                src={prod.img || '/img/atv_adventure.png'}
                alt={prod.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={idx < 12}
              />
            </div>

            {/* Info del Producto */}
            <div className="p-5 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2c6748] bg-[#2c6748]/10 px-2 py-0.5 rounded-md mb-2 inline-block">
                {dict?.home?.saleKit || "Kit de Venta"}
              </span>
              <h3 className="font-bold text-lg text-[#1c2a4b] leading-snug">
                {prod.title}
              </h3>
            </div>

            {/* Botonera de descarga adaptativa */}
            <div className={`bg-slate-50 p-3 sm:p-4 border-t border-slate-100 grid gap-1 sm:gap-2 text-center text-[10px] sm:text-xs font-bold ${gridColsClass}`}>
              
              {/* PDF */}
              <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-1.5 sm:p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#ea3323]">
                <div className="w-8 h-8 rounded-lg bg-[#ea3323]/10 flex items-center justify-center text-lg">
                  <i className='bx bxs-file-pdf'></i>
                </div>
                <span>{dict?.home?.btnFactSheet || "Ficha"}</span>
              </a>

              {/* Mica (Oculta si isWildPass es true) */}
              {showMica && (
                <a href={prod.mica} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-1.5 sm:p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#ea580c]">
                  <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center text-lg">
                    <i className='bx bxs-file-pdf'></i>
                  </div>
                  <span>{dict?.home?.btnMica || "Mica"}</span>
                </a>
              )}

              {/* Fotos */}
              {showPhotos && (
                <a href={prod.photos} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-1.5 sm:p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#006daf]">
                  <div className="w-8 h-8 rounded-lg bg-[#006daf]/10 flex items-center justify-center text-lg">
                    <i className='bx bxl-dropbox'></i>
                  </div>
                  <span>{dict?.home?.btnPhotos || "Fotos"}</span>
                </a>
              )}

              {/* Video */}
              {showVideo && (
                <a href={prod.video} download className="flex flex-col items-center gap-1.5 p-1.5 sm:p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#2c6748]">
                  <div className="w-8 h-8 rounded-lg bg-[#2c6748]/10 flex items-center justify-center text-lg">
                    <i className='bx bx-video'></i>
                  </div>
                  <span>{dict?.home?.btnVideo || "Video"}</span>
                </a>
              )}

            </div>
          </div>
        );
      })}
    </div>
  );
}