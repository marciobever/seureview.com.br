"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Props = { initialLoggedIn: boolean };

type Me =
  | { ok: true; id: string; name: string; email?: string; avatar_url?: string | null }
  | { ok: false };

// origem do app (pode sobrescrever via .env)
const APP_ORIGIN =
  process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://app.seureview.com.br";

export default function Header({ initialLoggedIn }: Props) {
  const [logged, setLogged] = useState(initialLoggedIn);
  const [me, setMe] = useState<Me | null>(null);

  useEffect(() => {
    let alive = true;

    async function loadMe() {
      try {
        const res = await fetch(`${APP_ORIGIN}/api/me`, {
          credentials: "include", // envia o cookie do APP
          headers: { Accept: "application/json" },
        });
        const j = (await res.json()) as Me;
        if (!alive) return;
        setMe(j);
        setLogged(!!(j as any)?.ok);
      } catch {
        if (!alive) return;
        setMe({ ok: false });
        setLogged(false);
      }
    }

    // tenta descobrir o nome se “aparenta” estar logado
    if (initialLoggedIn) loadMe();
    // mesmo se não estiver, vale tentar (cookie pode existir só no subdomínio)
    else loadMe();

    return () => {
      alive = false;
    };
  }, [initialLoggedIn]);

  const firstName =
    (me && (me as any).ok && (me as any).name?.split(" ")?.[0]) || null;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#EE4D2D] text-white font-bold">
            SR
          </span>
          <span>SeuReview</span>
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <Link href="/como-funciona" className="hover:opacity-80">
            Como funciona
          </Link>
          <a href="/#depoimentos" className="hover:opacity-80">
            Depoimentos
          </a>
          <a href="/#newsletter" className="hover:opacity-80">
            Newsletter
          </a>
          <Link href="/precos" className="hover:opacity-80">
            Preços
          </Link>
        </nav>

        <div className="ml-auto md:ml-6 flex items-center gap-3">
          {logged ? (
            <>
              {firstName && (
                <a
                  href={`${APP_ORIGIN}`}
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-sm hover:bg-white"
                  title="Ir para o app"
                >
                  <span className="h-6 w-6 rounded-full bg-zinc-200 inline-block" />
                  Olá, {firstName}
                </a>
              )}
              <a
                href={`${APP_ORIGIN}/dashboard`}
                className="btn btn-primary text-sm"
              >
                Dashboard
              </a>
              <a
                href={`${APP_ORIGIN}/api/auth/logout?next=${encodeURIComponent(
                  "https://seureview.com.br"
                )}`}
                className="btn btn-ghost text-sm"
              >
                Sair
              </a>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost text-sm">
                Entrar
              </Link>
              <Link href="/signup" className="btn btn-primary text-sm">
                Criar conta
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
