import React from 'react';
import '../Projects/Projects.scss'

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects--wrapper">
        <div className='projects__science'>
          <div className='projects__science__title'>
            <div className='projects__science__title--img' ></div>
          </div>
          <p className='projects__science--text'>
            After completing the Software Engineering bootcamp, I earned a Data Science certificate through
            Brainstation. This is my final project for that course, which was done in Jupyter Notebooks. My
            project dives into a dataset from Kaggle on the home loan approval rates.  It contains detailed
            information on various attributes such as demographic, financial, employment, and home ownership
            status. I use various methods and models to show insights on the home loan approval rates in India!
          </p>
        </div>
      </div>

    </section>
  );
}

export default Projects;