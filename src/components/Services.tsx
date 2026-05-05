import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import '../styles/Services.css';

const services = [
  {
    id: 1,
    title: 'Custom Websites',
    description: 'We build fast, modern websites that look great on every device and are designed to turn visitors into paying customers.',
    icon: '🌐',
    number: '01',
    features: ['Mobile-first design', 'SEO optimized', 'Built to convert'],
  },
  {
    id: 2,
    title: 'Automations',
    description: 'Stop doing the same tasks twice. We automate your repetitive workflows so you can focus on what actually grows your business.',
    icon: '⚙️',
    number: '02',
    features: ['API integrations', 'Workflow automation', 'Saves hours weekly'],
  },
  {
    id: 3,
    title: 'Custom Software',
    description: 'Off-the-shelf tools not cutting it? We build software around exactly how your business operates — you own it entirely.',
    icon: '💻',
    number: '03',
    features: ['Scalable architecture', 'Built for your team', 'Full ownership'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = (i: number) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  },
});

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <SectionTitle
          title="Our Services"
          subtitle="End-to-end digital solutions for businesses that want to grow — not just keep up."
        />

        <motion.div
          ref={ref}
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className={`service-card service-card--${i + 1}`}
              variants={itemVariants(i)}
            >
              <span className="service-number">{service.number}</span>
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
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
