import React from 'react';
import './Projects.scss'
import saiCheeseImg from '../../assets/images/saicheese-large.jpg'

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