import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
// import PortfolioContainer from "./components/PortfolioContainer";

export default function App() {
  return (    
      <>
      <Header/>
      <Navigation/>
      <Footer/>
      </>
      // <PortfolioContainer />
      );
}

// Reorganizar las carpetas de componentes
// Copiar y organizar el CSS de cada componente
// Hacer el navbar responsivo
// Agregar foto a la pestaña de About
// Terminar pestaña de Portfolio
    // Crear carpeta de imagenes y poner todas las imagenes ahi
    // Creas archivo de projects.js y crear objeto con toda la informacion de los proyectos
    // EJEMPLO:
    // {
    //   IMG:
    //   PROJECT TITLE:
    //   DEPLOYED URL:
    //   REPO URL
    // }
    // Renderizar todas las tarjetas con un metodo map()
// Agregar logica a la pestaña de contacto. Quiza un required a cada tag
// Agregar el link de descarga de mi resume
// Hacer el footer