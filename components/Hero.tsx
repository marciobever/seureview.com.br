'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const chips = [
  'Legendas com IA',
  'UTM + SubIDs',
  'Agendamento',
  'Shopee / Amazon / ML',
  'Analytics',
];

const chipVariants = {
  initial: { y: 10, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.05, duration: 0.5 },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(1200px 600px at 10% -10%, rgba(238,77,45,0.22) 0%, rgba(238,77,45,0) 60%), radial-gradient(900px 500px at 100% 0%, rgba(255,140,105,0.18) 0%, rgba(255,140,105,0) 55%)',
        }}
      />

      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium text-[#EE4D2D] bg-[#FFF1ED] border border-[#FFD9CF] rounded-full px-3 py-1">
              Novo • Multi-marketplaces
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-gradient">Encontre produtos virais</span> e publique em minutos.
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-[58ch]">
              Conecte <strong>Shopee</strong>, <strong>Amazon</strong>, <strong>Mercado Livre</strong>,{' '}
              <strong>AliExpress</strong> e <strong>Temu</strong>. Gere legendas com IA, personalize links
              (UTM/SubIDs) e publique nas suas redes em poucos cliques.
            </p>

            {/* Chips com efeito */}
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c, i) => (
                <motion.span
                  key={c}
                  custom={i}
                  initial="initial"
                  animate="animate"
                  variants={chipVariants}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="chip relative overflow-hidden"
                >
                  <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                  {c}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup" className="btn btn-primary text-base">Começar agora</Link>
              <Link href="/como-funciona" className="btn btn-ghost text-base">Ver como funciona</Link>
            </div>
          </div>

          {/* Mock do painel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            <div className="pointer-events-none absolute -z-10 -right-10 -top-10 h-48 w-48 rounded-full blur-3xl"
                 style={{ background: 'rgba(238,77,45,0.22)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
