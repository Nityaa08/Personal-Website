// src/components/Education/Education.js

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';

const timelineEvents = [
  {
    year: '2022-2026',
    title: 'B.Tech in Computer Science (AI & DS)',
    institution: 'SASTRA University, Tanjore',
    details:
      'Final year student with a strong foundation in software development, machine learning, and web development. Specializing in AI & Data Science.',
  },
  {
    year: 'Graduated 2022',
    title: 'CBSE Class XII',
    institution: 'Convent of Jesus and Mary, New Delhi',
    details: 'Completed senior secondary education with a focus on Computer Science.',
  },
];

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className={styles.timeline}>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Connector line instead of a dot */}
            <div className={styles.timelineConnector}></div>

            <div className={styles.timelineContent}>
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p className={styles.institution}>{event.institution}</p>
              <p className={styles.details}>{event.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
