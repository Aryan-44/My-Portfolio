import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Automated Weather Alert Agent",
      desc: "Built an automated weather monitoring workflow in n8n that retrieves real-time weather data from Open-Meteo and processes it using a Groq-powered AI agent. Implemented conditional weather-alert logic and automated daily email notifications for hands-free monitoring.",
      tags: ["n8n", "Open-Meteo", "Groq", "Gmail", "Workflow Automation"],
      github: "https://github.com/Aryan-44"
    },
    {
      title: "Multi-Document RAG Assistant",
      desc: "Developed a multi-document RAG system supporting PDF, DOCX, CSV, and XLSX files with document loading, chunking, embeddings, vector indexing, and semantic retrieval. Integrated Groq-hosted LLMs to generate grounded, context-aware responses.",
      tags: ["Python", "LangChain", "FAISS", "Groq API", "RAG Pipeline"],
      github: "https://github.com/Aryan-44"
    },
    {
      title: "Student Performance EDA & Preprocessing",
      desc: "Performed end-to-end exploratory data analysis on a student performance dataset, including data cleaning, missing-value handling, outlier detection, distribution & correlation analysis, and feature scaling for analysis-ready data.",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
      github: "https://github.com/Aryan-44"
    },
    {
      title: "RescueGrid",
      desc: "Predictive emergency donor matching and bio-logistics system published in AIJFR Journal (2026). Forecasts donor demand and optimizes emergency response using multi-source healthcare datasets and statistical modeling.",
      tags: ["Python", "Predictive Analytics", "Statistical Modeling", "Healthcare AI"],
      github: "https://github.com/Aryan-44"
    },
    {
      title: "Equity Research Dashboard",
      desc: "AI-Powered Financial Intelligence Platform using Generative AI, RAG architecture, and semantic search workflows for context-aware financial news question answering.",
      tags: ["LangChain", "Gemini", "FAISS", "Streamlit", "Vector Embeddings"],
      github: "https://github.com/Aryan-44"
    },
    {
      title: "Job Description Simplifier",
      desc: "AI-Powered Recruitment Intelligence Tool leveraging Llama 3.3 70B and prompt engineering to automatically scrape, clean, and simplify complex job postings.",
      tags: ["Llama 3.3 70B", "Prompt Engineering", "Web Scraping", "Python"],
      github: "https://github.com/Aryan-44"
    },
    {
      title: "JobPilot — Auto Job Application Agent",
      desc: "Autonomous job-search and application platform featuring a weighted scoring engine, AI-driven cover letter generation, Playwright browser automation, FastAPI backend, and Streamlit dashboard.",
      tags: ["FastAPI", "Streamlit", "LLM Scoring", "Playwright", "SQLite"],
      github: "https://github.com/Aryan-44"
    },
    {
      title: "Text-to-SQL GenAI Query Assistant",
      desc: "Intelligent database querying system powered by LangChain, Gemini, and ChromaDB vector store. Employs semantic similarity few-shot prompt selection to convert natural language queries into accurate SQL executions.",
      tags: ["LangChain", "Gemini", "ChromaDB", "MySQL", "Few-Shot Prompting"],
      github: "https://github.com/Aryan-44"
    },
    {
      title: "Skill-Bridge",
      desc: "AI-Powered Team Formation Platform using NLP and semantic search to intelligently match candidates based on unstructured resumes.",
      tags: ["Python", "NLP", "Vector Embeddings", "FastAPI"],
      github: "https://github.com/Aryan-44"
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
