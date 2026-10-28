import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Meridian — Multi-Agent Research Intelligence API',
    description:
      '5-agent async pipeline that decomposes a research query into sub-questions, searches Wikipedia, arXiv, and DuckDuckGo in parallel, ranks passages by semantic similarity, detects source contradictions via a dedicated Critic agent, and streams a structured report live via SSE.',
    tech: ['Python', 'FastAPI', 'asyncio', 'Groq API', 'SQLAlchemy', 'NumPy'],
    github: 'https://github.com/Nityaa08/meridian',
  },
  {
    title: 'Smart Router — LLM Cost-Control Gateway',
    description:
      'OpenAI-compatible gateway that classifies each prompt with zero-cost heuristic rules and routes it to the cheapest capable model. Logs cost, latency and routing tier per request in PostgreSQL, serves repeated prompts from a Redis cache, and shows the savings on a live dashboard.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/Nityaa08/smart-router',
  },
  {
    title: 'Cross-Border Fee Calculation API',
    description:
      'REST API that calculates the true all-in customer price for cross-border B2B transactions across Latin America, factoring in FX rates, local tax rules, and payment provider fees. Built with a clean separation between fee config and calculation engine — no magic numbers anywhere.',
    tech: ['TypeScript', 'Node.js', 'Express'],
    github: 'https://github.com/Nityaa08/cross-border-fee-api',
  },
  {
    title: 'Transaction Pattern Explorer — Fraud Analytics Dashboard',
    description:
      'Frontend fraud analytics dashboard for risk analysts to visually identify suspicious transaction patterns. Features interactive filtering, time-series charts, anomaly detection, drill-down on flagged transactions, and a suspicious patterns panel with summary insights.',
    tech: ['Next.js', 'React', 'TypeScript'],
    github: 'https://github.com/Nityaa08/fraud-pattern-explorer',
  },
  {
    title: 'AI Image Caption Generator',
    description: 'Designed a CNN-LSTM model to generate captions from images using the Flickr8k dataset. Improved sequence quality and contextual accuracy by integrating a pretrained BLIP Model.',
    tech: ['Python', 'NLP', 'TensorFlow'],
    github: 'https://github.com/Nityaa08/image-captioning',
  },
  {
    title: 'IMDB Review Sentiment Classifier',
    description: 'Built a binary classifier using LSTM and Bi-LSTM on over 50,000 reviews. The model can make real-time predictions for text sentiment classification.',
    tech: ['Python', 'NLP', 'LSTM'],
    github: 'https://github.com/Nityaa08/IMDB-analysis',
  },
  {
    title: 'Employee Attrition Prediction',
    description: 'Developed a machine learning model to predict employee attrition using the IBM HR Analytics dataset. Enhanced prediction accuracy and interpretability by applying classification algorithms and SHAP-based feature importance analysis.',
    tech: ['Python', 'ML Models', 'Matplotlib'],
    github: 'https://github.com/Nityaa08/employee-attrition/blob/main/employee-attrition.ipynb',
  },
  {
    title: 'COVID-19 EDA',
    description: 'Analyzed over 100,000 COVID-19 records with Pandas and Seaborn. Identified socioeconomic correlations with case trends to provide data-driven insights.',
    tech: ['Python', 'Pandas', 'Seaborn'],
    github: 'https://github.com/Nityaa08/Covid-EDA',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Created and deployed this portfolio site with React, CSS Modules and Framer Motion animations. It showcases my experience, projects and contact links.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/Nityaa08/Personal-Website',
  },
];

const Projects = () => {
  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className={styles.projects}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCard}`}
            onClick={() => handleCardClick(project.github)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.techPill}>{tech}</span>
              ))}
            </div>
            <p className={styles.githubLink}>View on GitHub</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;