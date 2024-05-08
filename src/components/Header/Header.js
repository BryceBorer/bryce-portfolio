import "./Header.scss";
import githubIcon from "../../assets/icons/github_icon.svg"
import linkedinIcon from "../../assets/icons/linkedin_icon.svg"

const Header = () => {
  

  return (
    <header className="header">
      <nav className="header__contact">
        <ul className="header__contact--list">
            <li className="header__contact__contact">
                <button className="header__contact__contact--button">
                  Contact
                </button>
            </li>
            <li className="header__contact__work">
                <button className="header__contact__work--button">
                  Work Experience
                </button>
            </li>
            <li className="header__contact__projects">
                <button className="header__contact__projects--button">
                  Projects
                </button>
            </li>
            <li className="header__contact__resume">
                <button className="header__contact__resume--button">
                  Resume
                </button>
            </li>
        </ul>
      </nav>

    </header>
  );
};
export default Header;
