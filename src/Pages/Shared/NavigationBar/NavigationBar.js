import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand><span className="fw-bolder fs-2 fst-italic">shop DaZZling<i className="fas fa-feather"></i></span></Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link> <NavLink className="custom-nav-text" to="/home">Home</NavLink></Nav.Link>

                        <Nav.Link><NavLink className="custom-nav-text" to="/login">LogIn</NavLink></Nav.Link>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;