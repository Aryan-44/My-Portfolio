import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import './About.css';

const highlights = [
  {
    number: '01',
    title: 'Grounded document search',
    description:
      'A multi-document RAG assistant connects document loading, embeddings, vector retrieval, and generated responses.',
    href: 'https://github.com/Aryan-44/RAG-ChatBot',
    link: 'RAG ChatBot',
  },
  {
    number: '02',
    title: 'Applied machine learning',
    description:
      'A student-performance application explores regression, classification, and clustering in a working web app.',
    href: 'https://github.com/Aryan-44/Student-Performance-Model',
    link: 'Student Performance Model',
  },
  {
    number: '03',
    title: 'Useful AI automation',
    description:
      'A scheduled workflow analyzes weather forecasts and sends daily reports and alerts.',
    href: 'https://github.com/Aryan-44/weather-ai-agent',
    link: 'Weather AI Agent',
  },
];

function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding about-section" id="about">
      <div className="section-container">
        <SectionHeading>About Me</SectionHeading>

        <div className="about-layout">
          <div className="about-story">
            <p className="about-kicker">AI / ML ENGINEER</p>
            <p className="about-lead">
              I build intelligent software that takes AI ideas from data and
              retrieval pipelines to practical user experiences.
            </p>
            <p className="about-description">
              My work includes a multi-document RAG assistant, a student
              performance modeling app, and an automated weather-reporting
              workflow. Across these projects, I focus on making the underlying
              data flow understandable and the result useful to the person
              using it.
            </p>
            <p className="about-description">
              I’m focused on AI/ML and Generative AI engineering, especially
              applications that combine language models, machine learning, and
              reliable software interfaces.
            </p>

            <div className="about-education">
              <span className="about-education__label">Education</span>
              <h3>B.Tech in Computer Science and Engineering</h3>
              <p>Sri Venkateswara University</p>
            </div>
          </div>

          <div
            className="about-highlights"
            role="group"
            aria-label="Selected project work"
          >
            {highlights.map((highlight, index) => (
              <motion.article
                className="about-highlight"
                key={highlight.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <span className="about-highlight__number">
                  {highlight.number}
                </span>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
                <a href={highlight.href} target="_blank" rel="noreferrer">
                  {highlight.link}
                  <span aria-hidden="true">↗</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
