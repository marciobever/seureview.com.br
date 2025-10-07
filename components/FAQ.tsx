export default function FAQ() {
  const faqs = [
    {
      q: 'Preciso ter conta nos marketplaces?',
      a: 'Não. Você pode navegar e pesquisar produtos. Para gerar links de afiliado e publicar, conecte suas contas/IDs dos programas de afiliados.',
    },
    {
      q: 'Posso publicar direto nas minhas redes?',
      a: 'Sim. Conecte suas contas e publique/agenda pelo painel do SeuReview.',
    },
    {
      q: 'Como funcionam UTM e SubIDs?',
      a: 'Adicionamos parâmetros nos links para rastrear cliques, campanhas, variações e canais. Assim você sabe o que converte.',
    },
    {
      q: 'Existe versão gratuita?',
      a: 'Há um plano gratuito com limitações. Planos pagos liberam recursos avançados como agendamento e múltiplas contas.',
    },
  ];

  return (
    <section id="faq" className="section">
      <div className="max-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Perguntas frequentes</h2>
        <div className="mt-8 mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group border rounded-xl p-4 bg-white open:shadow-sm">
              <summary className="cursor-pointer font-medium text-gray-900 list-none flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
