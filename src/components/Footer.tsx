import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Footer.css';
import logo from '../assets/logo (1).svg';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content" ref={ref}>
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="CloseCoding Logo" />
            <p className="footer-tagline">Building digital solutions that work for you.</p>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="footer-links-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Custom Websites</a></li>
                <li><a href="#services">Automations</a></li>
                <li><a href="#services">Custom Software</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="#contact">Email Us</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="footer-copyright">
            &copy; {currentYear} CloseCoding. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
