import React from 'react';
import '../Project/Project.scss';
import Image from '../Image/Image';

const projectItems = [
  {title: "Coffee Shop website", 
  description: "A prototype site for my friend's coffee shop, Ten Ton Coffee. Made with Vue, Nuxt, Axios, SCSS and deployed with Netlify", 
  siteURL: "https://festive-joliot-8258ef.netlify.app/", 
  repoURL: "https://github.com/surryjm/coffee-shop"},

  {title: "Education App", 
  description: "Group project app that allows teachers, students and parents to log in and view the site according to their role - built with MongoDB, Express, Node.js, Mustache and Bootstrap, deployed with Heroku", 
  siteURL: "https://dry-wave-18780.herokuapp.com/", 
  repoURL: "https://github.com/JS330-Education-App/final-project"}
]

export default function Project() {
  return (
    projectItems.map((item, key) => (
    <div className="project-tile" key={key}>
      <div className="project-image-text">
        <Image />
        <div className="project-title">
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div>
            <a href={item.siteURL} target="_blank" className="project-link"><span>View Site</span></a>
            <a href={item.repoURL} target="_blank" className="project-github"><span>View Github</span></a>
          </div>
        </div>
      </div>
    </div>
    ))
  )
}