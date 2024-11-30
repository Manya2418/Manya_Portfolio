import React from "react";

import animationData from '../Animation - 1718964159827.json'
import Lottie from 'lottie-react'
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1 className="sub-heading">Contact</h1>
        <div className="divider"></div>
        <p className="sub-para">
         Feel free to connect with me via email at manyasahu94@gmail.com.
        </p>

        <div className="contact-row">
          <div className="contact-left">
            

            
          <Lottie animationData={animationData} loop={true} />

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.005124523527!2d77.80263477324554!3d23.53231809711773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c04451f93c4d9%3A0x643842294141ff59!2sGRJ4%2BW36%20RAGHAVJI%20COLONY%2C%20NADIPURA%2C%20Vaishali%20Nagar%2C%20Vidisha%2C%20Madhya%20Pradesh%20464001!5e0!3m2!1sen!2sin!4v1732261275210!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="contact-right">
            <form action="">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <textarea
                name="msg"
                rows="9"
                id="msg"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" class="know-btn">Submit</button>
            </form>
          </div>
        </div>
       
      </section>
      <p className="footer-box">&copy; 2024 Manya Sahu. All Rights Reserved.</p>
    </>
  );
};

export default Contact;
