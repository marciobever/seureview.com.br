export const metadata = {
  title: 'Como funciona — SeuReview',
  description: 'Veja como publicar produtos com IA, UTM/SubIDs e agendamento.',
};

const passos = [
  {
    t: '1) Conecte seus marketplaces',
    d: 'Liga sua conta (Shopee, Amazon, Mercado Livre, AliExpress, Temu) e escolha categorias de interesse.',
  },
  {
    t: '2) Descubra produtos virais',
    d: 'Use filtros por comissão, preço, desconto e tendência. Salve coleções.',
  },
  {
    t: '3) Gere conteúdo com IA',
    d: 'Crie legendas otimizadas para Instagram, Facebook e Reels com 1 clique.',
  },
  {
    t: '4) Personalize seus links',
    d: 'Adicione UTM e SubIDs para rastrear performance por canal/campanha.',
  },
  {
    t: '5) Agende e publique',
    d: 'Defina horários de pico e publique nas suas redes automaticamente.',
  },
  {
    t: '6) Acompanhe os resultados',
    d: 'Veja CTR, engajamento e receita estimada num painel único.',
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="section">
      <div className="max-container">
        <h1 className="text-3xl md:text-4xl font-extrabold">Como funciona</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Entenda o fluxo do SeuReview do zero ao resultado, com foco em produtividade e conversão.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {passos.map((p) => (
            <div key={p.t} className="card">
              <div className="card-body">
                <h3 className="font-semibold text-lg">{p.t}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-gray-600">
          <p>
            Dúvidas? Fale com a gente em <a className="underline" href="mailto:suporte@seureview.com.br">suporte@seureview.com.br</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
