// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 hover:text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#EE4D2D] text-white font-bold">
              SR
            </span>
            <span className="font-semibold">SeuReview</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-4">
            <Link href="/(site)/sobre" className="hover:text-gray-900">Sobre</Link>
            <Link href="/(site)/recursos" className="hover:text-gray-900">Recursos</Link>
            <Link href="/(site)/precos" className="hover:text-gray-900">Preços</Link>
            <Link href="/(site)/contato" className="hover:text-gray-900">Contato</Link>
            <Link href="/(site)/privacidade" className="hover:text-gray-900">Privacidade</Link>
            <Link href="/(site)/termos" className="hover:text-gray-900">Termos</Link>
          </nav>
        </div>

        <p className="mt-4 text-center md:text-left text-xs text-gray-400">
          © {new Date().getFullYear()} SeuReview. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
