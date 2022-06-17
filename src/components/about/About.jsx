import React from 'react'
import "./about.css";
import Me from "../../img/Arun.jpg";

const About = () => {
  return (
    <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img
          src={Me}
          alt=""
          className="a-img"
        />
      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
       I'm a Full-Stock-developer from Anantapur, India.
      </p>
      <p className="a-desc">
        I enjoy taking complex problems and turning them into simple and beautiful interface designs. Also love the logic and 
        structure of coding and always strive to write elegant and efficient code. I love spending time on fixing little details and 
        optimizing web apps. Also I like working in a team.
      </p>
      <div className="a-award">
        <div className="a-award-texts">
          <h4 className="a-award-title">My Skills</h4>
          <p className="a-award-desc">
            HTML, CSS, Javascript, Core Java, Node.js, Express.js, SQL, MongoDB
          </p>
        </div>
      </div>
    </div>
  </div>
);
};

export default About;