import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import radar from "../img/radarDragon.png"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { ApiContext } from "../context/ApiProvider";

const MyNavBar = () => {
  const { searchCharacter, search } = useContext(ApiContext);

  return (
    <Navbar bg="light" expand="lg" style={{ height: "80px", border: "none" }}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={radar} alt="" className="radarCris" />El-RADAR.CL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="centercris" id="navbarScroll">
          <Nav
            className=" mx-5 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <input
              type="text"
              className=" form-control "
              placeholder="Buscar personaje !"
              value={search}
              onChange={searchCharacter}
              style={{ width: "700px", border: "none" }}
            />
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
