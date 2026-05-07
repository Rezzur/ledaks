import { CheckCircle2 } from "lucide-react";
import type { CSSProperties } from "react";
import type { PackageStackItem } from "../../data/site";

type ScrollStackProps = {
  items: PackageStackItem[];
};

export function ScrollStack({ items }: ScrollStackProps) {
  return (
    <div className="scroll-stack" aria-label="Комплектации Ledaks">
      {items.map((item, index) => (
        <article
          className={`scroll-stack-card scroll-stack-${item.tone}`}
          key={item.name}
          style={{ "--stack-index": index } as CSSProperties}
        >
          <div className="scroll-stack-card-copy">
            <span className="scroll-stack-kicker">{item.name}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>
                  <CheckCircle2 size={17} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="scroll-stack-visual" aria-hidden="true">
            <strong>{item.metric}</strong>
            <small>{item.caption}</small>
            <div>
              <span />
              <span />
              <span />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
