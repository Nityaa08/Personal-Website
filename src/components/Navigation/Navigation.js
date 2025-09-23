import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Contributions', href: '#contributions' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const currentScrollPos = window.pageYOffset;
      sections.forEach(section => {
        if (section) {
          const { offsetTop, offsetHeight, id } = section;
          if (currentScrollPos >= offsetTop - 100 && currentScrollPos < offsetTop + offsetHeight - 100) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Offset for fixed navbar height
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Nityashree S</div>

      {/* Hamburger button */}
      <div
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setIsMenuOpen(!isMenuOpen); }}
      >
        <div className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ''}`}></div>
      </div>

      {/* Navigation links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={activeSection === link.href.substring(1) ? styles.active : ''}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
