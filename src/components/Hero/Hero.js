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
        </div>
        
      </div>
    </section>
  );
};
export default Hero;
