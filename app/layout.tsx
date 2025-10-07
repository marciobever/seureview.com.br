import './globals.css';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SeuReview — Automação de afiliados',
  description: 'Automação de afiliados para marketplaces e redes sociais.',
  metadataBase: new URL('https://seureview.com.br'),
  openGraph: {
    title: 'SeuReview — Automação de afiliados',
    description: 'Publique produtos com IA, UTM/SubIDs e agendamento.',
    url: 'https://seureview.com.br',
    siteName: 'SeuReview',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasSession = cookies().has('app_session');

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header initialLoggedIn={hasSession} />
        {/* conteúdo central com respiro padrão */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
