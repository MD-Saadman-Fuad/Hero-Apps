import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from 'react';
import AppsCard from './AppsCard';
const AppsBox = () => {
    const appsPromise = fetch('./extended.json').then(res => res.json()).then(data => data);
        // console.log(appsPromise);
        const [apps, setApps] = useState([]);
    
        useEffect(() => {
            appsPromise.then(data => {
                setApps(data);
            });
        }, [appsPromise]);
    return (
        <div>
            <div className='flex items-center justify-between m-10'>
                <div className='font-bold text-lg'>({apps.length}) - Apps Found</div>
                <div className='flex items-center border border-gray-300 rounded'>
                    <CiSearch className='text-gray-500 ml-2' />
                    <input type="text" placeholder="Search Apps..." className='p-2 outline-none' />
                </div>
            </div>
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto gap-2'>
                {apps.map(app => <AppsCard key={app.id} app={app} />)}
            </div>
            
        </div>

        </div>
    );
};

export default AppsBox;