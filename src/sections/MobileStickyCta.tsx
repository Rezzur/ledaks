import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { contactInfo } from "../data/site";

export function MobileStickyCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = ["#modularity", "#projects", "#packages", "#contacts"]
      .map((selector) => document.querySelector(selector))
      .filter((target): target is Element => Boolean(target));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setHidden(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: "-38% 0px -42% 0px", threshold: 0.01 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={hidden ? "mobile-sticky-cta is-hidden" : "mobile-sticky-cta"}>
      <a href={contactInfo.phoneHref}>
        <Phone size={17} />
        Позвонить
      </a>
      <a href="#contacts">
        <Mail size={17} />
        Заявка
      </a>
    </div>
  );
}
