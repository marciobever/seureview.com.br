// components/header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Me =
  | { ok: true; id: string; name: string; email?: string; avatar_url?: string | null }
  | { ok: false };

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://app.seureview.com.br";

export default function Header() {
  const [me, setMe] = useState<Me | null>(null);
  const [origin, setOrigin] = useState<string>("https://seureview.com.br"); // fallback seguro

  useEffect(() => {
    let alive = true;
    if (typeof window !== "undefined") setOrigin(window.location.origin);

    (async () => {
      try {
        const res = await fetch(`${APP_ORIGIN}/api/me`, {
          credentials: "include",
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        const j = (await res.json()) as Me;
        if (!alive) return;
        setMe(j?.ok ? j : { ok: false });
      } catch {
        if (!alive) return;
        setMe({ ok: false });
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const logged = me?.ok === true;
  const firstName = logged ? (me as Extract<Me, { ok: true }>).name?.split(" ")?.[0] ?? "" : "";

  const loginUrl = `${APP_ORIGIN}/login?next=${encodeURIComponent(origin)}`;
  const signupUrl = `${APP_ORIGIN}/signup?next=${encodeURIComponent(origin)}`;
  const dashboardUrl = `${APP_ORIGIN}/dashboard`;
  const logoutUrl = `${APP_ORIGIN}/api/auth/logout?next=${encodeURIComponent(origin)}`;

  const btnPrimary =
    "px-3 py-2 rounded-lg text-sm bg-[#EE4D2D] hover:bg-[#D8431F] text-white shadow-sm transition";
  const btnGhost =
    "px-3 py-2 rounded-lg text-sm border border-[#FFD9CF] hover:bg-[#FFF4F0] text-[#111827] transition";

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-[#FFD9CF]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#EE4D2D] text-white font-bold">
            SR
          </span>
          <span>SeuReview</span>
        </Link>

        {/* Nav */}
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <Link href="/como-funciona" className="hover:opacity-80">Como funciona</Link>
          <a href="/#depoimentos" className="hover:opacity-80">Depoimentos</a>
          <a href="/#newsletter" className="hover:opacity-80">Newsletter</a>
          <Link href="/precos" className="hover:opacity-80">Preços</Link>
        </nav>

        {/* Ações */}
        <div className="ml-auto md:ml-6 flex items-center gap-2">
          {!logged ? (
            <>
              <a href={loginUrl} className={btnGhost}>Entrar</a>
              <a href={signupUrl} className={btnPrimary}>Criar conta</a>
            </>
          ) : (
            <>
              {/* Saudação (desktop) */}
              {firstName && (
                <a
                  href={dashboardUrl}
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-sm hover:bg-white"
                  title="Ir para o app"
                >
                  <span className="h-6 w-6 rounded-full bg-zinc-200 inline-block" />
                  Olá, {firstName}
                </a>
              )}
              <a href={dashboardUrl} className={btnPrimary}>Dashboard</a>
              {/* logout via navegação — garante limpeza do cookie no app */}
              <a href={logoutUrl} className={btnGhost} title="Sair da conta">Sair</a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
