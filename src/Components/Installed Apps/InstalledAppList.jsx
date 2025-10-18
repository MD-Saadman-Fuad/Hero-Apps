import React from 'react';
import downloadIcon from '../../assets/images/download.png'
import starIcon from '../../assets/images/rating.png'
const InstalledAppList = () => {
    return (
        <div>
            <div>
                <h1>App Name</h1>
                <div>
                    <div className="card-actions flex items-center justify-between w-full mt-4">
                        <button className='flex text-sm text-green-600 gap-2 bg-gray-200 rounded-3xl p-2'><img className='w-[20px]' src={downloadIcon} alt="Downloads" /> downloads</button>
                        <button className='btn flex items-end text-orange-400 justify-end bg-orange-200 rounded-3xl p-2 gap-2'
                            
                        ><img className='w-[20px]' src={starIcon} alt="Rating" /> Average Ratings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstalledAppList;