import React from 'react';
import Appbox from './AppBox';
const App = () => {
    
    return (
        <div className='text-center my-10'>
            <h1 className='font-bold text-2xl'>Trending Apps</h1>
            <p className='text-sm text-gray-600'>Explore All Trending Apps on the Market Developed bu Us</p>
            <Appbox></Appbox>
        </div>
    );
};

export default App;