export const metadata = {
  title: "Planos e Preços | SeuReview",
  description: "Escolha um plano e comece a publicar seus produtos com 1 clique.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="max-container">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Planos e Preços</h1>
          <p className="mt-3 text-gray-600">
            Transparente, sem pegadinha. Comece hoje e cancele quando quiser.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Starter", price: "R$ 0", desc: "Perfeito para começar", features: ["1 canal", "Agendamento básico", "Suporte comunidade"] },
            { name: "Pro", price: "R$ 49/mês", highlighted: true, desc: "Para quem quer escalar", features: ["3 canais", "Agendamento avançado", "Integração Shopee", "Relatórios"] },
            { name: "Business", price: "R$ 149/mês", desc: "Para equipes e marcas", features: ["Ilimitado", "Permissões e times", "Prioridade no suporte"] },
          ].map((p) => (
            <div key={p.name} className={`card ${p.highlighted ? "ring-2 ring-[var(--color-primary)]" : ""}`}>
              <div className="card-body">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-2xl font-bold text-[var(--color-primary)]">{p.price}</span>
                </div>
                <p className="mt-2 text-gray-600">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/checkout" className="btn btn-primary mt-6 w-full text-center">
                  Começar agora
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Valores sujeitos a impostos locais. Você pode cancelar quando quiser.
        </p>
      </div>
    </main>
  );
}
