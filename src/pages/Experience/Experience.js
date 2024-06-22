import "./Experience.scss";

import brainstationIcon from "../../assets/icons/brainstation-logo.svg"
import brainstationIconWhite from "../../assets/icons/brainstation-logo-white.svg"

const Experience = () => {


  return (
    <section className="exp">
      <div className="exp--wrapper">
        <div className="exp__card">
          <h2 className="exp__card--title">
          &lt; Skills /&gt;
          </h2>
          <ul className="exp__card__list">
            <li>
              Front-end design with React.JS, SASS, and Axios
            </li>
            <li>
              Back-end architecture with Express.JS and Knex
            </li>
            <li>
              Javascript | HTML | CSS | Python | MySQL
            </li>
          </ul>
        </div>
      </div>
      <div className="exp--wrapper">
        <div className="exp__card">
          <h2 className="exp__card--title">
          &lt; Experience /&gt;
          </h2>
          <ul className="exp__card__list">
            <li>
              Software Engineering Teaching Assistant<br/>
              Brainstation <br/>
              April 2024 - Current
            </li>
            <li>
              Digital Youth Rally Hackathon Mentor
              Open Hub Project<br/>
              May 2024
            </li>
            <li>
              Industry Competition Winner <br/>
              
            </li>
          </ul>
        </div>
      </div>
      <div className="exp--wrapper">
        <div className="exp__card">
          <h2 className="exp__card--title">
          &lt; Education /&gt;
          </h2>
          <ul className="exp__card__list">
            <li>
              Software Engineering Bootcamp - Brainstation 
              <img className="icon" src={brainstationIconWhite}
              alt="Brainstation Icon"/>
            </li>
            <li>
              BSc Electrical Engineering - Ontario Tech University
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Experience;
