import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  'AI Agents', 'LLMs', 'Tool Calling & MCP', 'Evals', 'Python', 'FastAPI', 'SQL', 'PostgreSQL', 'Redis', 'Docker', 'JavaScript', 'React', 'Machine Learning', 'NLP', 'Data Analysis', 'Java', 'C++'
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <motion.h2 className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
