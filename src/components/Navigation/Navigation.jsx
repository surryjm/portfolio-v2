import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

const navigationItems = [
  { url: '#about', label: 'About' },
  { url: '#projects', label: 'Projects' },
  { url: '#contact', label: 'Contact' }
]

function Navigation({ isNavFull, setIsNavFull }) {

  const toggleClass = () => {
    setIsNavFull(!isNavFull);
  };

  return (
    <div className="Navigation">
      <nav id="navbar" className="navbar">
        <Logo />
        <button id="hamburger-icon" onClick={() => setIsNavFull(!isNavFull)}>
          <FontAwesomeIcon icon={faBars} aria-hidden="true" className="hamburger-icon" />
        </button>
        <div className={isNavFull ? "navShowing" : "navNotShowing"}>
          <ul>
          {navigationItems.map((navItem) => (
            <li>
              <HashLink to={navItem.url} key={navItem.label} className="gradient-link nav-links" onClick={toggleClass}>{navItem.label}</HashLink>
            </li>
          ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;