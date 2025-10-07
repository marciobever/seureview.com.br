'use client';

import { motion } from 'framer-motion';

const itens = [
  { n: 'Ana Souza', d: 'Economizei horas por dia. Agora tudo sai automático, pronto pra postar.' },
  { n: 'Rafael Costa', d: 'Os SubIDs me ajudaram a entender o que realmente dá retorno em cada canal.' },
  { n: 'Beatriz Lima', d: 'As legendas com IA são ótimas! Publicar virou algo rápido e divertido.' },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section">
      <div className="max-container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Quem usa, <span className="text-gradient">recomenda</span>
          </motion.h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Comentários de criadores e afiliados que aceleraram seus resultados com o SeuReview.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {itens.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card bg-white"
            >
              <div className="card-body">
                <p className="text-sm text-gray-700 leading-relaxed">“{p.d}”</p>
                <div className="mt-3 text-xs text-gray-500">— {p.n}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
