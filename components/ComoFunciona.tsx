export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section">
      <div className="max-container">
        <h2 className="text-3xl md:text-4xl font-bold">
          Como funciona o <span className="text-gradient">SeuReview</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-[70ch]">
          Em poucos passos você encontra produtos promissores, gera conteúdos prontos e publica nas suas redes com rastreio de cliques e vendas.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { t: '1. Descubra', d: 'Localize produtos virais em Shopee, Amazon, Mercado Livre, AliExpress e Temu.' },
            { t: '2. Gere', d: 'Crie legendas com IA, links rastreáveis (UTM/SubIDs) e material de divulgação.' },
            { t: '3. Publique', d: 'Conecte suas contas e publique/agenda direto pelo SeuReview.' },
          ].map((s, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <div className="font-semibold text-lg text-gray-900">{s.t}</div>
                <p className="mt-2 text-sm text-gray-600">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
