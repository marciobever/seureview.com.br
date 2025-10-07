export const metadata = {
  title: "Como funciona | SeuReview",
  description:
    "Veja como o SeuReview encontra produtos virais, gera legendas com IA, cria links com UTM/SubIDs e publica em múltiplas redes.",
  alternates: { canonical: "/como-funciona" },
};

export default function Page() {
  const passos = [
    {
      t: "Descoberta de produtos",
      d: "Selecionamos ofertas com alta tração em marketplaces (Shopee, Amazon, Mercado Livre, AliExpress, Temu).",
    },
    {
      t: "Geração de conteúdo",
      d: "IA cria títulos, bullets e legendas com foco em CTR e conversão para Instagram, Facebook e Reels.",
    },
    {
      t: "Links rastreáveis",
      d: "Criação automática de UTM e SubIDs por canal/campanha para medir performance.",
    },
    {
      t: "Publicação e agendamento",
      d: "Publique agora ou agende horários de pico em poucos cliques.",
    },
    {
      t: "Métricas",
      d: "Acompanhe cliques, engajamento e receita estimada em tempo real.",
    },
    {
      t: "Colaboração",
      d: "Convide equipe e gerencie múltiplas contas com segurança.",
    },
  ];

  return (
    <main className="section">
      <div className="max-container">
        <h1 className="text-3xl md:text-4xl font-bold">Como funciona</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Um fluxo direto para transformar produtos em conteúdo que vende.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {passos.map((p) => (
            <div key={p.t} className="card">
              <div className="card-body">
                <div className="font-semibold text-lg">{p.t}</div>
                <p className="mt-2 text-sm text-gray-600">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
