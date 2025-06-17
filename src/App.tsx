import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PopupWidget from './components/PopupWidget';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId as string);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
    
    // Cleanup event listeners on unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <PopupWidget />
    </div>
  );
}

export default App;
