import { useState, useEffect } from 'react';
import logo from '../assets/logo (1).svg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#" className="logo-link">
            <img src={logo} alt="CloseCoding Logo" className="logo-image" />
            <span className="logo-text">CloseCoding</span>
          </a>
        </div>

        <div className="navbar-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile overlay backdrop */}
        {isMobileMenuOpen && (
          <div className="mobile-backdrop" onClick={closeMenu} />
        )}

        <div className={`navbar-links-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Mobile menu header */}
          <div className="mobile-menu-header">
            <div className="mobile-menu-logo">
              <img src={logo} alt="CloseCoding Logo" />
              <span>CloseCoding</span>
            </div>
            <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
              <span className="close-icon"></span>
            </button>
          </div>

          <ul className="navbar-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#clients" onClick={closeMenu}>Clients</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li><a href="#contact" onClick={closeMenu} className="contact-button">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
