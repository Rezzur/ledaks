import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
};

export function Counter({ to, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplay(to.toLocaleString("ru-RU"));
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest).toLocaleString("ru-RU")),
    });
    return controls.stop;
  }, [isInView, prefersReducedMotion, to]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
