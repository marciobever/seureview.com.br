export const metadata = {
  title: "Checkout | SeuReview",
  description: "Finalize sua assinatura com segurança.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="max-container max-w-xl">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="mt-2 text-gray-600">Selecione um plano para continuar.</p>

        <div className="card mt-6">
          <div className="card-body">
            <label className="flex items-center gap-3">
              <input type="radio" name="plan" defaultChecked />
              <span>Pro — <strong>R$ 49/mês</strong></span>
            </label>
            <label className="flex items-center gap-3 mt-3">
              <input type="radio" name="plan" />
              <span>Business — <strong>R$ 149/mês</strong></span>
            </label>

            <a href="/checkout/sucesso" className="btn btn-primary mt-6 w-full text-center">
              Pagar (simulação)
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Integração de gateway real (Stripe/Mercado Pago/PagSeguro) entra aqui depois.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
