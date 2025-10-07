'use client';

import Hero from '@/components/Hero';
import Recursos from '@/components/Recursos';
import Depoimentos from '@/components/Depoimentos';
import Newsletter from '@/components/Newsletter';
import CTA from '@/components/CTA';
import ScrollToTop from '@/components/ScrollToTop';

export const dynamic = 'force-dynamic';

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <ScrollToTop />
      <Hero />
      <Recursos />
      <Depoimentos />
      <CTA />
      <section className="section">
        <div className="max-container">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
