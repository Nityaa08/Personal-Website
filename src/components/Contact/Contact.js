import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

const contactLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nityashree-s-b34b1b291', icon: faLinkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/i_nitya08shree?utm_source=qr&igsh=Mzk0dDZoaWJqem9l', icon: faInstagram },
  { name: 'Email', url: 'mailto:nitya08shree@gmail.com', icon: faEnvelope },
  { name: 'Github', url: 'https://github.com/Nityaa08', icon: faGithub },
];

const Contact = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const popupRef = useRef(null);
  const emailButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // If click is NOT inside popup AND NOT on email button, close popup
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        emailButtonRef.current &&
        !emailButtonRef.current.contains(e.target)
      ) {
        setShowEmailPopup(false);
      }
    };

    if (showEmailPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showEmailPopup]);

  const handleEmailClick = (e) => {
    e.preventDefault();
    // toggle popup
    setShowEmailPopup((prev) => !prev);
  };

  return (
    <section id="contact" className={styles.contact}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        I am always open to new opportunities and collaborations. Feel free to reach out.
      </motion.p>
      <div className={styles.contactContainer}>
        {contactLinks.map((link, index) => {
          if (link.name === 'Email') {
            return (
              <motion.a
                key={index}
                href={link.url}
                onClick={handleEmailClick}
                ref={emailButtonRef} // <-- reference the email button
                className={styles.contactCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ position: 'relative' }}
              >
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={link.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3>{link.name}</h3>
                </div>
                {showEmailPopup && (
                  <div
                    ref={popupRef}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 10px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#0b0b0d',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      whiteSpace: 'nowrap',
                      zIndex: 10,
                      backgroundImage: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    nitya08shree@gmail.com
                  </div>
                )}
              </motion.a>
            );
          }

          return (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.contactIcon}>
                <FontAwesomeIcon icon={link.icon} />
              </div>
              <div className={styles.contactDetails}>
                <h3>{link.name}</h3>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
