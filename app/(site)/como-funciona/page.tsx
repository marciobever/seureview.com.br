import nextDynamic from "next/dynamic";

export const dynamic = "force-static";

export const metadata = {
  title: "Como funciona | SeuReview",
  description:
    "Veja como o SeuReview encontra produtos virais, gera legendas com IA, cria links com UTM/SubIDs e publica em múltiplas redes.",
  alternates: { canonical: "/como-funciona" },
};

// carrega o conteúdo só no cliente (evita SSR loop e mantém leve)
const Client = nextDynamic(() => import("./Client"), {
  ssr: false,
  loading: () => <div style={{ padding: 24 }}>carregando…</div>,
});

export default function Page() {
  return <Client />;
}
