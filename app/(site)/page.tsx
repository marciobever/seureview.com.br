// app/(site)/page.tsx
"use client";

import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/landing/Hero";
import Depoimentos from "@/components/Depoimentos";
import Newsletter from "@/components/Newsletter";
import PageBackdrop from "@/components/landing/PageBackdrop";
import SiteHeader from "@/components/SiteHeader";
import AuthCTA from "@/components/AuthCTA";

export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* topo fixo com botões que mudam se estiver logado */}
      <SiteHeader />

      {/* fundo + utilitários */}
      <PageBackdrop />
      <ScrollToTop />

      {/* herói já alterna os botões conforme login */}
      <Hero />

      {/* depoimentos */}
      <section id="depoimentos" className="section">
        <div className="max-container">
          <Depoimentos />
        </div>
      </section>

      {/* CTA sensível ao login + newsletter */}
      <section id="newsletter" className="section pt-0">
        <div className="max-container space-y-10">
          {/* Chamada: se logado mostra "Ir para o Dashboard", senão Login/Signup */}
          <AuthCTA />

          {/* Newsletter permanece igual */}
          <div className="text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-extrabold">
              Receba novidades e dicas de conversão
            </h3>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Entre para a lista e receba materiais rápidos sobre produtos quentes e boas práticas.
            </p>
            <div className="mt-6">
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
