import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import '../styles/About.css';
import logo from '../assets/logo (1).svg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <SectionTitle
          title="About CloseCoding"
          subtitle="We're a team of passionate developers dedicated to creating exceptional digital experiences."
        />

        <div className="about-content" ref={ref}>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="logo-container">
              <img src={logo} alt="CloseCoding Logo" className="about-logo" />
              <div className="logo-glow"></div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Our Mission</h3>
            <p>
              At CloseCoding, we believe that technology should work for you, not against you. 
              Our mission is to create custom software solutions that solve real business problems 
              and help our clients achieve their goals.
            </p>

            <h3>Our Approach</h3>
            <p>
              We take a collaborative approach to every project, working closely with our clients 
              to understand their unique needs and challenges. We combine technical expertise with 
              creative problem-solving to deliver solutions that exceed expectations.
            </p>

            <h3>Why Choose Us</h3>
            <ul className="about-list">
              <li>
                <span className="list-icon">✓</span>
                <span>Tailored solutions designed specifically for your business</span>
              </li>
              <li>
                <span className="list-icon">✓</span>
                <span>Experienced team with diverse technical expertise</span>
              </li>
              <li>
                <span className="list-icon">✓</span>
                <span>Transparent communication throughout the project</span>
              </li>
              <li>
                <span className="list-icon">✓</span>
                <span>Ongoing support and maintenance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
