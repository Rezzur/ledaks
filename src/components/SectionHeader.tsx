import { BlurText } from "./react-bits/BlurText";

type SectionHeaderProps = {
  number: string;
  title: string;
  text?: string;
  align?: "split" | "stack";
  tone?: "light" | "dark";
};

export function SectionHeader({
  number,
  title,
  text,
  align = "split",
  tone = "light",
}: SectionHeaderProps) {
  return (
    <div className={`section-heading section-heading-${align} section-heading-${tone}`}>
      <div>
        <span className="section-number">{number}</span>
        <BlurText as="h2" text={title} />
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
