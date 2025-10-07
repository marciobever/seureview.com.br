'use client';
import { motion } from 'framer-motion';

const data = [
  { n: 'Ana Souza', d: 'Economizei horas por dia. Agora tudo sai automático, pronto pra postar.' },
  { n: 'Rafael Costa', d: 'Os SubIDs mostraram o que realmente dá retorno em cada canal.' },
  { n: 'Beatriz Lima', d: 'As legendas com IA são ótimas! Publicar ficou rápido e divertido.' },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section">
      <div className="max-container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Quem usa, <span className="text-gradient">recomenda</span></h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
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
