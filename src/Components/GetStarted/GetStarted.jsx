import React from 'react';
import userImg from '../../assets/user.png'
import packageImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'



const GetStarted = () => {
    return (
        <div id='get-started' className='bg-base-200 py-28'>
            <div className='container mx-auto space-y-10'>
                <div className='text-center space-y-4'>
                    <h1 className='text-5xl font-extrabold'>Get Started In 3 Steps</h1>
                    <p className='text-[#627382FF]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40">

                    <div className="card bg-base-100 w-96 shadow-sm p-6">
                        <div className=' text-sm font-bold text-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-2.5 px-3 rounded-full absolute top-4 right-4'>01</div>

                        <figure className="px-10 pt-15">
                            <img
                                src={userImg}
                                alt="user"
                                className="bg-[#9514fa]/10 p-3 rounded-full" />
                        </figure>

                        <div className="card-body items-center text-center pb-15">
                            <h2 className="card-title text-2xl font-bold">Create Account</h2>
                            <p>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-96 shadow-sm p-6">
                        <div className=' text-sm font-bold text-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-2.5 px-3 rounded-full absolute top-4 right-4'>02</div>

                        <figure className="px-10 pt-15">
                            <img
                                src={packageImg}
                                alt="user"
                                className="bg-[#9514fa]/10 p-4 rounded-full" />
                        </figure>

                        <div className="card-body items-center text-center pb-15">
                            <h2 className="card-title text-2xl font-bold">Choose Products</h2>
                            <p>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-96 shadow-sm p-6">
                        <div className=' text-sm font-bold text-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-2.5 px-3 rounded-full absolute top-4 right-4'>03</div>

                        <figure className="px-10 pt-15">
                            <div className="bg-[#9514fa]/10 p-3 rounded-full">
                                <img
                                    src={rocketImg}
                                    alt="user"
                                    className="object-contain" />
                            </div>
                        </figure>

                        <div className="card-body items-center text-center pb-15">
                            <h2 className="card-title text-2xl font-bold">Start Creating</h2>
                            <p>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default GetStarted;