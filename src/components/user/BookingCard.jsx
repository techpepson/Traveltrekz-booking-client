import React from 'react'
import Enquiry from '../../assets/inquiry.svg'
import Phone from '../../assets/call.svg'

const BookingCard = ({amount}) => {
  return (
    <div className='shadow-2xl h-fit w-full p-6 flex justify-center rounded-lg flex-col '>
        <h1 className='text-2xl text-header-600 font-bold py-4'>${amount}</h1>
        <div className='h-0.5 w-full bg-header-200'></div>
        <div className='pt-4 text-header-400 font-medium'>
            <p>Short period</p>
            <p>Medium period</p>
            <p>Long period</p>
        </div>
        <button className='bg-blue-600 p-4 rounded-full flex items-center justify-center my-10 text-white font-semibold'>Reserve Now</button>
        <div className='text-header-600 gap-2 w-full font-semibold flex items-center justify-between pb-10'>
            <div className='flex items-center gap-2 w-full'>
                <img src={Enquiry} alt="" />
                Enquiries
            </div>
            <div className='flex items-center gap-2 w-full'>
                <img src={Phone} alt="" />
                Contact Host
            </div>
        </div>
    </div>
  )
}

export default BookingCard