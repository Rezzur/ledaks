import { ArrowRight, Boxes, CheckCircle2 } from "lucide-react";
import type { CSSProperties } from "react";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { BlurText } from "../components/react-bits/BlurText";
import { ScrollVelocity } from "../components/react-bits/ScrollVelocity";
import { moduleBuildSteps } from "../data/site";

export function ModularitySection() {
  return (
    <section className="modularity-section" id="modularity">
      <div className="modularity-copy">
        <span className="section-number">02</span>
        <BlurText as="h2" text="Модульность видно при прокрутке" />
        <p>
          Дом складывается из понятных объемов: жилое ядро, терраса,
          дополнительная спальня и готовый внешний образ.
        </p>
        <div className="modularity-actions">
          <Button href="#contacts" variant="dark" showArrow>
            Обсудить свой дом
          </Button>
          <a href="#projects">
            Готовые форматы
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <div className="module-scroll-scenes" aria-label="Как дом Ledaks собирается из модулей">
        {moduleBuildSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.04}>
            <article className="module-scene">
              <div className="module-scene-top">
                <span>{step.label}</span>
                <strong>{step.stat}</strong>
              </div>
              <div className="module-blueprint">
                <div className="module-grid-lines" />
                {step.modules.map((module, moduleIndex) => (
                  <span
                    className={`module-block module-block-${module.variant} module-slot-${module.slot}`}
                    key={`${step.title}-${module.label}`}
                    style={{ "--module-index": moduleIndex } as CSSProperties}
                  >
                    {module.label}
                  </span>
                ))}
              </div>
              <div className="module-scene-text">
                <Boxes size={24} />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
              <ul>
                <li>
                  <CheckCircle2 size={17} />
                  готовые объемы
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  чистая сборка
                </li>
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="modularity-ticker">
        <ScrollVelocity
          items={["модуль", "свет", "терраса", "дерево", "графит", "Ledaks"]}
          label="Ритм модульной сборки Ledaks"
          reverse
        />
      </div>
    </section>
  );
}
