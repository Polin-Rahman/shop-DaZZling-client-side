import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './DashboardMain.css';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

const DashboardMain = () => {

    const { user, logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand><span className="fs-3 fst-italic">Dashboard <i className="far fa-address-card"></i></span></Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link><Link className="dashboard-nav-text" to={`${url}`}>Dashboard</Link>
                        </Nav.Link>
                        {
                            admin ? <>
                                <Nav.Link> <Link className="dashboard-nav-text" to={`${url}/manageAllOrders`}>Manage Orders</Link></Nav.Link>

                                <Nav.Link> <Link className="dashboard-nav-text" to={`${url}/addProduct`}>Add Product</Link></Nav.Link>

                                <Nav.Link> <Link className="dashboard-nav-text" to={`${url}/makeAdmin`}>Make Admin</Link></Nav.Link>

                                <Nav.Link> <Link className="dashboard-nav-text" to={`${url}/manageProducts`}>Manage Products</Link></Nav.Link>
                            </>
                                :
                                <>
                                    <Nav.Link> <Link className="dashboard-nav-text" to={`${url}/myOrders`}>My Orders</Link></Nav.Link>
                                    <Nav.Link> <Link className="dashboard-nav-text" to={`${url}/pay`}>Pay</Link></Nav.Link>
                                    <Nav.Link> <Link className="dashboard-nav-text" to={`${url}/review`}>Review</Link></Nav.Link>
                                </>
                        }

                        <Nav.Link> <NavLink className="dashboard-nav-text" to="/home">Go Home</NavLink></Nav.Link>

                        {
                            admin ? <Navbar.Text>
                                <i className="fas fa-user-shield fs-4 me-1"></i>
                            </Navbar.Text>
                                :
                                <Navbar.Text>
                                    <i className="fas fa-user-check fs-4 me-1"></i>
                                </Navbar.Text>
                        }

                        <Navbar.Text>
                            {user.displayName}
                        </Navbar.Text>

                        <button onClick={logOut}
                            className="btn btn-outline-light ms-2"
                        >Log Out</button>

                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/pay`}>
                    <Pay></Pay>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>

                <Route path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </Route>
                <Route path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </Route>

            </Switch>
        </>
    );
};

export default DashboardMain;