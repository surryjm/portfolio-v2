import React from 'react';
import './Logo.scss';
import { HashLink } from 'react-router-hash-link';

function Logo({ toggleClass }) {

  return (
    <HashLink to="#top" className="logo" id="logo" onClick={toggleClass}>Surry Jones Mowery</HashLink>
  )
}

export default Logo;