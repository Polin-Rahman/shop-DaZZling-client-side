import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <TopBanner></TopBanner>
            <Products></Products>
            <Reviews></Reviews>
            {/* extra section */}
            <Footer></Footer>
        </div>
    );
};

export default Home;