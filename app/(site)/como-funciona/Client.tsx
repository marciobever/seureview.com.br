"use client";

import * as React from "react";
import AuthCTA from "@/components/AuthCTA";
import SiteHeader from "@/components/SiteHeader";

// ---------- Ícones ----------
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73L5.82 21z" />
    </svg>
  );
}
function PercentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M19 5L5 19" strokeWidth="2" />
      <circle cx="7.5" cy="7.5" r="2.5" strokeWidth="2" />
      <circle cx="16.5" cy="16.5" r="2.5" strokeWidth="2" />
    </svg>
  );
}
function TrendingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M3 17l6-6 4 4 7-7" strokeWidth="2" />
      <path d="M14 8h7v7" strokeWidth="2" />
    </svg>
  );
}
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" strokeWidth="2" />
    </svg>
  );
}

// ---------- Tipos / Helpers ----------
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
  return `${v.toFixed(0)}%`;
}
function compactSales(n?: number) {
  const v = Number(n ?? 0);
  if (v >= 1000) return `${Math.round(v / 100) / 10}k`;
  return `${v}`;
}

// ---------- Mocks ----------
const MOCK_PRODUCTS: MiniItem[] = [
  {
    id: "p1",
    title: "Liquidificador 1200W Inox — Copo 2L, 12 Velocidades",
    price: 219.9,
    rating: 4.6,
    image: "/landing/liquidificador.jpg",
    url: "#",
    commissionPercent: 12,
    salesCount: 780,
  },
  {
    id: "p2",
    title: "Liquidificador PowerGlass 800W — Jarra de Vidro 1.5L",
    price: 189.0,
    rating: 4.4,
    image: "/landing/liquidificador2.jpg",
    url: "#",
    commissionPercent: 10,
    salesCount: 630,
  },
];

// ---------- UI ----------
function Badge({
  tone = "default",
  className = "",
  children,
}: {
  tone?: "default" | "success";
  className?: string;
  children: React.ReactNode;
}) {
  const base = "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] border";
  const theme =
    tone === "success"
      ? "border-[#C1F1C9] bg-[#EFFFF2] text-[#1B6B3A]"
      : "border-gray-200 bg-gray-50 text-gray-700";
  return <span className={`${base} ${theme} ${className}`}>{children}</span>;
}

function ProductCard({ product }: { product: MiniItem }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#FFD9CF] bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-[#FFF9F7] border-b border-[#FFD9CF]">
        {/* usa <img> simples para evitar edge-cases do next/image em client-only */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-3 space-y-2">
        <h3 className="text-sm font-semibold text-[#111827] line-clamp-2">
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1 text-[#6B7280] text-sm">
            <StarIcon className="w-4 h-4 text-amber-400" />
            <span>{Number(product.rating || 0).toFixed(1)}</span>
          </div>
          <div className="text-sm font-semibold">{formatPrice(product.price)}</div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <Badge tone="success" className="inline-flex items-center gap-1">
            <PercentIcon className="w-3 h-3" />
            {formatPercent(product.commissionPercent ?? 0)}
          </Badge>

          {typeof product.salesCount === "number" && (
            <Badge className="inline-flex items-center gap-1">
              <TrendingIcon className="w-3 h-3" />
              {compactSales(product.salesCount)} vendas
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}

function MockSearchPanel() {
  return (
    <div className="rounded-2xl border border-[#FFD9CF] bg-white/80 backdrop-blur">
      <div className="p-3 border-b border-[#FFD9CF] bg-[#FFF7F5] flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <SearchIcon className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            disabled
            placeholder="Ex.: liquidificador"
            className="w-full pl-8 pr-3 py-2 text-sm rounded-md border focus:outline-none bg-white"
          />
        </div>
        <button
          disabled
          className="ml-3 px-3 py-2 text-sm rounded-md bg-[#EE4D2D]/90 text-white hover:bg-[#D8431F] disabled:opacity-60"
          title="Demonstração"
        >
          Buscar (demo)
        </button>
      </div>

      <div className="p-3">
        <div className="grid sm:grid-cols-2 gap-3">
          {MOCK_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-3 text-[11px] text-gray-500">
          * Demonstração visual. Resultados reais aparecem no painel autenticado.
        </div>
      </div>
    </div>
  );
}

function MockComposer() {
  return (
    <div className="rounded-2xl border border-[#FFD9CF] bg-white/80 backdrop-blur">
      <div className="p-3 border-b border-[#FFD9CF] bg-[#FFF7F5] font-semibold text-sm">
        Composer (legenda + links)
      </div>
      <div className="p-3 grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <label className="text-xs text-gray-500">Título</label>
          <input className="w-full px-3 py-2 rounded-md border" defaultValue="Liquidificador 1200W — Potência e durabilidade" />
          <label className="text-xs text-gray-500">Legenda (IA)</label>
          <textarea
            className="w-full px-3 py-2 rounded-md border min-h-[110px]"
            defaultValue={`Tritura gelo, frutas e vitaminas em segundos 🧊🍓
Link com desconto e entrega rápida 👇`}
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-500">UTM Source</label>
              <input className="w-full px-3 py-2 rounded-md border" defaultValue="instagram" />
            </div>
            <div>
              <label className="text-xs text-gray-500">SubID</label>
              <input className="w-full px-3 py-2 rounded-md border" defaultValue="reels-05" />
            </div>
          </div>
          <button className="px-3 py-2 rounded-md bg-[#EE4D2D] text-white text-sm hover:bg-[#D8431F]">
            Gerar variações
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-gray-500">Prévia</label>
          <div className="rounded-lg border p-3 space-y-2">
            <div className="font-semibold text-sm">
              Liquidificador 1200W — Potência e durabilidade
            </div>
            <p className="text-sm text-gray-700">
              Tritura gelo, frutas e vitaminas em segundos 🧊🍓<br />
              Link com desconto e entrega rápida 👇
            </p>
            <div className="text-xs text-[#EE4D2D]">seureview.com.br/r/abc123?utm_source=instagram&subid=reels-05</div>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 border text-xs">
                #liquidificador
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 border text-xs">
                #cozinha
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-md border text-sm hover:bg-gray-50">
              Agendar
            </button>
            <button className="px-3 py-2 rounded-md bg-[#EE4D2D] text-white text-sm hover:bg-[#D8431F]">
              Publicar agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockMetrics() {
  return (
    <div className="rounded-2xl border border-[#FFD9CF] bg-white/80 backdrop-blur">
      <div className="p-3 border-b border-[#FFD9CF] bg-[#FFF7F5] font-semibold text-sm">
        Métricas (amostra)
      </div>
      <div className="p-3 grid sm:grid-cols-3 gap-3 text-center">
        <div className="rounded-lg border p-4">
          <div className="text-xs text-gray-500">Cliques</div>
          <div className="text-2xl font-bold">1.284</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-xs text-gray-500">Engajamento</div>
          <div className="text-2xl font-bold">5,8%</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-xs text-gray-500">Receita estimada</div>
          <div className="text-2xl font-bold">R$ 412</div>
        </div>
      </div>
    </div>
  );
}

export default function Client() {
  const passos = [
    { t: "Descoberta de produtos", d: "Selecionamos ofertas com alta tração em marketplaces (Shopee, Amazon, Mercado Livre, AliExpress, Temu)." },
    { t: "Geração de conteúdo", d: "IA cria títulos, bullets e legendas com foco em CTR e conversão para Instagram, Facebook e Reels." },
    { t: "Links rastreáveis", d: "Criação automática de UTM e SubIDs por canal/campanha para medir performance." },
    { t: "Publicação e agendamento", d: "Publique agora ou agende horários de pico em poucos cliques." },
    { t: "Métricas", d: "Acompanhe cliques, engajamento e receita estimada em tempo real." },
    { t: "Colaboração", d: "Convide equipe e gerencie múltiplas contas com segurança." },
  ];

  return (
    <main className="section">
      <SiteHeader />
      <div className="max-container">
        <h1 className="text-3xl md:text-4xl font-bold">Como funciona</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Um fluxo direto para transformar produtos em conteúdo que vende.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {passos.map((p) => (
            <div key={p.t} className="card">
              <div className="card-body">
                <div className="font-semibold text-lg">{p.t}</div>
                <p className="mt-2 text-sm text-gray-600">{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Telas de exemplo: Busca / Composer / Métricas */}
        <div className="mt-12 grid gap-8">
          <div>
            <div className="text-sm font-semibold mb-3">1) Buscar produtos</div>
            <MockSearchPanel />
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">2) Criar conteúdo</div>
            <MockComposer />
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">3) Acompanhar resultados</div>
            <MockMetrics />
          </div>
        </div>

        {/* CTA login-aware */}
        <section className="mt-12">
          <AuthCTA />
        </section>
      </div>
    </main>
  );
}
