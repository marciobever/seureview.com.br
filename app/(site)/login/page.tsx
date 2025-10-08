// app/(site)/login/page.tsx
import Link from "next/link";
import { headers } from "next/headers";

const APP_ORIGIN = process.env.APP_ORIGIN ?? "https://app.seureview.com.br";

function isLoggedFromCookies(): boolean {
  const cookieHeader = headers().get("cookie") ?? "";
  return /(^|;\s*)(app_session|__Secure-app_session)=/.test(cookieHeader);
}

export const metadata = { title: "Entrar | SeuReview" };

export default function LoginPage() {
  const logged = isLoggedFromCookies();

  return (
    <main className="section">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-2xl font-bold">Entrar</h1>
        <p className="mt-2 text-gray-600">
          O login é feito no app seguro do SeuReview.
        </p>

        <div className="mt-6 space-y-3">
          {logged ? (
            <>
              <a href={`${APP_ORIGIN}/dashboard`} className="btn btn-primary w-full">
                Ir para o Dashboard
              </a>
              <a href={`${APP_ORIGIN}/api/auth/logout`} className="btn btn-ghost w-full">
                Sair
              </a>
            </>
          ) : (
            <>
              <a href={`${APP_ORIGIN}/login?next=/dashboard`} className="btn btn-primary w-full">
                Entrar no App
              </a>
              <p className="text-sm text-gray-500 text-center">
                Ainda não tem conta?{" "}
                <Link href="/signup" className="underline">
                  Crie agora
                </Link>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
