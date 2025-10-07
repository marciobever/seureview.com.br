"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const chips = ["Legenda IA", "UTM + SubIDs", "Agendamento", "Shopee • Amazon • ML"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(238,77,45,0.18) 0%, rgba(238,77,45,0) 60%), radial-gradient(900px 500px at 100% 0%, rgba(255,140,105,0.14) 0%, rgba(255,140,105,0) 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium text-[#EE4D2D] bg-[#FFF1ED] border border-[#FFD9CF] rounded-full px-2.5 py-1">
              Novo • Multi-marketplaces
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-gradient">Encontre produtos virais</span> e publique em minutos.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-[58ch]">
              SeuReview conecta você às melhores ofertas da <strong>Shopee</strong>, <strong>Amazon</strong>,
              <strong> Mercado Livre</strong>, <strong>AliExpress</strong> e <strong>Temu</strong> — com
              legendas inteligentes e links rastreáveis.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/signup" className="btn btn-primary">Começar agora</Link>
              <Link href="/como-funciona" className="btn btn-ghost">Ver como funciona</Link>
            </div>

            {/* chips com micro animação */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
              {chips.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.08 * i, ease: "easeOut" }}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="chip border-[#FFD9CF] bg-white/90 backdrop-blur"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Mock do painel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="h-64 w-full rounded-xl bg-gray-50 grid place-items-center text-gray-400 text-sm">
                  Prévia do painel / composer
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div className="chip">Legenda (IA)</div>
                  <div className="chip">UTM + SubIDs</div>
                  <div className="chip">Agendamento</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -z-10 -right-10 -top-10 h-48 w-48 rounded-full blur-3xl" style={{ background: "rgba(238,77,45,0.25)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
