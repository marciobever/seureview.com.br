"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Props = { initialLoggedIn: boolean };

// origem do app (pode sobrescrever via .env)
const APP_ORIGIN =
  process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://app.seureview.com.br";

export default function Header({ initialLoggedIn }: Props) {
  // usa o “logado” calculado no servidor (cookie HttpOnly do app)
  const [logged, setLogged] = useState(initialLoggedIn);
  useEffect(() => setLogged(initialLoggedIn), [initialLoggedIn]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#EE4D2D] text-white font-bold">SR</span>
          <span>SeuReview</span>
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <Link href="/como-funciona" className="hover:opacity-80">Como funciona</Link>
          <a href="/#depoimentos" className="hover:opacity-80">Depoimentos</a>
          <a href="/#newsletter" className="hover:opacity-80">Newsletter</a>
          <Link href="/precos" className="hover:opacity-80">Preços</Link>
        </nav>

        <div className="ml-auto md:ml-6 flex items-center gap-3">
          {logged ? (
            <>
              <a href={`${APP_ORIGIN}/dashboard`} className="btn btn-primary text-sm">Dashboard</a>
              <a
                href={`${APP_ORIGIN}/api/auth/logout?next=${encodeURIComponent("https://seureview.com.br")}`}
                className="btn btn-ghost text-sm"
              >
                Sair
              </a>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost text-sm">Entrar</Link>
              <Link href="/signup" className="btn btn-primary text-sm">Criar conta</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
