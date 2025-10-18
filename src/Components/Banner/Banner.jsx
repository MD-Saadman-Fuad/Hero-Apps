import React from 'react';
import Playstore from '../../assets/images/button/googleplay.png'
import Appstore from '../../assets/images/button/appstore.png'
import bannerImg from '../../assets/images/hero.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className=" pt-5" >
            
            <div className=" text-center text-neutral-content bg-white-500">
                <div className="max-w-3/4 mx-auto text-3xl md:text-5xl font-bold text-black">
                    <h1 className="mb-5  ">We Build</h1>
                    <p className="mb-5"><span className='text-purple-600'>Productive</span> Apps</p>
                    <p className='text-sm font-semibold text-gray-600'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    
                </div>
                <div className=' mx-auto flex items-center justify-center gap-5 mt-5'>
                    <Link to="https://play.google.com/store/games?hl=en"><img className='w-[150px]' src={Playstore} alt="Google Play Store" /></Link>
                    <Link to="https://www.apple.com/app-store/"><img className='w-[150px]' src={Appstore} alt="Apple App Store" /></Link>
                </div>
                <div className='mx-auto flex items-center justify-center mt-5'>
                    <img src={bannerImg} alt="Banner" />
                </div>
                <div style={{ background: 'linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)' }}>
                    <div className='p-8'>
                        <h1 className='font-bold text-4xl'>Trusted by Millions, Built for You</h1>
                    </div>
                    <div className='flex-row md:flex items-center justify-around text-center mr-10 ml-10 pb-10'>
                        <div>
                            <h1 className='font-bold text-sm pt-3'>Total Downloads</h1>
                            <h1 className='font-bold text-4xl'>29.6M</h1>
                            <h1 className='font-semibold text-sm'>21% more than last month</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-sm pt-3'>Total Review</h1>
                            <h1 className='font-bold text-4xl'>906K</h1>
                            <h1 className='font-semibold text-sm'>40% more than last month</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-sm pt-3'>Active Apps</h1>
                            <h1 className='font-bold text-4xl'>132+</h1>
                            <h1 className='font-semibold text-sm'>31% more will launch</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;