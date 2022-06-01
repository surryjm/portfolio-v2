import React from 'react';
import './Logo.scss';
import { HashLink } from 'react-router-hash-link';

export default function Logo({ toggleNavClose }) {

  return (
    <HashLink to="#top" className="logo" id="logo" onClick={toggleNavClose}>Surry Jones Mowery</HashLink>
  )
}