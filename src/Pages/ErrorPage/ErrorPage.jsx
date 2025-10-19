import React from 'react';
import errorPic from '../../assets/images/Error.png'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';    
const ErrorPage = () => {
    return (
        <div>
            
            <div className='items-center text-center mx-auto m-20'>
                <img className='mx-auto max-w-xs md:max-w-md' src={errorPic} alt="Error" />
                <h1 className='font-bold text-4xl m-2'>Oops, page not found!</h1>
                <p className='m-2'>The page you are looking for is not available.</p>
                <button className="btn text-white" style={{
                    borderRadius: '4px',
                    background: 'linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)'
                }}><Link to={'/'}>Go Back</Link></button>
            </div>
            
        </div>
    );
};

export default ErrorPage;