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
import contactJpg from '../../assets/contact-form-image.jpg';
import contact337 from '../../assets/contact-form-image-337.webp';
import contact452 from '../../assets/contact-form-image-452.webp';
import contact552 from '../../assets/contact-form-image-552.webp';
import rockPaperScissorsJpg from '../../assets/rock-paper-scissors-image.jpg';
import rockPaperScissors337 from '../../assets/rock-paper-scissors-image-337.webp';
import rockPaperScissors452 from '../../assets/rock-paper-scissors-image-452.webp';
import rockPaperScissors552 from '../../assets/rock-paper-scissors-image-552.webp';


function Projects() {
  const projectItems = [
    {
      title: "Coffee Shop website", 
      description: "A prototype site for my friend's coffee shop, Ten Ton Coffee. Made with Vue, Nuxt, Axios, SCSS and deployed with Netlify", 
      siteURL: "https://festive-joliot-8258ef.netlify.app/", 
      repoURL: "https://github.com/surryjm/coffee-shop",
      jpg: `${coffeeJpg}`,
      webp337: `${coffee337}`,
      webp452: `${coffee452}`,
      webp552: `${coffee552}`
    },
  
    {
      title: "Education App", 
      description: "Group project app that allows teachers, students and parents to log in and view the site according to their role - built with MongoDB, Express, Node.js, Mustache and Bootstrap, deployed with Heroku", 
      siteURL: "https://dry-wave-18780.herokuapp.com/", 
      repoURL: "https://github.com/JS330-Education-App/final-project",
      jpg: `${educationJpg}`,
      webp337: `${education337}`,
      webp452: `${education452}`,
      webp552: `${education552}`
    },
  
    {
      title: "Contact Form", 
      description: "Made with React, Firebase for the database, Axios and Nodemailer to email the form submission, Google reCAPTCHA v2 to prevent spam and deployed via Netlify", 
      siteURL: "https://cocky-wing-2d8006.netlify.app/", 
      repoURL: "https://github.com/surryjm/contact-form-2",
      jpg: `${contactJpg}`,
      webp337: `${contact337}`,
      webp452: `${contact452}`,
      webp552: `${contact552}`
    },
  
    {
      title: "Rock, Paper, Scissors", 
      description: "A simple setup of the classic game, built with HTML, CSS (some Bootstrap) and JavaScript, using the Pexels API, deployed with Netlify", 
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
        <p className="subtitle">A Few Things I've Built</p>
        <div className="projects-container">
          <Project projects={projectItems}/>
        </div>
      </div>
  </section>
  )
}

export default Projects;