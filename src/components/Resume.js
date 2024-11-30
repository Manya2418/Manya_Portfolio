import React from "react";

const Resume = () => {
  return (
    <section id="resume">
    <h1 class="sub-heading">Resume</h1>
    <div class="divider"></div>
    <p class="sub-para">
        Dynamic IT enthusiast skilled in MERN Stack, Java, and data structures. Seeking a software development role to 
        contribute effectively to innovative tech projects as a team member.
    </p>

    <div class="resume-row">
        <div class="resume-cols">
            <h2>Education</h2>
            <div class="my-info">
                <h3>Bachelor of Technology - Computer Science and Engineering</h3>
                <span class="sp-box">Nov 2021 - June 2025</span>
                <p>Samrat Ashok Technological Institute, Vidisha, M.P., India</p>
                <ul>
                    <li>CGPA: 8.15</li>
                </ul>
            </div>
            <div class="my-edu">
                <h3>Higher Secondary Education</h3>
                <span class="sp-box">July 2020 - June 2021</span>
                <p>Govt. MLB Girls Hr. Sec. School, Vidisha, M.P.</p>
                <ul>
                    <li>Percentage: 93.80%</li>
                </ul>
            </div>
            <div class="my-edu">
                <h3>High School Education</h3>
                <span class="sp-box">June 2018 - May 2019</span>
                <p>Saraswati Shishu Mandir, Vidisha, M.P.</p>
                <ul>
                    <li>Percentage: 94.60%</li>
                </ul>
            </div>
        </div>

        <div class="resume-cols">
            <h2>Experience</h2>
            <div class="pro-exp">
                <h3>Web Developer Intern - Null Class</h3>
                <span class="sp-box">Feb 2024 – June 2024</span>
                <p>Project: Tech Stack Overflow</p>
                <ul>
                    <li>Tech Stack: React, Node.js, Express.js, MongoDB Atlas, Tailwind CSS, JWT, bcrypt.</li>
                    <li>Developed a scalable MERN stack application with 1,000+ active users.</li>
                    <li>Implemented JWT authentication and bcrypt encryption to enhance security.</li>
                </ul>
            </div>
            <div class="pro-exp">
                <h3>Full Stack Web Developer Intern - Web Stack Academy</h3>
                <span class="sp-box">Aug 2023 – Oct 2023</span>
                <p>Project: Food Delivery Application</p>
                <ul>
                    <li>Tech Stack: React, Node.js, Express.js, MongoDB Atlas, Tailwind CSS, Stripe, Redux Toolkit, JWT, bcrypt.</li>
                    <li>Enhanced user engagement by 25% with advanced email-based password recovery and encrypted authentication.</li>
                    <li>Developed real-time cart and order processing functionalities, ensuring system reliability.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

  );
};

export default Resume;
