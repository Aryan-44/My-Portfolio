import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import './Certifications.css';

const recognitions = [
  {
    id: 'oci-generative-ai',
    type: 'Certification',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    organization: 'Oracle',
    detail: 'Valid through August 2027',
  },
  {
    id: 'google-ai-essentials',
    type: 'Certification',
    title: 'Google AI Essentials',
    organization: 'Coursera',
  },
  {
    id: 'ai-with-python',
    type: 'Certification',
    title: 'AI with Python',
    organization: 'E-Cell IIT Madras',
  },
  {
    id: 'national-ai-ml-hackathon',
    type: 'Competition',
    title: 'Top 20 team nationally',
    organization: 'National AI & ML Hackathon · Vidya Vikas Institute x Google',
  },
  {
    id: 'quantum-valley-hackathon',
    type: 'Participation',
    title: 'Amaravati Quantum Valley Hackathon',
    organization: 'Selected participant · 2026',
  },
  {
    id: 'rescuegrid-publication',
    type: 'Research',
    title: 'RescueGrid: A Real-Time Bio-Logistics and Emergency Donor Matching System',
    organization: 'AIJFR Journal · 2026',
    detail:
      'Co-authored research on predictive analytics, emergency response, and healthcare logistics.',
  },
];

function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="section-padding recognitions-section"
      id="certifications"
    >
      <div className="section-container">
        <SectionHeading>Credentials & Recognition</SectionHeading>
        <p className="recognitions-intro">
          Selected certifications, competition participation, and research.
        </p>

        <div className="recognitions-grid">
          {recognitions.map((recognition, index) => (
            <motion.article
              aria-labelledby={`recognition-title-${recognition.id}`}
              className="recognition-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              key={recognition.id}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : (index % 2) * 0.08,
              }}
              viewport={{ once: true, margin: '-40px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="recognition-card__type">{recognition.type}</div>
              <h3 id={`recognition-title-${recognition.id}`}>
                {recognition.title}
              </h3>
              <p className="recognition-card__organization">
                {recognition.organization}
              </p>
              {recognition.detail && (
                <p className="recognition-card__detail">{recognition.detail}</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
