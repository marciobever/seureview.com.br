"use client";

import * as React from "react";

export type MiniItem = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  url: string;
  commissionPercent?: number;
  salesCount?: number;
};

function formatPrice(n?: number) {
  const v = Number(n ?? 0);
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function formatPercent(n?: number) {
  const v = Number(n ?? 0);
  if (!Number.isFinite(v)) return null;
  return `${Math.round(v)}%`;
}
function formatSalesShort(n?: number) {
  const v = Number(n ?? 0);
  if (!(v > 0)) return null;
  if (v >= 1000) {
    const k = v / 1000;
    const str = k.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
    return `${str} mil vendas`;
  }
  if (v >= 100) {
    const rounded = Math.floor(v / 100) * 100; // 742 -> 700
    return `${rounded} vendas`;
  }
  return `${v} vendas`;
}

/** Ícones inline (sem libs externas) */
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="currentColor"
      />
    </svg>
  );
}
function PercentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
      <path d="M7 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="currentColor" />
      <path d="M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function TrendingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
      <path d="M3 17l6-6 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const MOCK_ITEMS: MiniItem[] = [
  {
    id: "demo-1",
    title: "Tênis Nike Air Zoom Pegasus — corrida e amortecimento",
    price: 449.9,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    url: "#",
    commissionPercent: 12,
    salesCount: 742,
  },
  {
    id: "demo-2",
    title: "Liquidificador Premium 900W — 12 velocidades",
    price: 179.9,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop",
    url: "#",
    commissionPercent: 9,
    salesCount: 1180,
  },
];

export default function HeroPreview({
  initialItems,
}: {
  initialItems?: MiniItem[];
}) {
  const items = Array.isArray(initialItems) && initialItems.length > 0 ? initialItems : MOCK_ITEMS;

  return (
    <div className="p-4 md:p-5 w-full max-w-[680px]">
      {/* Cabeçalho simples */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Prévia do painel</h3>
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] border border-gray-200 bg-gray-50 text-gray-700">
          Demo
        </span>
      </div>

      {/* grid de cards */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {items.map((p) => (
          <article
            key={p.id}
            className="overflow-hidden rounded-xl border border-[#FFD9CF] bg-white/80 backdrop-blur"
          >
            <div className="aspect-[4/3] bg-[#FFF9F7] border-b border-[#FFD9CF]">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-2 p-3">
              <h4 className="line-clamp-2 text-[13px] font-semibold text-[#111827]">
                {p.title}
              </h4>

              {/* linha: estrelas + preço */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1 text-[13px] text-[#6B7280]">
                  <StarIcon className="h-4 w-4 text-amber-400" />
                  <span>{Number(p.rating || 0).toFixed(1)}</span>
                </div>
                <div className="text-sm font-semibold">{formatPrice(p.price)}</div>
              </div>

              {/* linha: comissão (embaixo das estrelas) e vendas (embaixo do preço) */}
              <div className="mt-1 flex items-center justify-between">
                <div>
                  {typeof p.commissionPercent === "number" && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
                      <PercentIcon className="h-3.5 w-3.5" />
                      {formatPercent(p.commissionPercent)}
                    </span>
                  )}
                </div>
                <div>
                  {formatSalesShort(p.salesCount) && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] text-gray-700">
                      <TrendingIcon className="h-3.5 w-3.5" />
                      {formatSalesShort(p.salesCount)}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={p.url}
                  className="inline-flex w-full items-center justify-center rounded-lg border px-3 py-1.5 text-[12px] hover:bg-[#FFF4F0]"
                >
                  Ver produto
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
