import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaHeart, FaCalendar } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';

const SignedinOption: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-white rounded-md py-6 px-3 flex flex-col gap-4 border w-fit">
      <h1 className="text-xl font-semibold px-4">Account</h1>
      <div className="flex flex-col gap-1">
        <Link
          to="/account"
          className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md"
        >
          <FaUser className="text-gray-600" />
          <p>Profile</p>
        </Link>
        <Link
          to="/wishlist"
          className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md"
        >
          <FaHeart className="text-gray-600" />
          <p>Wishlist</p>
        </Link>
        <Link
          to="/reservation"
          className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md"
        >
          <FaCalendar className="text-gray-600" />
          <p>Reservations</p>
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md w-full text-left text-red-600"
        >
          <IoLogOutOutline className="text-xl" />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default SignedinOption;