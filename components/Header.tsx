// components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeaderProps = {
  /** Vem do layout via cookie HttpOnly do app; opcional pra não travar o build. */
  initialLoggedIn?: boolean;
};

type Me =
  | {
      ok: true;
      session: { userId: string; orgId: string };
      profile: { id: string; email: string; name?: string | null; is_active?: boolean };
    }
  | { ok: false; error?: string };

// Use a mesma env que você já tem no Coolify
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.seureview.com.br";

export default function Header({ initialLoggedIn = false }: HeaderProps) {
  const [logged, setLogged] = useState<boolean>(initialLoggedIn);
  const [me, setMe] = useState<Me | null>(null);

  // Origem do SITE (para ?next=)
  const siteOrigin = useMemo(() => {
    if (typeof window !== "undefined") return window.location.origin;
    return "https://seureview.com.br";
  }, []);

  // Busca /api/auth/me no APP para exibir o nome
  useEffect(() => {
    let alive = true;
    const ctrl = new AbortController();

    async function loadMe() {
      try {
        const res = await fetch(`${APP_URL}/api/auth/me`, {
          method: "GET",
          credentials: "include",
          cache: "no-store",
          headers: { Accept: "application/json" },
          signal: ctrl.signal,
          mode: "cors",
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

    loadMe();
    return () => {
      alive = false;
      ctrl.abort();
    };
  }, []);

  const firstName =
    me && (me as any).ok && typeof (me as any).profile?.name === "string"
      ? (me as any).profile.name.split(" ")?.[0] ?? null
      : null;

  const btnPrimary =
    "px-3 py-2 rounded-lg text-sm bg-[#EE4D2D] hover:bg-[#D8431F] text-white shadow-sm";
  const btnGhost =
    "px-3 py-2 rounded-lg text-sm border border-[#FFD9CF] hover:bg-[#FFF4F0] text-[#111827]";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-[#FFD9CF]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#EE4D2D] text-white font-bold">
            SR
          </span>
          <span>SeuReview</span>
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <Link href="/como-funciona" className="hover:opacity-80">Como funciona</Link>
          <a href="/#depoimentos" className="hover:opacity-80">Depoimentos</a>
          <a href="/#newsletter" className="hover:opacity-80">Newsletter</a>
          <Link href="/precos" className="hover:opacity-80">Preços</Link>
        </nav>

        <div className="ml-auto md:ml-6 flex items-center gap-2">
          {logged ? (
            <>
              {firstName && (
                <a
                  href={APP_URL}
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-sm hover:bg-white"
                  title="Ir para o app"
                  rel="noopener noreferrer"
                >
                  <span className="h-6 w-6 rounded-full bg-zinc-200 inline-block" />
                  Olá, {firstName}
                </a>
              )}
              <a href={`${APP_URL}/dashboard`} className={btnPrimary} rel="noopener noreferrer">
                Dashboard
              </a>
              <a
                href={`${APP_URL}/api/auth/logout?next=${encodeURIComponent(siteOrigin)}`}
                className={btnGhost}
                rel="noopener noreferrer"
              >
                Sair
              </a>
            </>
          ) : (
            <>
              {/* Para evitar 404, envia para a RAIZ do APP.
                 Se não estiver logado, o APP pode redirecionar para a tela de login.
                 Mantemos ?next= para voltar ao site depois. */}
              <a
                href={`${APP_URL}/?next=${encodeURIComponent(siteOrigin)}#login`}
                className={btnGhost}
                rel="noopener noreferrer"
              >
                Entrar
              </a>
              <a
                href={`${APP_URL}/?next=${encodeURIComponent(siteOrigin)}#signup`}
                className={btnPrimary}
                rel="noopener noreferrer"
              >
                Criar conta
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
