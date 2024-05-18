import "./Hero.scss";
import githubIcon from "../../assets/icons/github_icon.svg"
import linkedinIcon from "../../assets/icons/linkedin_icon.svg"
import bryceImage from "../../assets/images/bryce.jpg"

const Hero = () => {


  return (
    <section className="hero">
      <div className="hero__content">
        <img className="hero__content__headshot"
          src={bryceImage}
          alt="Bryce headshot"
        />
        <div className="hero__content__text">
          <h1>Bryce Borer</h1>
          <h2>Software Engineer</h2>
          <h3>I thrive on turning complex problems into elegant software solutions.</h3>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>
        </div>

      </div>
    </section>
  );
};
export default Hero;
