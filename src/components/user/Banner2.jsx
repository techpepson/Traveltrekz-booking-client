import React from 'react'
import Banner1 from '../../assets/user/banner2.png'
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-blue-400 px-2 md:px-4 lg:px-8 py-6 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 lg:gap-28 rounded-2xl mt-8 '>
        <div className='flex flex-col gap-2 lg:gap-6 text-white'>
            <div className='flex flex-col gap-2 md:w-[40vw]'>
                <h1 className='text-xl md:text-3xl max-sm:px-2 lg:text-4xl font-semibold w-[19rem] leading-[1.2]'>Browse For More Properties</h1>
                <p className='max-md:text-sm max-sm:px-2'>Explore a wide range of accommodations, from cozy retreats to luxurious escapes. Find the perfect property that fits your style and budget, only at TravelTrekz.</p>
            </div>
            <Link to='/property' className='bg-white text-blue-600 w-fit kg:text-lg py-1 md:py-2 px-4 rounded-full  font-semibold max-sm:mx-2'>Find A property</Link>
        </div>
            <img src={Banner1} alt="Banner" className='md:w-[35%] w-full max-sm:flex max-sm:justify-center h-full'/>
    </div>
  )
}

export default Banner2