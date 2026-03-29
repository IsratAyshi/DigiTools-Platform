import React from 'react';

const Metrics = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 text-center mt-15 bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-15 lg:px-48 text-white ">
                <div className='space-y-3 border-r-2 border-zinc-300/50'>
                    <h1 className='text-6xl font-extrabold'>50K+</h1>
                    <p className='text-2xl font-medium'>Active Users</p>
                </div>
                <div className='space-y-3 border-r-2 border-zinc-300/50'>
                    <h1 className='text-6xl font-extrabold'>200+</h1>
                    <p className='text-2xl font-medium'>Premium Tools</p>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-6xl font-extrabold'>4.9</h1>
                    <p className='text-2xl font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Metrics;