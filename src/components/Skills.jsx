import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import skillCategories, { skillFilters } from '../data/skills';
import SectionHeading from './common/SectionHeading';
import './Skills.css';

function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');
  const shouldReduceMotion = useReducedMotion();
  const visibleCategories =
    activeFilter === 'all'
      ? skillCategories
      : skillCategories.filter(({ id }) => id === activeFilter);

  return (
    <section className="section-padding skills-section" id="skills">
      <div className="section-container">
        <SectionHeading>Technical Expertise</SectionHeading>
        <p className="skills-intro">
          Tools and methods reflected in the projects I’ve built—organized by
          the kind of work they support.
        </p>

        <div className="skills-filters" role="group" aria-label="Filter skills">
          {skillFilters.map(({ id, label }) => (
            <button
              className={`skills-filter${activeFilter === id ? ' is-active' : ''}`}
              key={id}
              type="button"
              aria-pressed={activeFilter === id}
              onClick={() => setActiveFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="skills-grid" aria-live="polite">
          {visibleCategories.map((category, index) => (
            <motion.article
              className="skills-card"
              key={category.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : index * 0.06,
              }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className="skills-card__topline">
                <span className="skills-card__number">{category.number}</span>
                <span className="skills-card__count">
                  {category.skills.length} areas
                </span>
              </div>
              <h3>{category.title}</h3>
              <p className="skills-card__description">{category.description}</p>
              <ul className="skills-card__list">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <a
                className="skills-card__project"
                href={category.project.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>Related work</span>
                <span>{category.project.name}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
