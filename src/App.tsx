// src/App.js
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Home />
        <About />
        <Services />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;