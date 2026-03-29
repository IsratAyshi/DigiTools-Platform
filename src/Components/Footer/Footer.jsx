import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="bg-[#101727] pt-28 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-white">

                    <div className="md:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-bold">
                                DigiTools
                            </h2>
                        </div>

                        <p className=" text-lg max-w-md">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>


                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-6 text-xl">Product</h3>

                        <ul className="space-y-4">
                            <li><a href="#" >Models</a></li>
                            <li><a href="#" >Pricing</a></li>
                            <li><a href="#" >Features</a></li>
                            <li><a href="#" >API</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-6 text-xl">Company</h3>

                        <ul className="space-y-4 ">
                            <li><a href="#" >About</a></li>
                            <li><a href="#" >Blogs</a></li>
                            <li><a href="#" >Careers</a></li>
                            <li><a href="#" >Press</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-6 text-xl">Resources</h3>

                        <ul className="space-y-4 ">
                            <li><a href="#" >Documentation</a></li>
                            <li><a href="#" >Help Center</a></li>
                            <li><a href="#" >Community</a></li>
                            <li><a href="#" >Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-6 text-xl">Social Links</h3>

                        <div className="mt-8 flex flex-wrap gap-4 text-2xl text-[#101727]">
                            <a href="#" className="hover:text-[#9514fa] border p-2 rounded-full bg-white"><AiFillInstagram /></a>
                            <a href="#" className="hover:text-[#9514fa] border p-2 rounded-full bg-white"><FaFacebookSquare /></a>
                            <a href="#" className="hover:text-[#9514fa] border p-2 rounded-full bg-white"><FaXTwitter /></a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Services</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;