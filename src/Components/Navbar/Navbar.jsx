import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10 lg:px-50">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>


                <h1 className="font-extrabold text-xl ml-2 text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">DigiTools</h1>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-3 ">
                <div className='relative'>
                    <IoCartOutline className='text-2xl' />
                    <span className="absolute -top-3 -right-3 badge badge-sm badge-error w-5 h-5 ">0</span>
                </div>

                <button className="btn btn-ghost">Login</button>
                <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-3xl">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;