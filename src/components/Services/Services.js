import React from 'react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';
import daksh from './daksh.jpeg';
import ks from './ks.png';
import azure from './azure.jpeg';
import pwc from './pwc.png';
import yuno from './yuno.png';

const contributions = [
  {
    title: 'AI Engineer — Yuno (June 2026 – present)',
    description:
      'Build and run AI agents for payments on Yuno’s agent platform: tool connectors, guardrails, evals and LLM cost. I ship across Go, TypeScript and Python services, working with AI coding agents.',
    icon: yuno,
  },
  {
    title: 'Payments Analyst Intern — Yuno (Dec 2025 – June 2026)',
    description:
      'Managed the payments database and worked with cross-functional teams on payment operations.',
    icon: yuno,
  },
  {
    title: 'Technotainment Club',
    description: 'Led logistics for multiple technical events with 500+ participants and managed the team to ensure successful execution.',
    icon: daksh
  },
  {
    title: 'TechnoInformals Club',
    description: 'Coordinated cultural events, significantly increasing participation through effective planning and promotion.',
    icon: ks
  },
  {
    title: 'AI Azure Virtual Internship',
    description: 'Completed a virtual internship with Edunet Foundation (Microsoft initiative) in collaboration with AICTE, gaining practical experience in AI applications.',
    icon: azure
  },
  {
    title: 'PwC Data Analytics and AI Launchpad',
    description: 'Participated in the PwC Launchpad Program, focusing on data analytics and AI to solve real-world business challenges.',
    icon: pwc
  },
];

const Services = () => {
  return (
    <section id="contributions" className={styles.services}>
      <motion.h2 className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience & Involvement
      </motion.h2>
      <div className={styles.cardsContainer}>
        {contributions.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={styles.icon}>
              <img src={item.icon} alt={item.title} className={styles.clubLogo} />
            </div>
            <div className={styles.cardContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
