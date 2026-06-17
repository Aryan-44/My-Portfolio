import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const topSkills = [
    { name: "Python", value: "90%" },
    { name: "Generative AI & LLMs", value: "85%" },
    { name: "Machine Learning", value: "85%" },
    { name: "RAG & Vector Embeddings", value: "80%" },
    { name: "SQL", value: "80%" }
  ];

  const categories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "C", "JavaScript"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Generative AI", "RAG", "LLMs", "Prompt Engineering", "NLP", "Machine Learning", "Semantic Search", "Predictive Analytics"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["LangChain", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Streamlit"]
    },
    {
      title: "Databases & Tools",
      skills: ["FAISS", "Firebase Firestore", "FastAPI", "REST APIs", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="section-title"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Top Skills Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Core Proficiency</h3>
            <div className="flex flex-col gap-6">
              {topSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between font-code text-[13px] mb-2" style={{ color: 'var(--text-secondary)' }}>
                    <span>{skill.name}</span>
                    <span>{skill.value}</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--surface-color)' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.value }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-full"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-8"
          >
            {categories.map((cat, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 border rounded-md font-code text-[13px] transition-colors"
                      style={{ 
                        backgroundColor: 'var(--surface-color)', 
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-secondary)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--accent-primary)';
                        e.target.style.color = 'var(--accent-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--border-color)';
                        e.target.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
