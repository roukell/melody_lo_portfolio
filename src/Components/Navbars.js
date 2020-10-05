import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navbars = () =>
    (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='stickyNavbar'>
                <Navbar.Brand href="/">Melody Lo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://docs.google.com/document/d/1YKEJuD0zNYsoyLNUBiFoy4sHzG5fs56CXmOLfGj6l8w/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                        <Nav.Link href="/project">Project</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="mailto:yiling.melody.lo@gmail.com" rel="noopener noreferrer">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );


export default Navbars;