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
            <p className="text-[18px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
              I specialize in building Generative AI applications, predictive analytics, and data-driven solutions. With hands-on experience in machine learning workflows, large language models (LLMs), RAG architecture, and vector databases, I build intelligent systems that transform unstructured data into actionable insights.
            </p>
            
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 border rounded-full font-code text-[13px]"
                 style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', color: 'var(--accent-primary)' }}>
              <span className="w-2 h-2 rounded-full relative">
                <span className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
                <span className="relative block w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
              </span>
              B.Tech CSE at SV University (CGPA 8.5)
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
              <div className="font-code text-[13px] uppercase" style={{ color: 'var(--text-muted)' }}>Years Learning</div>
            </div>
            <div className="p-6 border rounded-lg text-center transition-all hover:-translate-y-1"
                 style={{ backgroundColor: 'var(--card-color)', borderColor: 'var(--border-color)' }}>
              <div className="text-[40px] font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>5+</div>
              <div className="font-code text-[13px] uppercase" style={{ color: 'var(--text-muted)' }}>Projects Built</div>
            </div>
            <div className="p-6 border rounded-lg text-center transition-all hover:-translate-y-1"
                 style={{ backgroundColor: 'var(--card-color)', borderColor: 'var(--border-color)' }}>
              <div className="text-[40px] font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>1</div>
              <div className="font-code text-[13px] uppercase" style={{ color: 'var(--text-muted)' }}>Publication</div>
            </div>
            <div className="p-6 border rounded-lg text-center transition-all hover:-translate-y-1"
                 style={{ backgroundColor: 'var(--card-color)', borderColor: 'var(--border-color)' }}>
              <div className="text-[40px] font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>20</div>
              <div className="font-code text-[13px] uppercase" style={{ color: 'var(--text-muted)' }}>Google Hackathon Top</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
