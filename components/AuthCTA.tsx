"use client";

import Link from "next/link";
import { useLoggedIn } from "./hooks/useLoggedIn";

export default function AuthCTA() {
  const logged = useLoggedIn();
  const primary = "px-4 py-2 rounded-lg text-sm bg-[#EE4D2D] hover:bg-[#D8431F] text-white shadow-sm";
  const ghost = "px-4 py-2 rounded-lg text-sm border border-[#FFD9CF] hover:bg-[#FFF4F0] text-[#111827]";

  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#FFD9CF] bg-white/70 p-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 -right-16 -top-16 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "rgba(238,77,45,0.16)" }}
      />
      <h2 className="text-2xl md:text-3xl font-extrabold">
        Pronto para <span className="bg-gradient-to-r from-[#FF8A66] to-[#EE4D2D] bg-clip-text text-transparent">acelerar</span> suas comissões?
      </h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Publique produtos prontos com links rastreáveis e legendas otimizadas — em minutos.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {!logged ? (
          <>
            <Link href="/signup" className={primary}>Criar conta grátis</Link>
            <Link href="/login" className={ghost}>Entrar</Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" className={primary}>Ir para o Dashboard</Link>
            <Link href="/como-funciona" className={ghost}>Ver como funciona</Link>
          </>
        )}
      </div>
    </div>
  );
}
