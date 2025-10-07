'use client';
import { motion } from 'framer-motion';

const itens = [
  { t: 'Legendas com IA', d: 'Textos prontos para Instagram, Facebook e Reels.' },
  { t: 'UTM + SubIDs', d: 'Acompanhe cliques e receita por canal/campanha.' },
  { t: 'Multi-marketplaces', d: 'Shopee, Amazon, Mercado Livre, AliExpress, Temu.' },
  { t: 'Agendamento', d: 'Publique nos melhores horários automaticamente.' },
  { t: 'Analytics', d: 'CTR, engajamento e receita estimada.' },
  { t: 'Times & Workspaces', d: 'Colaboração segura com múltiplas contas.' },
];

export default function Recursos() {
  return (
    <section id="recursos" className="section">
      <div className="max-container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Recursos que <span className="text-gradient">potencializam</span> suas vendas
          </h2>
          <p className="mt-3 text-gray-600">
            Transforme produtos em conteúdo que converte — em minutos.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {itens.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="card group"
            >
              <div className="card-body">
                <div className="font-semibold text-lg text-gray-900 group-hover:text-[#EE4D2D] transition">
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
