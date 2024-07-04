import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Projects1 from './pages/Project-1/Projects-1';
import Projects2 from './pages/Project-2/Projects-2';
import Projects3 from './pages/Project-3/Projects-3';
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import './App.scss';
import './styles/partials/_global.scss'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Element name="home" className="section">
            <Home/>
          </Element>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Element name="about" className="section">
            <About/>
          </Element>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >

          <Element name="skills" className="section">
            <Experience/>
          </Element>
        </motion.div>

        {/* sAICheese */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Element name="projects" className="section">
            <Projects1 />
          </Element>
        </motion.div>

{/* Chec */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Element name="projects" className="section">
            <Projects2/>
          </Element>
        </motion.div>

{/* Data Science */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Element name="projects" className="section">
            <Projects3/>
          </Element>
        </motion.div>
      </main>
    </div>
  );
}

export default App;