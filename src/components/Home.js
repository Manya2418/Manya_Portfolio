import React, { useEffect } from "react";
import Typed from "typed.js";

function Home() {
  useEffect(() => {
    const typed = new Typed(".auto-input", {
      strings: ["Java Developer", "React Developer", "MERN Stack Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const MenuBtn = document.getElementById("MenuBtn");

    const handleMenuToggle = () => {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      MenuBtn.classList.toggle("fa-xmark");
    };

    if (MenuBtn) {
      MenuBtn.addEventListener("click", handleMenuToggle);
    }

    // Clean up event listener on unmount
    return () => {
      if (MenuBtn) {
        MenuBtn.removeEventListener("click", handleMenuToggle);
      }
    };
  }, []);

  return (
    <section id="home">
      <div id="MenuBtn">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source
            src="./Images/1851190-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="home-row">
        <h1>
          Hi, I'm <br /> Manya Sahu<span></span>
        </h1>
        <p>
          I'm a <span className="auto-input">Java Developer</span>
        </p>
        <br />
        <p style={{ fontSize: "18px" }}>
          I specialize in crafting efficient and user-friendly web applications
          using MERN Stack and I am a passionate tech enthusiast with a strong
          focus on Java programming. My dedication to learning and solving
          complex challenges drives me to create innovative solutions.
        </p>
        <br />
        <a
          href="https://drive.google.com/file/d/15X18T2E2eEHfzG0OFKgR04zJTZUE0qZa/view?usp=sharing"
          className="know-btn"
        >
          Resume <i className="fas fa-arrow-right arrow"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;
