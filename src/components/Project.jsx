import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.screenshot} alt={project.name} className="project-screenshot" />
            <h3>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    {project.name}
                </a>
            </h3>
            <p>{project.techStack}</p>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div >
    );
};

export default ProjectCard;
