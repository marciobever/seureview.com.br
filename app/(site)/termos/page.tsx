// app/(site)/termos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | SeuReview",
  description: "Condições que regem o uso do site e da plataforma SeuReview.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
};

export default function Page() {
  const updated = new Date().toLocaleDateString("pt-BR");
  return (
    <main className="section">
      <div className="max-container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Termos de Uso</h1>
        <p className="mt-2 text-sm text-gray-500">Última atualização: {updated}</p>

        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
          <p>Estes termos regem o uso do site e da plataforma SeuReview.</p>

          <h2 className="text-xl font-semibold">1. Aceite</h2>
          <p>Ao usar o serviço, você concorda com estes termos e com a nossa Política de Privacidade.</p>

          <h2 className="text-xl font-semibold">2. Conta e segurança</h2>
          <p>Você é responsável por manter suas credenciais em sigilo e por atividades realizadas na sua conta.</p>

          <h2 className="text-xl font-semibold">3. Planos e pagamentos</h2>
          <p>Assinaturas são recorrentes. Cancelamentos encerram ciclos futuros, sem reembolso proporcional salvo previsão legal.</p>

          <h2 className="text-xl font-semibold">4. Uso aceitável</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>É proibido burlar limites, explorar falhas ou usar o serviço para fins ilegais.</li>
            <li>Conteúdos publicados nas plataformas de terceiros seguem as regras de cada plataforma.</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Integrações de terceiros</h2>
          <p>Integrações (ex.: Meta) podem exigir permissões específicas; você permanece responsável por suas contas externas.</p>

          <h2 className="text-xl font-semibold">6. Propriedade intelectual</h2>
          <p>SeuReview e seus elementos são protegidos por direitos autorais e marcas. Você mantém direitos sobre o seu conteúdo.</p>

          <h2 className="text-xl font-semibold">7. Limitação de responsabilidade</h2>
          <p>O serviço é fornecido “no estado em que se encontra”. Não nos responsabilizamos por danos indiretos ou perda de lucros.</p>

          <h2 className="text-xl font-semibold">8. Encerramento</h2>
          <p>Contas podem ser suspensas por violação destes termos. Dados associados podem ser removidos conforme a lei.</p>

          <h2 className="text-xl font-semibold">9. Alterações e contato</h2>
          <p>
            Podemos atualizar estes termos. Em caso de dúvidas, fale conosco:{" "}
            <a className="underline" href="mailto:legal@seureview.com.br">legal@seureview.com.br</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
