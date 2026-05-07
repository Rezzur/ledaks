import { ReactNode } from "react";

type ShinyTextProps = {
  children: ReactNode;
  className?: string;
};

export function ShinyText({ children, className = "" }: ShinyTextProps) {
  return <span className={`shiny-text ${className}`.trim()}>{children}</span>;
}
