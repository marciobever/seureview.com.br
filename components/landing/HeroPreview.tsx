"use client";

import * as React from "react";

/* Ícones inline */
function IconStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
    </svg>
  );
}
function IconPercent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M7 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm10 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM6 19l12-14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconTrendingUp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3 17l6-6 4 4 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 8h7v7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconSearch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Tipos e helpers */
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
  return `${Math.round(v)}%`;
}

/* Card compacto */
function MiniCard({ item }: { item: MiniItem }) {
  const hasPercent = typeof item.commissionPercent === "number";
  const hasSales = typeof item.salesCount === "number";

  return (
    <article className="rounded-xl border border-[#FFD9CF] bg-white/85 backdrop-blur p-3 shadow-sm hover:shadow transition">
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#FFD9CF] bg-[#FFF9F7]">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="mt-3 space-y-2">
          <h3 className="text-[13px] font-semibold text-[#111827] line-clamp-2">{item.title}</h3>

          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1 text-[#6B7280] text-xs">
              <IconStar className="w-4 h-4 text-amber-400" />
              <span>{Number(item.rating || 0).toFixed(1)}</span>
            </div>
            <div className="text-sm font-semibold">{formatPrice(item.price)}</div>
          </div>

          <div className="flex items-center justify-end gap-2">
            {hasPercent && (
              <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium bg-green-50 text-green-700 border border-green-200">
                <IconPercent className="w-3 h-3" />
                {formatPercent(item.commissionPercent)}
              </span>
            )}
            {hasSales && (
              <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
                <IconTrendingUp className="w-3 h-3" />
                Vendas {item.salesCount?.toLocaleString("pt-BR")}
              </span>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}

/* Normalizador */
function normalizeItems(raw: any[]): MiniItem[] {
  return raw.slice(0, 2).map((it: any, idx: number) => {
    const id =
      it.id ??
      it.product_uid ??
      (it.shop_id != null && it.item_id != null ? `${it.shop_id}_${it.item_id}` : String(idx));
    const title = it.title ?? it.nome ?? it.name ?? "Produto";
    const price = Number(it.price ?? it.preco_min ?? it.preco ?? it.sale_price ?? it.price_min ?? 0);
    const rating = Number(it.rating ?? it.avaliacao ?? it.item_rating?.rating_star ?? 0);
    const image =
      it.image ??
      it.image_url ??
      (Array.isArray(it.images) && it.images[0] ? it.images[0] : "") ??
      "";
    const url = it.url ?? it.offer_link ?? it.product_link ?? `https://shopee.com.br/product/${id}`;
    const commissionPercent =
      it.commissionPercent ??
      it.commission_percent ??
      it.commission_rate ??
      it.max_commission_rate ??
      undefined;
    const salesCount =
      it.salesCount ?? it.sales_count ?? it.vendas ?? it.historical_sold ?? it.sold ?? undefined;

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
}

/* Componente principal */
export default function HeroPreview({ initialItems }: { initialItems?: MiniItem[] }) {
  const [query, setQuery] = React.useState("");
  const [items, setItems] = React.useState<MiniItem[]>(
    initialItems && initialItems.length >= 2
      ? initialItems.slice(0, 2)
      : [
          {
            id: "demo-1",
            title: "Tênis Performance X — leve, macio e com ótimo amortecimento",
            price: 199.9,
            rating: 4.8,
            image:
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
            url: "https://shopee.com.br/product/000/111",
            commissionPercent: 12,
            salesCount: 1543,
          },
          {
            id: "demo-2",
            title: "Fone Bluetooth Pro — cancelamento ativo e bateria 30h",
            price: 129.9,
            rating: 4.9,
            image:
              "https://images.unsplash.com/photo-1518443883431-b4f51f1b3a58?q=80&w=1200&auto=format&fit=crop",
            url: "https://shopee.com.br/product/000/222",
            commissionPercent: 18,
            salesCount: 2410,
          },
        ]
  );
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState<string | null>(null);

  async function runSearch() {
    const q = query.trim() || "liquidificador";
    setLoading(true);
    setErr(null);
    try {
      const r = await fetch("/api/search/shopee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q, filters: { limit: 12 }, sort: "relevance", country: "BR" }),
        cache: "no-store",
      });

      if (!r.ok) {
        if (r.status === 404) throw new Error("API de busca não encontrada neste projeto.");
        throw new Error(`Erro ${r.status} ao buscar.`);
      }

      const ct = r.headers.get("content-type") || "";
      if (!ct.includes("application/json")) throw new Error("Resposta inesperada da API.");

      const data = await r.json();
      const list = Array.isArray(data?.items) ? data.items : [];
      const next = normalizeItems(list);
      if (next.length) setItems(next);
      else setErr("Não encontrei produtos para este termo.");
    } catch (e: any) {
      // Mensagem amigável, sem despejar HTML
      setErr(e?.message || "Falha ao buscar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-xl p-4">
      <div className="rounded-2xl border border-[#FFD9CF] bg-white/85 backdrop-blur shadow-sm overflow-hidden">
        <div className="p-4 border-b border-[#FFD9CF]">
          <div className="text-sm text-[#6B7280]">Prévia do painel</div>
          <div className="mt-3 flex gap-2">
            <div className="relative flex-1">
              <IconSearch className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runSearch()}
                placeholder="Buscar produto (ex.: fone bluetooth)…"
                className="pl-9 pr-3 py-2 text-sm rounded-lg w-full border border-[#FFD9CF] focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]/30 focus:border-[#EE4D2D] bg-white/90"
              />
            </div>
            <button
              onClick={runSearch}
              disabled={loading}
              className="px-4 py-2 rounded-lg text-sm bg-[#EE4D2D] hover:bg-[#D8431F] text-white disabled:opacity-60"
            >
              {loading ? "Buscando…" : "Buscar"}
            </button>
          </div>
          {err ? <p className="mt-2 text-xs text-[#B42318]">{err}</p> : null}
        </div>

        <div className="p-4 grid grid-cols-2 gap-3">
          {items.map((it) => (
            <MiniCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </div>
  );
}
