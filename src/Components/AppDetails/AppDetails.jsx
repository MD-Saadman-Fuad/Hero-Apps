import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import downloadIcon from '../../assets/images/download.png';
import starIcon from '../../assets/images/rating.png';
import review from '../../assets/images/review.png';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
} from 'recharts';
import {getInstalledApps, addToStoreDB} from '../../Utility/Utility';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import AppsError from '../AppsError/AppsError';
const AppDetails = () => {
    const [installed, setInstalled] = useState(false);
    const { id } = useParams();
    const appId = parseInt(id);
    useEffect(() => {
        const ids = getInstalledApps();
        const found = ids.some(a => Number(a) === appId);
        setInstalled(found);
    }, [appId]);

    const app = useLoaderData();
    // console.log(app);


    if (!app || !Array.isArray(app)) return <div className="p-8 text-center"><Loading /></div>;

    const singleApp = app.find(a => Number(a.id) === appId);

    if (!singleApp) return <div className="p-8 text-center"><AppsError /></div>;

    const { title, image, description, companyName, size, downloads, ratingAvg } = singleApp;

    
    const ratingsData = Array.isArray(singleApp.ratings) ? singleApp.ratings.map(r => ({ name: r.name, count: r.count })) : [];
    

    return (
        <div className=''>
            <div className='flex-row md:flex m-3 md:m-10 gap-10'>
                <img src={image} alt={title} />
                <div>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <p className='text-gray-600 text-sm'>Developed By: {companyName}</p>
                    <div className='flex items-center justify-between gap-8 mt-5 border-t-1'>
                        <div className='mt-5'>
                            <img src={downloadIcon} alt="Download" />
                            <p className='text-sm text-gray-600'>Downloads</p>
                            <p>{downloads}</p>
                        </div>
                        <div className='mt-5'>
                            <img src={starIcon} alt="Rating" />
                            <p className='text-sm text-gray-600'>Average Rating</p>
                            <p>{ratingAvg}</p>
                        </div>
                        <div className='mt-5'>
                            <img src={review} alt="Reviews" />
                            <p className='text-sm text-gray-600'>Total Reviews</p>
                            <p>{singleApp.reviews}</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button
                            className={`btn ${installed ? 'btn-disabled opacity-60 cursor-not-allowed' : ''}`}
                            onClick={() => {
                                if (installed) return;
                                setInstalled(true);
                                try {
                                    addToStoreDB(appId);
                                    toast.success('App installed successfully');
                                } catch (err) {
                                    console.error(err);
                                    toast.error('Failed to install app');
                                }
                            }}
                            disabled={installed}
                            style={{
                                borderRadius: '4px',
                                background: 'var(--Style, rgba(0, 211, 144, 1))',
                                color: '#fff'
                            }}
                        >
                            {installed ? 'Installed' : 'Install Now'} ({size}MB)
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-full  md:p-6">
                <h2 className="text-xl font-semibold mb-3">Ratings</h2>
                {ratingsData.length === 0 ? (
                    <div className="text-sm text-gray-600">No rating data available.</div>
                ) : (
                    <ResponsiveContainer width="100%" height={500}>
                        
                        <BarChart data={ratingsData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip formatter={(value) => [value, 'Count']} />
                            <Legend />
                            <Bar dataKey="count" name="Ratings" fill="#f97316" barSize={40} radius={[6,6,6,6]}>
                                
                                <LabelList dataKey="count" position="right" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
            <div className='max-w-full mx-auto p-6'>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default AppDetails;