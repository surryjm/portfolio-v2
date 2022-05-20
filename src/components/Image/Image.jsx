import React from 'react';
import './Image.scss';
import coffeeJpg from '../../assets/coffee-shop-image.jpg';
import coffee337 from '../../assets/coffee-shop-image-337.webp';
import coffee452 from '../../assets/coffee-shop-image-452.webp';
import coffee552 from '../../assets/coffee-shop-image-552.webp';
import education from '../../assets/education-app-image.jpg';

export default function Image() {

  return (
    <picture>
      <source 
        sizes="(min-width: 501px) 452px,
              (min-width: 769px) 337px,
              (min-width: 1025px) 452px,
              (min-width: 1201px) 552px"  
        srcSet={`${coffee337} 337w, ${coffee452} 452w, ${coffee552} 552w`}
        type="image/webp" />
      <source 
        srcSet={coffeeJpg}
        type="image/jpeg" />
      <img 
        src={coffeeJpg}
        alt="Coffee-Shop-project" 
        width="552"
        height="345" 
        className="project-image"/>
    </picture>
  )
}