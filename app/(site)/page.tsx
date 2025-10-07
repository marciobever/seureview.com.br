// app/(site)/page.tsx
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Recursos from "@/components/Recursos";
import Depoimentos from "@/components/Depoimentos";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <>
      {/* HERO em full-bleed */}
      <Hero />

      {/* RECURSOS */}
      <section id="recursos" className="section">
        <div className="max-container">
          <Recursos />
        </div>
      </section>

      {/* DEPOIMENTOS, com leve contraste */}
      <section id="depoimentos" className="section bg-gray-50">
        <div className="max-container">
          <Depoimentos />
        </div>
      </section>

      {/* CTA + NEWSLETTER (respirando) */}
      <section className="section">
        <div className="max-container text-center space-y-8">
          <h3 className="text-3xl md:text-4xl font-extrabold">
            Pronto para <span className="text-gradient">acelerar</span> suas comissões?
          </h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Cadastre-se e comece a publicar produtos prontos com links rastreáveis e legendas otimizadas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/signup" className="btn btn-primary text-base">Criar conta grátis</Link>
            <Link href="/login" className="btn btn-ghost text-base">Entrar</Link>
          </div>

          <div className="mt-12">
            <Newsletter />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA (pode mover pra cima se preferir) */}
      <section id="como-funciona" className="section">
        <div className="max-container">
          <ComoFunciona />
        </div>
      </section>
    </>
  );
}
