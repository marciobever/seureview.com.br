import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section">
      <div className="max-container text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Pronto para <span className="text-gradient">acelerar</span> suas comissões?
        </h3>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Cadastre-se e comece a publicar produtos prontos com links rastreáveis e legendas otimizadas.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/signup" className="btn btn-primary text-base">Criar conta grátis</Link>
          <Link href="/login" className="btn btn-ghost text-base">Entrar</Link>
        </div>
      </div>
    </section>
  );
}
