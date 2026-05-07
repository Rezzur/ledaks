import { motion, useReducedMotion } from "motion/react";

type BlurTextProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
};

export function BlurText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
}: BlurTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <motion.span
          className="blur-word"
          key={`${word}-${index}`}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10, filter: "blur(7px)" }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 0.48,
            delay: delay + index * 0.025,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
