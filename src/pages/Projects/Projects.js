import React from 'react';
import './Projects.scss'
import saiCheeseImg from '../../assets/images/saicheese-large.jpg'

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects--wrapper">
        <div className='projects__saicheese'>
          <div className='projects__saicheese--img' >
          </div>
        </div>
      </div>
      <div className="projects--wrapper">
        <div className='projects__industry'>
          <div className='projects__industry--img' >
          </div>
          <p>

          </p>
        </div>
      </div>
      <div className="projects--wrapper">
        <div className='projects__science'>
          <div className='projects__science--img' >
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;