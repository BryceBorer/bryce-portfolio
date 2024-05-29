import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
//import Footer from './components/Footer';
import './App.scss';
import './styles/partials/_global.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <Routes>
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Hero} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
