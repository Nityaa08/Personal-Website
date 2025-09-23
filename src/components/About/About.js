import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import photo from './headshot.png';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className={styles.aboutContent}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={photo}
            alt="Your professional headshot"
            className={styles.profileImage}
          />
        </motion.div>

        <motion.div
          className={`${styles.textContainer} ${styles.infoCard}`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <p>
            I’m Nityashree, a final-year AI & Data Science student who is passionate about building impactful applications. With experience in web development, and a strong foundation in machine learning and data analysis, I love creating solutions that solve real-world problems. Whether it’s developing predictive models or crafting seamless user experiences, I’m always exploring new ways to combine my skills and make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
