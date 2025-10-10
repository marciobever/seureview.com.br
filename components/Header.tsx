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

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://app.seureview.com.br";

export default function Header({ initialLoggedIn = false }: HeaderProps) {
  const [logged, setLogged] = useState<boolean>(initialLoggedIn);
  const [me, setMe] = useState<Me | null>(null);

  // Origem do site pra usar no `next` (voltar após login/logout)
  const siteOrigin = useMemo(() => {
    if (typeof window !== "undefined") return window.location.origin;
    return "https://seureview.com.br";
  }, []);

  // Carrega /api/auth/me no APP pra tentar mostrar o nome
  useEffect(() => {
    let alive = true;
    const ctrl = new AbortController();

    async function loadMe() {
      try {
        const res = await fetch(`${APP_ORIGIN}/api/auth/me`, {
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

    // sempre tenta: o cookie pode estar só no subdomínio do APP
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
                  href={APP_ORIGIN}
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-sm hover:bg-white"
                  title="Ir para o app"
                >
                  <span className="h-6 w-6 rounded-full bg-zinc-200 inline-block" />
                  Olá, {firstName}
                </a>
              )}
              <a href={`${APP_ORIGIN}/dashboard`} className={btnPrimary}>
                Dashboard
              </a>
              <a
                href={`${APP_ORIGIN}/api/auth/logout?next=${encodeURIComponent(siteOrigin)}`}
                className={btnGhost}
              >
                Sair
              </a>
            </>
          ) : (
            <>
              {/* Direto pro app (onde está o fluxo de auth), com retorno pro site */}
              <a
                href={`${APP_ORIGIN}/auth/login?next=${encodeURIComponent(siteOrigin)}`}
                className={btnGhost}
              >
                Entrar
              </a>
              <a
                href={`${APP_ORIGIN}/auth/signup?next=${encodeURIComponent(siteOrigin)}`}
                className={btnPrimary}
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
