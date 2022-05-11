import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navigationItems = [
  { url: '#about', label: 'About' },
  { url: '#projects', label: 'Projects' },
  { url: '#contact', label: 'Contact' }
]

function Navigation() {

  return (
    <div className="Navigation">
      <nav id="navbar" className="navbar">
        <Logo />
        <div>
          {navigationItems.map((navItem) => (
            <HashLink to={navItem.url} key={navItem.label} className="gradient-link nav-links">{navItem.label}</HashLink>
          ))}
        </div>
      </nav>
      <a id="hamburger-icon" href="javascript:void(0);" >
        <FontAwesomeIcon icon={faBars} aria-hidden="true" className="hamburger-icon" />
      </a>
    </div>
  )
}

export default Navigation;