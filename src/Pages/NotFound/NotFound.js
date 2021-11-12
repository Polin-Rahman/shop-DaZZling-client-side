import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.jpg';

const NotFound = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <img src={error} alt="" className="img-fluid mt-5" />
            </div>
            <Link to="/home"><h2 className="text-center">Back to Home</h2></Link>
        </div>

    );
};

export default NotFound;