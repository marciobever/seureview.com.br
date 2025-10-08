'use client';

import * as React from 'react';
import { Star, Percent, TrendingUp, Search as SearchIcon, SlidersHorizontal } from 'lucide-react';

type MiniItem = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  commissionPercent?: number;
  salesCount?: number;
};

function formatPrice(n: number) {
  return Number(n).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function formatPercent(n?: number) {
  if (n == null) return '—';
  return `${Math.round(n)}%`;
}
function formatSales(n?: number) {
  if (n == null) return '—';
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toLocaleString('pt-BR');
}

const DEFAULTS: MiniItem[] = [
  {
    id: '1',
    title: 'Tênis esportivo leve (amortecimento + malha respirável)',
    price: 179.9,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    commissionPercent: 12,
    salesCount: 864,
  },
  {
    id: '2',
    title: 'Liquidificador 900W copo 2L 12 velocidades + pulsar',
    price: 219.9,
    rating: 4.6,
    image: '/landing/liquidificador.jpg', // ← sua imagem local em /public
    commissionPercent: 10,
    salesCount: 732,
  },
];

export default function HeroPreview({
  initialItems,
}: {
  initialItems?: MiniItem[];
}) {
  const [items] = React.useState<MiniItem[]>(initialItems ?? DEFAULTS);
  const [query, setQuery] = React.useState('');

  return (
    <div className="w-full max-w-[680px] p-4 md:p-5">
      {/* “Barra” do mock */}
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-medium text-gray-800">Prévia do painel</div>
        <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Mock interativo
        </div>
      </div>

      {/* Busca compacta */}
      <div className="mt-3 rounded-xl border border-[#FFD9CF] bg-white/70 backdrop-blur px-3 py-2">
        <div className="flex items-center gap-2">
          <SearchIcon className="w-4 h-4 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar produtos…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs hover:bg-[#FFF4F0]"
            title="Filtros"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filtros
          </button>
        </div>
      </div>

      {/* Grid de cards (2 itens) */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map((p) => (
          <div key={p.id} className="rounded-xl overflow-hidden border border-[#FFD9CF] bg-white shadow-sm">
            <div className="aspect-[4/3] bg-[#FFF9F7]">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-3 space-y-2">
              <div className="text-[13px] font-semibold leading-snug line-clamp-2 text-[#111827]">
                {p.title}
              </div>

              {/* rating + preço */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1 text-[13px] text-[#6B7280]">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{p.rating.toFixed(1)}</span>
                </div>
                <div className="text-[13px] font-semibold">{formatPrice(p.price)}</div>
              </div>

              {/* linha: comissão (% no chip verde) + (à direita) vendas */}
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[11px] border-emerald-200 bg-emerald-50 text-emerald-700">
                  <Percent className="w-3 h-3" />
                  {formatPercent(p.commissionPercent)}
                </span>

                <span className="ml-auto inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[11px] text-gray-700">
                  <TrendingUp className="w-3 h-3" />
                  Vendas {formatSales(p.salesCount)}
                </span>
              </div>

              {/* CTA */}
              <div className="pt-1">
                <button
                  type="button"
                  className="w-full rounded-lg bg-[#EE4D2D] hover:bg-[#D8431F] text-white text-sm py-2"
                  title="Selecionar"
                >
                  Selecionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rodapé do mock */}
      <div className="mt-3 text-[11px] text-gray-500 text-center">
        Prévia ilustrativa — sem integração real.
      </div>
    </div>
  );
}
