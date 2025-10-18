import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from 'react';
import AppsCard from './AppsCard';
import Loading from '../Loading/Loading';
import AppsError from '../AppsError/AppsError';

const AppsBox = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetch('/extended.json')
            .then(res => res.json())
            .then(data => {
                if (!cancelled) setApps(Array.isArray(data) ? data : []);
            })
            .catch(err => {
                console.error('Failed to load apps', err);
                if (!cancelled) setApps([]);
            })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, []);
    return (
        <div>
            <div className='flex items-center justify-between m-10'>
                <div className='font-bold text-lg'>({apps.length}) - Apps Found</div>
                <div className='flex items-center border border-gray-300 rounded'>
                    <CiSearch className='text-gray-500 ml-2' />
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Search Apps..." className='p-2 outline-none' />
                </div>
            </div>
            <div>
                {loading ? (
                    <div className='mx-auto'><Loading /></div>
                ) : (
                    (() => {
                        const filteredApps = apps.filter(a => {
                            if (!searchTerm) return true;
                            const s = searchTerm.toLowerCase();
                            return (
                                String(a.title).toLowerCase().includes(s) ||
                                String(a.companyName).toLowerCase().includes(s)
                            );
                        });
                        if (filteredApps.length === 0) {
                            return <div className='mx-auto'><AppsError /></div>;
                        }
                        return (
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto gap-2'>
                                {filteredApps.map(app => <AppsCard key={app.id} app={app} />)}
                            </div>
                        );
                    })()
                )}
            </div>

        </div>
    );
};

export default AppsBox;