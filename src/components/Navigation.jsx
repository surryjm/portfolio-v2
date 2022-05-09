import React from 'react';

function Navigation({className}) {

  return (
    <nav id="navbar" class="navbar">
      <p><a id="logo" class="logo" href="#top">Surry Jones Mowery</a></p>
      <ul>
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
      </ul>
    </nav>
  )
}

export default Navigation;