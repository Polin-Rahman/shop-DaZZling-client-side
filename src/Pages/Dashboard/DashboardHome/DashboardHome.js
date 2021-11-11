import React from 'react';
import welcome from '../../../images/welcome.jpg';

const DashboardHome = () => {
    return (
        <div>
            <div className="mt-5">
                <img src={welcome} alt="" className="img-fluid"></img>
            </div>
        </div>
    );
};

export default DashboardHome;