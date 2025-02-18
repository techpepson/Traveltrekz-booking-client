import React from 'react'
import NavbarHost from '../../components/host/NavbarHost';
import HostAccountImage from '../../components/host/HostAccountImage';
import Footer from '../../components/user/Footer';

const AccountEditHost: React.FC = () => {
  return (
    <>
      <NavbarHost />
      <div className='flex flex-col md:flex-row p-4 max-lg:mt-24 lg:p-16 gap-8 lg:gap-20 w-full'>
        <HostAccountImage />
        <div className="w-full flex flex-col gap-4 text-header-600">
          <div className="flex flex-col gap-0">
            <h1 className="text-2xl font-semibold">Hello, John Doe</h1>
            <p className="text-sm">Joined on Jan 2023</p>
          </div>
          <form action="" className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 ">
              <p className="font-semibold">About</p>
              <textarea
                name=""
                id=""
                rows={3}
                className="border w-full rounded-md p-1 outline-none"
              ></textarea>
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold">Location</p>
                <input
                  type="text"
                  className="border w-full rounded-md p-1 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold">Phone Number</p>
                <input
                  type="text"
                  className="border w-full rounded-md p-1 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Work</p>
              <input
                type="text"
                className="border w-full rounded-md p-1 outline-none"
              />
            </div>
            <div className="w-full flex items-center gap-4 justify-end py-6">
              <button className="font-semibold">Cancel</button>
              <button className="bg-blue-600 py-2 px-5 flex items-center justify-center font-semibold text-white rounded-3xl">
                Save
              </button>
            </div>
          </form>
          <div>
            <h1 className="text-2xl font-semibold">Change Password</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Enter previous password</label>
              <input
                type="password"
                className="border rounded-md w-full p-1 outline-none"
              />
            </div>
            <div className="flex items-center justify-between py-4">
              <p>Forgotten Password? Click here</p>
              <button className="bg-blue-600 py-2 px-5 flex items-center justify-center font-semibold text-white rounded-3xl">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountEditHost