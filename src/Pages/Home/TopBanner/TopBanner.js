import React from 'react';
import topBanner from '../../../images/top-bg.jpg';
const TopBanner = () => {
    return (
        <div>
            <img src={topBanner} className="w-100" style={{ height: '450px' }} alt="" />

            <div className="my-5">
                <h1 className="text-center fst-italic">Welcome to shop DaZZling<i className="fas fa-feather"></i></h1>
                <p className="text-center fs-5">Outside Christmas lights are the key to creating that postcard-perfect Christmas scene - <strong> Sales are going on !!</strong></p>
            </div>
        </div>
    );
};

export default TopBanner;