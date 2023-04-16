import React from 'react';
import Project from '../Project/Project';
import './Projects.scss';
import coffeePng from '../../assets/coffee-shop-image.png';
import educationPng from '../../assets/education-app-image.png';
import alumniNetworkPng from '../../assets/alumni-network-image.png';
import wordleishPng from '../../assets/wordle-ish-image.png';
import seattleLiteracyPng from '../../assets/seattle-literacy-image.png';
import portfoliov2Png from '../../assets/portfolio-v2-updated-image.png';
import portfoliov1Png from '../../assets/portfolio-v1-image.png';

export default function Projects() {
  const projectItems = [
    {
      title: "Portfolio, version two", 
      description: "Version two of my portfolio site (current version), rebuilt with React and Sass, and deployed with Netlify.",
      attributeURL: "https://www.freepik.com/free-vector/laptop-mobile-phone-design_919220.htm", 
      attributeText: "Background image by d3images on Freepik",
      repoURL: "https://github.com/surryjm/portfolio-v2",
      photo: `${portfoliov2Png}`
    },

    {
      title: "Portfolio, version one", 
      description: "Version one of my portfolio site, built with HTML, CSS and vanilla JavaScript, and deployed with GitHub Pages.",
      attributeURL: "https://www.freepik.com/free-psd/digital-device-mockup-set_4264997.htm", 
      attributeText: "Background image by rawpixel.com on Freepik", 
      siteURL: "https://surryjm.github.io/projects-portfolio/", 
      repoURL: "https://github.com/surryjm/projects-portfolio",
      photo: `${portfoliov1Png}`
    },
    
    {
      title: "Alumni Network homepage", 
      description: "Built Wordpress page from client mockups using HTML, CSS, JavaScript and PHP, and configured and styled cookie banner with OneTrust.", 
      attributeURL: "https://www.freepik.com/free-vector/realistic-laptop-with-smartphone_35202611.htm",
      attributeText: "Background image by juicy_fish on Freepik",
      siteURL: "https://www.oliverwymanconnect.com/login/", 
      photo: `${alumniNetworkPng}`
    },

    {
      title: "Seattle Literacy site enhancements", 
      description: "Volunteer project for their Wordpress site. Set up staging environment and implemented CSS, accessibility and SEO improvements.", 
      attributeURL: "https://www.freepik.com/free-vector/digital-device-mockup_4122511.htm",
      attributeText: "Background image by rawpixel.com on Freepik",
      siteURL: "https://seattleliteracy.org/", 
      photo: `${seattleLiteracyPng}`
    },
    
    {
      title: "Coffee Shop site", 
      description: "Built prototype site for coffee shop using Vue, Nuxt, Axios and Sass, and deployed with Netlify.", 
      attributeURL: "https://www.freepik.com/free-vector/laptop-mobile-phone-design_919220.htm#query=laptop%20mobile%20mockup&position=9&from_view=search&track=ais",
      attributeText: "Background image by d3images on Freepik",
      siteURL: "https://festive-joliot-8258ef.netlify.app/", 
      repoURL: "https://github.com/surryjm/coffee-shop",
      photo: `${coffeePng}`
    },

    {
      title: "Wordle-ish", 
      description: "Designed variation of Wordle built on HTML, CSS and vanilla JavaScript, and deployed with GitHub Pages.",
      attributeURL: "https://unsplash.com/photos/ZOXwrpmYWrA",
      attributeText: "Background image by Grey Wight on Unsplash", 
      siteURL: "https://surryjm.github.io/wordle-clone/", 
      repoURL: "https://github.com/surryjm/wordle-clone",
      photo: `${wordleishPng}`
    },
  
    {
      title: "Education App", 
      description: "Group project app that allows teachers, students and parents to log in and view the site according to their role. I was responsible for connecting the front-end to the back-end. Built with MongoDB, Express, Node.js, Mustache and Bootstrap, deployed with Heroku.", 
      attributeURL: "https://www.freepik.com/free-vector/screen-tv-mockup_835105.htm",
      attributeText: "Background image by Layerace on Freepik",
      repoURL: "https://github.com/JS330-Education-App/final-project",
      photo: `${educationPng}`
    },
  ]

  return (
    <section id="projects">
      <div className="wrapper">
        <h2>Projects</h2>
        <p className="subtitle">Highlighted Work</p>
        <div className="projects-container">
          <Project projects={projectItems}/>
        </div>
      </div>
  </section>
  )
}