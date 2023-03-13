import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/footer/Footer.jsx';
import MobileFooter from '../common/footer/MobileFooter.jsx';
import Navbar from '../common/navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <div className='lg:hidden md:hidden block'>
                <MobileFooter />
            </div>
        </>
    );
};

export default Main;