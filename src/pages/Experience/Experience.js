import "./Experience.scss";

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
            <span className="bold">&lt;br/&gt;</span>
            <li>
              Back-end architecture with Express.JS and Knex
            </li>
            <span className="bold">&lt;br/&gt;</span>
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
              April 2024 - Current<br/>
            </li>
            <span className="bold">&lt;br/&gt;</span>
            <li>
              Digital Youth Rally Hackathon Mentor<br/>
              Open Hub Project<br/>
              May 2024<br/>
            </li>
            <span className="bold">&lt;br/&gt;</span>
            <li>
              Industry Competition Winner <br/>
              Brainstation <br/>
              February 2024
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
            </li>
            <span className="bold">&lt;br/&gt;</span>
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
