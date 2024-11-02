import React from 'react'
import Playstore from '../../assets/user/playstore.png'
import Appstore from '../../assets/user/appstore.png'

const Footer = () => {
  return (
    <div className='bg-blue-600 w-full text-white pt-20 px-12'>
        <div className='flex gap-16 pb-32'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-5xl font-bold'>TravelTrekz</h1>
                    <p className='w-[35vw]'>Your perfect stay awaits — where comfort, luxury, and adventure come together.</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={Playstore} alt="playstore" className='w-44' />
                    <img src={Appstore} alt="playstore" className='w-44' />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <ul>
                    <li>About Us</li>
                    <li>Legal Information</li>
                    <li>Contact Us</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-semibold'>Help Center</h1>
                <ul>
                    <li>Find a Property</li>
                    <li>How to Host ?</li>
                    <li>Why Us ?</li>
                    <li>FAQs</li>
                    <li>Rental Guides</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-semibold'>Contact Info</h1>
                <ul>
                    <li>Phone: </li>
                    <li>Email: </li>
                    <li>Location: </li>
                </ul>
                {/* icons */}
            </div>
        </div>
        <div className='h-0.5 w-full bg-white'></div>
        <div className='flex py-2 items-center justify-between'>
            <p>&copy; 2024 traveltrekz | All Rights Reserved</p>
            <p>Developed with love by Gabby Tech</p>
        </div>
    </div>
  )
}

export default Footer