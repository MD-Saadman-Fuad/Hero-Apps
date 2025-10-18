import React from 'react';
import downloadIcon from '../../assets/images/download.png'
import starIcon from '../../assets/images/rating.png'
import { Link } from 'react-router-dom';
const AppCard = ({ app }) => {
//     {
//     "image": "https://i.ibb.co.com/KjCvwfbB/demo-app-3.webp",
//     "title": "Fitness Plus",
//     "companyName": "ActiveWell Labs",
//     "id": 1,
//     "description": "Fitness Plus helps users build personalized workout routines and track their progress with AI-based recommendations. It features a vast library of guided exercises, live trainer sessions, and goal-tracking tools. The app syncs with smartwatches to monitor heart rate and calories burned. Users can challenge friends in weekly fitness contests. Offline workout mode lets you stay active even without internet. Built-in meal planner offers nutrition advice. Integration with Apple Health and Google Fit ensures seamless tracking. The intuitive dashboard displays your improvement metrics. Regular updates add new workout programs every month. Your fitness, simplified and personalized.",
//     "size": 142,
//     "reviews": 8421,
//     "ratingAvg": 4.6,
//     "downloads": 1200000,
//     "ratings": [
//       { "name": "1 star", "count": 220 },
//       { "name": "2 star", "count": 340 },
//       { "name": "3 star", "count": 980 },
//       { "name": "4 star", "count": 2140 },
//       { "name": "5 star", "count": 4741 }
//     ]
//   }
    const {image, title, downloads, ratingAvg } = app;
    return (
        <Link to={`/appdetails/${app.id}`}>
            <div   className="card w-full bg-base-100  shadow-sm m-1">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                
                <div className="card-actions flex items-center justify-between w-full mt-4">
                   <button className='flex text-sm text-green-600 gap-2 bg-gray-200 rounded-3xl p-2'><img className='w-[20px]' src={downloadIcon} alt="Downloads" /> {downloads}</button>
                   <button className='flex items-end text-orange-400 justify-end bg-orange-200 rounded-3xl p-2 gap-2'><img className='w-[20px]' src={starIcon} alt="Rating" /> {ratingAvg}</button>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default AppCard;