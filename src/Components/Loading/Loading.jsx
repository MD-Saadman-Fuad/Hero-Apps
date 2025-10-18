import React from 'react';
import logo from '../../assets/images/logo.png';
const Loading = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[300px] gap-4'>
            <img className='mx-auto max-w-xs md:max-w-md' src={logo} alt="Loading..." />
            <p className='text-lg font-semibold'>Loading Apps...</p>
        </div>
    );
};

export default Loading;