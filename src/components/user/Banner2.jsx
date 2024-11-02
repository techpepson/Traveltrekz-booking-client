import React from 'react'
import Banner1 from '../../assets/user/banner2.png'
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-blue-400 pl-8 py-8 flex items-center justify-between gap-28 rounded-2xl mt-8 '>
        <div className='flex flex-col gap-6 text-white'>
            <div className='flex flex-col gap-2 w-[40vw]'>
                <h1 className='text-4xl font-semibold w-[19rem] leading-[1.2]'>Browse For More Properties</h1>
                <p>Explore a wide range of accommodations, from cozy retreats to luxurious escapes. Find the perfect property that fits your style and budget, only at TravelTrekz.</p>
            </div>
            <Link to='/property' className='bg-white text-blue-600 w-fit text-lg py-2 px-4 rounded-full  font-semibold'>Find A property</Link>
        </div>
        <div>
            <img src={Banner1} alt="Banner" className='w-[75%] h-full ml-16'/>
        </div>
    </div>
  )
}

export default Banner2