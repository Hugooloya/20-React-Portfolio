import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio({ projects }) {
  return (
    <div className="container-fluid main-section">
      <div className="container">
        <h1 className="section-title">Portfolio</h1>
        <div className="cards-box d-flex flex-wrap justify-content-evenly">
          {projects.map((project) => (
            <div className="card-custom" key={project.key}>
              <img src={project.img} className="img-element" />
              <div className="text-wrapper">
                <div className="title-div">
                  <a href={project.url} className="card-h1 break-word">
                    {project.title}
                  </a>
                  <a className="card-icon" href={project.gitHub}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <h5 className="card-h5">{project.tech}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
