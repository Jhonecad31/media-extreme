import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { getDictionary } from "../getDictionary";
import Header from "@/src/components/global/Header-aqua";
import Footer from "@/src/components/global/Footer-aqua";
export default async function AquaWorldLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'es' | 'pt');

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Tu Header exclusivo para Aqua World */}
      <Header lang={lang} dict={dict} />

      <main className="flex-1">{children}</main>

      {/* Tu Footer exclusivo para Aqua World */}
      <Footer dict={dict} />
    </div>
  );
}