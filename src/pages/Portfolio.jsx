import React from 'react';
import Project from '../components/Project';
import { projects } from '../data/projectsData'; // Import the projects array

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
