import { useState, useEffect } from 'react';
import logo from '../assets/logo (1).svg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#" className="logo-link">
            <img src={logo} alt="CloseCoding Logo" className="logo-image" />
            <span className="logo-text">CloseCoding</span>
          </a>
        </div>

        <div className="navbar-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="contact-button">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
