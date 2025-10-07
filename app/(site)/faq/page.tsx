export const metadata = {
  title: "Perguntas frequentes | SeuReview",
  description: "Dúvidas comuns sobre a plataforma e os planos.",
};

const faqs = [
  { q: "Posso cancelar quando quiser?", a: "Sim. Sem fidelidade." },
  { q: "Posso conectar várias contas?", a: "Depende do plano. No Business é ilimitado." },
  { q: "Vocês postam no meu Instagram?", a: "Sim, com sua autorização via login Meta/Instagram." },
  { q: "Tem período de teste?", a: "Oferecemos plano Starter gratuito para começar." },
];

export default function Page() {
  return (
    <main className="section">
      <div className="max-container max-w-3xl">
        <h1 className="text-4xl font-bold">Perguntas frequentes</h1>
        <div className="mt-8 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card">
              <summary className="card-body cursor-pointer font-medium">{f.q}</summary>
              <div className="px-5 pb-5 -mt-3 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
