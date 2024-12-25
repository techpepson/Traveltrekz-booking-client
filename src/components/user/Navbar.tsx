import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import SigninOption from "./SigninOption";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SignedinOption from "./SignedinOption";
import { toast } from "react-toastify";

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleProtectedAction = (path: string) => {
    if (!isAuthenticated) {
      toast.error("Please log in to access this feature");
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <nav className="bg-blue-600 py-4 fixed lg:sticky top-0 z-50 w-full">
      <div className="mx-4 md:mx-10 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 gap-2">
            <div className="lg:hidden md:flex justify-end">
              <button onClick={toggleNavbar} className="text-white">
                {mobileDrawerOpen ? (
                  <AiOutlineClose className="text-3xl font-bold" />
                ) : (
                  <CgMenu className="text-3xl font-bold" />
                )}
              </button>
            </div>
            <a href="/" className="text-xl md:text-2xl font-bold text-white">
              TravelTrekz
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-lg font-medium">
            <Link to="/property" className="text-white hover:text-blue-100">
              Find a Property
            </Link>
            <button
              onClick={() => handleProtectedAction("/stories")}
              className="text-white hover:text-blue-100"
            >
              Share Stories
            </button>
            <Link to="/about" className="text-white hover:text-blue-100">
              About Us
            </Link>
          </div>
          <ul className="flex items-center gap-2 lg:gap-8">
            <Link
              to="/host"
              className="bg-white hidden lg:block text-blue-600 py-1 px-2 md:px-4 md:py-2 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Become A Host
            </Link>
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                role="button"
                className="text-blue-600 bg-white rounded-3xl flex items-center gap-2 text-2xl px-2 py-1 lg:px-3 lg:p-2"
              >
                <RxHamburgerMenu className="font-bold hover:bg-header-200 hover:rounded-full" />
                <FaUserCircle
                  className={
                    isAuthenticated ? "text-blue-600" : "text-gray-300"
                  }
                />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-50 w-52 shadow"
              >
                {isAuthenticated ? <SignedinOption /> : <SigninOption />}
              </ul>
            </div>
          </ul>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed left-0 z-20 w-3/4 h-[95vh] p-12 flex flex-col justify-center items-center bg-blue-600 transition-all duration-300 ease-linear lg:hidden text-white gap-4">
            <Link to="/property" onClick={toggleNavbar}>
              <p>Find A Property</p>
            </Link>
            <button
              onClick={() => {
                toggleNavbar();
                handleProtectedAction("/stories");
              }}
            >
              <p>Share Stories</p>
            </button>
            <Link to="/about" onClick={toggleNavbar}>
              <p>About Us</p>
            </Link>
            <button
              onClick={() => {
                toggleNavbar();
                handleProtectedAction("/host");
              }}
              className="bg-white text-blue-600 py-1 px-2 md:px-4 md:py-2 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Become A Host
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
