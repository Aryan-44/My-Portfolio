import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import './Experience.css';

const experiences = [
  {
    id: 'cfrsi',
    role: 'AI/ML Trainee',
    organization: 'CFRSI',
    startDate: '2026-08',
    startLabel: 'August 2026',
    current: true,
    responsibilities: [
      'Develop and evaluate AI/ML solutions in Python using NumPy, Pandas, and Scikit-learn.',
      'Support data preparation, preprocessing, exploratory data analysis, and feature engineering.',
      'Run model experiments, document findings, and collaborate on debugging and improvements using Git.',
    ],
  },
  {
    id: 'coincent',
    role: 'Data Science & AI Intern',
    organization: 'Coincent.ai (E-Cell IIT Madras)',
    startDate: '2024-02',
    startLabel: 'February 2024',
    endDate: '2024-03',
    endLabel: 'March 2024',
    responsibilities: [
      'Built Python ETL and data-preparation pipelines for ingestion, preprocessing, and model-ready data delivery.',
      'Applied feature engineering, exploratory data analysis, and cross-validation using Pandas, NumPy, and Scikit-learn.',
      'Evaluated models with Accuracy, F1-score, and AUC-ROC, and documented experiments and findings.',
    ],
  },
];

function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding experience-section" id="experience">
      <div className="section-container">
        <SectionHeading>Experience</SectionHeading>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              aria-labelledby={`experience-title-${experience.id}`}
              className="experience-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              key={experience.id}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
              viewport={{ once: true, margin: '-40px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="experience-card__meta">
                <p className="experience-card__eyebrow">
                  {experience.role}
                </p>
                <h3 id={`experience-title-${experience.id}`}>
                  {experience.organization}
                </h3>
                <p className="experience-card__dates">
                  <time dateTime={experience.startDate}>
                    {experience.startLabel}
                  </time>
                  {' – '}
                  {experience.current ? (
                    'Present'
                  ) : (
                    <time dateTime={experience.endDate}>
                      {experience.endLabel}
                    </time>
                  )}
                </p>
              </div>
              <ul className="experience-card__responsibilities">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
