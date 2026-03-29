import React from 'react';

const Transform = () => {
    return (
        <div className='flex flex-col gap-10 justify-between items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-28 px-10 lg:px-48 text-white text-center'>

            <div className='space-y-4'>
                <h1 className='text-[40px] font-extrabold'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>

            <div className='space-y-4'>
                <div>
                    <button className='btn rounded-full text-[#4f39f6] mr-4'>Explore Products</button>
                    <button className='btn btn-outline rounded-full'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transform;