"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Percent, TrendingUp, Search as SearchIcon, SlidersHorizontal } from "lucide-react";

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
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            {rating}
          </div>
          <span className="text-[11px] font-semibold">{price}</span>
        </div>
        <div className="flex items-center gap-1">
          <Chip tone="success">
            <Percent className="w-3 h-3" />
            {commissionPct}
          </Chip>
          <Chip tone="muted">
            <TrendingUp className="w-3 h-3" />
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

        {/* Barra de busca + ordenar */}
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
            <SlidersHorizontal className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* “Área” do painel (tamanho controlado, sem scroll) */}
        <div className="mt-3 h-[280px] md:h-[300px] rounded-xl border border-[#FFD9CF] bg-white/50 p-2 overflow-hidden">
          {/* Grid de cards compactos */}
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

          {/* Chips (embaixo) */}
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
