"use client";

import * as React from "react";
import { motion } from "framer-motion";

/** Ícones inline (sem dependências) */
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896 4.665 23.165l1.401-8.168L.132 9.21l8.2-1.192L12 .587z" />
  </svg>
);
const PercentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="7" cy="7" r="2" strokeWidth="2" />
    <circle cx="17" cy="17" r="2" strokeWidth="2" />
    <path d="M7 17L17 7" strokeWidth="2" />
  </svg>
);
const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M3 17l6-6 4 4 7-7" strokeWidth="2" />
    <path d="M14 8h7v7" strokeWidth="2" />
  </svg>
);
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <path d="M21 21l-4.3-4.3" strokeWidth="2" />
  </svg>
);
const SlidersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" strokeWidth="2" />
    <circle cx="4" cy="14" r="2" strokeWidth="2" />
    <circle cx="12" cy="11" r="2" strokeWidth="2" />
    <circle cx="20" cy="16" r="2" strokeWidth="2" />
  </svg>
);

/** UI helpers */
function Chip({
  children,
  tone = "default",
}: { children: React.ReactNode; tone?: "default" | "success" | "muted" }) {
  const tones = {
    default: "border-[#FFD9CF] bg-white/80 text-[#111827]",
    success: "border-emerald-200 bg-emerald-50/80 text-emerald-700",
    muted: "border-gray-200 bg-gray-50/80 text-gray-600",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] ${tones[tone]}`}>
      {children}
    </span>
  );
}

function MiniCard({
  title,
  price,
  rating,
  commissionPct,
  sales,
  delay = 0,
}: {
  title: string;
  price: string;
  rating: string;
  commissionPct: string;
  sales: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="rounded-xl border border-[#FFD9CF] bg-white/90 backdrop-blur p-2 w-full"
    >
      <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-[#F1F1F1]" />
      <div className="pt-2 space-y-1">
        <p className="text-[11px] font-medium leading-snug line-clamp-2 text-[#111827]">{title}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] text-gray-600">
            <StarIcon className="w-3.5 h-3.5 text-amber-300" />
            {rating}
          </div>
          <span className="text-[11px] font-semibold">{price}</span>
        </div>
        <div className="flex items-center gap-1">
          <Chip tone="success">
            <PercentIcon className="w-3 h-3" />
            {commissionPct}
          </Chip>
          <Chip tone="muted">
            <TrendingUpIcon className="w-3 h-3" />
            Vendas {sales}
          </Chip>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Moldura do “quadradinho” */}
      <div className="rounded-2xl border border-[#FFD9CF] bg-white/60 backdrop-blur shadow-[0_10px_30px_rgba(238,77,45,0.08)] p-3 md:p-4 w-full max-w-[560px]">
        {/* Tabs */}
        <div className="grid grid-cols-2 text-[12px] rounded-lg overflow-hidden border border-[#FFD9CF]">
          <button className="px-3 py-1.5 bg-[#EE4D2D] text-white font-medium">Produtos</button>
          <button className="px-3 py-1.5 bg-white text-[#111827]">Histórico</button>
        </div>

        {/* Busca + ordenar (mock) */}
        <div className="mt-2 flex items-center gap-2">
          <div className="relative flex-1">
            <SearchIcon className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Buscar por título..."
              className="pl-7 pr-3 py-1.5 w-full rounded-lg border border-[#FFD9CF] bg-white/80 text-[12px] focus:outline-none"
              readOnly
            />
          </div>
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-8 py-1.5 text-[12px] rounded-lg border border-[#FFD9CF] bg-white/80"
              defaultValue="relevance"
              disabled
            >
              <option value="relevance">Relevância</option>
              <option>Comissão (R$) — maior</option>
              <option>Comissão (%) — maior</option>
              <option>Vendas — maior</option>
            </select>
            <SlidersIcon className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Área fixa (sem scroll) */}
        <div className="mt-3 h-[260px] md:h-[280px] rounded-xl border border-[#FFD9CF] bg-white/50 p-2 overflow-hidden">
          <div className="grid grid-cols-2 gap-2">
            <MiniCard
              title="Funko Pop – Produto Oficial Funko Pronta Entrega"
              price="R$ 59,99"
              rating="5.0"
              commissionPct="3%"
              sales="3"
              delay={0.05}
            />
            <MiniCard
              title="Funko Pop UV Protector – Acrílico Oficial Funko"
              price="R$ 95,92"
              rating="5.0"
              commissionPct="7%"
              sales="2"
              delay={0.12}
            />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
            <Chip>Legenda (IA)</Chip>
            <Chip>UTM + SubIDs</Chip>
            <Chip>Agendamento</Chip>
          </div>
        </div>
      </div>

      {/* Glow suave atrás */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 -right-8 -top-8 h-40 w-40 rounded-full blur-2xl"
        style={{ background: "rgba(238,77,45,0.20)" }}
      />
    </motion.div>
  );
}
