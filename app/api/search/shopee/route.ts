import { NextResponse } from "next/server";

/**
 * Rota de demonstração/proxy para o HeroPreview.
 * - Se tiver BACKEND_SHOPEE_URL no ambiente, repassa a requisição (proxy).
 * - Caso contrário, retorna um MOCK com 6 itens bonitos.
 */
export async function POST(req: Request) {
  // tenta proxy se configurado
  const upstream = process.env.BACKEND_SHOPEE_URL; // ex.: https://api.seureview.com.br/api/search/shopee
  if (upstream) {
    try {
      const body = await req.json().catch(() => ({}));
      const r = await fetch(upstream, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        // não cachear preview
        cache: "no-store",
      });
      const text = await r.text(); // pode vir não-JSON de um erro
      try {
        const json = JSON.parse(text);
        return NextResponse.json(json, {
          status: r.status,
          headers: { "Cache-Control": "no-store" },
        });
      } catch {
        return new NextResponse(text, {
          status: r.status,
          headers: { "Cache-Control": "no-store" },
        });
      }
    } catch (e: any) {
      return NextResponse.json(
        { error: e?.message || "Falha ao contatar o backend." },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }
  }

  // MOCK (sem backend): dados bem formatados para o preview
  const items = [
    {
      id: "demo-1",
      title: "Tênis Performance X — leve, macio e com ótimo amortecimento",
      price: 199.9,
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      ],
      url: "https://shopee.com.br/product/000/111",
      commission_rate: 12,
      historical_sold: 1543,
    },
    {
      id: "demo-2",
      title: "Fone Bluetooth Pro — cancelamento ativo e bateria 30h",
      price: 129.9,
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1518443883431-b4f51f1b3a58?q=80&w=1200&auto=format&fit=crop",
      ],
      url: "https://shopee.com.br/product/000/222",
      commission_rate: 18,
      historical_sold: 2410,
    },
    {
      id: "demo-3",
      title: "Liquidificador Turbo 1200W — copo grande com medidor",
      price: 159.9,
      rating: 4.6,
      images: [
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop",
      ],
      url: "https://shopee.com.br/product/000/333",
      commission_rate: 10,
      historical_sold: 980,
    },
    {
      id: "demo-4",
      title: "Relógio Smart Fit — monitor de batimentos e sono",
      price: 89.9,
      rating: 4.7,
      images: [
        "https://images.unsplash.com/photo-1518444083036-6d1b08ff09ee?q=80&w=1200&auto=format&fit=crop",
      ],
      url: "https://shopee.com.br/product/000/444",
      commission_rate: 16,
      historical_sold: 3200,
    },
    {
      id: "demo-5",
      title: "Air Fryer 4L — antiaderente e fácil de limpar",
      price: 279.9,
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1611259182033-8f6d0f0fe6a8?q=80&w=1200&auto=format&fit=crop",
      ],
      url: "https://shopee.com.br/product/000/555",
      commission_rate: 14,
      historical_sold: 2100,
    },
    {
      id: "demo-6",
      title: "Teclado Mecânico RGB — switch marrom e layout ABNT2",
      price: 229.9,
      rating: 4.5,
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
      ],
      url: "https://shopee.com.br/product/000/666",
      commission_rate: 15,
      historical_sold: 870,
    },
  ];

  return NextResponse.json(
    { items },
    { headers: { "Cache-Control": "no-store" } }
  );
}
