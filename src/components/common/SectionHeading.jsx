import { motion, useReducedMotion } from 'framer-motion';

function SectionHeading({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.h2
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`section-title ${className}`.trim()}
    >
      {children}
    </motion.h2>
  );
}

export default SectionHeading;
