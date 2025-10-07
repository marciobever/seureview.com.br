// components/landing/HeroPreview.tsx
"use client";

import * as React from "react";
import { Star, Percent, TrendingUp, Search as SearchIcon, SlidersHorizontal } from "lucide-react";

type MiniItem = {
  id: string;
  title: string;
  price: number;
  rating: number;
  commissionPercent?: number;
  salesCount?: number;
};

const MOCK: MiniItem[] = [
  { id: "1", title: "Airfryer 3,2L Inox",            price: 329.9, rating: 4.8, commissionPercent: 7,  salesCount: 154 },
  { id: "2", title: "Fone Bluetooth TWS",            price: 89.9,  rating: 4.6, commissionPercent: 10, salesCount: 721 },
  { id: "3", title: "Cafeteira Espresso 20bar",      price: 489.0, rating: 4.9, commissionPercent: 6,  salesCount: 83  },
];

function brl(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function HeroPreview() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const i = setInterval(() => setActive((a) => (a + 1) % MOCK.length), 2400);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative rounded-[24px] border border-[#FFD9CF] bg-white/70 backdrop-blur-sm shadow-[0_6px_30px_rgba(238,77,45,0.08)] p-4 sm:p-5">
      {/* Topo – busca fake */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            disabled
            placeholder="Buscar por título…"
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#FFD9CF] bg-white/70 text-sm placeholder-[#9CA3AF] cursor-default"
          />
        </div>
        <button disabled className="px-3 py-2 rounded-lg text-sm bg-[#EE4D2D]/90 text-white shadow-sm cursor-default">
          Buscar
        </button>
      </div>

      {/* Sort fake */}
      <div className="mt-3 flex items-center gap-2 text-xs text-[#6B7280]">
        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#FFD9CF] bg-white/70">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Relevância
        </div>
        <span className="opacity-60">•</span>
        <span>Prévia do painel</span>
      </div>

      {/* Grid de mini-cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {MOCK.map((p, idx) => {
          const isActive = idx === active;
          return (
            <div
              key={p.id}
              onMouseEnter={() => setActive(idx)}
              className={[
                "group rounded-xl overflow-hidden border border-[#FFD9CF] bg-white shadow-sm transition-all",
                isActive ? "ring-2 ring-[#EE4D2D]/60" : "hover:shadow-md",
              ].join(" ")}
            >
              <div className="aspect-[4/3] bg-[#FFF9F7] grid place-items-center text-[11px] uppercase tracking-wide text-[#9CA3AF]">
                Imagem do produto
              </div>

              <div className="p-3 space-y-2">
                <div className="text-[13px] font-semibold text-[#111827] line-clamp-2">{p.title}</div>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 text-[#6B7280] text-[13px]">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    {p.rating.toFixed(1)}
                  </div>
                  <div className="text-[13px] font-semibold">{brl(p.price)}</div>
                </div>

                {/* chips direita: % comissão (verde) + Vendas (cinza) */}
                <div className="flex items-center justify-end gap-2 pt-1">
                  {typeof p.commissionPercent === "number" && (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                      <Percent className="w-3 h-3" />
                      {p.commissionPercent.toFixed(0)}%
                    </span>
                  )}
                  {typeof p.salesCount === "number" && (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                      <TrendingUp className="w-3 h-3" />
                      Vendas {p.salesCount.toLocaleString("pt-BR")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rodapé – ferramentas do composer (visual) */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {["Legenda (IA)", "UTM + SubIDs", "Agendamento"].map((t) => (
          <button
            key={t}
            disabled
            className="w-full text-sm px-3 py-2 rounded-lg border border-[#E5E7EB] bg-white/70 text-[#374151] cursor-default"
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
