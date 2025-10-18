import React from 'react';
import AppError from '../../assets/images/App-Error.png'
import { Link } from 'react-router-dom';

const AppsError = () => {
    return (
        <div className='text-center mx-auto my-10'>
            <img className='mx-auto max-w-xs md:max-w-md' src={AppError} alt="App Error" />
            <h1 className=' mt-3 text-4xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='text-sm text-gray-600 mt-3'>The App you are requesting is not found on our system.  please try another apps</p>
            <button className='btn text-white mt-3' style={{
  borderRadius: '4px',
  background: 'linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)'
}} ><Link to="/">Go Back!</Link></button>
        </div>
    );
};

export default AppsError;