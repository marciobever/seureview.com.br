"use client";

import { useEffect, useState } from "react";

/** Detecta sessão pelo cookie `app_session` (best-effort em client). */
export function useLoggedIn(pollMs = 1500) {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        setLogged(typeof document !== "undefined" && document.cookie.includes("app_session="));
      } catch {
        setLogged(false);
      }
    };
    check();

    const id = setInterval(check, pollMs);
    const onVis = () => check();
    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", onVis);
    }
    return () => {
      clearInterval(id);
      if (typeof document !== "undefined") {
        document.removeEventListener("visibilitychange", onVis);
      }
    };
  }, [pollMs]);

  return logged;
}
