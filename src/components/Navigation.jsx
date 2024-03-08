import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 


export const Navigation = () => {
    return (
        <div className='navigationBar'>
             
             <Navbar collapseOnSelect expand="lg" className="body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">React Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/"> Home </Nav.Link>
                            <Nav.Link as={Link} to="/projects"> Projects </Nav.Link>
                            <Nav.Link as={Link} to="/experience"> Experience </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
