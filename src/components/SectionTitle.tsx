import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/SectionTitle.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`section-title ${centered ? 'text-center' : ''}`}
    >
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className="title-underline"
        initial={{ width: 0 }}
        animate={inView ? { width: centered ? '80px' : '60px' } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </div>
  );
};

export default SectionTitle;
