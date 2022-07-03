import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faCodepen } from "@fortawesome/free-brands-svg-icons";
import './Footer.scss';

export default function Footer() {

  return (
    <footer id="contact">
      <h2>Contact</h2>
      <p className="subtitle">Get in Touch</p>
      <p>Feel free to connect. I'd love to hear from you!</p>
      <ul className="footer-line">
        <li><a className="gradient-link" href="mailto:surryjm@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" className="footer-fontAwesome" />Email</a>
          </li>
        <li><a className="gradient-link" href="https://www.linkedin.com/in/surryjmowery/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" className="footer-fontAwesome" />LinkedIn</a>
        </li>
        <li><a className="gradient-link" href="https://github.com/surryjm" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" className="footer-fontAwesome" />Github</a>
        </li>
        <li><a className="gradient-link" href="https://codepen.io/surry/pens/showcase" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faCodepen} aria-hidden="true" className="footer-fontAwesome" />CodePen</a>
        </li>
      </ul>
    </footer>
  )
}