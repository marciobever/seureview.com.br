'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const brands = ['Shopee', 'Amazon', 'Mercado Livre', 'AliExpress', 'Temu'];

const float = {
  animate: (i: number) => ({
    y: [0, -6, 0],
    rotate: [0, 0.6, 0],
    transition: { duration: 3 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }
  })
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden section pt-14">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(1200px 600px at 10% -10%, rgba(238,77,45,0.18) 0%, rgba(238,77,45,0) 60%), radial-gradient(900px 500px at 100% 0%, rgba(255,140,105,0.18) 0%, rgba(255,140,105,0) 55%)'
        }}
      />

      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#EE4D2D] bg-[#FFF1ED] border border-[#FFD9CF] rounded-full px-2.5 py-1"
            >
              Novo • Multi-marketplaces
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="text-gradient">Encontre produtos virais</span> e publique em minutos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 max-w-[58ch]"
            >
              Integre <strong>Shopee</strong>, <strong>Amazon</strong>, <strong>Mercado Livre</strong>,{' '}
              <strong>AliExpress</strong> e <strong>Temu</strong>. Gere legendas com IA, links rastreáveis
              (UTM/SubIDs) e agende posts com poucos cliques.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Link href="/signup" className="btn btn-primary">Começar agora</Link>
              <Link href="/como-funciona" className="btn btn-ghost">Ver como funciona</Link>
            </motion.div>

            {/* Chips com efeitos */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-gray-600">
              {brands.map((m, i) => (
                <motion.span
                  key={m}
                  className="badge cursor-default will-change-transform"
                  whileHover={{ scale: 1.04, rotate: -1 }}
                  whileTap={{ scale: 0.98 }}
                  animate={prefersReduced ? undefined : float.animate(i)}
                >
                  {m}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Mock / card com “profissiona”l */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="h-64 w-full rounded-xl bg-gray-50 grid place-items-center text-gray-400 text-sm">
                  Prévia do composer / painel
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <motion.div whileHover={{ y: -2 }} className="chip">Legenda (IA)</motion.div>
                  <motion.div whileHover={{ y: -2 }} className="chip">UTM + SubIDs</motion.div>
                  <motion.div whileHover={{ y: -2 }} className="chip">Agendamento</motion.div>
                </div>
              </div>
            </div>

            {/* Glow sutil */}
            <div
              className="pointer-events-none absolute -z-10 -right-10 -top-10 h-48 w-48 rounded-full blur-3xl"
              style={{ background: 'rgba(238,77,45,0.25)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
