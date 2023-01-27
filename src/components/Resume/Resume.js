import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1>Resume</h1>
        <h2>Front-end Proficiencies</h2>
        <ul className="ulEl">
          <li className="test">HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2>Back-end Proficiencies</h2>
        <ul className="ulEl">
          <li>API's</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequilize</li>
          <li>RMongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        <h3>Download my resume</h3>
      </div>
    </div>
  );
}
