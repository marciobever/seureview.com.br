'use client';

import * as React from 'react';

// dados mockados da prévia (2 produtos)
const PRELOAD = [
  {
    id: 'shoe',
    title: 'Tênis Nike Air Zoom Pegasus corrida e amortecimento',
    price: 449.9,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop', // pode trocar por /tenis.jpg se quiser local
    url: '#',
    commissionPercent: 12,
    salesCount: 700,
  },
  {
    id: 'liquidificador',
    title: 'Liquidificador Premium 900W 12 velocidades',
    price: 179.9,
    rating: 4.6,
    image: '/landing/liquidificador.jpg', // <-- usa a imagem do /public
    url: '#',
    commissionPercent: 9,
    salesCount: 1200, // “~ 1,2 mil vendas”
  },
];

function formatPrice(n: number) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function HeroPreview() {
  return (
    <div className="rounded-2xl border border-[#FFD9CF] bg-white/70 backdrop-blur p-4 md:p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold">Prévia do painel</h3>
        <span className="text-xs px-2 py-1 rounded-full border bg-white">Demo</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {PRELOAD.map((p) => (
          <article
            key={p.id}
            className="rounded-xl border border-[#FFE4DC] bg-white overflow-hidden flex flex-col"
          >
            <div className="aspect-[4/3] bg-[#FFF9F7] border-b border-[#FFD9CF]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4 space-y-2">
              <h4 className="text-[15px] leading-snug font-semibold text-[#111827]">
                {p.title}
              </h4>

              <div className="flex items-center justify-between">
                {/* rating */}
                <div className="inline-flex items-center gap-1 text-[#6B7280] text-sm">
                  {/* ícone estrela */}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-amber-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  <span>{p.rating.toFixed(1)}</span>
                </div>

                {/* preço */}
                <div className="text-sm font-semibold">{formatPrice(p.price)}</div>
              </div>

              {/* linha chips: % comissão + vendas */}
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {/* % */}
                  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="currentColor">
                    <path d="M14.5 3.5a1 1 0 0 1 1 1v.75l-10 10H3.75a1 1 0 0 1-1-1V13.5l10-10h1.75zM7 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                  {p.commissionPercent.toFixed(0)}%
                </span>

                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
                  {/* vendas (trend) */}
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 17l6-6 4 4 8-8" />
                  </svg>
                  {p.salesCount >= 1000
                    ? `~ ${(p.salesCount / 1000).toFixed(1).replace('.', ',')} mil vendas`
                    : `${p.salesCount} vendas`}
                </span>
              </div>

              <a
                href={p.url}
                className="mt-1 inline-flex w-full items-center justify-center text-sm rounded-lg border bg-white hover:bg-gray-50 px-3 py-2"
              >
                Ver produto
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
