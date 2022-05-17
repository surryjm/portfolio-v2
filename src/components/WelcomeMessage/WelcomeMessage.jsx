import React from 'react';
import './WelcomeMessage.scss';

function WelcomeMessage() {

  return (
    <section id="welcome-section">
      <div className="wrapper">
        <h1>Hi! I'm Surry</h1>
        <p className="welcome-subtitle">I'm a Seattle-based front-end developer and
            <span className="container-rotate">
            <span className="rotate">a Mom.</span>
            <span className="rotate">an instructional assistant.</span>
            <span className="rotate">a runner.</span>
            <span className="rotate">a hiker.</span>
            <span className="rotate">a Star Wars nerd.</span>
            <span className="rotate">a bad pun enthusiast.</span>
            <span className="rotate">a baker.</span>
            <span className="rotate">an eternal student.</span>
          </span>
        </p>
      </div>
    </section>
  )
}

export default WelcomeMessage;



