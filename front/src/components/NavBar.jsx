import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from '../images/Logo.svg'

const NavBar = () => {

    return ( 
        <Navbar className="color" variant="dark" expand={true}>
            <Container fluid>
                <Navbar.Brand href="/">       
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <img
                            alt="Logo"
                            src={Logo}
                            width="60"
                            height="40"
                            className="d-inline-block"
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;