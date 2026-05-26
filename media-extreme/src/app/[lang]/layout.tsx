import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
// Importas tus componentes estructurales
import Header from "@/src/components/global/Header";
import Footer from "@/src/components/global/Footer";
import { getDictionary } from "../getDictionary";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Extreme Adventure Media Center',
  description: 'Download all our resources - Extreme Adventure Cancun',
  robots: {
    index: false,
    follow: false,
  },
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'es' | 'pt');

  return (
    <html lang={lang}>
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        
        {/* Estructura Global */}
        <Header lang={lang} dict={dict} />
        
        {/* El contenedor principal crece para empujar el footer hacia abajo */}
        <main className="flex-1">
          {children}
        </main>
        
        <Footer dict={dict} />

      </body>
    </html>
  );
}