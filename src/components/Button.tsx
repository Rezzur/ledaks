import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  showArrow?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
  ...buttonProps
}: ButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={18} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...buttonProps}>
      {content}
    </button>
  );
}
