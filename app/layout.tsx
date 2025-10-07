// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SeuReview",
  description: "Automação de afiliados para marketplaces e redes sociais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasSession = cookies().has("app_session");

  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900 antialiased`}>
        {/* HEADER fixo */}
        <Header initialLoggedIn={hasSession} />

        {/* CONTEÚDO ocupa o espaço disponível */}
        <main className="flex-1 mx-auto max-w-7xl px-4 py-10">
          {children}
        </main>

        {/* FOOTER sempre visível */}
        <Footer />
      </body>
    </html>
  );
}
