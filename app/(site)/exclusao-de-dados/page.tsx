// app/(site)/exclusao-de-dados/page.tsx
import { SectionHeader } from "@/components/ui";

export const metadata = {
  title: "Exclusão de dados do usuário | SeuReview",
  description:
    "Saiba como solicitar a exclusão dos seus dados pessoais no SeuReview, prazos, o que é removido e o que pode ser retido conforme a LGPD.",
  alternates: { canonical: "/exclusao-de-dados" },
};

function LastUpdated() {
  const dt = new Date();
  const stamp = dt.toLocaleDateString("pt-BR");
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-100 text-zinc-700 text-xs px-2 py-1 ring-1 ring-zinc-200">
      Última atualização: {stamp}
    </span>
  );
}

export default function Page() {
  return (
    <main className="section">
      <div className="max-container max-w-4xl mx-auto">
        <SectionHeader
          emoji="🗑️"
          title="Exclusão de dados do usuário"
          subtitle="Entenda como pedir a exclusão dos seus dados pessoais e o que acontece com sua conta."
        />

        <div className="mt-2">
          <LastUpdated />
        </div>

        {/* Intro */}
        <div className="mt-6 card">
          <div className="card-body prose">
            <p>
              Você pode solicitar a exclusão dos seus dados pessoais a qualquer
              momento. Ao concluir, sua conta é encerrada e os dados elegíveis
              são removidos de nossos sistemas ativos, conforme a{" "}
              <strong>LGPD</strong>.
            </p>
          </div>
        </div>

        {/* Como solicitar / O que é excluído / O que podemos reter */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="card-body">
              <h2 className="text-lg font-semibold">Como solicitar</h2>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-zinc-700">
                <li>
                  Envie um e-mail para{" "}
                  <a href="mailto:suporte@seureview.com.br" className="underline">
                    suporte@seureview.com.br
                  </a>{" "}
                  com o assunto <em>“Exclusão de dados”</em>.
                </li>
                <li>
                  Informe o <strong>e-mail cadastrado</strong> e, se possível,
                  o <strong>ID da conta</strong>.
                </li>
                <li>
                  Podemos solicitar <strong>verificação de identidade</strong>{" "}
                  por segurança.
                </li>
              </ol>
              <a
                href="mailto:suporte@seureview.com.br?subject=Exclus%C3%A3o%20de%20dados%20-%20SeuReview&body=E-mail%20cadastrado%3A%20%0D%0AID%20da%20conta%20(se%20tiver)%3A%20%0D%0AObserva%C3%A7%C3%B5es%3A%20"
                className="btn btn-primary w-full mt-4"
              >
                Solicitar exclusão por e-mail
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="text-lg font-semibold">O que é excluído</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>Dados de perfil (nome, e-mail) e credenciais.</li>
                <li>Preferências e configurações da conta.</li>
                <li>
                  Conteúdos gerados pela conta (quando não houver obrigação
                  legal ou impacto em terceiros).
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="text-lg font-semibold">O que podemos reter</h2>
              <p className="mt-3 text-sm text-zinc-700">
                Mantemos apenas o estritamente necessário, por períodos
                limitados, para:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>Atender obrigações legais, fiscais e auditorias.</li>
                <li>Resolver disputas e prevenir fraudes.</li>
                <li>
                  Preservar <strong>logs</strong> e dados{" "}
                  <strong>agregados/anonimizados</strong> sem identificação
                  pessoal.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prazos */}
        <div className="mt-6 card">
          <div className="card-body">
            <h2 className="text-lg font-semibold">Prazos</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Após confirmar sua identidade, concluímos a solicitação em até{" "}
              <strong>15 dias corridos</strong> (salvo obrigações legais em
              contrário). Você será notificado por e-mail quando finalizarmos.
            </p>
          </div>
        </div>

        {/* Consequências */}
        <div className="mt-6 card">
          <div className="card-body">
            <h2 className="text-lg font-semibold">Consequências</h2>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700">
              <li>A conta é encerrada e o acesso é removido.</li>
              <li>
                A exclusão é <strong>irreversível</strong> para os dados
                eliminados.
              </li>
            </ul>
            <div className="mt-3 rounded-lg bg-amber-50 text-amber-900 text-sm p-3 ring-1 ring-amber-200">
              Dica: se você só deseja parar de usar o serviço, considere{" "}
              <a href="/configuracoes/conta" className="underline">
                desativar a conta temporariamente
              </a>{" "}
              (quando disponível) — isso preserva seus dados.
            </div>
          </div>
        </div>

        {/* Dúvidas / links úteis */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="card-body">
              <h2 className="text-lg font-semibold">Dúvidas</h2>
              <p className="mt-2 text-sm text-zinc-700">
                Fale com a gente em{" "}
                <a
                  href="mailto:suporte@seureview.com.br"
                  className="underline"
                >
                  suporte@seureview.com.br
                </a>
                .
              </p>
              <div className="mt-3 flex gap-2">
                <a
                  href="mailto:suporte@seureview.com.br?subject=Exclus%C3%A3o%20de%20dados%20-%20SeuReview&body=E-mail%20cadastrado%3A%20%0D%0AID%20da%20conta%20(se%20tiver)%3A%20%0D%0AObserva%C3%A7%C3%B5es%3A%20"
                  className="btn btn-primary"
                >
                  Solicitar por e-mail
                </a>
                <a href="/privacidade" className="btn btn-outline">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="text-lg font-semibold">Transparência</h2>
              <p className="mt-2 text-sm text-zinc-700">
                Processamos pedidos de exclusão com prioridade e mantemos
                registro mínimo para comprovação do atendimento à solicitação,
                conforme a LGPD.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          Ao enviar a solicitação, você declara estar ciente de que a exclusão
          dos dados é definitiva para os itens removidos e pode afetar serviços
          associados.
        </p>
      </div>
    </main>
  );
}
