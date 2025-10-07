/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // não usar output: 'standalone'
  images: {
    // como servimos estático/local, evita pipeline de otimização no servidor
    unoptimized: true,
  },
};

module.exports = nextConfig;
