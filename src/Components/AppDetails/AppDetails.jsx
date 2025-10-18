import React from 'react';
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
const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const app = useLoaderData();
    console.log(app);
    // defensive checks: ensure loader returned an array
    if (!app || !Array.isArray(app)) return <div className="p-8 text-center">Loading app details...</div>;

    const singleApp = app.find(a => Number(a.id) === appId);

    if (!singleApp) return <div className="p-8 text-center">App not found.</div>;

    const { title, image, description, companyName, size, downloads, ratingAvg } = singleApp;

    // prepare ratings data for the chart: expect [{ name, count }, ...]
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
                            className='btn'
                            style={{
                                borderRadius: '4px',
                                background: 'var(--Style, rgba(0, 211, 144, 1))',
                                color: '#fff'
                            }}
                        >
                            Install Now ({size}MB)
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
                        {/* layout="vertical" makes horizontal bars (categories on Y, values on X) */}
                        <BarChart data={ratingsData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* For vertical layout (horizontal bars): XAxis is numeric, YAxis is category */}
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip formatter={(value) => [value, 'Count']} />
                            <Legend />
                            <Bar dataKey="count" name="Ratings" fill="#f97316" barSize={40} radius={[6,6,6,6]}>
                                {/* show labels to the right of bars */}
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