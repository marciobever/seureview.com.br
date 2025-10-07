export const metadata = {
  title: "Exclusão de dados do usuário | SeuReview",
  description:
    "Como solicitar a exclusão dos seus dados pessoais no SeuReview conforme a LGPD.",
  alternates: { canonical: "/exclusao-de-dados" },
};

export default function Page() {
  return (
    <main className="section">
      <div className="max-container prose max-w-3xl">
        <h1>Exclusão de dados do usuário</h1>
        <p>
          <strong>Última atualização:</strong>{" "}
          {new Date().toLocaleDateString("pt-BR")}
        </p>

        <p>
          Você pode solicitar a exclusão dos seus dados pessoais a qualquer
          momento. Após a conclusão do processo, sua conta é encerrada e os
          dados elegíveis são removidos de nossos sistemas ativos.
        </p>

        <h2>Como solicitar</h2>
        <ol>
          <li>
            Envie um e-mail para{" "}
            <a href="mailto:suporte@seureview.com.br">
              suporte@seureview.com.br
            </a>{" "}
            com o assunto <em>“Exclusão de dados”</em>.
          </li>
          <li>
            Informe o <strong>e-mail cadastrado</strong> e, se possível, o{" "}
            <strong>ID da conta</strong> (se tiver).
          </li>
          <li>
            Por segurança, podemos solicitar <strong>verificação de
            identidade</strong> antes de prosseguir.
          </li>
        </ol>

        <h2>O que é excluído</h2>
        <ul>
          <li>Dados de perfil (nome, e-mail) e credenciais.</li>
          <li>Preferências e configurações da conta.</li>
          <li>
            Conteúdos gerados pela conta (quando não houver obrigação legal ou
            impacto em terceiros).
          </li>
        </ul>

        <h2>O que podemos reter</h2>
        <p>
          Podemos manter dados estritamente necessários por períodos limitados,
          para:
        </p>
        <ul>
          <li>Atender obrigações legais, fiscais e auditorias.</li>
          <li>Resolver disputas e prevenir fraudes.</li>
          <li>
            Manter <strong>registros de logs</strong> e dados{" "}
            <strong>agregados/anonimizados</strong> que não identificam você.
          </li>
        </ul>

        <h2>Prazos</h2>
        <p>
          Após confirmar sua identidade, concluímos a solicitação em até{" "}
          <strong>15 dias corridos</strong> (salvo obrigações legais em
          contrário). Você será notificado por e-mail quando finalizarmos.
        </p>

        <h2>Consequências</h2>
        <ul>
          <li>A conta é encerrada e o acesso é removido.</li>
          <li>
            A exclusão é <strong>irreversível</strong> para os dados eliminados.
          </li>
        </ul>

        <h2>Dúvidas</h2>
        <p>
          Fale com a gente em{" "}
          <a href="mailto:suporte@seureview.com.br">suporte@seureview.com.br</a
          >.
        </p>

        <p>
          <a
            href="mailto:suporte@seureview.com.br?subject=Exclus%C3%A3o%20de%20dados%20-%20SeuReview&body=E-mail%20cadastrado%3A%20%0D%0AID%20da%20conta%20(se%20tiver)%3A%20%0D%0AObserva%C3%A7%C3%B5es%3A%20"
            className="btn btn-primary"
          >
            Solicitar exclusão por e-mail
          </a>
        </p>
      </div>
    </main>
  );
}
