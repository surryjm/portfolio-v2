import React from 'react';
import Project from '../Project/Project';
import './Projects.scss';
import coffeeJpg from '../../assets/coffee-shop-image.jpg';
import coffee337 from '../../assets/coffee-shop-image-337.webp';
import coffee452 from '../../assets/coffee-shop-image-452.webp';
import coffee552 from '../../assets/coffee-shop-image-552.webp';
import educationJpg from '../../assets/education-app-image.jpg';
import education337 from '../../assets/education-app-image-337.webp';
import education452 from '../../assets/education-app-image-452.webp';
import education552 from '../../assets/education-app-image-552.webp';
import oliverWymanConnectPng from '../../assets/oliver-wyman-connect-homepage-image.png';
import oliverWymanConnect337 from '../../assets/oliver-wyman-connect-homepage-image-337.png';
import oliverWymanConnect452 from '../../assets/oliver-wyman-connect-homepage-image-452.png';
import oliverWymanConnect552 from '../../assets/oliver-wyman-connect-homepage-image-552.png';
import wordleishPng from '../../assets/wordle-ish-image.png';
import wordleish337 from '../../assets/wordle-ish-image-337.png';
import wordleish452 from '../../assets/wordle-ish-image-452.png';
import wordleish552 from '../../assets/wordle-ish-image-552.png';
import rockPaperScissorsJpg from '../../assets/rock-paper-scissors-image.jpg';
import rockPaperScissors337 from '../../assets/rock-paper-scissors-image-337.webp';
import rockPaperScissors452 from '../../assets/rock-paper-scissors-image-452.webp';
import rockPaperScissors552 from '../../assets/rock-paper-scissors-image-552.webp';
import seattleLiteracyPng from '../../assets/seattle-literacy-image.png';
import seattleLiteracy337 from '../../assets/seattle-literacy-image-337.png';
import seattleLiteracy452 from '../../assets/seattle-literacy-image-452.png';
import seattleLiteracy552 from '../../assets/seattle-literacy-image-552.png';


export default function Projects() {
  const projectItems = [
    {
      title: "Oliver Wyman Connect homepage", 
      description: "Built Wordpress page from client mockups using HTML, CSS, JavaScript and PHP, and configured and styled cookie banner with OneTrust.", 
      siteURL: "https://www.oliverwymanconnect.com/login/", 
      jpg: `${oliverWymanConnectPng}`,
      webp337: `${oliverWymanConnect337}`,
      webp452: `${oliverWymanConnect452}`,
      webp552: `${oliverWymanConnect552}`
    },
    
    {
      title: "Coffee Shop site", 
      description: "Built prototype site for coffee shop using Vue, Nuxt, Axios and Sass and deployed with Netlify.", 
      siteURL: "https://festive-joliot-8258ef.netlify.app/", 
      repoURL: "https://github.com/surryjm/coffee-shop",
      jpg: `${coffeeJpg}`,
      webp337: `${coffee337}`,
      webp452: `${coffee452}`,
      webp552: `${coffee552}`
    },

    {
      title: "Wordle-ish", 
      description: "Designed variation of Wordle built on HTML, CSS and JavaScript and deployed with GitHub Pages.", 
      siteURL: "https://surryjm.github.io/wordle-clone/", 
      repoURL: "https://github.com/surryjm/wordle-clone",
      jpg: `${wordleishPng}`,
      webp337: `${wordleish337}`,
      webp452: `${wordleish452}`,
      webp552: `${wordleish552}`
    },

    {
      title: "Seattle Literacy site enhancements", 
      description: "Volunteer project for their Wordpress site. Set up staging environment and implemented CSS, accessibility and SEO improvements.", 
      siteURL: "https://seattleliteracy.org/", 
      jpg: `${seattleLiteracyPng}`,
      webp337: `${seattleLiteracy337}`,
      webp452: `${seattleLiteracy452}`,
      webp552: `${seattleLiteracy552}`
    },
  
    {
      title: "Education App", 
      description: "Group project app that allows teachers, students and parents to log in and view the site according to their role. I was responsible for connecting the front-end to the back-end. Built with MongoDB, Express, Node.js, Mustache and Bootstrap, deployed with Heroku.", 
      repoURL: "https://github.com/JS330-Education-App/final-project",
      jpg: `${educationJpg}`,
      webp337: `${education337}`,
      webp452: `${education452}`,
      webp552: `${education552}`
    },
  
    {
      title: "Rock, Paper, Scissors", 
      description: "Variation of the classic game, built with HTML, CSS (some Bootstrap) and JavaScript, using the Pexels API, deployed with Netlify.", 
      siteURL: "https://hardcore-kilby-aa9ec0.netlify.app/", 
      repoURL: "https://bitbucket.org/surryjm/jscript-310b-final-project-winter-2021/src/master/",
      jpg: `${rockPaperScissorsJpg}`,
      webp337: `${rockPaperScissors337}`,
      webp452: `${rockPaperScissors452}`,
      webp552: `${rockPaperScissors552}`
    }
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