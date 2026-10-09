import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container text-center max-w-[600px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="section-title mb-2"
        >
          Let's build something together
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ color: 'var(--text-secondary)' }}
          className="mb-8"
        >
          Feel free to reach out if you're looking for a data scientist or just want to connect.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
          <motion.a 
            href="mailto:kummitiaryan@gmail.com" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 text-[20px] md:text-[22px] font-bold relative group"
            style={{ color: 'var(--text-primary)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            kummitiaryan@gmail.com
            <span className="absolute -bottom-1 left-0 w-full h-[2px] transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
          </motion.a>

          <motion.a 
            href="tel:+919100908338" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 text-[20px] md:text-[22px] font-bold relative group font-code"
            style={{ color: 'var(--text-primary)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +91 9100908338
            <span className="absolute -bottom-1 left-0 w-full h-[2px] transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
          </motion.a>
        </div>

        <motion.form 
          action="https://api.web3forms.com/submit" method="POST"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4 text-left mb-12"
        >
          <input type="hidden" name="access_key" value="189ac2b0-2328-4d8d-8fcb-94df7cc2bc4a" />
          <input type="hidden" name="subject" value="New Portfolio Contact Submission" />
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-code text-[13px]" style={{ color: 'var(--text-secondary)' }}>Name</label>
            <input type="text" id="name" name="name" required placeholder="Your name" className="p-3 border rounded-md outline-none transition-colors" 
                   style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                   onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                   onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-code text-[13px]" style={{ color: 'var(--text-secondary)' }}>Email</label>
            <input type="email" id="email" name="email" required placeholder="your.email@example.com" className="p-3 border rounded-md outline-none transition-colors" 
                   style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                   onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                   onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-code text-[13px]" style={{ color: 'var(--text-secondary)' }}>Message</label>
            <textarea id="message" name="message" required placeholder="How can I help you?" className="p-3 border rounded-md outline-none transition-colors min-h-[120px] resize-y" 
                   style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                   onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                   onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>
          <button type="submit" className="mt-4 px-8 py-3 rounded-md font-code text-sm uppercase tracking-wider transition-colors"
                  style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--bg-color)' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-hover)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--accent-primary)'}
          >
            Send Message
          </button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          <a href="https://linkedin.com/in/k-aryan-58a852283" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/Aryan-44" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="tel:+919100908338" className="transition-transform hover:-translate-y-1" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} aria-label="Phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
          <a href="mailto:kummitiaryan@gmail.com" className="transition-transform hover:-translate-y-1" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
