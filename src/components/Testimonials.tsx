import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import '../styles/Testimonials.css';

// Import company logo
import companyLogo from '../assets/logo (1).svg';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  logo: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechInnovate',
    logo: companyLogo,
    quote: 'CloseCoding transformed our digital presence with a stunning website and intuitive mobile app. Their team was professional, responsive, and delivered beyond our expectations.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CEO',
    company: 'GrowthSolutions',
    logo: companyLogo,
    quote: 'The custom software solution developed by CloseCoding has streamlined our operations and increased efficiency by 40%. Their expertise and attention to detail are unmatched.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director',
    company: 'BrandForward',
    logo: companyLogo,
    quote: 'Working with CloseCoding was a game-changer for our business. Their team took the time to understand our needs and delivered a solution that perfectly aligned with our vision.',
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'Operations Manager',
    company: 'LogisticsPro',
    logo: companyLogo,
    quote: 'The automation system built by CloseCoding has saved us countless hours and reduced errors significantly. Their technical expertise and business understanding make them an ideal partner.',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
        />

        <div className="testimonials-container" ref={ref}>
          <motion.div 
            className="testimonials-carousel"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="testimonial-controls">
              <button 
                className="testimonial-arrow prev-arrow" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button 
                className="testimonial-arrow next-arrow" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="testimonials-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="testimonial-quote">
                      <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.9999 14.3999C11.9999 16.3941 10.3941 17.9999 8.3999 17.9999C6.40571 17.9999 4.7999 16.3941 4.7999 14.3999C4.7999 12.4057 6.40571 10.7999 8.3999 10.7999V8.3999C5.08163 8.3999 2.3999 11.0816 2.3999 14.3999C2.3999 17.7182 5.08163 20.3999 8.3999 20.3999C11.7182 20.3999 14.3999 17.7182 14.3999 14.3999H11.9999ZM21.5999 14.3999C21.5999 16.3941 19.9941 17.9999 17.9999 17.9999C16.0057 17.9999 14.3999 16.3941 14.3999 14.3999C14.3999 12.4057 16.0057 10.7999 17.9999 10.7999V8.3999C14.6816 8.3999 11.9999 11.0816 11.9999 14.3999C11.9999 17.7182 14.6816 20.3999 17.9999 20.3999C21.3182 20.3999 23.9999 17.7182 23.9999 14.3999H21.5999Z"></path>
                      </svg>
                      <p>{testimonial.quote}</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="testimonial-author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.position}, {testimonial.company}</p>
                      </div>
                      <div className="testimonial-company-logo">
                        <img src={testimonial.logo} alt={`${testimonial.company} logo`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
