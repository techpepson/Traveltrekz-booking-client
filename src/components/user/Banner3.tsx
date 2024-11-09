import React from 'react'
import Playstore from '../../assets/user/playstore.png'
import Appstore from '../../assets/user/appstore.png'
import Promo from '../../assets/user/promo.png'

const Banner3:React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-blue-600 px-4 lg:px-8 py-0 max-sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-28 rounded-2xl mt-8 '>
        <div className='flex flex-col gap-3 lg:gap-6 text-white'>
            <div className='flex flex-col gap-2 md:w-[40vw]'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold w-72 leading-[1.2] max-sm:px-2'>Exclusive Deals Just For You</h1>
                <p className='max-md:text-sm'>Unlock special offers and limited-time discounts on top destinations. Save more when you book with TravelTrekz and make your dream getaway a reality.</p>
            </div>
            <div className='flex items-center gap-2'>
                <img src={Playstore} alt="playstore" className='w-32' />
                <img src={Appstore} alt="playstore" className='w-32' />
            </div>
        </div>
        <div>
            <img src={Promo} alt="Banner" className='w-full h-full'/>
        </div>
    </div>
  )
}

export default Banner3