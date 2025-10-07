"use client";

import * as React from "react";

type MiniItem = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  commissionPercent?: number;
  salesCount?: number;
};

const SAMPLE: MiniItem[] = [
  {
    id: "a",
    title: "Funko Pop – Produto Oficial Funko Pronta Entrega",
    price: 59.99,
    rating: 5,
    image: "https://cf.shopee.com.br/file/br-11134207-7r98o-mabpept6ucmxc7",
    commissionPercent: 3,
    salesCount: 3,
  },
  {
    id: "b",
    title: "Funko Pop UV Protector – Acrílico Oficial Funko",
    price: 95.92,
    rating: 5,
    image: "https://cf.shopee.com.br/file/br-11134207-7r98o-m83mo8l52prl68",
    commissionPercent: 7,
    salesCount: 2,
  },
];

function formatPrice(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function HeroPreview() {
  const [tab, setTab] = React.useState<"produtos" | "historico">("produtos");
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("relevance");

  // lista “fake” filtrada (apenas para visual do hero)
  const items = React.useMemo(() => {
    let list = SAMPLE.filter((i) =>
      i.title.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (sort === "price_desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "price_asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "rating_desc") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [query, sort]);

  return (
    <div className="p-3 sm:p-4">
      {/* Tabs */}
      <div className="grid grid-cols-2 text-sm rounded-xl border border-[#FFD9CF] bg-white/70 overflow-hidden">
        <button
          className={`py-2 rounded-lg transition ${
            tab === "produtos" ? "bg-[#EE4D2D] text-white" : "text-[#111827]"
          }`}
          onClick={() => setTab("produtos")}
        >
          Produtos
        </button>
        <button
          className={`py-2 rounded-lg transition ${
            tab === "historico" ? "bg-[#EE4D2D] text-white" : "text-[#111827]"
          }`}
          onClick={() => setTab("historico")}
        >
          Histórico
        </button>
      </div>

      {/* Barra de busca + sort */}
      <div className="mt-3 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título..."
          className="flex-1 h-9 rounded-lg border border-[#FFD9CF] bg-white/70 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]/30"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-9 rounded-lg border border-[#FFD9CF] bg-white/70 px-2 text-sm"
        >
          <option value="relevance">Relevância</option>
          <option value="rating_desc">Avaliação — maior</option>
          <option value="price_desc">Preço — maior</option>
          <option value="price_asc">Preço — menor</option>
        </select>
        <button className="h-9 px-3 rounded-lg bg-[#EE4D2D] text-white text-sm">Buscar</button>
      </div>

      {/* Grid compacta (fixa, sem scroll) */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border border-[#FFD9CF] bg-white/80 overflow-hidden"
          >
            <div className="aspect-[4/3] bg-[#FFF9F7] border-b border-[#FFD9CF]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-3 space-y-2">
              <div className="text-[13px] font-semibold leading-snug line-clamp-2">
                {p.title}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="inline-flex items-center gap-1 text-[#6B7280]">
                  <span className="inline-block w-3 h-3 rounded-full bg-amber-400" />
                  {p.rating.toFixed(1)}
                </div>
                <div className="font-semibold">{formatPrice(p.price)}</div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-[#E6F6EC] text-[#067647] border border-[#A9E0BE]">
                  % {p.commissionPercent?.toFixed(0)}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]">
                  Vendas {p.salesCount ?? 0}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
