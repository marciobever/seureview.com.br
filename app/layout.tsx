import './globals.css';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SeuReview',
  description: 'Automação de afiliados para marketplaces e redes sociais',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasSession = cookies().has('app_session');

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header initialLoggedIn={hasSession} />
        {/* Conteúdo */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
