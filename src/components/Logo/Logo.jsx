import React from 'react';
import './Logo.scss';
import { HashLink } from 'react-router-hash-link';

function Logo() {

  return (
    // <p id="logo"><a className="logo" href="#top">Surry Jones Mowery</a></p>
    <HashLink to="#top" className="logo" id="logo">Surry Jones Mowery</HashLink>
  )
}

export default Logo;