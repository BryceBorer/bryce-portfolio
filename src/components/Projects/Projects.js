import React from 'react';
import './Projects.scss'
import saiCheeseImg from '../../assets/images/saicheese-large.jpg'

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects--wrapper">
        <div className='projects__saicheese'>
          <div className='projects__saicheese--img' >
            IMAGE
          </div>
        </div>


        <div className='projects__industry'>
          <div className='projects__industry--img' >
            IMAGE
          </div>
        </div>

        <div className='projects__notebook'>
          <div className='projects__notebook--img' >
            IMAGE
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;