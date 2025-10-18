import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import AppCard from './AppCard';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
const AppBox = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetch('./home.json')
            .then(res => res.json())
            .then(data => { if (!cancelled) setApps(data); })
            .catch(err => { console.error('Failed to load apps', err);
                if (!cancelled)
                    setApps([]);
            })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, []);

    return (
        <div>
            <Suspense fallback={<div className='mx-auto'><Loading /></div>}>
                {loading ? (
                    <div className='mx-auto'><Loading /></div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto gap-2'>
                        {apps.map(app => <AppCard key={app.id} app={app} />)}
                    </div>
                )}
            </Suspense>
            <button className="btn mt-2 text-white" style={{
                borderRadius: '4px',
                background: 'linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)'
            }}><Link to="/apps">Show All</Link></button>
        </div>

    );
};

export default AppBox;