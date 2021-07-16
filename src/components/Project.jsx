import React from 'react';
import './Project.scss';

const Project = ({ title, image, link, description, year, tags }) => {
  return (
    <div className="project">
      <img className="project-image" src={image} alt={title} />
      <h3 className="project-title">{title}</h3>
      <span className="project-year">{year}</span>
      <ul className="project-tags">
        {tags?.map((tag) => (
          <li className="project-tag">#{tag}</li>
        ))}
      </ul>
      <p className="project-description">{description}</p>
      <a href={link} className="project-link" target="_blank" rel="noreferrer">
        Go to Project
      </a>
    </div>
  );
};

export default Project;
