import React from "react";

function Achievement() {
  
  return (
    <section id="about">
      <h1 className="sub-heading">Programming Milestones</h1>
      <div className="divider"></div>
      <p> You can find me on various programming platforms and professional websites such as LinkedIn, GitHub, GeeksforGeeks, and LeetCode.Through consistent effort and dedication, I have solved numerous problems across various platforms, honing my problem-solving skills.</p>
      <div className="about-col" >
        <div className="img-col" style={{flexBasis: "50%",flexDirection:"column"}}>
          <img src="./Images/leetprofile.png" alt="" /><br/>
          <a   href="https://leetcode.com/u/Manya123/" class="know-btn">
             Leetcode   Profile<i class="fas fa-arrow-right arrow"></i></a>
        </div> 
        <div className="img-col" style={{flexBasis: "50%",flexDirection:"column"}}>
          <img src="./Images/gfgprofile.png" alt="About Me" /><br></br>
          <a   href="https://www.geeksforgeeks.org/user/manyasm4rk/" class="know-btn">
          GeeksforGeeks Profile  <i class="fas fa-arrow-right arrow"></i></a>
        </div>
       
      </div>
    </section>
  );
}

export default Achievement;