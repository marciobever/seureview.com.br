// NÃO precisa de "use client"
import * as React from 'react';

export default function PageBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-50"
      style={{
        // base branca pra manter contraste
        backgroundColor: 'white',
        // três glows radiais suaves cobrindo topo, canto direito e rodapé
        backgroundImage: `
          radial-gradient(1200px 600px at 10% -10%, rgba(238,77,45,0.18) 0%, rgba(238,77,45,0) 60%),
          radial-gradient(900px 600px at 82% 0%, rgba(255,140,105,0.14) 0%, rgba(255,140,105,0) 55%),
          radial-gradient(1200px 800px at 50% 120%, rgba(238,77,45,0.12) 0%, rgba(238,77,45,0) 60%)
        `,
    }}
    />
  );
}
