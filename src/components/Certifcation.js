import React from "react";


<style>
  
</style>
const CertificationItem = ({ image, title, description, link }) => (
  <div className="port-item">
    <div className="port-img">
      <img src={image} alt={title} />
    </div>
    <div className="port-info">
      <h4>{title}</h4>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-up-right-from-square"></i>
        </a>
      )}
    </div>
  </div>
);

const Certifications = () => {
  return (
  <>
    <section id="portfolio">
      <h1 className="sub-heading">Certifications</h1>
      <div className="divider"></div>
      <p className="sub-para">
        I am a certified professional in Java programming with a strong academic foundation, including recognition through prestigious scholarships. My journey includes completing various training programs that have enriched my technical expertise and problem-solving skills. These experiences reflect my commitment to continuous learning and professional growth.
      </p>

      <div className="port-row">
        <CertificationItem
          image="/Certifications/tcs.jpg"
          title="Employment Program"
          description="Completed the TCS Youth Employment Program, gaining essential skills in communication, problem-solving, and workplace readiness."
        />
        <CertificationItem
          image="/Certifications/NullClass-undefined-Training-Certificate (1)_page-0001.jpg"
          title="Web Development"
          description="Completed a web development training program at Null Class. Enhanced skills in modern web technologies, including React, Node.js, and MongoDB."
        />
        {/* <CertificationItem
          image="/Certifications/Manya Sahu Miety Certificate_page-0001.jpg"
          title="Web Development"
          description="Completed a comprehensive web development training at BECIL, gaining hands-on experience in creating responsive and user-friendly web pages."
        /> */}
        <CertificationItem
          image="/Certifications/MP FITT IITD Artificial Intelligence Builder Certificate_678_page-0001.jpg"
          title="Artificial Intelligence"
          description="Successfully completed the Artificial Intelligence Builder program at MP FITT, Delhi, enhancing skills in AI model development and deployment."
        />
        <CertificationItem
          image="/Images/NPTEL_page-0001.jpg"
          title="NPTEL"
          description="Completed NPTEL Online Certification in Java Programming, acquiring in-depth knowledge of core Java concepts, object-oriented programming, and application development."
        />
        <CertificationItem
          image="/Images/HackFest_page-0001.jpg"
          title="HeckFest’24"
          description="Secured 13th place out of 1,200+ participants nationwide, competing against 25 teams from IIT (ISM) Dhanbad."
        />
        <CertificationItem
          image="/Certifications/cummins.jpg"
          title="Cummins Scholarship"
          description="Awarded scholarship including a laptop and financial support for academic years 2023-2024 and 2024-2025."
        />
      </div>
    </section>


    <section id="about">
      <h1 className="sub-heading">Cummins Scholarship Recipient</h1>
      <div className="divider"></div>
      <p>After successfully clearing the written exam and interview, I was awarded the Cummins Scholarship for the academic year 2023-24, recognizing my dedication to academic excellence. As part of the scholarship, I received financial assistance along with a new laptop, a bag, and full coverage of my academic fees.his recognition fuels my passion for continuous learning and professional growth.</p>
         <div className="about-col" >
        <div className="scholar-col">
        
          <img src="./Images/lap.jpeg" alt="" style={{border:"5px solid white"}}/>
        </div> 
        <div className="scholar-col">
          <img src="./Images/letter.jpeg" alt="" />
        </div>
       
      </div>
    </section></>




  );
};

export default Certifications;
