'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

/* ---------- dados (pode editar à vontade) ---------- */
type Testimonial = {
  name: string;
  role: string;
  quote: string;
  meta: string[];              // chips extras
  from: string;                // gradiente do avatar/borda
  to: string;
  rating?: number;             // opcional
};

const testimonials: Testimonial[] = [
  {
    name: 'Ana Souza',
    role: 'Afiliada • Shopee',
    quote:
      'Economizei horas por dia. Agora tudo sai automático, pronto pra postar.',
    meta: ['↑ 2h/dia', 'Fluxo 100% automático'],
    from: '#FF8A66',
    to: '#EE4D2D',
    rating: 4.9,
  },
  {
    name: 'Rafael Costa',
    role: 'Conteúdo & SubIDs',
    quote:
      'Os SubIDs mostraram o que realmente dá retorno em cada canal.',
    meta: ['CTR +38%', 'ROI mais claro'],
    from: '#6EE7B7',
    to: '#3B82F6',
    rating: 4.8,
  },
  {
    name: 'Beatriz Lima',
    role: 'Social Commerce',
    quote:
      'As legendas com IA são ótimas! Publicar ficou rápido e divertido.',
    meta: ['Legenda IA', 'Calendário ágil'],
    from: '#A78BFA',
    to: '#EC4899',
    rating: 5.0,
  },
  {
    name: 'João Mendes',
    role: 'Amazon • ML',
    quote:
      'A curadoria salva! Encontro produtos quentes e já publico com rastreamento.',
    meta: ['Produtos virais', 'UTM + SubIDs'],
    from: '#F59E0B',
    to: '#10B981',
    rating: 4.7,
  },
  {
    name: 'Larissa Prado',
    role: 'Creator',
    quote:
      'Meu processo ficou bonito e simples. Tudo no mesmo lugar — maravilhoso.',
    meta: ['Painel unificado', 'Menos cliques'],
    from: '#22D3EE',
    to: '#6366F1',
    rating: 4.9,
  },
  {
    name: 'Pedro Azevedo',
    role: 'Tráfego Orgânico',
    quote:
      'Nunca foi tão fácil manter consistência sem gastar o dia inteiro.',
    meta: ['Consistência ↑', 'Foco em conteúdo'],
    from: '#34D399',
    to: '#F43F5E',
    rating: 4.8,
  },
];

/* ---------- helpers ---------- */
function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function Stars({ value = 5 }: { value?: number }) {
  // desenha 5 estrelas, preenchendo de acordo com value
  const full = Math.round(Math.min(Math.max(value, 0), 5));
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < full ? 'fill-current' : 'fill-gray-200'}`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 0 0-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 0 0 .95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ---------- componente ---------- */
export default function Depoimentos() {
  return (
    <section id="depoimentos" className="relative py-20">
      {/* fundo artístico */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(900px 500px at 10% 0%, rgba(238,77,45,0.10) 0%, rgba(238,77,45,0) 60%), radial-gradient(900px 500px at 90% 40%, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0) 60%)',
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        {/* título */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Quem usa,{' '}
            <span className="bg-gradient-to-r from-[#FF8A66] to-[#EE4D2D] bg-clip-text text-transparent">
              recomenda
            </span>
          </h2>
          <p className="mt-3 text-gray-600">
            Histórias reais de quem acelerou a rotina e aumentou resultados com o SeuReview.
          </p>
        </div>

        {/* grid de depoimentos */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group"
            >
              {/* moldura gradiente */}
              <div
                className="p-[1.5px] rounded-2xl bg-gradient-to-tr shadow-sm"
                style={{ backgroundImage: `linear-gradient(45deg, ${t.from}, ${t.to})` }}
              >
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 p-5 h-full">
                  {/* aspas decorativas */}
                  <svg
                    viewBox="0 0 48 48"
                    className="w-8 h-8 text-[#EE4D2D]/20 mb-3"
                    fill="currentColor"
                  >
                    <path d="M18 10h-6a8 8 0 00-8 8v12h10V22H8c0-2.206 1.794-4 4-4h6V10zm26 0h-6a8 8 0 00-8 8v12h10V22h-6c0-2.206 1.794-4 4-4h6V10z" />
                  </svg>

                  {/* texto */}
                  <p className="text-[15px] leading-relaxed text-gray-800">
                    “{t.quote}”
                  </p>

                  {/* rodapé do card */}
                  <div className="mt-5 flex items-center gap-3">
                    {/* avatar com iniciais */}
                    <div
                      className="h-10 w-10 rounded-full grid place-items-center text-white text-sm font-semibold shadow-sm"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.to})`,
                      }}
                    >
                      {initials(t.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 truncate">
                          {t.name}
                        </span>
                        {t.rating && (
                          <div className="flex items-center gap-1">
                            <Stars value={t.rating} />
                            <span className="text-xs text-gray-500">{t.rating.toFixed(1)}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>

                  {/* chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.meta.map((m) => (
                      <span
                        key={m}
                        className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700"
                      >
                        {/* ícone seta para cima */}
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12l5-5 5 5" />
                          <path d="M12 7v10" />
                        </svg>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* faixa de confiança / estrelas agregadas (opcional) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-xl border bg-white/70 backdrop-blur p-4 flex items-center justify-center gap-3 text-sm text-gray-700"
        >
          <Stars value={4.9} />
          <span>4.9/5 baseado em feedbacks de criadores e afiliados.</span>
        </motion.div>
      </div>
    </section>
  );
}
