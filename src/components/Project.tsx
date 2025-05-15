import React from 'react';
import { Project as ProjectType } from './Projects';

const Project: React.FC<ProjectType> = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  devpostUrl
}) => {
  return (
    <div style={{ marginBottom: '2rem', borderLeft: '2px solid #ccc', paddingLeft: '1rem' }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p>{description}</p>

      {technologies.length > 0 && (
        <div style={{ margin: '0.5rem 0' }}>
          <span style={{ fontWeight: 'bold' }}>Technologies: </span>
          {technologies.join(', ')}
        </div>
      )}

      <div style={{ marginTop: '0.5rem' }}>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
            GitHub
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
            Live Demo
          </a>
        )}
        {devpostUrl && (
          <a href={devpostUrl} target="_blank" rel="noopener noreferrer">
            Devpost
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;