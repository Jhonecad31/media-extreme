import Image from 'next/image';
import { imageKitLoader } from '@/src/lib/imagekit';

interface ProductGridProps {
  products: any[];
  dict: any;
}

export default function ProductGrid({ products, dict }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {products.map((prod: any, idx: number) => (
        <div key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300">
          
          {/* Imagen del Producto */}
          <div className="relative h-44 w-full bg-slate-50 overflow-hidden">
            <Image
              loader={imageKitLoader}
              src={prod.img || '/img/atv_adventure.png'}
              alt={prod.title}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={idx < 3}
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

          {/* Botonera de descarga limpia */}
          <div className="bg-slate-50 p-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs font-bold">
            
            {/* PDF */}
            <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#ea3323]">
              <div className="w-8 h-8 rounded-lg bg-[#ea3323]/10 flex items-center justify-center text-lg">
                <i className='bx bxs-file-pdf'></i>
              </div>
              <span>{dict?.home?.btnFactSheet || "Ficha"}</span>
            </a>

            {/* Fotos */}
            <a href={prod.photos} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#006daf]">
              <div className="w-8 h-8 rounded-lg bg-[#006daf]/10 flex items-center justify-center text-lg">
                <i className='bx bxl-dropbox'></i>
              </div>
              <span>{dict?.home?.btnPhotos || "Fotos"}</span>
            </a>

            {/* Video */}
            <a href={prod.video} download className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#2c6748]">
              <div className="w-8 h-8 rounded-lg bg-[#2c6748]/10 flex items-center justify-center text-lg">
                <i className='bx bx-video'></i>
              </div>
              <span>{dict?.home?.btnVideo || "Video"}</span>
            </a>

          </div>
        </div>
      ))}
    </div>
  );
}
