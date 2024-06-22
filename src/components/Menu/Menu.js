import "./Menu.scss";
import githubIcon from "../../assets/icons/github_icon.svg"
import linkedinIcon from "../../assets/icons/linkedin_icon.svg"

import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <menu className="menu">
      <nav className="menu__contact">
        <ul className="menu__contact--list">
            
            <li className="menu__contact__projects">
                <button className="menu__contact__projects--button">
                  Projects
                </button>
            </li>
            <li className="menu__contact__work">
                <button className="menu__contact__work--button">
                  Skills
                </button>
            </li>
            <li className="menu__contact__work">
                <button className="menu__contact__work--button">
                  Experience
                </button>
            </li>
            <li className="menu__contact__work">
                <button className="menu__contact__work--button">
                  Education
                </button>
            </li>
            
            <li className="menu__contact__resume">
                <button className="menu__contact__resume--button">
                  Resume
                </button>
            </li>
            <li className="menu__contact__contact">
                <button className="menu__contact__contact--button">
                  Contact
                </button>
            </li>
        </ul>
      </nav>

    </menu>
  );
};
export default Menu;
