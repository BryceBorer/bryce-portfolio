import "./About.scss";
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
          <h1 className="hero__content__text--name">Bryce Borer</h1>
          <h2 className="hero__content__text--job">Full Stack Developer</h2>
          <p className="hero__content__text--about">Hi, I'm Bryce, a passionate full stack developer with a love for programming
            and problem-solving. With a strong foundation in software development,
            I enjoy creating innovative solutions and bringing ideas to life through code.
            My experience spans various technologies and programming languages, and I am
            always eager to learn and adapt to new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
