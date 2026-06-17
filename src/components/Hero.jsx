import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = ["AI/ML Engineer.", "Data Scientist.", "Generative AI Developer."];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === roles[roleIndex].length) {
      typeSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typeSpeed);
      return;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typeSpeed = 500;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCharIndex(prev => prev - 1);
        setText(roles[roleIndex].substring(0, charIndex - 1));
      } else {
        setCharIndex(prev => prev + 1);
        setText(roles[roleIndex].substring(0, charIndex + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `linear-gradient(to right, var(--border-color) 1px, transparent 1px), linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }}
      ></div>

      {/* Radial Gradient */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] z-0 opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)' }}
      ></div>

      <div className="section-container relative z-10 w-full flex flex-col gap-6 pt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-code text-sm uppercase tracking-widest"
          style={{ color: 'var(--text-secondary)' }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-bold tracking-tight"
          style={{ fontSize: 'var(--fs-hero)', color: 'var(--text-primary)', lineHeight: '1.1' }}
        >
          Kummiti Naga<br/>Aryan Kumar Reddy.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center font-semibold"
          style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-secondary)' }}
        >
          I am a <span className="ml-3" style={{ color: 'var(--accent-primary)' }}>{text}</span>
          <span className="inline-block w-1 h-10 ml-1 animate-pulse" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mt-4"
          style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)' }}
        >
          Aspiring Data Scientist and Machine Learning Engineer passionate about transforming complex datasets into actionable insights through predictive modeling and AI-powered solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 mt-8"
        >
          <a href="#projects" className="px-8 py-4 border rounded-md font-code text-sm uppercase tracking-wider transition-all"
             style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--bg-color)', borderColor: 'var(--accent-primary)' }}
          >
            View my work
          </a>
          <a href="#" className="px-8 py-4 border rounded-md font-code text-sm uppercase tracking-wider transition-all hover:bg-white/5"
             style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <style jsx="true">{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
