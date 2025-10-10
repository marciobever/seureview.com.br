'use client';

import * as React from 'react';
import Link from 'next/link';

type Me =
  | { ok: true; id: string; name: string; email?: string; avatar_url?: string | null }
  | { ok: false };

export default function LoggedUserChip() {
  const [me, setMe] = React.useState<Me | null>(null);

  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch('https://app.seureview.com.br/api/me', {
          credentials: 'include',            // << envia o cookie do APP
          headers: { 'Accept': 'application/json' },
        });
        const j = (await res.json()) as Me;
        if (alive) setMe(j);
      } catch {
        if (alive) setMe({ ok: false });
      }
    })();
    return () => { alive = false; };
  }, []);

  if (!me?.ok) return null; // não logado = não mostra

  const first = (me as any).name?.split(' ')?.[0] || 'Você';

  return (
    <Link
      href="https://app.seureview.com.br"
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-sm hover:bg-white"
      title="Ir para o app"
    >
      <span className="h-6 w-6 rounded-full bg-zinc-200" />
      Olá, {first}
    </Link>
  );
}
