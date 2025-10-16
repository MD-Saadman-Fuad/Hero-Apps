import React from 'react';
import AppsBox from './AppsBox';

const AppsList = () => {
    return (
        <div className='text-center my-10'>
            <h1 className='text-2xl font-bold'>Our All Applications</h1>
            <p className='text-gray-500 text-sm'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <AppsBox></AppsBox>
        </div>
    );
};

export default AppsList;