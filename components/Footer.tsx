import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="max-container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#EE4D2D] text-white font-bold">SR</span>
              <span className="font-semibold text-gray-900">SeuReview</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Encontre produtos virais, gere conteúdos e publique nas suas redes com rastreio completo.
            </p>
          </div>

          <nav aria-label="Produto" className="text-sm">
            <h4 className="font-semibold text-gray-900">Produto</h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="/como-funciona" className="hover:text-gray-900">Como funciona</Link></li>
              <li><a href="/#depoimentos" className="hover:text-gray-900">Depoimentos</a></li>
              <li><a href="/#newsletter" className="hover:text-gray-900">Newsletter</a></li>
            </ul>
          </nav>

          <nav aria-label="Empresa" className="text-sm">
            <h4 className="font-semibold text-gray-900">Empresa</h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="/contato" className="hover:text-gray-900">Contato</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900">Termos</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-900">Privacidade</Link></li>
            </ul>
          </nav>

          <div className="text-sm">
            <h4 className="font-semibold text-gray-900">Suporte</h4>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:text-gray-900" href="mailto:suporte@seureview.com.br">suporte@seureview.com.br</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-400">© {year} SeuReview. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
