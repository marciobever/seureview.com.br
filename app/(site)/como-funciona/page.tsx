export const metadata = {
  title: "Como funciona | SeuReview",
  description: "Do cadastro ao primeiro post em minutos.",
};

const steps = [
  { n: 1, t: "Crie sua conta", d: "Cadastre-se e crie sua organização." },
  { n: 2, t: "Conecte suas redes", d: "Instagram, Facebook e Telegram." },
  { n: 3, t: "Escolha produtos", d: "Traga da Shopee ou adicione manualmente." },
  { n: 4, t: "Gere o post", d: "Template, imagem e link de afiliado prontos." },
  { n: 5, t: "Publique", d: "Agora ou agendado. Acompanhe os resultados." },
];

export default function Page() {
  return (
    <main className="section">
      <div className="max-container">
        <h1 className="text-4xl font-bold text-center mb-12">Como funciona</h1>
        <ol className="grid md:grid-cols-5 gap-6">
          {steps.map(s => (
            <li key={s.n} className="card text-center">
              <div className="card-body">
                <div className="mx-auto h-10 w-10 rounded-full grid place-items-center bg-[var(--color-accent)] text-[var(--color-primary)] font-bold">
                  {s.n}
                </div>
                <h3 className="mt-3 font-semibold">{s.t}</h3>
                <p className="text-gray-600 text-sm mt-1">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="text-center mt-12">
          <a href="/checkout" className="btn btn-primary">Começar agora</a>
        </div>
      </div>
    </main>
  );
}
