import React, { useState } from 'react';
import './Menu.scss';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button className="menu__button" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </button>
      <div className={`menu__dropdown ${isOpen ? 'menu__dropdown--open' : ''}`}>
        <a href="/" className="menu__item">About</a>
        <a href="/experience" className="menu__item">Experience</a>
        <a href="/projects" className="menu__item">Projects</a>
        <a href="/contact" className="menu__item">Contact</a>
      </div>
    </div>
  );
};

export default Menu;
