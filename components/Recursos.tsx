'use client';

import { motion } from 'framer-motion';

const features = [
  { t: 'Legendas com IA', d: 'Textos sob medida para engajamento e conversão em Instagram, Facebook e Reels.' },
  { t: 'UTM + SubIDs', d: 'Acompanhe cliques e performance por campanha, canal e variação.' },
  { t: 'Multi-marketplaces', d: 'Shopee, Amazon, Mercado Livre, AliExpress, Temu e muito mais.' },
  { t: 'Agendamento inteligente', d: 'Programe publicações para horários de pico com poucos cliques.' },
  { t: 'Estatísticas em tempo real', d: 'CTR, engajamento e receita estimada — tudo em um só lugar.' },
  { t: 'Workspace colaborativo', d: 'Trabalhe com equipe e múltiplas contas com segurança e controle.' },
];

export default function Recursos() {
  return (
    <section id="recursos" className="section">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Recursos que <span className="text-gradient">potencializam</span> suas vendas
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Tudo o que você precisa para transformar produtos em conteúdo que converte — em minutos.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card group"
            >
              <div className="card-body p-6 md:p-8">
                <div className="text-lg font-semibold text-gray-900 group-hover:text-[#EE4D2D] transition">
                  {f.t}
                </div>
                <p className="mt-2 text-sm text-gray-600">{f.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
