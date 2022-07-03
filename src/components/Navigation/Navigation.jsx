import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import classnames from 'classnames';
// const classNames = require('classnames');
import './Navigation.scss';

const navigationItems = [
  { url: '#about', label: 'About' },
  { url: '#projects', label: 'Projects' },
  { url: '#contact', label: 'Contact' }
]

export default function Navigation({ isNavFull, setIsNavFull, toggleClass, toggleNavClose }) {

  return (
    <div className="Navigation">
      <nav id="navbar" className="navbar">
        <Logo toggleNavClose={toggleNavClose} />
        <button aria-label="hamburger-icon" id="hamburger-icon" onClick={() => setIsNavFull(!isNavFull)}>
          <FontAwesomeIcon icon={faBars} aria-hidden="true" className="hamburger-icon" />
        </button>
        <div>
          <ul className={"navMenu " + (isNavFull ? "navShowing" : "navNotShowing")}>
          {/* <ul className={classnames("navMenu", {
            navClass: isNavFull, 
            "navNotShowing": !isNavFull,
            " ": isLargeBreakpoint
          })}> */}
          {navigationItems.map((navItem, index) => (
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