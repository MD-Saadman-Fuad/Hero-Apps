import React, { useEffect, useState } from 'react';
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { getInstalledApps, removeFromStoreDB, sortApps } from '../../Utility/Utility';
import { toast } from 'react-toastify';
import downloadIcon from '../../assets/images/download.png'
import starIcon from '../../assets/images/rating.png'
import AppsError from '../AppsError/AppsError';
import Loading from '../Loading/Loading';
import { Suspense } from 'react';
const InstalledApps = () => {
    const [installedIds, setInstalledIds] = useState(() => getInstalledApps());
    const [allApps, setAllApps] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sortKey, setSortKey] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        let cancelled = false;
        fetch('/extended.json')
            .then(res => res.json())
            .then(data => {
                if (!cancelled) setAllApps(data);
            })
            .catch(err => {
                console.error('Failed to load apps', err);
                if (!cancelled) setAllApps([]);
            })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, []);

    const installedIdsSet = new Set((installedIds || []).map(String));
    const installedAppsRaw = (allApps || []).filter(Boolean).filter(a => installedIdsSet.has(String(a.id)));
    const installedApps = sortKey ? sortApps(installedAppsRaw, sortKey, sortOrder) : installedAppsRaw;

    const handleRemove = (id) => {
        const ok = removeFromStoreDB(id);
        if (ok) {
            setInstalledIds(getInstalledApps());
            toast.success('App uninstalled');
        } else {
            toast.error('Failed to uninstall app');
        }
    }

    return (
        <div>
            <div className='text-center my-8'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between items-center mx-10 mb-5 '>
                <h1 className='font-bold'> ({installedIds.length}) - Apps Found</h1>
                <div className='flex items-center gap-3'>
                    <label className='text-sm'>Sort by</label>
                    <select value={sortKey} onChange={e => setSortKey(e.target.value)} className='select select-bordered'>
                        <option value="">None</option>
                        <option value="downloads">Most downloaded</option>
                        <option value="rating">Rating</option>
                        <option value="size">Size</option>
                    </select>
                    <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className='select select-bordered'>
                        <option value="desc">Desc</option>
                        <option value="asc">Asc</option>
                    </select>
                </div>
            </div>
            <Suspense fallback={<Loading />}>
            <div className='grid grid-cols-1 mb-3 gap-4 mx-10'>
                {loading ? (
                    <Loading />
                ) : installedApps.length === 0 ? (
                    <div className='text-gray-600 col-span-full'><AppsError /></div>
                ) : (
                    installedApps.map(app => (
                        <div key={app.id} className='p-4 border rounded flex-row md:flex items-center gap-4'>
                            <img src={app.image} alt={app.title} className='w-20 h-20 object-cover rounded' />
                            <div className='flex-1'>
                                <h3 className='font-semibold'>{app.title}</h3>
                                <p className='text-sm text-gray-600'>{app.companyName}</p>
                                <p className='text-sm text-gray-500 mt-1 flex '><img className='w-[20px] mr-3' src={downloadIcon} alt="" /> {app.downloads.toLocaleString()} <img className='w-[20px] ml-3 mr-3' src={starIcon} alt="" /> {app.ratingAvg.toFixed(1)} <span className='ml-3'>{app.size} MB</span> </p>

                            </div>
                            <div>
                                <button className='btn mt-2 btn-ghost  text-red-500' onClick={() => handleRemove(app.id)}
                                        style={{
                                borderRadius: '4px',
                                background: 'var(--Style, rgba(0, 211, 144, 1))',
                                color: '#fff'
                            }} >Uninstall</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            </Suspense>
        </div>
    );
};

export default InstalledApps;