"use client";

import * as React from "react";

type MiniItem = {
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
function formatSales(n?: number) {
  const v = Number(n ?? 0);
  if (!(v > 0)) return null;
  if (v >= 1000) {
    const k = v / 1000;
    const str = k.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
    return `${str} mil vendas`;
  }
  if (v >= 100) {
    const rounded = Math.floor(v / 100) * 100;
    return `${rounded}+ vendas`;
  }
  return `${v} vendas`;
}

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
      <path
        d="M7 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6 18 18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function TrendingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
      <path
        d="M3 17l6-6 4 4 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function HeroPreview() {
  const [query, setQuery] = React.useState("liquidificador");
  const [items, setItems] = React.useState<MiniItem[]>([]);
  const [loading, setLoading] = React.useState(false);

  // mock inicial bonito (2 produtos) — troca quando a busca retornar
  React.useEffect(() => {
    setItems([
      {
        id: "demo-1",
        title: "Tênis de Corrida Pro X — amortecimento e leveza",
        price: 249.9,
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
    ]);
  }, []);

  async function runSearch() {
    setLoading(true);
    try {
      const res = await fetch("/api/search/shopee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query || "liquidificador",
          filters: { limit: 6 },
          sort: "relevance",
          country: "BR",
        }),
      });
      if (!res.ok) throw new Error("Busca indisponível");
      const data = await res.json();

      const list: MiniItem[] = (Array.isArray(data?.items) ? data.items : []).slice(0, 6).map((it: any) => {
        const id =
          it.id ??
          it.product_uid ??
          (it.shop_id != null && it.item_id != null ? `${it.shop_id}_${it.item_id}` : String(Math.random()));
        const title = it.title ?? it.nome ?? it.name ?? "";
        const price = Number(it.price ?? it.preco_min ?? it.preco ?? it.sale_price ?? 0);
        const rating = Number(it.rating ?? it.avaliacao ?? it.item_rating?.rating_star ?? 0);
        const image =
          it.image ??
          it.image_url ??
          (Array.isArray(it.images) && it.images[0] ? it.images[0] : "") ??
          "";
        const url = it.url ?? it.offer_link ?? it.product_link ?? "#";

        let commissionPercent =
          it.commissionPercent ??
          it.commission_percent ??
          it.commission_rate ??
          it.max_commission_rate;

        let salesCount = it.salesCount ?? it.sales_count ?? it.vendas ?? it.historical_sold ?? it.sold ?? it.sales;

        return {
          id: String(id),
          title,
          price,
          rating,
          image,
          url,
          commissionPercent: commissionPercent != null ? Number(commissionPercent) : undefined,
          salesCount: salesCount != null ? Number(salesCount) : undefined,
        };
      });

      if (list.length) setItems(list);
    } catch {
      // mantém os mocks se falhar
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 md:p-5 w-full max-w-[680px]">
      {/* topo do painel */}
      <div className="flex items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar produto…"
          className="flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]/30"
          onKeyDown={(e) => e.key === "Enter" && runSearch()}
        />
        <button
          onClick={runSearch}
          disabled={loading}
          className="whitespace-nowrap rounded-lg bg-[#EE4D2D] px-3 py-2 text-sm text-white hover:bg-[#D8431F] disabled:opacity-60"
        >
          {loading ? "Buscando…" : "Buscar"}
        </button>
      </div>

      {/* grid de cards */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-xl border border-[#FFD9CF] bg-white/80 backdrop-blur">
            <div className="aspect-[4/3] bg-[#FFF9F7] border-b border-[#FFD9CF]">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="space-y-2 p-3">
              <h3 className="line-clamp-2 text-[13px] font-semibold text-[#111827]">{p.title}</h3>

              {/* linha: estrelas + preço */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1 text-[13px] text-[#6B7280]">
                  <StarIcon className="h-4 w-4 text-amber-400" />
                  <span>{Number(p.rating || 0).toFixed(1)}</span>
                </div>
                <div className="text-sm font-semibold">{formatPrice(p.price)}</div>
              </div>

              {/* linha: comissão (abaixo das estrelas) à esquerda, vendas à direita */}
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
                  {formatSales(p.salesCount) && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] text-gray-700">
                      <TrendingIcon className="h-3.5 w-3.5" />
                      {formatSales(p.salesCount)}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
