import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handelLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handelGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div>
            <div className="mx-auto">
                <h2 className="text-center mt-5">Log In</h2>
                {
                    isLoading &&
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" variant="secondary" />
                    </div>
                }
                <div className="w-50 mx-auto">
                    <form onSubmit={handelLoginSubmit}>
                        <label htmlFor="email">Email: </label>
                        <input
                            onBlur={handelOnChange}
                            type="email" name="email" className="form-control" />
                        <label htmlFor="email">Password: </label>
                        <input
                            onBlur={handelOnChange}
                            type="password" name="password" className="form-control" />
                        <br />
                        <input type="submit" value="Log In" className="btn btn-warning" />
                    </form>
                </div>
                <p className="text-center mt-5 mb-3">New User ? <Link to="/register">Create Account</Link></p>
                <div className="d-flex justify-content-center">
                    <button
                        onClick={handelGoogleSignIn}
                        className="btn btn-dark">Google Sign-In</button>
                </div>
                {
                    user?.email && <div className="alert alert-success" role="alert">
                        Loggedin successfully!
                    </div>
                }

                {
                    authError && <div className="alert alert-danger" role="alert">
                        {authError}
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;