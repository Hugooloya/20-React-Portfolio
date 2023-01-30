import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container-fluid main-section">
      <div className="container">
        <div className="row">
          <h1 className="col section-title">About</h1>
          <p className="about-text word-wrap">Hi, I'm Hugo!</p>
          <p className="about-text word-wrap">
            Full stack MERN Developer from Denver, Colorado. I have been very
            passionate about computers since I was 10 years old, exactly when I
            had to leave my parents without phone line, to go online and print
            texts on how HTML tags work and bash commands tutorials. Yes, I'm
            that old. After many years of school and math, I thought computers
            might not be my strongest skill and pursued filmmaking and
            photography. Well, turns out I discovered my potential to combine
            creativity with logical thinking, front-end people call it.
          </p>
          <p className="about-text word-wrap">
            I completed my Full Stack MERN Development certificate at the
            University of Denver Coding Boot Camp, where I acquired my skills.
            Paying attention to details has been one of my strongest guidelines
            when it comes to my work, since I believe it makes a huge
            difference.
          </p>
        </div>
      </div>
    </div>
  );
}
