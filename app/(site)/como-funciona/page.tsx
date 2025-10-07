import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Como funciona | SeuReview',
  description: 'Entenda o fluxo do SeuReview: conectar marketplaces, gerar conteúdos e publicar com rastreio.',
};

const steps = [
  {
    t: '1) Conecte seus marketplaces e redes',
    d: 'Integre Shopee, Amazon, Mercado Livre, AliExpress e Temu. Conecte Instagram/Facebook para publicar.',
  },
  {
    t: '2) Descubra produtos com potencial',
    d: 'Navegue por tendências e filtros de demanda. Marque favoritos e crie coleções.',
  },
  {
    t: '3) Gere legendas com IA',
    d: 'Escolha tom/estilo, gere variações, adicione hashtags e CTAs prontos para cada rede.',
  },
  {
    t: '4) Adicione UTM/SubIDs',
    d: 'Rastreie por campanha, canal, criativo ou variação. Tudo organizado por links.',
  },
  {
    t: '5) Publique e/ou agende',
    d: 'Dispare imediatamente ou agende nos melhores horários. Controle por calendário.',
  },
  {
    t: '6) Acompanhe resultados',
    d: 'Métricas de cliques, CTR, engajamento e receita estimada para otimizar sua estratégia.',
  },
];

export default function ComoFuncionaPage() {
  return (
    <main className="section">
      <div className="max-container">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Como <span className="text-gradient">funciona</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Do zero ao post publicado em minutos — com rastreio do que realmente converte.
          </p>
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <div className="text-sm text-gray-500">Passo {i + 1}</div>
                <div className="mt-1 font-semibold text-lg">{s.t}</div>
                <p className="mt-2 text-sm text-gray-600">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/signup" className="btn btn-primary">Começar agora</a>
        </div>
      </div>
    </main>
  );
}
