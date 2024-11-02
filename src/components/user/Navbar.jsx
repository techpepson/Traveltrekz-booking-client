import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="bg-blue-600 py-4 top-0 z-50 w-full">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="/" className="text-2xl font-bold text-white">TravelTrekz</a>
                
                <div className="flex items-center space-x-6 text-lg font-medium">
                    <a href="/property" className="text-white hover:text-blue-100">Find a Property</a>
                    <a href="#" className="text-white hover:text-blue-100">Share Stories</a>
                    <a href="#" className="text-white hover:text-blue-100">About Us</a>
                </div>
                <div className="flex items-center gap-8">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition">
                        Become A Host
                    </button>
                    <button className="text-blue-600 bg-white rounded-3xl flex items-center gap-2 text-2xl px-3 p-2">
                        <RxHamburgerMenu className='font-bold hover:bg-header-200 hover:rounded-full'/>
                        <FaUserCircle className='text-gray-300'/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar