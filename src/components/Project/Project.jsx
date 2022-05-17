import React from 'react';
import '../Project/Project.scss';

export default function Project() {

  return (
    <div className="project-tile">
            <div className="project-image-text">
              <picture>
                <source 
                  sizes="(min-width: 501px) 452px,
                        (min-width: 769px) 337px,
                        (min-width: 1025px) 452px,
                        (min-width: 1201px) 552px"  
                  srcset="images/coffee-shop-image-337.webp 337w,
                          images/coffee-shop-image-452.webp 452w,
                          images/coffee-shop-image-552.webp 552w"
                  type="image/webp" />
                <source 
                  srcset="images/coffee-shop-image.jpg"
                  type="image/jpeg" />
                <img 
                  src="images/coffee-shop-image.jpg" 
                  alt="Coffee-Shop-project" 
                  width="552"
                  height="345" 
                  className="project-image"/>
              </picture>
              <div className="project-title">
                <div>
                  <h3>Coffee Shop website</h3>
                  <p>A prototype site for my friend's coffee shop, Ten Ton Coffee. Made with Vue, Nuxt, Axios, SCSS and deployed with Netlify</p>
                </div>
                <div>
                  <a href="https://festive-joliot-8258ef.netlify.app/" target="_blank" className="project-link"><span>View Site</span></a>
                  <a href="https://github.com/surryjm/coffee-shop" target="_blank" className="project-github"><span>View Github</span></a>
                </div>
              </div>
            </div>
          </div>
  )
}