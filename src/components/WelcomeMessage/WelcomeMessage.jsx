import React from 'react';
import './WelcomeMessage.scss';

export default function WelcomeMessage() {

  return (
    <section id="welcome-section">
      <div className="wrapper">
        <h1>Hi! I'm Surry <span>👋</span></h1>
        <p className="welcome-subtitle">I'm a web developer based in Seattle, Washington.
        </p>
        <p className="download-button">
          <a className="download-link" href="Surry_Mowery_Portfolio_Resume.pdf" download="Surry_Mowery_Portfolio_Resume.pdf"><span>Download resume</span></a>
        </p>
      </div>
    </section>
  )
}