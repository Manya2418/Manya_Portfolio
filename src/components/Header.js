import React from "react";
import SocialIcons from "./SocialIcons";

function Header() {
  return (
    <header>
      <div className="profile">
        <img src="./Images/profile.jpg" alt="Profile" />
        <h1>Manya Sahu</h1>
        <SocialIcons />
      </div>
      <nav>
        <ul>
          <li><a href="#home" className="active"><i className="fa-solid fa-house"></i> Home</a></li>
          <li><a href="#about"><i className="fa-solid fa-user"></i> About Me</a></li>
          <li><a href="#resume"><i className="fa-solid fa-briefcase"></i> Resume</a></li>
          <li><a href="#project"><i className="fa-solid fa-code"></i>Project</a></li>
          <li><a href="#portfolio"><i className="fa-solid fa-certificate"></i> Certifcation</a></li>
          <li><a href="#contact"><i className="fa-solid fa-envelope"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
