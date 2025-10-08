"use client";
import * as React from "react";

/* ==================== ÍCONES ==================== */
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
function LightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}
function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M10 13a5 5 0 007.07 0l2.12-2.12a5 5 0 00-7.07-7.07L10 5" strokeWidth="2" />
      <path d="M14 11a5 5 0 01-7.07 0L4.8 9a5 5 0 017.07-7.07L14 3" strokeWidth="2" />
    </svg>
  );
}
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" />
    </svg>
  );
}
function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M3 3v18h18" strokeWidth="2" />
      <rect x="6" y="13" width="3" height="5" strokeWidth="2" />
      <rect x="11" y="9" width="3" height="9" strokeWidth="2" />
      <rect x="16" y="5" width="3" height="13" strokeWidth="2" />
    </svg>
  );
}

/* ==================== HELPERS ==================== */
type MiniItem = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string; // /public/landing/...
  url: string;
  commissionPercent?: number;
  salesCount?: number;
};

const formatPrice = (n?: number) =>
  Number(n ?? 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const formatPercent = (n?: number) => `${Number(n ?? 0).toFixed(0)}%`;

const compactSales = (n?: number) => {
  const v = Number(n ?? 0);
  if (v >= 1000) return `${Math.round(v / 100) / 10}k`;
  return `${v}`;
};

/* ==================== MOCK DATA ==================== */
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

/* ==================== UI PRIMITIVES ==================== */
function Badge({
  tone = "default",
  className = "",
  children,
}: {
  tone?: "default" | "success";
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] border transition-colors";
  const theme =
    tone === "success"
      ? "border-[#C1F1C9] bg-[#EFFFF2] text-[#1B6B3A]"
      : "border-gray-200 bg-gray-50 text-gray-700";
  return <span className={`${base} ${theme} ${className}`}>{children}</span>;
}

function GradientCard({
  children,
  className = "",
  title,
  eyebrow,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  eyebrow?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-[#FFD9CF] via-[#FFE7E1] to-transparent ${className}`}>
      <div className="rounded-2xl bg-white/80 backdrop-blur border border-[#FFD9CF]">
        {(title || eyebrow) && (
          <div className="flex items-center gap-2 border-b border-[#FFD9CF] px-4 py-2.5 bg-[#FFF7F5]/70 rounded-t-2xl">
            {icon && <span className="text-[#EE4D2D]">{icon}</span>}
            <div className="flex flex-col">
              {eyebrow && <span className="text-[11px] text-[#EE4D2D] font-medium">{eyebrow}</span>}
              {title && <span className="text-sm font-semibold text-[#111827]">{title}</span>}
            </div>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function StepCard({
  n,
  title,
  desc,
  icon,
}: {
  n: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-xl border border-[#FFD9CF] bg-white/70 backdrop-blur p-4 transition-all hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start gap-3">
        <div className="relative">
          <div className="h-8 w-8 rounded-full bg-[#FFF1ED] border border-[#FFD9CF] grid place-items-center text-sm font-semibold text-[#EE4D2D]">
            {n}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[#EE4D2D]">{icon}</span>
            <h3 className="font-semibold">{title}</h3>
          </div>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-[#FFD9CF]/80 transition" />
    </div>
  );
}

/* ==================== BLOCOS DA PÁGINA ==================== */
function ProductCard({ product }: { product: MiniItem }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#FFD9CF] bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-[4/3] bg-[#FFF9F7] border-b border-[#FFD9CF]">
        {/* usa <img> simples (evita edge-cases do next/image em demos) */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-3 space-y-2">
        <h4 className="text-sm font-semibold text-[#111827] line-clamp-2">{product.title}</h4>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1 text-[#6B7280] text-sm">
            <StarIcon className="w-4 h-4 text-amber-400" aria-hidden />
            <span aria-label={`avaliação ${product.rating}`}>{Number(product.rating || 0).toFixed(1)}</span>
          </div>
          <div className="text-sm font-semibold">{formatPrice(product.price)}</div>
        </div>
        <div className="flex items-center justify-between pt-1">
          <Badge tone="success" className="inline-flex items-center gap-1">
            <PercentIcon className="w-3 h-3" aria-hidden />
            {formatPercent(product.commissionPercent ?? 0)}
          </Badge>
          {typeof product.salesCount === "number" && (
            <Badge className="inline-flex items-center gap-1">
              <TrendingIcon className="w-3 h-3" aria-hidden />
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
    <GradientCard title="Buscar produtos" eyebrow="1 • Explorar" icon={<SearchIcon className="h-4 w-4" />}>
      <div className="p-0">
        <div className="p-3 border border-[#FFD9CF] bg-[#FFF7F5] rounded-xl flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <SearchIcon className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden />
            <input
              disabled
              placeholder="Ex.: liquidificador"
              className="w-full pl-8 pr-3 py-2 text-sm rounded-md border focus:outline-none bg-white"
              aria-label="Campo de busca demonstrativo"
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

        <div className="mt-3">
          <div className="grid sm:grid-cols-2 gap-3">
            {MOCK_PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <p className="mt-3 text-[11px] text-gray-500">
            * Demonstração visual. Resultados reais aparecem no painel autenticado.
          </p>
        </div>
      </div>
    </GradientCard>
  );
}

function MockComposer() {
  return (
    <GradientCard title="Composer" eyebrow="2 • Conteúdo" icon={<LightningIcon className="h-4 w-4" />}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs text-gray-500" htmlFor="titulo">Título</label>
          <input
            id="titulo"
            className="w-full px-3 py-2 rounded-md border"
            defaultValue="Liquidificador 1200W — Potência e durabilidade"
          />

          <label className="text-xs text-gray-500" htmlFor="legenda">Legenda (IA)</label>
          <textarea
            id="legenda"
            className="w-full px-3 py-2 rounded-md border min-h-[110px]"
            defaultValue={`Tritura gelo, frutas e vitaminas em segundos 🧊🍓
Link com desconto e entrega rápida 👇`}
          />

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-500" htmlFor="utm">UTM Source</label>
              <input id="utm" className="w-full px-3 py-2 rounded-md border" defaultValue="instagram" />
            </div>
            <div>
              <label className="text-xs text-gray-500" htmlFor="subid">SubID</label>
              <input id="subid" className="w-full px-3 py-2 rounded-md border" defaultValue="reels-05" />
            </div>
          </div>

          <div className="flex gap-2 pt-1">
            <button className="px-3 py-2 rounded-md bg-[#EE4D2D] text-white text-sm hover:bg-[#D8431F]">
              Gerar variações
            </button>
            <button className="px-3 py-2 rounded-md border text-sm hover:bg-gray-50">
              Salvar rascunho
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-gray-500">Prévia</label>
          <div className="rounded-lg border p-3 space-y-2 bg-white">
            <div className="font-semibold text-sm">
              Liquidificador 1200W — Potência e durabilidade
            </div>
            <p className="text-sm text-gray-700">
              Tritura gelo, frutas e vitaminas em segundos 🧊🍓<br />
              Link com desconto e entrega rápida 👇
            </p>
            <div className="text-xs text-[#EE4D2D]">
              seureview.com.br/r/abc123?utm_source=instagram&subid=reels-05
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 border text-xs">#liquidificador</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 border text-xs">#cozinha</span>
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
    </GradientCard>
  );
}

function MockMetrics() {
  return (
    <GradientCard title="Métricas (amostra)" eyebrow="3 • Performance" icon={<ChartIcon className="h-4 w-4" />}>
      <div className="grid sm:grid-cols-3 gap-3 text-center">
        <div className="rounded-lg border p-4 bg-white/90">
          <div className="text-xs text-gray-500">Cliques</div>
          <div className="text-2xl font-bold">1.284</div>
        </div>
        <div className="rounded-lg border p-4 bg-white/90">
          <div className="text-xs text-gray-500">Engajamento</div>
          <div className="text-2xl font-bold">5,8%</div>
        </div>
        <div className="rounded-lg border p-4 bg-white/90">
          <div className="text-xs text-gray-500">Receita estimada</div>
          <div className="text-2xl font-bold">R$ 412</div>
        </div>
      </div>
    </GradientCard>
  );
}

/* ==================== PÁGINA ==================== */
export default function ClientPage() {
  const passos = [
    { t: "Descoberta de produtos", d: "Selecionamos ofertas com alta tração em marketplaces (Shopee, Amazon, Mercado Livre, AliExpress, Temu).", icon: <SearchIcon className="h-4 w-4" /> },
    { t: "Geração de conteúdo", d: "IA cria títulos, bullets e legendas com foco em CTR e conversão para Instagram, Facebook e Reels.", icon: <LightningIcon className="h-4 w-4" /> },
    { t: "Links rastreáveis", d: "Criação automática de UTM e SubIDs por canal/campanha para medir performance.", icon: <LinkIcon className="h-4 w-4" /> },
    { t: "Publicação e agendamento", d: "Publique agora ou agende horários de pico em poucos cliques.", icon: <CalendarIcon className="h-4 w-4" /> },
    { t: "Métricas", d: "Acompanhe cliques, engajamento e receita estimada em tempo real.", icon: <ChartIcon className="h-4 w-4" /> },
    { t: "Colaboração", d: "Convide equipe e gerencie múltiplas contas com segurança.", icon: <PercentIcon className="h-4 w-4" /> },
  ];

  return (
    <main className="section relative">
      {/* fundo premium (radiais suaves) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(238,77,45,0.15) 0%, rgba(238,77,45,0) 60%), radial-gradient(900px 500px at 100% 0%, rgba(255,140,105,0.12) 0%, rgba(255,140,105,0) 55%)",
        }}
      />

      <div className="max-container">
        {/* Título da página */}
        <header className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-[#EE4D2D] bg-[#FFF1ED] border border-[#FFD9CF] rounded-full px-2.5 py-1">
            Guia • Passo a passo
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Como <span className="bg-gradient-to-r from-[#FF8A66] to-[#EE4D2D] bg-clip-text text-transparent">funciona</span>
          </h1>
          <p className="mt-3 text-gray-600">
            Um fluxo direto para transformar produtos em conteúdo que vende.
          </p>
        </header>

        {/* Passos */}
        <section className="mt-10 grid md:grid-cols-3 gap-6">
          {passos.map((p, i) => (
            <StepCard key={p.t} n={i + 1} title={p.t} desc={p.d} icon={p.icon} />
          ))}
        </section>

        {/* Demos */}
        <section className="mt-12 grid gap-8">
          <MockSearchPanel />
          <MockComposer />
          <MockMetrics />
        </section>

        {/* CTA final */}
        <section className="mt-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#FFD9CF] bg-white/70 p-6 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute -z-10 -right-16 -top-16 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "rgba(238,77,45,0.16)" }}
            />
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Pronto para <span className="bg-gradient-to-r from-[#FF8A66] to-[#EE4D2D] bg-clip-text text-transparent">acelerar</span> suas comissões?
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Publique produtos prontos com links rastreáveis e legendas otimizadas — em minutos.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href="/signup" className="px-4 py-2 rounded-lg text-sm bg-[#EE4D2D] hover:bg-[#D8431F] text-white shadow-sm">
                Criar conta grátis
              </a>
              <a href="/login" className="px-4 py-2 rounded-lg text-sm border border-[#FFD9CF] hover:bg-[#FFF4F0] text-[#111827]">
                Entrar
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
