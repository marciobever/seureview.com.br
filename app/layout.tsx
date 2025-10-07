import "./globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SeuReview — Automação de afiliados para marketplaces e redes sociais",
  description:
    "Descubra produtos virais, gere legendas com IA e publique com rastreamento (UTM/SubIDs). Shopee, Amazon, Mercado Livre, AliExpress e Temu.",
  metadataBase: new URL("https://seureview.com.br"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "SeuReview",
    description:
      "Automação de afiliados para marketplaces e redes sociais.",
    url: "https://seureview.com.br",
    siteName: "SeuReview",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeuReview",
    description:
      "Automação de afiliados para marketplaces e redes sociais.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasSession = cookies().has("app_session");

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header initialLoggedIn={hasSession} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
