export default function Depoimentos() {
  const items = [
    { n: 'Ana Souza', d: 'Economizei horas por dia. Agora tudo sai automático, pronto pra postar.' },
    { n: 'Rafael Costa', d: 'Os SubIDs me ajudaram a entender o que realmente dá retorno em cada canal.' },
    { n: 'Beatriz Lima', d: 'As legendas com IA são ótimas! Publicar virou algo rápido e divertido.' },
  ];

  return (
    <section id="depoimentos" className="section bg-gray-50 border rounded-2xl p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Quem usa, <span className="text-gradient">recomenda</span>
      </h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <div key={i} className="card bg-white">
            <div className="card-body">
              <p className="text-sm text-gray-700 leading-relaxed">“{p.d}”</p>
              <div className="mt-3 text-xs text-gray-500">— {p.n}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
