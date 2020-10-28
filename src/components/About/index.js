import React from "react";
import "./style.css";
import "../app.css";
const About = (props) => (
  <div className="about-box box-border d-inline-block">
    <img
      id="auth-image"
      className="img-fluid"
      src="./images/mypic.jpg"
      alt="Md. Bepul Hossain"
    />
    <p className="text-left">
      <strong>Summary:</strong> I am a self-motivated passionate developer and
      feel true love for coding. I am a Junior full stack web developer
    </p>
    <p className="text-left">
      I have experience making software and web apps. I solved more than 200+
      realworld problems in several online judges like Hacker Rank, Light OJ and
      URI. I solved maximum problems using JavaScript(node.js) programming
      language. In last 1 years, I totally focused on web app development.
    </p>
    <p className="text-left">
      <strong>I am most skilled in:</strong>
      Node.js, express.js, react, bootstrap 4 and mongo DB.
    </p>
  </div>
);

export default About;
