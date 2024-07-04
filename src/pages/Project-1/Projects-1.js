import React from 'react';
import '../Projects/Projects.scss'

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects--wrapper">
        <div className='projects__saicheese'>
          <div className='projects__saicheese__title' >
            <div className='projects__saicheese__title--img' ></div>
          </div>
          <p className='projects__saicheese--text'>
            sAIcheese was my Capstone project at Brainstation.
            In it's current form, the web application accepts images of food (JPG) and outputs the
            nutrient data (calories, protein fat, etc) by leveraging Foodvisor's API. This project 
            is unfinished, but it was fun to build and I hope to continue working on it in the future. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;