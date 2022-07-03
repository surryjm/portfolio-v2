import React from 'react';
import '../Project/Project.scss';

export default function Project( {projects} ) {
  return (
    projects.map((item, index) => (
    <div className="project-tile" key={index}>
      <div className="project-image-text">
        <picture>
          <source 
            sizes="(min-width: 501px) 452px,
                   (min-width: 769px) 337px,
                   (min-width: 1025px) 452px,
                   (min-width: 1201px) 552px"  
            srcSet={`${item.webp337} 337w, ${item.webp452} 452w, ${item.webp552} 552w`}
            type="image/webp" />
          <source 
            srcSet={item.jpg}
            type="image/jpeg" />
          <img 
            src={item.jpg}
            alt={item.title} 
            width="552"
            height="345" 
            className="project-image"/>
        </picture>
        <div className="project-title">
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div>
            <a href={item.siteURL} target="_blank" rel="noreferrer" className="project-link"><span>View Site</span></a> 
            <a href={item.repoURL} target="_blank" rel="noreferrer" className="project-repo"><span>View Repo</span></a> 
          </div>
        </div>
      </div>
    </div>
    ))
  )
}