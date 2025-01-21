import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project-card">
          <img src="/assets/images/Project1.png" alt="ShiftSmart Project" />
          <h3>ShiftSmart</h3>
          <p>A worker scheduling app to manage worker assignments efficiently.</p>
          <a href="/assets/images/Project1.png" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <img src="/assets/images/Project3.png" alt="Movie Tickets Booking App" />
          <h3>Movie Tickets Booking App</h3>
          <p>A ticket booking application for easy movie reservations.</p>
          <a href="/assets/images/Project3.png" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <img src="/assets/images/Project2.png" alt="Task Manager App" />
          <h3>Coffee App</h3>
          <p>A fully responsive coffee details App with modern UI/UX design.</p>
          <a href="/assets/images/Project2.png" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* <div className="project-card">
          <img src="/assets/images/Project5.png" alt="Fitness Tracker UI" />
          <h3>WhatsApp UI </h3>
          <p>A UI design for tracking fitness goals and progress.</p>
          <a href="/assets/images/WhatsApp_Img.png" target="_blank" rel="noopener noreferrer">View Project</a>
        </div> */}
        <div className="project-card">
          <img src="/assets/images/Travel_img.png" alt="Travel app" />
          <h3>Travel App</h3>
          <p>Travelling App with Hotel,Location ,Food and Activities Information.</p>
          <a href="/assets/images/Travel_img.png" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
