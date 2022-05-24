import React, {useState} from 'react';
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

function Navigation() {
  const [isNavFull, setIsNavFull] = useState(false);

  return (
    <div className="Navigation">
      <nav id="navbar" className="navbar">
        <Logo />
        <button id="hamburger-icon" onClick={() => setIsNavFull(!isNavFull)}>
          <FontAwesomeIcon icon={faBars} aria-hidden="true" className="hamburger-icon" />
        </button>
        <div className={isNavFull ? "full" : "mobile"}>
          <ul>
          {navigationItems.map((navItem) => (
            <li><HashLink to={navItem.url} key={navItem.label} className="gradient-link nav-links">{navItem.label}</HashLink></li>
          ))}
          </ul>
        </div>
      </nav>

      {/* <a id="hamburger-icon" href="javascript:void(0);" >
        <FontAwesomeIcon icon={faBars} aria-hidden="true" className="hamburger-icon" />
      </a> */}
    </div>
  )
}

export default Navigation;