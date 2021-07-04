import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">User Details</Navbar.Brand>
        <Nav>
        <Nav.Link href="adduser" style={{color:"white",fontSize:"18px"}}>Add-New-Users</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
