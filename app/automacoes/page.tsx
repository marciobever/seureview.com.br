// app/automacoes/page.tsx
import * as React from 'react';

export const metadata = {
  title: 'Automações | SeuReview',
  description:
    'Crie robôs para publicar, reagendar, monitorar preço e comissionamento em marketplaces.',
  alternates: { canonical: '/automacoes' },
};

// Ícones inline (sem dependências)
function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}
function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M12 7v5l3 3" strokeWidth="2" />
    </svg>
  );
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M20 6L9 17l-5-5" strokeWidth="2" />
    </svg>
  );
}
function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M20 10V4H14L4 14l6 6 10-10z" strokeWidth="2" />
      <circle cx="16" cy="8" r="2" strokeWidth="2" />
    </svg>
  );
}
function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm6-6V11a6 6 0 1 0-12 0v5l-2 2h18l-2-2Z" strokeWidth="2" />
    </svg>
  );
}

function Badge({
  tone = 'default',
  children,
  className = '',
}: {
  tone?: 'default' | 'success' | 'warn';
  children: React.ReactNode;
  className?: string;
}) {
  const styles =
    tone === 'success'
      ? 'border-[#C1F1C9] bg-[#EFFFF2] text-[#1B6B3A]'
      : tone === 'warn'
      ? 'border-[#FFE3B3] bg-[#FFF8E8] text-[#7A4B00]'
      : 'border-gray-200 bg-gray-50 text-gray-700';
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] border ${styles} ${className}`}>
      {children}
    </span>
  );
}

function RuleRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="text-gray-600">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="section">
      <div className="max-container">
        <h1 className="text-3xl md:text-4xl font-bold">Automações</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Configure robôs que fazem o trabalho por você: publicar automaticamente, reagendar top performers,
          monitorar preço e comissões — tudo no piloto automático.
        </p>

        {/* highlight */}
        <div className="mt-6 rounded-xl border border-[#FFD9CF] bg-[#FFF7F5] p-4 flex items-center gap-3">
          <BoltIcon className="w-5 h-5 text-[#EE4D2D]" />
          <div className="text-sm">
            <span className="font-semibold">Dica:</span> Automações rodam no app autenticado. Aqui é uma prévia visual do que você vai poder criar.
          </div>
        </div>

        {/* grade de “robôs” */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* 1) Publicação automática Amazon */}
          <div className="card">
            <div className="card-body space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Publicação automática (Amazon)</div>
                <Badge tone="success" className="whitespace-nowrap">
                  <CheckIcon className="w-3 h-3" />
                  Pronto p/ usar
                </Badge>
              </div>

              <div className="rounded-lg border p-3 space-y-2">
                <div className="text-xs text-gray-500">Filtros</div>
                <RuleRow label="Categoria" value="Eletroportáteis" />
                <RuleRow label="Comissão mínima" value="≥ 10%" />
                <RuleRow label="Avaliação" value="≥ 4.3 ★" />
                <RuleRow label="Preço" value="R$ 100 — R$ 300" />
              </div>

              <div className="rounded-lg border p-3 space-y-2">
                <div className="text-xs text-gray-500">Ações</div>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4" /> Gerar legenda com IA</li>
                  <li className="flex items-center gap-2"><TagIcon className="w-4 h-4" /> Criar UTM/SubIDs por canal</li>
                  <li className="flex items-center gap-2"><ClockIcon className="w-4 h-4" /> Agendar em horários de pico</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <Badge>Frequência: hora em hora</Badge>
                <Badge tone="warn">Modo: rascunho</Badge>
              </div>
            </div>
          </div>

          {/* 2) Reciclar top performers */}
          <div className="card">
            <div className="card-body space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Reciclar Top Performers</div>
                <Badge className="whitespace-nowrap">Beta</Badge>
              </div>

              <div className="rounded-lg border p-3 space-y-2">
                <div className="text-xs text-gray-500">Critérios</div>
                <RuleRow label="Período" value="Últimos 7 dias" />
                <RuleRow label="CTR" value="≥ 3%" />
                <RuleRow label="Salvações" value="≥ 50" />
              </div>

              <div className="rounded-lg border p-3 space-y-2">
                <div className="text-xs text-gray-500">Ações</div>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4" /> Gerar 2 variações de legenda</li>
                  <li className="flex items-center gap-2"><ClockIcon className="w-4 h-4" /> Re-agendar nos melhores slots</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <Badge>Frequência: diária</Badge>
                <Badge tone="success">Simulação</Badge>
              </div>
            </div>
          </div>

          {/* 3) Alerta de preço Shopee */}
          <div className="card">
            <div className="card-body space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Alerta de Preço (Shopee)</div>
                <Badge tone="success" className="whitespace-nowrap">
                  <BellIcon className="w-3 h-3" />
                  Ativo
                </Badge>
              </div>

              <div className="rounded-lg border p-3 space-y-2">
                <div className="text-xs text-gray-500">Condição</div>
                <RuleRow label="Queda de preço" value="≥ 8%" />
                <RuleRow label="Estoque" value="Disponível" />
              </div>

              <div className="rounded-lg border p-3 space-y-2">
                <div className="text-xs text-gray-500">Notificação</div>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2"><BellIcon className="w-4 h-4" /> Email imediato</li>
                  <li className="flex items-center gap-2"><BellIcon className="w-4 h-4" /> Telegram (opcional)</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <Badge>Frequência: a cada 30 min</Badge>
                <Badge>Limite/dia: 20 alertas</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* CTA para o app */}
        <div className="mt-12 rounded-xl border border-[#FFD9CF] bg-white p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="font-semibold">Pronto para automatizar?</div>
            <p className="text-sm text-gray-600">Crie suas regras no painel autenticado e deixe o robô trabalhar.</p>
          </div>
          <div className="flex gap-2">
            <a href="https://app.seureview.com.br/signup" className="btn btn-primary text-sm">Criar conta grátis</a>
            <a href="https://app.seureview.com.br/login" className="btn btn-ghost text-sm">Entrar</a>
          </div>
        </div>
      </div>
    </main>
  );
}
