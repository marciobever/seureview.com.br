// app/(site)/page.tsx
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/landing/Hero";
import Depoimentos from "@/components/Depoimentos";
import Newsletter from "@/components/Newsletter";
import PageBackdrop from "@/components/landing/PageBackdrop";

export const dynamic = "force-dynamic";

// FAQ (o que você me mandou)
const faqs = [
  { q: "Posso cancelar quando quiser?", a: "Sim. Sem fidelidade." },
  { q: "Posso conectar várias contas?", a: "Depende do plano. No Business é ilimitado." },
  { q: "Vocês postam no meu Instagram?", a: "Sim, com sua autorização via login Meta/Instagram." },
  { q: "Tem período de teste?", a: "Oferecemos plano Starter gratuito para começar." },
];

export default function LandingPage() {
  // JSON-LD para SEO do FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <PageBackdrop />
      <ScrollToTop />

      <Hero />

      <section id="depoimentos" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <Depoimentos />
        </div>
      </section>

      {/* FAQ – inline para evitar problemas de import */}
      <section id="faq" className="section pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Perguntas frequentes</h2>
            <p className="mt-3 text-gray-600">
              Dúvidas comuns sobre a plataforma e os planos.
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card overflow-hidden">
                <summary className="card-body cursor-pointer font-medium">
                  {f.q}
                </summary>
                <div className="px-5 pb-5 -mt-3 text-gray-700">{f.a}</div>
              </details>
            ))}
          </div>

          {/* SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </div>
      </section>

      <section id="newsletter" className="section pt-0">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
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
          <div className="mt-10">
            <Newsletter />
          </div>
        </div>
      </section>
    </main>
  );
}
