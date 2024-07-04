import React from 'react';
import '../Projects/Projects.scss'

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects--wrapper">
        <div className='projects__industry'>
          <div className='projects__industry__title'>
            <div className='projects__industry__title--img' ></div>
          </div>
          <p className='projects__industry--text'>
            Chec was my team's winning industry project at Brainstation, partnered with Fiserv. Our mission was to
            create an application that improves the restaurant dining experience. We built a prototype
            application to help the customer split the bill with multiple guests. My role was to create a
            back-end that could store customer and restaurant data, then calculate the bill total for
            each customer. I accomplished this by building my own API using Express.JS and building a database
            with Knex (MySQL).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;