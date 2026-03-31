import React, { use, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from './Products';



const DigitalTools = ({ toolsPromise, cart, setCart }) => {

    const tools = use(toolsPromise);
    // console.log(tools);

    const [activeTab, setActiveTab] = useState('products');

    // const [cart, setCart] = useState([]);



    return (
        <div className='container mx-auto mt-28 mb-10 space-y-10'>


            <div className='text-center space-y-4'>
                <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
                <p className='text-[#627382FF]'>Choose from our curated collection of premium digital products designed<br /> to boost your productivity and creativity.</p>

                {/* Product Tools and Cart Tab buttons */}
                <div className="tabs tabs-box justify-center bg-transparent">
                    <input type="radio" name="my_tabs_1"
                        className={`tab w-30 ${activeTab === 'products' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : ''} rounded-full`}
                        aria-label="Products"
                        defaultChecked
                        onClick={() => setActiveTab('products')} />

                    <input type="radio" name="my_tabs_1"
                        className={`tab ${activeTab === 'cart' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : ''} rounded-full w-30`}
                        aria-label={`Cart (${cart.length})`}
                        onClick={() => setActiveTab('cart')} />
                </div>
            </div>


            {
                activeTab === 'products' &&
                // Tools cards section
                <Products tools={tools} cart={cart} setCart={setCart}></Products>
            }

            {
                activeTab === 'cart' &&
                // Cart section
                <Cart cart={cart} setCart={setCart}></Cart>
            }

        </div>
    );
};

export default DigitalTools;