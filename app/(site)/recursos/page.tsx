export const metadata = {
  title: "Recursos | SeuReview",
  description: "Tudo que você precisa para publicar e vender mais.",
};

const features = [
  { title: "Integrações sociais", desc: "Conecte Instagram, Facebook e Telegram e publique em 1 clique." },
  { title: "Agendamento", desc: "Programe suas postagens e foque nas vendas." },
  { title: "Shopee afiliado", desc: "Monte posts com link de afiliado automaticamente." },
  { title: "Templates prontos", desc: "Textos e layouts que convertem, sem esforço." },
  { title: "Relatórios", desc: "Acompanhe desempenho por canal e produto." },
  { title: "Times", desc: "Convide pessoas e defina permissões." },
];

export default function Page() {
  return (
    <main className="section">
      <div className="max-container">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Recursos</h1>
          <p className="mt-3 text-gray-600">Ferramentas práticas para quem vive de indicar e vender.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/precos" className="btn btn-primary">Ver planos</a>
        </div>
      </div>
    </main>
  );
}
