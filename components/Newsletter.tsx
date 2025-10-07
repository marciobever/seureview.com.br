'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    try {
      const r = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setOk(r.ok);
      if (r.ok) setEmail('');
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="Seu melhor e-mail"
          className="flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="E-mail para receber novidades"
        />
        <button className="btn btn-primary" disabled={loading}>
          {loading ? 'Enviando...' : 'Assinar'}
        </button>
      </form>
      {ok === true && <p className="mt-2 text-sm text-green-600">Pronto! Você vai receber nossas novidades.</p>}
      {ok === false && <p className="mt-2 text-sm text-red-600">Não foi possível assinar agora. Tente novamente.</p>}
    </div>
  );
}
