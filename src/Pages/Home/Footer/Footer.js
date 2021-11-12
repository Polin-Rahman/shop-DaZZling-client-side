import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-light footer-container text-center">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <h4 className="fst-italic">About Us</h4>
                        <p><small>Light up your home this festive season with decorative lights. We are providing the best quality of the unique collection at the standard price. Shop the best outside holiday lights to hang on your home this season !</small></p>
                        <p>Welcome to shop DaZZling !!</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h4 className="fst-italic">More Information</h4>
                        <p><small>Shipping & Delivery</small></p>
                        <p><small>Terms & Conditions</small></p>
                        <p><small>Return & Refund</small></p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h4 className="fst-italic">Contact Us</h4>
                        <p><i className="fas fa-phone-alt"></i> ++ 88 000 1112</p>
                        <p><i className="fas fa-at"></i> www.shop.dazzling@gmail.com</p>
                        <p><i className="fab fa-facebook-f"></i> shop daZZling</p>
                        <p><i className="fab fa-instagram"></i> shop_daZZling</p>
                    </div>
                </div>
                <div className="footer-container">
                    <hr />
                    <p><small>© 2021-2022 SHOP DAZZLING </small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;