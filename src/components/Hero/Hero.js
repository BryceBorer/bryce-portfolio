import "./Hero.scss";
import githubIcon from "../../assets/icons/github_icon.svg"
import linkedinIcon from "../../assets/icons/linkedin_icon.svg"

const Hero = () => {
  

  return (
    <section className="hero">
      <h1>Bryce Borer</h1>
      <h2>Software Engineer</h2>
      <h3>I thrive on turning complex problems into elegant software solutions.</h3>
      <nav className="hero__contact">
        <ul className="hero__contact--list">
            <li className="hero__contact__github">
                <a className="hero__contact__github--link"
                href="https://github.com/CanadianWall">
                    <img className="hero__contact__github--svg"
                    src={githubIcon}
                    alt="Github link"
                    />
                </a>
            </li>
            <li className="hero__contact__linkedin">
                <a className="hero__contact__linkedin--link"
                href="https://www.linkedin.com/in/bryceptborer/">
                    <img className="hero__contact__linkedin--svg"
                    src={linkedinIcon}
                    alt="LinkedIn link"
                    />
                </a>
            </li>
        </ul>
      </nav>

    </section>
  );
};
export default Hero;
