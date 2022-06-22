import React from 'react';
import {Link} from "react-router-dom";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";


export default function Menu(props) {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href='#home'>Segurita</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-bar">
                    <Nav classname="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Registrarse</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}