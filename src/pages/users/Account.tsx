import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'
import AccountImage from '../../components/user/AccountImage'

const Account: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col lg:flex-row max-lg:mt-16 p-4 md:p-16 gap-8'>
            <div className='w-full lg:hidden flex flex-col gap-6'>
                <div className='flex flex-col gap-0 text-header-600'>
                    <h1 className='text-2xl font-semibold'>Hello, John Doe</h1>
                    <p className='text-sm'>Joined on Jan 2023</p>
                </div>
                <button className='border w-fit border-blue-400 py-2 px-5 rounded-md text-blue-400'>Edit Profile</button>
                <div>
                    <p>0 Reviews</p>
                </div>
            </div>
            <AccountImage />
            <div className='w-full max-lg:hidden flex flex-col gap-6'>
                <div className='flex flex-col gap-0 text-header-600'>
                    <h1 className='text-2xl font-semibold'>Hello, John Doe</h1>
                    <p className='text-sm'>Joined on Jan 2023</p>
                </div>
                <button className='border w-fit border-blue-400 py-2 px-5 rounded-md text-blue-400'>Edit Profile</button>
                <div>
                    <p>0 Reviews</p>
                </div>
            </div>
        <div className="text-header-600 bg-blue-200 p-5 rounded-md w-full flex gap-2 flex-col">
          <h1 className="font-semibold text-xl">Personal Details</h1>
          <div>
            <h1 className="text-lg font-semibold">Name</h1>
            <p>John Doe</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Email</h1>
            <p>johndoe@gmail.com</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">About</h1>
            <p>
              Hi, I’m James, a digital marketer who loves exploring new places
              and cultures. I enjoy finding unique, comfortable stays for both
              short trips and extended stays.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Phone Number</h1>
            <p>+233 123456789</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Work</h1>
            <p>Traveler</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Location</h1>
            <p>Accra, Ghana</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account