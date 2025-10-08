// app/(site)/signup/page.tsx
import Link from "next/link";

const APP_ORIGIN = process.env.APP_ORIGIN ?? "https://app.seureview.com.br";

export const metadata = { title: "Criar conta | SeuReview" };

export default function SignupPage() {
  return (
    <main className="section">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-2xl font-bold">Criar conta</h1>
        <p className="mt-2 text-gray-600">
          O cadastro é finalizado no app do SeuReview.
        </p>

        {/* Opção direta: ir para a tela de signup do app */}
        <div className="mt-6 space-y-3">
          <a href={`${APP_ORIGIN}/signup?next=/dashboard`} className="btn btn-primary w-full">
            Criar conta no App
          </a>
          <p className="text-sm text-gray-500 text-center">
            Já tem conta?{" "}
            <Link href="/login" className="underline">
              Entrar
            </Link>
            .
          </p>
        </div>

        {/* Alternativa (navegação com POST): descomente se o app aceitar esse endpoint */}
        {/*
        <form
          method="POST"
          action={`${APP_ORIGIN}/api/auth/signup`}
          className="mt-8 space-y-3"
        >
          <input type="hidden" name="redirectTo" value="/dashboard" />
          <input name="name" className="input w-full" placeholder="Seu nome" required />
          <input name="email" type="email" className="input w-full" placeholder="Seu e-mail" required />
          <input name="password" type="password" className="input w-full" placeholder="Senha" required />
          <button type="submit" className="btn btn-primary w-full">Criar conta</button>
        </form>
        */}
      </div>
    </main>
  );
}
