"use client";

import * as React from "react";

/** Ícones simples (sem libs) */
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...props}>
      <path
        d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.9 5.8 22 7 14.14 2 9.27l7.1-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}
function PercentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...props}>
      <path d="M7 17l10-10M7 7h.01M17 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function TrendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...props}>
      <path d="M3 17l6-6 4 4 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

type MiniItem = {
  id: string;
  title: string;
  price: string;
  rating: number;
  image: string;
  commissionPercent: number;
  salesCount: number; // mostrar como “< 1k”
};

/** Dados mock – imagens confiáveis do Unsplash */
const MOCK: MiniItem[] = [
  {
    id: "1",
    title: "Tênis Nike Air Zoom Pegasus — corrida e amortecimento",
    price: "R$ 449,90",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    commissionPercent: 12,
    salesCount: 700,
  },
  {
    id: "2",
    title: "Liquidificador Premium 900W — 12 velocidades",
    price: "R$ 179,90",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e17d?q=80&w=1200&auto=format&fit=crop",
    commissionPercent: 9,
    salesCount: 1200, // mostra como “~ 1,2 mil”
  },
];

function fmtSales(n: number) {
  if (n < 1000) return `${n} vendas`;
  const k = n / 1000;
  return `~ ${k.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} mil vendas`;
}

function Card({ item }: { item: MiniItem }) {
  return (
    <div className="rounded-xl border border-[#F4E1DB] overflow-hidden bg-white">
      <div className="aspect-[4/3] bg-[#FFF9F7] border-b border-[#FFD9CF]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="p-3 space-y-2">
        <h3 className="text-sm font-semibold text-[#111827] line-clamp-2">{item.title}</h3>

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1 text-[#6B7280] text-sm">
            <StarIcon className="text-amber-400" />
            <span>{item.rating.toFixed(1)}</span>
          </div>
          <div className="text-sm font-semibold">{item.price}</div>
        </div>

        {/* linha de chips embaixo das estrelas */}
        <div className="flex items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] bg-[#E8F9EE] border-[#C4F1D4] text-[#0E7A3B]">
            <PercentIcon /> {item.commissionPercent.toFixed(0)}%
          </span>

          <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] bg-[#F5F6F7] border-[#E5E7EB] text-[#374151]">
            <TrendIcon /> {fmtSales(item.salesCount)}
          </span>
        </div>

        <button className="mt-2 w-full text-[13px] border rounded-lg py-1.5 hover:bg-[#FFF4F0]">
          Ver produto
        </button>
      </div>
    </div>
  );
}

export default function HeroPreview() {
  return (
    <div className="w-[min(640px,88vw)] md:w-[600px] rounded-2xl">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-sm font-semibold text-gray-800">Prévia do painel</div>
        <span className="text-[11px] px-2 py-1 rounded-full border bg-white/80">Demo</span>
      </div>

      <div className="px-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MOCK.map((it) => (
            <Card key={it.id} item={it} />
          ))}
        </div>
      </div>
    </div>
  );
}
