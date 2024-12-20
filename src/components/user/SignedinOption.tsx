import React from 'react'
import Notification from '../../assets/notification.svg'
import Reservation from '../../assets/reservation.svg'
import Wishlist from '../../assets/wishlist.svg'
import Account from '../../assets/account.svg'
import Logout from '../../assets/logout.svg'
import Profile from '../../assets/profile.svg'

const SignedinOption: React.FC = () => {
  return (
    <div className="bg-white rounded-md py-6 px-3 flex flex-col gap-4 border w-fit text-header-600">
      <div className="flex flex-col gap-1 items-center justify-center px-4 w-full">
        <img src={Profile} alt="" className="w-28" />
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold ">John Doe</p>
          <p className="text-header-400">johndoe@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md">
            <img src={Notification} alt="" />
            <p>Notifications</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md">
            <img src={Reservation} alt="" />
            <p>Reservations</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md">
            <img src={Wishlist} alt="" />
            <p>Wishlists</p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-header-400"></div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md">
            <img src={Account} alt="" />
            <p>Account</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md">
            <img src={Logout} alt="" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedinOption