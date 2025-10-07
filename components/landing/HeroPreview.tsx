"use client";

import * as React from "react";

/* ---------- Inline icons (sem lucide-react) ---------- */
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props}>
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="currentColor"
      />
    </svg>
  );
}
function PercentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props}>
      <path d="M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="7.5" cy="6.5" r="2.5" fill="currentColor" />
      <circle cx="16.5" cy="17.5" r="2.5" fill="currentColor" />
    </svg>
  );
}
function TrendUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props}>
      <path
        d="M3 17l6-6 4 4 7-7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 8h7v7" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

/* ---------- helpers ---------- */
function money(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* ---------- Card do mock ---------- */
function PreviewProductCard({
  title,
  price,
  rating,
  pct,
  vendas,
  img,
}: {
  title: string;
  price: number;
  rating: number;
  pct?: number;
  vendas?: number;
  img: string;
}) {
  return (
    <div className="rounded-2xl border border-[#FFD9CF] overflow-hidden bg-white shadow-sm">
      <div className="aspect-[4/3] bg-[#FFF9F7]">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-3 space-y-2">
        <h3 className="text-sm font-semibold text-[#111827] line-clamp-2">{title}</h3>

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1 text-[#6B7280] text-sm">
            <StarIcon className="w-4 h-4 text-amber-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="text-sm font-semibold">{money(price)}</div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-1">
          {typeof pct === "number" && (
            <span className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 text-green-700 px-2 py-0.5 text-[11px]">
              <PercentIcon className="w-3 h-3" />
              {pct.toFixed(0)}%
            </span>
          )}
          {typeof vendas === "number" && (
            <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-100 text-gray-600 px-2 py-0.5 text-[11px]">
              <TrendUpIcon className="w-3 h-3" />
              Vendas {vendas}
            </span>
          )}
        </div>

        <div className="flex gap-2 pt-1">
          <button className="flex-1 px-3 py-2 rounded-lg text-sm bg-[#EE4D2D] hover:bg-[#D8431F] text-white">
            Selecionar
          </button>
          <button className="flex-1 px-3 py-2 rounded-lg text-sm border border-[#FFD9CF] hover:bg-[#FFF4F0]">
            Ver na Shopee
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Componente principal (preview do painel do Hero) ---------- */
export default function HeroPreview() {
  return (
    <div className="rounded-2xl border border-[#FFD9CF] bg-white shadow-sm overflow-hidden">
      {/* tabs */}
      <div className="flex gap-1 p-2">
        <button className="flex-1 px-4 py-2 rounded-xl bg-[#EE4D2D] text-white text-sm font-medium">
          Produtos
        </button>
        <button className="flex-1 px-4 py-2 rounded-xl border border-[#FFD9CF] bg-white text-sm">
          Histórico
        </button>
      </div>

      {/* filtro/busca */}
      <div className="border-t border-[#FFD9CF]" />
      <div className="p-3 flex items-center gap-3">
        <div className="relative flex-1">
          <SearchIcon className="w-4 h-4 text-[#6B7280] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            disabled
            placeholder="Buscar por título…"
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#FFD9CF] bg-white text-sm"
          />
        </div>
        <div className="relative">
          <button
            disabled
            className="pl-3 pr-8 py-2 rounded-lg border border-[#FFD9CF] bg-white text-sm text-[#111827]"
          >
            Relevância
          </button>
          <ChevronDown className="w-4 h-4 text-[#6B7280] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <button disabled className="px-4 py-2 rounded-lg bg-[#EE4D2D] text-white text-sm font-medium">
          Buscar
        </button>
      </div>

      {/* grid de cards */}
      <div className="p-3 grid grid-cols-2 gap-3">
        <PreviewProductCard
          title="Funko Pop - Produto Oficial Funko Pronta Entrega"
          price={59.99}
          rating={5}
          pct={3}
          vendas={3}
          img="https://images.unsplash.com/photo-1542000551557-3fd0d1cfc1b8?q=80&w=1200&auto=format&fit=crop"
        />
        <PreviewProductCard
          title="Funko Pop UV Protector – Acrílico Oficial Funko"
          price={95.92}
          rating={5}
          pct={7}
          vendas={2}
          img="https://images.unsplash.com/photo-1514846160150-3b1aa3c1c3f0?q=80&w=1200&auto=format&fit=crop"
        />
      </div>
    </div>
  );
}
