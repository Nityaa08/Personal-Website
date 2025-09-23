import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const words = ['DEVELOP', 'DEBUG', 'DESIGN'];

const Home = () => {
  return (
    <section
      id="home"
      className={styles.home}
      aria-label="Hero section with Develop Debug Design and tagline"
    >
      <motion.div
        className={styles.heroWords}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {words.map((word) => (
          <h1 key={word} className={styles.heroWord}>
            <span className={styles.wordText}>{word}</span>
            <span className={styles.lightSweep}></span>
          </h1>
        ))}
      </motion.div>

      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Where Algorithm Meets Art.
      </motion.p>
    </section>
  );
};

export default Home;
