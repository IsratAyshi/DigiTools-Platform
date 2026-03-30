import React, { use, useState } from 'react';
import ToolCard from './ToolCard';
import Cart from '../Cart/Cart';



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
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 ml-2 md:ml-0 md:mx-2 lg:mx-10 mb-28'>
                    {
                        tools.map(tool => <ToolCard key={tool.id} tool={tool} cart={cart} setCart={setCart}></ToolCard>)
                    }
                </div>
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