import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import '../styles/Clients.css';

const clients = [
  {
    id: 1,
    name: 'Carolina Quality Fencing',
    domain: 'CarolinaQualityFencing.com',
    url: 'https://carolinaqualityfencing.com',
    description: 'A locally owned fencing company based in Rocky Mount, NC serving Eastern North Carolina. We built them a professional site showcasing their full range of services — chain link, wood, vinyl, ornamental aluminum, and custom fabrication — with a free estimate CTA that drives real leads.',
    icon: '🏗️',
    tags: ['Wood & Vinyl Fencing', 'Chain Link', 'Free Estimates'],
    rating: '4.7★ on Birdeye',
  },
  {
    id: 2,
    name: 'ENC Dumpsters & Rentals',
    domain: 'encrentals.us',
    url: 'https://encrentals.us',
    description: 'A family-owned dumpster rental company serving Rocky Mount and surrounding areas within a 50-mile radius. We built a clean, easy-to-navigate site with online quote requests and same-day delivery info — helping them stand out in a competitive local market.',
    icon: '🚛',
    tags: ['Dumpster Rentals', 'Same-Day Delivery', 'No Hidden Fees'],
    rating: 'Rocky Mount, NC',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const Clients = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="clients" className="clients-section section">
      <div className="container">
        <SectionTitle
          title="Businesses We've Served"
          subtitle="Real websites, real results. Here are two local businesses we've helped establish a professional online presence."
        />

        <motion.div
          ref={ref}
          className="clients-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {clients.map((client) => (
            <motion.div key={client.id} className="client-card" variants={itemVariants}>
              {/* Browser preview mockup */}
              <div className="client-browser">
                <div className="client-browser-bar">
                  <div className="client-browser-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="client-browser-url">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    {client.domain}
                  </div>
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="client-browser-open" aria-label="Open site">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <div className="client-browser-viewport">
                  <iframe
                    src={client.url}
                    title={`${client.name} website preview`}
                    loading="lazy"
                    scrolling="no"
                  />
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="client-browser-overlay"
                    aria-label={`Visit ${client.name}`}
                  >
                    <span className="client-visit-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Click to Visit Live Site
                    </span>
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="client-body">
                <div className="client-header">
                  <span className="client-icon">{client.icon}</span>
                  <div>
                    <h3 className="client-name">{client.name}</h3>
                    <span className="client-meta">{client.rating}</span>
                  </div>
                </div>
                <p className="client-description">{client.description}</p>
                <div className="client-tags">
                  {client.tags.map((tag) => (
                    <span key={tag} className="client-tag">{tag}</span>
                  ))}
                </div>
                <div className="client-footer">
                  <span className="client-badge">Live & Active</span>
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="client-link">
                    {client.domain}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="clients-note">
          Ready to be next? <a href="#contact">Let's talk about your project.</a>
        </p>
      </div>
    </section>
  );
};

export default Clients;
