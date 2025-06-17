import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/PopupWidget.css';

const PopupWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    // Show the widget after 3 seconds
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    // For now, just close the widget
    setIsOpen(false);
    
    // Show a success message (in a real app)
    alert('Thanks for your message! We\'ll get back to you soon.');
  };

  return (
    <AnimatePresence>
      {showWidget && (
        <div className="popup-widget-container">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="popup-widget-content"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="popup-widget-header">
                  <h3>Quick Contact</h3>
                  <button 
                    className="popup-widget-close"
                    onClick={toggleWidget}
                    aria-label="Close contact form"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="popup-widget-body">
                  <p>Have a quick question? Send us a message and we'll get back to you shortly.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="popup-form-group">
                      <label htmlFor="popup-name">Name</label>
                      <input type="text" id="popup-name" placeholder="Your name" required />
                    </div>
                    <div className="popup-form-group">
                      <label htmlFor="popup-email">Email</label>
                      <input type="email" id="popup-email" placeholder="Your email" required />
                    </div>
                    <div className="popup-form-group">
                      <label htmlFor="popup-message">Message</label>
                      <textarea id="popup-message" rows={3} placeholder="Your message" required></textarea>
                    </div>
                    <button type="submit" className="popup-submit-button">Send Message</button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.button
            className={`popup-widget-button ${isOpen ? 'active' : ''}`}
            onClick={toggleWidget}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact us"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupWidget;
