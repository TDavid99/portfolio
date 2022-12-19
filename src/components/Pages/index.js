import React from "react";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Resume from "../Resume";

function Pages({ currentPage }) {
  const showpage = () => {
    switch (currentPage.name) {
      case "about Me":
        return <About />;
      case "portfolio":
        return <Projects />;
      case "contact":
        return <Contact />;

      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return <div>{showpage()}</div>;
}

// function pages() {
//     return (
//         <div> This is pages...</div>

// )
// }
export default Pages;
