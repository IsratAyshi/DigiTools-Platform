import React from 'react';

const DigitalTools = () => {
    return (
        <div className='container mx-auto mt-28 mb-10 space-y-10'>


            <div className='text-center space-y-4'>
                <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
                <p className='text-[#627382FF]'>Choose from our curated collection of premium digital products designed<br /> to boost your productivity and creativity.</p>

                {/* Models and Cart Tab buttons */}
                <div className="tabs tabs-box justify-center bg-transparent">
                    <input type="radio" name="my_tabs_1"
                        className={`tab w-30 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full`}
                        aria-label="Products"
                        defaultChecked
                        onClick='' />

                    <input type="radio" name="my_tabs_1"
                        className={`tab rounded-full w-30`}
                        aria-label="Cart (0)"
                        onClick='' />
                </div>
            </div>

            {/* Tools cards section  */}

        </div>
    );
};

export default DigitalTools;