import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'AI Image Caption Generator',
    description: 'Designed a CNN-LSTM model to generate captions from images using the Flikr8k dataset. Improved sequence quality and contextual accuracy by integrating a pretrained BLIP Model.',
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
    title: 'COVID-19 EDA',
    description: 'Analyzed over 100,000 COVID-19 records with Pandas and Seaborn. Identified socioeconomic correlations with case trends to provide data-driven insights.',
    tech: ['Python', 'Pandas', 'Seaborn'],
    github: 'https://github.com/Nityaa08/Covid-EDA',
  },
  {
    title: 'Employee Attrition Prediction',
    description: 'Developed a machine learning model to predict employee attrition using the IBM HR Analytics dataset. Enhanced prediction accuracy and interpretability by applying classification algorithms and SHAP-based feature importance analysis.',
    tech: ['Python', 'ML Models', 'Matplotlib'],
    github: 'https://github.com/Nityaa08/employee-attrition/blob/main/employee-attrition.ipynb'
  
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Created and deployed a personal portfolio site using React and Bootstrap. The website showcases project links, certifications, and GitHub contributions.',
    tech: ['React', 'Bootstrap', 'JavaScript'],
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