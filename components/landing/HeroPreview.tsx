"use client";

import * as React from "react";

/** Tipos/Mock */
type MiniItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  commissionPct: number; // ex.: 7 -> 7%
  sales: number;         // ex.: 23
};

const MOCK: MiniItem[] = [
  {
    id: "1",
    title: "Funko Pop – Produto Oficial Funko Pronta Entrega",
    image:
      "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=800&auto=format&fit=crop",
    price: 59.99,
    rating: 5.0,
    commissionPct: 3,
    sales: 3,
  },
  {
    id: "2",
    title: "Funko Pop UV Protector – Acrílico Oficial Funko",
    image:
      "https://images.unsplash.com/photo-1549921296-3a6b3f5a0c54?q=80&w=800&auto=format&fit=crop",
    price: 95.92,
    rating: 5.0,
    commissionPct: 7,
    sales: 2,
  },
  {
    id: "3",
    title: "Mini Mixer 5 em 1 Portátil",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop",
    price: 129.0,
    rating: 4.9,
    commissionPct: 5,
    sales: 11,
  },
  {
    id: "4",
    title: "Suporte Acrílico para Colecionáveis",
    image:
      "https://images.unsplash.com/photo-1520975922203-b15d2f1d2c5b?q=80&w=800&auto=format&fit=crop",
    price: 49.9,
    rating: 4.8,
    commissionPct: 6,
    sales: 7,
  },
];

/** Helpers */
function formatBRL(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/** Badge genérica */
function Badge({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "success" | "muted";
}) {
  const base =
    "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium border";
  const style =
    tone === "success"
      ? "bg-green-50/80 text-green-700 border-green-200"
      : "bg-gray-100/80 text-gray-600 border-gray-200";
  return <span className={`${base} ${style}`}>{children}</span>;
}

/** Mini card (coeso com o app) */
function MiniCard({ item }: { item: MiniItem }) {
  return (
    <div className="rounded-xl border border-[#FFD9CF] bg-white/80 backdrop-blur shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-0.5">
      <div className="aspect-[4/3] bg-[#FFF9F7] border-b border-[#FFD9CF]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-3">
        <h3 className="text-[13px] font-semibold text-[#111827] line-clamp-2">
          {item.title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-[#6B7280]">
            <span aria-hidden>⭐️</span>
            <span>{item.rating.toFixed(1)}</span>
          </div>
          <div className="text-sm font-semibold">{formatBRL(item.price)}</div>
        </div>

        {/* Linha de chips: % e Vendas, alinhados à direita */}
        <div className="mt-2 flex items-center justify-end gap-2">
          <Badge tone="success">
            <span aria-hidden>%</span> {item.commissionPct}%
          </Badge>
          <Badge>
            <span aria-hidden>↗</span> Vendas {item.sales}
          </Badge>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="px-3 py-1.5 rounded-lg text-xs bg-[#EE4D2D] hover:bg-[#D8431F] text-white">
            Selecionar
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs border border-[#FFD9CF] hover:bg-[#FFF4F0]">
            Ver na Shopee
          </button>
        </div>
      </div>
    </div>
  );
}

/** Select bem simples, para o preview */
function SortSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-1.5 text-xs rounded-lg border border-[#FFD9CF] bg-white/80 hover:bg-white"
    >
      <option>Relevância</option>
      <option>Comissão (R$) — maior</option>
      <option>Comissão (%) — maior</option>
      <option>Vendas — maior</option>
      <option>Avaliação — maior</option>
      <option>Preço — maior</option>
      <option>Preço — menor</option>
    </select>
  );
}

/** Preview inteiro vai DENTRO do cartão do hero */
export default function HeroPreview() {
  const [tab, setTab] = React.useState<"produtos" | "historico">("produtos");
  const [q, setQ] = React.useState("");
  const [sort, setSort] = React.useState("Relevância");

  // lista pequena só pra compor visualmente
  const items = React.useMemo(() => {
    let arr = MOCK.slice(0, 4);
    if (q.trim()) {
      const s = q.toLowerCase();
      arr = arr.filter((i) => i.title.toLowerCase().includes(s));
    }
    return arr;
  }, [q]);

  return (
    <div className="p-3 md:p-4">
      {/* Tabs */}
      <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-[#FFD9CF] bg-white/70 text-xs">
        <button
          className={`px-3 py-2 ${tab === "produtos" ? "bg-[#EE4D2D] text-white" : "hover:bg-[#FFF4F0]"}`}
          onClick={() => setTab("produtos")}
        >
          Produtos
        </button>
        <button
          className={`px-3 py-2 ${tab === "historico" ? "bg-[#EE4D2D] text-white" : "hover:bg-[#FFF4F0]"}`}
          onClick={() => setTab("historico")}
        >
          Histórico
        </button>
      </div>

      {/* Conteúdo limitado ao cartão */}
      <div className="mt-3 h-[360px] md:h-[380px] flex flex-col">
        {/* Filtros (fixo) */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">🔍</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por título…"
              className="pl-7 pr-3 py-2 w-full text-xs rounded-lg border border-[#FFD9CF] bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]/30"
            />
          </div>
          <SortSelect value={sort} onChange={setSort} />
          <button className="px-3 py-2 rounded-lg text-xs bg-[#EE4D2D] hover:bg-[#D8431F] text-white">
            Buscar
          </button>
        </div>

        {/* Área scrollável dos cards */}
        <div className="mt-3 flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto pr-1">
            {tab === "historico" ? (
              <div className="h-full grid place-items-center text-[12px] text-gray-500">
                Seu histórico aparece aqui no app. (Prévia)
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {items.map((it) => (
                  <MiniCard key={it.id} item={it} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
