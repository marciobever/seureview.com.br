'use client';

import { motion } from 'framer-motion';

const items = [
  { n: 'Ana Souza', d: 'Economizei horas por dia. Agora tudo sai automático, pronto pra postar.' },
  { n: 'Rafael Costa', d: 'Os SubIDs me ajudaram a entender o que realmente dá retorno em cada canal.' },
  { n: 'Beatriz Lima', d: 'As legendas com IA são ótimas! Publicar virou algo rápido e divertido.' },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Quem usa, <span className="text-gradient">recomenda</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card bg-white"
            >
              <div className="card-body p-6 md:p-8">
                <p className="text-sm text-gray-700 leading-relaxed">“{p.d}”</p>
                <div className="mt-4 text-xs text-gray-500">— {p.n}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
