// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#EE4D2D] text-white font-bold">
                SR
              </span>
              <span className="font-semibold text-gray-900">SeuReview</span>
            </Link>
            <p className="text-xs text-gray-500">
              Automação de afiliados para marketplaces e redes sociais.
            </p>
          </div>

          <div>
            <div className="font-semibold text-gray-900 mb-3">Produto</div>
            <ul className="space-y-2">
              <li><Link href="/como-funciona" className="hover:text-gray-900">Como funciona</Link></li>
              <li><Link href="/#depoimentos" className="hover:text-gray-900">Depoimentos</Link></li>
              <li><Link href="/precos" className="hover:text-gray-900">Preços</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-gray-900 mb-3">Empresa</div>
            <ul className="space-y-2">
              <li><a href="mailto:suporte@seureview.com.br" className="hover:text-gray-900">Suporte</a></li>
              <li><Link href="/contato" className="hover:text-gray-900">Contato</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-gray-900 mb-3">Legal</div>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="hover:text-gray-900">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-gray-900">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-400">© {year} SeuReview. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
