import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation  = () => {

return (
    <Navbar expand="sm" collapseOnSelect className="navigation" >
        <Navbar.Brand href="/home"  className="fs-1">
            <h1 className="logo">SeroweLove</h1></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav className="ms-auto">
                <Nav.Item>
                    <Nav.Link href="#about-me">O mnie</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#offer">Oferta</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#contact">Kontakt</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)};

export default Navigation;
