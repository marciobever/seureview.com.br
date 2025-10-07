'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const r = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setOk(r.ok);
      if (r.ok) setEmail('');
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
      setTimeout(() => setOk(null), 3500);
    }
  }

  return (
    <section aria-label="Assine a newsletter" className="rounded-2xl border bg-white">
      <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Receba novidades e oportunidades</h3>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-[48ch]">
            Dicas rápidas de produtos quentes e melhorias do SeuReview,
            direto no seu e-mail. Sem spam, prometido.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex w-full gap-3">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="seuemail@exemplo.com"
            aria-label="Seu e-mail"
            className="flex-1 h-11 md:h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn btn-primary h-11 md:h-12 px-5" disabled={!email || loading}>
            {loading ? 'Enviando…' : 'Quero receber'}
          </button>
        </form>

        {ok === true && (
          <p className="md:col-span-2 text-sm text-green-600">
            Pronto! Você está na lista. 🎉
          </p>
        )}
        {ok === false && (
          <p className="md:col-span-2 text-sm text-red-600">
            Ops, não conseguimos cadastrar agora. Tente novamente.
          </p>
        )}
      </div>
    </section>
  );
}
