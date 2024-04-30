import "./Header.scss";
import githubIcon from "../../assets/icons/github_icon.svg"

const Header = () => {
  

  return (
    <div className="header">
      <h1>Bryce Borer</h1>
      <h2>Software Engineer</h2>
      <h3>I thrive on turning complex problems into elegant software solutions.</h3>
      <div className="header__contact">
        <ul className="header__contact--list">
            <li className="header__contact__github">
                <a className="header__contact__github--link"
                href="https://github.com/CanadianWall">
                    <img className="header__contact__github--svg"
                    src={githubIcon}
                    alt="Github link"
                    />
                </a>
            </li>
        </ul>
      </div>

    </div>
  );
};
export default Header;
