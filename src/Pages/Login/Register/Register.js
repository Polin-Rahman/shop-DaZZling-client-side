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
        <div>
            <div className="mx-auto">
                <h2 className="text-center mt-5">Please Register</h2>
                {
                    isLoading &&
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" variant="secondary" />
                    </div>
                }
                <div className="w-50 mx-auto">
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
                <p className="text-center mt-3 mb-1">Already Registered ? <Link to="/login">Log In</Link></p>
                <p className="text-center mb-2">Or</p>
                <div className="d-flex justify-content-center">
                    <button

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

export default Register;