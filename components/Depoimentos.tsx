"use client";

import { motion } from "framer-motion";

const depo = [
  {
    nome: "Ana Souza",
    texto:
      "Economizei horas por dia. Agora tudo sai automático, pronto pra postar.",
    tagLeft: "Fluxo 100% automático",
    tagRight: "↑ 2h/dia",
  },
  {
    nome: "Rafael Costa",
    texto:
      "Os SubIDs mostraram o que realmente dá retorno em cada canal.",
    tagLeft: "CTR +38%",
    tagRight: "ROI mais claro",
  },
  {
    nome: "Beatriz Lima",
    texto:
      "As legendas com IA são ótimas! Publicar ficou rápido e divertido.",
    tagLeft: "Legenda IA",
    tagRight: "Calendário ágil",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section">
      <div className="max-container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Quem usa, <span className="bg-gradient-to-r from-[#FF8A66] to-[#EE4D2D] bg-clip-text text-transparent">recomenda</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Histórias reais de quem acelerou a rotina e melhorou resultados com o SeuReview.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {depo.map((d, i) => (
            <motion.article
              key={d.nome}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-[#FFD9CF] bg-white/80 backdrop-blur shadow-sm"
            >
              <div className="p-5">
                <p className="text-[15px] leading-relaxed text-gray-800">“{d.texto}”</p>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <div className="font-medium text-gray-700">— {d.nome}</div>
                  {/* sem estrelas/nota, conforme pedido */}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-[#FFD9CF] bg-[#FFF7F5] px-2.5 py-1 text-[11px]">
                    {d.tagLeft}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-[11px]">
                    {d.tagRight}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
