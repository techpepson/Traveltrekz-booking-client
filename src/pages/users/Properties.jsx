import React, { useState } from 'react'
import Navbar from '../../components/user/Navbar'
import Newsletter from '../../components/user/Newsletter'
import Footer from '../../components/user/Footer'
import Property from '../../components/user/Property'
import Filter from '../../assets/filter.svg'
import { GoDotFill } from "react-icons/go";

const Properties = () => {
    const [displayCount, setDisplayCount] = useState(6); 

    const loadMoreProperties = () => {
        setDisplayCount(prevCount => prevCount + 6); // Increase the count by 6 each time
    };

  return (
    <>
        <Navbar />
        <div className="mx-auto px-16 pt-8 pb-16">
            <div className='flex items-center justify-between py-8'>
                <ul className='flex items-center gap-8 font-semibold'>
                    <button className='flex items-center gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer'>
                        <GoDotFill/>
                        Apartment
                    </button>
                    <button className='flex items-center gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer'>
                        <GoDotFill/>
                        Houses
                    </button>
                    <button className='flex items-center gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer'>
                        <GoDotFill/>
                        Villas
                    </button>
                    <button className='flex items-center gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer'>
                        <GoDotFill/>
                        Homestays
                    </button>
                    <button className='flex items-center gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer'>
                        <GoDotFill/>
                        Villas
                    </button>
                </ul>
                <div className='py-2 px-4 flex items-center border rounded-3xl gap-1 w-fit cursor-pointer'>
                    <img src={Filter} alt="filter" className='w-6'/>
                    <p>Filter</p>
                </div>
            </div>
            <Property displayCount={displayCount}/>
            <button 
                className='mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-fit flex items-center justify-center'
                onClick={loadMoreProperties}
            >
                Load More Properties
            </button>
        </div>
        <Newsletter />
        <Footer/>
    </>
  )
}

export default Properties