// components/Footer.tsx
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-container py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr,1fr,1fr]">
          {/* Brand */}
          <div>
            <Logo size={28} withText />
            <p className="mt-3 text-sm text-gray-600 max-w-sm">
              Automação de afiliados para marketplaces e redes sociais.
            </p>
          </div>

          {/* Produto */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Produto</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link className="hover:text-gray-900" href="/#como-funciona">Como funciona</Link></li>
              <li><Link className="hover:text-gray-900" href="/#recursos">Recursos</Link></li>
              <li><Link className="hover:text-gray-900" href="/#depoimentos">Depoimentos</Link></li>
              <li><Link className="hover:text-gray-900" href="/login">Entrar</Link></li>
              <li><Link className="hover:text-gray-900" href="/signup">Criar conta</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Empresa</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="mailto:suporte@seureview.com.br">Suporte</a></li>
              <li><Link className="hover:text-gray-900" href="/#faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link className="hover:text-gray-900" href="/privacy">Privacidade</Link></li>
              <li><Link className="hover:text-gray-900" href="/terms">Termos de uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} SeuReview. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-600">Privacidade</Link>
            <Link href="/terms" className="hover:text-gray-600">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
