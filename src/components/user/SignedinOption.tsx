import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Notification from "../../assets/notification.svg";
import Reservation from "../../assets/reservation.svg";
import Wishlist from "../../assets/wishlist.svg";
import Account from "../../assets/account.svg";
import Logout from "../../assets/logout.svg";
import Profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";
import { getCookie } from "../../utils/cookieGetFunction";

const SignedinOption: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [person, setPerson] = useState<string>(""); // Holds the user's name
  const [personEmail, setPersonEmail] = useState<string>(""); // Holds the user's email
  const [profilePicture, setProfilePicture] = useState<string>(""); // Holds the user's email

  // Fetch cookies when component mounts
  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const visitor = await getCookie(); // Fetch cookies using the API call

        // Update state with data from cookies
        setPerson(visitor.name); // No need for .data.name, already extracted
        setPersonEmail(visitor.email);
        setProfilePicture(visitor.profilePicture);
      } catch (error) {
        console.error("Failed to fetch cookies:", error);
      }
    };

    fetchCookies(); // Call the function inside useEffect
  }, [navigate]); // Empty dependency array to run only once on component mount

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-white rounded-md py-6 px-3 flex flex-col gap-4 border w-fit text-header-600">
      <div className="flex flex-col gap-1 items-center justify-center px-4 w-full">
        <img src={profilePicture} alt="user profile" className="w-28" />
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold ">{person}</p> {/* Display name */}
          <p className="text-header-400">{personEmail}</p> {/* Display email */}
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
          <Link
            to="/account"
            className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md"
          >
            <img src={Account} alt="" />
            <p>Account</p>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md w-full text-left"
          >
            <img src={Logout} alt="" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignedinOption;
