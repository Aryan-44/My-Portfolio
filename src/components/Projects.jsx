import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding projects-section" id="projects">
      <div className="section-container">
        <SectionHeading>Selected Projects</SectionHeading>
        <p className="projects-intro">
          A closer look at systems I have built, from document retrieval and
          predictive modeling to practical AI automation.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              aria-labelledby={`project-title-${project.id}`}
              className="project-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              key={project.id}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.06,
              }}
              viewport={{ once: true, margin: '-40px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="project-card__eyebrow">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>

              <h3 id={`project-title-${project.id}`}>{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <ul
                aria-label={`${project.title} technologies`}
                className="project-card__tags"
              >
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <details className="project-card__details">
                <summary>
                  <span className="project-card__summary-closed">
                    Read case study
                  </span>
                  <span className="project-card__summary-open">
                    Hide case study
                  </span>
                  <svg
                    aria-hidden="true"
                    className="project-card__chevron"
                    viewBox="0 0 20 20"
                  >
                    <path d="m5 7.5 5 5 5-5" />
                  </svg>
                </summary>
                <dl className="project-card__case-study">
                  {project.caseStudy.map((item) => (
                    <div className="project-card__case-item" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </details>

              <a
                aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                className="project-card__source"
                href={project.repositoryUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>View source on GitHub</span>
                <svg
                  aria-hidden="true"
                  className="project-card__external-icon"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3h6v6M17 3 9 11" />
                  <path d="M15 11v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
