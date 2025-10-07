import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ComoFunciona from '@/components/ComoFunciona';
import Recursos from '@/components/Recursos';
import Depoimentos from '@/components/Depoimentos';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Newsletter from '@/components/Newsletter';

export const dynamic = 'force-dynamic';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seureview.com.br';

export const metadata: Metadata = {
  title: 'Produtos virais e posts em minutos',
  description:
    'Descubra produtos quentes da Shopee, Amazon, Mercado Livre, AliExpress e Temu. Gere legendas inteligentes, links rastreáveis e publique nas suas redes com o SeuReview.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'SeuReview — Produtos virais e posts em minutos',
    description:
      'Ache produtos virais, gere legendas e publique em minutos nas suas redes sociais.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'SeuReview' }],
    siteName: 'SeuReview',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SeuReview — Produtos virais e posts em minutos',
    description:
      'Descubra, gere e publique: produtos virais, legendas inteligentes e links rastreáveis.',
    images: ['/og.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SeuReview',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <section className="mx-auto max-w-7xl px-4 md:px-6 space-y-32 py-16">
        <ComoFunciona />
        <Recursos />
        <Depoimentos />
        <FAQ />
        <CTA />
        <div className="mt-12">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
