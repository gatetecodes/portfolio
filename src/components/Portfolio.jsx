import React from 'react';
import './Portfolio.scss';
import { projects } from '../projects-data';
import Project from './Project';
import PageTitle from './PageTitle';

const Portfolio = () => {
  return (
    <section className="content-section">
      <div className="container">
        <PageTitle
          title="My Portfolio"
          subtitle="Current and Past Projects"
          style={{ margin: '1rem 0 2rem 0' }}
        />
        <div className="projects-container">
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
              year={project.year}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
