import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = (item) => {
        const newCart = cart.filter(toolR => item.id !== toolR.id);
        toast.error("Removed from cart");
        setCart(newCart);
    }

    const handlePayment = () => {
        if (cart.length === 0) {
            toast.error("Cart is empty. Add some products.", { theme: "colored" });
            return;
        }

        toast.success('Payment Successful', { theme: "colored" });
        setCart([]);
    }

    return (
        <div className='space-y-10 my-10 container mx-auto border border-zinc-200 rounded-2xl p-5 lg:max-w-300'>

            {
                cart.length === 0 &&
                <div className='space-y-4'>
                    <h2 className='font-bold text-2xl'> Your Cart</h2>
                    <div className='flex flex-col gap-2 justify-center items-center text-center p-20 text-[#627382] bg-base-200 rounded-2xl'>
                        <IoCartOutline className='text-6xl opacity-50' />
                        <p>Your Cart is empty</p>
                    </div>
                </div>
            }

            <div className='space-y-5'>
                {
                    cart.map(item => (
                        <div key={item.id} className='flex items-center justify-between  bg-base-200 rounded-xl p-4 '>

                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-base-100 rounded-2xl'>
                                    <img className='h-7 object-contain' src={item.icon} alt="" />
                                </div>

                                <div>
                                    <h1 className='font-semibold text-xl'>{item.name}</h1>
                                    <p className='font-medium text-[#627382]'>${item.price}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleDelete(item)}
                                className='btn btn-ghost text-red-500 font-bold p-2'>
                                <MdDeleteForever />Remove
                            </button>



                        </div>
                    )
                    )
                }
            </div>

            <div className='flex items-center justify-between rounded-2xl p-4 '>
                <div className='text-xl font-bold'>Total</div>
                <div className='text-xl font-bold'>$ {totalPrice}</div>
            </div>

            <button onClick={handlePayment} className='btn text-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:border-purple-950 hover:my-1 rounded-2xl p-7 w-full text-white text-xl font-semibold'>
                Proceed To Checkout
            </button >

        </div>
    );
};

export default Cart;