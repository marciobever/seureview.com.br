// app/(site)/privacidade/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | SeuReview",
  description: "Como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

export default function Page() {
  const updated = new Date().toLocaleDateString("pt-BR");
  return (
    <main className="section">
      <div className="max-container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-gray-500">Última atualização: {updated}</p>

        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            No SeuReview, levamos a sua privacidade a sério. Esta política explica como coletamos,
            usamos e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de
            Dados (LGPD).
          </p>

          <h2 className="text-xl font-semibold">1. Dados que coletamos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cadastro:</strong> nome, e-mail, senha (hash), dados de cobrança.</li>
            <li><strong>Uso:</strong> logs técnicos e métricas de utilização para melhorar o serviço.</li>
            <li><strong>Integrações:</strong> tokens e IDs mínimos necessários (ex.: Meta) para operar recursos de publicação.</li>
          </ul>

          <h2 className="text-xl font-semibold">2. Como usamos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Autenticação, segurança e personalização da experiência.</li>
            <li>Emissão de cobranças e comunicações essenciais do serviço.</li>
            <li>Geração de relatórios e melhorias contínuas do produto.</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Bases legais</h2>
          <p>Executamos o contrato (prestação do serviço) e, quando necessário, buscamos seu consentimento para integrações específicas.</p>

          <h2 className="text-xl font-semibold">4. Compartilhamento</h2>
          <p>
            Não vendemos seus dados. Compartilhamos apenas com provedores de infraestrutura e integrações
            estritamente necessários (ex.: plataformas sociais), seguindo contratos e medidas de segurança.
          </p>

          <h2 className="text-xl font-semibold">5. Segurança</h2>
          <p>
            Adotamos controles técnicos e administrativos. Ainda assim, nenhum sistema é 100% seguro; em
            caso de incidente, seguiremos os deveres de comunicação previstos em lei.
          </p>

          <h2 className="text-xl font-semibold">6. Seus direitos</h2>
          <p>
            Você pode solicitar confirmação de tratamento, acesso, correção, portabilidade e exclusão,
            entre outros. Contato: <a className="underline" href="mailto:privacidade@seureview.com.br">privacidade@seureview.com.br</a>.
          </p>

          <h2 className="text-xl font-semibold">7. Retenção</h2>
          <p>
            Mantemos dados pelo tempo necessário ao cumprimento das finalidades e obrigações legais/contratuais.
          </p>

          <h2 className="text-xl font-semibold">8. Alterações</h2>
          <p>
            Podemos atualizar esta política. Alterações relevantes serão comunicadas pelos canais oficiais.
          </p>
        </div>
      </div>
    </main>
  );
}
