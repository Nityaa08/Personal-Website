import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Invoice Agent — Accounts-Payable Agent with Human Review',
    description:
      'LangGraph agent that reads an invoice (PDF, photo or scan), extracts it into a strict schema, matches the vendor and runs 13 validation rules in plain code; anything that fails goes to a person through interrupt(). Batch processing with CSV/JSON export, an MCP server, labelled evals and a red-team log.',
    tech: ['Python', 'LangGraph', 'FastAPI', 'Pydantic', 'MCP'],
    github: 'https://github.com/Nityaa08/invoice-agent',
    demo: 'https://invoice.nityashree.in',
  },
  {
    title: 'Meridian — Multi-Agent Research Intelligence API',
    description:
      'Five-stage research pipeline: an LLM splits a question into sub-questions, searches run concurrently, local embeddings rank the passages, an LLM critic notes gaps and contradictions, and the report streams live over SSE.',
    tech: ['Python', 'FastAPI', 'asyncio', 'Groq API', 'SQLAlchemy', 'NumPy'],
    github: 'https://github.com/Nityaa08/meridian',
    demo: 'https://meridian.nityashree.in',
  },
  {
    title: 'Smart Router — LLM Cost-Control Gateway',
    description:
      'OpenAI-compatible gateway that routes each prompt to one of three model tiers using hand-written rules. Logs tokens, estimated cost, latency and tier per request in PostgreSQL, and serves repeated prompts from a Redis cache.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/Nityaa08/smart-router',
    demo: 'https://router.nityashree.in',
  },
  {
    title: 'Cross-Border Fee Calculation API',
    description:
      'REST API that gives an itemised estimate of the all-in customer price for cross-border B2B payments in Latin America: FX spread, local taxes and provider fees, from configured rates kept separate from the calculation engine.',
    tech: ['TypeScript', 'Node.js', 'Express'],
    github: 'https://github.com/Nityaa08/cross-border-fee-api',
    demo: 'https://fees.nityashree.in',
  },
  {
    title: 'Transaction Pattern Explorer — Fraud Analytics Dashboard',
    description:
      'Fraud analytics dashboard for risk analysts, built on synthetic data: interactive filters, time-series charts, rule-based pattern flags and drill-down on flagged transactions.',
    tech: ['Next.js', 'React', 'TypeScript'],
    github: 'https://github.com/Nityaa08/fraud-pattern-explorer',
    demo: 'https://fraud.nityashree.in',
  },
  {
    title: 'Speech Emotion Classifier',
    description:
      'CNN over log-mel spectrograms that labels a speech clip angry, happy, neutral or sad, trained on RAVDESS and compared with a random-forest baseline on MFCCs (71.1% vs 68.1% test accuracy), with a Gradio demo.',
    tech: ['Python', 'TensorFlow', 'librosa', 'Gradio'],
    github: 'https://github.com/Nityaa08/emotion-classifier',
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
    description: 'This earlier portfolio, built with React, CSS Modules and Framer Motion animations. My current portfolio is at nityashree.in.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/Nityaa08/personal-website',
    demo: 'https://nityashree.in',
  },
];

const Projects = () => {
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
            key={project.github}
            className={`${styles.projectCard}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((tech) => (
                <span key={tech} className={styles.techPill}>{tech}</span>
              ))}
            </div>
            {/* Real links, so keyboard and screen-reader users can open them too. */}
            <p className={styles.links}>
              {project.demo && (
                <a className={styles.githubLink} href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              )}
              <a className={styles.githubLink} href={project.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
