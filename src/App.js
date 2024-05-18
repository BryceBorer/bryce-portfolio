import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
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
        <Projects />
        <Routes>
          <Route path="/projects" component={Projects} />
          <Route path="/" component={About} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
