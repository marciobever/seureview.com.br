import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#EE4D2D] text-white font-bold">SR</span>
            <span className="font-medium text-gray-900">SeuReview</span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className="hover:text-gray-900" href="/">Início</Link>
            <Link className="hover:text-gray-900" href="/como-funciona">Como funciona</Link>
            <Link className="hover:text-gray-900" href="/privacy">Privacidade</Link>
            <Link className="hover:text-gray-900" href="/terms">Termos</Link>
            <a className="hover:text-gray-900" href="mailto:suporte@seureview.com.br">Suporte</a>
          </nav>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} SeuReview. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
