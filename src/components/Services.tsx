import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import '../styles/Services.css';

const services = [
  {
    id: 1,
    title: 'Custom Websites',
    description: 'Responsive, modern websites tailored to your brand and business needs.',
    icon: '🌐',
    delay: 0,
  },
  {
    id: 2,
    title: 'Automations',
    description: 'Streamline your business processes with custom automation solutions.',
    icon: '⚙️',
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Custom Software',
    description: 'Bespoke software solutions designed to solve your specific business challenges.',
    icon: '💻',
    delay: 0.4,
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <SectionTitle
          title="Our Services"
          subtitle="We provide end-to-end solutions for businesses of all sizes, from startups to enterprises."
        />

        <motion.div
          ref={ref}
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="services-cta">
          <p>Need a custom solution for your business?</p>
          <a href="#contact" className="button btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
