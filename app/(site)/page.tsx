'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Depoimentos from '@/components/Depoimentos';
import Newsletter from '@/components/Newsletter';
import CTA from '@/components/CTA';

export const dynamic = 'force-dynamic';

export default function LandingPage() {
  // se não houver âncora na URL, garante topo
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <Depoimentos />
      <section className="section">
        <div className="max-container">
          <Newsletter />
        </div>
      </section>
      <CTA />
    </main>
  );
}
