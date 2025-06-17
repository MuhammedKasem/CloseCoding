import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import '../styles/Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("DI4pjncvJ7zEvp6g4");
  }, []);
  
  // Clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <SectionTitle
          title="Get In Touch"
          subtitle="Ready to discuss your project? Contact us today and let's build something amazing together."
        />

        <div className="contact-container" ref={ref}>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-card">
              <h3>Contact Information</h3>
              <p>Fill out the form or contact us directly using the information below.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>closecodingsolutions@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+1 (252) 740-5674</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Rocky Mount, NC</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              setSubmitStatus('idle');
              
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              
              try {
                // Send email using EmailJS
                await emailjs.send(
                  "service_n7m2pvt", 
                  "template_iy86lhu",
                  {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                  }
                );
                
                setSubmitStatus('success');
                setSuccessMessage('Thanks for your message! We\'ll get back to you shortly.');
                form.reset();
              } catch (error) {
                console.error('Error sending email:', error);
                setSubmitStatus('error');
                // Don't reset the form on error so the user can try again without re-entering data
              } finally {
                setIsSubmitting(false);
              }
            }}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Your message" required></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="success-message">
                  {successMessage}
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="error-message">
                  There was an error sending your message. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      
      <div className="contact-pattern"></div>
    </section>
  );
};

export default Contact;
