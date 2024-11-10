import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Newsletter from "../../components/user/Newsletter";
import Footer from "../../components/user/Footer";
import Property from "../../components/user/Property";
import Filter from "../../assets/filter.svg";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Properties: React.FC = () => {
  const [displayCount, setDisplayCount] = useState(6);

  const loadMoreProperties = () => {
    setDisplayCount((prevCount) => prevCount + 6); // Increase the count by 6 each time
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-sm:mt-10 px-4 md:px-16 pt-8 pb-16">
        <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between py-2 md:py-8">
          <ul className="flex items-center gap-4 md:gap-8 font-semibold">
            <button className="flex items-center md:gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer">
              <GoDotFill />
              Apartment
            </button>
            <button className="flex items-center md:gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer">
              <GoDotFill />
              Houses
            </button>
            <button className="flex items-center md:gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer">
              <GoDotFill />
              Villas
            </button>
            <button className="flex items-center md:gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer">
              <GoDotFill />
              Homestays
            </button>
            <button className="flex items-center md:gap-2 focus:underline  text-header-600 focus:text-blue-600 cursor-pointer">
              <GoDotFill />
              Villas
            </button>
          </ul>
          <div className="py-1 md:py-2 px-2 md:px-4 flex items-center border rounded-3xl gap-1 w-fit cursor-pointer max-sm:mb-2">
            <img src={Filter} alt="filter" className="w-6" />
            <p>Filter</p>
          </div>
        </div>
        <Property displayCount={displayCount} />
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-600 text-white px-2 py-1 rounded-md w-fit mt-8 flex items-center gap-1"
            onClick={loadMoreProperties}
          >
            <MdKeyboardDoubleArrowDown className="text-3xl" /> See More
          </button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Properties;
