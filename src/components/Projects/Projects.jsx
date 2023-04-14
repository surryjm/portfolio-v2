import React from 'react';
import Project from '../Project/Project';
import './Projects.scss';
import coffeeJpg from '../../assets/coffee-shop-image.jpg';
import educationJpg from '../../assets/education-app-image.jpg';
import oliverWymanConnectPng from '../../assets/oliver-wyman-connect-homepage-image.png';
import wordleishPng from '../../assets/wordle-ish-image.png';
import seattleLiteracyPng from '../../assets/seattle-literacy-image.png';
import calculatorPng from '../../assets/calculator-image.png';


export default function Projects() {
  const projectItems = [
    {
      title: "Alumni Network homepage", 
      description: "Built Wordpress page from client mockups using HTML, CSS, JavaScript and PHP, and configured and styled cookie banner with OneTrust.", 
      siteURL: "https://www.oliverwymanconnect.com/login/", 
      photo: `${oliverWymanConnectPng}`
    },
    
    // {
    //   title: "Coffee Shop site", 
    //   description: "Built prototype site for coffee shop using Vue, Nuxt, Axios and Sass and deployed with Netlify.", 
    //   siteURL: "https://festive-joliot-8258ef.netlify.app/", 
    //   repoURL: "https://github.com/surryjm/coffee-shop",
    //   photo: `${coffeeJpg}`
    // },

    {
      title: "Wordle-ish", 
      description: "Designed variation of Wordle built on HTML, CSS and JavaScript and deployed with GitHub Pages.",
      attribute: "Background image by Grey Wight on Unsplash.", 
      siteURL: "https://surryjm.github.io/wordle-clone/", 
      repoURL: "https://github.com/surryjm/wordle-clone",
      photo: `${wordleishPng}`
    },

    {
      title: "Seattle Literacy site enhancements", 
      description: "Volunteer project for their Wordpress site. Set up staging environment and implemented CSS, accessibility and SEO improvements.", 
      siteURL: "https://seattleliteracy.org/", 
      photo: `${seattleLiteracyPng}`
    },

    {
      title: "Calculator", 
      description: "Simple calculator app, made with HTML, CSS and JavaScript, and deployed with GitHub Pages.",
      attribute: "Background image by Grey Wight on Unsplash.", 
      siteURL: "https://surryjm.github.io/calculator/", 
      repoURL: "https://github.com/surryjm/calculator",
      photo: `${calculatorPng}`
    },
  
    {
      title: "Education App", 
      description: "Group project app that allows teachers, students and parents to log in and view the site according to their role. I was responsible for connecting the front-end to the back-end. Built with MongoDB, Express, Node.js, Mustache and Bootstrap, deployed with Heroku.", 
      repoURL: "https://github.com/JS330-Education-App/final-project",
      photo: `${educationJpg}`
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