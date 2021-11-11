import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handelLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not matched');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="mx-auto">
                <h2 className="text-center mt-5">Please Register <i className="fas fa-user-edit"></i></h2>
                {
                    isLoading &&
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" variant="secondary" />
                    </div>
                }
                <div className="w-75 mx-auto">
                    <form onSubmit={handelLoginSubmit}>
                        <label htmlFor="text">Your Name: </label>
                        <input
                            onBlur={handelOnBlur}
                            type="text" name="name" className="form-control" />
                        <label htmlFor="email">Email: </label>
                        <input
                            onBlur={handelOnBlur}
                            type="email" name="email" className="form-control" />

                        <label htmlFor="email">Password: </label>
                        <input
                            onBlur={handelOnBlur}
                            type="password" name="password" className="form-control" />

                        <label htmlFor="email">Re-Type Password: </label>
                        <input
                            onBlur={handelOnBlur}
                            type="password" name="password2" className="form-control" />
                        <br />

                        <input type="submit" value="Register" className="btn btn-warning" />
                    </form>



                </div>
                <h5 className="text-center mt-3 mb-1">Already Registered ? <Link to="/login">Log In</Link></h5>

                {
                    user?.email && <div className="alert alert-success mt-5 w-50" role="alert">
                        Loggedin successfully!
                    </div>
                }

                {
                    authError && <div className="alert alert-danger mt-5 w-50" role="alert">
                        {authError}
                    </div>
                }
            </div>
        </div>
    );
};

export default Register;