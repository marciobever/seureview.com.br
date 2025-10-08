"use client";

import Image from "next/image";

export default function HeroPreview() {
  return (
    <div className="p-4 w-[340px] sm:w-[420px]">
      <div className="relative aspect-[4/3] rounded-xl border bg-[#FFF7F5] overflow-hidden">
        <Image
          src="/landing/liquidificador.jpg"
          alt="Prévia do post"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-3 space-y-2">
        <div className="text-sm font-semibold">
          Liquidificador 1200W — Potência e durabilidade
        </div>
        <p className="text-xs text-gray-600">
          Tritura gelo, frutas e vitaminas em segundos 🧊🍓
        </p>
        <div className="text-[11px] text-[#EE4D2D]">seureview.com.br/r/abc123</div>
      </div>
    </div>
  );
}
