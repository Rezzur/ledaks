import type { MouseEvent, ReactNode } from "react";

type ChromaCardProps = {
  children: ReactNode;
  className?: string;
  tone?: "honey" | "sage" | "steel";
};

export function ChromaCard({
  children,
  className = "",
  tone = "honey",
}: ChromaCardProps) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--chroma-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--chroma-y",
      `${event.clientY - rect.top}px`,
    );
  }

  return (
    <div
      className={`chroma-card chroma-card-${tone} ${className}`.trim()}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
