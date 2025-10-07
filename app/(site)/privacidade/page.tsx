export const metadata = {
  title: "Política de Privacidade | SeuReview",
  description: "Saiba como tratamos seus dados.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="max-container prose max-w-3xl">
        <h1>Política de Privacidade</h1>
        <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        <h2>Coleta</h2>
        <p>Coletamos dados de cadastro e uso para operar o serviço.</p>
        <h2>Uso</h2>
        <p>Usamos seus dados para autenticação, faturamento e melhorias.</p>
        <h2>Compartilhamento</h2>
        <p>Não vendemos dados. Integrações operacionais (ex.: Meta) podem receber dados mínimos necessários.</p>
      </div>
    </main>
  );
}
