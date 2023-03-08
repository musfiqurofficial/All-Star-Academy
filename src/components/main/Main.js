import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/footer/Footer.jsx';
import Navbar from '../common/navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;