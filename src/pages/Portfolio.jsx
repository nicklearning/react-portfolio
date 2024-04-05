import React from 'react';
import ProjectCard from '../components/Project';
import { projects } from '../data/projectsData'; // Import the projects array

const PortfolioPage = () => {
  return (
    <div className="portfolio-page-container">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
