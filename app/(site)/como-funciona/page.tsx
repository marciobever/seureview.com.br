// app/(site)/como-funciona/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como funciona | SeuReview",
  description: "Veja o passo a passo: conectar integrações, achar produtos, gerar legendas, programar posts e acompanhar resultados.",
  alternates: { canonical: "/como-funciona" },
};

const steps = [
  { t: "1. Conecte suas contas", d: "Integre Meta e marketplaces (ex.: Shopee). Permissões mínimas e seguras." },
  { t: "2. Descubra produtos virais", d: "Filtros por preço, comissão e tendência. Coleções salvas para sua rotina." },
  { t: "3. Gere a legenda com IA", d: "Tom de voz e CTA ajustáveis. Hashtags e variações rápidas." },
  { t: "4. UTM + SubIDs", d: "Rastreie campanhas, canais e criativos para entender o que converte." },
  { t: "5. Programe e publique", d: "Agende nos horários de pico e publique em múltiplos perfis." },
  { t: "6. Meça e otimize", d: "Painel com CTR, engajamento e receita estimada para decisões rápidas." },
];

export default function Page() {
  return (
    <main className="section">
      <div className="max-container">
        <h1 className="text-3xl md:text-4xl font-bold">Como funciona</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Do zero à publicação em poucos minutos — e com rastreio completo das suas campanhas.
        </p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <div className="font-semibold text-lg text-gray-900">{s.t}</div>
                <p className="mt-2 text-sm text-gray-600">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="/signup" className="btn btn-primary">Começar agora</a>
        </div>
      </div>
    </main>
  );
}
