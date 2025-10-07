export default function Recursos() {
  const features = [
    { t: 'Legendas com IA', d: 'Textos sob medida para engajamento e conversão em Instagram, Facebook e Reels.' },
    { t: 'UTM + SubIDs', d: 'Acompanhe cliques e performance por campanha, canal e variação.' },
    { t: 'Multi-marketplaces', d: 'Shopee, Amazon, Mercado Livre, AliExpress, Temu e muito mais.' },
    { t: 'Agendamento inteligente', d: 'Programe publicações para horários de pico com poucos cliques.' },
    { t: 'Estatísticas em tempo real', d: 'CTR, engajamento e receita estimada — tudo em um só lugar.' },
    { t: 'Workspace colaborativo', d: 'Trabalhe com equipe e múltiplas contas com segurança e controle.' },
  ];

  return (
    <section id="recursos" className="section">
      <div className="max-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Recursos que <span className="text-gradient">potencializam</span> suas vendas
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Tudo o que você precisa para transformar produtos em conteúdo que converte — em minutos.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card group">
              <div className="card-body">
                <div className="font-semibold text-lg text-gray-900 group-hover:text-[#EE4D2D] transition">
                  {f.t}
                </div>
                <p className="mt-2 text-sm text-gray-600">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
