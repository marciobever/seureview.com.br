export const metadata = {
  title: "Contato | SeuReview",
  description: "Fale com a gente.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="max-container max-w-2xl">
        <h1 className="text-4xl font-bold">Contato</h1>
        <p className="mt-3 text-gray-600">
          Tem alguma dúvida, sugestão ou parceria? Manda pra gente.
        </p>

        <form className="mt-8 grid gap-4">
          <input placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Escreva sua mensagem..." rows={5} required />
          <button className="btn btn-primary w-full" type="submit" disabled>
            Enviar (em breve)
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500">Ou envie um e-mail para suporte@seureview.com.br</p>
      </div>
    </main>
  );
}
