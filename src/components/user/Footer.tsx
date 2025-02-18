import React from "react";
import Playstore from "../../assets/user/playstore.png";
import Appstore from "../../assets/user/appstore.png";
import {Link} from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-600 w-full text-white pt-10 md:pt-20 px-4 md:px-12">
      <div className="gap-4 md:flex md:gap-16 pb-16 md:pb-32 flex-wrap">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-5xl font-bold">TravelTrekz</h1>
            <p className="w-full md:w-[35vw]">
              Your perfect stay awaits — where comfort, luxury, and adventure
              come together.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={Playstore} alt="playstore" className="md:w-44 w-32" />
            <img src={Appstore} alt="playstore" className="md:w-44 w-32" />
          </div>
        </div>
        <div className="flex gap-10 md:gap-20 max-sm:flex-wrap max-sm:pt-8">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="md:text-xl font-semibold">Company</h1>
            <ul className="max-sm:text-sm">
              <Link to='/about'><li>About Us</li></Link>
              <li>Legal Information</li>
              <li>Contact Us</li>
              <Link to='/'><li>Blogs</li></Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="md:text-xl font-semibold">Help Center</h1>
            <ul className="max-sm:text-sm">
              <Link to='/property'><li>Find a Property</li></Link>
              <Link to='/host'><li>How to Host ?</li></Link>
              <Link to='/about'><li>Why Us ?</li></Link>
              <Link to='/help'><li>FAQs</li></Link>
              <li>Rental Guides</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="md:text-xl font-semibold">Contact Info</h1>
            <ul className="max-sm:tet-sm">
              <li>Phone: </li>
              <li>Email: </li>
              <li>Location: </li>
            </ul>
            {/* icons */}
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-white"></div>
      <div className="flex py-2 max-sm:text-sm max-sm:flex-col items-center justify-center">
        <p>&copy; 2024 traveltrekz | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
