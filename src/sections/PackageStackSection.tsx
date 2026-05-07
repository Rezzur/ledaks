import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import { SectionHeader } from "../components/SectionHeader";
import { ScrollStack } from "../components/react-bits/ScrollStack";
import { ScrollVelocity } from "../components/react-bits/ScrollVelocity";
import { packageStackItems } from "../data/site";

const packageTicker = [
  "Base",
  "Comfort",
  "Premium",
  "тёплый контур",
  "отделка",
  "терраса",
  "под ключ",
];

export function PackageStackSection() {
  return (
    <section className="package-stack-section" id="packages">
      <div className="package-stack-layout">
        <div className="package-stack-copy">
          <SectionHeader
            align="stack"
            number="04"
            title="Комплектация складывается слоями"
            text="Три спокойных уровня готовности: от чистой оболочки до дома, который выглядит законченным продуктом."
          />
          <ScrollVelocity items={packageTicker} label="Комплектации Ledaks" reverse />
          <div className="package-stack-actions">
            <Button href="#contacts" variant="dark" showArrow>
              Подобрать комплектацию
            </Button>
            <a href="#projects">
              Смотреть дома
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
        <ScrollStack items={packageStackItems} />
      </div>
    </section>
  );
}
