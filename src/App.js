import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Menu from './components/Menu/Menu';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
//import Footer from './components/Footer';
import './App.scss';
import './styles/partials/_global.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
