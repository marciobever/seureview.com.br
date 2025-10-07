"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  behavior?: ScrollBehavior;        // 'auto' | 'smooth'
  skipWhenHasHash?: boolean;        // evita forçar scroll quando tiver #ancora
};

export default function ScrollToTop({
  behavior = "auto",
  skipWhenHasHash = true,
}: Props) {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    const hasHash = typeof window !== "undefined" && window.location.hash;
    if (skipWhenHasHash && hasHash) {
      // garante posicionamento na ancora após hidratar
      const id = hasHash.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "auto", block: "start" }), 0);
      return;
    }

    // abre sempre no topo
    const t = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior });
    }, 0);

    return () => clearTimeout(t);
  }, [pathname, search, behavior, skipWhenHasHash]);

  return null;
}
