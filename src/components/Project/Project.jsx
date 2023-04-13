import React from 'react';
import '../Project/Project.scss';

export default function Project( {projects} ) {
  return (
    projects.map((item, index) => (
    <div className="project-tile" key={index}>
      <div className="project-image-text">
        <div className="container-img">
          <img 
            src={item.photo}
            alt={item.title} 
            width="552"
            height="345" 
            className="project-image"
          />
        </div>
        <div className="project-title">
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="attribution">{item.attribute && item.attribute}</p>
          </div>
          <div>
            {item.siteURL && <a href={item.siteURL} target="_blank" rel="noreferrer" className="project-link"><span>View Site</span></a>} 
            {item.repoURL && <a href={item.repoURL} target="_blank" rel="noreferrer" className="project-repo"><span>View Repo</span></a>} 
          </div>
        </div>
      </div>
    </div>
    ))
  )
}