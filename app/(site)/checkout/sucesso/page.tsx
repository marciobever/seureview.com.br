export const metadata = { title: "Pagamento aprovado | SeuReview" };

export default function Page() {
  return (
    <main className="section">
      <div className="max-container text-center">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">Pagamento aprovado 🎉</h1>
        <p className="mt-3 text-gray-600">Sua assinatura foi ativada.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <a className="btn btn-primary" href="https://app.seureview.com.br">Ir para o app</a>
          <a className="btn btn-ghost" href="/">Voltar ao início</a>
        </div>
      </div>
    </main>
  );
}
