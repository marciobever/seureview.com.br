"use client";

import Link from "next/link";
import HeroPreview from "./HeroPreview";

// se quiser já abrir com 2 produtos REAIS, preencha aqui os dados básicos.
// (Se você me mandar 2 links da Shopee + título/imagem/preço, te devolvo esse bloco pronto.)
const PRELOAD: Parameters<typeof HeroPreview>[0]["initialItems"] = undefined;
// Exemplo pronto (fake bonito):
// const PRELOAD = [
//   {
//     id: "pre-1",
//     title: "Tênis Performance X — leve, macio e com ótimo amortecimento",
//     price: 199.9,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
//     url: "https://shopee.com.br/product/000/111",
//     commissionPercent: 12,
//     salesCount: 1543,
//   },
//   {
//     id: "pre-2",
//     title: "Fone Bluetooth Pro — cancelamento ativo e bateria 30h",
//     price: 129.9,
//     rating: 4.9,
//     image: "https://images.unsplash.com/photo-1518443883431-b4f51f1b3a58?q=80&w=1200&auto=format&fit=crop",
//     url: "https://shopee.com.br/product/000/222",
//     commissionPercent: 18,
//     salesCount: 2410,
//   },
// ];

const chips = ["Legenda IA", "UTM + SubIDs", "Agendamento", "Shopee • Amazon • ML"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow do fundo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(238,77,45,0.18) 0%, rgba(238,77,45,0) 60%), radial-gradient(900px 500px at 100% 0%, rgba(255,140,105,0.14) 0%, rgba(255,140,105,0) 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium text-[#EE4D2D] bg-[#FFF1ED] border border-[#FFD9CF] rounded-full px-2.5 py-1">
              Novo • Multi-marketplaces
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-[#FF8A66] to-[#EE4D2D] bg-clip-text text-transparent">
                Encontre produtos virais
              </span>{" "}
              e publique em minutos.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-[58ch]">
              SeuReview conecta você às melhores ofertas da <strong>Shopee</strong>,{" "}
              <strong>Amazon</strong>,<strong> Mercado Livre</strong>, <strong>AliExpress</strong> e{" "}
              <strong>Temu</strong> — com legendas inteligentes e links rastreáveis.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="px-4 py-2 rounded-lg text-sm bg-[#EE4D2D] hover:bg-[#D8431F] text-white shadow-sm"
              >
                Começar agora
              </Link>
              <Link
                href="/como-funciona"
                className="px-4 py-2 rounded-lg text-sm border border-[#FFD9CF] hover:bg-[#FFF4F0] text-[#111827]"
              >
                Ver como funciona
              </Link>
            </div>

            {/* chips */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
              {chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full px-3 py-1 border border-[#FFD9CF] bg-white/80 backdrop-blur hover:bg-white transition"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Preview (tudo dentro do quadrado) */}
          <div className="relative flex justify-center md:justify-end">
            <div className="rounded-2xl border border-[#FFD9CF] bg-white/70 backdrop-blur shadow-sm">
              <HeroPreview initialItems={PRELOAD} />
            </div>
            <div
              className="pointer-events-none absolute -z-10 -right-10 -top-10 h-48 w-48 rounded-full blur-3xl"
              style={{ background: "rgba(238,77,45,0.22)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
