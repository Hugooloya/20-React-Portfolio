import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Porfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Porfolio />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer /> */}
    </>
  );
}
