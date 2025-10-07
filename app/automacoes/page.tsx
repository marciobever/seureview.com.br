// app/automacoes/page.tsx
export const metadata = {
  title: "Automação do bot | SeuReview",
  description:
    "Responda automaticamente quem comenta 'quero': reply público + DM com opções (produto, alternativa, grupo VIP). Integração com marketplaces.",
  alternates: { canonical: "/automacoes" },
};

// Ícones inline mínimos
function ReplyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <path d="M10 8V5l-7 7 7 7v-3h4a6 6 0 000-12h-1" strokeWidth="2" />
    </svg>
  );
}
function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <path d="M21 12a8.5 8.5 0 01-8.5 8.5H6l-3 3v-3.5A8.5 8.5 0 016.5 3.5H12A8.5 8.5 0 0121 12z" strokeWidth="2" />
    </svg>
  );
}
function ChainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <path d="M10 13a5 5 0 007.07 0l2.83-2.83a5 5 0 10-7.07-7.07L10 4" strokeWidth="2" />
      <path d="M14 11a5 5 0 00-7.07 0L4.1 13.83a5 5 0 107.07 7.07L14 20" strokeWidth="2" />
    </svg>
  );
}

function BotFlowDemo() {
  return (
    <div className="rounded-2xl border border-[#FFD9CF] bg-white/80 backdrop-blur">
      <div className="p-3 border-b border-[#FFD9CF] bg-[#FFF7F5] font-semibold text-sm">
        Fluxo: comentário → reply público → DM com botões
      </div>

      <div className="p-4 grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ReplyIcon className="w-4 h-4" />
            Detecção de “quero”
          </div>
          <p className="mt-2 text-sm text-gray-600">
            O bot monitora comentários e identifica “quero” (variações/acentos).
          </p>
          <div className="mt-3 rounded-lg border p-3 text-sm">
            <div><strong>@cliente</strong>: Quero</div>
            <div className="text-gray-600">↳ Detectado: <span className="font-mono">quero</span></div>
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ReplyIcon className="w-4 h-4" />
            Reply no post
          </div>
          <p className="mt-2 text-sm text-gray-600">
            O robô responde: “Pronto! Enviei por DM.” (personalizável).
          </p>
          <div className="mt-3 rounded-lg border p-3 text-sm bg-gray-50">
            Pronto! Enviei o link por DM. Se não aparecer, me avise aqui. ✅
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <MessageIcon className="w-4 h-4" />
            DM com 3 botões
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Botões: Produto da publicação, Segunda opção e Grupo VIP (WhatsApp).
          </p>
          <div className="mt-3 rounded-lg border p-3 text-sm space-y-2">
            <div>Olá! 👋 Seguem as opções:</div>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1.5 rounded-md text-xs border">Produto da publicação</button>
              <button className="px-3 py-1.5 rounded-md text-xs border">Segunda opção</button>
              <button className="px-3 py-1.5 rounded-md text-xs border">Grupo VIP</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="rounded-xl border p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ChainIcon className="w-4 h-4" />
            Integração com marketplaces
          </div>
          <p className="mt-2 text-sm text-gray-600">
            As URLs dos botões podem vir do mapeamento da publicação (ex.: Shopee/ML/Amazon) e usar UTM/SubIDs por canal.
          </p>
        </div>
      </div>
    </div>
  );
}

function ChannelsCards() {
  const items = [
    { name: "Shopee", desc: "Pega link do item da publicação e gera SubIDs." },
    { name: "Amazon", desc: "Encurta, adiciona UTM e valida região." },
    { name: "Mercado Livre", desc: "Escolhe melhor vendedor e aplica tag de campanha." },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.name} className="rounded-xl border p-4 bg-white/80 backdrop-blur">
          <div className="font-semibold">{it.name}</div>
          <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
          <div className="mt-3 text-[11px] text-gray-500">* Demonstração visual</div>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="section">
      <div className="max-container">
        <h1 className="text-3xl md:text-4xl font-bold">Automação do bot</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Responda automaticamente quem comenta “quero”: reply público e DM com três opções — já com UTM/SubIDs.
        </p>

        <div className="mt-8">
          <BotFlowDemo />
        </div>

        <div className="mt-8">
          <div className="text-sm font-semibold mb-3">Publicações por canal</div>
          <ChannelsCards />
        </div>
      </div>
    </main>
  );
}
