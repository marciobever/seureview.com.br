"use client";

import Link from "next/link";
import { useLoggedIn } from "./hooks/useLoggedIn";

export default function SiteHeader({ className = "" }: { className?: string }) {
  const logged = useLoggedIn();

  const logout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (!res.ok) throw new Error("logout POST falhou");
    } catch {
      try {
        await fetch("/api/auth/logout", { method: "GET", cache: "no-store" });
      } catch {}
    } finally {
      // Cookie HttpOnly é limpo pelo backend; aqui só navega.
      window.location.href = "/login";
    }
  };

  const btnPrimary =
    "px-3 py-2 rounded-lg text-sm bg-[#EE4D2D] hover:bg-[#D8431F] text-white shadow-sm";
  const btnGhost =
    "px-3 py-2 rounded-lg text-sm border border-[#FFD9CF] hover:bg-[#FFF4F0] text-[#111827]";

  return (
    <header className={`sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-[#FFD9CF] ${className}`}>
      <div className="max-container h-14 flex items-center gap-4">
        <Link href="/" className="font-bold tracking-tight">SeuReview</Link>

        <nav className="ml-auto flex items-center gap-2">
          {!logged ? (
            <>
              <Link href="/login" className={btnGhost}>Entrar</Link>
              <Link href="/signup" className={btnPrimary}>Criar conta</Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className={btnPrimary}>Ir para o Dashboard</Link>
              <button onClick={logout} className={btnGhost} title="Sair da conta">Sair</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
