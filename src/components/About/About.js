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
            I’m Nityashree, an AI Engineer on the AI Team at Yuno, a payments company. I build AI agents that act on real systems: the tools and connectors they call, the guardrails around them, and the evals that tell us whether a model change is worth it. I started at Yuno as a Payments Analyst Intern, so I bring payments knowledge to every agent I build. I studied Computer Science with a specialization in AI & Data Science at SASTRA University.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
