import React from 'react';

function Header(props) {
    return (
        <header>
            {props.children}
        </header>
    );
}

// export default Header;
// import Navigation from "../Navigation";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";

// const Header = ({ handlePageChange }) => {
//   return (
//     <Container fluid>
//       <Navbar
//         bg="light"
//         variant="light"
//         sticky="top"
//         expand="lg"
//         className="navbar"
//       >
//         <Navbar.Brand href="#home" className="name">
//             David Townsend
//         </Navbar.Brand>
//         <Navigation handlePageChange={handlePageChange}></Navigation>
//       </Navbar>
//     </Container>
//   );
// };

export default Header;
