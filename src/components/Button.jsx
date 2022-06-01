import React from 'react';

function Button({url}) {
  return (
    <a href={url} target="_blank" className="project-link"><span>View Site</span></a>
  )
}

export default Button;

    // <a href={item.repoURL} target="_blank" className="project-github"><span>View Github</span></a>
  // <a href={item.siteURL} target="_blank" className="project-link"><span>View Site</span></a>
  // <a href={item.repoURL} target="_blank" className="project-github"><span>View Github</span></a>