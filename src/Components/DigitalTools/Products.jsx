import React from 'react';
import ToolCard from './ToolCard';

const Products = ({ tools, cart, setCart }) => {
    return (
        <div id='productCards' className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 ml-2 md:ml-0 md:mx-2 lg:mx-10 mb-28'>
            {
                tools.map(tool => <ToolCard key={tool.id} tool={tool} cart={cart} setCart={setCart}></ToolCard>)
            }
        </div>
    );
};

export default Products;