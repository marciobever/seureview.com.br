import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const linkCls =
    "hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded";

  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600">
        <div className="grid md:grid-cols-4 gap-8">
          {/* brand */}
          <div className="space-y-2">
            <Link href="/" aria-label="Ir para a página inicial" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#EE4D2D] text-white font-bold">
                SR
              </span>
              <span className="font-semibold text-gray-900">SeuReview</span>
            </Link>
            <p className="text-xs text-gray-500">
              Automação de afiliados para marketplaces e redes sociais.
            </p>
          </div>

          {/* produto */}
          <nav aria-label="Links do produto">
            <div className="font-semibold text-gray-900 mb-3">Produto</div>
            <ul className="space-y-2">
              <li><Link href="/como-funciona" className={linkCls}>Como funciona</Link></li>
              <li><Link href="/#depoimentos" className={linkCls}>Depoimentos</Link></li>
              <li><Link href="/precos" className={linkCls}>Preços</Link></li>
            </ul>
          </nav>

          {/* empresa */}
          <nav aria-label="Links da empresa">
            <div className="font-semibold text-gray-900 mb-3">Empresa</div>
            <ul className="space-y-2">
              <li><a href="mailto:suporte@seureview.com.br" className={linkCls}>Suporte</a></li>
              <li><Link href="/contato" className={linkCls}>Contato</Link></li>
            </ul>
          </nav>

          {/* legal */}
          <nav aria-label="Links legais">
            <div className="font-semibold text-gray-900 mb-3">Legal</div>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className={linkCls}>Política de Privacidade</Link></li>
              <li><Link href="/termos" className={linkCls}>Termos de Uso</Link></li>
              <li><Link href="/exclusao-de-dados" className={linkCls}>Exclusão de dados</Link></li>
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          © {year} SeuReview. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
