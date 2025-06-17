import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesContainerRef.current) return;
    
    const container = particlesContainerRef.current;
    const particleCount = 50;
    
    // Clear any existing particles
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 5px and 20px
      const size = Math.random() * 15 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      
      // Random animation duration
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 10}s`;
      
      container.appendChild(particle);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="particles-container" ref={particlesContainerRef}></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Custom Software Solutions for Your Business
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build custom websites, automations, and software solutions tailored to your specific needs
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#services" className="button btn-primary btn-large">Our Services</a>
            <a href="#contact" className="button btn-outline btn-large">Get in Touch</a>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-title">CloseCoding.tsx</div>
            </div>
            <div className="code-body">
              <pre>
                <code>
{`import { Solution } from 'closecoding';

const CustomSoftware = () => {
  const services = [
    'Web Development',
    'Automation',
    'Custom Software'
  ];

  return (
    <Solution
      client="YourBusiness"
      deliverables={services}
      quality="Premium"
      support="24/7"
    />
  );
};

export default CustomSoftware;`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
