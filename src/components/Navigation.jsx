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


// const mainNavItems = [
//   { url: '/blog', icon: blog, label: 'Articles' },
//   { url: '/projects', icon: projects, label: 'Projects' },
//   { url: '/me', icon: floppy, label: 'About me' },
// ]
// {mainNavItems.map((item) => (
//   <Link to={item.url} key={item.label} activeClassName="active">
//     <img src={item.icon} alt={item.label} />
//     <div className="tooltip">{item.label}</div>
//   </Link>
// ))}


function Navigation() {

  return (
    <nav id="navbar" className="navbar">
      <Logo />
      {navigationItems.map((navItem) => (
        <HashLink to={navItem.url} key={navItem.label} className="gradient-link nav-links">{navItem.label}</HashLink>
      ))}
      <a id="hamburger-icon" href="javascript:void(0);" >
        <FontAwesomeIcon icon={faBars} aria-hidden="true" className="hamburger-icon" />
      </a>

      {/* <p><a id="logo" class="logo" href="#top">Surry Jones Mowery</a></p> */}
      {/* <ul>
        <li>
          <a id="hamburger-icon" href="javascript:void(0);" class="hamburger-icon"><i class="fa fa-bars" aria-hidden="true"></i></a>
        </li>
        <li>
          <a class="gradient-link nav-links" href="#about">About</a>
        </li>
        <li>
          <a class="gradient-link nav-links" href="#projects">Projects</a>
        </li>
        <li>
          <a class="gradient-link nav-links" href="#contact">Contact</a>
        </li>
      </ul> */}
    </nav>
  )
}

export default Navigation;