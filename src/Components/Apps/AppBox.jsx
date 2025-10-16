import React from 'react';
import { useState, useEffect } from 'react';
import AppCard from './AppCard';
import { Link } from 'react-router-dom';
const AppBox = () => {
    const appsPromise = fetch('./home.json').then(res => res.json()).then(data => data);
    // console.log(appsPromise);
    const [apps, setApps] = useState([]);

    useEffect(() => {
        appsPromise.then(data => {
            setApps(data);
        });
    }, [appsPromise]);

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto gap-2'>
                {apps.map(app => <AppCard key={app.id} app={app} />)}
            </div>
            <button className="btn mt-2 text-white" style={{
                borderRadius: '4px',
                background: 'linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)'
            }}><Link to="/apps">Show All</Link></button>
        </div>

    );
};

export default AppBox;