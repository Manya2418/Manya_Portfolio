import React from "react";

function About() {
  
  return (
    <section id="about">
      <h1 className="sub-heading">About Me</h1>
      <div className="divider"></div>
      <p>Dynamic IT enthusiast skilled in MERN Stack, Java, and data structures.Seeking a software development role to apply
                these skills to contribute effectively to innovative tech projects as a team member.
                I am a hardworking and passionate individual with a strong focus on delivering efficient and innovative solutions. My adaptability and problem-solving mindset enable me to tackle challenges effectively. With a curious nature and resilience, I am always eager to learn and grow, staying updated with the latest trends and technologies.    
             </p>
      <div className="about-col">
        
        <div className="info-col">
          <h2>Java Enthusiast</h2>
          <p>I am passionate about Java programming, with a strong focus on Data Structures and Algorithms.I enjoy solving complex problems and designing efficient solutions that showcase my analytical and logical skills.</p>
          <div className="icon-list-col">
            <div className="icon-list">
              <ul>
              <li><i className="fa-solid fa-angle-right"></i> <strong>Email:</strong> <span>manyasahu94@gmail.com</span></li>
            
                <li><i className="fa-solid fa-angle-right"></i> <strong>Phone:</strong> <span>8878445003</span></li>
                <li><i className="fa-solid fa-angle-right"></i> <strong>City:</strong> <span>Vidisha</span></li>
              </ul>
            </div>
            <div className="icon-list">
              <ul>
                <li><i className="fa-solid fa-angle-right"></i> <strong>Degree:</strong> <span>Bachelors of Technology</span></li>
                <li><i className="fa-solid fa-angle-right"></i> <strong>Branch:</strong> <span>Computer Science and Engineering</span></li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
