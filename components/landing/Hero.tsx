"use client";

import Link from "next/link";
import HeroPreview from "./HeroPreview";

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

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
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
              SeuReview conecta você às melhores ofertas da <strong>Shopee</strong>, <strong>Amazon</strong>,
              <strong> Mercado Livre</strong>, <strong>AliExpress</strong> e <strong>Temu</strong> — com
              legendas inteligentes e links rastreáveis.
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

          {/* Cartão do preview (tudo fica dentro) */}
          <div className="relative">
            <div className="rounded-2xl border border-[#FFD9CF] bg-white/70 backdrop-blur shadow-sm">
              <HeroPreview />
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
