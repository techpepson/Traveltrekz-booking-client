import React from 'react'
import Banner1 from '../../assets/user/banner.png'

const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-blue-600 px-8 py-12 flex items-center justify-between gap-28 rounded-2xl mt-8 '>
        <div className='flex flex-col gap-6 text-white'>
            <div className='flex flex-col gap-2 w-[40vw]'>
                <h1 className='text-4xl font-semibold w-72 leading-[1.2]'>Try Hosting With Us</h1>
                <p>Join our community of trusted hosts and share your space with travelers from around the world. Enjoy seamless management, 24/7 support, and maximize your earnings with TravelTrekz.</p>
            </div>
            <button className='bg-white text-blue-400 w-fit text-lg py-2 px-4 font-medium rounded-full'>Become A Host</button>
        </div>
        <div>
            <img src={Banner1} alt="Banner" className='w-full h-full'/>
        </div>
    </div>
  )
}

export default Banner