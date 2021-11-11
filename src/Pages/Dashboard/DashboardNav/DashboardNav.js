import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './DashboardNav.css';

const DashboardNav = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand><span className="fw-bolder fs-2 fst-italic">Dashboard <i className="far fa-address-card"></i></span></Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link> <NavLink className="dashboard-nav-text" to="/home">Home</NavLink></Nav.Link>

                        <Nav.Link> <NavLink className="dashboard-nav-text" to="/myOrders">My Orders</NavLink></Nav.Link>

                        <Nav.Link> <NavLink className="dashboard-nav-text" to="/pay">Pay</NavLink></Nav.Link>

                        <Nav.Link> <NavLink className="dashboard-nav-text" to="/review">Review</NavLink></Nav.Link>


                        {
                            user.email && <Navbar.Text>
                                <i className="fas fa-user-check fs-2"></i> {user.displayName}
                            </Navbar.Text>
                        }

                        {
                            user.email ?
                                <button onClick={logOut}
                                    className="btn btn-outline-light ms-2"
                                >Log Out</button>
                                :
                                <Nav.Link><NavLink className="dashboard-nav-text" to="/login">LogIn</NavLink></Nav.Link>
                        }

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default DashboardNav;