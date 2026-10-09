import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-[17px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
              AI/ML Engineer with hands-on experience in Python, machine learning, data preprocessing, exploratory data analysis, feature engineering, and model evaluation. Experienced in building Generative AI applications using LLMs, RAG, vector embeddings, and semantic search, along with AI workflow automation using n8n. Strong foundation in developing end-to-end data and AI pipelines with a focus on practical, real-world applications.
            </p>
            
            <div className="mt-6 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full font-code text-[13px] w-fit"
                   style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', color: 'var(--accent-primary)' }}>
                <span className="w-2 h-2 rounded-full relative">
                  <span className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
                  <span className="relative block w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
                </span>
                B.Tech in CSE — Sri Venkateswara University, Tirupati (2022–2026) • CGPA: 8.5/10
              </div>
              <p className="font-code text-[12px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Relevant Coursework:</span> Machine Learning, Deep Learning, NLP, Data Structures & Algorithms, Statistics, Linear Algebra, DBMS
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 border rounded-lg text-center transition-all hover:-translate-y-1"
                 style={{ backgroundColor: 'var(--card-color)', borderColor: 'var(--border-color)' }}>
              <div className="text-[40px] font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>2+</div>
              <div className="font-code text-[13px] uppercase" style={{ color: 'var(--text-muted)' }}>Years Experience</div>
            </div>
            <div className="p-6 border rounded-lg text-center transition-all hover:-translate-y-1"
                 style={{ backgroundColor: 'var(--card-color)', borderColor: 'var(--border-color)' }}>
              <div className="text-[40px] font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>9+</div>
              <div className="font-code text-[13px] uppercase" style={{ color: 'var(--text-muted)' }}>Projects Built</div>
            </div>
            <div className="p-6 border rounded-lg text-center transition-all hover:-translate-y-1"
                 style={{ backgroundColor: 'var(--card-color)', borderColor: 'var(--border-color)' }}>
              <div className="text-[40px] font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>1</div>
              <div className="font-code text-[13px] uppercase" style={{ color: 'var(--text-muted)' }}>AIJFR Publication</div>
            </div>
            <div className="p-6 border rounded-lg text-center transition-all hover:-translate-y-1"
                 style={{ backgroundColor: 'var(--card-color)', borderColor: 'var(--border-color)' }}>
              <div className="text-[40px] font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>Top 20</div>
              <div className="font-code text-[13px] uppercase" style={{ color: 'var(--text-muted)' }}>Vidya Vikas x Google</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
