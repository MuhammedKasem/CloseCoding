import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import '../styles/Faq.css';

const faqs = [
  {
    id: 1,
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all sizes, from startups to large enterprises, across various industries. Our solutions are tailored to meet the specific needs of each client, regardless of their size or sector.',
  },
  {
    id: 2,
    question: 'How long does it typically take to complete a project?',
    answer: 'Project timelines vary depending on the scope and complexity of the work. A simple website might take 2-4 weeks, while a complex custom software solution could take several months. During our initial consultation, we\'ll provide you with a detailed timeline based on your specific requirements.',
  },
  {
    id: 3,
    question: 'Do you provide ongoing support after the project is completed?',
    answer: 'Yes, we offer ongoing support and maintenance for all our projects. We can create a custom support plan that meets your needs, whether that\'s regular updates, bug fixes, or feature enhancements.',
  },
  {
    id: 4,
    question: 'How do you handle project pricing?',
    answer: 'We offer transparent pricing based on the scope of work. Depending on the project, we may work on a fixed-price basis or an hourly rate. We\'ll provide a detailed quote after understanding your requirements during the initial consultation.',
  },
  {
    id: 5,
    question: 'What is your development process like?',
    answer: 'We follow an agile development methodology, which allows for flexibility and collaboration throughout the project. Our process typically includes discovery, planning, design, development, testing, deployment, and ongoing support. We keep you involved at every stage to ensure the final product meets your expectations.',
  },
  {
    id: 6,
    question: 'Can you work with our existing systems and technologies?',
    answer: 'Yes, we have experience integrating with a wide range of existing systems and technologies. We can work with your current infrastructure to develop solutions that complement and enhance your existing setup.',
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section section">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and process."
        />

        <motion.div 
          className="faq-container"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id}
              className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3>{faq.question}</h3>
                <div className={`faq-icon ${activeId === faq.id ? 'active' : ''}`}>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <div className="faq-cta">
          <p>Don't see your question here?</p>
          <a href="#contact" className="button btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
