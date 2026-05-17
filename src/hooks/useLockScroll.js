import { useEffect } from "react";

export function useLockScroll(active) {
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);
}