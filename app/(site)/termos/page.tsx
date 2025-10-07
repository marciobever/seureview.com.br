export const metadata = {
  title: "Termos de Uso | SeuReview",
  description: "Leia os termos de uso do SeuReview.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="max-container prose max-w-3xl">
        <h1>Termos de Uso</h1>
        <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        <p>Estes termos regem o uso do site e da plataforma SeuReview...</p>
        <h2>1. Aceite</h2>
        <p>Ao utilizar nossos serviços você concorda com estes termos.</p>
        <h2>2. Conta</h2>
        <p>Você é responsável por manter suas credenciais em sigilo.</p>
        <h2>3. Pagamentos</h2>
        <p>Assinaturas são recorrentes e podem ser canceladas a qualquer momento.</p>
      </div>
    </main>
  );
}
