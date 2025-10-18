import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
const Root = () => {
    return (
        <div className=' mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Root;