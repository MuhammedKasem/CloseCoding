import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import '../styles/Contact.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqvoopj';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      if (submitStatus !== 'error') {
        setTimeout(() => setSubmitStatus('idle'), 6000);
      }
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <SectionTitle
          title="Get In Touch"
          subtitle="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div className="contact-container" ref={ref}>
          {/* Left — contact info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-card">
              <h3>Contact Information</h3>
              <p>Reach out directly or fill in the form and we'll be in touch shortly.</p>

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
                    <p>+1 (252) 469-6144</p>
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

              <div className="contact-availability">
                <span className="availability-dot"></span>
                <span>Available for new projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7 }}
          >
            {submitStatus === 'success' ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="business">Business / Company Name</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      placeholder="Your Business"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed <span className="required">*</span></label>
                    <select id="service" name="service" required>
                      <option value="" disabled selected>Select a service...</option>
                      <option value="Custom Website">Custom Website</option>
                      <option value="Automation">Business Automation</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Not Sure">Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget</label>
                    <select id="budget" name="budget">
                      <option value="" disabled selected>Select a range...</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                      <option value="$3,000 – $7,500">$3,000 – $7,500</option>
                      <option value="$7,500+">$7,500+</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group form-group--full">
                  <label htmlFor="message">Project Description <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project — what problem are you trying to solve, what do you need built, and any relevant details..."
                    required
                  />
                </div>

                {submitStatus === 'error' && (
                  <p className="error-message">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="button btn-primary contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
