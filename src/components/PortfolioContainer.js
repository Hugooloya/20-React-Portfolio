// import React, { useState } from "react";
// import NavTabs from "./NavTabs";
// import About from "./pages/About";
// import Porfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState("About");

//   const renderPage = () => {
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Portfolio") {
//       return <Porfolio />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//     return <Resume />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//     </div>
//   );
// }
