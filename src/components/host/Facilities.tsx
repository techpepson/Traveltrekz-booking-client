import React, { useState } from "react";

const Facilities: React.FC = () => {
  const [bedCount, setBedCount] = useState(0);
  const [bathCount, setBathCount] = useState(0);
  const [parkingCount, setParkingCount] = useState(0);

  return (
    <div className="flex items-center gap-16">
      {/* Bedroom */}
      <div className="flex items-center gap-3">
        <div
          onClick={() => bedCount > 0 && setBedCount(bedCount - 1)} // Prevent negative count
          className="rounded-full h-8 flex items-center justify-center cursor-pointer w-8 text-xl font-bold bg-header-200"
        >
          -
        </div>
        <p>{bedCount} Bedrooms</p>
        <div
          onClick={() => setBedCount(bedCount + 1)}
          className="rounded-full h-8 flex items-center justify-center cursor-pointer w-8 text-xl font-bold bg-header-200"
        >
          +
        </div>
      </div>
      {/* Bathroom */}
      <div className="flex items-center gap-3">
        <div
          onClick={() => bathCount > 0 && setBathCount(bathCount - 1)} // Prevent negative count
          className="rounded-full h-8 flex items-center justify-center cursor-pointer w-8 text-xl font-bold bg-header-200"
        >
          -
        </div>
        <p>{bathCount} Bathrooms</p>
        <div
          onClick={() => setBathCount(bathCount + 1)}
          className="rounded-full h-8 flex items-center justify-center cursor-pointer w-8 text-xl font-bold bg-header-200"
        >
          +
        </div>
      </div>
      {/* Parking */}
      <div className="flex items-center gap-3">
        <div
          onClick={() => parkingCount > 0 && setParkingCount(parkingCount - 1)} // Prevent negative count
          className="rounded-full h-8 flex items-center justify-center cursor-pointer w-8 text-xl font-bold bg-header-200"
        >
          -
        </div>
        <p>{parkingCount} Parking</p>
        <div
          onClick={() => setParkingCount(parkingCount + 1)}
          className="rounded-full h-8 flex items-center justify-center cursor-pointer w-8 text-xl font-bold bg-header-200"
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Facilities;
