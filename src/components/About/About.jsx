import React from 'react';
import './About.scss';

export default function About() {

  return (
    <section id="about">
        <div className="wrapper">
          <h2>About</h2>
          <p className="subtitle">Web Developer With a Background in Technical Support</p>
          <p className="long-description">I'm a web developer with experience building and 
          implementing web applications with HTML, CSS, and JavaScript.</p>
          <p className="long-description">I'm based in beautiful Seattle, Washington, with my wonderful husband
          and two amazing kiddos.</p>
          <p className="long-description">My Masters is in Information Management, Bachelors is in Art History, 
          and I've completed the Full-Stack and Front-End certificate programs through the University of Washington.</p>
          <p className="long-description">I have an established background in technical support and customer advocacy, 
          and volunteer as a web developer for several nonprofits.</p>
          <p className="long-description">I also work freelance and you can <a href="#contact">hire me</a>.</p>
        </div>
      </section>
  )
}

