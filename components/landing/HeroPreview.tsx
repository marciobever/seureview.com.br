"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type MiniItem = {
  id: string;
  title: string;
  price: string;
  rating: string;
  image: string;
  commission: string; // ex: "7%"
  sales: string;      // ex: "Vendas 12"
};

// dois itens só para ilustrar
const miniItems: MiniItem[] = [
  {
    id: "1",
    title: "Funko Pop – Produto Oficial Funko Pronta Entrega",
    price: "R$ 59,99",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1523473827532-4b37d8dd948d?q=80&w=1200&auto=format&fit=crop",
    commission: "3%",
    sales: "Vendas 3",
  },
  {
    id: "2",
    title: "Funko Pop UV Protector – Acrílico Oficial Funko",
    price: "R$ 95,92",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1200&auto=format&fit=crop",
    commission: "7%",
    sales: "Vendas 2",
  },
];

function Chip({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "success";
}) {
  const base =
    "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium";
  const styles =
    tone === "success"
      ? "bg-[#E9F8F1] text-[#0E8F62] border border-[#C7F0E0]"
      : "bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

function MiniCard({ item }: { item: MiniItem }) {
  return (
    <div className="rounded-xl border border-[#FFD9CF] bg-white overflow-hidden shadow-[0_8px_30px_rgba(17,24,39,0.04)]">
      <div className="aspect-[4/3] bg-[#FFF7F5]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-3 space-y-2">
        <h4 className="text-[12px] font-semibold text-[#111827] leading-snug line-clamp-2">
          {item.title}
        </h4>

        <div className="flex items-center justify-between">
          <div className="text-[12px] text-[#6B7280]">⭐ {item.rating}</div>
          <div className="text-[13px] font-semibold">{item.price}</div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Chip tone="success">% {item.commission}</Chip>
          <Chip>{item.sales}</Chip>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <button className="rounded-lg bg-[#EE4D2D] text-white text-[12px] py-2">
            Selecionar
          </button>
          <button className="rounded-lg border border-[#FFD9CF] text-[12px] py-2">
            Ver na Shopee
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* glow de fundo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 480px at 10% -10%, rgba(238,77,45,0.16) 0%, rgba(238,77,45,0) 60%), radial-gradient(700px 420px at 100% 0%, rgba(255,140,105,0.12) 0%, rgba(255,140,105,0) 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium text-[#EE4D2D] bg-[#FFF1ED] border border-[#FFD9CF] rounded-full px-2.5 py-1">
              Novo • Multi-marketplaces
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-gradient">Encontre produtos virais</span>{" "}
              e publique em minutos.
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-[58ch]">
              SeuReview conecta você às melhores ofertas da{" "}
              <strong>Shopee</strong>, <strong>Amazon</strong>,{" "}
              <strong>Mercado Livre</strong>, <strong>AliExpress</strong> e{" "}
              <strong>Temu</strong> — com legendas inteligentes e links
              rastreáveis.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/signup" className="btn btn-primary">
                Começar agora
              </Link>
              <Link href="/como-funciona" className="btn btn-ghost">
                Ver como funciona
              </Link>
            </div>

            {/* chips informativos */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
              {["Legenda IA", "UTM + SubIDs", "Agendamento", "Shopee • Amazon • ML"].map(
                (c, i) => (
                  <motion.span
                    key={c}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.06 * i }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="chip border-[#FFD9CF] bg-white/90 backdrop-blur"
                  >
                    {c}
                  </motion.span>
                )
              )}
            </div>
          </div>

          {/* Mock do painel — compacto, sem rolagem */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex items-center justify-center"
          >
            <motion.div
              // leve flutuação
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[520px]"
            >
              <div className="rounded-2xl border border-[#FFD9CF] bg-white/80 backdrop-blur-md shadow-[0_25px_80px_rgba(238,77,45,0.08)] overflow-hidden">
                {/* cabeçalho tabs */}
                <div className="p-2">
                  <div className="grid grid-cols-2 rounded-xl border border-[#FFD9CF] bg-white/80">
                    <div className="px-3 py-2 text-center text-[12px] font-semibold rounded-xl bg-[#EE4D2D] text-white">
                      Produtos
                    </div>
                    <div className="px-3 py-2 text-center text-[12px] text-[#6B7280]">
                      Histórico
                    </div>
                  </div>
                </div>

                {/* barra de busca */}
                <div className="px-3 pb-2">
                  <div className="flex gap-2">
                    <input
                      disabled
                      placeholder="Buscar por título…"
                      className="flex-1 px-3 py-2 text-[12px] rounded-lg border border-[#FFD9CF] bg-white/80 pointer-events-none"
                    />
                    <select
                      disabled
                      className="px-2.5 py-2 text-[12px] rounded-lg border border-[#FFD9CF] bg-white/80 pointer-events-none"
                    >
                      <option>Relevância</option>
                      <option>Comissão (R$) — maior</option>
                    </select>
                    <button
                      className="px-3 py-2 text-[12px] rounded-lg bg-[#EE4D2D] text-white pointer-events-none"
                      disabled
                    >
                      Buscar
                    </button>
                  </div>
                </div>

                {/* grade de cards — ALTURA FIXA */}
                <div className="px-3 pb-3">
                  <div
                    className="
                      grid grid-cols-2 gap-3
                      h-[300px] md:h-[320px]
                      overflow-hidden
                      pointer-events-none
                    "
                  >
                    {miniItems.map((it) => (
                      <MiniCard key={it.id} item={it} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
