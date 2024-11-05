import React from 'react'
import { VscSend } from "react-icons/vsc";

const Newsletter = () => {
  return (
    <div className='bg-blue-400 w-full flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-10 justify-center py-4 px-2 md:px-10 lg:px-44'>
        <div className='flex flex-col gap-0 text-white'>
            <p className='font-semibold md:text-lg'>NEWSLETTER</p>
            <p className='max-sm:text-sm'>Stay Up To Date</p>
        </div>
        <div className='bg-white p-1 w-full flex items-center rounded-3xl'>
            <input type="search" placeholder='Your Email' className='w-full px-2 outline-none'/>
            <div className='bg-blue-600 text-white cursor-pointer h-9 w-9 md:h-12 md:w-12 rounded-full flex items-center justify-center'>
                <VscSend className='text-2xl md:text-3xl'/>
            </div>
        </div>
    </div>
  )
}

export default Newsletter