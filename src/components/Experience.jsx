import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "Coincent.ai (E-Cell IIT Madras)",
      role: "Data Science & AI Intern",
      dates: "Feb 2024 – Mar 2024",
      logo: "C",
      bullets: [
        "Developed Python-based analytics workflows for processing structured datasets and generating actionable insights.",
        "Built automated ETL pipelines that reduced manual preprocessing effort by 90%.",
        "Applied feature engineering and statistical analysis techniques to improve predictive model performance.",
        "Performed data cleaning, transformation, and model evaluation using Python-based data science tools (Pandas, NumPy)."
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="section-title"
        >
          Where I've Worked
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative pl-8 border-l-2"
          style={{ borderColor: 'var(--border-color)' }}
        >
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} className="relative mb-8 last:mb-0">
                {/* Timeline Dot */}
                <div 
                  className={`absolute w-4 h-4 rounded-full border-2 -left-[41px] top-6 transition-colors duration-300 z-10`}
                  style={{ 
                    backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-color)',
                    borderColor: 'var(--accent-primary)',
                    boxShadow: isActive ? '0 0 10px var(--accent-primary)' : 'none'
                  }}
                />

                {/* Header Card */}
                <div 
                  className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors"
                  style={{ 
                    backgroundColor: 'var(--card-color)', 
                    borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-color)' 
                  }}
                  onClick={() => toggleAccordion(index)}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl"
                    style={{ backgroundColor: 'var(--surface-color)', color: 'var(--accent-primary)' }}
                  >
                    {exp.logo}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="font-code text-[13px] hidden md:block" style={{ color: 'var(--text-muted)' }}>
                    {exp.dates}
                  </div>
                </div>

                {/* Expandable Body */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-4 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                        <ul className="list-square pl-6 flex flex-col gap-2">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
