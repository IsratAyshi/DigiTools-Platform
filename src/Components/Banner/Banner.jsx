import React from 'react';
import BannerImg from '../../assets/banner.png'
import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className="py-7 lg:min-h-180 flex items-center overflow-hidden">

            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">

                {/* Left Side Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-[#4f39f6] font-medium px-5 py-2 rounded-full">
                        <div className="w-2 h-2 bg-[#4f39f6] rounded-full" style={{ boxShadow: "0 0 6px 2px #9514fa" }}></div>
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight  text-[#101727]">
                        Supercharge Your
                        <br />
                        Digital Workflow
                    </h1>

                    <p className="text-lg max-w-xl text-zinc-700">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br /> Explore Products

                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-8 py-4 rounded-full font-bold shadow-xl shadow-[#4f39f6]/30 text-white">
                            Explore Products
                        </button>

                        <button className='border border-[#4f39f6] bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-5 py-4 font-bold rounded-full flex justify-center items-center gap-2'>
                            <IoPlayOutline className=" text-[#4f39f6] text-xl" />Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        className="h-100 lg:h-147 w-auto object-contain shadow-xl rounded-lg"
                        src={BannerImg}
                        alt="AI Models Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;