import React from 'react';
import { TbTriangleInvertedFilled } from "react-icons/tb";

const InstalledApps = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mx-10 mb-5'>
                <h1>Apps Found</h1>
                <button className='btn'>Sort By Size <TbTriangleInvertedFilled /></button>

                {
                    
                }
            </div>
        </div>
    );
};

export default InstalledApps;