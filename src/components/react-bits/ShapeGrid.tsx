import type { CSSProperties } from "react";

type ShapeGridProps = {
  className?: string;
  cells?: number;
};

export function ShapeGrid({ className = "", cells = 36 }: ShapeGridProps) {
  return (
    <div className={`shape-grid ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: cells }).map((_, index) => (
        <span key={index} style={{ "--shape-index": index } as CSSProperties} />
      ))}
    </div>
  );
}
