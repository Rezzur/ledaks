import { Check } from "lucide-react";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { ChromaCard } from "../components/react-bits/ChromaCard";
import { projects } from "../data/site";

export function ProjectsShowcase() {
  const featuredProject = projects[1];
  const projectTiles = [projects[0], projects[2], projects[3]];

  return (
    <section className="section projects-section" id="projects">
      <SectionHeader
        number="03"
        title="Дома без лишней стройки"
        text="Выбираете размер и сценарий. Остальное собирается вокруг участка, света, террасы и нужного уровня готовности."
      />

      <div className="projects-layout">
        <Reveal>
          <article className="featured-project" aria-label={featuredProject.title}>
            <img
              src={featuredProject.image}
              alt={featuredProject.imageAlt}
              loading="lazy"
            />
            <div className="featured-project-panel">
              <span className="featured-kicker">Линейка Ledaks</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.scenario}</p>
              <div className="featured-specs">
                <span>{featuredProject.area}</span>
                <span>{featuredProject.packageLabel}</span>
                <span>{featuredProject.term}</span>
              </div>
              <ul className="featured-details">
                {featuredProject.details.map((detail) => (
                  <li key={detail}>
                    <Check size={16} />
                    {detail}
                  </li>
                ))}
              </ul>
              <Button href="#contacts" showArrow>
                Обсудить Family
              </Button>
            </div>
          </article>
        </Reveal>

        <div className="chroma-project-grid">
          {projectTiles.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <ChromaCard
                className="chroma-project-card"
                tone={index === 1 ? "steel" : index === 2 ? "sage" : "honey"}
              >
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <div className="chroma-project-body">
                  <div className="project-card-topline">
                    <span>{project.area}</span>
                    <span>{project.packageLabel}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.scenario}</p>
                  <ul>
                    {project.details.slice(0, 2).map((detail) => (
                      <li key={detail}>
                        <Check size={15} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="project-card-footer">
                    <span>{project.term}</span>
                    <strong>{project.priceLabel}</strong>
                  </div>
                  <Button href="#contacts" variant="ghost" showArrow>
                    Обсудить
                  </Button>
                </div>
              </ChromaCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
