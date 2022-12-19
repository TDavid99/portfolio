import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

function Navigation(props) {
  const { portfolioPages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <Navbar collapseOnSelect expands="lg" bg="dark" fixed="top" id="Nav">
      <Container>
        <Navbar.Brand herf="/projects/" className="navbar-brand">
          {/* {'/projects/'} */}
          David Townsend
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <ul className="navbar-nav ml-auto">
            {portfolioPages.map((Page) => (
              <li
                className={`nav-item nav-link ${
                  currentPage.name === Page.name && "active"
                }`}
                key={Page.name}
              ><span onClick={()=> setCurrentPage(Page)}>{capitalizeFirstLetter(Page.name)}</span>
              </li>
            ))}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
