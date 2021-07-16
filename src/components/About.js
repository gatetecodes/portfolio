import React from 'react';
import HTML5 from '../images/html5-02.png';
import cplusplus from '../images/cplusplus-03.png';
import flutter from '../images/flutter-01.png';
import javascript from '../images/javascript-02.png';
import mongodb from '../images/mongodb-02.png';
import nodejs from '../images/nodejs-02.png';
import php from '../images/php-02.png';
import react from '../images/react-01.png';
import PageTitle from './PageTitle';
import resume from '../files/Marcel-Gatete-Resume.pdf';

import './About.scss';

const About = () => {
  return (
    <section className="content-section">
      <div className="container">
        <PageTitle
          title="About Me"
          subtitle="Let's get to know each other"
          style={{ margin: '1rem 0 2rem 0' }}
        />
        <div className="about-container">
          <p className="my-intro">
            Hello I'm Marcel, a prolific full-stack web developer with a passion
            for elegance, minimalism, ease of use, and beating
            former“best-yets”. I have experience in developing marketing,
            banking, construction, ecommerce, crowdfunding and directories web
            applications.
          </p>
          <div className="about-me">
            <div className="my-background">
              <h2 className="heading">My Background</h2>
              <p>
                I hold a Bachelors Degree in Electrical and Computer Engineering
                from California Baptist University. I was part of the Rwanda
                Presidential Scholars cohort that graduated from the said
                university in 2012. After graduation, I saw it fit to return
                home and put my skills to use. I am well versed in web and
                mobile development and have worked with companies from diverse
                areas to create/improve their online presence.
              </p>
              <a className="btn" href={resume} download>
                Download My Resume
              </a>
            </div>
            <div className="skills">
              <h2 className="heading">My Coding Skills</h2>
              <div className="skills-container">
                <ul className="skills-list first-col">
                  <li>
                    <img src={HTML5} alt="" />
                    <span>HTML5 & CSS</span>
                  </li>
                  <li>
                    <img src={php} alt="" />
                    PHP & MySQL
                  </li>
                  <li>
                    <img src={javascript} alt="" />
                    Modern JavaScript
                  </li>
                  <li>
                    <img src={nodejs} alt="" />
                    NodeJS & Express
                  </li>
                </ul>
                <ul className="skills-list second-col">
                  <li>
                    <img src={mongodb} alt="" />
                    MongoDB
                  </li>
                  <li>
                    <img src={react} alt="" />
                    ReactJS
                  </li>
                  <li>
                    <img src={cplusplus} alt="" />
                    C++
                  </li>
                  <li>
                    <img src={flutter} alt="" />
                    Flutter
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
