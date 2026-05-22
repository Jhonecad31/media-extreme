import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Extreme Adventure Media Center',
  description: 'Download all our resources - Extreme Adventure Cancun',
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout(props: LayoutProps) {
  const { lang } = await props.params;

  return (
    <html lang={lang}>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
