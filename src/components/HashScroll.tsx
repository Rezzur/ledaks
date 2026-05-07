import { useEffect } from "react";

export function HashScroll() {
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    function scrollToHash() {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      const header = document.querySelector<HTMLElement>(".site-header");
      const offset = (header?.offsetHeight ?? 0) + 22;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }

    const frame = window.requestAnimationFrame(scrollToHash);
    const fallbacks = [
      window.setTimeout(scrollToHash, 220),
      window.setTimeout(scrollToHash, 640),
      window.setTimeout(scrollToHash, 1100),
    ];

    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("pageshow", scrollToHash);

    return () => {
      window.cancelAnimationFrame(frame);
      fallbacks.forEach((fallback) => window.clearTimeout(fallback));
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("pageshow", scrollToHash);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  return null;
}
