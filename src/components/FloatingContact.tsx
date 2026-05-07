import { Mail, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactInfo } from "../data/site";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = ["#projects", "#packages", "#contacts"]
      .map((selector) => document.querySelector(selector))
      .filter((target): target is Element => Boolean(target));

    if (!targets.length) return;

    let frame = 0;

    function updateVisibility() {
      const topBand = window.innerHeight * 0.14;
      const bottomBand = window.innerHeight * 0.88;
      const shouldHide = targets.some((target) => {
        const rect = target.getBoundingClientRect();
        return rect.top < bottomBand && rect.bottom > topBand;
      });

      setHidden(shouldHide);
      if (shouldHide) setOpen(false);
    }

    function scheduleUpdate() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateVisibility);
    }

    scheduleUpdate();
    const delayedChecks = [300, 900, 1600].map((delay) =>
      window.setTimeout(scheduleUpdate, delay),
    );
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      delayedChecks.forEach((timeout) => window.clearTimeout(timeout));
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div
      className={[
        "floating-contact",
        open ? "is-open" : "",
        hidden ? "is-hidden" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="floating-actions" aria-hidden={!open}>
        <a href={contactInfo.phoneHref}>
          <Phone size={18} />
          Позвонить
        </a>
        <a href={`mailto:${contactInfo.email}`}>
          <Mail size={18} />
          Написать email
        </a>
      </div>
      <button
        type="button"
        aria-label="Открыть способы связи"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={22} /> : <Phone size={22} />}
      </button>
    </div>
  );
}
