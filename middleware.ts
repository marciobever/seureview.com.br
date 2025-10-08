// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SESSION_COOKIE = "app_session";

// APIs públicas (não exigem login)
const PUBLIC_API = [
  "/api/auth/login",
  "/api/auth/signup",
  "/api/auth/logout",
  "/api/dev/login",
  "/api/dev/seed-owner",
  "/api/health",
  "/api/dev/env-check",
];

// Páginas públicas (visíveis sem login)
const PUBLIC_PAGES = ["/", "/login", "/signup", "/privacy", "/terms"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  const searchParams = url.searchParams;
  const ua = req.headers.get("user-agent") || "";

  // 0) Short-circuit de healthcheck: responde OK para curl/wget/coolify em "/" ou "/health"
  if (
    (pathname === "/" || pathname === "/health") &&
    /(curl|wget|healthcheck|coolify)/i.test(ua)
  ) {
    return new NextResponse("OK", {
      status: 200,
      headers: { "content-type": "text/plain" },
    });
  }

  // liberar assets estáticos e arquivos públicos
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets") ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|css|js|map|txt|xml|json)$/i)
  ) {
    return NextResponse.next();
  }

  // rota de saúde acessível por qualquer agente (útil para testar no browser também)
  if (pathname === "/api/health" || pathname === "/health") {
    return new NextResponse("OK", {
      status: 200,
      headers: { "content-type": "text/plain" },
    });
  }

  const hasSession = Boolean(req.cookies.get(SESSION_COOKIE)?.value);

  // 1) Se usuário já estiver logado e acessar /login ou /signup → redireciona
  if ((pathname === "/login" || pathname === "/signup") && hasSession) {
    const nextParam = searchParams.get("next");
    const redirectUrl = url.clone();
    redirectUrl.pathname = nextParam || "/dashboard/shopee";
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  // 2) APIs públicas liberadas
  if (PUBLIC_API.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // 3) Páginas públicas liberadas
  if (PUBLIC_PAGES.includes(pathname)) {
    return NextResponse.next();
  }

  // 4) Verifica se rota requer autenticação
  const needsAuth =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/api/") ||
    pathname === "/dashboard";

  if (!needsAuth) return NextResponse.next();

  // 5) Se o usuário tem sessão → ok
  if (hasSession) return NextResponse.next();

  // 6) APIs protegidas sem sessão → 401 JSON
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // 7) Páginas protegidas sem sessão → redireciona p/ login
  const loginUrl = url.clone();
  loginUrl.pathname = "/login";
  loginUrl.search = "";
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

// Aplica globalmente (exceto estáticos)
// (não excluo /api/health aqui porque já tratamos acima)
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
