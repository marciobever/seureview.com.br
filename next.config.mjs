/** @type {import('next').NextConfig} */
const nextConfig = {
  // necessário pro Dockerfile copiar .next/standalone
  output: "standalone",

  // usando apenas imagens do /public; se um dia usar remotas, adicione aqui:
  images: {
    remotePatterns: [
      // { protocol: "https", hostname: "m.media-amazon.com" },
      // { protocol: "https", hostname: "cf.shopee.com.br" },
    ],
  },

  reactStrictMode: true,
};

export default nextConfig;
