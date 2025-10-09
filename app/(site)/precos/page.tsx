// app/(site)/pricing/page.tsx  (ajuste o caminho conforme seu projeto)

export const metadata = {
  title: "Planos e Preços | SeuReview",
  description:
    "Teste grátis por 5 dias. Plano Mensal por R$ 39,99/mês ou Trimestral por R$ 29,99/mês (compromisso mínimo de 3 meses).",
};

type Plan = {
  key: "trimestral" | "mensal";
  name: string;
  priceLabel: string;
  highlight?: boolean;
  badge?: string;
  desc: string;
  billingNote: string;
  ctaHref: string;
};

const PLANS: Plan[] = [
  {
    key: "trimestral",
    name: "Trimestral",
    priceLabel: "R$ 29,99/mês",
    highlight: true,
    badge: "Economize ~25%",
    desc: "Ideal para quem publica com frequência e quer o melhor custo.",
    billingNote:
      "Compromisso mínimo de 3 meses. Cobrança trimestral de R$ 89,97.",
    ctaHref: "/checkout?plan=trimestral",
  },
  {
    key: "mensal",
    name: "Mensal",
    priceLabel: "R$ 39,99/mês",
    desc: "Flexibilidade total para começar sem contrato.",
    billingNote: "Sem fidelidade. Cancele quando quiser.",
    ctaHref: "/checkout?plan=mensal",
  },
];

const FEATURES = [
  "Publicação em 1 clique",
  "Agendamento de posts",
  "Integração com Shopee",
  "Geração de legendas com CTA",
  "Relatórios básicos",
  "Suporte por e-mail",
];

export default function Page() {
  return (
    <main className="section">
      <div className="max-container">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Planos e Preços</h1>
          <p className="mt-3 text-gray-600">
            Teste <strong>grátis por 5 dias</strong>. Depois, escolha o plano
            que fizer mais sentido para o seu ritmo.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.key}
              className={`card relative ${
                p.highlight ? "ring-2 ring-[var(--color-primary)]" : ""
              }`}
            >
              {/* Badge topo */}
              <div className="absolute -top-3 left-4">
                <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1 ring-1 ring-emerald-200">
                  5 dias grátis
                </span>
                {p.badge ? (
                  <span className="ml-2 inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 text-xs px-2 py-1 ring-1 ring-indigo-200">
                    {p.badge}
                  </span>
                ) : null}
              </div>

              <div className="card-body">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-2xl font-bold text-[var(--color-primary)]">
                    {p.priceLabel}
                  </span>
                </div>

                <p className="mt-2 text-gray-600">{p.desc}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-xs text-gray-500">{p.billingNote}</div>

                <a
                  href={p.ctaHref}
                  className={`btn mt-6 w-full text-center ${
                    p.highlight ? "btn-primary" : "btn-outline"
                  }`}
                >
                  Começar agora
                </a>

                <p className="mt-2 text-[11px] text-gray-500 text-center">
                  Você só será cobrado após o período de teste. Cancele online a qualquer momento.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Informações adicionais */}
        <section className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold">Como funciona o teste grátis?</h4>
              <p className="mt-2 text-gray-600">
                Você tem 5 dias para experimentar todos os recursos. Se não quiser continuar,
                cancele antes do fim do período de teste e nada será cobrado.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold">Posso trocar de plano?</h4>
              <p className="mt-2 text-gray-600">
                Sim. Você pode migrar entre Mensal e Trimestral quando quiser.
                No plano Trimestral há compromisso mínimo de 3 meses.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold">Pagamentos e impostos</h4>
              <p className="mt-2 text-gray-600">
                Preços em BRL. Valores sujeitos a impostos locais e variação de meios de pagamento.
              </p>
            </div>
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-gray-500">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </div>
    </main>
  );
}
