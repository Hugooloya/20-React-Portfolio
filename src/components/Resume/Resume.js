import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="container-fluid main-section">
      <div className="container">
        <h1 className="section-title">Resume</h1>
        <h2 className="list-title">Front-end Proficiencies</h2>
        <ul className="list-elements">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2 className="list-title">Back-end Proficiencies</h2>
        <ul className="list-elements">
          <li>API's</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequilize</li>
          <li>RMongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        <h3 className="resume-element">Download my resume.</h3>
      </div>
    </div>
  );
}
