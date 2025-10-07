// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // <-- isso faz o Next gerar .next/standalone
  // opcional, deixa o dev/CI mais silencioso:
  // telemetry não afeta prod, mas pode desativar se quiser
  // experimental: { instrumentationHook: false },
  // images: { unoptimized: true }, // só se você quiser evitar Image Optimization
};

export default nextConfig;
