import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavigationBar.css';

const NavigationBar = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand><span className="fw-bolder fs-2 fst-italic">shop DaZZling<i className="fas fa-feather"></i></span></Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link> <NavLink className="custom-nav-text" to="/home">Home</NavLink></Nav.Link>

                        <Nav.Link> <NavLink className="custom-nav-text" to="/exploreProducts">Explore More</NavLink></Nav.Link>

                        {
                            user.email && <Nav.Link> <NavLink className="custom-nav-text" to="/dashboard">Dashboard</NavLink></Nav.Link>
                        }

                        {
                            user.email && <Navbar.Text>
                                WC! {user.displayName}
                            </Navbar.Text>
                        }

                        {
                            user.email ?
                                <button onClick={logOut}
                                    className="btn btn-outline-dark ms-2"
                                >Log Out</button>
                                :
                                <Nav.Link><NavLink className="custom-nav-text" to="/login">LogIn</NavLink></Nav.Link>
                        }

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;