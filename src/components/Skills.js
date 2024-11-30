import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", percentage: 85 },
    { name: "JAVA", percentage: 80 },
    { name: "CSS", percentage: 80 },
    { name: "MERN STACK Development", percentage: 50 },
    { name: "SQL", percentage: 45 },
  ];

  return (
    <section id="skill">
      <h1 className="sub-heading">Skills</h1>
      <div className="divider"></div>
      <p className="sub-para">I possess a strong foundation in programming and problem-solving, enabling me to build efficient and dynamic web applications. With experience in both frontend and backend development, I focus on creating seamless, high-performance solutions. My skills in system operations and database management ensure robust, scalable projects, and I’m committed to continuous learning and improvement.</p>
      <div className="skill-row">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-info">
              <h2>{skill.name}</h2>
              <h2>{skill.percentage}%</h2>
            </div>
            <div className="skill-outter-line">
              <div className="skill-inner-line" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
