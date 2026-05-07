import { Button } from "../components/Button";
import { OrbitalGallery } from "../components/OrbitalGallery";
import { BlurText } from "../components/react-bits/BlurText";
import { hero, heroSpecItems, metrics } from "../data/site";
import { Counter } from "../components/react-bits/Counter";
import { ScrollVelocity } from "../components/react-bits/ScrollVelocity";
import { ShapeGrid } from "../components/react-bits/ShapeGrid";
import { ShinyText } from "../components/react-bits/ShinyText";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <ShapeGrid className="hero-shape-grid" cells={48} />
      <div className="hero-copy">
        <p className="hero-brand">
          <ShinyText>Ledaks</ShinyText>
        </p>
        <BlurText as="h1" text={hero.title} />
        <p className="hero-lead">{hero.lead}</p>
        <div className="hero-actions">
          <Button href="#contacts" variant="dark" showArrow>
            {hero.primaryCta}
          </Button>
          <Button href="#projects" variant="secondary">
            {hero.secondaryCta}
          </Button>
        </div>
        <div className="hero-spec-strip">
          <ScrollVelocity items={heroSpecItems} label="Состав решения Ledaks" />
        </div>
      </div>

      <OrbitalGallery />

      <div className="hero-metrics" aria-label="Ключевые показатели">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <strong>
              <Counter to={metric.value} suffix={metric.suffix} />
            </strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
