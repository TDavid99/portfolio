// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
// import Navbar from "react-bootstrap/Navbar";
// import { Container } from "react-bootstrap";

// function Nav(props) {
//   const { portfolioPages = [], setCurrentPage, currentPage } = props;

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentPage.name);
//   }, [currentPage]);

//   return (
//     <Navbar collapseOnSelect expands="lg" bg="light" fixed="top" id="Nav">
//       <Container>
//         <Navbar.Brand herf="/portfolio/" className="navbar-brand">
//           {'/portfolio'}
//           David Townsend
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse
//           className="justify-content-end"
//           id="responsive-navbar-nav"
//         >
//           <ul className="navbar-nav ml-auto">
//             {portfolioPages.map((Page) => (
//               <li
//                 className={`nav-item nav-link ${
//                   currentPage.name === Page.name && "active"
//                 }`}
//                 key={Page.name}
//               ></li>
//             ))}
//           </ul>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


// export default Nav; 