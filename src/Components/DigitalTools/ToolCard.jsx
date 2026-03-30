import React from 'react';

const ToolCard = ({ tool }) => {

    const { name, description, price, period, tag, tagType, icon, features } = tool

    return (
        <div className='card shadow-lg rounded-lg border border-zinc-200 overflow-hidden p-5'>

            <div className={`absolute right-4 badge rounded-full py-3 flex justify-center items-center ${tagType === 'new' ? 'bg-[#dbfce7FF] text-[#218b48]' : tagType === 'popular' ? 'bg-[#e1e7ffFF] text-[#2e2ca0]' : 'bg-[#fef3c6FF] text-[#796105]'}`}>
                <p className='px-1'>{tag}</p>
            </div>

            <div className='flex justify-center items-center p-4 bg-base-200 h-15 w-15 rounded-full m-2'>
                <img className='w-full' src={icon} alt="" />
            </div>

            <div className='px-4 space-y-4'>
                <h3 className='font-bold text-2xl'>{name}</h3>
                <p>{description}</p>

                <div className='text-2xl font-semibold'>${price}<span className='text-[#627382] text-[16px] font-medium'>/{period}</span></div>
            </div>

            <div className='px-4 my-4 flex flex-1 flex-col'>
                <div className='space-y-1'>
                    {
                        features.map(feature =>
                            <p key={tool.id} className='flex items-center gap-2 font-medium text-[#627382FF]'><span className='text-xl font-semibold text-green-600'>✓</span> {feature}</p>)
                    }
                </div>
            </div>

            <button
                onClick=''
                className='btn w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-2xl mb-4'
            >
                Buy Now
            </button>
        </div>
    );
};

export default ToolCard;