export const metadata = { title: "Pagamento não autorizado | SeuReview" };

export default function Page() {
  return (
    <main className="section">
      <div className="max-container text-center">
        <h1 className="text-4xl font-bold">Pagamento recusado 😕</h1>
        <p className="mt-3 text-gray-600">Tente novamente ou use outro método de pagamento.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <a className="btn btn-primary" href="/checkout">Tentar novamente</a>
          <a className="btn btn-ghost" href="/precos">Ver planos</a>
        </div>
      </div>
    </main>
  );
}
