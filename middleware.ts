// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SESSION_COOKIE = "app_session";

const PUBLIC_API = [
  "/api/auth/login",
  "/api/auth/signup",
  "/api/auth/logout",
  "/api/dev/login",
  "/api/dev/seed-owner",
  "/api/health",
  "/api/dev/env-check",
];

const PUBLIC_PAGES = ["/", "/login", "/signup", "/privacy", "/terms"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname, searchParams } = url;

  // estáticos
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets") ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|css|js|map|txt|xml|json)$/i)
  ) {
    return NextResponse.next();
  }

  // saúde (não interceptar lógica nenhuma)
  if (pathname === "/api/health" || pathname === "/health") {
    return NextResponse.next();
  }

  const hasSession = Boolean(req.cookies.get(SESSION_COOKIE)?.value);

  // login/signup → redireciona se já logado
  if ((pathname === "/login" || pathname === "/signup") && hasSession) {
    const nextParam = searchParams.get("next");
    const redirectUrl = url.clone();
    redirectUrl.pathname = nextParam || "/dashboard/shopee";
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  // APIs e páginas públicas
  if (PUBLIC_API.some((p) => pathname.startsWith(p))) return NextResponse.next();
  if (PUBLIC_PAGES.includes(pathname)) return NextResponse.next();

  // protege dashboard & /api/*
  const needsAuth =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/api/") ||
    pathname === "/dashboard";

  if (!needsAuth) return NextResponse.next();
  if (hasSession) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const loginUrl = url.clone();
  loginUrl.pathname = "/login";
  loginUrl.search = "";
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

// NÃO rodar middleware em /api/health nem /health
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api/health|health).*)",
  ],
};
