"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Props = { initialLoggedIn: boolean };

// Onde está o app (pode sobrescrever via .env)
const APP_ORIGIN =
  process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://app.seureview.com.br";

export default function Header({ initialLoggedIn }: Props) {
  // usamos o valor que veio do servidor (cookie HttpOnly do app)
  const [logged, setLogged] = useState(initialLoggedIn);

  // se um dia quiser “confirmar” no cliente (ex.: fetch `${APP_ORIGIN}/api/me`),
  // dá pra ligar aqui. Por ora, confiamos no SSR.
  useEffect(() => setLogged(initialLoggedIn), [initialLoggedIn]);

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
              <a href={`${APP_ORIGIN}/dashboard`} className="btn btn-primary text-sm">
                Dashboard
              </a>
              {/* se o app aceitar next= para voltar pro site, mantemos */}
              <a
                href={`${APP_ORIGIN}/api/auth/logout?next=${encodeURIComponent("https://seureview.com.br")}`}
                className="btn btn-ghost text-sm"
              >
                Sair
              </a>
            </>
          ) : (
            <>
              {/* usamos páginas locais “ponte” para o app */}
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
