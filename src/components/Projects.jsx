import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Equity Research Dashboard",
      desc: "AI-Powered Financial Intelligence Platform using Generative AI, RAG architecture, and semantic search workflows for context-aware financial news question answering.",
      tags: ["LangChain", "Gemini", "FAISS", "Streamlit", "Vector Embeddings"],
      github: "#"
    },
    {
      title: "Job Description Simplifier",
      desc: "AI-Powered Recruitment Intelligence Tool leveraging Llama 3.3 70B and prompt engineering to automatically scrape, clean, and simplify complex job postings.",
      tags: ["Llama 3.3 70B", "Prompt Engineering", "Web Scraping", "Python"],
      github: "#"
    },
    {
      title: "Skill-Bridge",
      desc: "AI-Powered Team Formation Platform using NLP and semantic search to intelligently match candidates based on unstructured resumes.",
      tags: ["Python", "NLP", "Vector Embeddings", "FastAPI"],
      github: "#"
    },
    {
      title: "RescueGrid",
      desc: "Predictive Emergency Donor Matching System that forecasts donor demand using multi-source healthcare datasets and statistical modeling.",
      tags: ["Predictive Analytics", "Data Cleaning", "Statistical Modeling"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="section-title"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col p-8 border rounded-lg transition-all duration-300 hover:-translate-y-2 relative"
              style={{ 
                backgroundColor: 'var(--card-color)', 
                borderColor: 'var(--border-color)',
                borderLeft: '4px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                <a href={project.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--accent-primary)]" style={{ color: 'var(--text-muted)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
              <p className="flex-grow text-[15px] mb-6" style={{ color: 'var(--text-secondary)' }}>
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="font-code text-[12px]" style={{ color: 'var(--text-muted)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
