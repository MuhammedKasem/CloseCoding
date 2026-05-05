import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import '../styles/Skills.css';

const skills = [
  {
    category: 'Responsive Design',
    description: 'Creating websites that work seamlessly across all devices and screen sizes.',
    icon: '📱',
  },
  {
    category: 'User Experience',
    description: 'Crafting intuitive interfaces that delight users and enhance engagement.',
    icon: '🎨',
  },
  {
    category: 'Performance Optimization',
    description: 'Building high-speed applications that load quickly and run smoothly.',
    icon: '⚡',
  },
  {
    category: 'Scalable Architecture',
    description: 'Designing systems that can grow with your business needs.',
    icon: '🏗️',
  },
  {
    category: 'Data Management',
    description: 'Organizing and securing your valuable business information effectively.',
    icon: '🗄️',
  },
  {
    category: 'Cloud Solutions',
    description: 'Leveraging cloud technologies for flexibility, reliability, and cost efficiency.',
    icon: '☁️',
  },
  {
    category: 'Security Implementation',
    description: 'Protecting your applications and data with industry best practices.',
    icon: '🔒',
  },
  {
    category: 'Agile Development',
    description: 'Delivering value quickly through iterative and collaborative processes.',
    icon: '🔄',
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <SectionTitle
          title="Our Technical Skills"
          subtitle="We have expertise in a wide range of technologies to deliver the best solutions for your business."
        />

        <div className="skills-container" ref={ref}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-category">{skill.category}</h3>
              </div>
              <p className="skill-description">{skill.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
