import React from "react";

const Projects = () => {
  return (
    <section id="project">
      <h1 className="sub-heading">Projects</h1>
      <div className="divider"></div>
      <p>
        Developed multiple projects using the MERN stack, implementing features
        like user authentication, payment integration, and CRUD operations.
        Leveraged MongoDB, Express.js, React, and Node.js to build dynamic,
        scalable, and user-friendly web applications.
      </p>
      <div className="project-col">
        <div
          className="project-img"
          style={{ flexBasis: "65%" }}
        >
          <video autoPlay muted loop className="project-video">
            <source src="./Images/Untitled design (2).mp4" type="video/mp4" />
          </video>
        </div>

        <div className="project-info">
          <h2>Food Delivery Application</h2>
          <p>
            Architected a MERN stack food delivery application, integrating
            Stripe for secure payment processing and JWT for user
            authentication, handling over 500 active users.
          </p>
          <div style={{fontSize:'25px'}}>
          <p class="tech-stack">React
            </p>
            <p class="tech-stack">Node.js</p>
            <p class="tech-stack">Express.js</p>
            <p class="tech-stack">MongoDB Atlas</p>
            <p class="tech-stack">Tailwind CSS</p>
            <p class="tech-stack">JWT</p>
            <p class="tech-stack">bcrypt</p>
        </div><br></br><a href="https://github.com/Manya2418/Mern_ProjectFood" class="know-btn">
    Know More <i class="fas fa-arrow-right arrow"></i>
  </a></div>
        
      </div>

      <div className="project-col">
        <div className="project-info" style={{borderLeft:"none"}}>
          <h2>Tech Stack Overflow</h2>
          <p>
            Engineered a scalable MERN stack application, supporting 1,000+ users
            with 99% uptime. Implemented JWT authentication and bcrypt encryption,
            resulting in a 30% increase in user engagement.
          </p>
          <div>

            <p class="tech-stack">React
            </p>
            <p class="tech-stack">Node.js</p>
            <p class="tech-stack">Express.js</p>
            <p class="tech-stack">MongoDB Atlas</p>
            <p class="tech-stack">Tailwind CSS</p>
            <p class="tech-stack">JWT</p>
            <p class="tech-stack">bcrypt</p>
            <p class="tech-stack">Stripe</p>

          </div><br></br>
          <a href="https://github.com/Manya2418/TechieTalk" class="know-btn" >
            
    Know More <i class="fas fa-arrow-right arrow"></i>
  </a>

        </div>
        <div className="project-img" style={{ flexBasis: "65%" }}>
          <video autoPlay muted loop className="project-video">
            <source src="./Images/Untitled design (3).mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="project-col">
        <div className="project-img" style={{ flexBasis: "65%" }}>
          <video autoPlay muted loop className="project-video">
            <source src="./Images/Untitled design (4).mp4" type="video/mp4" />
          </video>
        </div>

        <div className="project-info">
          <h2>Basic Banking System</h2>
          <p>
            Engineered a Basic Banking System using PHP and SQL, streamlining
            financial transactions for over 200 users and ensuring efficient
            database management. Utilized Bootstrap to develop a responsive and
            user-friendly interface, increasing user satisfaction by 20%.
          </p>
          <div>

            <p class="tech-stack">PHP
            </p>
            <p class="tech-stack">SQL</p>
            <p class="tech-stack">Bootstrap</p>
          </div><br></br>
          <a href="https://github.com/Manya2418/BasicBankingSystem" class="know-btn">
    Know More <i class="fas fa-arrow-right arrow"></i>
  </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
