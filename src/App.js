import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About";
import Porfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import projects from "./projects";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" />
        <About />
        <Route path="/Contact" />
        <Contact />
        <Route path="/Portfolio" />
        <Porfolio projects={projects} />
        <Route path="/Resume" />
        <Resume />
      </Switch>
      <Footer />
    </>
  );
}
