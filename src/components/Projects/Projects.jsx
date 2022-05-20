import React from 'react';
import Project from '../Project/Project';
import './Projects.scss';

// const projectItems = [
//   {title: "Coffee Shop website", 
//   description: "A prototype site for my friend's coffee shop, Ten Ton Coffee. Made with Vue, Nuxt, Axios, SCSS and deployed with Netlify", 
//   siteURL: "https://festive-joliot-8258ef.netlify.app/", 
//   repoURL: "https://github.com/surryjm/coffee-shop"},

//   {title: "Education App", 
//   description: "Group project app that allows teachers, students and parents to log in and view the site according to their role - built with MongoDB, Express, Node.js, Mustache and Bootstrap, deployed with Heroku", 
//   siteURL: "https://dry-wave-18780.herokuapp.com/", 
//   repoURL: "https://github.com/JS330-Education-App/final-project"}
// ]

function Projects() {

  return (
    <section id="projects">
      <div className="wrapper">
        <h2>Projects</h2>
        <p className="subtitle">A Few Things I've Built</p>
        <div className="projects-container">
          <Project />
          {/* {projectItems.map((item) => (
            <Project title={item.title} description={item.description} siteURL={item.siteURL} repoURL={item.repoURL} />
          ))} */}
          {/* <div className="project-tile">
            <div className="project-image-text">
              <picture>
                <source 
                  sizes="(min-width: 501px) 452px,
                        (min-width: 769px) 337px,
                        (min-width: 1025px) 452px,
                        (min-width: 1201px) 552px"  
                  srcSet="/assets/coffee-shop-image-337.webp 337w,
                          /assets/coffee-shop-image-452.webp 452w,
                          /assets/coffee-shop-image-552.webp 552w"
                  type="image/webp" />
                <source 
                  srcSet={education}
                  type="image/jpeg" />
                <img 
                  src="/assets/coffee-shop-image.jpg" 
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
          <div className="project-tile">
            <div className="project-image-text">
              <picture>
                <source 
                  sizes="(min-width: 501px) 452px,
                        (min-width: 769px) 337px,
                        (min-width: 1025px) 452px,
                        (min-width: 1201px) 552px"  
                  srcSet="/src/assets/education-app-image-337.webp 337w,
                          /src/assets/education-app-image-452.webp 452w,
                          /src/assets/education-app-image-552.webp 552w"
                  type="image/webp" />
                <source 
                  type="image/jpeg" 
                  srcSet="/src/assets/education-app-image.jpg"/>
                <img 
                  src={education}
                  alt="Education-app-project" 
                  width="524" 
                  height="331" 
                  className="project-image"/>
              </picture>
              <div className="project-title">
                <div>
                  <h3>Education App</h3>
                  <p>Group project app that allows teachers, students and parents to log in and view the site according to their role - built with MongoDB, Express, Node.js, Mustache and Bootstrap, deployed with Heroku</p>
                </div>
                <div>
                  <a href="https://dry-wave-18780.herokuapp.com/" target="_blank" className="project-link"><span>View Site</span></a>
                  <a href="https://github.com/JS330-Education-App/final-project" target="_blank" className="project-github"><span>View Github</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-tile">
            <div className="project-image-text">
              <picture>
                <source 
                  sizes="(min-width: 501px) 452px,
                        (min-width: 769px) 337px,
                        (min-width: 1025px) 452px,
                        (min-width: 1201px) 552px"  
                  srcset="images/contact-form-image-337.webp 337w,
                          images/contact-form-image-452.webp 452w,
                          images/contact-form-image-552.webp 552w"
                  type="image/webp" />
                <source 
                  type="image/jpeg" 
                  srcset="images/contact-form-image.jpg"/>
                <img 
                  src="images/contact-form-image.jpg" 
                  alt="Contact-Form-project" 
                  width="551" 
                  height="348" 
                  className="project-image"/>
              </picture>
              <div className="project-title">
                <div>
                  <h3>Contact Form</h3>
                  <p>Made with React, Firebase for the database, Axios and Nodemailer to email the form submission, Google reCAPTCHA v2 to prevent spam and deployed via Netlify</p>
                </div>
                <div>
                  <a href="https://cocky-wing-2d8006.netlify.app/" target="_blank" className="project-link"><span>View Site</span></a>
                  <a href="https://github.com/surryjm/contact-form-2" target="_blank" className="project-github"><span>View Github</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-tile">
            <div className="project-image-text">
              <picture>
                <source 
                  sizes="(min-width: 501px) 452px,
                        (min-width: 769px) 337px,
                        (min-width: 1025px) 452px,
                        (min-width: 1201px) 552px"  
                  srcset="images/rock-paper-scissors-image-337.webp 337w,
                          images/rock-paper-scissors-image-452.webp 452w,
                          images/rock-paper-scissors-image-552.webp 552w"
                  type="image/webp" />
                <source 
                  type="image/jpeg" 
                  srcset="images/rock-paper-scissors-image.jpg"/>
                <img 
                  src="images/rock-paper-scissors-image.jpg" 
                  alt="Rock-Paper-Scissors-project" 
                  width="524" 
                  height="331" 
                  className="project-image"/>
              </picture>
              <div className="project-title">
                <div>
                  <h3>Rock, Paper, Scissors</h3>
                  <p>A simple setup of the classNameic game, built with HTML, CSS (some Bootstrap) and JavaScript, using the Pexels API, deployed with Netlify</p>
                </div>
                <div>
                  <a href="https://hardcore-kilby-aa9ec0.netlify.app/" target="_blank" className="project-link"><span>View Site</span></a>
                  <a href="https://bitbucket.org/surryjm/jscript-310b-final-project-winter-2021/src/master/" target="_blank" className="project-github"><span>View Bitbucket</span></a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
  </section>
  )
}

export default Projects;