import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created     Crafted     Curated 
        &copy; 
        {new Date().getFullYear()} Nityashree S
      </p>
    </footer>
  );
};

export default Footer;
